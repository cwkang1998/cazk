pragma circom 2.0.2;

include "../../circuits/cazk_exclusion.circom";

component main {public []} = CazkExclusion(16, 1);
