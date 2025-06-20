@echo off
cd /d "%~dp0"

echo Checking git status...
git status

echo Latest tag found: v3.5.14
echo Next tag will be: v3.5.15

echo Adding all changes...
git add .

echo Committing changes...
git commit -m "cleaned up BusinessProcessIntegrityOptimMerkle and data files"

echo Creating tag: v3.5.15
git tag -a "v3.5.15" -m "cleaned up BusinessProcessIntegrityOptimMerkle and data files"

echo Done! Created tag: v3.5.15
echo.
echo Changes committed and tagged successfully!
echo.
echo To push changes and tags to remote repository, run:
echo git push origin main
echo git push origin v3.5.15

pause
