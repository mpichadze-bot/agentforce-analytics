# Customer Research Analytics Dashboard - System Prompt & Recreation Guide

## Overview

This is a **generic, reusable system prompt** for building a React-based customer research analytics dashboard. It visualizes customer pain points, workflows, and UX findings gathered from customer call transcripts.

Use this guide to start a fresh dashboard for **any product, team, or domain** - simply feed in your own customer call transcripts and the system will structure them into an interactive, searchable dashboard.

---

## Table of Contents

1. [Application Purpose](#application-purpose)
2. [How to Process a Customer Call Transcript](#how-to-process-a-customer-call-transcript)
3. [Adding a New Customer from Scratch](#adding-a-new-customer-from-scratch)
4. [Core Data Structures](#core-data-structures)
5. [Key Features](#key-features)
6. [Tech Stack & Project Structure](#tech-stack--project-structure)
7. [Routing System](#routing-system)
8. [Styling System](#styling-system)
9. [Step-by-Step Recreation Guide](#step-by-step-recreation-guide)
10. [Deployment](#deployment)
11. [AI Prompt for Full Recreation](#ai-prompt-for-full-recreation)

---

## Application Purpose

A customer research dashboard that:
- Displays **pain points** grouped into **themes** (categories)
- Tracks **customers** with their specific feedback and quotes
- Provides **workflow visualizations** for each customer's process
- Shows **UX findings** per customer
- Enables **search** across pain points and customers (Cmd/Ctrl+K)
- Supports **filtering by theme/category**
- Shows **customer counts** per pain point (sorted by most-requested)
- Includes **persona analysis** for customer segmentation

---

## How to Process a Customer Call Transcript

This is the core workflow. Every time you have a customer call, follow these steps to turn the raw transcript into structured dashboard data.

### Step 1: Receive the Transcript

You will receive a customer call transcript in one of these formats:
- **Raw transcript** (timestamped speaker lines)
- **AI-generated notes** (summary, details, suggested next steps)
- **Meeting recording summary** (from Google Meet / Gemini, Zoom AI, etc.)
- **PDF or text file** with notes

### Step 2: Extract Key Information

Read through the transcript and extract the following:

#### A. Customer Metadata
| Field | What to Extract | Example |
|-------|----------------|---------|
| **Customer name** | Company or team name | "Acme Corp" |
| **Contact names** | People on the call | "Jane Smith, Bob Lee" |
| **Date** | Meeting date | "Feb 10, 2026" |
| **Context** | What they do, agent type, scale | "E-commerce service agent, 500K conversations/month" |
| **Key metrics** | Numbers that define their situation | "CSAT: 3.2 → 4.0", "50% deflection rate" |

#### B. Pain Points Mentioned
For each complaint, frustration, or challenge mentioned:

| Field | What to Extract | Example |
|-------|----------------|---------|
| **Title** | Short name for the pain point | "Cannot customize dashboards" |
| **Description** | One-sentence summary | "Users have no ability to add/remove metrics or create custom views" |
| **Severity** | How critical is it? | critical / high / medium / low |
| **Direct quote** | Exact words from the transcript | "I wish I could just add my own columns" |
| **Quote source** | Who said it | "Jane Smith" |
| **Examples** | Specific symptoms or instances | "Cannot edit locked calculated fields" |

#### C. Workflow Information
How does the customer currently work? Extract:
- **Team structure**: Who does what?
- **Process steps**: What is their daily/weekly workflow?
- **Tools used**: What tools are involved?
- **Bottlenecks**: Where do things break down?
- **Scale**: How many conversations, users, articles, etc.?

#### D. Desired Features / UX Findings
What do they wish existed?
- Feature requests with priority
- Quotes about what would help
- Impact if the feature existed

### Step 3: Classify Pain Points into Themes

Group each pain point into one of your themes (categories). Start with these 4 generic themes or define your own:

| Theme ID | Theme Name | Color | When to Use |
|----------|-----------|-------|-------------|
| `metrics` | Data & Metrics Issues | orange | Wrong numbers, unclear definitions, data trust |
| `usability` | Usability & UI Challenges | red | Navigation, customization, visualization problems |
| `troubleshooting` | Troubleshooting & Root Cause | yellow | Manual workarounds, black boxes, debugging |
| `functionality` | Functionality Gaps | green | Missing features, missing integrations |

> **Tip**: You can define your own themes. Just keep them to 3-5 and assign each a distinct color.

### Step 4: Update the Data Files

After extraction, update three places:

#### 4a. Update `dashboardData.js` - Customer Entry

Add or update the customer in `customersData`:

```javascript
{
  id: 'acme-corp',                    // URL-safe slug
  name: 'Acme Corp',
  color: 'blue',                       // Pick: blue, red, green, purple, orange, cyan, etc.
  tagline: 'E-Commerce Service Agent',
  description: 'Summary of their situation and key challenges from the call.',
  metrics: ['500K Conv/Month', 'CSAT 3.2→4.0', '50% Deflection'],
  workflowUrl: '?view=acme-corp-workflow',
  uxUrl: '?view=acme-corp-ux',
  date: 'Feb 10, 2026',
  quotes: [
    { text: "Exact quote from transcript", source: "Jane Smith" },
    { text: "Another key quote", source: "Bob Lee" }
  ],
  painPoints: [
    'Pain Point Title 1',
    'Pain Point Title 2'
  ]
}
```

#### 4b. Update `dashboardData.js` - Pain Points

For each pain point mentioned, either:

**If the pain point already exists**: Add the customer name to the `customers` array, increment `customerCount`, and add their quote and example:

```javascript
// BEFORE
{
  rank: 6,
  title: "Dashboards Lack Customization",
  customerCount: 5,
  customers: ["Customer A", "Customer B", "Customer C", "Customer D", "Customer E"],
  quotes: [/* existing quotes */],
  examples: [/* existing examples */]
}

// AFTER
{
  rank: 6,
  title: "Dashboards Lack Customization",
  customerCount: 6,  // +1
  customers: ["Customer A", "Customer B", "Customer C", "Customer D", "Customer E", "Acme Corp"],
  quotes: [
    /* existing quotes */,
    { text: "I wish I could just add my own columns.", source: "Acme Corp - Jane Smith" }
  ],
  examples: [
    /* existing examples */,
    "Acme Corp: Cannot create custom homepage or add business-specific metrics"
  ]
}
```

**If it's a new pain point**: Add a new entry:

```javascript
{
  rank: 24,                           // Next available rank
  theme: 'usability',                 // One of your theme IDs
  title: "New Pain Point Title",
  description: "Clear one-sentence description",
  customerCount: 1,
  customers: ["Acme Corp"],
  color: "red",                       // Matches theme color
  severity: "high",
  roadmap: null,                      // Or { status: "planned", timeline: "Q3 2026", item: "Feature" }
  quotes: [
    { text: "Exact quote from transcript.", source: "Acme Corp - Jane Smith" }
  ],
  examples: [
    "Acme Corp: Specific example of the problem"
  ]
}
```

#### 4c. Create Workflow & UX Findings Components

Create two new files for each customer:

- `src/components/AcmeCorpWorkflow.js`
- `src/components/AcmeCorpUXFindings.js`

Then register them in `App.js` with the URL parameter routing.

### Step 5: Verify Counts

After updating, verify:
- Each pain point's `customerCount` matches the length of its `customers` array
- The total customer count in the header/stats reflects the actual `customersData.length`
- All customer names are spelled consistently across pain points and customersData

---

## Adding a New Customer from Scratch

Here is the complete checklist when processing a new customer call:

### Checklist

```
[ ] 1. Read transcript and extract: customer name, contacts, date, context
[ ] 2. Extract all pain points with direct quotes
[ ] 3. Extract workflow: team structure, process steps, tools, bottlenecks
[ ] 4. Extract UX findings: desired features, severity, impact
[ ] 5. Classify each pain point into a theme
[ ] 6. Add customer to customersData array in dashboardData.js
[ ] 7. For each pain point:
       [ ] If existing: add customer name, increment count, add quote + example
       [ ] If new: create new pain point entry
[ ] 8. Create [Customer]Workflow.js component
[ ] 9. Create [Customer]UXFindings.js component  
[ ] 10. Register both views in App.js (add state, useEffect case, render)
[ ] 11. Verify all customerCount values match customers array lengths
[ ] 12. Run locally to test: npm start
[ ] 13. Commit and push to deploy
```

### Example Transcript Processing

**Input**: A raw transcript like this:

```
00:05:27 - Jane Smith: "Our biggest problem is that the dashboard shows 1% abandonment 
but our internal tracking shows 15%. We can't trust any of the numbers."

00:08:12 - Jane Smith: "We literally export everything to Excel. We tag each 
conversation manually because there's no way to do it in the tool."

00:12:45 - Bob Lee: "What I really want is a way to simulate changes. Like, 
what if I increase the token count? What happens to quality?"
```

**Output**: Three data updates:

1. **Pain Point "Major Data Discrepancies"** (existing) - add "Acme Corp" to customers, add Jane's quote
2. **Pain Point "Users Forced into Manual Workarounds"** (existing) - add "Acme Corp", add Jane's export quote
3. **Pain Point "Missing Simulation/What-If"** (existing) - add "Acme Corp", add Bob's quote
4. **Customer entry** in customersData with id `'acme-corp'`, all metadata, and references to these 3 pain points

---

## Core Data Structures

### 1. Themes Data (your categories)

```javascript
export const themesData = [
  {
    id: 'theme-slug',        // Unique identifier (e.g., 'metrics', 'usability')
    title: 'Theme Title',    // Display name
    color: 'orange',         // Color: orange | red | yellow | green (add more as needed)
    description: 'What this theme covers'
  }
];
```

Recommended starting themes (customize to your domain):

| ID | Title | Color | Covers |
|----|-------|-------|--------|
| `metrics` | Data & Metrics Issues | orange | Wrong numbers, unclear definitions, data trust |
| `usability` | Usability & UI Challenges | red | Navigation, layout, customization |
| `troubleshooting` | Troubleshooting & Root Cause | yellow | Manual workarounds, debugging, black boxes |
| `functionality` | Functionality Gaps | green | Missing features, integrations, security |

### 2. Pain Points Data

```javascript
export const painPointsData = [
  {
    rank: 1,                              // Unique ID & display rank
    theme: 'metrics',                     // Links to themesData.id
    title: "Short Pain Point Title",
    description: "One-sentence description of the issue",
    customerCount: 5,                     // MUST match customers.length
    customers: ["Cust A", "Cust B", ...], // Customer names who reported this
    color: "orange",                      // MUST match theme color
    severity: "critical",                 // critical | high | medium | low
    roadmap: {                            // null if no roadmap item
      status: "planned",
      timeline: "Q2 2026",
      item: "Feature or fix name"
    },
    quotes: [                             // Direct customer quotes
      { text: "Exact words from call.", source: "Customer - Contact Name" }
    ],
    examples: [                           // Specific instances/symptoms
      "Customer A: Specific example of the problem"
    ]
  }
];
```

### 3. Customers Data

```javascript
export const customersData = [
  {
    id: 'customer-slug',                  // URL-safe (lowercase, hyphens)
    name: 'Customer Display Name',
    color: 'blue',                        // Tile accent color
    tagline: 'One-line role/context',
    description: 'Paragraph describing situation and challenges.',
    metrics: ['Key Stat 1', 'Key Stat 2'], // Displayed as chips
    workflowUrl: '?view=customer-slug-workflow',
    uxUrl: '?view=customer-slug-ux',
    date: 'Mon DD, YYYY',                 // Last call/update date
    quotes: [                             // Optional - key quotes from this customer
      { text: "Quote", source: "Contact Name" }
    ],
    painPoints: [                         // Optional - pain point titles they mentioned
      'Pain Point Title'
    ]
  }
];
```

### 4. Personas Data (optional - for segmentation)

```javascript
export const personasData = [
  {
    id: 'persona-slug',
    title: 'Persona Title',               // e.g., "Analytics Manager"
    description: 'What this persona does.',
    technicalDepth: 'medium',             // very-high | high | medium-high | medium | low-medium
    decisionAuthority: 'high',            // very-high | high | medium-high | medium
    painTolerance: 'low',                 // low | medium | high
    primaryGoal: 'What they care about most',
    keyBehaviors: ['Behavior 1', 'Behavior 2'],
    customers: [
      { name: 'Customer', contacts: ['Contact 1'] }
    ],
    primaryPainPoints: ['Pain Point 1'],
    secondaryPainPoints: ['Pain Point 2'],
    representativeQuotes: ["Typical quote"],
    successMetrics: 'How they measure success'
  }
];
```

---

## Key Features

### 1. Search (Command Bar - Cmd/Ctrl+K)

Global search across all pain points and customers:

```javascript
// Keyboard shortcut
useEffect(() => {
  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsCommandBarOpen(true);
    }
    if (e.key === 'Escape') setIsCommandBarOpen(false);
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, []);

// Debounced search (150ms)
useEffect(() => {
  const debounce = setTimeout(() => handleSearch(query), 150);
  return () => clearTimeout(debounce);
}, [query]);
```

Features: debounced input, arrow key navigation, results grouped by type, Enter to select.

### 2. Theme Filtering (Categories)

Click a theme pill to filter pain points and customers by category:

```javascript
// Filter pain points by selected theme
const filtered = painPointsData
  .filter(p => selectedTheme === null || p.theme === selectedTheme)
  .sort((a, b) => b.customerCount - a.customerCount);

// Filter customers to those associated with the theme's pain points
const themeCustomerNames = selectedTheme
  ? [...new Set(
      painPointsData.filter(p => p.theme === selectedTheme).flatMap(p => p.customers)
    )]
  : null;
```

### 3. Pain Point Counting & Sorting

Pain points are always sorted by `customerCount` (most-requested first). Each card shows the count as `N / totalCustomers`.

### 4. Customer Summary Cards

Grid of cards showing: name, tagline, date, key metrics as chips, and buttons linking to Workflow and UX Findings views.

### 5. Workflow Views (per customer)

Dedicated page per customer showing:
- Team accountability / org structure
- Process flow as expandable nodes
- Tools and systems used
- Bottlenecks and pain points

### 6. UX Findings Views (per customer)

Dedicated page per customer showing:
- Pain points with severity badges (critical/high/medium)
- Direct customer quotes
- Impact analysis
- Desired features with priority

---

## Tech Stack & Project Structure

### Tech Stack

```
React 18+ (Create React App)
lucide-react (icons)
CSS (component-scoped + design system, no UI framework)
URL query parameters (no React Router)
GitHub Pages + GitHub Actions (deployment)
```

### Project Structure

```
your-analytics-dashboard/
├── public/
│   ├── index.html
│   ├── personas.html           # Optional standalone personas page
│   └── 404.html                # GitHub Pages SPA redirect
├── src/
│   ├── data/
│   │   ├── dashboardData.js    # SOURCE OF TRUTH: themes, painPoints, customers
│   │   └── personasData.js     # Optional: persona definitions
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── DashboardV2.js  # Main dashboard (Obsidian theme)
│   │   │   └── DeepDiveModal.js
│   │   ├── ai/
│   │   │   ├── AIProvider.js   # Search context provider
│   │   │   ├── CommandBar.js   # Cmd+K search bar
│   │   │   └── InsightsPanel.js
│   │   ├── CustomerHomePage.js  # Classic home page view
│   │   ├── NavigationHeader.js
│   │   ├── [Customer]Workflow.js    # One per customer
│   │   └── [Customer]UXFindings.js  # One per customer
│   ├── styles/
│   │   ├── obsidian.css
│   │   └── workflow-obsidian.css
│   ├── App.js                   # Router (reads ?view= parameter)
│   └── index.js
├── .github/workflows/deploy.yml
└── package.json
```

---

## Routing System

Uses **URL query parameters** - no React Router needed.

### Pattern

```
/                              → Home page (dashboard)
/?view=customer-slug-workflow  → Customer workflow page
/?view=customer-slug-ux        → Customer UX findings page
```

### App.js Router Pattern

```javascript
function App() {
  const [activeView, setActiveView] = useState(null);

  React.useEffect(() => {
    const view = new URLSearchParams(window.location.search).get('view');
    setActiveView(view);
  }, []);

  // Route to customer-specific views
  if (activeView === 'acme-corp-workflow') return <AcmeCorpWorkflow />;
  if (activeView === 'acme-corp-ux') return <AcmeCorpUXFindings />;
  // ... add more as customers are added

  // Default: show dashboard
  return <DashboardV2 />;
}
```

### Navigation Helper

```javascript
const handleNavigate = (url) => {
  window.location = window.location.origin + window.location.pathname + url;
};

// Usage: handleNavigate('?view=acme-corp-workflow')
```

---

## Styling System

### Design System (Dark Theme)

```css
:root {
  /* Background */
  --bg-primary: #0a0a0b;
  --bg-card: rgba(20, 20, 22, 0.8);
  --border-color: rgba(255, 255, 255, 0.06);

  /* Theme colors (map to your theme categories) */
  --accent-orange: #f97316;    /* Theme 1 */
  --accent-red: #ef4444;       /* Theme 2 */
  --accent-yellow: #eab308;    /* Theme 3 */
  --accent-green: #22c55e;     /* Theme 4 */

  /* Utility colors */
  --accent-cyan: #22d3ee;
  --accent-purple: #a855f7;

  /* Typography */
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-display: 'Sora', sans-serif;
}
```

### Key Visual Patterns

- **Glassmorphism cards**: `backdrop-filter: blur(10px)` with semi-transparent backgrounds
- **Animated background orbs**: Blurred gradient circles with CSS animations
- **Color-coded themes**: Each category has a consistent color everywhere
- **Expandable cards**: Click to reveal details (quotes, examples)
- **Severity badges**: Red (critical), orange (high), yellow (medium)

---

## Step-by-Step Recreation Guide (Starting Clean)

### Step 1: Initialize Project

```bash
npx create-react-app my-research-dashboard
cd my-research-dashboard
npm install lucide-react
npm install --save-dev gh-pages
```

### Step 2: Define Your Themes

Decide on 3-5 categories for your domain. Edit `src/data/dashboardData.js`:

```javascript
export const themesData = [
  { id: 'theme-1', title: 'Your First Theme', color: 'orange', description: 'What it covers' },
  { id: 'theme-2', title: 'Your Second Theme', color: 'red', description: 'What it covers' },
  { id: 'theme-3', title: 'Your Third Theme', color: 'yellow', description: 'What it covers' },
  { id: 'theme-4', title: 'Your Fourth Theme', color: 'green', description: 'What it covers' }
];

export const painPointsData = [];  // Start empty - populate from transcripts
export const customersData = [];   // Start empty - populate from transcripts
```

### Step 3: Process Your First Transcript

Follow the [transcript processing instructions](#how-to-process-a-customer-call-transcript) above to populate your first customer and their pain points.

### Step 4: Build the Dashboard Components

Create the core components in this order:

1. **`App.js`** - Router with `?view=` parameter handling
2. **`CustomerHomePage.js`** - Classic view with theme filters, pain point cards, customer grid
3. **`DashboardV2.js`** - Modern view with sortable table, command bar, deep dive modal
4. **`CommandBar.js`** - Cmd+K search across pain points and customers
5. **`DeepDiveModal.js`** - Modal for detailed pain point or customer views

### Step 5: Create Your First Customer Pages

For each customer, create:

**Workflow component** (`[Customer]Workflow.js`):
```javascript
const CustomerWorkflow = () => {
  const [activeNode, setActiveNode] = useState(null);
  
  return (
    <div className="workflow-container">
      <header>
        <h1>Customer Name - Workflow</h1>
        <p>Meeting Date</p>
      </header>

      {/* Team Structure */}
      <section className="team-grid">
        <div className="team-card" onClick={() => setActiveNode('team-1')}>
          <h3>Team/Role Name</h3>
          <p>Responsibility</p>
          {activeNode === 'team-1' && (
            <ul>
              <li>Detail from transcript</li>
              <li>How they work</li>
            </ul>
          )}
        </div>
      </section>

      {/* Process Flow */}
      <section className="process-flow">
        {/* Expandable process step nodes */}
      </section>

      {/* Pain Points */}
      <section className="pain-points">
        {/* Customer-specific pain points with quotes */}
      </section>
    </div>
  );
};
```

**UX Findings component** (`[Customer]UXFindings.js`):
```javascript
const CustomerUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const painPoints = [
    {
      id: 'pain-1',
      title: 'Pain Point Title',
      severity: 'critical',
      description: 'Description from transcript',
      quote: '"Exact customer quote"',
      impact: 'Business impact',
      symptoms: ['Symptom 1', 'Symptom 2']
    }
  ];

  const desiredFeatures = [
    {
      id: 'feature-1',
      title: 'Feature Request',
      priority: 'critical',
      quote: '"What they want"',
      rationale: 'Why they want it'
    }
  ];

  return (
    <div>
      <h1>Customer - UX Findings</h1>
      {/* Render pain points and features with expandable cards */}
    </div>
  );
};
```

### Step 6: Register Routes in App.js

```javascript
// Add import
import AcmeCorpWorkflow from './components/AcmeCorpWorkflow';
import AcmeCorpUXFindings from './components/AcmeCorpUXFindings';

// Add to useEffect
if (view === 'acme-corp-workflow') setActiveView('acme-corp-workflow');
if (view === 'acme-corp-ux') setActiveView('acme-corp-ux');

// Add to render
if (activeView === 'acme-corp-workflow') return <AcmeCorpWorkflow />;
if (activeView === 'acme-corp-ux') return <AcmeCorpUXFindings />;
```

### Step 7: Repeat for Each New Customer Call

Every time you have a new customer call:
1. Process the transcript (Step 2-5 from the transcript section)
2. Create workflow + UX findings components
3. Register the routes
4. Verify counts
5. Commit and deploy

### Step 8: Configure Deployment

Update `package.json`:
```json
{
  "homepage": "https://[your-username].github.io/[repo-name]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main, master]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

Create `public/404.html` (SPA routing for GitHub Pages):
```html
<!DOCTYPE html>
<html>
<head>
  <script>
    window.location.replace(
      window.location.origin + '/[repo-name]/' +
      window.location.search + window.location.hash
    );
  </script>
</head>
<body></body>
</html>
```

---

## Deployment

```bash
# Manual deploy
npm run deploy

# Or just push to main - GitHub Actions will auto-deploy

# Verify
# Go to repo Settings → Pages → Source: gh-pages branch, / (root)
# URL: https://[username].github.io/[repo-name]/
```

---

## AI Prompt for Full Recreation

Copy-paste this prompt to have an AI build the entire dashboard from scratch:

```
Build a React customer research analytics dashboard with these specifications:

PROJECT NAME: [Your Project Name]
DOMAIN: [Your product/team domain, e.g., "SaaS Analytics Platform"]

ARCHITECTURE:
- React 18+ with Create React App
- lucide-react for icons  
- CSS component-scoped styling (dark theme, glassmorphism)
- URL query parameter routing (?view=customer-workflow), no React Router
- GitHub Pages deployment with GitHub Actions

DATA LAYER (src/data/dashboardData.js):
- themesData: Array of 4 categories, each with { id, title, color, description }
  Colors: orange, red, yellow, green
- painPointsData: Array of pain points, each with:
  { rank, theme, title, description, customerCount, customers[], color, severity, 
    roadmap: { status, timeline, item } | null, quotes: [{ text, source }], examples[] }
- customersData: Array of customers, each with:
  { id, name, color, tagline, description, metrics[], workflowUrl, uxUrl, date, 
    quotes?: [{ text, source }], painPoints?: string[] }

Start with EMPTY painPointsData and customersData arrays. I will populate them from 
customer call transcripts.

KEY FEATURES:
1. Command bar search (Cmd+K) - debounced, arrow key navigation, grouped results
2. Theme filter pills - click to filter pain points and customers by category
3. Pain points list - sorted by customerCount desc, expandable cards showing quotes/examples
4. Customer grid - tiles with name, tagline, metrics chips, Workflow + UX Findings buttons
5. Deep dive modal - click pain point or customer for detailed view
6. Per-customer workflow page - team structure, process flow, expandable nodes
7. Per-customer UX findings page - pain points with severity, quotes, desired features
8. View switcher - toggle between "New UI" (table-based) and "Classic" (card-based) views

STYLING:
- Background: #0a0a0b (near-black)
- Cards: glassmorphism (backdrop-filter: blur, semi-transparent)
- Animated gradient orbs in background
- Color-coded severity: critical (red), high (orange), medium (yellow)
- Color-coded themes: each theme has its own accent color
- Fonts: Inter (body), Sora (headings), JetBrains Mono (mono)
- Responsive with media queries

ROUTING (App.js):
- No route → Dashboard home
- ?view=customer-slug-workflow → Customer workflow component
- ?view=customer-slug-ux → Customer UX findings component

Start by creating the project structure, the data layer file with empty arrays, and the 
main dashboard components. I will then feed you customer call transcripts to populate the data.
```

---

## Quick Reference: Transcript → Dashboard Cheat Sheet

```
┌─────────────────────────────────────────────┐
│           CUSTOMER CALL TRANSCRIPT           │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  EXTRACT:                                    │
│  • Customer name, contacts, date             │
│  • Pain points (title + quote + severity)    │
│  • Workflow (team, process, tools)            │
│  • Feature requests (what + why + priority)   │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  CLASSIFY:                                   │
│  • Assign each pain point to a theme         │
│  • Match to existing pain points if possible │
│  • Create new pain points if needed          │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  UPDATE DATA:                                │
│  1. customersData[] → add customer entry     │
│  2. painPointsData[] → add/update pain points│
│  3. Create [Customer]Workflow.js             │
│  4. Create [Customer]UXFindings.js           │
│  5. Register routes in App.js                │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  VERIFY:                                     │
│  • customerCount matches customers.length    │
│  • Customer names consistent everywhere      │
│  • npm start → test locally                  │
│  • git push → auto-deploys                   │
└─────────────────────────────────────────────┘
```

---

*This system prompt is domain-agnostic. Replace theme names, customer data, and component content to match your product and research.*
