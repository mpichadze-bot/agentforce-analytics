import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Users, Eye, Activity, ThumbsUp,
  Slack, Database, RefreshCw, BarChart2
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './AstoundUXFindings.css';

const AstoundUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "wrong-agent-type",
      icon: RefreshCw,
      title: "Wrong Agent Type for Use Case",
      severity: "critical",
      description: "Built as Service Agent but should be Employee Agent - all out-of-box metrics are irrelevant",
      quote: "\"The current service agent statistics are likely unusable for their specific use case, as they are designed for classical service agent scenarios.\"",
      source: "Meeting Summary",
      impact: "Entire analytics dashboard is meaningless for internal HR Slack agent",
      symptoms: [
        "Escalated/deflected/abandoned metrics don't apply",
        "No unique user tracking available",
        "Metrics derived from web chat UI components",
        "Dashboard designed for external customer support"
      ]
    },
    {
      id: "feedback-broken",
      icon: ThumbsUp,
      title: "Thumbs Up/Down Feedback Not Working",
      severity: "critical",
      description: "Cannot calculate resolution rate because Slack feedback mechanism data is not accessible",
      quote: "\"We are currently unable to reliably calculate the resolution rate because the thumbs up/thumbs down feedback mechanism is not working.\"",
      source: "Oksana Klymenko",
      impact: "Cannot measure 80% resolution rate target KPI",
      symptoms: [
        "Feedback submitted in Slack not visible in analytics",
        "Unknown where feedback data is stored",
        "No way to see shared responses quality",
        "Manual tracking required as workaround"
      ]
    },
    {
      id: "slack-metrics-mismatch",
      icon: Slack,
      title: "Slack UI Doesn't Match Web Chat Assumptions",
      severity: "high",
      description: "Metrics assume web chat behaviors that don't exist in Slack - users can't close sessions or escalate",
      quote: "\"In Slack, users cannot proactively close a chat, which may explain the high abandonment rate they are seeing.\"",
      source: "Meeting Discussion",
      impact: "Abandonment rate artificially high due to UI differences",
      symptoms: [
        "No 'close chat' button in Slack",
        "No escalation path to human agents",
        "Deflection metric meaningless",
        "Session end not clearly defined in Slack"
      ]
    },
    {
      id: "session-differentiation",
      icon: BarChart2,
      title: "Cannot Differentiate Session Types",
      severity: "medium",
      description: "Event logs mix live Slack users with API monitoring sessions, making analysis difficult",
      quote: "\"Concerns about the inability to differentiate between sessions from live Slack users and monitoring sessions coming through the API.\"",
      source: "Olha Ivanchuk",
      impact: "Cannot isolate real user sessions from test/monitoring traffic",
      symptoms: [
        "API and Slack sessions mixed in logs",
        "Zero duration sessions contain conversations",
        "Session count discrepancy between analytics and logs",
        "SOLVED: Use 'channel type' field to filter"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "employee-agent",
      icon: Users,
      title: "Employee Agent Type Migration",
      priority: "critical",
      quote: "\"Strongly encouraged migrating to an employee agent, stating it is a more classic approach.\"",
      source: "Meeting Summary",
      rationale: "Get relevant out-of-box dashboards with unique user tracking",
      benefits: [
        "Relevant employee-focused metrics",
        "Unique user tracking available",
        "Reuse existing Data Cloud retrieval setup",
        "Only need to recreate agent metadata"
      ]
    },
    {
      id: "resolution-rate",
      icon: ThumbsUp,
      title: "Resolution Rate Tracking",
      priority: "critical",
      quote: "\"A resolution rate target of at least 80%.\"",
      source: "Oksana Klymenko",
      rationale: "Core KPI requires working feedback mechanism",
      benefits: [
        "Track thumbs up/down from Slack UI",
        "Calculate resolution rate percentage",
        "Identify low-quality responses",
        "Measure agent effectiveness"
      ]
    },
    {
      id: "channel-filter",
      icon: Slack,
      title: "Channel Type Filtering",
      priority: "solved",
      quote: "\"The data model in reports contains a field called 'channel type' - upon grouping by this field, they were able to see API and Slack entries.\"",
      source: "Meeting Discussion",
      rationale: "Separate real user sessions from API/monitoring traffic",
      benefits: [
        "Filter by Slack vs API",
        "Isolate real user sessions",
        "Accurate session counts",
        "Clean analytics data"
      ]
    },
    {
      id: "unique-users",
      icon: Users,
      title: "Unique User Metrics",
      priority: "must-have",
      quote: "\"Unique user metrics would not work well with the current service agent type.\"",
      source: "Meeting Discussion",
      rationale: "Essential for understanding actual adoption and reach",
      benefits: [
        "Track distinct employees using agent",
        "Measure adoption rate",
        "Identify power users",
        "Available after Employee Agent migration"
      ]
    },
    {
      id: "custom-sdm",
      icon: Database,
      title: "Custom SDM Reports",
      priority: "option",
      quote: "\"Create new metrics by inheriting from the existing SDM if needed.\"",
      source: "Meeting Summary",
      rationale: "Build custom metrics while keeping studio experience",
      benefits: [
        "Inherit from existing semantic model",
        "Create custom calculated fields",
        "Build tailored reports",
        "Access SDM documentation"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "reuse-setup",
      icon: Database,
      title: "Data Cloud Setup Can Be Reused",
      type: "solution",
      quote: "\"While there is no way to clone an agent, the retrieval setup and other elements configured in Data Cloud can be fully reused by simply recreating the agent metadata.\"",
      source: "Meeting Summary",
      insight: "Migration to Employee Agent doesn't require rebuilding the knowledge integration.",
      significance: "Confluence → S3 → Data Cloud pipeline stays intact, only agent type changes."
    },
    {
      id: "channel-type-fix",
      icon: CheckCircle,
      title: "Channel Type Field Solves Filtering",
      type: "solved",
      quote: "\"Upon grouping by this field, Stepan Grushai was able to see API and Slack entries, confirming this solved part of their data issues.\"",
      source: "Meeting Discussion",
      insight: "The ability to filter by channel type was discovered during the meeting.",
      significance: "Immediate workaround available for session differentiation problem."
    },
    {
      id: "service-vs-employee",
      icon: RefreshCw,
      title: "Agent Type Matters for Analytics",
      type: "learning",
      quote: "\"Service agent scenarios involving external clients and typical support flows are not relevant to the internal HR-focused agent.\"",
      source: "Meeting Summary",
      insight: "Choosing wrong agent type at setup creates cascading analytics problems.",
      significance: "Consider use case carefully before selecting agent type - internal vs external users."
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'severity-critical';
      case 'high': return 'severity-high';
      default: return 'severity-medium';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'priority-critical';
      case 'must-have': return 'priority-must';
      case 'solved': return 'priority-solved';
      default: return 'priority-option';
    }
  };

  return (
    <div className="astound-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Astound" />
      
      <header className="astound-ux-header">
        <div className="header-badge">Astound × UX Research</div>
        <h1 className="astound-ux-title">HR Slack Agent Findings</h1>
        <p className="astound-ux-subtitle">Service → Employee Agent Migration</p>
        <div className="astound-ux-date">November 6, 2025</div>
      </header>

      {/* Tab Navigation */}
      <nav className="findings-tabs" role="tablist">
        <button
          className={`findings-tab ${activeTab === 'pain-points' ? 'active' : ''}`}
          onClick={() => setActiveTab('pain-points')}
          role="tab"
          tabIndex={0}
        >
          <AlertTriangle size={18} />
          <span>Pain Points</span>
        </button>
        <button
          className={`findings-tab ${activeTab === 'desired' ? 'active' : ''}`}
          onClick={() => setActiveTab('desired')}
          role="tab"
          tabIndex={0}
        >
          <Star size={18} />
          <span>Desired Features</span>
        </button>
        <button
          className={`findings-tab ${activeTab === 'insights' ? 'active' : ''}`}
          onClick={() => setActiveTab('insights')}
          role="tab"
          tabIndex={0}
        >
          <Lightbulb size={18} />
          <span>Key Insights</span>
        </button>
      </nav>

      {/* Pain Points Tab */}
      {activeTab === 'pain-points' && (
        <section className="tab-panel">
          <div className="findings-grid">
            {painPoints.map((pain) => {
              const IconComponent = pain.icon;
              const isExpanded = expandedCard === pain.id;
              return (
                <div
                  key={pain.id}
                  className={`finding-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(pain.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardToggle(pain.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="finding-header">
                    <div className={`finding-icon ${getSeverityColor(pain.severity)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="finding-title-section">
                      <h3>{pain.title}</h3>
                      <span className={`severity-badge ${getSeverityColor(pain.severity)}`}>
                        {pain.severity}
                      </span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <p className="finding-description">{pain.description}</p>
                  <div className="finding-quote">
                    <MessageSquare size={14} />
                    <span>{pain.quote}</span>
                  </div>
                  <div className="finding-source">{pain.source}</div>
                  
                  {isExpanded && (
                    <div className="finding-details">
                      <div className="impact-section">
                        <h4>Impact</h4>
                        <p>{pain.impact}</p>
                      </div>
                      <div className="symptoms-section">
                        <h4>Symptoms</h4>
                        <ul>
                          {pain.symptoms.map((symptom, idx) => (
                            <li key={idx}>
                              {symptom.includes('SOLVED') ? <CheckCircle size={14} /> : <XCircle size={14} />}
                              {symptom}
                            </li>
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
        <section className="tab-panel">
          <div className="findings-grid">
            {desiredFeatures.map((feature) => {
              const IconComponent = feature.icon;
              const isExpanded = expandedCard === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`finding-card feature ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(feature.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardToggle(feature.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="finding-header">
                    <div className={`finding-icon ${getPriorityColor(feature.priority)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="finding-title-section">
                      <h3>{feature.title}</h3>
                      <span className={`priority-badge ${getPriorityColor(feature.priority)}`}>
                        {feature.priority}
                      </span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="finding-quote">
                    <MessageSquare size={14} />
                    <span>{feature.quote}</span>
                  </div>
                  <div className="finding-source">{feature.source}</div>
                  
                  {isExpanded && (
                    <div className="finding-details">
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
        <section className="tab-panel">
          <div className="insights-grid">
            {keyInsights.map((insight) => {
              const IconComponent = insight.icon;
              const isExpanded = expandedCard === insight.id;
              return (
                <div
                  key={insight.id}
                  className={`insight-card-astound ${insight.type} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(insight.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardToggle(insight.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="insight-header-astound">
                    <div className={`insight-icon-astound ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-astound">
                      <span className={`insight-type-badge ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote-astound">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source-astound">{insight.source}</div>
                  
                  {isExpanded && (
                    <div className="insight-expanded-astound">
                      <div className="insight-detail-astound">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance-astound">
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

      <footer className="astound-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Astound Analytics Discussion - November 6, 2025</span>
        </div>
        <a 
          href="?view=astound-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=astound-workflow';
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

export default AstoundUXFindings;

