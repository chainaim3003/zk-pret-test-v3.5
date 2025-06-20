@echo off
echo === Step 1: Repository Assessment ===
cd /d "C:\SATHYA\CHAINAIM3003\mcp-servers\clonetest\zk-pret-test-v3.5"

echo Checking git status...
git status --porcelain

echo.
echo Checking recent tags...
git tag -l --sort=-v:refname | head -5

echo.
echo === Step 2: Verify Healthcare Files ===
echo Listing healthcare files...
dir src\data\healthcare\process

echo.
echo === Step 3: Stage New Files ===
echo Adding healthcare directory...
git add src/data/healthcare/

echo.
echo Checking staged files...
git status --staged

echo.
echo === Step 4: Commit Changes ===
git commit -m "feat: add healthcare BPMN workflows and runAllTests script updates

- Added complete healthcare treatment coordination BPMN workflow files
- Added expected, accepted, and rejected healthcare process variants  
- Enhanced runAllTests scripts for healthcare business process integrity
- Support for healthcare workflow validation in ZK compliance framework"

echo.
echo === Step 5: Check for Latest Tag ===
echo Getting latest tag for versioning...
git describe --tags --abbrev=0

echo.
echo === Step 6: Create New Tag ===
echo Creating new tag...
git tag -a v3.5.14 -m "added scripts to runAllTests and added healthcare for business process integrity"

echo.
echo === Step 7: Show Results ===
echo Recent commits...
git log --oneline -5

echo.
echo Recent tags...
git tag -l --sort=-v:refname | head -3

echo.
echo Healthcare files tracked...
git ls-files src/data/healthcare/

echo.
echo === Commit and Tag Process Complete ===
echo To push to remote, run:
echo git push origin main
echo git push origin v3.5.14

pause
