# GLEIF ZK Compliance Verification System

## Overview

This is a complete Zero-Knowledge (ZK) proof system for GLEIF (Global Legal Entity Identifier Foundation) compliance verification. The system provides privacy-preserving compliance verification using Mina Protocol's o1js framework.

## 🌟 Key Features

- **Complete GLEIF API Integration**: Fetches real-time compliance data from GLEIF API
- **Merkle Tree Grouping Analysis**: Efficient data structuring for selective disclosure
- **Advanced Business Logic**: Comprehensive compliance rule validation
- **ZK Proof Generation**: Privacy-preserving compliance verification
- **Smart Contract Verification**: On-chain compliance state management
- **Oracle Integration**: Cryptographic attestation of off-chain data

## 🏗️ System Architecture

```
GLEIF API → Business Rules → Merkle Tree → ZK Program → Smart Contract
     ↓            ↓             ↓            ↓            ↓
 Real Data → Compliance → Structured → Privacy → On-chain State
            Analysis      Data        Proofs
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- 8GB+ RAM (for ZK compilation)

### Installation

```bash
# Clone and install dependencies
npm install

# Run complete build and test
npm run build-complete
npm run test-complete-fast
```

### Running Tests

```bash
# Quick test (recommended for development)
npm run test-complete-fast

# Full test with ZK proof generation
npm run test-complete-standard

# Custom company test
node complete-test-runner.mjs "MICROSOFT CORPORATION" TESTNET FAST

# Real GLEIF API test
node complete-test-runner.mjs "APPLE INC" MAINNET STANDARD
```

## 📋 Available Commands

### Build Commands
```bash
npm run build                 # Standard TypeScript build
npm run build-complete        # Complete build with verification
npm run build-smart           # Build with smart precompilation
```

### Test Commands
```bash
npm run test-complete         # Interactive complete test
npm run test-complete-fast    # Fast mode test (no ZK compilation)
npm run test-complete-standard # Full test with ZK proofs
npm run test:merkle-gleif     # Merkle tree specific tests
npm run test:enhanced-gleif   # Enhanced GLEIF tests
```

### ZK Compilation Commands
```bash
npm run smart-precompile      # Smart ZK precompilation
npm run force-precompile      # Force recompilation
npm run check-zk-changes      # Check for source changes
```

## 🧩 System Components

### 1. GLEIF API Integration (`GLEIFUtils.ts`)
- Real-time GLEIF data fetching
- Business rule analysis
- Compliance scoring
- Mock data for development

### 2. Merkle Tree System (`GLEIFStructuredMerkleTree.ts`)
- Structured data organization
- Selective disclosure capabilities
- Group analysis functionality
- Privacy-preserving field access

### 3. ZK Programs
- **Basic GLEIF ZK Program**: Core compliance verification
- **Enhanced GLEIF ZK Program**: Advanced business rules
- **Merkle Enhanced ZK Program**: Tree-based verification

### 4. Smart Contracts
- **GLEIFComplianceVerifier**: Main compliance contract
- **GLEIFEnhancedVerifierSmartContractWithSign**: Enhanced verification

### 5. Oracle System (`OracleRegistry.ts`)
- Cryptographic attestation
- Multi-oracle support
- Signature verification

## 🔍 Workflow Details

### Phase 1: GLEIF API Data Fetching
```typescript
const gleifData = await fetchGLEIFCompanyData("APPLE INC", "TESTNET");
```
- Fetches company data from GLEIF API
- Handles authentication and rate limiting
- Provides mock data for testing

### Phase 2: Business Rules Analysis
```typescript
const analysis = GLEIFBusinessRules.analyzeCompliance(gleifData);
```
- Entity status validation
- Registration status checks
- Conformity flag verification
- Jurisdiction validation
- Address completeness
- Recent update verification

### Phase 3: Merkle Tree Creation
```typescript
const merkleTree = GLEIFMerkleUtils.createFromGLEIFResponse(gleifData);
```
- Structured data organization
- Field bundling for efficiency
- Selective disclosure preparation
- Group relationship analysis

### Phase 4: ZK Proof Generation
```typescript
const proof = await GLEIFEnhancedZKProgram.proveCompliance(
    Field(0),
    complianceData,
    oracleSignature,
    currentTimestamp,
    complianceThreshold,
    riskThreshold
);
```
- Oracle signature verification
- Business rule validation
- Privacy-preserving proof creation
- Public output generation

### Phase 5: Smart Contract Verification
```typescript
await zkApp.verifyGLEIFComplianceWithParams(complianceData, signature);
```
- On-chain proof verification
- State updates
- Event emission
- Audit trail creation

## 🎯 Test Modes

### FAST Mode (Development)
- Skips ZK compilation
- Uses simplified verification
- Quick iteration for development
- ~30 seconds execution time

### STANDARD Mode (Production)
- Full ZK proof generation
- Complete workflow validation
- Production-like testing
- ~5-10 minutes execution time

## 🌐 Network Types

### TESTNET (Recommended)
- Uses mock GLEIF data
- No external API dependencies
- Consistent test results
- Offline development

### MAINNET (Production)
- Real GLEIF API calls
- Internet connection required
- Live compliance data
- Rate limiting considerations

## 🏢 Supported Companies

The system includes test data for:
- Apple Inc
- Microsoft Corporation
- Google
- Amazon
- Tesla
- JP Morgan

Custom companies can be tested with real GLEIF API data.

## 🔧 Configuration

### Environment Variables
```bash
NODE_ENV=test                 # Environment mode
GLEIF_TEST_MODE=FAST         # Test execution mode
GLEIF_NETWORK=TESTNET        # Network type
```

### TypeScript Configuration
- ES2022 module format
- Strict type checking
- o1js compatibility
- Source maps enabled

## 📊 Performance Metrics

### Build Times
- TypeScript compilation: ~30 seconds
- ZK program compilation: ~3-5 minutes
- Smart contract compilation: ~1-2 minutes

### Test Execution Times
- FAST mode: ~30 seconds
- STANDARD mode: ~5-10 minutes

### Resource Requirements
- RAM: 8GB+ (for ZK compilation)
- Storage: 2GB+ (for build artifacts)
- CPU: Multi-core recommended

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   npm run build-complete  # Comprehensive fix
   ```

