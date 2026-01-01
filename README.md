# Agentforce Analytics

A customer pain points and feedback analysis dashboard for Salesforce's Agentforce Analytics product.

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

This dashboard tracks and visualizes customer feedback, pain points, and feature requests from Agentforce Analytics users. It provides:

- **27 Pain Points** organized across 4 themes
- **17+ Customer Profiles** with detailed workflow and UX findings
- **8 Top Requested Features** derived from customer interviews
- **Meeting Transcripts** and quotes from customer discussions

## Features

### Dashboard Views
- **Classic View** - Original card-based layout
- **Obsidian View** - Modern dark theme with glassmorphism

### Pain Point Themes
| Theme | Description | Color |
|-------|-------------|-------|
| Metrics | Data discrepancies, unclear definitions | 🟠 Orange |
| Usability | Navigation, customization, UI challenges | 🔴 Red |
| Troubleshooting | Manual workarounds, root cause analysis | 🟡 Yellow |
| Functionality | Missing features, capability gaps | 🟢 Green |

### Customer Deep-Dives
Each customer has dedicated workflow and UX findings pages accessible via URL parameters:
- `?view=allegis-workflow`
- `?view=allegis-ux`
- `?view=indeed-workflow`
- etc.

## Tech Stack

- **React 18.2** - UI framework
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **CSS** - Custom design systems (Classic + Obsidian themes)

## Installation

```bash
# Clone the repository
git clone https://github.com/mpichadze-bot/agentforce-analytics.git

# Navigate to project
cd agentforce-analytics

# Install dependencies
npm install

# Start development server
npm start
```

## Project Structure

```
src/
├── components/
│   ├── ai/                    # AI framework (CommandBar, ChatWidget, InsightsPanel)
│   ├── dashboard/             # DashboardV2, DeepDiveModal
│   ├── CustomerHomePage.js    # Classic dashboard
│   └── [Customer]Workflow.js  # Per-customer workflow views
│   └── [Customer]UXFindings.js # Per-customer UX findings
├── data/
│   └── dashboardData.js       # Centralized pain points & customer data
├── styles/
│   ├── obsidian.css           # Dark theme design system
│   └── workflow-obsidian.css  # Workflow pages theme
└── App.js                     # Router and view switcher
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details.

---

Built with ❤️ for Salesforce Agentforce Analytics team

