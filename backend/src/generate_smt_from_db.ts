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
  const poseidon = await buildPoseidon();

  // const exampleData = "0x4d96cbabac6e335218fab4ada0473aa8a187c227";
  const exampleData = "0x7Cb241b2A896469A067a7DA5Ebd1D1974e5278C7";
  console.log(BigInt(exampleData))
  const exampleDataHashed = uint8arrToBigInt(poseidon([BigInt(exampleData)]));
  console.log(exampleDataHashed)

  const result = await generateSMTProofFromAgeData(randData, exampleDataHashed);
  console.log(result);
};

main().then(() => console.log("complete"));