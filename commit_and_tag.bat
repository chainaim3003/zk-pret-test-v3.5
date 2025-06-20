@echo off
cls
echo ==========================================
echo   GIT COMMIT ^& TAG CREATION SCRIPT
echo ==========================================
echo.

cd /d "C:\SATHYA\CHAINAIM3003\mcp-servers\clonetest\zk-pret-test-v3.5"

echo === Step 1: Repository Assessment ===
echo Current git status:
git status --porcelain
echo.

echo Recent tags:
git tag -l --sort=-v:refname | head -5
echo.

echo === Step 2: Verify New Files ===
echo Healthcare BPMN files:
dir src\data\healthcare\process\*.bpmn
echo.

echo === Step 3: Stage New Files ===
echo Adding healthcare directory...
git add src/data/healthcare/

echo Adding runAllTests scripts...
git add src/tests/with-sign/runAllTests.ts src/tests/with-sign/NewRunAllTests.ts runAllTests.sh 2>nul

echo.
echo Currently staged files:
git status --staged
echo.

echo === Step 4: Commit Changes ===
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

if %errorlevel% equ 0 (
    echo ✅ Commit successful!
) else (
    echo ❌ Commit failed or no changes to commit
)
echo.

echo === Step 5: Create New Tag ===
set NEW_TAG=v3.5.14
echo Creating new tag: %NEW_TAG%

git tag -a %NEW_TAG% -m "added scripts to runAllTests and added healthcare for business process integrity"

if %errorlevel% equ 0 (
    echo ✅ Tag %NEW_TAG% created successfully!
) else (
    echo ❌ Tag creation failed
)
echo.

echo === Step 6: Verification ===
echo Recent commits:
git log --oneline -5
echo.

echo Recent tags:
git tag -l --sort=-v:refname | head -3
echo.

echo Healthcare files now tracked:
git ls-files src/data/healthcare/
echo.

echo === Step 7: Next Steps ===
echo 🚀 Commit and tag creation complete!
echo.
echo To push to remote repository, run:
echo    git push origin main
echo    git push origin %NEW_TAG%
echo.
echo ==========================================
echo   PROCESS COMPLETE
echo ==========================================
echo.
pause
