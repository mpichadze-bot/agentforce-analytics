import React, { useState } from 'react';
import {
  Briefcase, Building2, Wallet, HelpCircle, ShoppingBag, Package, TrendingUp as TrendingUpIcon,
  Activity, Eye, ArrowRight, BarChart3, Users, Zap, ChevronRight, Music, GraduationCap,
  TrendingUp, Target, Shield, MessageSquare, AlertTriangle, MessageCircle, UserCheck,
  FileSpreadsheet, Settings, EyeOff, BarChart, Database, ChevronDown, ChevronUp, Quote,
  Calculator, Filter, Search, PieChart, FlaskConical, ClipboardCheck, Sparkles, Server, Cpu
} from 'lucide-react';
import './CustomerHomePage.css';

const CustomerHomePage = () => {
  const [hoveredCustomer, setHoveredCustomer] = useState(null);
  const [expandedPain, setExpandedPain] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handlePainClick = (rank) => {
    setExpandedPain(expandedPain === rank ? null : rank);
  };

  const handleThemeClick = (themeId) => {
    setSelectedTheme(selectedTheme === themeId ? null : themeId);
    setExpandedPain(null); // Reset expanded pain when changing filter
  };

  // Pain Point Themes based on comprehensive analysis
  const painPointThemes = [
    {
      id: 'metrics',
      title: 'Flawed Metrics & Data Issues',
      color: 'orange',
      icon: Calculator,
      description: 'Metric definitions, data discrepancies, and trust issues'
    },
    {
      id: 'usability',
      title: 'Dashboard Usability & UI Challenges',
      color: 'red',
      icon: Settings,
      description: 'Navigation, customization, and visualization problems'
    },
    {
      id: 'troubleshooting',
      title: 'Difficult Troubleshooting & Root Cause Analysis',
      color: 'yellow',
      icon: Search,
      description: 'Manual workarounds, black boxes, and complex reporting'
    },
    {
      id: 'functionality',
      title: 'Critical Functionality Gaps',
      color: 'green',
      icon: Zap,
      description: 'Missing features for tagging, simulation, and security'
    }
  ];

  const topPainPoints = [
    // ===== THEME 1: FLAWED METRICS & DATA ISSUES (Orange) =====
    {
      rank: 1,
      theme: 'metrics',
      title: "Major Data Discrepancies",
      description: "Dashboard metrics don't align with internal measurements - 1-2% vs 10-15% abandonment rates",
      customerCount: 9,
      customers: ["Secret Escapes", "Pearson", "eToro", "Astound", "Hard Rock", "UNCC", "FedEx", "Cellebrite", "Nexo"],
      icon: Calculator,
      color: "orange",
      severity: "critical",
      quotes: [
        { text: "Dashboard shows 1-2% abandonment vs our internal tracking of 10-15%.", source: "Secret Escapes - Laura Meschi" },
        { text: "The current definition of deflection doesn't align - includes frustrated users who left.", source: "Pearson - Nicole Lozano" },
        { text: "Active user rate was 6% but with correct formula it's actually 84%!", source: "eToro - Avi Kuzi" }
      ],
      examples: [
        "Secret Escapes: 10-15% internal abandonment vs near 0% in Salesforce",
        "eToro: Wrong formula divided by all Salesforce users instead of assigned users",
        "Pearson: Deflection includes frustrated users who called instead",
        "Major discrepancies erode trust in all dashboard data"
      ]
    },
    {
      rank: 2,
      theme: 'metrics',
      title: "Unclear Metric Definitions",
      description: "Users lack clear, in-app definitions for metrics like 'engagement rate', 'deflection rate', or 'closed action'",
      customerCount: 8,
      customers: ["FDE Team", "eToro", "Cellebrite", "Nexo", "Help Agent", "Astound", "Secret Escapes", "Allegis"],
      icon: Search,
      color: "orange",
      severity: "critical",
      quotes: [
        { text: "We measure engagement based on end-user messages - your definition is guided by your commercial model.", source: "Secret Escapes - Laura Meschi" },
        { text: "What triggers 'closed action'? We've never seen the agent exit a session based on context.", source: "Secret Escapes - Daniel Measures" },
        { text: "This calculated field is locked. You can't edit this one.", source: "eToro" }
      ],
      examples: [
        "Secret Escapes: Engagement = end-user messages vs Salesforce = action invoked",
        "Confusing 'closed action' vs 'closed user request' definitions",
        "No 'info buttons' for quick definitions like in typical CRM",
        "Confusing terminology: 'Utterance' vs 'Interaction'"
      ]
    },
    {
      rank: 3,
      theme: 'metrics',
      title: "Irrelevant Out-of-Box Metrics",
      description: "Web chat metrics unusable for channels like Slack, leading to misleading data",
      customerCount: 5,
      customers: ["Astound", "UNCC", "Hard Rock", "FedEx", "Oniverse"],
      icon: BarChart,
      color: "orange",
      severity: "high",
      quotes: [
        { text: "Web chat metrics are unusable for channels like Slack, leading to misleading data.", source: "Astound" },
        { text: "Unique user metrics would not work well with the current service agent type.", source: "Astound" },
        { text: "Any reporting based on Agent Force Analytics, we need to be able to filter by messaging channel.", source: "UNCC - Alexandra Flinn" }
      ],
      examples: [
        "Astound: Service agent metrics meaningless for Slack channel",
        "UNCC: Can't differentiate IT vs Student Services conversations",
        "Oniverse: Cannot filter by brand (5 brands) or country",
        "Metrics designed for web chat, not other channels"
      ]
    },
    {
      rank: 4,
      theme: 'metrics',
      title: "Broken Feedback Mechanisms",
      description: "Thumbs up/down, surveys, and satisfaction scoring don't work or have low response rates",
      customerCount: 3,
      customers: ["Astound", "Hard Rock", "Cellebrite"],
      icon: MessageCircle,
      color: "orange",
      severity: "high",
      quotes: [
        { text: "We are currently unable to reliably calculate the resolution rate because thumbs up/down is not working.", source: "Astound - Oksana Klymenko" },
        { text: "Implementing surveys is just not enough - customers aren't answering.", source: "Hard Rock" },
        { text: "You don't have feedback on the service agent.", source: "Cellebrite" }
      ],
      examples: [
        "Astound: Thumbs up/down submitted in Slack not visible in analytics",
        "Hard Rock: End-of-chat surveys have low response rates",
        "Cannot calculate resolution rate KPIs without working feedback"
      ]
    },

    // ===== THEME 2: DASHBOARD USABILITY & UI CHALLENGES (Red) =====
    {
      rank: 5,
      theme: 'usability',
      title: "Painful Navigation",
      description: "Major bug prevents easy clicking from dashboard metrics to corresponding detailed sessions",
      customerCount: 10,
      customers: ["NVIDIA", "Cellebrite", "Nexo", "Help Agent", "Lululemon", "eToro", "Hard Rock", "Secret Escapes", "Oniverse", "Allegis"],
      icon: Eye,
      color: "red",
      severity: "critical",
      quotes: [
        { text: "Major bug prevents easy clicking from dashboard metrics to corresponding detailed sessions.", source: "Hard Rock" },
        { text: "We want to interact more with the dashboards but can't navigate to messaging session directly.", source: "NVIDIA - Maor Goldfarb" },
        { text: "What would be really good for me would be viewing the messaging session related to the report.", source: "Secret Escapes - Laura Meschi" }
      ],
      examples: [
        "NVIDIA: Can't click on intent to see which sessions had that intent",
        "Secret Escapes: Must manually search session IDs to validate metrics",
        "No drill-down from aggregate metrics to individual sessions",
        "Bug acknowledged - workaround is filtering in moments table"
      ]
    },
    {
      rank: 6,
      theme: 'usability',
      title: "Dashboards Lack Customization",
      description: "Critical need to add, remove, or modify metrics and create custom homepages tailored to business goals",
      customerCount: 14,
      customers: ["Indeed", "Cellebrite", "Nexo", "Help Agent", "Lululemon", "Pearson", "FedEx", "eToro", "Hard Rock", "UNCC", "Astound", "Secret Escapes", "Allegis", "FDE Team"],
      icon: Settings,
      color: "red",
      severity: "critical",
      quotes: [
        { text: "I wish I could customize the dashboard... add my own columns and filters.", source: "Cellebrite" },
        { text: "All of ours are service agents. Can we flip that filter to something else?", source: "UNCC - Alexandra Flinn" },
        { text: "Customers might want to adjust their own acceptable ranges - requires customization.", source: "FDE Team - Sergio Morales" }
      ],
      examples: [
        "eToro: Cannot edit locked calculated fields in Agent for Studio",
        "UNCC: Default 'service agent' filter useless - need agent name filter",
        "FDE Team: Need Tableau Next Plus license just to customize ranges",
        "No date range filtering for historical analysis"
      ]
    },
    {
      rank: 7,
      theme: 'usability',
      title: "Ineffective Visualizations",
      description: "Users prefer simple tables or 'Top 5' lists with clear green-for-success color coding",
      customerCount: 3,
      customers: ["Nexo", "Cellebrite", "FDE Team"],
      icon: PieChart,
      color: "red",
      severity: "medium",
      quotes: [
        { text: "I hate heat maps. I never understood heat maps.", source: "Cellebrite" },
        { text: "Line graph unintuitive... a bar chart would be easier to understand.", source: "Nexo" },
        { text: "Service managers found actual numbers more useful than percentages.", source: "FDE Team - Dreamforce" }
      ],
      examples: [
        "Heat maps require memorizing what each color means",
        "Prefer simple: good (green), bad (red), passive",
        "Tables preferred over metric cards for data analysis",
        "Numbers + line shape preferred by new users"
      ]
    },
    {
      rank: 8,
      theme: 'usability',
      title: "Poor Sharing Capabilities",
      description: "Difficult to share dashboards; unclear process for providing necessary licenses to leaders",
      customerCount: 3,
      customers: ["FDE Team", "FedEx", "Hard Rock"],
      icon: Users,
      color: "red",
      severity: "high",
      quotes: [
        { text: "Customers wanted to share insights with service line business leaders but unclear how.", source: "FDE Team - Dreamforce" },
        { text: "We want visibility to reports in each companion org, not just home org.", source: "FedEx" },
        { text: "Users suggest combining high-level overview and agent details into a unified view.", source: "Analysis" }
      ],
      examples: [
        "FDE Team: Recipients need Tableau Next Limited license to view",
        "FedEx: Must log into home org to see analytics",
        "No easy 'share' button for leadership distribution"
      ]
    },

    // ===== THEME 3: DIFFICULT TROUBLESHOOTING & ROOT CAUSE ANALYSIS (Yellow) =====
    {
      rank: 9,
      theme: 'troubleshooting',
      title: "Users Forced into Manual Excel Workarounds",
      description: "Lack of actionable insights forces manual Excel exports for analysis, scoring, and tracking",
      customerCount: 7,
      customers: ["Indeed", "Cellebrite", "Nexo", "Help Agent", "Lululemon", "Pearson", "Oniverse"],
      icon: FileSpreadsheet,
      color: "yellow",
      severity: "critical",
      quotes: [
        { text: "I literally have to export everything to Excel and manually tag each session.", source: "Cellebrite" },
        { text: "We spend hours clicking through sessions one by one to find patterns.", source: "Indeed" },
        { text: "We manually create an Excel file for each low-score session with details like case number, brand, feedback.", source: "Oniverse - Elena Maio" }
      ],
      examples: [
        "Export to Excel for manual tagging and classification",
        "Click through 100+ sessions individually to identify failures",
        "Oniverse: Cannot download session data directly from observability",
        "Manual creation of failure taxonomy in spreadsheets"
      ]
    },
    {
      rank: 10,
      theme: 'troubleshooting',
      title: "Root Cause Analysis is a 'Significant Pain Point'",
      description: "No robust tools to investigate *why* conversations failed, forcing painful manual reading",
      customerCount: 6,
      customers: ["Indeed", "Cellebrite", "Nexo", "Help Agent", "Lululemon", "Hard Rock"],
      icon: Search,
      color: "yellow",
      severity: "critical",
      quotes: [
        { text: "I can see the agent failed but I have no idea why.", source: "Indeed" },
        { text: "No robust tools to investigate *why* conversations failed.", source: "Hard Rock" },
        { text: "Root cause analysis is a significant pain point - need to manually read session traces.", source: "Analysis" }
      ],
      examples: [
        "Must manually read individual session traces",
        "No pattern detection across failed sessions",
        "Cannot correlate failures to specific knowledge gaps",
        "Hours spent on what should take minutes"
      ]
    },
    {
      rank: 11,
      theme: 'troubleshooting',
      title: "Key Components are 'Black Boxes'",
      description: "Opaque components (Retriever, Planner) make diagnosing performance or behavior issues nearly impossible",
      customerCount: 6,
      customers: ["Indeed", "Cellebrite", "Nexo", "Help Agent", "Lululemon", "Hard Rock"],
      icon: EyeOff,
      color: "yellow",
      severity: "critical",
      quotes: [
        { text: "What did the retriever return? The planner reasoning is completely hidden.", source: "Help Agent" },
        { text: "Cannot see which knowledge articles were retrieved.", source: "Indeed" },
        { text: "Key components (Retriever, Planner) are black boxes.", source: "Analysis" }
      ],
      examples: [
        "Cannot see which knowledge articles were retrieved",
        "Planner/reasoning steps are not exposed in UI",
        "No visibility into why agent chose specific action",
        "Retriever and Planner logic completely opaque"
      ]
    },
    {
      rank: 12,
      theme: 'troubleshooting',
      title: "Building Custom Reports is Too Difficult",
      description: "Complex underlying STDM is a major pain point for building custom reports and dashboards",
      customerCount: 12,
      customers: ["Cellebrite", "Nexo", "Help Agent", "Lululemon", "Pearson", "FedEx", "eToro", "Hard Rock", "UNCC", "Astound", "Oniverse", "Allegis"],
      icon: Database,
      color: "yellow",
      severity: "critical",
      quotes: [
        { text: "STDM has so many objects... we need a dedicated person just to build reports.", source: "Nexo" },
        { text: "We had to create a custom data transform to bring in messaging channel.", source: "UNCC - Alexandra Flinn" },
        { text: "Complex underlying STDM is a major pain point.", source: "Analysis" }
      ],
      examples: [
        "STDM contains 15+ DMOs requiring deep technical knowledge",
        "eToro: Must use Data Cloud console for custom metrics",
        "Hard Rock: Told to 'extract data and build own reports'",
        "Building a simple funnel report takes days of development"
      ]
    },
    {
      rank: 13,
      theme: 'troubleshooting',
      title: "Need for Custom QA Scorecards",
      description: "Customers want to define their own QA scorecards and use an LLM workbench to score against them",
      customerCount: 4,
      customers: ["Lululemon", "Hard Rock", "Oniverse", "FDE Team"],
      icon: ClipboardCheck,
      color: "yellow",
      severity: "high",
      quotes: [
        { text: "Customers approach agent evaluation from a QA/QM perspective, valuing structured scorecards.", source: "Lululemon" },
        { text: "LLM as workbench for validation, not primary source.", source: "Lululemon" },
        { text: "LLM scoring not customizable - customers want to tweak prompts.", source: "FDE Team - Dreamforce" }
      ],
      examples: [
        "Want to define custom QA criteria per business needs",
        "Need LLM workbench to score conversations against criteria",
        "FDE Team: High/medium/low scoring is fixed",
        "Align AI scoring with company quality standards"
      ]
    },

    // ===== THEME 4: CRITICAL FUNCTIONALITY GAPS (Green) =====
    {
      rank: 14,
      theme: 'functionality',
      title: "Custom Tagging & Evaluation is Essential",
      description: "Inability to create custom tags or define custom evaluation criteria is a major functional gap",
      customerCount: 7,
      customers: ["Cellebrite", "Lululemon", "Help Agent", "Indeed", "Pearson", "NVIDIA", "FDE Team"],
      icon: MessageSquare,
      color: "green",
      severity: "critical",
      quotes: [
        { text: "I want to flag this session as a bug but there's no way to do that in the tool.", source: "Cellebrite" },
        { text: "Yana expressed the need for product-based tagging per messaging session.", source: "NVIDIA" },
        { text: "Custom tagging would support tagging competitors, product mentions, sentiment (0-5).", source: "FDE Team - Itay Oren" }
      ],
      examples: [
        "Cannot flag sessions as 'bug', 'needs review', or 'resolved'",
        "NVIDIA: Need to categorize by product (DGX, switches)",
        "FDE Team: 'Unified Evals' / 'Agent Force Evals' in development",
        "No annotation capability for adding context notes"
      ]
    },
    {
      rank: 15,
      theme: 'functionality',
      title: "Missing 'What If' Analysis",
      description: "Users need to simulate and measure potential impact of changes before production deployment",
      customerCount: 3,
      customers: ["Help Agent", "Lululemon", "Allegis"],
      icon: FlaskConical,
      color: "green",
      severity: "high",
      quotes: [
        { text: "Need for a 'what if' analysis capability to simulate the impact of changes.", source: "Help Agent" },
        { text: "Score → Classify → Root Cause → Simulate Fix - this is the north star workflow.", source: "Lululemon - Erez Agami" },
        { text: "Need real-time consumption analysis during development - like a debug log for credits.", source: "Allegis - Barry" }
      ],
      examples: [
        "Cannot test token count changes before deploy",
        "Cannot simulate different chunk retrieval numbers",
        "Allegis: No real-time credit debugging during development",
        "Must implement changes blindly and hope for the best"
      ]
    },
    {
      rank: 16,
      theme: 'functionality',
      title: "Lack of AI-Driven Insights",
      description: "Users want AI to explain *why* a metric is trending down, beyond just showing the drop",
      customerCount: 2,
      customers: ["Cellebrite", "NVIDIA"],
      icon: Sparkles,
      color: "green",
      severity: "medium",
      quotes: [
        { text: "I would expect an AI to give me an insight of why is it dropping down.", source: "Cellebrite" },
        { text: "Understanding the number of questions per session is crucial for determining customer behavior.", source: "NVIDIA - Yana Irani" }
      ],
      examples: [
        "Metric drops 20% but no explanation provided",
        "Must manually investigate root causes",
        "Want AI to surface anomalies and explain them",
        "Proactive insights would save hours of investigation"
      ]
    },
    {
      rank: 17,
      theme: 'functionality',
      title: "No 'Call to Action' Features",
      description: "UI lacks actionable buttons to directly trigger workflows based on observed metrics",
      customerCount: 3,
      customers: ["Help Agent", "Hard Rock", "Cellebrite"],
      icon: Zap,
      color: "green",
      severity: "medium",
      quotes: [
        { text: "Metrics are just numbers without context. What do I do with a 65% score?", source: "Help Agent" },
        { text: "No 'Call to Action' buttons to trigger workflows from metrics.", source: "Analysis" }
      ],
      examples: [
        "See low deflection but no button to 'Review Failed Sessions'",
        "Cannot trigger case creation from analytics view",
        "No 'Assign to Team' action from session list",
        "Metrics are passive displays, not workflow triggers"
      ]
    },
    {
      rank: 18,
      theme: 'functionality',
      title: "PII Handling is a Major Concern",
      description: "Concerns about how sensitive data like SSNs are handled and masked; need for better data security",
      customerCount: 2,
      customers: ["FDE Team", "IBM"],
      icon: Shield,
      color: "green",
      severity: "high",
      quotes: [
        { text: "Customer concern about identification and secure handling of social security numbers in transcripts.", source: "FDE Team - Dreamforce" },
        { text: "A solution is being developed by Data Cloud - pilot expected next month with permission-based masking.", source: "FDE Team - Itay Oren" }
      ],
      examples: [
        "SSN visible in chat transcripts without permission controls",
        "Data Cloud pilot for PII masking coming soon",
        "Mask data based on user permission queries",
        "Compliance and security risk until resolved"
      ]
    },
    {
      rank: 19,
      theme: 'metrics',
      title: "Cannot Filter by Channel/Department",
      description: "Analytics doesn't include messaging channel, brand, or country - impossible to segment data",
      customerCount: 5,
      customers: ["UNCC", "Astound", "FedEx", "Hard Rock", "Oniverse"],
      icon: Filter,
      color: "orange",
      severity: "high",
      quotes: [
        { text: "Any reporting based on Agent Force Analytics, we need to filter by messaging channel.", source: "UNCC - Alexandra Flinn" },
        { text: "Calcedonia requires deeper insights filtered by brand and country.", source: "Oniverse - Elena Maio" },
        { text: "We want visibility to reports in each companion org, not just home org.", source: "FedEx" }
      ],
      examples: [
        "UNCC: Can't differentiate IT vs Student Services conversations",
        "Oniverse: Cannot filter by brand (5 brands) or country",
        "Astound: API and Slack sessions mixed in logs",
        "FedEx: Analytics only visible from home org"
      ]
    },
    {
      rank: 20,
      theme: 'usability',
      title: "Complicated UI with Too Many Tabs",
      description: "Users suggest combining high-level overview and agent details into a unified view",
      customerCount: 3,
      customers: ["Nexo", "Cellebrite", "FDE Team"],
      icon: Eye,
      color: "red",
      severity: "medium",
      quotes: [
        { text: "Key Insights, Moments, Agent Performance - too many tabs to navigate.", source: "Cellebrite" },
        { text: "Users suggest combining high-level overview and agent details into a unified view.", source: "Analysis" }
      ],
      examples: [
        "Multiple tabs require constant switching",
        "Information scattered across different views",
        "No unified dashboard combining key insights",
        "Streamlined view would improve workflow"
      ]
    },
    {
      rank: 21,
      theme: 'troubleshooting',
      title: "Taxonomy & Intent Mismatch",
      description: "Auto-generated intents don't align with business categories; teams build external tools",
      customerCount: 4,
      customers: ["Indeed", "Nexo", "Lululemon", "Pearson"],
      icon: Target,
      color: "yellow",
      severity: "medium",
      quotes: [
        { text: "The auto-detected intents don't match our business categories at all.", source: "Indeed" },
        { text: "We had to build our own intent classification tool because the built-in one is useless.", source: "Nexo" },
        { text: "Our product taxonomy doesn't align with how the system categorizes topics.", source: "Lululemon" }
      ],
      examples: [
        "Auto-generated intents: 'General Inquiry' vs business needs: 'Return Request'",
        "Teams build external classification tools (Python, GPT wrappers)",
        "Intent data is ignored because it's not actionable",
        "Cannot map system intents to business KPIs"
      ]
    },
    {
      rank: 22,
      theme: 'metrics',
      title: "No Unique User Tracking",
      description: "Cannot identify distinct users, repeat vs first-time visitors, or calculate true adoption rates",
      customerCount: 6,
      customers: ["eToro", "Hard Rock", "Astound", "Cellebrite", "Nexo", "Allegis"],
      icon: UserCheck,
      color: "orange",
      severity: "high",
      quotes: [
        { text: "We're trying to understand who's using it... reaching many or used intensively by few?", source: "Hard Rock - Shira Gershoni" },
        { text: "Active user rate was 6% but with correct formula it's actually 84%!", source: "eToro - Avi Kuzi" },
        { text: "We assigned this employee agent to almost 2,000 users but it's showing only 12.", source: "Allegis - Abhijit Mahato" }
      ],
      examples: [
        "eToro: Wrong formula divided by all Salesforce users instead of assigned",
        "Hard Rock: Cannot differentiate repeat vs first-time users",
        "Allegis: 2,000 users assigned but only 12 unique users showing",
        "Cannot measure true adoption rate or reach vs. intensity"
      ]
    },
    {
      rank: 23,
      theme: 'troubleshooting',
      title: "Duplicate Session Counts in Reports",
      description: "Same messaging session counted multiple times due to escalations or planner session forks",
      customerCount: 2,
      customers: ["Secret Escapes", "Allegis"],
      icon: Database,
      color: "yellow",
      severity: "high",
      quotes: [
        { text: "Why would the same session be counted twice or three times in the report?", source: "Secret Escapes - Laura Meschi" },
        { text: "One messaging session might be tied to multiple planner sessions due to escalations.", source: "Nir Tzavchon" },
        { text: "The refresh history showed full refreshes of 4.8 million records instead of incrementals.", source: "Allegis - Abhijit Mahato" }
      ],
      examples: [
        "Secret Escapes: Sessions counted 2-3x when escalated or user returns",
        "Allegis: Data transforms doing full refreshes consuming credits",
        "Agent Force Default running causes forks in sessions",
        "Multiple planner sessions tied to single messaging session"
      ]
    },
    // ===== NEW PAIN POINTS FROM ALLEGIS (Sep 25, 2025) =====
    {
      rank: 24,
      theme: 'functionality',
      title: "Legacy SKU Blocks Modern Analytics",
      description: "Customers on legacy 'conversations' SKU cannot access Tableau Next, agent analytics beta, or new observability features",
      customerCount: 1,
      customers: ["Allegis"],
      icon: Shield,
      color: "green",
      severity: "critical",
      quotes: [
        { text: "You can't enable Tableau Next because you're on the legacy conversations SKU, not flex credits.", source: "Nir Tzavchon - Sep 25, 2025" },
        { text: "We tried to install service agent analytics app and installation failed.", source: "Allegis - Abhijit Mahato" },
        { text: "Tableau Next Limited Consumer permission set is required but we don't have it.", source: "Allegis - Abhijit Mahato" }
      ],
      examples: [
        "Cannot enable Tableau Next UI for out-of-box dashboards",
        "Agent Analytics Beta installation fails without flex credits",
        "Early adopters stuck on legacy infrastructure",
        "Forces reliance on complex SDM queries for custom reports"
      ]
    },
    {
      rank: 25,
      theme: 'functionality',
      title: "No Real-time Credit/Consumption Debugging",
      description: "Cannot see real-time credit consumption during development - need debug log showing credits used per step/action",
      customerCount: 1,
      customers: ["Allegis"],
      icon: Zap,
      color: "green",
      severity: "high",
      quotes: [
        { text: "Is there capability for real-time analysis to run an agent and it gives you real-time breakdown... like a debug tool that says 'step one, you just burned 85 credits'?", source: "Allegis - Barry" },
        { text: "Picturing a debug log that said credits used for steps actions one through five.", source: "Allegis - Barry" },
        { text: "The digital wallet app shows consumption but it's very asynchronous - doesn't feel like real-time analytics.", source: "Allegis - Barry" }
      ],
      examples: [
        "No way to see credit consumption during agent testing",
        "Digital wallet app updates asynchronously, not in real-time",
        "Cannot forecast costs during development phase",
        "Need debug-style output showing per-action credit usage"
      ]
    },
    {
      rank: 26,
      theme: 'usability',
      title: "Permission Set Visibility Issues",
      description: "Users with identical permission sets have different access - some can't see Agent Force Studio tabs",
      customerCount: 1,
      customers: ["Allegis"],
      icon: EyeOff,
      color: "red",
      severity: "high",
      quotes: [
        { text: "I have the same permission sets as Abhijit but I can't see any tabs in Agent Force Studio.", source: "Allegis - Jeff Grosse" },
        { text: "If I'm made system administrator, I can see it - but not everyone should need to be sys admin.", source: "Allegis - Jeff Grosse" },
        { text: "I can see the app but I get no tabs.", source: "Allegis - Jeff Grosse" }
      ],
      examples: [
        "Same perm sets produce different UI visibility",
        "Must escalate to System Admin to see Agent Force Studio tabs",
        "Inconsistent access control causing confusion",
        "No clear documentation on required permissions"
      ]
    },
    {
      rank: 27,
      theme: 'troubleshooting',
      title: "Data Refresh Does Full Instead of Incremental",
      description: "Legacy data transforms perform full refreshes of millions of records instead of incremental updates, consuming excessive credits",
      customerCount: 1,
      customers: ["Allegis"],
      icon: Server,
      color: "yellow",
      severity: "high",
      quotes: [
        { text: "The refresh history shows it's doing a full refresh every time of 4.8 million records instead of incrementals.", source: "Allegis - Jeff Grosse" },
        { text: "This was part of our legacy solution and it was very credit consuming. We unscheduled these data transforms.", source: "Nir Tzavchon" },
        { text: "Salesforce support turned it off June 21st because it was consuming a lot of credits.", source: "Allegis - Abhijit Mahato" }
      ],
      examples: [
        "4.8M rows refreshed every cycle instead of delta updates",
        "Salesforce had to manually disable transforms due to credit burn",
        "Legacy agent analytics being retired April 2026",
        "Forces choice between no data or excessive credit usage"
      ]
    },
  ];

  const customers = [
    // Dec 16, 2025
    {
      id: 'indeed',
      name: 'Indeed',
      icon: Briefcase,
      color: 'blue',
      tagline: 'Employer Service Agent (ESA)',
      description: 'Automated taxonomy and escalation reduction via N8N orchestration',
      metrics: ['CSAT: 3.0 → 4.0', 'AI Accuracy: 95-99%', 'Resolution Rate Focus'],
      workflowUrl: '?view=indeed-workflow',
      uxUrl: '?view=agent-diagnostics',
      date: 'Dec 16, 2025'
    },
    {
      id: 'lululemon',
      name: 'Lululemon',
      icon: ShoppingBag,
      color: 'red',
      tagline: 'QA/QM Framework',
      description: 'Open-source LLM evaluation with structured scorecard approach',
      metrics: ['6 Metrics Tracked', 'QA Team Review', 'Custom Scorecards'],
      workflowUrl: '?view=lululemon-workflow',
      uxUrl: '?view=lululemon-ux',
      date: 'Dec 16, 2025'
    },
    // Dec 15, 2025
    {
      id: 'pearson',
      name: 'Pearson',
      icon: Building2,
      color: 'indigo',
      tagline: 'UK Education Agent + Prototype Feedback',
      description: 'Permissions issues, deflection definition mismatch, and prototype feedback for new analytics',
      metrics: ['Deflection Definition', 'Session Annotation', 'Compare Topics'],
      workflowUrl: '?view=pearson-workflow',
      uxUrl: '?view=pearson-ux',
      date: 'Dec 15, 2025'
    },
    {
      id: 'help-agent',
      name: 'Help Agent',
      icon: HelpCircle,
      color: 'cyan',
      tagline: 'Salesforce Internal',
      description: 'Scaling observability from 250K/week to 2M/month conversations',
      metrics: ['250K → 2M Scale', 'LLM as Judge', 'Synthetic Testing'],
      workflowUrl: '?view=help-agent-workflow',
      uxUrl: '?view=help-agent-ux',
      date: 'Dec 15, 2025'
    },
    // Dec 10, 2025
    {
      id: 'cellebrite',
      name: 'Cellebrite',
      icon: Building2,
      color: 'purple',
      tagline: 'Service Agent Analytics',
      description: 'Moving from manual Excel workflows to dashboard-driven insights',
      metrics: ['Alpha Customers: 5', 'Manual Excel → Dashboard', 'Deflection Analysis'],
      workflowUrl: '?view=cellebrite-workflow',
      uxUrl: '?view=cellebrite-ux',
      date: 'Dec 10, 2025'
    },
    // Dec 2, 2025
    {
      id: 'nexo',
      name: 'Nexo',
      icon: Wallet,
      color: 'green',
      tagline: 'Crypto Service Agent',
      description: 'Customizable dashboards and LLM evaluation framework for crypto support',
      metrics: ['Custom Metrics Needed', 'Flex Credits Tracking', 'Intent Definition'],
      workflowUrl: '?view=nexo-workflow',
      uxUrl: '?view=nexo-ux',
      date: 'Dec 2, 2025'
    },
    // Nov 19, 2025
    {
      id: 'etoro',
      name: 'eToro',
      icon: TrendingUpIcon,
      color: 'teal',
      tagline: 'Copilot Adoption Dashboard',
      description: 'Custom metrics for active user rate, permission set filtering, and adoption campaigns',
      metrics: ['167 Users', 'Custom Metrics', 'Adoption Tracking'],
      workflowUrl: '?view=etoro-workflow',
      uxUrl: '?view=etoro-ux',
      date: 'Nov 19, 2025'
    },
    {
      id: 'uncc',
      name: 'UNCC',
      icon: GraduationCap,
      color: 'emerald',
      tagline: 'Campus-Wide Agent',
      description: 'University scaling agents across departments with channel-based filtering needs',
      metrics: ['2 Agents → 1', 'Channel Filtering', 'SDM Custom Reports'],
      workflowUrl: '?view=uncc-workflow',
      uxUrl: '?view=uncc-ux',
      date: 'Nov 19, 2025'
    },
    // Nov 12, 2025
    {
      id: 'hardrock',
      name: 'Hard Rock',
      icon: Music,
      color: 'pink',
      tagline: 'Melody & Roadie Agents',
      description: 'SMS and web agents for hotel guests, loyalty programs, and reservation assistance',
      metrics: ['2 Agents Live', 'Analytics 2.0', 'User Tracking'],
      workflowUrl: '?view=hardrock-workflow',
      uxUrl: '?view=hardrock-ux',
      date: 'Nov 12, 2025'
    },
    // Nov 10, 2025
    {
      id: 'fedex',
      name: 'FedEx',
      icon: Package,
      color: 'orange',
      tagline: 'Enterprise Data Cloud',
      description: 'Sandbox support and Data Cloud One multi-org architecture for 15K+ global sellers',
      metrics: ['Sandbox Support', 'DC1 Architecture', '3-4 Agents Planned'],
      workflowUrl: '?view=fedex-workflow',
      uxUrl: '?view=fedex-ux',
      date: 'Nov 10, 2025'
    },
    // Nov 6, 2025
    {
      id: 'nvidia',
      name: 'NVIDIA',
      icon: Cpu,
      color: 'lime',
      tagline: 'Agent Observability Review',
      description: 'Navigation issues, manual tagging of 300+ sessions weekly, topic restructuring needs',
      metrics: ['300+ Sessions/Week', 'Custom Tagging', 'Semantic Layer'],
      workflowUrl: '?view=nvidia-workflow',
      uxUrl: '?view=nvidia-ux',
      date: 'Dec 18, 2025'
    },
    {
      id: 'ibm',
      name: 'IBM',
      icon: Server,
      color: 'sky',
      tagline: 'Federal Tiger Team',
      description: 'Federal & commercial multi-platform agents with consumption tracking and forecasting needs',
      metrics: ['~12 Agents', 'GovCloud Deployment', 'Cost Tracking'],
      workflowUrl: '?view=ibm-workflow',
      uxUrl: '?view=ibm-ux',
      date: 'Dec 17, 2025'
    },
    {
      id: 'astound',
      name: 'Astound',
      icon: MessageCircle,
      color: 'violet',
      tagline: 'HR Slack Agent',
      description: 'Internal HR agent on Slack needs migration from Service to Employee Agent type',
      metrics: ['Wrong Agent Type', 'Slack Metrics', '80% Resolution Goal'],
      workflowUrl: '?view=astound-workflow',
      uxUrl: '?view=astound-ux',
      date: 'Nov 6, 2025'
    },
    {
      id: 'secretescapes',
      name: 'Secret Escapes',
      icon: Briefcase,
      color: 'rose',
      tagline: 'Metric Discrepancies & Data Export',
      description: 'Major discrepancies in abandonment/deflection metrics, duplicate session counts, and unclear engagement definitions',
      metrics: ['10-15% vs ~0% Abandon', 'Duplicate Sessions', 'Engagement Mismatch'],
      workflowUrl: '?view=secretescapes-workflow',
      uxUrl: '?view=secretescapes-ux',
      date: 'Sep 16 - Dec 19, 2025'
    },
    {
      id: 'oniverse',
      name: 'Oniverse',
      icon: ShoppingBag,
      color: 'pink',
      tagline: 'Italian Retail - 5 Brands',
      description: 'Quality review process with manual Excel files; needs brand/country filtering and QA annotation',
      metrics: ['40% Escalation', 'No Review Marker', 'Brand Filtering'],
      workflowUrl: '?view=oniverse-workflow',
      uxUrl: '?view=oniverse-ux',
      date: 'Dec 20, 2025'
    },
    {
      id: 'allegis',
      name: 'Allegis',
      icon: Building2,
      color: 'sky',
      tagline: 'Legacy SKU & SDM Exploration',
      description: 'Early Agent Force adopter stuck on conversations SKU - cannot access Tableau Next, needs SDM-based custom reports for user adoption and consumption forecasting',
      metrics: ['12 vs 2000 Users', '4.8M Full Refreshes', 'Perm Set Bug', 'Real-time Credits'],
      workflowUrl: '?view=allegis-workflow',
      uxUrl: '?view=allegis-ux',
      date: 'Sep 25, 2025'
    },
    {
      id: 'fde-team',
      name: 'FDE Team',
      icon: Users,
      color: 'orange',
      tagline: 'Dreamforce Feedback',
      description: 'Aggregated customer feedback from Dreamforce demos - metric definitions, sharing, LLM customization',
      metrics: ['10 Pain Points', 'Custom Tags', 'PII Masking'],
      workflowUrl: '?view=fde-workflow',
      uxUrl: '?view=fde-ux',
      date: 'Oct 29, 2025'
    }
  ];

  const handleNavigate = (url) => {
    window.location = window.location.origin + window.location.pathname + url;
  };

  const handleKeyDown = (e, url) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate(url);
    }
  };

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="home-bg">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>

      {/* Header */}
      <header className="home-header">
        <div className="logo-section">
          <div className="logo-icon">
            <Activity size={32} />
          </div>
          <div className="logo-text">
            <h1>Agentforce Observability</h1>
            <p>Customer Research & Workflow Visualizations</p>
          </div>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <Users size={18} />
            <span>17 Customers</span>
          </div>
          <div className="stat-item">
            <BarChart3 size={18} />
            <span>23 Visualizations</span>
          </div>
          <div className="stat-item">
            <Target size={18} />
            <span>Dec 2025</span>
          </div>
        </div>
      </header>

      {/* Workflow Guide CTA */}
      <section className="guide-cta">
        <div className="cta-content">
          <div className="cta-icon">
            <Activity size={32} />
          </div>
          <div className="cta-text">
            <h3>New: Complete Observability Workflow Guide</h3>
            <p>Learn the end-to-end process: Discover → Investigate → Diagnose → Fix → Monitor</p>
          </div>
          <button
            className="cta-button"
            onClick={() => handleNavigate('?view=workflow-guide')}
            onKeyDown={(e) => handleKeyDown(e, '?view=workflow-guide')}
            tabIndex={0}
          >
            <span>View Guide</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Top Pain Points - Filter by Theme */}
      <section className="pain-points-section">
        <h2 className="section-title">
          <AlertTriangle size={20} />
          <span>Key Issues with Agentforce Analytics</span>
          <span className="section-hint">27 Pain Points • Click theme to filter • Sorted by customer count</span>
        </h2>
        
        {/* Clickable Theme Filter Tags */}
        <div className="theme-filter-bar">
          <button 
            className={`theme-filter-tag all ${selectedTheme === null ? 'active' : ''}`}
            onClick={() => handleThemeClick(null)}
            aria-pressed={selectedTheme === null}
          >
            <span>All</span>
            <span className="theme-count">{topPainPoints.length}</span>
          </button>
          {painPointThemes.map((theme) => {
            const ThemeIcon = theme.icon;
            const themeCount = topPainPoints.filter(p => p.theme === theme.id).length;
            const isActive = selectedTheme === theme.id;
            return (
              <button 
                key={theme.id} 
                className={`theme-filter-tag ${theme.color} ${isActive ? 'active' : ''}`}
                onClick={() => handleThemeClick(theme.id)}
                aria-pressed={isActive}
              >
                <ThemeIcon size={16} />
                <span>{theme.title}</span>
                <span className="theme-count">{themeCount}</span>
              </button>
            );
          })}
        </div>

        {/* Pain Points List - Sorted by Customer Count */}
        <div className="pain-points-list">
          {topPainPoints
            .filter(pain => selectedTheme === null || pain.theme === selectedTheme)
            .sort((a, b) => b.customerCount - a.customerCount)
            .map((pain) => {
              const IconComponent = pain.icon;
              const isExpanded = expandedPain === pain.rank;
              const themeInfo = painPointThemes.find(t => t.id === pain.theme);
              return (
                <div 
                  key={pain.rank} 
                  className={`pain-point-card ${pain.color} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handlePainClick(pain.rank)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handlePainClick(pain.rank);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="pain-card-main">
                    <div className={`pain-theme-indicator ${themeInfo?.color || 'gray'}`} title={themeInfo?.title}>
                      {themeInfo && <themeInfo.icon size={14} />}
                    </div>
                    <div className={`pain-icon-wrap ${pain.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="pain-content">
                      <h3>{pain.title}</h3>
                      <p>{pain.description}</p>
                      <div className="pain-customers">
                        {pain.customers.slice(0, 5).map((customer, idx) => (
                          <span key={idx} className="customer-chip">{customer}</span>
                        ))}
                        {pain.customers.length > 5 && (
                          <span className="customer-chip more">+{pain.customers.length - 5} more</span>
                        )}
                      </div>
                    </div>
                    <div className={`pain-count ${pain.color}`}>
                      <span className="count-number">{pain.customerCount}</span>
                      <span className="count-label">/ 17</span>
                    </div>
                    <div className="pain-expand-icon">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="pain-expanded-content">
                      <div className="pain-quotes-section">
                        <h4><Quote size={16} /> Customer Quotes</h4>
                        <div className="pain-quotes-list">
                          {pain.quotes.map((quote, idx) => (
                            <div key={idx} className="pain-quote-item">
                              <p>"{quote.text}"</p>
                              <span className="quote-source">— {quote.source}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pain-examples-section">
                        <h4><AlertTriangle size={16} /> Examples & Symptoms</h4>
                        <ul className="pain-examples-list">
                          {pain.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </section>

      {/* Customer Grid */}
      <section className="customers-section">
        {(() => {
          // Get customers associated with selected theme's pain points
          const themeCustomerNames = selectedTheme 
            ? [...new Set(
                topPainPoints
                  .filter(p => p.theme === selectedTheme)
                  .flatMap(p => p.customers)
              )]
            : null;
          
          const filteredCustomers = customers.filter(
            customer => !themeCustomerNames || themeCustomerNames.includes(customer.name)
          );
          
          return (
            <>
              <h2 className="section-title">
                <span>Select a Customer</span>
                {selectedTheme ? (
                  <span className="filter-indicator">
                    <Filter size={14} />
                    {painPointThemes.find(t => t.id === selectedTheme)?.title}
                    <span className="filter-count">{filteredCustomers.length} of {customers.length}</span>
                  </span>
                ) : (
                  <span className="customer-count-badge">{customers.length} customers</span>
                )}
                <ChevronRight size={20} />
              </h2>
              
              <div className="customer-grid">
                {filteredCustomers.map((customer) => {
                  const IconComponent = customer.icon;
                  const isHovered = hoveredCustomer === customer.id;
            
            return (
              <div
                key={customer.id}
                className={`customer-tile ${customer.color} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCustomer(customer.id)}
                onMouseLeave={() => setHoveredCustomer(null)}
              >
                <div className="tile-header">
                  <div className={`tile-icon ${customer.color}`}>
                    <IconComponent size={32} />
                  </div>
                  <div className="tile-date">{customer.date}</div>
                </div>
                
                <div className="tile-content">
                  <h3>{customer.name}</h3>
                  <span className="tile-tagline">{customer.tagline}</span>
                  <p className="tile-description">{customer.description}</p>
                  
                  <div className="tile-metrics">
                    {customer.metrics.map((metric, idx) => (
                      <span key={idx} className="metric-tag">{metric}</span>
                    ))}
                  </div>
                </div>

                <div className="tile-actions">
                  <button
                    className="tile-btn workflow-btn"
                    onClick={() => handleNavigate(customer.workflowUrl)}
                    onKeyDown={(e) => handleKeyDown(e, customer.workflowUrl)}
                    tabIndex={0}
                    aria-label={`View ${customer.name} Workflow`}
                  >
                    <Activity size={16} />
                    <span>Workflow</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    className="tile-btn ux-btn"
                    onClick={() => handleNavigate(customer.uxUrl)}
                    onKeyDown={(e) => handleKeyDown(e, customer.uxUrl)}
                    tabIndex={0}
                    aria-label={`View ${customer.name} UX Findings`}
                  >
                    <Eye size={16} />
                    <span>UX Findings</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`tile-glow ${customer.color}`}></div>
              </div>
            );
          })}
              </div>
            </>
          );
        })()}
      </section>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon red">
            <MessageSquare size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-number">27</span>
            <span className="stat-label">Pain Points Tracked</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">
            <Zap size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-number">5</span>
            <span className="stat-label">Desired Features</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-number">4</span>
            <span className="stat-label">Key Insights</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue">
            <Shield size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-number">17</span>
            <span className="stat-label">Total Pages</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>Agentforce Observability Research • December 2025</p>
      </footer>
    </div>
  );
};

export default CustomerHomePage;

