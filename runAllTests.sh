
node ./build/tests/with-sign/CorporateRegistrationOptimSingleCompanyVerificationTestWithSign.js "U01112TZ2022PTC039493"
node ./build/tests/with-sign/EXIMOptimSingleCompanyVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED"
node ./build/tests/with-sign/GLEIFOptimSingleCompanyVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED"


node ./build/tests/with-sign/CorporateRegistrationOptimMultiCompanyVerificationTestWithSign.js "U01112TZ2022PTC039493"
node ./build/tests/with-sign/EXIMOptimMultiCompanyVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED"
node ./build/tests/with-sign/GLEIFOptimMultiCompanyVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED"

node ./build/tests/with-sign/ComposedRecursiveOptim3LevelVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "U01112TZ2022PTC039493" 


node ./build/tests/with-sign/BusinessStandardDataIntegrityVerificationTest.js ./src/data/scf/BILLOFLADING/actualBL1-VALID.json
node ./build/tests/with-sign/BusinessStandardOptimVerificationTest.js ./src/data/scf/BILLOFLADING/actualBL1-VALID.json
node ./build/tests/with-sign/BusinessStdIntegrityOptimMerkleVerificationTestWithSign.js ./src/data/scf/BILLOFLADING/actualBL1-VALID.json

node ./build/tests/with-sign/RiskLiquidityBasel3OptimMerkleVerificationTestWithSign.js 100 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/Basel3/CONFIG/basel3-VALID-1.json

node ./build/tests/with-sign/RiskLiquidityBasel3OptimMerkleVerificationTestWithSign.js 100 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/Basel3/CONFIG/basel3-VALID-2.json

node ./build/tests/with-sign/RiskLiquidityBasel3OptimMerkleVerificationTestWithSign.js 100 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/Basel3/CONFIG/basel3-INVALID-1.json

node ./build/tests/with-sign/RiskLiquidityBasel3OptimMerkleVerificationTestWithSign.js 100 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/Basel3/CONFIG/basel3-VALID-2.json

node ./build/tests/with-sign/RiskLiquidityAdvacnedOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/Advanced/CONFIG/Advanced-VALID-1.json

node ./build/tests/with-sign/RiskLiquidityAdvancedOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/Advanced/CONFIG/Advanced-INVALID-1.json

node ./build/tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/StableCoin/CONFIG/US/StableCoin-VALID-1.json ultra_strict US

node ./build/tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/StableCoin/CONFIG/US/StableCoin-INVALID-1.json ultra_strict US

node ./build/tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/StableCoin/CONFIG/EU/StableCoin-VALID-4.json ultra_strict EU

node ./build/tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/StableCoin/CONFIG/EU/StableCoin-INVALID-4.json ultra_strict EU
