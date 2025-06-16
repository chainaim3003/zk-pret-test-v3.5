# UI Integration Guide for Risk Advanced OptimMerkle

## 📁 File Location and Access

### **Main UI Configuration File:**
```
📂 mcp-servers/zk-pret-test-v3.5/src/data/RISK/Advanced/SETTINGS/
   └── 📄 RiskAdvancedOptimMerkle-ui-execution-modes.json
```

### **Full Path:**
```
C:\SATHYA\CHAINAIM3003\mcp-servers\zk-pret-test-v3.5\src\data\RISK\Advanced\SETTINGS\RiskAdvancedOptimMerkle-ui-execution-modes.json
```

### **Web Server Path (if serving static files):**
```
/src/data/RISK/Advanced/SETTINGS/RiskAdvancedOptimMerkle-ui-execution-modes.json
```

---

## 🌐 API Endpoint Mapping

### **Option 1: Static File Serving**
```javascript
// Direct file access (if serving static files)
const API_BASE = 'http://your-server.com';
const CONFIG_URL = `${API_BASE}/src/data/RISK/Advanced/SETTINGS/RiskAdvancedOptimMerkle-ui-execution-modes.json`;

fetch(CONFIG_URL)
  .then(response => response.json())
  .then(config => {
    // Use config.uiExecutionModes.executionModes for dropdown
  });
```

### **Option 2: REST API Endpoint**
Create an API endpoint that serves this configuration:

```javascript
// Backend API route (Express.js example)
app.get('/api/risk-advanced/ui-config', (req, res) => {
  const configPath = path.join(__dirname, 'src/data/RISK/Advanced/SETTINGS/RiskAdvancedOptimMerkle-ui-execution-modes.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  res.json(config);
});

// Frontend usage
const response = await fetch('/api/risk-advanced/ui-config');
const config = await response.json();
```

### **Option 3: GraphQL Query**
```graphql
query GetRiskAdvancedUIConfig {
  riskAdvancedConfig {
    executionModes {
      key
      displayName
      description
      category
      technicalDetails {
        tolerance
        stressMultiplier
        minimumPassingRatio
      }
      uiProperties {
        difficulty
        color
        badgeText
        recommended
      }
    }
    portfolios {
      key
      displayName
      description
      expectedResult
    }
  }
}
```

---

## 🎨 Frontend Implementation Examples

### **React Component with Dropdown**

```jsx
import React, { useState, useEffect } from 'react';

const RiskAdvancedTestRunner = () => {
  const [config, setConfig] = useState(null);
  const [selectedMode, setSelectedMode] = useState('production');
  const [selectedPortfolio, setSelectedPortfolio] = useState('Advanced-VALID-1.json');

  useEffect(() => {
    // Load configuration
    fetch('/api/risk-advanced/ui-config')
      .then(res => res.json())
      .then(data => {
        setConfig(data);
        // Set default values
        const defaultMode = data.uiExecutionModes.executionModes.find(m => m.uiProperties.defaultSelection);
        if (defaultMode) setSelectedMode(defaultMode.key);
      });
  }, []);

  if (!config) return <div>Loading...</div>;

  const { executionModes } = config.uiExecutionModes;
  const { portfolios } = config.portfolioOptions;

  return (
    <div className="risk-advanced-tester">
      <h2>Risk Advanced OptimMerkle Testing</h2>
      
      {/* Portfolio Selection */}
      <div className="form-group">
        <label>Portfolio Configuration:</label>
        <select 
          value={selectedPortfolio} 
          onChange={(e) => setSelectedPortfolio(e.target.value)}
          className="portfolio-select"
        >
          {portfolios.map(portfolio => (
            <option key={portfolio.key} value={portfolio.key}>
              {portfolio.displayName} - {portfolio.expectedResult}
            </option>
          ))}
        </select>
      </div>

      {/* Execution Mode Selection */}
      <div className="form-group">
        <label>Execution Mode:</label>
        <select 
          value={selectedMode} 
          onChange={(e) => setSelectedMode(e.target.value)}
          className="execution-mode-select"
        >
          {Object.entries(config.uiExecutionModes.categories).map(([categoryKey, category]) => (
            <optgroup key={categoryKey} label={category.label}>
              {executionModes
                .filter(mode => mode.category === categoryKey)
                .map(mode => (
                  <option key={mode.key} value={mode.key}>
                    {mode.displayName} - {mode.technicalDetails.tolerance}% tolerance
                  </option>
                ))
              }
            </optgroup>
          ))}
        </select>
      </div>

      {/* Mode Details */}
      {(() => {
        const currentMode = executionModes.find(m => m.key === selectedMode);
        return currentMode && (
          <div className={`mode-details ${currentMode.uiProperties.color}`}>
            <div className="mode-header">
              <span className={`badge ${currentMode.uiProperties.color}`}>
                {currentMode.uiProperties.badgeText}
              </span>
              <span className="difficulty">
                Difficulty: {currentMode.uiProperties.difficulty}
              </span>
            </div>
            <p>{currentMode.description}</p>
            {currentMode.uiProperties.warningMessage && (
              <div className="warning">
                ⚠️ {currentMode.uiProperties.warningMessage}
              </div>
            )}
            <div className="technical-details">
              <span>Tolerance: {currentMode.technicalDetails.tolerance}%</span>
              <span>Stress: {currentMode.technicalDetails.stressMultiplier}x</span>
              <span>Min Ratio: {currentMode.technicalDetails.minimumPassingRatio}%</span>
            </div>
          </div>
        );
      })()}

      {/* Run Button */}
      <button 
        className="run-test-btn"
        onClick={() => runTest(selectedPortfolio, selectedMode)}
      >
        Run Risk Advanced Test
      </button>
    </div>
  );
};

const runTest = (portfolio, mode) => {
  const command = `node ./build/tests/with-sign/RiskLiquidityAdvancedOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/Advanced/CONFIG/${portfolio} ${mode}`;
  
  // Send to backend API to execute
  fetch('/api/risk-advanced/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ portfolio, executionMode: mode })
  });
};
```

