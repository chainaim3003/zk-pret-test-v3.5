#!/bin/bash

# Script to verify the TypeScript build fix

echo "🔧 TypeScript vs JavaScript Fix Verification"
echo "=============================================="

# Navigate to project directory
cd "C:/SATHYA/CHAINAIM3003/mcp-servers/clonetest2/zk-pret-test-v3.5"

echo ""
echo "📍 Current directory: $(pwd)"
echo ""

# Step 1: Check TypeScript compilation
echo "🔨 Step 1: Running TypeScript compilation..."
echo "--------------------------------------------"

npm run build

if [ $? -eq 0 ]; then
    echo "✅ TypeScript compilation successful!"
    echo ""
    
    # Step 2: Check if build files were created
    echo "📁 Step 2: Verifying build files..."
    echo "-----------------------------------"
    
    if [ -d "build" ]; then
        echo "✅ Build directory exists"
        
        # Check for specific compiled files
        if [ -f "build/tests/with-sign/ComposedRecursiveOptim3LevelVerificationTestWithSignUtils.js" ]; then
            echo "✅ Utils file compiled successfully"
        else
            echo "❌ Utils file not found in build"
        fi
        
        if [ -f "build/tests/with-sign/ComposedRecursiveOptim3LevelSmartContractWithSign.js" ]; then
            echo "✅ Smart contract file compiled successfully"
        else
            echo "❌ Smart contract file not found in build"
        fi
        
        echo ""
        echo "📊 Build directory contents:"
        ls -la build/tests/with-sign/ | grep -E "(ComposedRecursive|Composed.*js$)" | head -5
        
    else
        echo "❌ Build directory not found"
    fi
    
    echo ""
    echo "🎯 Next Steps:"
    echo "1. Run the composed proof test:"
    echo "   npm run test:complete-fast"
    echo ""
    echo "2. Or run directly:"
    echo "   node build/tests/with-sign/ComposedRecursiveOptim3LevelVerificationTestWithSign.js \"SREE PALANI ANDAVAR AGROS PRIVATE LIMITED\" \"U01112TZ2022PTC039493\" LOCAL 1"
    echo ""
    echo "✅ Fix appears to be successful! Ready for testing."
    
else
    echo "❌ TypeScript compilation failed!"
    echo ""
    echo "🔍 Common issues to check:"
    echo "1. Make sure all imports are correct"
    echo "2. Verify o1js version compatibility"
    echo "3. Check for any remaining type mismatches"
    echo ""
    echo "📝 Try running with verbose output:"
    echo "   npx tsc --noEmit --verbose"
fi

echo ""
echo "=============================================="
echo "🏁 Build verification complete"