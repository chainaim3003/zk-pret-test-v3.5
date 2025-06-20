#!/bin/bash

# Alternative script that automatically detects the next version
cd "$(dirname "$0")"

echo "=== Git Commit and Tag Script ==="
echo ""

echo "Checking git status..."
git status
echo ""

echo "Getting latest tag..."
LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null)

if [ -z "$LATEST_TAG" ]; then
    NEW_TAG="v1.0.0"
    echo "No existing tags found. Will create: $NEW_TAG"
else
    echo "Latest tag: $LATEST_TAG"
    
    # Extract version components
    if [[ $LATEST_TAG =~ v([0-9]+)\.([0-9]+)\.([0-9]+) ]]; then
        MAJOR=${BASH_REMATCH[1]}
        MINOR=${BASH_REMATCH[2]}
        PATCH=${BASH_REMATCH[3]}
        NEW_PATCH=$((PATCH + 1))
        NEW_TAG="v${MAJOR}.${MINOR}.${NEW_PATCH}"
    else
        echo "Warning: Unexpected tag format. Using v3.5.15 as fallback."
        NEW_TAG="v3.5.15"
    fi
fi

echo "Next tag will be: $NEW_TAG"
echo ""

read -p "Continue with commit and tag creation? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Adding all changes..."
    git add .
    
    echo "Committing changes..."
    git commit -m "cleaned up BusinessProcessIntegrityOptimMerkle and data files"
    
    echo "Creating tag: $NEW_TAG"
    git tag -a "$NEW_TAG" -m "cleaned up BusinessProcessIntegrityOptimMerkle and data files"
    
    echo ""
    echo "✅ Done! Created tag: $NEW_TAG"
    echo ""
    echo "To push changes and tags to remote repository, run:"
    echo "git push origin main"
    echo "git push origin $NEW_TAG"
else
    echo "Operation cancelled."
fi

echo ""
