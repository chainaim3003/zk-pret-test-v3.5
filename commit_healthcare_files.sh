#!/bin/bash
cd "C:\SATHYA\CHAINAIM3003\mcp-servers\clonetest\zk-pret-test-v3.5"

echo "=== Checking git status ==="
git status --porcelain

echo -e "\n=== Checking recent tags ==="
git tag -l --sort=-v:refname | head -5

echo -e "\n=== Adding healthcare files ==="
git add src/data/healthcare/

echo -e "\n=== Checking what's staged ==="
git status --staged

echo -e "\n=== Committing changes ==="
git commit -m "feat: add healthcare BPMN workflows and runAllTests script updates

- Added complete healthcare treatment coordination BPMN workflow files
- Added expected, accepted, and rejected healthcare process variants
- Enhanced runAllTests scripts for healthcare business process integrity  
- Support for healthcare workflow validation in ZK compliance framework"

echo -e "\n=== Getting latest tag for next version ==="
LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "v3.5.13")
echo "Latest tag: $LATEST_TAG"

echo -e "\n=== Creating new tag v3.5.14 ==="
git tag -a v3.5.14 -m "added scripts to runAllTests and added healthcare for business process integrity"

echo -e "\n=== Verification ==="
echo "Recent commits:"
git log --oneline -5

echo -e "\nRecent tags:"
git tag -l --sort=-v:refname | head -3

echo -e "\nHealthcare files tracked:"
git ls-files src/data/healthcare/

echo -e "\n=== Next Steps ==="
echo "To push to remote repository:"
echo "git push origin main"
echo "git push origin v3.5.14"
