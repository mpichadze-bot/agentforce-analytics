# Prompt: AIE - Topics and Intents Breakdown Prototype

> Based on Figma Design: [Agentforce Interaction Explorer - Topics and Intents](https://www.figma.com/design/oBS4EJV4zPLmh2Ht3ZuFBQ/%F0%9F%94%8E--AIE---Agentforce-Interaction-Explorer?node-id=112495-134515)

---

### **Phase 1: Clarification (Ask Before Act)**
> *Copy-paste this section first to initiate the dialogue.*

```markdown
<SYSTEM_ROLE>
You are an Expert Full-Stack Developer and UI/UX Designer specializing in Salesforce Lightning Design System (SLDS). We are building a rapid prototype of the Agentforce Interaction Explorer - specifically the "Topics and Intents Breakdown" analytics view. You specialize in building modern, responsive enterprise dashboards using React, Tailwind CSS, and Lucide Icons. Prioritize clean component architecture, accessibility, and pixel-perfect matching to the Salesforce design language.
</SYSTEM_ROLE>

<INSTRUCTIONS_PHASE_1>
**STOP! Do not write the code yet.**

I want to build the **Agentforce Interaction Explorer - Topics and Intents Breakdown** analytics dashboard. Before you code, I need you to act as my Lead Designer.

The design has been pre-analyzed from Figma. Here are the confirmed specifications:

## Pre-Confirmed Design Specifications

### Layout Structure
- **Overall Dimensions:** 1600 x 1593 px
- **Corner Radius:** 10px
- **Background Color:** #F3F3F3 (light gray surface)

### Component Hierarchy
1. **Header Section**
   - Global Header (Logo, Search bar, Header icons, Avatar)
   - Console Navigation tabs
   - Console Subtab bar (for "Topics and Intents" context)

2. **Content Area (Horizontal Layout)**
   - **Vertical Navigation Sidebar** (240px width)
     - Search bar
     - Group headers
     - Navigation items (Analytics, Consumption Cards, Home, Agents, Prompt Templates, Search Indexes, Retrievers, Workbooks)
   - **Analytics Surface** (1360px width, scrollable)
     - Dual Table Layout for Topics and Intents data

### Color Palette (Salesforce Lightning)
- **Surface Background:** #F3F3F3
- **Card/Panel Background:** #FFFFFF
- **Border Color:** #C9C9C9
- **Primary Blue:** #0176D3
- **Text Primary:** #181818
- **Text Secondary:** #706E6B

### Typography
- **Font Family:** Salesforce Sans (fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI')
- **Header:** 16px/20px Bold
- **Body:** 14px/20px Regular
- **Caption:** 12px/16px Regular

### Spacing
- **Padding (standard):** 16px
- **Item spacing:** 16px
- **Navigation item height:** 40px

---

## Questions to Refine the Prototype

Based on these specs, please confirm or refine the following:

1. **Dual Table Content:** What specific data should the Topics table and Intents table display?
   - Suggested columns for Topics: Topic Name, Conversation Count, Success Rate, Avg Duration
   - Suggested columns for Intents: Intent Name, Trigger Count, Match Confidence, Actions

2. **Interactive Elements:** Which elements should be interactive?
   - Table row selection/hover
   - Navigation item active states
   - Filter/search functionality

3. **Mock Data Scale:** How many rows for realistic appearance?
   - Topics: 8-12 entries?
   - Intents: 10-15 entries?

4. **Additional Features:**
   - Should tables include sorting indicators?
   - Should we include pagination or infinite scroll?
   - Any specific chart/visualization in the header area?

**Wait for my answers before proceeding to Phase 2.**
</INSTRUCTIONS_PHASE_1>
```

---

### **Phase 2: Execution (After User Replies)**
> *Run this section ONLY after answering the AI's questions.*

```markdown
<CONTEXT>
**App Concept:** Agentforce Interaction Explorer (AIE) - An analytics dashboard for exploring AI agent interactions, specifically viewing breakdowns by Topics and Intents.

**Design Source:** 
- Figma File Key: `oBS4EJV4zPLmh2Ht3ZuFBQ`
- Node ID: `112495-134515`
- Design Preview: https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e0ee119-2e80-4150-b11b-3187524a70fa

**Design Aesthetic:** Salesforce Lightning Design System (Enterprise SaaS)
**Tech Stack:** React, Tailwind CSS, Lucide React (icons)

**Color Palette:**
- Surface: #F3F3F3
- Card: #FFFFFF  
- Border: #C9C9C9
- Primary: #0176D3
- Text Primary: #181818
- Text Secondary: #706E6B
- Success: #2E844A
- Warning: #FE9339
- Error: #EA001E

**Layout Preferences:**
- Fixed sidebar navigation (240px)
- Scrollable main content area
- Sticky header
- 16px standard padding/gaps
</CONTEXT>

<INSTRUCTIONS_PHASE_2>
Generate the code for a functional prototype. Follow these steps:

### 1. Component Breakdown

Build these core components:

```
├── AIEDashboard (main container)
│   ├── GlobalHeader
│   │   ├── Logo
│   │   ├── SearchBar
│   │   ├── HeaderIcons
│   │   └── UserAvatar
│   ├── ConsoleNavigation
│   │   └── ConsoleTabs
│   ├── SubtabBar
│   ├── ContentArea
│   │   ├── VerticalNavigation
│   │   │   ├── NavSearchBar
│   │   │   ├── NavGroupHeader
│   │   │   └── NavItem
│   │   └── AnalyticsSurface
│   │       ├── PageHeader (Breadcrumb + Title)
│   │       └── DualTableLayout
│   │           ├── TopicsTable
│   │           └── IntentsTable
```

### 2. Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  Global Header (Logo | Search | Icons | Avatar)                 │
├─────────────────────────────────────────────────────────────────┤
│  Console Navigation Tabs                                        │
├─────────────────────────────────────────────────────────────────┤
│  Subtab Bar                                                     │
├───────────────┬─────────────────────────────────────────────────┤
│               │                                                 │
│   Vertical    │         Analytics Surface                       │
│   Navigation  │                                                 │
│   (240px)     │    ┌─────────────────────────────────────────┐  │
│               │    │  Topics Table                           │  │
│   • Analytics │    │  (Topic | Count | Rate | Duration)      │  │
│   • Cards     │    └─────────────────────────────────────────┘  │
│   • Home      │                                                 │
│   • Agents    │    ┌─────────────────────────────────────────┐  │
│   • Templates │    │  Intents Table                          │  │
│   • Indexes   │    │  (Intent | Triggers | Confidence)       │  │
│   • Retrievers│    └─────────────────────────────────────────┘  │
│   • Workbooks │                                                 │
│               │                                                 │
└───────────────┴─────────────────────────────────────────────────┘
```

### 3. Key Features to Implement

**Feature 1: Global Header**
- Salesforce logo placeholder (use colored div or icon)
- Search input with magnifying glass icon
- Icon buttons: Agentforce, New, Trailhead, Help, Settings, Notifications
- User avatar (circular, with dropdown indicator)

**Feature 2: Vertical Navigation**
- Search bar at top
- Collapsible group headers
- Active state indicator (left border accent)
- Hover states on items

**Feature 3: Dual Table Layout**
- **Topics Table**
  - Columns: Topic Name, Conversations, Success Rate (%), Avg Duration
  - Sortable headers with indicators
  - Row hover effects
  - Color-coded success rates (green > 80%, yellow 50-80%, red < 50%)
  
- **Intents Table**
  - Columns: Intent Name, Trigger Count, Match Confidence (%), Actions Taken
  - Same styling as Topics table
  - Expandable rows for action details (optional)

### 4. Mock Data

**Topics Mock Data:**
```javascript
const topicsData = [
  { name: "Billing Inquiries", conversations: 1247, successRate: 94.2, avgDuration: "2m 34s" },
  { name: "Account Management", conversations: 892, successRate: 87.5, avgDuration: "3m 12s" },
  { name: "Technical Support", conversations: 756, successRate: 72.1, avgDuration: "5m 47s" },
  { name: "Product Information", conversations: 634, successRate: 91.8, avgDuration: "1m 58s" },
  { name: "Order Status", conversations: 521, successRate: 96.3, avgDuration: "1m 23s" },
  { name: "Returns & Refunds", conversations: 412, successRate: 68.4, avgDuration: "4m 15s" },
  { name: "Shipping Questions", conversations: 389, successRate: 89.7, avgDuration: "2m 01s" },
  { name: "Subscription Changes", conversations: 298, successRate: 82.1, avgDuration: "3m 44s" },
];
```

**Intents Mock Data:**
```javascript
const intentsData = [
  { name: "check_balance", triggers: 2341, confidence: 97.8, actions: "Fetch Account, Display Balance" },
  { name: "update_payment", triggers: 1567, confidence: 94.2, actions: "Verify Identity, Update Card" },
  { name: "track_order", triggers: 1234, confidence: 96.5, actions: "Lookup Order, Show Status" },
  { name: "reset_password", triggers: 987, confidence: 99.1, actions: "Send Reset Link, Confirm" },
  { name: "cancel_subscription", triggers: 756, confidence: 88.3, actions: "Check Terms, Process Cancel" },
  { name: "request_refund", triggers: 654, confidence: 85.7, actions: "Review Policy, Create Ticket" },
  { name: "schedule_callback", triggers: 543, confidence: 92.4, actions: "Check Availability, Book Slot" },
  { name: "escalate_agent", triggers: 421, confidence: 78.9, actions: "Transfer to Human Agent" },
  { name: "get_product_info", triggers: 398, confidence: 95.6, actions: "Search Catalog, Return Details" },
  { name: "apply_discount", triggers: 312, confidence: 91.2, actions: "Validate Code, Apply Discount" },
];
```

### 5. Constraints

- Do not use external image URLs - use Lucide icons or colored placeholders
- Ensure the code is a single file or clearly separated files for copy-paste into sandbox
- Follow the Salesforce Lightning color palette exactly
- Maintain the exact layout proportions from the Figma design
- Include hover and focus states for accessibility
</INSTRUCTIONS_PHASE_2>
```

---

### **Visual Reference**

```markdown
<VISUAL_REFERENCE>
Based on the Figma analysis, here's the visual structure:

**Sidebar (240px):**
- White background (#FFFFFF)
- 1px right border (#C9C9C9)
- Items are 40px height with 12px horizontal padding
- Active item has left blue border accent
- Search bar at top with gray background

**Main Content (1360px):**
- Light gray background (#F3F3F3)
- 16px padding on all sides
- 16px gap between tables
- Each table in white card with subtle shadow

**Tables:**
- White background with rounded corners (8px)
- Subtle drop shadow (0 2px 4px rgba(0,0,0,0.1))
- Header row with gray background (#FAFAFA)
- 14px font for body, 12px for captions
- Horizontal divider lines between rows

**Header:**
- White background
- Bottom border separator
- 52px height for global header
- 40px height for console tabs
- 40px height for subtabs
</VISUAL_REFERENCE>
```

---

### **Reflection Loop (Verification)**

```markdown
<REFLECTION_LOOP>
Before writing the code, verify:

1. **Visual Accuracy:**
   - [ ] Layout matches the Figma design (1600px width container)
   - [ ] Sidebar is exactly 240px
   - [ ] Color palette matches Salesforce Lightning
   - [ ] Typography uses Salesforce Sans or system fallbacks

2. **Component Completeness:**
   - [ ] All header elements present (logo, search, icons, avatar)
   - [ ] Console navigation with tabs
   - [ ] Subtab bar for context
   - [ ] Vertical navigation with all menu items
   - [ ] Both tables with correct columns

3. **Interactivity:**
   - [ ] Hover states on navigation items
   - [ ] Active state indicator on current nav item
   - [ ] Table row hover effects
   - [ ] Sortable column headers (visual only is acceptable)

4. **Accessibility:**
   - [ ] Proper heading hierarchy
   - [ ] ARIA labels on interactive elements
   - [ ] Keyboard navigation support
   - [ ] Focus visible indicators
</REFLECTION_LOOP>
```

---

### **Output Format**

```markdown
<OUTPUT_FORMAT>
Provide the complete React implementation:

1. **Main Component File** (`AIEDashboard.jsx`)
   - Complete dashboard with all sub-components
   - Inline or module CSS using Tailwind

2. **Design Tokens** (as CSS variables or JS constants)
   - Colors, spacing, typography values

3. **Mock Data File** (`mockData.js`)
   - Topics and Intents arrays

4. **Usage Instructions**
   - How to run in CodeSandbox/StackBlitz
   - Required dependencies (react, lucide-react, tailwindcss)

**Note:** Generate production-ready code that matches the Figma design as closely as possible.
</OUTPUT_FORMAT>
```

---

### **Figma Reference Data**

| Property | Value |
|----------|-------|
| **File Key** | `oBS4EJV4zPLmh2Ht3ZuFBQ` |
| **Node ID** | `112495-134515` |
| **Frame Name** | V2 / Analytics / Agent Detailed View / Breakdowns / Topics and Intents |
| **Dimensions** | 1600 x 1593 px |
| **Background** | #F3F3F3 |
| **Border Radius** | 10px |
| **Last Modified** | 2025-12-24 |

---

**Ready to prototype? Start with Phase 1 to confirm specifications, then proceed to Phase 2 for code generation.**

