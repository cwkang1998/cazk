pragma circom 2.0.2;

include "../../circuits/cazk_expiring_on.circom";

component main {public [expiringValue]} = CazkExpiringOn();
