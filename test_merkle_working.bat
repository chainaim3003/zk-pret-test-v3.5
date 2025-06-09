@echo off
echo ================================================
echo MerkleTree-Enhanced GLEIF Test Suite (Fixed)
echo ================================================
echo.

:: Set Node.js memory limit and options
set NODE_OPTIONS=--max-old-space-size=8192 --experimental-vm-modules --experimental-wasm-modules --experimental-wasm-threads

echo Building TypeScript files...
npm run build
if %ERRORLEVEL% neq 0 (
    echo Build failed! Check TypeScript compilation.
    pause
    exit /b 1
)

echo.
echo ================================================
echo TEST 1: FAST MODE (MerkleTree + Smart Contract)
echo ================================================
node ./build/tests/with-sign/MerkleSimpleGLEIFTest.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "FAST"

echo.
echo ================================================  
echo TEST 2: STANDARD MODE (Simplified ZK Program)
echo ================================================
node ./build/tests/with-sign/MerkleSimpleGLEIFTest.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "STANDARD"

echo.
echo ================================================
echo Test Suite Completed!
echo ================================================
echo.
echo Results Summary:
echo - FAST: MerkleTree analysis + smart contract verification
echo - STANDARD: Full test with simplified ZK compilation  
echo.
echo Key Benefits Demonstrated:
echo - MerkleTree field grouping and bundling
echo - Constraint reduction analysis
echo - Privacy-preserving data structure
echo - Production-ready optimization strategy
echo.
pause