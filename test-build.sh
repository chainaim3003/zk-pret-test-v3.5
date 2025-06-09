#!/bin/bash

echo "🔨 Building ZK-PRET project..."
echo "📁 Current directory: $(pwd)"

cd "C:\SATHYA\CHAINAIM3003\mcp-servers\zk-pret-test-v3.5"

echo "🏗️ Running TypeScript build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo ""
    echo "🧪 Running original test..."
    node ./build/tests/with-sign/GLEIFVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET"
else
    echo ""
    echo "❌ Build failed!"
    echo "Please check the error messages above."
fi
