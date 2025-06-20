#!/bin/bash

# =================================================================
# BACKUP SCRIPT: New Files Since Last Tag
# Created: $(date)
# Purpose: Backup all new TypeScript files before testing npm run build
# =================================================================

echo "🛡️  Creating backup of new files since last tag..."

# Create timestamped backup directory
BACKUP_DIR="backup-new-files-$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📁 Backup directory: $BACKUP_DIR"

# Function to backup a file with directory structure
backup_file() {
    local src_file="$1"
    local backup_base="$2"
    
    if [ -f "$src_file" ]; then
        # Create directory structure in backup
        local dir_path=$(dirname "$src_file")
        mkdir -p "$backup_base/$dir_path"
        
        # Copy file with metadata preservation
        cp -p "$src_file" "$backup_base/$src_file"
        echo "✅ Backed up: $src_file"
    else
        echo "⚠️  File not found: $src_file"
    fi
}

# Backup your 6 new TypeScript files
echo ""
echo "🎯 Backing up YOUR NEW OPTIMIZED FILES:"
echo "=" | tr '=' '=' | head -c 50; echo ""

backup_file "src/tests/with-sign/BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSign.ts" "$BACKUP_DIR"
backup_file "src/tests/with-sign/BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSignUtils.ts" "$BACKUP_DIR"
backup_file "src/zk-programs/with-sign/BusinessProcessIntegrityOptimMerkleZKProgramWithSign.ts" "$BACKUP_DIR"

echo ""
echo "🔧 Backing up OPTIMERKLE FRAMEWORK:"
echo "=" | tr '=' '=' | head -c 50; echo ""

backup_file "src/utils/optimerkle/MerkleTreeManager.ts" "$BACKUP_DIR"
backup_file "src/utils/optimerkle/OracleManager.ts" "$BACKUP_DIR"
backup_file "src/utils/optimerkle/PoseidonHasher.ts" "$BACKUP_DIR"

# Also backup the modified package.json
echo ""
echo "⚙️  Backing up CONFIGURATION FILES:"
echo "=" | tr '=' '=' | head -c 50; echo ""

backup_file "package.json" "$BACKUP_DIR"
backup_file "tsconfig.json" "$BACKUP_DIR"

# Backup any other recently modified files (last 24 hours)
echo ""
echo "🔍 Backing up OTHER RECENT FILES:"
echo "=" | tr '=' '=' | head -c 50; echo ""

# Find and backup files modified in last 24 hours
find src -name "*.ts" -type f -mtime -1 -exec bash -c '
    file="$1"
    backup_dir="$2"
    dir_path=$(dirname "$file")
    mkdir -p "$backup_dir/$dir_path"
    cp -p "$file" "$backup_dir/$file"
    echo "✅ Recent file: $file"
' _ {} "$BACKUP_DIR" \;

# Create manifest file
echo ""
echo "📋 Creating backup manifest..."

cat > "$BACKUP_DIR/BACKUP_MANIFEST.md" << EOF
# Backup Manifest
Created: $(date)
Backup Directory: $BACKUP_DIR

## Purpose
Backup of all new TypeScript files since last tag before testing modified npm run build

## Your Key New Files (Created June 19, 2025)
1. src/tests/with-sign/BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSign.ts
2. src/tests/with-sign/BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSignUtils.ts  
3. src/zk-programs/with-sign/BusinessProcessIntegrityOptimMerkleZKProgramWithSign.ts

## OptimMerkle Framework Files
4. src/utils/optimerkle/MerkleTreeManager.ts
5. src/utils/optimerkle/OracleManager.ts
6. src/utils/optimerkle/PoseidonHasher.ts

## Configuration Files
- package.json (modified to use pure TypeScript build)
- tsconfig.json

## Restore Instructions
If you need to restore these files:
\`\`\`bash
# Copy files back to project root
cp -r $BACKUP_DIR/src/* src/
cp -r $BACKUP_DIR/package.json .
cp -r $BACKUP_DIR/tsconfig.json .
\`\`\`

## Git Commands for Reference
\`\`\`bash
# To see what changed since last tag
git diff --name-only v3.5.11..HEAD

# To see new files since last tag  
git diff --name-only --diff-filter=A v3.5.11..HEAD
\`\`\`
EOF

# Create quick restore script
cat > "$BACKUP_DIR/RESTORE.sh" << 'EOF'
#!/bin/bash
echo "🔄 Restoring files from backup..."
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Restore files
cp -r "$SCRIPT_DIR/src"/* "$PROJECT_ROOT/src/"
cp "$SCRIPT_DIR/package.json" "$PROJECT_ROOT/"
cp "$SCRIPT_DIR/tsconfig.json" "$PROJECT_ROOT/"

echo "✅ Files restored successfully!"
echo "🔍 Check git status to see what was restored:"
echo "   git status"
EOF

chmod +x "$BACKUP_DIR/RESTORE.sh"

# Summary
echo ""
echo "🎉 BACKUP COMPLETE!"
echo "=" | tr '=' '=' | head -c 50; echo ""
echo "📁 Location: $BACKUP_DIR"
echo "📋 Manifest: $BACKUP_DIR/BACKUP_MANIFEST.md"
echo "🔄 Restore: $BACKUP_DIR/RESTORE.sh"

# Count backed up files
file_count=$(find "$BACKUP_DIR" -name "*.ts" -type f | wc -l)
echo "📊 Files backed up: $file_count TypeScript files"

echo ""
echo "🛡️  Your new optimizations are now safely backed up!"
echo "✅ Safe to test: npm run build"
