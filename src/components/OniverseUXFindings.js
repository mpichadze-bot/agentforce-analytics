import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Users, Eye, Activity, Database,
  Download, Search, Settings, FileText, Flag, Globe, ClipboardCheck,
  Target, TrendingUp, Filter
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './OniverseUXFindings.css';

const OniverseUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "no-brand-country-filter",
      icon: Globe,
      title: "Cannot Filter by Brand or Country",
      severity: "critical",
      description: "Operating 5 brands worldwide but cannot get insights filtered by brand or country",
      quote: "\"Calcedonia requires deeper insights filtered by brand and country but faces limitations in current observability.\"",
      source: "Elena Maio",
      impact: "Cannot understand performance differences across brands/regions",
      symptoms: [
        "5 brands, worldwide coverage",
        "No native brand filtering",
        "No country-level insights",
        "Working to extend semantic layer"
      ]
    },
    {
      id: "no-reviewed-marker",
      icon: ClipboardCheck,
      title: "No UI Way to Mark Sessions as Reviewed",
      severity: "critical",
      description: "After reviewing a low-score session, there's no way in the UI to mark it as reviewed",
      quote: "\"After reviewing a low-score session, there is no way in the UI to mark it as reviewed, requiring a manual workaround using custom fields in the messaging session.\"",
      source: "Alejandro Raigon",
      impact: "Quality team cannot track review progress in the tool",
      symptoms: [
        "Must use custom fields workaround",
        "No native review tracking",
        "Cannot filter reviewed vs unreviewed",
        "Manual status updates required"
      ]
    },
    {
      id: "manual-excel-process",
      icon: FileText,
      title: "Must Create Excel Files Manually",
      severity: "high",
      description: "Cannot download session data directly - must manually create Excel with case number, brand, feedback, issues",
      quote: "\"They manually create an Excel file for each low-score session with details like case number, brand, feedback, conclusion, and issues because they cannot download this information directly.\"",
      source: "Elena Maio",
      impact: "Time-consuming, error-prone, and poorly distributed across team",
      symptoms: [
        "Manual data entry for each session",
        "Cannot export session list",
        "Sharing Excel files with team",
        "Information poorly distributed"
      ]
    },
    {
      id: "cross-reference-pain",
      icon: Search,
      title: "Painful Cross-Referencing of Session IDs",
      severity: "high",
      description: "Must manually match messaging session IDs to observability to check conversation details",
      quote: "\"Elena Maio described the current painful process of cross-referencing messaging session IDs to observability to check the conversation details.\"",
      source: "Meeting Notes",
      impact: "Slow and tedious quality review process",
      symptoms: [
        "Copy/paste session IDs between views",
        "Cannot click through directly",
        "Multiple tabs/windows required",
        "Breaks quality review flow"
      ]
    },
    {
      id: "resolution-formula-issue",
      icon: TrendingUp,
      title: "Resolution Rate Counts Abandoned as Resolved",
      severity: "medium",
      description: "Customer-defined formula counts any non-escalated session as resolved, including abandoned ones",
      quote: "\"This definition implies that any session not escalated is counted as resolved, which includes abandoned sessions.\"",
      source: "Nir Tzavchon",
      impact: "Resolution rate metric is artificially inflated",
      symptoms: [
        "Formula: (Sessions - Escalated + Failed Escalated) / Total",
        "Abandoned sessions counted as resolved",
        "May give false sense of performance",
        "Need to refine formula"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "track-qa-feedback",
      icon: Flag,
      title: "Track QA Feedback in Salesforce",
      priority: "critical",
      quote: "\"The customer wants to track their quality review feedback directly in Salesforce and save their personal evaluation on whether the agent score is correct.\"",
      source: "Meeting Notes",
      rationale: "Eliminate Excel files and keep all feedback in one place",
      benefits: [
        "Save QA evaluation per session",
        "Track disagreement with system score",
        "Flag wrong topic assignments",
        "Centralized feedback repository"
      ]
    },
    {
      id: "qa-annotation",
      icon: ClipboardCheck,
      title: "QA Review & Annotation Capability",
      priority: "critical",
      quote: "\"The customer needs the ability for a QA person to review and annotate sessions, tracking any disagreement with the system's score.\"",
      source: "Nir Tzavchon",
      rationale: "Core need for quality process",
      benefits: [
        "Annotate sessions with notes",
        "Mark as reviewed/not reviewed",
        "Track QA person's assessment",
        "Compare human vs system score"
      ]
    },
    {
      id: "download-sessions",
      icon: Download,
      title: "Download Session Data",
      priority: "coming-jan",
      quote: "\"The capability to download session data is expected in January.\"",
      source: "Nir Tzavchon",
      rationale: "Eliminate manual Excel creation",
      benefits: [
        "Export session lists",
        "Include all relevant fields",
        "Filter before export",
        "Expected January 2025"
      ]
    },
    {
      id: "brand-country-filter",
      icon: Filter,
      title: "Brand & Country Filtering",
      priority: "in-progress",
      quote: "\"They are already working with Alejandro to extend the semantic layer and messaging case data to address this need.\"",
      source: "Elena Maio",
      rationale: "Essential for multi-brand, worldwide operations",
      benefits: [
        "Filter insights by brand",
        "Filter insights by country",
        "Compare brand performance",
        "Regional analysis capability"
      ]
    },
    {
      id: "diagnostic-analytics",
      icon: Activity,
      title: "Deeper Diagnostic Analytics",
      priority: "coming-mar",
      quote: "\"Deeper diagnostic analytics expected in March.\"",
      source: "Nir Tzavchon",
      rationale: "More granular insights and drill-down",
      benefits: [
        "Drill into problem areas",
        "Root cause analysis",
        "More granular metrics",
        "Expected March 2025"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "escalation-rate",
      icon: TrendingUp,
      title: "40% Escalation Rate",
      type: "metric",
      quote: "\"40% of sessions escalate due to agents not being able to go deeper on topics like order or delivery status.\"",
      source: "Elena Maio",
      insight: "High escalation driven by knowledge gaps, not agent quality.",
      significance: "Need deeper order management capabilities, not just FAQ and basic status."
    },
    {
      id: "resolution-targets",
      icon: Target,
      title: "Aggressive Resolution Targets",
      type: "context",
      quote: "\"Resolution rate target: 55% → 65% in 3 months, 75% in 6 months.\"",
      source: "Customer Goals",
      insight: "10% improvement needed in 3 months, 20% in 6 months.",
      significance: "Need robust analytics to track progress and identify improvement areas."
    },
    {
      id: "tableau-dashboard",
      icon: Database,
      title: "Engaged Tableau Expert for Custom Dashboard",
      type: "solution",
      quote: "\"They engaged a Tableau expert to create a dashboard for the customer that utilizes the new semantic data model metrics.\"",
      source: "Alejandro Raigon",
      insight: "Building custom solution on extended semantic model.",
      significance: "Out-of-box dashboards insufficient for multi-brand, multi-country needs."
    },
    {
      id: "shopper-assistant-gap",
      icon: Users,
      title: "Shopper Assistant Observability Gap",
      type: "gap",
      quote: "\"Quality checks are currently focused on customer service agents. The shopper assistant role presents a limitation in observability.\"",
      source: "Elena Maio",
      insight: "Only customer service agents have quality checks today.",
      significance: "Need to extend observability to shopper assistant agents too."
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
      case 'in-progress': return 'priority-progress';
      case 'coming-jan': return 'priority-jan';
      case 'coming-mar': return 'priority-mar';
      default: return 'priority-default';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'coming-jan': return 'Jan 2025';
      case 'coming-mar': return 'Mar 2025';
      case 'in-progress': return 'In Progress';
      default: return priority;
    }
  };

  return (
    <div className="oniverse-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Oniverse" />
      
      <header className="oniverse-ux-header">
        <div className="header-badge">Oniverse (Calcedonia) × UX Research</div>
        <h1 className="oniverse-ux-title">Quality Process Pain Points</h1>
        <p className="oniverse-ux-subtitle">Italian Retail - 5 Brands Worldwide</p>
        <div className="oniverse-ux-date">December 2025</div>
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
                              <XCircle size={14} />
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
                        {getPriorityLabel(feature.priority)}
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
                  className={`insight-card-oni ${insight.type} ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="insight-header-oni">
                    <div className={`insight-icon-oni ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-oni">
                      <span className={`insight-type-badge ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote-oni">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source-oni">{insight.source}</div>
                  
                  {isExpanded && (
                    <div className="insight-expanded-oni">
                      <div className="insight-detail-oni">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance-oni">
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

      <footer className="oniverse-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Oniverse Observability Improvement Suggestions - December 2025</span>
        </div>
        <a 
          href="?view=oniverse-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=oniverse-workflow';
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

export default OniverseUXFindings;

