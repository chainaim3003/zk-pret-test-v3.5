#!/bin/bash

# ================================================================
# GIT WORKFLOW: Create Tag v3.5.13 - Cleanup Unnecessary Files
# Tag: v3.5.13
# Description: removed un-necessary builds and files
# ================================================================

echo "🧹 Creating Git Tag v3.5.13 - Cleanup Unnecessary Files"
echo "=" | tr '=' '=' | head -c 70; echo ""

# Step 1: Remove unnecessary build directories and files
echo "🗑️  Removing unnecessary build directories and files..."

# Remove old build directories
rm -rf build.backup
rm -rf build-g-jun9
rm -rf build-imp-good-jun17
rm -rf build.CURRENT-WORKING-JUN174AMET
rm -rf build.GOLDEN-WORKING-JUN174AMET
rm -rf build.working-copy.GOLDEN-JUN174AMET
rm -rf build.proof-test-20250619_224937
rm -rf build.validation-20250619_230234

echo "✅ Removed old build directories"

# Remove temporary analysis files
rm -f compilation-report-20250619_215228.txt
rm -f proof-compilation-report-20250619_224937.txt
rm -f real-compilation-errors-20250619_224458.txt
rm -f typescript-diagnostics-20250619_222825.txt
rm -f typescript-vs-workingcopy-comparison-20250619_230234.md

echo "✅ Removed temporary analysis files"

# Remove unnecessary config files
rm -f tsconfig.proof.json
rm -f tsconfig.validation.json

echo "✅ Removed temporary config files"

# Remove generated files
rm -f recursion@0.1.5
rm -f node

echo "✅ Removed generated files"

# Remove old build scripts (keep the main ones)
rm -f build-enhanced.js
rm -f build-optimerkle-custom.js
rm -f analyze-build.mjs

echo "✅ Removed old build scripts"

# Step 2: Add files to git (this stages the deletions)
echo "📁 Staging file deletions..."

git add -A

echo "✅ Staged all changes (including deletions)"

# Step 3: Show what will be committed
echo ""
echo "📋 Changes to be committed:"
echo "=" | tr '=' '=' | head -c 50; echo ""

git status --staged

echo ""
echo "🔍 Review the changes above. Press Enter to continue or Ctrl+C to abort..."
read -r

# Step 4: Create the commit
echo "💾 Creating commit..."

git commit -m "cleanup: removed un-necessary builds and files

🗑️ Removed:
- Old build directories (build.backup, build-g-jun9, etc.)
- Temporary analysis reports and logs
- Obsolete config files (tsconfig.proof.json, tsconfig.validation.json)  
- Generated artifacts (recursion@0.1.5, node)
- Unused build scripts (build-enhanced.js, build-optimerkle-custom.js)

🎯 Benefits:
- Cleaner repository structure
- Reduced repository size
- Focus on essential files only
- Improved maintainability"

if [ $? -eq 0 ]; then
    echo "✅ Commit created successfully"
else
    echo "❌ Commit failed"
    exit 1
fi

# Step 5: Create the tag
echo "🏷️  Creating tag v3.5.13..."

git tag -a v3.5.13 -m "removed un-necessary builds and files

🧹 Repository Cleanup:
• Removed obsolete build directories and temporary files
• Cleaned up old analysis reports and logs  
• Eliminated unused configuration files
• Streamlined repository structure

🎯 Impact:
• Cleaner, more maintainable codebase
• Reduced repository bloat
• Focus on essential TypeScript optimizations
• Improved developer experience"

if [ $? -eq 0 ]; then
    echo "✅ Tag v3.5.13 created successfully"
else
    echo "❌ Tag creation failed"
    exit 1
fi

# Step 6: Push to main branch
echo "🚀 Pushing to main branch..."

git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to main branch"
else
    echo "❌ Push to main failed"
    exit 1
fi

# Step 7: Push the tag
echo "🏷️  Pushing tag v3.5.13..."

git push origin v3.5.13

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed tag v3.5.13"
else
    echo "❌ Tag push failed"
    exit 1
fi

# Step 8: Verification
echo ""
echo "🎉 SUCCESS! Cleanup workflow completed"
echo "=" | tr '=' '=' | head -c 50; echo ""

echo "📊 Summary:"
echo "✅ Cleaned up unnecessary files and directories"
echo "✅ Created tag v3.5.13"
echo "✅ Pushed to main branch"
echo "✅ Pushed tag to remote"

echo ""
echo "🔍 Verify your work:"
echo "   git log --oneline -3"
echo "   git tag"
echo "   ls -la | grep build"

echo ""
echo "🧹 Repository is now clean and streamlined with tag v3.5.13!"
