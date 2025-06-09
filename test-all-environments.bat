@echo off
echo 🔄 Testing GLEIF API with REAL API calls for ALL environments...
echo 📍 Current directory: %CD%

cd /d "C:\SATHYA\CHAINAIM3003\mcp-servers\zk-pret-test-v3.5"

echo 🏗️ Running TypeScript build...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Build completed successfully!
    echo.
    echo 🧪 Testing GLEIF API behavior for ALL environments:
    echo ================================================
    echo 📋 Test 1: TESTNET (should try real API first, then fallback)
    echo ================================================
    node ./build/tests/with-sign/GLEIFVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET"
    echo.
    echo ================================================
    echo 📋 Test 2: LOCAL (should try real API first, then fallback)
    echo ================================================
    node ./build/tests/with-sign/GLEIFVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "LOCAL"
    echo.
    echo ================================================
    echo 📋 Test 3: MAINNET (should try real API first, then fallback)
    echo ================================================
    node ./build/tests/with-sign/GLEIFVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "MAINNET"
    echo.
    echo ================================================
    echo 📋 Test 4: Known company test (should potentially find real data)
    echo ================================================
    node ./build/tests/with-sign/GLEIFVerificationTestWithSign.js "APPLE INC" "TESTNET"
) else (
    echo.
    echo ❌ Build failed!
    echo Please check the error messages above.
)

echo.
echo 📊 Summary: All environments now attempt real GLEIF API calls first!
echo Press any key to continue...
pause > nul
