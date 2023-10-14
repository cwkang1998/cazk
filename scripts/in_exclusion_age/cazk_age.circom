pragma circom 2.0.2;

include "../../circuits/cazk_in_exclusion.circom";
include "../../node_modules/circomlib/circuits/comparators.circom";
include "../../node_modules/circomlib/circuits/poseidon.circom";

template CazkAgeInExclusion() {
    // public
	signal input merkleRoot;

	// private
	signal input merkleSiblings[16];
	signal input identifier;
    signal input age;

    // output
    signal output identifierHash;

    component poseidon = Poseidon(1);
    poseidon.inputs[0] <== identifier;
    identifierHash <== poseidon.out;

    // We can now proof exclusion specifically for ages instead of arbritrary data
    component exclusion = CazkInExclusion(16, 1);
    exclusion.merkleRoot <== merkleRoot;
    for (var i=0; i<16; i++) {
		exclusion.merkleSiblings[i] <== merkleSiblings[i];
	}
    exclusion.key <== identifierHash;
    exclusion.value <== age;
}

component main {public [merkleRoot]} = CazkAgeInExclusion();
