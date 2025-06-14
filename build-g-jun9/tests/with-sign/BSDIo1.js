import { Field, CircuitString } from 'o1js';
import { BusinessStandardDataIntegrityComplianceData } from '../../zk-programs/with-sign/BusinessStandardDataIntegrityZKProgram.js';
export function createComplianceData(evalBLJsonFileName, evalBLJson) {
    const expectedContent = "a(cb|bc)d(ef|f)g";
    return new BusinessStandardDataIntegrityComplianceData({
        businessStandardDataIntegrityEvaluationId: Field(0),
        expectedContent: CircuitString.fromString(expectedContent),
        actualContent: evalBLJson,
        actualContentFilename: evalBLJsonFileName,
    });
}
//# sourceMappingURL=BSDIo1.js.map