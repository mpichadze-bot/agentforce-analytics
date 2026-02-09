// ==========================================================================
// REFINED PERSONAS DATA - Based on CoT + ReAct Deep Analysis
// ==========================================================================

export const personasData = [
  {
    id: 'analytics-manager',
    title: 'Analytics & Reporting Manager',
    description: 'Owns data accuracy, reporting, and metric definitions. Questions metric calculations and validates data trustworthiness.',
    technicalDepth: 'medium',
    decisionAuthority: 'high',
    painTolerance: 'low',
    primaryGoal: 'Ensure data accuracy and trustworthiness',
    keyBehaviors: [
      'Questions metric definitions and calculations',
      'Compares internal vs platform metrics',
      'Validates data accuracy',
      'Focuses on trust and reliability'
    ],
    customers: [
      { name: 'Secret Escapes', contacts: ['Laura Meschi', 'Daniel Measures'] },
      { name: 'Pearson', contacts: ['Nicole Lozano'] },
      { name: 'eToro', contacts: ['Avi Kuzi'] },
      { name: 'Shark Ninja', contacts: ['Carolin'] },
      { name: 'PayPal', contacts: ['Nathalie Sautner'] }
    ],
    primaryPainPoints: [
      'Major Data Discrepancies',
      'Unclear Metric Definitions',
      'No Unique User Tracking'
    ],
    secondaryPainPoints: [
      'Painful Navigation',
      'Dashboards Lack Customization'
    ],
    representativeQuotes: [
      "Dashboard shows 1-2% abandonment vs our internal tracking of 10-15%.",
      "We measure engagement based on end-user messages - your definition is guided by your commercial model.",
      "Active user rate was 6% but with correct formula it's actually 84%!"
    ],
    successMetrics: 'Data accuracy, metric trust, reliable reporting'
  },
  {
    id: 'technical-lead',
    title: 'Technical Lead / Platform Engineer & Cost Optimizer',
    description: 'Implements technical solutions, manages data models, optimizes systems and costs. Creates custom transforms, navigates complex data architectures, and optimizes credit consumption.',
    technicalDepth: 'very-high',
    decisionAuthority: 'medium-high',
    painTolerance: 'medium',
    primaryGoal: 'Build reliable, efficient technical solutions while optimizing costs',
    keyBehaviors: [
      'Creates custom data transforms',
      'Navigates complex data models (STDM, SDM)',
      'Optimizes credit consumption and resource usage',
      'Handles API access and integrations',
      'Manages analytics version migration',
      'Monitors and reduces data service costs'
    ],
    customers: [
      { name: 'Allegis', contacts: ['Abhijit Mahato', 'Barry', 'Jeff Grosse'] },
      { name: 'Hard Rock', contacts: ['JP (Julio)', 'Ethan Zayer', 'Barry'] },
      { name: 'UNCC', contacts: ['Alexandra Flinn'] },
      { name: 'PayPal', contacts: ['Tye Jones'] },
      { name: 'Nexo', contacts: [] },
      { name: 'Secret Escapes', contacts: [] }
    ],
    primaryPainPoints: [
      'Building Custom Reports is Too Difficult',
      'Key Components are Black Boxes',
      'Duplicate Session Counts in Reports',
      'Credit consumption optimization',
      'Analytics migration needs'
    ],
    secondaryPainPoints: [
      'API access limitations',
      'Data refresh efficiency',
      'Resource optimization',
      'Cost visibility'
    ],
    representativeQuotes: [
      "STDM has so many objects... we need a dedicated person just to build reports.",
      "We had to create a custom data transform to bring in messaging channel.",
      "Team was 'burning through' data services credits due to using the older analytics 1.0.",
      "Need real-time consumption analysis during development - like a debug log for credits.",
      "The refresh history showed full refreshes of 4.8 million records instead of incrementals."
    ],
    successMetrics: 'System efficiency, reduced complexity, reliable integrations, cost reduction'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist / ML Engineer',
    description: 'Builds evaluation models, analyzes patterns, creates custom LLM judges. Works with ML/AI to create sophisticated evaluation capabilities.',
    technicalDepth: 'very-high',
    decisionAuthority: 'medium',
    painTolerance: 'medium',
    primaryGoal: 'Create sophisticated evaluation and analysis capabilities',
    keyBehaviors: [
      'Builds custom LLM judges',
      'Analyzes conversation patterns',
      'Creates evaluation frameworks',
      'Works with external vendors for robust solutions'
    ],
    customers: [
      { name: 'Hard Rock', contacts: ['Elizabeth DeWeese'] },
      { name: 'NVIDIA', contacts: ['Yana Irani'] },
      { name: 'Lululemon', contacts: [] },
      { name: 'Shark Ninja', contacts: ['Stanley Konopka'] }
    ],
    primaryPainPoints: [
      'Custom Tagging & Evaluation is Essential',
      'Need for Custom QA Scorecards',
      'Lack of AI-Driven Insights'
    ],
    secondaryPainPoints: [
      'Pattern detection capabilities',
      'Custom evaluation frameworks',
      'Taxonomy & Intent Mismatch'
    ],
    representativeQuotes: [
      "Data science team is building a judge LLM to continually and more automatically QA the agent.",
      "Understanding the number of questions per session is crucial for determining customer behavior.",
      "Starting new engagement with external vendor for more robust judge that can evaluate responses and guardrails."
    ],
    successMetrics: 'Evaluation accuracy, pattern detection, model performance'
  },
  {
    id: 'qa-manager',
    title: 'QA / Quality Manager',
    description: 'Ensures agent quality, manages evaluation frameworks, defines quality standards. Focuses on consistent quality and structured evaluation.',
    technicalDepth: 'medium',
    decisionAuthority: 'high',
    painTolerance: 'low',
    primaryGoal: 'Ensure consistent quality and evaluation',
    keyBehaviors: [
      'Defines QA scorecards',
      'Reviews agent responses',
      'Manages quality processes',
      'Needs structured evaluation'
    ],
    customers: [
      { name: 'Lululemon', contacts: [] },
      { name: 'Oniverse', contacts: ['Elena Maio'] },
      { name: 'Hard Rock', contacts: ['Elizabeth DeWeese'] },
      { name: 'PayPal', contacts: ['Nathalie Sautner'] },
      { name: 'FDE Team', contacts: [] }
    ],
    primaryPainPoints: [
      'Need for Custom QA Scorecards',
      'Custom Tagging & Evaluation is Essential',
      'Broken Feedback Mechanisms'
    ],
    secondaryPainPoints: [
      'Root Cause Analysis is a Significant Pain Point',
      'Manual Excel Workarounds',
      'Quality metric definitions'
    ],
    representativeQuotes: [
      "Customers approach agent evaluation from a QA/QM perspective, valuing structured scorecards.",
      "We manually create an Excel file for each low-score session with details like case number, brand, feedback.",
      "Customer needs to evaluate SDR agent effectiveness using metrics like email quantity and appropriate responses."
    ],
    successMetrics: 'Quality consistency, evaluation accuracy, process efficiency'
  },
  {
    id: 'product-manager',
    title: 'Product Manager / Strategic Owner',
    description: 'Owns product strategy, business outcomes, user adoption, and strategic vision. Focuses on business value, ROI, strategic direction, and innovation. Defines north star workflows and drives innovation initiatives.',
    technicalDepth: 'low-medium to high',
    decisionAuthority: 'very-high',
    painTolerance: 'low',
    primaryGoal: 'Drive business value, adoption, and strategic innovation',
    keyBehaviors: [
      'Focuses on business metrics and ROI',
      'Needs custom dashboards for business goals',
      'Evaluates agent effectiveness',
      'Tracks adoption and usage',
      'Defines ideal workflows and north star processes',
      'Drives innovation initiatives',
      'Sets strategic direction',
      'Influences product roadmap'
    ],
    customers: [
      { name: 'PayPal', contacts: ['Nathalie Sautner', 'Jon Wilson'] },
      { name: 'Shark Ninja', contacts: ['Stanley Konopka'] },
      { name: 'Hard Rock', contacts: ['Shira Gershoni'] },
      { name: 'NVIDIA', contacts: ['Maor Goldfarb'] },
      { name: 'Lululemon', contacts: [] }
    ],
    primaryPainPoints: [
      'Dashboards Lack Customization',
      'No Unique User Tracking',
      'Missing What If Analysis',
      'Lack of AI-Driven Insights',
      'No Call to Action Features'
    ],
    secondaryPainPoints: [
      'Agent effectiveness evaluation',
      'Adoption tracking',
      'Business metric alignment',
      'Strategic workflow gaps',
      'Innovation capabilities',
      'Future-proofing concerns'
    ],
    representativeQuotes: [
      "Customer needs to evaluate SDR agent effectiveness using metrics like email quantity and appropriate responses.",
      "Customer preferred a 'lead nurturing dashboard' focused on the pipeline of agent work, meetings, replies, and cancellations.",
      "We're trying to understand who's using it... reaching many or used intensively by few?",
      "Score → Classify → Root Cause → Simulate Fix - this is the north star workflow.",
      "Need for a 'what if' analysis capability to simulate the impact of changes.",
      "Customer has strong interest in an 'evaluation agent' to monitor the SDR agent."
    ],
    successMetrics: 'Business ROI, user adoption, strategic alignment, innovation impact'
  },
  {
    id: 'operations-manager',
    title: 'Operations Manager / Analyst',
    description: 'Manages day-to-day operations, creates manual workarounds, handles operational efficiency. High tolerance for workarounds, focuses on getting things done.',
    technicalDepth: 'low-medium',
    decisionAuthority: 'medium',
    painTolerance: 'high',
    primaryGoal: 'Maintain operational efficiency',
    keyBehaviors: [
      'Exports to Excel for manual analysis',
      'Clicks through sessions individually',
      'Creates manual tracking spreadsheets',
      'Handles operational workflows'
    ],
    customers: [
      { name: 'Indeed', contacts: [] },
      { name: 'Cellebrite', contacts: [] },
      { name: 'Oniverse', contacts: ['Elena Maio'] },
      { name: 'Shark Ninja', contacts: ['Stanley Konopka'] }
    ],
    primaryPainPoints: [
      'Users Forced into Manual Excel Workarounds',
      'Root Cause Analysis is a Significant Pain Point',
      'Painful Navigation'
    ],
    secondaryPainPoints: [
      'Key Components are Black Boxes',
      'Manual session review',
      'Operational workflow efficiency'
    ],
    representativeQuotes: [
      "I literally have to export everything to Excel and manually tag each session.",
      "We spend hours clicking through sessions one by one to find patterns.",
      "We're slicing and dicing manual reports from the data cloud platform - it's a messy process."
    ],
    successMetrics: 'Operational efficiency, time savings, workflow optimization'
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    description: 'Translates business needs to technical requirements, creates reports, analyzes requirements. Bridges business and technical worlds.',
    technicalDepth: 'medium',
    decisionAuthority: 'medium',
    painTolerance: 'medium',
    primaryGoal: 'Bridge business and technical needs',
    keyBehaviors: [
      'Analyzes business requirements',
      'Creates custom reports',
      'Translates business needs',
      'Focuses on stakeholder reporting'
    ],
    customers: [
      { name: 'Cellebrite', contacts: [] },
      { name: 'Nexo', contacts: [] },
      { name: 'Astound', contacts: [] },
      { name: 'FedEx', contacts: [] },
      { name: 'Secret Escapes', contacts: ['Daniel Measures'] }
    ],
    primaryPainPoints: [
      'Building Custom Reports is Too Difficult',
      'Dashboards Lack Customization',
      'Ineffective Visualizations'
    ],
    secondaryPainPoints: [
      'Poor Sharing Capabilities',
      'Report creation complexity',
      'Stakeholder communication'
    ],
    representativeQuotes: [
      "I wish I could customize the dashboard... add my own columns and filters.",
      "Service managers found actual numbers more useful than percentages.",
      "We are currently unable to reliably calculate the resolution rate because thumbs up/down is not working."
    ],
    successMetrics: 'Requirement clarity, report accuracy, stakeholder satisfaction'
  },
];

// Persona Statistics
export const personaStats = {
  totalPersonas: 7,
  totalCustomers: 20,
  totalContacts: 35,
  personaDistribution: {
    'Analytics & Reporting Manager': 5,
    'Technical Lead / Platform Engineer & Cost Optimizer': 6,
    'Data Scientist / ML Engineer': 4,
    'QA / Quality Manager': 5,
    'Product Manager / Strategic Owner': 5,
    'Operations Manager / Analyst': 4,
    'Business Analyst': 5
  },
  technicalDepthDistribution: {
    'very-high': 2,
    'high': 0,
    'medium-high': 1,
    'medium': 3,
    'low-medium': 1
  },
  decisionAuthorityDistribution: {
    'very-high': 1,
    'high': 2,
    'medium-high': 1,
    'medium': 3
  }
};
