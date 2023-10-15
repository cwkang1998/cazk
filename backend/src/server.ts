import express from "express";
import { buildPoseidon } from "circomlibjs";
import { ChildNodes, SparseMerkleTree } from "@zk-kit/sparse-merkle-tree";
import randData from "./random-id.json";
import { uint8arrToBigInt } from "./utils";


const generateSMTProofFromAgeData = async (ageData: {id: string, age: number}[], idHashed: bigint) => {
  const poseidon = await buildPoseidon();
  
  const hashFn = (cn: ChildNodes) => uint8arrToBigInt(poseidon(cn));
  const smt = new SparseMerkleTree(hashFn, true);

  for(let a of ageData) {
    const identifier = BigInt(a.id);
    const commitment = uint8arrToBigInt(poseidon([identifier]));
    smt.add(commitment, BigInt(a.age));
  }

  const proof =  smt.createProof(idHashed);
  console.log(await smt.verifyProof(proof));
  return proof;
}


const main = async () => {
  const app = express();
  app.use(express.json());

  const poseidon = await buildPoseidon();
  const hashFn = (cn: ChildNodes) => uint8arrToBigInt(poseidon(cn));
  const globalSmt = new SparseMerkleTree(hashFn, true);

  app.post("/generate", async (req, res) => {
    const {identifier} = req.body;

    const proof =  await globalSmt.createProof(identifier);
    return res.json(proof);
  });

  app.post("/verify", async (req, res) => {
    const sentProof = req.body;

    const result = await globalSmt.verifyProof(sentProof);
    return res.json({"success": result});
  });

  app.listen(8080, () => console.log("Server running..."));
}

main().catch((err) => console.error(err))