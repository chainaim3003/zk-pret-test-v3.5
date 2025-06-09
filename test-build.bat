@echo off
echo 🔨 Building ZK-PRET project...
echo 📁 Current directory: %CD%

cd /d "C:\SATHYA\CHAINAIM3003\mcp-servers\zk-pret-test-v3.5"

echo 🏗️ Running TypeScript build...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Build completed successfully!
    echo.
    echo 🧪 Running original test...
    node ./build/tests/with-sign/GLEIFVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET"
) else (
    echo.
    echo ❌ Build failed!
    echo Please check the error messages above.
)

echo.
echo Press any key to continue...
pause > nul
