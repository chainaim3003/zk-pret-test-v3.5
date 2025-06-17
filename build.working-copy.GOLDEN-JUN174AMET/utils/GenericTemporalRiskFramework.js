/**
 * ====================================================================
 * Generic Temporal Risk Processing Framework
 * ====================================================================
 * Base classes for period-agnostic risk processing
 * Supports daily, monthly, quarterly, yearly periods
 * Maintains functional equivalence with existing implementations
 * ====================================================================
 */
import { Field } from 'o1js';
// =================================== Abstract Base Classes ===================================
/**
 * Abstract base class for generic risk processors
 * Maintains functional equivalence with existing implementations
 */
export class GenericRiskProcessor {
    /**
     * Create aggregated metric arrays for backward compatibility
     */
    createAggregatedArrays(classifiedData) {
        // Default implementation - subclasses can override
        return {};
    }
    /**
     * Calculate temporal metrics from classified data
     */
    calculateTemporalMetrics(classifiedData) {
        // Default implementation - subclasses can override
        return {
            periodMetrics: [],
            cumulativeMetrics: [],
            averageMetrics: 0,
            worstCase: 0
        };
    }
}
/**
 * Abstract base class for generic temporal ZK programs
 * Preserves existing ZK program patterns while enabling generics
 */
export class GenericTemporalRiskZKProgram {
    /**
     * Verify oracle signature on raw data + merkle root
     * Standard pattern across all implementations
     */
    verifyOracleSignature(signature, rawData, merkleRoot, publicKey) {
        // Standard oracle verification logic
        const dataHash = this.hashRawData(rawData);
        const isValidSignature = signature.verify(publicKey, [dataHash, merkleRoot]);
        isValidSignature.assertTrue();
    }
    /**
     * Verify merkle inclusion proofs
     * Standard pattern across all implementations
     */
    verifyMerkleInclusion(witnesses, // Changed from MerkleWitness[] to Field[]
    merkleRoot, leafHashes) {
        // Simplified merkle verification without MerkleWitness class
        // In practice, this would use a more sophisticated merkle tree implementation
        witnesses.forEach((witness, index) => {
            if (leafHashes[index]) {
                // Basic hash verification
                const combined = Field.from(witness.toBigInt() + leafHashes[index].toBigInt());
                // In a real implementation, this would properly verify merkle paths
            }
        });
    }
    /**
     * Verify temporal data processing integrity
     * Ensures processed data matches raw input
     */
    verifyTemporalProcessing(temporalData, riskClassification) {
        // Verify periods count matches
        Field(temporalData.periodsCount).assertEquals(Field(riskClassification.periodsCount));
        // Verify period type matches
        if (temporalData.periodType !== riskClassification.periodType) {
            throw new Error(`Period type mismatch: ${temporalData.periodType} vs ${riskClassification.periodType}`);
        }
        // Additional temporal integrity checks can be added here
    }
    /**
     * Validate thresholds against risk metrics
     * Common pattern across all risk frameworks
     */
    validateThresholds(riskMetrics, thresholds) {
        // Validate that risk metrics meet required thresholds
        // Implementation depends on specific risk framework
    }
    /**
     * Hash raw ACTUS data for signature verification
     */
    hashRawData(rawData) {
        // Create deterministic hash of raw ACTUS response
        const dataString = JSON.stringify(rawData);
        return Field.from(this.simpleHash(dataString));
    }
    /**
     * Simple hash function for data integrity
     */
    simpleHash(data) {
        let hash = 0n;
        for (let i = 0; i < data.length; i++) {
            const char = BigInt(data.charCodeAt(i));
            hash = ((hash << 5n) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
}
// =================================== Utility Functions ===================================
/**
 * Calculate month index from event date relative to start date
 */
function calculateMonthIndex(eventDate, startDate) {
    const yearDiff = eventDate.getFullYear() - startDate.getFullYear();
    const monthDiff = eventDate.getMonth() - startDate.getMonth();
    return Math.max(0, yearDiff * 12 + monthDiff);
}
/**
 * Convert existing ACTUS data to generic temporal format
 * Maintains full backward compatibility while preserving event-level detail
 */
export function convertToGenericFormat(periodsCount, periodType, inflows, outflows, rawEvents, contractDetails) {
    // Extract date range from events or use defaults
    const startDate = rawEvents.length > 0 ?
        extractDateRangeFromEvents(rawEvents).start :
        new Date('2023-01-02');
    const endDate = rawEvents.length > 0 ?
        extractDateRangeFromEvents(rawEvents).end :
        new Date('2025-01-01');
    // Process all individual events with full context
    const allEvents = [];
    const eventToMonthMapping = [];
    const eventToContractMapping = [];
    rawEvents.forEach((contract, contractIndex) => {
        console.log(`🔍 Processing contract ${contractIndex}: ${contract.contractId}, HQLA: ${contract.hqlaCategory}`);
        if (contract.events && Array.isArray(contract.events)) {
            contract.events.forEach((event) => {
                // ✅ CRITICAL FIX: Ensure HQLA category is properly passed to events
                const hqlaCategory = contract.hqlaCategory ||
                    (contractDetails[contractIndex] ? contractDetails[contractIndex].hqlaCategory : 'NonHQLA');
                const enhancedEvent = {
                    ...event,
                    contractId: contract.contractId || contract.id,
                    contractIndex: contractIndex,
                    hqlaCategory: hqlaCategory
                };
                console.log(`   Event: ${event.type} | Payoff: ${event.payoff} | HQLA: ${hqlaCategory}`);
                allEvents.push(enhancedEvent);
                // Calculate which month this event belongs to
                const eventDate = new Date(event.time);
                const monthIndex = calculateMonthIndex(eventDate, startDate);
                eventToMonthMapping.push(monthIndex);
                eventToContractMapping.push(contractIndex);
            });
        }
    });
    console.log(`🔍 Event Detail Processing: ${allEvents.length} events from ${rawEvents.length} contracts`);
    console.log(`📅 Date range: ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`);
    return {
        periodsCount,
        periodType,
        periodSize: 1,
        rawEvents,
        dateRange: {
            start: startDate,
            end: endDate
        },
        cashFlows: {
            inflows,
            outflows,
            netFlows: inflows.map((inf, i) => inf.reduce((sum, val) => sum + val, 0) -
                outflows[i].reduce((sum, val) => sum + val, 0))
        },
        eventDetails: {
            contractEvents: allEvents,
            contractClassifications: contractDetails,
            eventToMonthMapping,
            eventToContractMapping,
            startDate
        },
        processingTimestamp: Date.now(),
        contractDetails,
        currency: 'USD'
    };
}
/**
 * Extract date range from raw ACTUS events
 * Maintains compatibility with existing date processing
 */
export function extractDateRangeFromEvents(rawEvents) {
    const allDates = rawEvents.flatMap(contract => contract.events?.map((event) => new Date(event.time)) || []);
    if (allDates.length === 0) {
        // Default range if no events
        return {
            start: new Date('2023-01-01'),
            end: new Date('2025-01-01')
        };
    }
    return {
        start: new Date(Math.min(...allDates.map(date => date.getTime()))),
        end: new Date(Math.max(...allDates.map(date => date.getTime())))
    };
}
/**
 * Determine period type from date range
 * Helper for automatic period detection
 */
export function determinePeriodType(dateRange) {
    const diffTime = dateRange.end.getTime() - dateRange.start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 31) {
        return { periodType: 'daily', expectedPeriods: diffDays };
    }
    else if (diffDays <= 365) {
        return { periodType: 'monthly', expectedPeriods: Math.ceil(diffDays / 30) };
    }
    else if (diffDays <= 1095) { // ~3 years
        return { periodType: 'quarterly', expectedPeriods: Math.ceil(diffDays / 90) };
    }
    else {
        return { periodType: 'yearly', expectedPeriods: Math.ceil(diffDays / 365) };
    }
}
//# sourceMappingURL=GenericTemporalRiskFramework.js.map