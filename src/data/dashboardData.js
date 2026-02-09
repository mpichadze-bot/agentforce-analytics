// ==========================================================================
// DASHBOARD DATA - Extracted for use across multiple dashboard views
// ==========================================================================

// Theme definitions
export const themesData = [
  {
    id: 'metrics',
    title: 'Flawed Metrics & Data Issues',
    color: 'orange',
    description: 'Metric definitions, data discrepancies, and trust issues'
  },
  {
    id: 'usability',
    title: 'Dashboard Usability & UI Challenges',
    color: 'red',
    description: 'Navigation, customization, and visualization problems'
  },
  {
    id: 'troubleshooting',
    title: 'Difficult Troubleshooting & Root Cause Analysis',
    color: 'yellow',
    description: 'Manual workarounds, black boxes, and complex reporting'
  },
  {
    id: 'functionality',
    title: 'Critical Functionality Gaps',
    color: 'green',
    description: 'Missing features for tagging, simulation, and security'
  }
];

// Pain Points Data
export const painPointsData = [
  // ===== THEME 1: FLAWED METRICS & DATA ISSUES (Orange) =====
  {
    rank: 1,
    theme: 'metrics',
    title: "Major Data Discrepancies",
    description: "Dashboard metrics don't align with internal measurements - 1-2% vs 10-15% abandonment rates",
    customerCount: 10,
    customers: ["Secret Escapes", "Pearson", "eToro", "Astound", "Hard Rock", "UNCC", "FedEx", "Cellebrite", "Nexo", "Shark Ninja"],
    color: "orange",
    severity: "critical",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "Improve Abandonment & Deflection" },
    quotes: [
      { text: "Dashboard shows 1-2% abandonment vs our internal tracking of 10-15%.", source: "Secret Escapes - Laura Meschi" },
      { text: "The current definition of deflection doesn't align - includes frustrated users who left.", source: "Pearson - Nicole Lozano" },
      { text: "Active user rate was 6% but with correct formula it's actually 84%!", source: "eToro - Avi Kuzi" },
      { text: "These metrics don't provide meaningful insights - deflected just means the person left the chat, not that the question was answered.", source: "Shark Ninja - Carolin" }
    ],
    examples: [
      "Secret Escapes: 10-15% internal abandonment vs near 0% in Salesforce",
      "eToro: Wrong formula divided by all Salesforce users instead of assigned users",
      "Pearson: Deflection includes frustrated users who called instead",
      "Shark Ninja: Deflection = window closed, not actual call containment",
      "Major discrepancies erode trust in all dashboard data"
    ]
  },
  {
    rank: 2,
    theme: 'metrics',
    title: "Unclear Metric Definitions",
    description: "Users lack clear, in-app definitions for metrics like 'engagement rate', 'deflection rate', or 'closed action'",
    customerCount: 9,
    customers: ["FDE Team", "eToro", "Cellebrite", "Nexo", "Help Agent", "Astound", "Secret Escapes", "Allegis", "Shark Ninja"],
    color: "orange",
    severity: "critical",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "Enabling metrics and UI customization" },
    quotes: [
      { text: "We measure engagement based on end-user messages - your definition is guided by your commercial model.", source: "Secret Escapes - Laura Meschi" },
      { text: "What triggers 'closed action'? We've never seen the agent exit a session based on context.", source: "Secret Escapes - Daniel Measures" },
      { text: "This calculated field is locked. You can't edit this one.", source: "eToro" },
      { text: "These definitions don't quite reflect intuitive user behavior or the true success of a conversation.", source: "Nir Tzavchon - Shark Ninja call" }
    ],
    examples: [
      "Secret Escapes: Engagement = end-user messages vs Salesforce = action invoked",
      "Shark Ninja: Escalation = transfer to human vs their definition = phone number given",
      "Confusing 'closed action' vs 'closed user request' definitions",
      "No 'info buttons' for quick definitions like in typical CRM"
    ]
  },
  {
    rank: 3,
    theme: 'metrics',
    title: "Irrelevant Out-of-Box Metrics",
    description: "Web chat metrics unusable for channels like Slack, leading to misleading data. Out-of-box metrics don't align with business definitions or strategic KPIs",
    customerCount: 6,
    customers: ["Astound", "UNCC", "Hard Rock", "FedEx", "Oniverse", "Help Agent"],
    color: "orange",
    severity: "high",
    roadmap: null,
    quotes: [
      { text: "Web chat metrics are unusable for channels like Slack, leading to misleading data.", source: "Astound" },
      { text: "Unique user metrics would not work well with the current service agent type.", source: "Astound" },
      { text: "Any reporting based on Agent Force Analytics, we need to be able to filter by messaging channel.", source: "UNCC - Alexandra Flinn" },
      { text: "None of these out-of-box metrics are very helpful for us today. The out-of-box escalation rate is misleading - it only counts live chat transfer, missing asynchronous case creation. Our real escalation rate is ~30%, not 7%.", source: "Help Agent - Zachary Stauber" }
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
    color: "orange",
    severity: "high",
    roadmap: null,
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
  {
    rank: 19,
    theme: 'metrics',
    title: "Cannot Filter by Channel/Department",
    description: "Analytics doesn't include messaging channel, brand, or country - impossible to segment data",
    customerCount: 5,
    customers: ["UNCC", "Astound", "FedEx", "Hard Rock", "Oniverse"],
    color: "orange",
    severity: "high",
    roadmap: null,
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
    rank: 22,
    theme: 'metrics',
    title: "No Unique User Tracking",
    description: "Cannot identify distinct users, repeat vs first-time visitors, or calculate true adoption rates",
    customerCount: 7,
    customers: ["eToro", "Hard Rock", "Astound", "Cellebrite", "Nexo", "Allegis", "PayPal"],
    color: "orange",
    severity: "high",
    roadmap: null,
    quotes: [
      { text: "We're trying to understand who's using it... reaching many or used intensively by few?", source: "Hard Rock - Shira Gershoni" },
      { text: "Active user rate was 6% but with correct formula it's actually 84%!", source: "eToro - Avi Kuzi" },
      { text: "We assigned this employee agent to almost 2,000 users but it's showing only 12.", source: "Allegis - Abhijit Mahato" },
      { text: "Major struggle for the customer with the employee agent is getting accurate adoption and usage numbers, such as tracking weekly active users.", source: "PayPal - Nathalie Sautner" }
    ],
    examples: [
      "eToro: Wrong formula divided by all Salesforce users instead of assigned",
      "Hard Rock: Cannot differentiate repeat vs first-time users",
      "Allegis: 2,000 users assigned but only 12 unique users showing",
      "PayPal: Major struggle getting accurate adoption and usage numbers, tracking weekly active users",
      "Cannot measure true adoption rate or reach vs. intensity"
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
    color: "red",
    severity: "critical",
    roadmap: { status: "planned", timeline: "AKO Jan '26", item: "Faster agentic insights exploration" },
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
    customerCount: 15,
    customers: ["Indeed", "Cellebrite", "Nexo", "Help Agent", "Lululemon", "Pearson", "FedEx", "eToro", "Hard Rock", "UNCC", "Astound", "Secret Escapes", "Allegis", "FDE Team", "PayPal"],
    color: "red",
    severity: "critical",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "Enabling metrics and UI customization" },
    quotes: [
      { text: "I wish I could customize the dashboard... add my own columns and filters.", source: "Cellebrite" },
      { text: "All of ours are service agents. Can we flip that filter to something else?", source: "UNCC - Alexandra Flinn" },
      { text: "Customers might want to adjust their own acceptable ranges - requires customization.", source: "FDE Team - Sergio Morales" },
      { text: "Customer preferred a 'lead nurturing dashboard' focused on the pipeline of agent work, meetings, replies, and cancellations.", source: "PayPal - Jon Wilson" },
      { text: "New toolkit would be helpful if they transfer to service agent configuration but might not cover all future analytics use cases, suggesting a potential gap.", source: "Hard Rock - Elizabeth DeWeese" },
      { text: "Customization is super important for us. We would love for our strategic KPI set to be included as out-of-the-box concepts in observability. The current out-of-box dashboards are not customizable.", source: "Help Agent - Zachary Stauber" },
      { text: "We generally have view-only access to Tableau dashboards because only IT teams have editor-level access in production environments. This is a co-development challenge we're trying to overcome.", source: "Help Agent - Zachary Stauber" }
    ],
    examples: [
      "eToro: Cannot edit locked calculated fields in Agent for Studio",
      "UNCC: Default 'service agent' filter useless - need agent name filter",
      "FDE Team: Need Tableau Next Plus license just to customize ranges",
      "PayPal: Need custom 'lead nurturing dashboard' for pipeline, meetings, replies, cancellations",
      "Hard Rock: Concerned analytics 2.0 may not cover all future use cases after migration",
      "Help Agent: Latency is critical but not visible in aggregate dashboard view - only available per session in optimization tab",
      "Help Agent: Cannot integrate usage data and other scorecard elements into one consistent overview dashboard",
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
    color: "red",
    severity: "medium",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "UI customization for Observability" },
    quotes: [
      { text: "Line graph unintuitive... a bar chart would be easier to understand.", source: "Nexo" },
      { text: "Service managers found actual numbers more useful than percentages.", source: "FDE Team - Dreamforce" }
    ],
    examples: [
      "Complex visualizations require memorizing what each element means",
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
    color: "red",
    severity: "high",
    roadmap: null,
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
  {
    rank: 20,
    theme: 'usability',
    title: "Complicated UI with Too Many Tabs",
    description: "Users suggest combining high-level overview and agent details into a unified view",
    customerCount: 3,
    customers: ["Nexo", "Cellebrite", "FDE Team"],
    color: "red",
    severity: "medium",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "UI customization for Observability" },
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

  // ===== THEME 3: DIFFICULT TROUBLESHOOTING & ROOT CAUSE ANALYSIS (Yellow) =====
  {
    rank: 9,
    theme: 'troubleshooting',
    title: "Users Forced into Manual Excel Workarounds",
    description: "Lack of actionable insights forces manual Excel exports for analysis, scoring, and tracking",
    customerCount: 8,
    customers: ["Indeed", "Cellebrite", "Nexo", "Help Agent", "Lululemon", "Pearson", "Oniverse", "Shark Ninja"],
    color: "yellow",
    severity: "critical",
    roadmap: { status: "planned", timeline: "Dreamforce Sept '26", item: "Human-in-the-Loop reinforcement" },
    quotes: [
      { text: "I literally have to export everything to Excel and manually tag each session.", source: "Cellebrite" },
      { text: "We spend hours clicking through sessions one by one to find patterns.", source: "Indeed" },
      { text: "We manually create an Excel file for each low-score session with details like case number, brand, feedback.", source: "Oniverse - Elena Maio" },
      { text: "We're slicing and dicing manual reports from the data cloud platform - it's a messy process that delivers marginal results.", source: "Shark Ninja - Stanley Konopka" }
    ],
    examples: [
      "Export to Excel for manual tagging and classification",
      "Click through 100+ sessions individually to identify failures",
      "Oniverse: Cannot download session data directly from observability",
      "Shark Ninja: Extracting reports to Snowflake to run Gen AI over them",
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
    color: "yellow",
    severity: "critical",
    roadmap: { status: "planned", timeline: "Dreamforce Sept '26", item: "Suggest common root causes for failures" },
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
    color: "yellow",
    severity: "critical",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "Enriched telemetry for session data" },
    quotes: [
      { text: "What did the retriever return? The planner reasoning is completely hidden.", source: "Help Agent" },
      { text: "Cannot see which knowledge articles were retrieved.", source: "Indeed" },
      { text: "Key components (Retriever, Planner) are black boxes.", source: "Analysis" },
      { text: "We have zero insight into when the planner selects a topic - we have no rationale information about why that was there. What is the reasoning that you selected this topic? What is the reasoning that you selected this action?", source: "Help Agent - Zachary Stauber" },
      { text: "We frequently experience ungrounded answers and off-topic selection with no insight into the rationale from the planner service. We need the reasoning from the planner to surface why we did everything.", source: "Help Agent - Zachary Stauber" }
    ],
    examples: [
      "Cannot see which knowledge articles were retrieved",
      "Planner/reasoning steps are not exposed in UI",
      "No visibility into why agent chose specific action",
      "Retriever and Planner logic completely opaque",
      "Help Agent: Must manually copy JSON from session tracing and use Slackbot to translate and extract article URL/title/chunk metadata",
      "Help Agent: Need aggregated view of content used for bad experiences to support content teams in cleanup and deduplication",
      "Help Agent: No way to see at scale which chunks/articles are indicating usual failures"
    ]
  },
  {
    rank: 12,
    theme: 'troubleshooting',
    title: "Building Custom Reports is Too Difficult",
    description: "Complex underlying STDM is a major pain point for building custom reports and dashboards",
    customerCount: 15,
    customers: ["Cellebrite", "Nexo", "Help Agent", "Lululemon", "Pearson", "FedEx", "eToro", "Hard Rock", "UNCC", "Astound", "Oniverse", "Allegis", "Shark Ninja", "PayPal", "Secret Escapes"],
    color: "yellow",
    severity: "critical",
    roadmap: { status: "planned", timeline: "Dreamforce Sept '26", item: "Richer data analysis on Platform Traces" },
    quotes: [
      { text: "STDM has so many objects... we need a dedicated person just to build reports.", source: "Nexo" },
      { text: "We had to create a custom data transform to bring in messaging channel.", source: "UNCC - Alexandra Flinn" },
      { text: "Even if you don't have Tableau Next UI, you can build queries on the semantic data model... but navigating it requires deep technical knowledge.", source: "Nir Tzavchon - Allegis call" },
      { text: "The default agent does not currently provide API access for reports, which is a reason to motivate the customer to move to the 'employee agent' for more detailed reporting.", source: "PayPal - Tye Jones" },
      { text: "Team was 'burning through' data services credits due to using the older analytics 1.0. Agent Force Default is end-of-sale and relies on data cloud for reporting which consumes a lot of credits.", source: "Hard Rock - JP (Julio)" }
    ],
    examples: [
      "STDM contains 15+ DMOs requiring deep technical knowledge",
      "eToro: Must use Data Cloud console for custom metrics",
      "Allegis: Must navigate SDM manually without Tableau Next access",
      "PayPal: Default agent lacks API access for reports - must migrate to employee agent",
      "Hard Rock: Using Agent Force Default (end-of-sale) with analytics 1.0 consuming excessive data services credits",
      "Secret Escapes: Need analytics 2.0 migration to reduce credit consumption and improve reporting accuracy",
      "Building a simple funnel report takes days of development"
    ]
  },
  {
    rank: 13,
    theme: 'troubleshooting',
    title: "Need for Custom QA Scorecards",
    description: "Customers want to define their own QA scorecards and use an LLM workbench to score against them",
    customerCount: 5,
    customers: ["Lululemon", "Hard Rock", "Oniverse", "FDE Team", "PayPal"],
    color: "yellow",
    severity: "high",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "Custom session evaluations with LLM-as-judge" },
    quotes: [
      { text: "Customers approach agent evaluation from a QA/QM perspective, valuing structured scorecards.", source: "Lululemon" },
      { text: "LLM as workbench for validation, not primary source.", source: "Lululemon" },
      { text: "LLM scoring not customizable - customers want to tweak prompts.", source: "FDE Team - Dreamforce" },
      { text: "Customer needs to evaluate SDR agent effectiveness using metrics like email quantity and appropriate responses.", source: "PayPal - Nathalie Sautner" },
      { text: "Data science team is building a judge LLM to continually and more automatically QA the agent. Starting new engagement with external vendor for more robust judge that can evaluate responses and guardrails.", source: "Hard Rock - Elizabeth DeWeese" }
    ],
    examples: [
      "Want to define custom QA criteria per business needs",
      "Need LLM workbench to score conversations against criteria",
      "FDE Team: High/medium/low scoring is fixed",
      "PayPal: Need to evaluate SDR agent effectiveness (email quantity, appropriate responses)",
      "Hard Rock: Building their own LLM judge for QA, engaging external vendor for robust evaluation",
      "Align AI scoring with company quality standards"
    ]
  },
  {
    rank: 21,
    theme: 'troubleshooting',
    title: "Taxonomy & Intent Mismatch",
    description: "Auto-generated intents don't align with business categories; teams build external tools",
    customerCount: 4,
    customers: ["Indeed", "Nexo", "Lululemon", "Pearson"],
    color: "yellow",
    severity: "medium",
    roadmap: null,
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
    rank: 23,
    theme: 'troubleshooting',
    title: "Duplicate Session Counts in Reports",
    description: "Same messaging session counted multiple times due to escalations or planner session forks",
    customerCount: 2,
    customers: ["Secret Escapes", "Allegis"],
    color: "yellow",
    severity: "high",
    roadmap: null,
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

  // ===== THEME 4: CRITICAL FUNCTIONALITY GAPS (Green) =====
  {
    rank: 14,
    theme: 'functionality',
    title: "Custom Tagging & Evaluation is Essential",
    description: "Inability to create custom tags or define custom evaluation criteria is a major functional gap",
    customerCount: 9,
    customers: ["Cellebrite", "Lululemon", "Help Agent", "Indeed", "Pearson", "NVIDIA", "FDE Team", "Shark Ninja", "PayPal"],
    color: "green",
    severity: "critical",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "Custom session evaluations with LLM-as-judge" },
    quotes: [
      { text: "I want to flag this session as a bug but there's no way to do that in the tool.", source: "Cellebrite" },
      { text: "Yana expressed the need for product-based tagging per messaging session.", source: "NVIDIA" },
      { text: "Custom tagging would support tagging competitors, product mentions, sentiment (0-5).", source: "FDE Team - Itay Oren" },
      { text: "We need the ability to set up custom LLM evaluations on session data - define our own resolution and abandonment definitions.", source: "Shark Ninja - Nir Tzavchon" },
      { text: "Customer has strong interest in an 'evaluation agent' to monitor the SDR agent and report on its effectiveness.", source: "PayPal - Nathalie Sautner" },
      { text: "Hell yes - we would like to see a metric for semantic scores in the dashboard. We use binary pass/fail based on three attributes: correct, complete, and relevant.", source: "Help Agent - Maya Robles-Wong" },
      { text: "Having the ability to insert our semantic logic automatically into observability and view the results analytically would be supremely powerful. We would be able to see that trending, dive into those specific things, and click through to where we want to go.", source: "Help Agent - Zachary Stauber" },
      { text: "The top three focus areas: ability to define custom tags and measurements (both formula and semantic), ability to customize the dashboards, and establishing an alert system based on custom and out-of-the-box metrics.", source: "Help Agent - Maor Pichadze" }
    ],
    examples: [
      "Cannot flag sessions as 'bug', 'needs review', or 'resolved'",
      "NVIDIA: Need to categorize by product (DGX, switches)",
      "FDE Team: 'Unified Evals' / 'Agent Force Evals' in development",
      "Shark Ninja: Want custom call containment definitions",
      "PayPal: Strong interest in evaluation agent to monitor SDR agent effectiveness",
      "Help Agent: Semantic evaluation (correctness, completeness, relevance) lives in Google spreadsheet with 2-4 week analysis lag",
      "Help Agent: Cannot see semantic scores trending in dashboard - must manually download reports and analyze",
      "Help Agent: Need to connect semantic evaluation layer with technical performance layer automatically",
      "Help Agent: Team of 10 evaluating 320K conversations/month, scaling to 2.1M/month with no additional staffing",
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
    color: "green",
    severity: "high",
    roadmap: { status: "planned", timeline: "End FY Jan '27", item: "Simulation 1.0 for richer ADLC" },
    quotes: [
      { text: "Need for a 'what if' analysis capability to simulate the impact of changes.", source: "Help Agent" },
      { text: "Score → Classify → Root Cause → Simulate Fix - this is the north star workflow.", source: "Lululemon - Erez Agami" },
      { text: "Need real-time consumption analysis during development - like a debug log for credits.", source: "Allegis - Barry" },
      { text: "We're currently two to four weeks behind in analyzing utterance performance, which makes it challenging to track month-over-month changes or quickly connect failures to specific cloud products. Due to SAFE Agile methodology, addressing a trending challenge can take about a quarter.", source: "Help Agent - Maya Robles-Wong & Zachary Stauber" }
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
    customerCount: 3,
    customers: ["Cellebrite", "NVIDIA", "PayPal"],
    color: "green",
    severity: "medium",
    roadmap: { status: "planned", timeline: "TDX Apr '26", item: "Observability Agent for diagnostics & action" },
    quotes: [
      { text: "I would expect an AI to give me an insight of why is it dropping down.", source: "Cellebrite" },
      { text: "Understanding the number of questions per session is crucial for determining customer behavior.", source: "NVIDIA - Yana Irani" },
      { text: "Customer needs agent 'health' metrics, such as hallucination detection and analyzing user utterances.", source: "PayPal - Nathalie Sautner" }
    ],
    examples: [
      "Metric drops 20% but no explanation provided",
      "Must manually investigate root causes",
      "Want AI to surface anomalies and explain them",
      "PayPal: Need agent health metrics including hallucination detection and user utterance analysis",
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
    color: "green",
    severity: "medium",
    roadmap: null,
    quotes: [
      { text: "Metrics are just numbers without context. What do I do with a 65% score?", source: "Help Agent" },
      { text: "No 'Call to Action' buttons to trigger workflows from metrics.", source: "Analysis" },
      { text: "We need an alert system based on custom and out-of-the-box metrics. If there's a degradation in semantic scores, we should get an email or PagerDuty webhook or Slack message proactively.", source: "Help Agent - Maor Pichadze" },
      { text: "Today we use Graphana for proactive alerts - synthetic testing every 15 minutes against known good answers using RAGAS metrics. If faithfulness falls below threshold twice in a row, it sends an alert to Slack channel triggering PagerDuty to engineering teams.", source: "Help Agent - Zachary Stauber" }
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
    color: "green",
    severity: "high",
    roadmap: { status: "planned", timeline: "Dreamforce Sept '26", item: "Geo-Aware LLM models for compliance" },
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
  }
];

// Customers Data
export const customersData = [
  {
    id: 'indeed',
    name: 'Indeed',
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
    color: 'red',
    tagline: 'QA/QM Framework',
    description: 'Open-source LLM evaluation with structured scorecard approach',
    metrics: ['6 Metrics Tracked', 'QA Team Review', 'Custom Scorecards'],
    workflowUrl: '?view=lululemon-workflow',
    uxUrl: '?view=lululemon-ux',
    date: 'Dec 16, 2025'
  },
  {
    id: 'pearson',
    name: 'Pearson',
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
    color: 'cyan',
    tagline: 'Salesforce Internal Customer-Facing Agent',
    description: 'Customer-facing agent resolving customer issues for 18+ months. Struggling with limited customization, view-only Tableau access, and 2-4 week lag in semantic evaluation analysis. Scaling from 320K to 2.1M conversations/month with 10-person evaluation team. Critical need for custom semantic metrics (correctness, completeness, relevance), dashboard customization, and proactive alerting.',
    metrics: ['320K → 2.1M Scale', '2-4 Week Analysis Lag', 'Custom Semantic Metrics', '200K+ Knowledge Articles', '18 Months Live'],
    workflowUrl: '?view=help-agent-workflow',
    uxUrl: '?view=help-agent-ux',
    date: 'Jan 28, 2026',
    quotes: [
      { text: "None of these out-of-box metrics are very helpful for us today.", source: "Zachary Stauber" },
      { text: "Customization is super important for us. We would love for our strategic KPI set to be included as out-of-the-box concepts in observability.", source: "Zachary Stauber" },
      { text: "We are at least two to four weeks behind in analyzing utterance performance, which makes it challenging to track month-over-month changes.", source: "Maya Robles-Wong" },
      { text: "Hell yes - we would like to see a metric for semantic scores in the dashboard.", source: "Maya Robles-Wong" },
      { text: "Having the ability to insert our semantic logic automatically into observability and view the results analytically would be supremely powerful.", source: "Zachary Stauber" },
      { text: "We have zero insight into when the planner selects a topic - we have no rationale information about why that was there.", source: "Zachary Stauber" },
      { text: "Semantic metrics are probably the better starting point for new implementations - we missed opportunities by not understanding semantic data points early on.", source: "Zachary Stauber" },
      { text: "The out-of-box escalation rate is misleading - it only counts live chat transfer, missing asynchronous case creation. Our real escalation rate is ~30%, not 7%.", source: "Zachary Stauber" }
    ],
    painPoints: [
      'Irrelevant Out-of-Box Metrics',
      'Dashboard Customization Limitations',
      'Key Components are Black Boxes',
      'Custom Tagging & Evaluation is Essential',
      'Missing What If Analysis',
      'No Call to Action Features'
    ]
  },
  {
    id: 'cellebrite',
    name: 'Cellebrite',
    color: 'purple',
    tagline: 'Service Agent Analytics',
    description: 'Moving from manual Excel workflows to dashboard-driven insights',
    metrics: ['Alpha Customers: 5', 'Manual Excel → Dashboard', 'Deflection Analysis'],
    workflowUrl: '?view=cellebrite-workflow',
    uxUrl: '?view=cellebrite-ux',
    date: 'Dec 10, 2025'
  },
  {
    id: 'nexo',
    name: 'Nexo',
    color: 'green',
    tagline: 'Crypto Financial Services',
    description: 'Data complexity with 15+ DMOs in Session Tracing Data Model',
    metrics: ['STDM Complexity', 'Custom Reports', 'Intent Mapping'],
    workflowUrl: '?view=nexo-workflow',
    uxUrl: '?view=nexo-ux',
    date: 'Dec 2, 2025'
  },
  {
    id: 'etoro',
    name: 'eToro',
    color: 'green',
    tagline: 'Employee Agent Analytics',
    description: 'Active User Rate calculation issues and custom field visibility problems',
    metrics: ['User Rate: 6% → 84%', 'Custom Fields', 'Data Cloud Integration'],
    workflowUrl: '?view=etoro-workflow',
    uxUrl: '?view=etoro-ux',
    date: 'Dec 5, 2025'
  },
  {
    id: 'hardrock',
    name: 'Hard Rock',
    color: 'orange',
    tagline: 'Guest Experience Agent',
    description: 'Unique user tracking, AI transparency, session-level visibility needs. Using Agent Force Default (end-of-sale) - burning through data services credits with analytics 1.0, needs transition to employee agent for better reporting',
    metrics: ['Unique Users', 'AI Transparency', 'Authentication Gap', 'Analytics 1.0 Credit Burn', 'Default Agent Migration'],
    workflowUrl: '?view=hardrock-workflow',
    uxUrl: '?view=hardrock-ux',
    date: 'Dec 4, 2025 - Jan 13, 2026'
  },
  {
    id: 'uncc',
    name: 'UNCC',
    color: 'teal',
    tagline: 'University Student Services',
    description: 'Channel differentiation needs for IT vs Student Services agents',
    metrics: ['Channel Filtering', 'Agent Name Filter', 'Custom Transform'],
    workflowUrl: '?view=uncc-workflow',
    uxUrl: '?view=uncc-ux',
    date: 'Dec 3, 2025'
  },
  {
    id: 'astound',
    name: 'Astound',
    color: 'violet',
    tagline: 'Slack Integration + Feedback Issues',
    description: 'Web chat metrics unusable for Slack channel; thumbs up/down not visible',
    metrics: ['Slack Channel', 'Feedback Broken', 'Resolution Rate'],
    workflowUrl: '?view=astound-workflow',
    uxUrl: '?view=astound-ux',
    date: 'Dec 5, 2025'
  },
  {
    id: 'fedex',
    name: 'FedEx',
    color: 'orange',
    tagline: 'Multi-Org Analytics',
    description: 'Companion org visibility issues and cross-org analytics needs',
    metrics: ['Companion Org', 'Cross-Org Reports', 'Channel Filtering'],
    workflowUrl: '?view=fedex-workflow',
    uxUrl: '?view=fedex-ux',
    date: 'Nov 28, 2025'
  },
  {
    id: 'secretescapes',
    name: 'Secret Escapes',
    color: 'rose',
    tagline: 'Metric Discrepancies & Data Export',
    description: 'Major discrepancies in abandonment/deflection metrics, duplicate session counts, and unclear engagement definitions. Need for analytics 2.0 migration to reduce credit consumption and improve reporting accuracy',
    metrics: ['10-15% vs ~0% Abandon', 'Duplicate Sessions', 'Engagement Mismatch', 'Analytics Migration'],
    workflowUrl: '?view=secretescapes-workflow',
    uxUrl: '?view=secretescapes-ux',
    date: 'Sep 16, 2025 - Jan 13, 2026'
  },
  {
    id: 'oniverse',
    name: 'Oniverse',
    color: 'pink',
    tagline: 'Italian Retail - 5 Brands',
    description: 'Resolution rate tracking, brand/country filtering, and QA review process',
    metrics: ['55% → 75% Resolution', 'Brand Filtering', 'QA Process'],
    workflowUrl: '?view=oniverse-workflow',
    uxUrl: '?view=oniverse-ux',
    date: 'Dec 20, 2025'
  },
  {
    id: 'allegis',
    name: 'Allegis',
    color: 'sky',
    tagline: 'Legacy SKU & SDM Exploration',
    description: 'Early Agent Force adopter stuck on conversations SKU - cannot access Tableau Next, needs SDM-based custom reports for user adoption and consumption forecasting',
    metrics: ['12 vs 2000 Users', '4.8M Full Refreshes', 'Perm Set Visibility Bug', 'Real-time Credits'],
    workflowUrl: '?view=allegis-workflow',
    uxUrl: '?view=allegis-ux',
    date: 'Sep 25, 2025'
  },
  {
    id: 'fde-team',
    name: 'FDE Team',
    color: 'purple',
    tagline: 'Dreamforce Customer Feedback',
    description: 'Aggregated feedback from Dreamforce customers on metric definitions, sharing, customization, and PII masking',
    metrics: ['Metric Definitions', 'Custom Tagging', 'PII Masking'],
    workflowUrl: '?view=fde-workflow',
    uxUrl: '?view=fde-ux',
    date: 'Oct 29, 2025'
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    color: 'lime',
    tagline: 'Enterprise AI Support',
    description: 'Navigation issues, product-based tagging, and custom business evaluation needs',
    metrics: ['Navigation Bug', 'Product Tagging', 'Custom Evaluation'],
    workflowUrl: '?view=nvidia-workflow',
    uxUrl: '?view=nvidia-ux',
    date: 'Jan 1, 2026'
  },
  {
    id: 'sharkninja',
    name: 'Shark Ninja',
    color: 'cyan',
    tagline: 'CX Call Containment',
    description: 'Critical need for call containment metrics - current deflection/abandonment definitions don\'t reflect actual customer behavior or ROI',
    metrics: ['Call Containment', 'Custom Deflection', 'Manual Reporting Pain'],
    workflowUrl: '?view=sharkninja-workflow',
    uxUrl: '?view=sharkninja-ux',
    date: 'Sep 25, 2025'
  },
  {
    id: 'ibm',
    name: 'IBM',
    color: 'blue',
    tagline: 'Enterprise Integration',
    description: 'PII handling concerns and enterprise compliance requirements',
    metrics: ['PII Masking', 'Compliance', 'Security'],
    workflowUrl: '?view=ibm-workflow',
    uxUrl: '?view=ibm-ux',
    date: 'Dec 22, 2025'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    color: 'indigo',
    tagline: 'SDR Agent Effectiveness & Agent Health',
    description: 'Need to evaluate SDR agent effectiveness (email quantity, appropriate responses), agent health monitoring (hallucination detection), and accurate adoption/usage metrics',
    metrics: ['Agent Effectiveness', 'Agent Health', 'Adoption Tracking', 'Custom Dashboards'],
    workflowUrl: '?view=paypal-workflow',
    uxUrl: '?view=paypal-ux',
    date: 'Jan 26, 2026'
  }
];

