#!/bin/bash

# TypeScript Compilation Diagnostics - READ ONLY ANALYSIS
# ======================================================
# This script performs comprehensive diagnostics without modifying any files

echo "🔍 TYPESCRIPT COMPILATION DIAGNOSTICS"
echo "====================================="
echo "📋 READ-ONLY ANALYSIS - NO FILES WILL BE MODIFIED"
echo ""

# Set project directory
PROJECT_DIR="/c/SATHYA/CHAINAIM3003/mcp-servers/clonetest/zk-pret-test-v3.5"

# Change to project directory
echo "📁 Navigating to project directory..."
cd "$PROJECT_DIR" || {
    echo "❌ Error: Could not navigate to project directory: $PROJECT_DIR"
    exit 1
}

echo "✅ Current directory: $(pwd)"
echo ""

# Create timestamped diagnostic report
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DIAGNOSTIC_FILE="typescript-diagnostics-$TIMESTAMP.txt"

echo "📄 Creating diagnostic report: $DIAGNOSTIC_FILE"
echo ""

# Start diagnostic report
{
    echo "🔍 TYPESCRIPT COMPILATION DIAGNOSTICS"
    echo "====================================="
    echo "Generated: $(date)"
    echo "Directory: $(pwd)"
    echo ""

    # Check Node.js and TypeScript versions
    echo "🔧 ENVIRONMENT CHECK:"
    echo "===================="
    echo "Node.js version: $(node --version 2>/dev/null || echo 'NOT FOUND')"
    echo "npm version: $(npm --version 2>/dev/null || echo 'NOT FOUND')"
    echo "TypeScript version: $(npx tsc --version 2>/dev/null || echo 'NOT FOUND')"
    echo ""

    # Check TypeScript configuration
    echo "📋 TYPESCRIPT CONFIGURATION:"
    echo "============================"
    if [ -f "tsconfig.json" ]; then
        echo "✅ tsconfig.json found"
        echo "Configuration contents:"
        cat tsconfig.json
    else
        echo "❌ tsconfig.json NOT FOUND"
    fi
    echo ""

    # Check package.json for dependencies
    echo "📦 PACKAGE DEPENDENCIES:"
    echo "========================"
    if [ -f "package.json" ]; then
        echo "✅ package.json found"
        echo ""
        echo "TypeScript-related dependencies:"
        grep -A 20 -B 5 '"typescript"' package.json || echo "TypeScript not found in dependencies"
        echo ""
        echo "o1js dependency:"
        grep -A 5 -B 5 '"o1js"' package.json || echo "o1js not found in dependencies"
        echo ""
        echo "Dev dependencies section:"
        sed -n '/"devDependencies"/,/}/p' package.json
    else
        echo "❌ package.json NOT FOUND"
    fi
    echo ""

    # Run TypeScript compilation with detailed error reporting
    echo "🚨 TYPESCRIPT COMPILATION ERRORS:"
    echo "================================="
    echo "Running: npx tsc --noEmit --listFiles"
    echo ""
    
    # Capture TypeScript compilation output
    npx tsc --noEmit --listFiles 2>&1 || echo "TypeScript compilation completed with errors"
    
    echo ""
    echo "🔍 DETAILED ERROR ANALYSIS:"
    echo "=========================="
    echo "Running: npx tsc --noEmit --pretty --verbose"
    echo ""
    
    npx tsc --noEmit --pretty --verbose 2>&1 || echo "Detailed compilation completed"
    
    echo ""
    echo "📊 PROJECT STRUCTURE ANALYSIS:"
    echo "=============================="
    echo ""
    echo "Source directory structure:"
    find src -name "*.ts" | head -20
    echo ""
    echo "Total TypeScript files: $(find src -name "*.ts" | wc -l)"
    echo ""
    
    # Check for common problematic imports
    echo "🔍 IMPORT ANALYSIS:"
    echo "=================="
    echo ""
    echo "Checking for problematic import patterns..."
    echo ""
    echo "Files with 'o1js' imports:"
    grep -r "from 'o1js'" src/ | wc -l
    echo ""
    echo "Files with relative imports:"
    grep -r "from '\.\." src/ | wc -l
    echo ""
    echo "Files with absolute imports:"
    grep -r "from '/@" src/ | wc -l
    echo ""
    
    # Check for common error patterns
    echo "🎯 COMMON ERROR PATTERN ANALYSIS:"
    echo "================================="
    echo ""
    echo "Files potentially using old o1js syntax:"
    grep -r "import.*{.*Field.*}.*from.*o1js" src/ | wc -l
    echo ""
    echo "Files with potential path mapping issues:"
    grep -r "from '@/" src/ | wc -l
    echo ""
    
    # Check node_modules
    echo "📁 NODE_MODULES CHECK:"
    echo "====================="
    echo ""
    if [ -d "node_modules" ]; then
        echo "✅ node_modules directory exists"
        echo "o1js installation:"
        if [ -d "node_modules/o1js" ]; then
            echo "✅ o1js is installed"
            echo "o1js version: $(cat node_modules/o1js/package.json | grep '"version"' | head -1)"
        else
            echo "❌ o1js is NOT installed"
        fi
        echo ""
        echo "TypeScript installation:"
        if [ -d "node_modules/typescript" ]; then
            echo "✅ TypeScript is installed"
            echo "TypeScript version: $(cat node_modules/typescript/package.json | grep '"version"' | head -1)"
        else
            echo "❌ TypeScript is NOT installed locally"
        fi
    else
        echo "❌ node_modules directory does not exist"
        echo "Run 'npm install' to install dependencies"
    fi
    echo ""
    
    echo "🏁 DIAGNOSTIC COMPLETE"
    echo "====================="
    echo "Report saved to: $DIAGNOSTIC_FILE"
    
} > "$DIAGNOSTIC_FILE" 2>&1

