import { buildPoseidon } from "circomlibjs";
import { IncrementalMerkleTree, Node } from "@zk-kit/incremental-merkle-tree";
import randData from "./random-id.json";
import { uint8arrToBigInt } from "./utils";

const generateMerkleTreeProof = async (ageData: {id: string, age: number}[], id: bigint) => {
  const poseidon = await buildPoseidon();
  
  const hashFn = (node: Node) => uint8arrToBigInt(poseidon(node));
  
  const mt = new IncrementalMerkleTree(hashFn, 16, BigInt(0), 2);

  for(let a of ageData) {
    // Since this is raw data, we want to change it to use commitment
    // Commitment for this will be poseidon id + age
    const identifier = BigInt(a.id);
    mt.insert(identifier);
  }

  const idHashed = BigInt(id);
  const myNode = mt.indexOf(idHashed);

  const proof =  mt.createProof(myNode);
  console.log(await mt.verifyProof(proof));
  return proof;
}


const main = async () => {
  const poseidon = await buildPoseidon();

  const exampleData = "0x4d96cbabac6e335218fab4ada0473aa8a187c227";
  // const exampleData = "0x7Cb241b2A896469A067a7DA5Ebd1D1974e5278C7";

  const result = await generateMerkleTreeProof(randData, BigInt(exampleData));
  result.siblings = result.siblings.map(s => s[0]);
  console.log(result);
};

main().then(() => console.log("complete"));