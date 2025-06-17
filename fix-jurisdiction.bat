@echo off
echo 🔧 Fixing jurisdiction parameter issue...
echo 📁 Current directory: %cd%

echo 🧹 Cleaning build directory...
rmdir /s /q build 2>nul

echo 🔨 Rebuilding project...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful
    echo 🧪 Testing the fixed command...
    node ./build/tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/StableCoin/CONFIG/EU/StableCoin-VALID-5.json ultra_strict EU
) else (
    echo ❌ Build failed
    exit /b 1
)
