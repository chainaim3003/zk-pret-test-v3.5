#!/bin/bash

# Quick Cleanup and Tag v3.5.13 Script
echo "🧹 Quick cleanup and tag v3.5.13..."

# Remove unnecessary files and directories
echo "🗑️  Removing unnecessary files..."

# Old build directories
rm -rf build.backup build-g-jun9 build-imp-good-jun17
rm -rf build.CURRENT-WORKING-JUN174AMET build.GOLDEN-WORKING-JUN174AMET
rm -rf build.working-copy.GOLDEN-JUN174AMET
rm -rf build.proof-test-20250619_224937 build.validation-20250619_230234

# Temporary files
rm -f compilation-report-20250619_215228.txt
rm -f proof-compilation-report-20250619_224937.txt  
rm -f real-compilation-errors-20250619_224458.txt
rm -f typescript-diagnostics-20250619_222825.txt
rm -f typescript-vs-workingcopy-comparison-20250619_230234.md
rm -f tsconfig.proof.json tsconfig.validation.json
rm -f recursion@0.1.5 node
rm -f build-enhanced.js build-optimerkle-custom.js analyze-build.mjs

echo "✅ Cleanup complete"

# Stage all changes (including deletions)
echo "📁 Staging changes..."
git add -A

# Commit
echo "💾 Committing..."
git commit -m "cleanup: removed un-necessary builds and files

🗑️ Cleaned up old build directories, temporary analysis files, and obsolete configs
🎯 Streamlined repository structure for better maintainability"

# Create tag
echo "🏷️  Creating tag..."
git tag -a v3.5.13 -m "removed un-necessary builds and files"

# Push
echo "🚀 Pushing..."
git push origin main
git push origin v3.5.13

echo "🎉 Done! Tag v3.5.13 created - repository cleaned up!"