### **Vue.js Component**

```vue
<template>
  <div class="risk-advanced-tester">
    <h2>Risk Advanced OptimMerkle Testing</h2>
    
    <div class="form-group">
      <label>Execution Mode:</label>
      <select v-model="selectedMode" @change="updateModeDetails">
        <optgroup 
          v-for="(category, key) in categories" 
          :key="key" 
          :label="category.label"
        >
          <option 
            v-for="mode in getModesForCategory(key)" 
            :key="mode.key" 
            :value="mode.key"
          >
            {{ mode.displayName }}
          </option>
        </optgroup>
      </select>
    </div>

    <div v-if="currentModeDetails" class="mode-details">
      <span class="badge" :class="currentModeDetails.uiProperties.color">
        {{ currentModeDetails.uiProperties.badgeText }}
      </span>
      <p>{{ currentModeDetails.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RiskAdvancedTester',
  data() {
    return {
      config: null,
      selectedMode: 'production',
      currentModeDetails: null
    };
  },
  async mounted() {
    const response = await fetch('/api/risk-advanced/ui-config');
    this.config = await response.json();
    this.updateModeDetails();
  },
  computed: {
    executionModes() {
      return this.config?.uiExecutionModes?.executionModes || [];
    },
    categories() {
      return this.config?.uiExecutionModes?.categories || {};
    }
  },
  methods: {
    getModesForCategory(categoryKey) {
      return this.executionModes.filter(mode => mode.category === categoryKey);
    },
    updateModeDetails() {
      this.currentModeDetails = this.executionModes.find(m => m.key === this.selectedMode);
    }
  }
};
</script>
```

---

## 🎯 Backend API Integration

### **Node.js/Express Server**

```javascript
const express = require('express');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const app = express();

// Serve UI configuration
app.get('/api/risk-advanced/ui-config', (req, res) => {
  try {
    const configPath = path.join(__dirname, 'src/data/RISK/Advanced/SETTINGS/RiskAdvancedOptimMerkle-ui-execution-modes.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    res.json(config);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load configuration' });
  }
});

// Execute test
app.post('/api/risk-advanced/execute', (req, res) => {
  const { portfolio, executionMode } = req.body;
  
  const command = 'node';
  const args = [
    './build/tests/with-sign/RiskLiquidityAdvancedOptimMerkleVerificationTestWithSign.js',
    '100',
    'http://98.84.165.146:8083/eventsBatch',
    `src/data/RISK/Advanced/CONFIG/${portfolio}`,
    executionMode
  ];

  const process = spawn(command, args, { cwd: __dirname });
  
  let output = '';
  process.stdout.on('data', (data) => {
    output += data.toString();
  });

  process.on('close', (code) => {
    res.json({ 
      success: code === 0, 
      output,
      exitCode: code 
    });
  });
});
```

---

## 📊 CSS Styling Guide

```css
/* Category-based color coding */
.execution-mode-select optgroup {
  font-weight: bold;
  margin-bottom: 8px;
}

/* Difficulty-based styling */
.badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.badge.blue { background: #3b82f6; color: white; }
.badge.green { background: #10b981; color: white; }
.badge.orange { background: #f59e0b; color: white; }
.badge.red { background: #ef4444; color: white; }
.badge.purple { background: #8b5cf6; color: white; }
.badge.indigo { background: #6366f1; color: white; }

/* Warning styling */
.warning {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  padding: 8px;
  border-radius: 4px;
  margin: 8px 0;
}

/* Technical details */
.technical-details {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #6b7280;
}
```

---

## 🚀 Quick Start Checklist

1. ✅ **File Location**: `RiskAdvancedOptimMerkle-ui-execution-modes.json` is ready
2. ✅ **API Endpoint**: Create `/api/risk-advanced/ui-config` endpoint
3. ✅ **Frontend**: Use provided React/Vue examples
4. ✅ **Styling**: Apply CSS for color coding and badges
5. ✅ **Testing**: Test dropdown population and mode selection

**The file is now specifically named and ready for UI integration!** 🎯