#!/bin/bash

echo "🔍 Finding ALL TypeScript/JavaScript files with potential JS-only edits..."
echo "=================================================================="

WORKING_DIR="C:/SATHYA/CHAINAIM3003/mcp-servers/zk-pret-test-v3.5"
BROKEN_DIR="C:/SATHYA/CHAINAIM3003/mcp-servers/zkpret3.5TSFIX/zk-pret-test-v3.5"

echo "Working directory: $WORKING_DIR"
echo "Broken directory:  $BROKEN_DIR"
echo ""

# Function to compare TypeScript source vs compiled JavaScript
compare_ts_js_consistency() {
    local working_dir="$1"
    local broken_dir="$2"
    
    echo "📋 ANALYSIS REPORT"
    echo "=================="
    
    # Find all TypeScript files in src/
    find "$broken_dir/src" -name "*.ts" -type f | while read ts_file; do
        # Get relative path from src/
        rel_path="${ts_file#$broken_dir/src/}"
        
        # Convert .ts to .js path
        js_rel_path="${rel_path%.ts}.js"
        
        # Full paths
        working_js="$working_dir/build/$js_rel_path"
        broken_js="$broken_dir/build/$js_rel_path"
        working_ts="$working_dir/src/$rel_path"
        broken_ts="$ts_file"
        
        echo ""
        echo "🔍 Checking: $rel_path"
        echo "   TS (working): $([ -f "$working_ts" ] && echo "EXISTS" || echo "MISSING")"
        echo "   TS (broken):  $([ -f "$broken_ts" ] && echo "EXISTS" || echo "MISSING")"
        echo "   JS (working): $([ -f "$working_js" ] && echo "EXISTS" || echo "MISSING")"
        echo "   JS (broken):  $([ -f "$broken_js" ] && echo "EXISTS" || echo "MISSING")"
        
        if [ -f "$working_js" ] && [ -f "$broken_js" ] && [ -f "$working_ts" ] && [ -f "$broken_ts" ]; then
            # Compare file sizes
            working_js_size=$(stat -f%z "$working_js" 2>/dev/null || stat -c%s "$working_js" 2>/dev/null)
            broken_js_size=$(stat -f%z "$broken_js" 2>/dev/null || stat -c%s "$broken_js" 2>/dev/null)
            working_ts_size=$(stat -f%z "$working_ts" 2>/dev/null || stat -c%s "$working_ts" 2>/dev/null)
            broken_ts_size=$(stat -f%z "$broken_ts" 2>/dev/null || stat -c%s "$broken_ts" 2>/dev/null)
            
            echo "   JS Size (working): $working_js_size bytes"
            echo "   JS Size (broken):  $broken_js_size bytes"
            echo "   TS Size (working): $working_ts_size bytes"
            echo "   TS Size (broken):  $broken_ts_size bytes"
            
            # Check if JS files are different but TS files are same
            if ! cmp -s "$working_js" "$broken_js"; then
                echo "   🚨 STATUS: JS FILES DIFFER"
                
                if cmp -s "$working_ts" "$broken_ts"; then
                    echo "   ⚠️  ISSUE: TS files identical but JS files differ!"
                    echo "   📝 ACTION: Need to reverse-engineer JS changes back to TS"
                else
                    echo "   ℹ️  INFO: Both TS and JS files differ (normal)"
                fi
            else
                echo "   ✅ STATUS: JS files identical"
            fi
        else
            echo "   ⚠️  STATUS: Missing files - cannot compare"
        fi
    done
}

# Run the comparison
compare_ts_js_consistency "$WORKING_DIR" "$BROKEN_DIR"

echo ""
echo "🎯 SUMMARY"
echo "=========="
echo "Look for files marked with: '⚠️ ISSUE: TS files identical but JS files differ!'"
echo "These are the files where JavaScript was manually edited without updating TypeScript."
