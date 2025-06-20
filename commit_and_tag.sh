#!/bin/bash

# Navigate to project directory
cd "C:\SATHYA\CHAINAIM3003\mcp-servers\clonetest\zk-pret-test-v3.5"

echo "=========================================="
echo "  GIT COMMIT & TAG CREATION SCRIPT"
echo "=========================================="
echo ""

echo "=== Step 1: Repository Assessment ==="
echo "Current git status:"
git status --porcelain
echo ""

echo "Recent tags:"
git tag -l --sort=-v:refname | head -5
echo ""

echo "=== Step 2: Verify New Files ==="
echo "Healthcare BPMN files:"
ls -la src/data/healthcare/process/
echo ""

echo "RunAllTests files:"
ls -la src/tests/with-sign/*runAllTests* 2>/dev/null || echo "No runAllTests files in src"
ls -la *runAllTests* 2>/dev/null || echo "No runAllTests files in root"
echo ""

echo "=== Step 3: Stage New Files ==="
echo "Adding healthcare directory..."
git add src/data/healthcare/

echo "Adding runAllTests scripts..."
git add src/tests/with-sign/runAllTests.ts src/tests/with-sign/NewRunAllTests.ts runAllTests.sh 2>/dev/null || echo "Some runAllTests files may not exist or already tracked"

echo ""
echo "Currently staged files:"
git status --staged
echo ""

echo "=== Step 4: Commit Changes ==="
git commit -m "feat: add healthcare BPMN workflows and runAllTests script updates

- Added complete healthcare treatment coordination BPMN workflow files:
  * healthcare1-expected.bpmn (reference workflow)
  * healthcare1-actual-accepted1.bpmn (minor reordering variation)  
  * healthcare1-actual-accepted2.bpmn (additional parallel task)
  * healthcare1-actual-rejected1.bpmn (missing safety checks)
  * healthcare1-actual-rejected2.bpmn (emergency override violation)
- Enhanced runAllTests scripts for healthcare business process integrity
- Support for healthcare workflow validation in ZK compliance framework
- Demonstrates zero-knowledge proof validation for healthcare automation"

if [ $? -eq 0 ]; then
    echo "✅ Commit successful!"
else
    echo "❌ Commit failed or no changes to commit"
fi
echo ""

echo "=== Step 5: Create New Tag ==="
# Get the latest tag to determine next version
LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null)
if [ -z "$LATEST_TAG" ]; then
    NEW_TAG="v3.5.14"
    echo "No previous tags found. Creating initial tag: $NEW_TAG"
else
    echo "Latest tag: $LATEST_TAG"
    # For now, using v3.5.14 as specified
    NEW_TAG="v3.5.14"
    echo "Creating new tag: $NEW_TAG"
fi

git tag -a $NEW_TAG -m "added scripts to runAllTests and added healthcare for business process integrity"

if [ $? -eq 0 ]; then
    echo "✅ Tag $NEW_TAG created successfully!"
else
    echo "❌ Tag creation failed"
fi
echo ""

echo "=== Step 6: Verification ==="
echo "Recent commits:"
git log --oneline -5
echo ""

echo "Recent tags:"
git tag -l --sort=-v:refname | head -3
echo ""

echo "Healthcare files now tracked:"
git ls-files src/data/healthcare/ | head -10
echo ""

echo "=== Step 7: Next Steps ==="
echo "🚀 Commit and tag creation complete!"
echo ""
echo "To push to remote repository, run:"
echo "   git push origin main"
echo "   git push origin $NEW_TAG"
echo ""
echo "Or run both commands at once:"
echo "   git push origin main && git push origin $NEW_TAG"
echo ""
echo "=========================================="
echo "  PROCESS COMPLETE"
echo "=========================================="
