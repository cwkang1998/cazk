pragma circom 2.0.2;

include "../node_modules/circomlib/circuits/comparators.circom";
include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/smt/smtverifier.circom";


template CazkInExclusion(nLevels, isExclude) {
    // var realNLevels = nLevels+1;
	
	// public
	signal input merkleRoot;

	// private
	signal input merkleSiblings[nLevels];
	signal input key;
	signal input value;


    // SMT proof generation
    component smtVerifier = SMTVerifier(nLevels);
    smtVerifier.enabled <== 1;
	smtVerifier.fnc <== isExclude; // 0 for inclusive, 1 for exclusive proof
	smtVerifier.root <== merkleRoot;
    for (var i=0; i<nLevels; i++) {
		smtVerifier.siblings[i] <== merkleSiblings[i];
	}
	smtVerifier.oldKey <== 0;
	smtVerifier.oldValue <== 0;
	smtVerifier.isOld0 <== 0;
	
	smtVerifier.key <== key;
	smtVerifier.value <== value;
}

