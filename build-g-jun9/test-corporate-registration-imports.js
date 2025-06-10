// =================================== Simple Import Test ===================================
// This file tests that all the new CorporateRegistration files can be imported correctly
import { CorporateRegistrationOptim, CORP_REG_MERKLE_TREE_HEIGHT, CORP_REG_FIELD_INDICES } from './zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js';
import { CorporateRegistrationOptimSmartContract } from './contracts/with-sign/CorporateRegistrationOptimSmartContract.js';
import { fetchCorporateRegistrationDataWithFullLogging } from './tests/with-sign/CorporateRegistrationEnhancedUtils.js';
import { getCorporateRegistrationOptimVerification } from './tests/with-sign/CorporateRegistrationOptimVerificationTestWithSign.js';
console.log('✅ All CorporateRegistration imports successful!');
console.log(`📊 Merkle tree height: ${CORP_REG_MERKLE_TREE_HEIGHT}`);
console.log(`📋 Field indices available: ${Object.keys(CORP_REG_FIELD_INDICES).length} fields`);
console.log(`🏢 Sample field indices:`);
console.log(`  companyName: ${CORP_REG_FIELD_INDICES.companyName}`);
console.log(`  CIN: ${CORP_REG_FIELD_INDICES.CIN}`);
console.log(`  companyStatus: ${CORP_REG_FIELD_INDICES.companyStatus}`);
export { CorporateRegistrationOptim, CorporateRegistrationOptimSmartContract, getCorporateRegistrationOptimVerification, fetchCorporateRegistrationDataWithFullLogging };
//# sourceMappingURL=test-corporate-registration-imports.js.map