# Display summary to console
echo "📊 DIAGNOSTIC SUMMARY:"
echo "====================="
echo ""

# Extract key findings from the diagnostic file
echo "🔧 Environment Status:"
if grep -q "NOT FOUND" "$DIAGNOSTIC_FILE"; then
    echo "⚠️  Some tools are missing - check environment section"
else
    echo "✅ Basic tools are available"
fi

echo ""
echo "📋 Configuration Status:"
if grep -q "tsconfig.json found" "$DIAGNOSTIC_FILE"; then
    echo "✅ TypeScript configuration exists"
else
    echo "❌ TypeScript configuration missing"
fi

echo ""
echo "📦 Dependencies Status:"
if grep -q "o1js is installed" "$DIAGNOSTIC_FILE"; then
    echo "✅ o1js dependency is installed"
else
    echo "❌ o1js dependency issue detected"
fi

echo ""
echo "🚨 Error Analysis:"
ERROR_COUNT=$(grep -c "error TS" "$DIAGNOSTIC_FILE" 2>/dev/null || echo "0")
echo "   TypeScript errors detected: $ERROR_COUNT"

WARNING_COUNT=$(grep -c "warning TS" "$DIAGNOSTIC_FILE" 2>/dev/null || echo "0")
echo "   TypeScript warnings detected: $WARNING_COUNT"

echo ""
echo "📄 Full diagnostic report available in: $DIAGNOSTIC_FILE"
echo ""
echo "🔍 To view specific sections:"
echo "   grep 'COMPILATION ERRORS:' -A 50 $DIAGNOSTIC_FILE"
echo "   grep 'IMPORT ANALYSIS:' -A 20 $DIAGNOSTIC_FILE"
echo "   grep 'error TS' $DIAGNOSTIC_FILE"
echo ""
echo "📋 Next steps:"
echo "   1. Review the full diagnostic report"
echo "   2. Focus on the most common error patterns"
echo "   3. Check dependency versions and compatibility"
echo "   4. Verify import paths and module resolution"
echo ""
echo "🎯 Analysis complete - no files were modified!"
