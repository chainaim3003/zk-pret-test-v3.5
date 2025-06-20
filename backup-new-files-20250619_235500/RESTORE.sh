#!/bin/bash

# ================================================================
# RESTORE SCRIPT: Restore New Files From Backup
# ================================================================

echo "🔄 Restoring files from backup..."

BACKUP_DIR="backup-new-files-20250619_235500"
PROJECT_ROOT="."

if [ ! -d "$BACKUP_DIR" ]; then
    echo "❌ Error: Backup directory $BACKUP_DIR not found!"
    exit 1
fi

echo "📁 Restoring from: $BACKUP_DIR"

# Restore your key TypeScript files
echo "🎯 Restoring YOUR OPTIMIZED FILES..."

# Create directories if they don't exist
mkdir -p src/tests/with-sign
mkdir -p src/utils/optimerkle
mkdir -p src/zk-programs/with-sign

# Restore your new files
if [ -f "$BACKUP_DIR/src/tests/with-sign/BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSign.ts" ]; then
    cp "$BACKUP_DIR/src/tests/with-sign/BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSign.ts" src/tests/with-sign/
    echo "✅ Restored: BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSign.ts"
fi

# Note: Additional files would be restored here when full backup completes

# Restore configuration files
echo "⚙️  Restoring CONFIGURATION FILES..."

if [ -f "$BACKUP_DIR/package.json" ]; then
    cp "$BACKUP_DIR/package.json" .
    echo "✅ Restored: package.json"
fi

echo ""
echo "🎉 RESTORE COMPLETE!"
echo "✅ Your optimized files have been restored"
echo "🔍 Check git status to see what was restored:"
echo "   git status"
echo ""
echo "🛡️  Your innovations are protected!"
