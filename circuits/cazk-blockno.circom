pragma circom 2.0.2;

include "../../node_modules/circomlib/circuits/comparators.circom";


template CazkBlockNo(isGreaterThan) {
    // Private input
    signal secret;

    // Public input
    signal secretHash;

    // Output

    if(isGreaterThan == 1) {
        component gt = GreaterThan(20)
    } else {
        component lt = LesserThan(20)
    }
}

