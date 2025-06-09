# Enhanced GLEIF Verification Test Suite

## Overview

The Enhanced GLEIF Verification Test Suite provides comprehensive ZK-based compliance verification for GLEIF (Global Legal Entity Identifier Foundation) entities. This advanced system supports multiple verification modes with enhanced scoring, oracle signature validation, and smart contract integration.

## Architecture

The test suite consists of the following components:

### Core Files

1. **`EnhancedGLEIFVerificationTestWithSign.ts`** - Main test orchestrator
2. **`EnhancedGLEIFVerificationTestWithSignUtils.ts`** - Core verification logic
3. **`GLEIFEnhancedZKProgramWithSign.ts`** - ZK program for proof generation
4. **`GLEIFEnhancedVerifierSmartContractWithSign.ts`** - Smart contract for on-chain verification
5. **`run-enhanced-gleif-test.js`** - Node.js test runner

### Supporting Files

- **`GLEIFUtils.ts`** - Data fetching utilities
- **`GLEIFo1.ts`** - Data structure definitions
- **`OracleRegistry.js`** - Oracle key management

## Features

### 🏛️ Standard Verification
- Single company GLEIF compliance verification
- Enhanced scoring based on data completeness and quality
- Real-time risk assessment
- Oracle signature validation

### 🏢 Group Verification
- Multi-company compliance verification
- Aggregated compliance scoring
- Group-level risk assessment
- Cross-company validation

### 📅 Historical Verification
- Time-based compliance tracking
- Historical data validation
- Compliance streak monitoring
- Temporal oracle signatures

### 🔐 Advanced Security
- Cryptographic oracle signatures
- ZK proof generation and verification
- Smart contract state management
- Comprehensive audit trails

## Quick Start

### Basic Usage
```bash
# Standard verification with default settings
npm run test:enhanced-gleif "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED"

# Group verification
npm run test:enhanced-gleif "Company A" TESTNET group "Company B"

# Historical verification (2 years)
npm run test:enhanced-gleif "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" TESTNET historical 730
```

## How to Run the Tests

### Method 1: NPM Scripts (Recommended)

#### Standard Verification
```bash
npm run test:enhanced-gleif "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" TESTNET
```

#### Group Verification
```bash
npm run test:enhanced-gleif "Primary Company" TESTNET group "Secondary Company"
```

#### Historical Verification
```bash
npm run test:enhanced-gleif "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" TESTNET historical 365
```

### Method 2: Direct Node Execution
```bash
npm run test:enhanced-gleif-direct "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" TESTNET
```

### Method 3: Test Runner
```bash
node run-enhanced-gleif-test.js "Company Name" TESTNET
```

## Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `company_name` | ✅ | - | Company name in GLEIF database |
| `network_type` | ❌ | `TESTNET` | `TESTNET`, `LOCAL`, or `PROD` |
| `verification_mode` | ❌ | `standard` | `standard`, `group`, or `historical` |
| `additional_param` | ❌ | - | Secondary company or historical days |

## Expected Output

### Success Example
```
🎉 Enhanced GLEIF Verification Test Completed Successfully!
======================================================================
✅ All verification steps passed
🔐 Oracle signature verified
🧮 ZK proof generated and verified
📝 Smart contract state updated

📄 Verification Results:
   Company: SREE PALANI ANDAVAR AGROS PRIVATE LIMITED
   LEI: 335800XXXXXXXXXXXXXXXX
   Is Compliant: true
   Compliance Score: 85
   Risk Level: 2
   Jurisdiction: IN
```

## Node.js Command Examples

For direct execution without the runner:

### Standard Verification
```bash
node --experimental-vm-modules --experimental-wasm-modules --experimental-wasm-threads --import=./register.js src/tests/with-sign/EnhancedGLEIFVerificationTestWithSign.ts "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" TESTNET
```

### Group Verification
```bash
node --experimental-vm-modules --experimental-wasm-modules --experimental-wasm-threads --import=./register.js src/tests/with-sign/EnhancedGLEIFVerificationTestWithSign.ts "Company A" TESTNET group "Company B"
```

### Historical Verification
```bash
node --experimental-vm-modules --experimental-wasm-modules --experimental-wasm-threads --import=./register.js src/tests/with-sign/EnhancedGLEIFVerificationTestWithSign.ts "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" TESTNET historical 730
```

## Prerequisites

1. **Node.js 18+** with experimental modules support
2. **Environment variables** configured in `.env`
3. **Dependencies installed** via `npm install`

## Environment Setup

```bash
# GLEIF API Endpoints
GLEIF_URL_SANDBOX=https://api.gleif.org/sandbox/...
GLEIF_URL_PROD=https://api.gleif.org/api/v1/...
GLEIF_URL_MOCK=http://localhost:3000/mock/...

# Oracle Configuration
ORACLE_PRIVATE_KEY=...
MINA_NETWORK=testnet
```

## Troubleshooting

### Common Errors

1. **Company Not Found**: Verify company name exists in GLEIF database
2. **Missing Environment Variables**: Check `.env` file configuration
3. **Oracle Signature Failure**: Verify `ORACLE_PRIVATE_KEY` is set
4. **ZK Proof Error**: Ensure sufficient memory (4GB+) available

### Debug Mode
```bash
DEBUG=true npm run test:enhanced-gleif "Company Name" TESTNET
```

## Performance

- **Execution Time**: 30-90 seconds depending on mode
- **Memory**: 4GB+ recommended
- **Network**: Stable internet required for API calls

## Support

For detailed documentation and advanced usage, see the full README in the project root directory.