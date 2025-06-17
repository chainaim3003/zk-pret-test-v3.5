#!/bin/bash

echo "🔧 Fixing jurisdiction parameter issue..."
echo "📁 Current directory: $(pwd)"

# Clean the build directory
echo "🧹 Cleaning build directory..."
rm -rf build/

# Rebuild the project
echo "🔨 Rebuilding project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
    echo "🧪 Testing the fixed command..."
    node ./build/tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/StableCoin/CONFIG/EU/StableCoin-VALID-5.json ultra_strict EU
else
    echo "❌ Build failed"
    exit 1
fi
