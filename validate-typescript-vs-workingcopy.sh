#!/bin/bash

# COMPREHENSIVE TYPESCRIPT vs WORKING COPY VALIDATION
# ===================================================
# Compare newly compiled TypeScript with trusted working copy
# to ensure functional equivalence before deployment

echo "🔍 TYPESCRIPT vs WORKING COPY VALIDATION"
echo "========================================"
echo "🎯 Comparing newly compiled TS with trusted working copy JS"
echo "📋 This will tell us if the compiled TS is safe to use"
echo ""

PROJECT_DIR="/c/SATHYA/CHAINAIM3003/mcp-servers/clonetest/zk-pret-test-v3.5"
cd "$PROJECT_DIR" || exit 1

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
VALIDATION_DIR="build.validation-$TIMESTAMP"
COMPARISON_REPORT="typescript-vs-workingcopy-comparison-$TIMESTAMP.md"

echo "🔬 Validation directory: $VALIDATION_DIR"
echo "📄 Comparison report: $COMPARISON_REPORT"
echo ""

# Compile TypeScript to validation directory
echo "🚀 STEP 1: Compiling TypeScript to validation directory"
echo "======================================================"

cat > "tsconfig.validation.json" << EOF
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "$VALIDATION_DIR",
    "rootDir": "src",
    "declaration": false,
    "sourceMap": false,
    "removeComments": false,
    "preserveConstEnums": true
  }
}
EOF

echo "📋 Running TypeScript compilation..."
if npx tsc -p tsconfig.validation.json; then
    echo "✅ TypeScript compilation successful"
    COMPILED_COUNT=$(find "$VALIDATION_DIR" -name "*.js" | wc -l)
    echo "📊 Compiled files: $COMPILED_COUNT"
else
    echo "❌ TypeScript compilation failed"
    exit 1
fi

echo ""
echo "🔍 STEP 2: Comprehensive File-by-File Comparison"
echo "==============================================="

