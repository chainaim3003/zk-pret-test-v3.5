import { Mina } from 'o1js';
import { ACTUSDatao1 } from '../../zk-programs/with-sign/RiskLiquidityACTUSZKProgram_basel3_Withsign.js';
export declare function getACTUSRiskSimulationData(userLiquidityThreshold_LCR: number, url: string): Promise<ACTUSDatao1>;
export declare function getRiskBasel3WithSign(userLiquidityThreshold_LCR: number, url: string): Promise<Mina.Transaction<true, false>>;