2. **Import Errors**
   - Check file paths in import statements
   - Verify module exports
   - Run `npm install` to check dependencies

3. **ZK Compilation Errors**
   ```bash
   npm run force-precompile  # Force recompilation
   ```

4. **Test Failures**
   - Check Node.js version (18+)
   - Verify system resources
   - Try FAST mode first

### Debug Commands
```bash
# Check build artifacts
ls -la build/

# Verify dependencies
npm list o1js

# Check for source changes
npm run check-zk-changes

# Run individual components
node build/tests/with-sign/GLEIFUtils.js
```

## 📝 Development Guide

### Adding New Companies
1. Add LEI to `TEST_LEIS` in `GLEIFUtils.ts`
2. Test with TESTNET mode
3. Validate with real API

### Extending Business Rules
1. Modify `GLEIFBusinessRules.analyzeCompliance()`
2. Update compliance scoring logic
3. Add new validation checks

### Custom ZK Programs
1. Create new program in `src/zk-programs/`
2. Follow o1js patterns
3. Add compilation to build scripts

## 🔐 Security Considerations

- Oracle signatures provide cryptographic attestation
- ZK proofs ensure privacy-preserving verification
- Smart contracts maintain immutable audit trails
- Merkle trees enable selective disclosure

## 📄 License

Apache-2.0

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Add comprehensive tests
4. Submit pull request

## 📞 Support

For issues and questions:
- Check troubleshooting guide
- Review error logs
- Test with FAST mode
- Verify system requirements

---

## 🎉 Success! 

Your GLEIF ZK Compliance Verification System is now ready for:
- ✅ Complete GLEIF API integration
- ✅ Merkle tree grouping analysis
- ✅ Business logic validation
- ✅ ZK proof generation
- ✅ Smart contract verification
- ✅ Successful builds

Run `npm run test-complete-fast` to see it in action!
