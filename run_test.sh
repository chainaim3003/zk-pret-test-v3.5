#!/bin/bash
# Simple test script to run the main test
cd "C:/SATHYA/CHAINAIM3003/mcp-servers/zk-pret-test-v3.5"

echo "Building project..."
npm run build

echo ""
echo "Running the test..."
node --experimental-vm-modules --experimental-wasm-modules ./build/tests/with-sign/MerkleEnhancedGLEIFTestFinal.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" TESTNET FAST

echo ""
echo "Test completed."
