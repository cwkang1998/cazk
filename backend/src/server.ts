import express from 'express';
import cors from "cors";
import { buildPoseidon } from 'circomlibjs';
import { ChildNodes, MerkleProof, SparseMerkleTree } from '@zk-kit/sparse-merkle-tree';
import randData from './random-id.json';
import { uint8arrToBigInt } from './utils';

const generateSMTProofFromAgeData = async (
  ageData: { id: string; age: number }[],
  idHashed: bigint
) => {
  const poseidon = await buildPoseidon();

  const hashFn = (cn: ChildNodes) => uint8arrToBigInt(poseidon(cn));
  const smt = new SparseMerkleTree(hashFn, true);

  for (let a of ageData) {
    const identifier = BigInt(a.id);
    const commitment = uint8arrToBigInt(poseidon([identifier]));
    smt.add(commitment, BigInt(a.age));
  }

  const proof = smt.createProof(idHashed);
  return proof;
};

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  const poseidon = await buildPoseidon();
  const hashFn = (cn: ChildNodes) => uint8arrToBigInt(poseidon(cn));
  const globalSmt = new SparseMerkleTree(hashFn, true);

  // --- Remove this in production
  for (let a of randData) {
    const identifier = BigInt(a.id);
    const commitment = uint8arrToBigInt(poseidon([identifier]));
    globalSmt.add(commitment, BigInt(a.age));
  }
  // ---Remove this is production

  app.post('/generate', async (req, res) => {
    const { identifier } = req.body;

    const proof = await globalSmt.createProof(uint8arrToBigInt(poseidon([identifier])));
    console.log(proof);
    return res.json({
      root: proof.root.toString(),
      membership: proof.membership,
      siblings: proof.siblings.map((s) => s.toString()),
      entry: proof.entry.toString(),
      matchingEntry: proof.matchingEntry?.toString()
    });
  });

  app.post('/verify', async (req, res) => {
    const sentProof: MerkleProof = req.body;
    console.log(sentProof);

    const result = await globalSmt.verifyProof({
      root: BigInt(sentProof.root),
      membership: sentProof.membership,
      siblings: sentProof.siblings.map((s) => BigInt(s)),
      entry: sentProof.entry,
      // matchingEntry: sentProof?.matchingEntry ?? (sentProof.matchingEntry as unknown as string).split(",")
    });
    console.log(result);
    return res.json({ success: result });
  });

  app.listen(8080, () => console.log('Server running...'));
};

main().catch((err) => console.error(err));
