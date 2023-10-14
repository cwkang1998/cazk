pragma circom 2.0.2;

include "../node_modules/circomlib/circuits/comparators.circom";
include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/smt/smtverifier.circom";


template CazkInExclusion(nLevels, isExclude) {
	// public
	signal input merkleRoot;

	// private
	signal input merkleSiblings[realNLevels];
	signal input keyHash;
	signal input valueHash;

    var realNLevels = nLevels+1;

    // SMT proof generation
    component smtVerifier = SMTVerifier(realNLevels);
    smtVerifier.enabled <== 1;
	smtVerifier.fnc <== isExclude; // 0 for inclusive, 1 for exclusive proof
	smtVerifier.root <== merkleRoot;
    for (var i=0; i<realNLevels; i++) {
		smtVerifier.siblings[i] <== merkleSiblings[i];
	}
	smtVerifier.oldKey <== 0;
	smtVerifier.oldValue <== 0;
	smtVerifier.isOld0 <== 0;
	// key and value should be the same in this case.
	smtVerifier.key <== keyHash;
	smtVerifier.value <== valueHash;
}

