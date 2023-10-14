pragma circom 2.0.2;

include "../node_modules/circomlib/circuits/comparators.circom";
include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/smt/smtverifier.circom";


template CazkExclusion(nLevels, isExclude) {
    var realNLevels = nLevels+1;

    // Exclusive proof generation
    component smtClaimExclude = SMTVerifier(realNLevels);
    smtClaimExists.enabled <== 1;
	smtClaimExists.fnc <== isExclude; // 1 for exclusive proofs
    for (var i=0; i<realNLevels; i++) {
		smtClaimExists.siblings[i] <== censusSiblings[i];
	}
	smtClaimExists.oldKey <== 0;
	smtClaimExists.oldValue <== 0;
	smtClaimExists.isOld0 <== 0;
	smtClaimExists.key <== vochainAddr.address;
	smtClaimExists.value <== factoryWeight;
}

