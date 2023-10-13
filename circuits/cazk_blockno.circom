pragma circom 2.0.2;

include "../node_modules/circomlib/circuits/comparators.circom";
include "../node_modules/circomlib/circuits/poseidon.circom";


template CazkBlockNo(isGreaterThan) {
    // Private input
    signal input secret;
    signal input blockNoWhenProven;

    // Public input
    signal input secretHash;
    signal input currentBlockNo;
    signal input acceptedRange;

    // Compute secret hash
    component poseidon = Poseidon(1);
    poseidon.inputs[0] <== secret;
    signal computedHash;
    computedHash <== poseidon.out;

    // Assertion 1
    secretHash === computedHash;

    component lt = LessEqThan(20);
    lt.in[0] <== blockNoWhenProven + acceptedRange;
    lt.in[1] <== currentBlockNo;

    // Is current block number > or < block number proven
    // if isGreaterThan, then is currentBlockNo > blockNoWhenProven + acceptedRange
    // if not, then is currentBlockNo < blockNoWhenProven + acceptedRange
    lt.out === isGreaterThan;
}

