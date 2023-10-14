export const uint8arrToBigInt = (arr: Uint8Array): bigint => {
  const hexString = `0x${Buffer.from(arr).toString("hex")}`;
  return BigInt(hexString);
}