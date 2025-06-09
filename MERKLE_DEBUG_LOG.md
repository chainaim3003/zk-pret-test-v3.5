# EXIM Merkle Tree Debug Test

## Issue Analysis
- Height 4 gives only 8 leaves (indices 0-7) instead of expected 16
- Need to test height 5 empirically to see actual capacity

## Test Plan
1. Build with height 5
2. Test field setting up to index 15  
3. If successful, document actual height vs leaf relationship
4. If fails, adjust accordingly

## Current Understanding
Based on empirical testing:
- Height 4 → 8 leaves (2^3)
- Height 8 → 256 leaves (2^8) [GLEIF working]

This suggests either:
- Off-by-one in height calculation, OR
- Different interpretation of height parameter

## Expected with Height 5
If pattern is 2^(height-1): 16 leaves
If pattern is 2^height: 32 leaves

Let's test!
