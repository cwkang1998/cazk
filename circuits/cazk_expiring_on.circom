pragma circom 2.0.2;

include "../node_modules/circomlib/circuits/poseidon.circom";


template CazkExpiringOn() {
    // Private input
    signal input secret;

    // Public input
    signal input expiringValue;

    // Output
    signal output commitment;

    // Compute secret hash
    component poseidon = Poseidon(2);
    poseidon.inputs[0] <== secret;
    poseidon.inputs[1] <== expiringValue;

    commitment <== poseidon.out;
}
