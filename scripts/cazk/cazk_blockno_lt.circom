pragma circom 2.0.2;

include "../../circuits/cazk_blockno.circom";

component main {public [secretHash, currentBlockNo, acceptedRange]} = CazkBlockNo(0);
