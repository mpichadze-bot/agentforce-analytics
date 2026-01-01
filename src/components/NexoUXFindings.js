import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Star,
  Lightbulb,
  XCircle,
  CheckCircle,
  Table,
  BarChart,
  Edit3,
  Target,
  Settings,
  TrendingDown,
  Eye,
  Layers,
  Palette,
  Home,
  FileQuestion,
  Zap,
  DollarSign,
  MessageSquare,
  Activity,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Users
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './NexoUXFindings.css';

const NexoUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleCardKeyDown = (e, cardId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardToggle(cardId);
    }
  };

  const painPoints = [
    {
      id: 'not-customizable',
      icon: Settings,
      title: 'Agent Studio Not Customizable',
      severity: 'critical',
      description: 'Could not customize to preferences - ultimately stopped using',
      quote: '"They could not sufficiently customize it to their preferences"',
      impact: 'Abandoned the tool entirely',
      symptoms: [
        'Unable to add or modify metrics',
        'Cannot see progress in agent improvement',
        'No control over dashboard layout',
        'Forced to use custom Salesforce object instead'
      ]
    },
    {
      id: 'metric-discrepancies',
      icon: BarChart,
      title: 'Metric Calculation Discrepancies',
      severity: 'critical',
      description: 'Internal escalation rate calculation differs from Agent Analytics',
      quote: '"Internal calculation considered any human ownership as an escalation, whereas Agent Analytics only counted escalations initiated by the human"',
      impact: 'Cannot trust or use provided metrics',
      symptoms: [
        'Internal: Any human ownership = escalation',
        'Analytics: Only human-initiated with end chat button',
        'Impossible to reconcile numbers',
        'Different definitions make comparison useless'
      ]
    },
    {
      id: 'inaccurate-scoring',
      icon: XCircle,
      title: 'Inaccurate Scoring of Conversations',
      severity: 'high',
      description: 'Correct answers marked as "bad" when customers escalate out of frustration',
      quote: '"Agent Analytics classified such conversations as "bad" and gave the chat agent a poor score"',
      impact: 'Misrepresents agent performance',
      symptoms: [
        'Frustrated crypto clients escalate despite correct info',
        'Agent marked as failed when it did everything right',
        'Doesn\'t account for customer emotional state',
        'Poor scores for technically correct responses'
      ]
    },
    {
      id: 'heat-maps',
      icon: Palette,
      title: 'Heat Maps Non-Intuitive',
      severity: 'medium',
      description: 'Heat maps require memorizing color meanings and are confusing',
      quote: '"Dislike for heat maps, finding them non-intuitive because they require memorizing what each color means"',
      impact: 'Wasted time trying to understand visualizations',
      symptoms: [
        'Must memorize what each color means',
        'Not useful for their 2-agent setup',
        'Only valuable when comparing many agents',
        'Prefer simple, direct metrics'
      ]
    },
    {
      id: 'line-graphs',
      icon: TrendingDown,
      title: 'Line Graphs Unintuitive',
      severity: 'medium',
      description: 'Time series line graphs difficult to understand for trends',
      quote: '"Line graph unintuitive... suggested a bar chart would be easier to understand"',
      impact: 'Difficult to spot trends quickly',
      symptoms: [
        'Line graphs don\'t show patterns clearly',
        'Bar charts preferred for trend analysis',
        'Harder to compare periods',
        'Visual noise over clarity'
      ]
    },
    {
      id: 'table-clarity',
      icon: Table,
      title: 'Table View Lacks Clarity',
      severity: 'medium',
      description: 'Need lines under each row - category groupings alone are confusing',
      quote: '"Improving the table view\'s readability by adding lines under each row for clarity"',
      impact: 'Difficult to read and analyze data',
      symptoms: [
        'Category groupings not enough',
        'Rows blend together',
        'Hard to follow across columns',
        'Confusing to scan data'
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: 'customizable-dashboard',
      icon: Settings,
      title: 'Fully Customizable Dashboard',
      priority: 'deal-breaker',
      quote: '"If they cannot customize to show relevant metrics... they would not use the product"',
      rationale: 'Non-negotiable. Must have power to add, remove, or shuffle categories and metrics',
      benefits: [
        'Add organization-critical metrics (deflection rate, unique sessions)',
        'Remove irrelevant metrics',
        'Reorder based on priority',
        'Match internal processes and terminology'
      ]
    },
    {
      id: 'customizable-homepage',
      icon: Home,
      title: 'Customizable Homepage',
      priority: 'deal-breaker',
      quote: '"Single, customizable homepage that would serve as a starting point"',
      rationale: 'Need landing page with favorite metrics visible at a glance before drilling into details',
      benefits: [
        'Quick health check on critical metrics',
        'Personalized to user role',
        'Jump-off point for deeper investigation',
        'Saves time not navigating to find key data'
      ]
    },
    {
      id: 'granular-table',
      icon: Table,
      title: 'Granular Table View',
      priority: 'deal-breaker',
      quote: '"Session table view was the most critical feature needed to assess usefulness"',
      rationale: 'Straight-to-the-point data view is more critical than "beautiful" metric cards',
      benefits: [
        'Deep data analysis capability',
        'Add filters for specific queries',
        'Export for external analysis',
        'Granular, actionable insights'
      ]
    },
    {
      id: 'custom-intents',
      icon: MessageSquare,
      title: 'Define Custom Intents',
      priority: 'must-have',
      quote: '"Desire to be able to define the intents themselves, as the automatically defined ones might not align"',
      rationale: 'Auto-defined intents don\'t match their internal processes',
      benefits: [
        'Align with internal taxonomy',
        'Match business language',
        'Track what matters to organization',
        'More accurate intent classification'
      ]
    },
    {
      id: 'color-coding',
      icon: Palette,
      title: 'Color-Coded Metric Values',
      priority: 'should-have',
      quote: '"Adding color coding (red, yellow, green) to the percentage values... helpful for quickly identifying areas"',
      rationale: 'Quick visual identification of areas needing immediate attention based on targets',
      benefits: [
        'Instant problem spotting',
        'Red/yellow/green universally understood',
        'Based on custom thresholds/targets',
        'Reduces cognitive load'
      ]
    },
    {
      id: 'bar-charts',
      icon: BarChart,
      title: 'Bar Charts Over Line Graphs',
      priority: 'should-have',
      quote: '"Bar chart would be easier to understand for showing trends"',
      rationale: 'Line graphs are unintuitive - bar charts show trends more clearly',
      benefits: [
        'Easier to spot patterns',
        'Better for period comparison',
        'More intuitive visualization',
        'Clearer trends at a glance'
      ]
    },
    {
      id: 'period-filters',
      icon: Filter,
      title: 'Period Comparison Filters',
      priority: 'should-have',
      quote: '"Filter and compare results across different periods (Q over Q, year average, daily, weekly)"',
      rationale: 'Need to see total averages and compare across time periods',
      benefits: [
        'Quarter over quarter analysis',
        'Year-over-year trends',
        'Daily/weekly granularity',
        'Identify seasonal patterns'
      ]
    },
    {
      id: 'spend-monitoring',
      icon: DollarSign,
      title: 'Spend Monitoring',
      priority: 'critical',
      quote: '"Spend alongside conversations to identify a discrepancy between conversation volume and credit consumption"',
      rationale: 'Essential for cost optimization and finding setup mistakes',
      benefits: [
        'Track flex credits consumption',
        'Find excessive callouts',
        'Determine bot ROI per topic',
        'Identify cost/conversation anomalies'
      ]
    },
    {
      id: 'drill-down',
      icon: Target,
      title: 'Full Drill-Down Capability',
      priority: 'must-have',
      quote: '"Need to drill down from high-level metrics to the specific messaging sessions for full context"',
      rationale: 'Must connect overview to individual sessions',
      benefits: [
        'High-level → specific sessions',
        'Full conversation context',
        'Root cause analysis',
        'Trace any metric to source'
      ]
    }
  ];

  const keyInsights = [
    {
      id: 'customization-dealbreaker',
      icon: AlertTriangle,
      title: 'Customization is a Deal-Breaker',
      type: 'critical',
      quote: '"If we cannot customize to show relevant metrics... we would not use the product"',
      insight: 'This is non-negotiable. Without the ability to customize metrics, dashboard layout, and definitions, Nexo will not adopt the product.',
      significance: 'Customization must be a core capability, not a nice-to-have feature.'
    },
    {
      id: 'charts-vs-tables',
      icon: Layers,
      title: 'Charts vs. Tables Serve Different Purposes',
      type: 'insight',
      quote: '"Charts and cards offer a high-level overview to track trends, while the table view is necessary for deeper data analysis"',
      insight: 'Users need both: charts for quick trends, tables for deep analysis with filters and export capability.',
      significance: 'Don\'t force users to choose - provide both visualization types for different use cases.'
    },
    {
      id: 'client-anger',
      icon: MessageSquare,
      title: 'Focus on Client Anger Points',
      type: 'validation',
      quote: '"Wanted to see information that would indicate problematic behaviors by the chat agent that anger clients"',
      insight: 'More valuable to identify what makes clients angry than general performance metrics.',
      significance: 'Metrics should highlight: abandonment rate, topic-specific escalation causes, biggest failures per week.'
    },
    {
      id: 'cost-optimization',
      icon: DollarSign,
      title: 'Cost Optimization is Critical',
      type: 'insight',
      quote: '"Monitoring consumption is crucial to find setup mistakes that cause excessive callouts"',
      insight: 'Need to determine if the cost of running a bot for a specific topic is worth it based on client usage.',
      significance: 'Spend monitoring helps find setup mistakes and calculate ROI per topic.'
    },
    {
      id: 'limited-agents',
      icon: Users,
      title: 'Limited Agent Use Case',
      type: 'context',
      quote: '"Only have a service agent and an employee agent"',
      insight: 'With only 2 agents, features designed for comparing many agents (like heat maps) are not useful.',
      significance: 'Design for single-agent deep dives, not just multi-agent comparison.'
    },
    {
      id: 'top-three',
      icon: Star,
      title: 'Top 3 Valuable Features',
      type: 'validation',
      quote: '"Intent, topics, and escalation rates, focusing on the most talked-about conversations leading to escalations"',
      insight: 'These three areas provide the most value for improving agent performance.',
      significance: 'Prioritize making intent analysis, topic breakdown, and escalation tracking extremely robust.'
    },
    {
      id: 'metric-cards-beautiful',
      icon: Eye,
      title: 'Beautiful ≠ Useful',
      type: 'insight',
      quote: '"Metric cards were \'beautiful\' but the session table view was the most critical feature"',
      insight: 'Users appreciate good design but prioritize functionality and granular data access over aesthetics.',
      significance: 'Don\'t sacrifice utility for beauty - data access is paramount.'
    },
    {
      id: 'spend-use-cases',
      icon: Target,
      title: 'Spend Tracking Use Cases',
      type: 'insight',
      quote: '"Compare unique sessions escalated to a human against the average spend per session"',
      insight: 'Spend data enables identifying high-cost conversations that need investigation.',
      significance: 'Spend should be a first-class metric, not an afterthought.'
    },
    {
      id: 'employee-agent',
      icon: Users,
      title: 'Employee Agent Has Different Needs',
      type: 'context',
      quote: '"Utility of the topic breakdown for the employee agent to understand operational teams\' usage"',
      insight: 'Employee agents need to see which teams use which topics, identify unused topics, track internal adoption.',
      significance: 'Different agent types (customer vs employee) need different analytics focuses.'
    },
    {
      id: 'homepage-starting-point',
      icon: Home,
      title: 'Homepage as Decision Point',
      type: 'validation',
      quote: '"Requirement for a single, customizable homepage that would serve as a starting point before navigating"',
      insight: 'Users want to see their most important metrics first, then decide where to drill down.',
      significance: 'Homepage should enable quick health checks and guide next actions.'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'deal-breaker': return 'priority-dealbreaker';
      case 'must-have': return 'priority-must';
      case 'should-have': return 'priority-should';
      case 'critical': return 'priority-critical';
      default: return 'priority-nice';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'severity-critical';
      case 'high': return 'severity-high';
      default: return 'severity-medium';
    }
  };

  return (
    <div className="nexo-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Nexo" />
      <header className="nexo-ux-header">
        <div className="header-badge">Nexo × Agentforce</div>
        <h1 className="nexo-ux-title">UX Findings & Insights</h1>
        <p className="nexo-ux-subtitle">Agent Analytics Prototype Review</p>
        <div className="participants">
          <span className="participant-label">Participants:</span>
          <span className="participant-name">Ivaylo Enchev (Tech Lead)</span>
          <span className="participant-name">Nikolay Nedev (Data & Analytics)</span>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="findings-tabs" role="tablist">
        <button
          className={`findings-tab ${activeTab === 'pain-points' ? 'active' : ''}`}
          onClick={() => setActiveTab('pain-points')}
          role="tab"
          aria-selected={activeTab === 'pain-points'}
          tabIndex={0}
        >
          <AlertTriangle size={18} />
          <span>Pain Points</span>
        </button>
        <button
          className={`findings-tab ${activeTab === 'desired' ? 'active' : ''}`}
          onClick={() => setActiveTab('desired')}
          role="tab"
          aria-selected={activeTab === 'desired'}
          tabIndex={0}
        >
          <Star size={18} />
          <span>Desired Features</span>
        </button>
        <button
          className={`findings-tab ${activeTab === 'insights' ? 'active' : ''}`}
          onClick={() => setActiveTab('insights')}
          role="tab"
          aria-selected={activeTab === 'insights'}
          tabIndex={0}
        >
          <Lightbulb size={18} />
          <span>Key Insights</span>
        </button>
      </nav>

      {/* Pain Points Tab */}
      {activeTab === 'pain-points' && (
        <section className="tab-panel" role="tabpanel">
          <div className="pain-points-grid">
            {painPoints.map((pain) => {
              const IconComponent = pain.icon;
              const isExpanded = expandedCard === pain.id;
              return (
                <div
                  key={pain.id}
                  className={`pain-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(pain.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, pain.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="pain-card-header">
                    <div className={`pain-icon ${getSeverityColor(pain.severity)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="pain-title-section">
                      <h3>{pain.title}</h3>
                      <span className={`severity-tag ${getSeverityColor(pain.severity)}`}>
                        {pain.severity}
                      </span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <p className="pain-description">{pain.description}</p>
                  <div className="pain-quote">
                    <MessageSquare size={14} />
                    <span>{pain.quote}</span>
                  </div>
                  
                  {isExpanded && (
                    <div className="pain-details">
                      <div className="impact-section">
                        <h4>Impact</h4>
                        <p>{pain.impact}</p>
                      </div>
                      <div className="examples-section">
                        <h4>Symptoms</h4>
                        <ul>
                          {pain.symptoms.map((symptom, idx) => (
                            <li key={idx}>{symptom}</li>
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
      )}

      {/* Desired Features Tab */}
      {activeTab === 'desired' && (
        <section className="tab-panel" role="tabpanel">
          <div className="desired-features-grid">
            {desiredFeatures.map((feature) => {
              const IconComponent = feature.icon;
              const isExpanded = expandedCard === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`feature-wish-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(feature.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, feature.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="feature-wish-header">
                    <div className={`feature-wish-icon ${getPriorityColor(feature.priority)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="feature-wish-title-section">
                      <h3>{feature.title}</h3>
                      <span className={`priority-tag ${getPriorityColor(feature.priority)}`}>
                        {feature.priority}
                      </span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="feature-wish-quote">
                    <MessageSquare size={14} />
                    <span>{feature.quote}</span>
                  </div>
                  
                  {isExpanded && (
                    <div className="feature-wish-details">
                      <div className="rationale-section">
                        <h4>Rationale</h4>
                        <p>{feature.rationale}</p>
                      </div>
                      <div className="benefits-section">
                        <h4>Benefits</h4>
                        <ul>
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx}><CheckCircle size={14} /> {benefit}</li>
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
      )}

      {/* Key Insights Tab */}
      {activeTab === 'insights' && (
        <section className="tab-panel" role="tabpanel">
          <div className="insights-list">
            {keyInsights.map((insight) => {
              const IconComponent = insight.icon;
              const isExpanded = expandedCard === insight.id;
              return (
                <div
                  key={insight.id}
                  className={`insight-card ${insight.type} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(insight.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, insight.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="insight-card-header">
                    <div className={`insight-icon-wrap ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-section">
                      <span className={`insight-type-label ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                      <div className="insight-quote">
                        <MessageSquare size={14} />
                        <span>{insight.quote}</span>
                      </div>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="insight-expanded">
                      <div className="insight-detail">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance">
                        <h4>Significance</h4>
                        <p>{insight.significance}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      <footer className="nexo-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Nexo Agent Analytics Prototype Review - Dec 2, 2025</span>
        </div>
        <a 
          href="?view=nexo-workflow" 
          className="workflow-link"
          tabIndex={0}
          aria-label="View Analytics Workflow"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=nexo-workflow';
          }}
        >
          <Activity size={16} />
          <span>View Workflow</span>
          <ArrowRight size={16} />
        </a>
      </footer>
    </div>
  );
};

export default NexoUXFindings;

