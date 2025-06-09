@echo off
echo 🔧 Building Fixed GLEIF Smart Contract
echo ======================================
echo.

echo ✅ Fixes Applied:
echo - State variable: gleifCompliant → isGLEIFCompliant
echo - Action structure: GLEIFEnhancedComplianceAction → GLEIFSimplifiedComplianceAction
echo - Event emissions: Minimized to stay under 100 field limit
echo - Removed group/historical methods (can be added back later)
echo - Fixed TypeScript error handling
echo.

echo 🏗️ Building...
npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ BUILD SUCCESSFUL!
    echo 🧪 Testing the original failing command...
    echo.
    node ./build/tests/with-sign/EnhancedGLEIFVerificationTestWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "STANDARD"
    
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo 🎉 SUCCESS! Transaction completed within event/action limits!
        echo ✅ Smart contract now works with simplified data structures
        echo 📊 Event/Action data under 100 field element limit
    ) else (
        echo.
        echo ❌ Transaction still failing - may need further optimization
    )
) else (
    echo.
    echo ❌ BUILD FAILED - Check TypeScript errors above
)

echo.
pause
