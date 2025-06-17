#!/bin/bash

echo "🔍 GIT BISECT TO FIND WHEN TYPESCRIPT BUILD BROKE"
echo "================================================"
echo ""
echo "This script will help you find the exact commit where the build broke."
echo "We'll test each commit to see if 'npm run build' produces 364 files or fewer."
echo ""

# Function to test if build is working
test_build_health() {
    echo "Testing build health..."
    
    # Clean and build
    rm -rf build/ 2>/dev/null
    npm run build &>/dev/null
    
    if [ ! -d "build" ]; then
        echo "Build directory not created - BROKEN"
        return 1
    fi
    
    # Count JavaScript files
    js_count=$(find build/ -name "*.js" 2>/dev/null | wc -l)
    echo "JavaScript files produced: $js_count"
    
    # Consider build healthy if it produces close to 364 files
    # Allow some tolerance (maybe 350+ files indicates healthy build)
    if [ "$js_count" -ge 350 ]; then
        echo "Build appears HEALTHY ($js_count files)"
        return 0
    else
        echo "Build appears BROKEN ($js_count files, expected ~364)"
        return 1
    fi
}

echo "🔧 SETUP INSTRUCTIONS:"
echo "======================"
echo "1. Make sure you're in the git repository"
echo "2. Commit any uncommitted changes first"
echo "3. Then run this bisect process"
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir &>/dev/null; then
    echo "❌ Not in a git repository!"
    exit 1
fi

echo "📊 RECENT COMMITS:"
echo "=================="
git log --oneline -10

echo ""
echo "🎯 BISECT PROCESS:"
echo "=================="
echo "We'll test between a known good commit and current HEAD"
echo ""

# Find a potentially good starting point (go back 20 commits)
GOOD_COMMIT=$(git rev-parse HEAD~20)
BAD_COMMIT=$(git rev-parse HEAD)

echo "Testing range: $GOOD_COMMIT (good?) to $BAD_COMMIT (bad)"
echo ""

read -p "Start git bisect? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Bisect cancelled"
    exit 0
fi

# Start git bisect
echo "Starting git bisect..."
git bisect start

# Mark current as bad (since we know it's broken)
echo "Marking current HEAD as bad..."
git bisect bad

# Test the older commit
echo "Testing older commit as potentially good..."
git checkout $GOOD_COMMIT

if test_build_health; then
    echo "✅ Older commit builds successfully - marking as good"
    git bisect good
else
    echo "❌ Even older commit is broken - need to go further back"
    OLDER_COMMIT=$(git rev-parse HEAD~40)
    echo "Trying even older commit: $OLDER_COMMIT"
    git checkout $OLDER_COMMIT
    
    if test_build_health; then
        echo "✅ Much older commit builds - marking as good"
        git bisect good
    else
        echo "❌ Build has been broken for a very long time!"
        echo "You may need to manually find a good commit"
        git bisect reset
        exit 1
    fi
fi

echo ""
echo "🔄 BISECT AUTOMATION:"
echo "===================="
echo "Git will now automatically find the breaking commit..."

# Automate the bisect process
git bisect run bash -c "
    echo 'Testing commit: '$(git rev-parse --short HEAD)
    rm -rf build/ 2>/dev/null
    
    # Try to build
    if ! npm run build &>/dev/null; then
        echo 'Build command failed'
        exit 1
    fi
    
    # Check if build directory exists
    if [ ! -d 'build' ]; then
        echo 'No build directory created'
        exit 1
    fi
    
    # Count files
    js_count=\$(find build/ -name '*.js' 2>/dev/null | wc -l)
    echo \"Produced \$js_count JavaScript files\"
    
    # Return 0 for good (350+ files), 1 for bad (<350 files)
    if [ \"\$js_count\" -ge 350 ]; then
        echo 'Build is GOOD'
        exit 0
    else
        echo 'Build is BAD'
        exit 1
    fi
"

echo ""
echo "🎯 BISECT COMPLETE!"
echo "==================="
echo "The breaking commit should be identified above."
echo ""

# Reset to original state
git bisect reset

echo "Returned to original HEAD"
echo ""
echo "💡 NEXT STEPS:"
echo "=============="
echo "1. Look at the breaking commit details with: git show <commit-hash>"
echo "2. Check what files were changed in that commit"
echo "3. Understand what broke the TypeScript compilation"
