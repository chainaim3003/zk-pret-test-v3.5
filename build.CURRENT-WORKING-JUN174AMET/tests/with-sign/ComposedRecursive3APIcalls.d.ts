import { ComplianceData } from './CorporateRegistrationo1.js';
import { EXIMComplianceDataO1 } from './EXIMo1.js';
import { GLEIFComplianceDataO1 } from './GLEIFo1.js';
export declare function fetchMCAData(): Promise<ComplianceData>;
export declare function fetchEXIMData(): Promise<EXIMComplianceDataO1>;
export declare function fetchGLEIFData(): Promise<GLEIFComplianceDataO1>;