{
    echo "# TypeScript vs Working Copy Validation Report"
    echo "Generated: $(date)"
    echo ""
    echo "## Summary"
    echo "- Validation directory: \`$VALIDATION_DIR\`"
    echo "- Working copy directory: \`build.working-copy\`"
    echo "- TypeScript compiled files: $COMPILED_COUNT"
    
    if [ -d "build.working-copy" ]; then
        WORKING_COUNT=$(find build.working-copy -name "*.js" | wc -l)
        echo "- Working copy files: $WORKING_COUNT"
    else
        echo "- Working copy files: NOT FOUND"
        echo ""
        echo "❌ **ERROR**: build.working-copy directory does not exist!"
        exit 1
    fi
    
    echo ""
    echo "## File-by-File Analysis"
    echo ""
    
    # Initialize counters
    IDENTICAL_COUNT=0
    DIFFERENT_COUNT=0
    MISSING_IN_TS_COUNT=0
    MISSING_IN_WC_COUNT=0
    CRITICAL_DIFFERENCES=0
    
    echo "### Files in Both Locations"
    echo ""
    
    # Compare files that exist in both locations
    find "$VALIDATION_DIR" -name "*.js" | while read ts_file; do
        # Get relative path
        rel_path=${ts_file#$VALIDATION_DIR/}
        wc_file="build.working-copy/$rel_path"
        
        if [ -f "$wc_file" ]; then
            # Files exist in both locations - compare them
            if diff -q "$ts_file" "$wc_file" > /dev/null 2>&1; then
                echo "✅ **IDENTICAL**: \`$rel_path\`"
                echo $((++IDENTICAL_COUNT)) > /tmp/identical_count.tmp
            else
                echo "🔄 **DIFFERENT**: \`$rel_path\`"
                echo $((++DIFFERENT_COUNT)) > /tmp/different_count.tmp
                
                # Get file sizes
                ts_size=$(stat -f%z "$ts_file" 2>/dev/null || stat -c%s "$ts_file" 2>/dev/null || echo "unknown")
                wc_size=$(stat -f%z "$wc_file" 2>/dev/null || stat -c%s "$wc_file" 2>/dev/null || echo "unknown")
                
                echo "  - TypeScript compiled: ${ts_size} bytes"
                echo "  - Working copy: ${wc_size} bytes"
                
                # Check if size difference is significant
                if [ "$ts_size" != "unknown" ] && [ "$wc_size" != "unknown" ]; then
                    size_diff=$((ts_size - wc_size))
                    size_diff_abs=${size_diff#-}  # Absolute value
                    
                    if [ "$size_diff_abs" -gt 1000 ]; then
                        echo "  - ⚠️  **SIGNIFICANT SIZE DIFFERENCE**: ${size_diff} bytes"
                        echo $((++CRITICAL_DIFFERENCES)) > /tmp/critical_count.tmp
                    elif [ "$size_diff_abs" -gt 100 ]; then
                        echo "  - ⚠️  Moderate size difference: ${size_diff} bytes"
                    else
                        echo "  - ✅ Minor size difference: ${size_diff} bytes (likely formatting)"
                    fi
                fi
                
                # Show first few lines of diff for context
                echo "  - **Preview of differences**:"
                echo "    \`\`\`diff"
                diff "$ts_file" "$wc_file" | head -10 | sed 's/^/    /'
                echo "    \`\`\`"
                echo ""
            fi
        else
            echo "🆕 **NEW FILE**: \`$rel_path\` (only in TypeScript compilation)"
            echo $((++MISSING_IN_WC_COUNT)) > /tmp/missing_wc_count.tmp
        fi
    done
    
    # Read final counts
    IDENTICAL_COUNT=$(cat /tmp/identical_count.tmp 2>/dev/null || echo "0")
    DIFFERENT_COUNT=$(cat /tmp/different_count.tmp 2>/dev/null || echo "0")
    MISSING_IN_WC_COUNT=$(cat /tmp/missing_wc_count.tmp 2>/dev/null || echo "0")
    CRITICAL_DIFFERENCES=$(cat /tmp/critical_count.tmp 2>/dev/null || echo "0")
    
    echo ""
    echo "### Files Only in Working Copy"
    echo ""
    
    find build.working-copy -name "*.js" | while read wc_file; do
        rel_path=${wc_file#build.working-copy/}
        ts_file="$VALIDATION_DIR/$rel_path"
        
        if [ ! -f "$ts_file" ]; then
            echo "⚠️ **MISSING FROM TS**: \`$rel_path\` (only in working copy)"
            echo $((++MISSING_IN_TS_COUNT)) > /tmp/missing_ts_count.tmp
        fi
    done
    
    MISSING_IN_TS_COUNT=$(cat /tmp/missing_ts_count.tmp 2>/dev/null || echo "0")
    
    echo ""
    echo "## Statistics"
    echo ""
    echo "| Category | Count | Percentage |"
    echo "|----------|-------|------------|"
    echo "| Identical files | $IDENTICAL_COUNT | $((IDENTICAL_COUNT * 100 / COMPILED_COUNT))% |"
    echo "| Different files | $DIFFERENT_COUNT | $((DIFFERENT_COUNT * 100 / COMPILED_COUNT))% |"
    echo "| New in TypeScript | $MISSING_IN_WC_COUNT | $((MISSING_IN_WC_COUNT * 100 / COMPILED_COUNT))% |"
    echo "| Missing from TypeScript | $MISSING_IN_TS_COUNT | - |"
    echo "| Critical differences | $CRITICAL_DIFFERENCES | - |"
    
    echo ""
    echo "## Assessment"
    echo ""
    
    # Calculate safety score
    SAFE_FILES=$((IDENTICAL_COUNT + MISSING_IN_WC_COUNT))
    SAFETY_PERCENTAGE=$((SAFE_FILES * 100 / COMPILED_COUNT))
    
    echo "### Safety Analysis"
    echo "- **Safe files**: $SAFE_FILES / $COMPILED_COUNT ($SAFETY_PERCENTAGE%)"
    echo "- **Risky files**: $DIFFERENT_COUNT / $COMPILED_COUNT ($((DIFFERENT_COUNT * 100 / COMPILED_COUNT))%)"
    echo "- **Critical issues**: $CRITICAL_DIFFERENCES"
    echo ""
    
    if [ "$SAFETY_PERCENTAGE" -gt 95 ] && [ "$CRITICAL_DIFFERENCES" -eq 0 ]; then
        echo "### ✅ RECOMMENDATION: SAFE TO DEPLOY"
        echo ""
        echo "**The TypeScript compilation is highly compatible with the working copy:**"
        echo "- $SAFETY_PERCENTAGE% of files are safe (identical or new improvements)"
        echo "- No critical size differences detected"
        echo "- Differences are likely minor improvements or formatting"
        echo ""
        echo "**You can confidently switch to pure TypeScript compilation.**"
        
    elif [ "$SAFETY_PERCENTAGE" -gt 80 ] && [ "$CRITICAL_DIFFERENCES" -lt 5 ]; then
        echo "### ⚠️ RECOMMENDATION: MOSTLY SAFE - REVIEW DIFFERENCES"
        echo ""
        echo "**The TypeScript compilation is mostly compatible:**"
        echo "- $SAFETY_PERCENTAGE% of files are safe"
        echo "- $CRITICAL_DIFFERENCES critical differences need review"
        echo "- Consider testing the different files before full deployment"
        echo ""
        echo "**Suggested approach:**"
        echo "1. Review the critical differences listed above"
        echo "2. Test functionality with the different files"
        echo "3. Deploy incrementally if tests pass"
        
    else
        echo "### ❌ RECOMMENDATION: RISKY - INVESTIGATE BEFORE DEPLOYMENT"
        echo ""
        echo "**The TypeScript compilation has significant differences:**"
        echo "- Only $SAFETY_PERCENTAGE% of files are safe"
        echo "- $CRITICAL_DIFFERENCES critical differences detected"
        echo "- $MISSING_IN_TS_COUNT files missing from TypeScript compilation"
        echo ""
        echo "**Required actions:**"
        echo "1. Investigate why files are missing from TypeScript compilation"
        echo "2. Analyze the critical differences in detail"
        echo "3. Fix TypeScript issues before deployment"
    fi
    
    echo ""
    echo "## Your Optimized Files Status"
    echo ""
    
    # Check your specific files
    YOUR_FILES=(
        "tests/with-sign/BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSignUtils.js"
        "utils/optimerkle/MerkleTreeManager.js"
        "zk-programs/with-sign/BusinessProcessIntegrityOptimMerkleZKProgramWithSign.js"
    )
    
    for file in "${YOUR_FILES[@]}"; do
        ts_file="$VALIDATION_DIR/$file"
        wc_file="build.working-copy/$file"
        
        echo "### \`$file\`"
        
        if [ -f "$ts_file" ]; then
            echo "- ✅ TypeScript compilation: SUCCESS"
            
            if [ -f "$wc_file" ]; then
                if diff -q "$ts_file" "$wc_file" > /dev/null 2>&1; then
                    echo "- ✅ Comparison: IDENTICAL to working copy"
                else
                    echo "- 🔄 Comparison: DIFFERENT from working copy"
                    echo "- 💡 This is expected - your optimized version should be different!"
                fi
            else
                echo "- 🆕 Comparison: NEW FILE (not in working copy)"
                echo "- 💡 This is expected - your new optimization!"
            fi
        else
            echo "- ❌ TypeScript compilation: FAILED"
        fi
        echo ""
    done
    
    echo ""
    echo "## Next Steps"
    echo ""
    
    if [ "$SAFETY_PERCENTAGE" -gt 95 ]; then
        echo "1. **Deploy with confidence**: Run \`./deploy-pure-typescript-build.sh\`"
        echo "2. **Test critical functionality**: Verify your key features work"
        echo "3. **Monitor for issues**: Watch for any unexpected behavior"
    else
        echo "1. **Review differences**: Examine the files marked as different"
        echo "2. **Run functionality tests**: Test critical features with new compilation"
        echo "3. **Fix issues**: Address any problems found"
        echo "4. **Re-run validation**: Run this script again after fixes"
    fi
    
    echo ""
    echo "## Cleanup Commands"
    echo ""
    echo "\`\`\`bash"
    echo "# Remove validation files when done:"
    echo "rm -rf $VALIDATION_DIR"
    echo "rm tsconfig.validation.json"
    echo "rm $COMPARISON_REPORT"
    echo "rm /tmp/identical_count.tmp /tmp/different_count.tmp /tmp/missing_wc_count.tmp /tmp/missing_ts_count.tmp /tmp/critical_count.tmp"
    echo "\`\`\`"
    
} > "$COMPARISON_REPORT"

echo "✅ Comprehensive comparison complete!"
echo "📄 Detailed report: $COMPARISON_REPORT"
echo ""

# Show quick summary
echo "📊 QUICK SUMMARY:"
echo "================="

IDENTICAL_FINAL=$(grep "IDENTICAL" "$COMPARISON_REPORT" | wc -l)
DIFFERENT_FINAL=$(grep "DIFFERENT" "$COMPARISON_REPORT" | wc -l)
NEW_FINAL=$(grep "NEW FILE" "$COMPARISON_REPORT" | wc -l)

echo "✅ Identical files: $IDENTICAL_FINAL"
echo "🔄 Different files: $DIFFERENT_FINAL"  
echo "🆕 New files: $NEW_FINAL"

TOTAL_COMPARED=$((IDENTICAL_FINAL + DIFFERENT_FINAL + NEW_FINAL))
if [ "$TOTAL_COMPARED" -gt 0 ]; then
    SAFETY_FINAL=$((((IDENTICAL_FINAL + NEW_FINAL) * 100) / TOTAL_COMPARED))
    echo "🎯 Safety score: $SAFETY_FINAL%"
    
    if [ "$SAFETY_FINAL" -gt 95 ]; then
        echo "🎉 RESULT: SAFE TO DEPLOY!"
    elif [ "$SAFETY_FINAL" -gt 80 ]; then
        echo "⚠️  RESULT: MOSTLY SAFE - REVIEW NEEDED"
    else
        echo "❌ RESULT: RISKY - INVESTIGATION REQUIRED"
    fi
fi

echo ""
echo "📖 Read the full report for detailed analysis: $COMPARISON_REPORT"
