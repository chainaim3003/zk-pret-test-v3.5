@echo off
echo ================================================
echo MerkleTree-Enhanced GLEIF Test Suite
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
echo TEST 1: FAST MODE (Smart Contract Only)
echo ================================================
node ./build/tests/with-sign/MerkleEnhancedGLEIFTest.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "FAST"

echo.
echo ================================================  
echo TEST 2: CORE MODE (Minimal Constraints ~2K)
echo ================================================
node ./build/tests/with-sign/MerkleEnhancedGLEIFTest.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "CORE"

echo.
echo ================================================
echo TEST 3: SELECTIVE MODE (MerkleTree Proofs ~6K) 
echo ================================================
node ./build/tests/with-sign/MerkleEnhancedGLEIFTest.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "SELECTIVE"

echo.
echo ================================================
echo Test Suite Completed!
echo ================================================
echo.
echo Results Summary:
echo - FAST: Smart contract verification only
echo - CORE: Essential compliance with minimal ZK constraints  
echo - SELECTIVE: Full MerkleTree privacy-preserving verification
echo.
pause