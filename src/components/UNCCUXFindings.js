import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Users, Eye, Activity, Filter,
  Database, Settings, Table, Layers, RefreshCw
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './UNCCUXFindings.css';

const UNCCUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "channel-filtering",
      icon: Filter,
      title: "Cannot Filter by Messaging Channel",
      severity: "critical",
      description: "Analytics doesn't include messaging channel, making it impossible to differentiate departments using the same agent",
      quote: "\"We had to create a custom data transform to be able to bring in messaging channel to some of those engagement DMOs because that wasn't part of it.\"",
      source: "Alexandra Flinn",
      impact: "Unable to report on department-specific performance for unified campus agent",
      symptoms: [
        "Messaging channel not included in engagement DMOs",
        "Created custom data transform as workaround",
        "Cannot differentiate IT vs Student Services conversations",
        "Custom fields also missing from reports"
      ]
    },
    {
      id: "dashboard-customization",
      icon: Settings,
      title: "Dashboard Filters Not Customizable",
      severity: "high",
      description: "Default 'service agent' filter is useless when all agents are service agents - need to filter by agent name or custom fields",
      quote: "\"He had at the top he had that you could select it's a service agent. Well, all of ours are service agents. Can we flip that filter to something else that's more prevalent for our users?\"",
      source: "Alexandra Flinn",
      impact: "Dashboard filters don't match university's reporting needs",
      symptoms: [
        "Default filter is 'service agent' - not useful",
        "Need to filter by agent name instead",
        "Custom service field needed for filtering",
        "Stakeholders rely heavily on this reporting"
      ]
    },
    {
      id: "sandbox-testing",
      icon: RefreshCw,
      title: "Sandbox Testing Was Unavailable",
      severity: "medium",
      description: "Initially could not test observability in sandbox - concern about pushing untested features to production",
      quote: "\"We understand that we can't really test this in sandbox. So we just want to make sure that when we turn this on that we are completely understanding exactly what's going to be pushed into production.\"",
      source: "Alexandra Flinn",
      impact: "Risk of unknown issues when enabling in production",
      symptoms: [
        "Originally sandbox not supported",
        "Now available (as of Nov 2025)",
        "Sandbox cannot predict all user behaviors",
        "Production monitoring still essential"
      ]
    },
    {
      id: "limitations-unknown",
      icon: AlertTriangle,
      title: "Need to Understand Limitations Upfront",
      severity: "medium",
      description: "Stakeholders depend on reporting - need to know what's configurable vs. fixed to set expectations",
      quote: "\"We want to be able to know what can be manipulated and what can be configured versus what are some of the limitations that we can't make changes to.\"",
      source: "Alexandra Flinn",
      impact: "Cannot set proper stakeholder expectations without knowing limits",
      symptoms: [
        "Stakeholders heavily rely on reporting",
        "Need to get ahead of limitations",
        "Unclear what's customizable",
        "Risk of overpromising to departments"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "channel-filter",
      icon: Filter,
      title: "Native Messaging Channel Filtering",
      priority: "critical",
      quote: "\"Any reporting that's based on Agent Force Analytics, we need to be able to filter by messaging channel.\"",
      source: "Alexandra Flinn",
      rationale: "Multiple departments use same agent - channel is the differentiator",
      benefits: [
        "Filter all analytics by messaging channel",
        "Support custom service field filtering",
        "Connect session data to messaging session",
        "Department-specific reporting"
      ]
    },
    {
      id: "custom-filters",
      icon: Settings,
      title: "Customizable Dashboard Filters",
      priority: "must-have",
      quote: "\"Can we flip that filter to something else that's more prevalent for our users instead?\"",
      source: "Alexandra Flinn",
      rationale: "Default filters don't match university use case",
      benefits: [
        "Replace 'service agent' with agent name",
        "Add custom field filters",
        "User-configurable filter options",
        "Save filter preferences"
      ]
    },
    {
      id: "sdm-extension",
      icon: Database,
      title: "Clone & Extend Semantic Data Model",
      priority: "must-have",
      quote: "\"You can clone and then you can either add more data from external resources or add your custom fields.\"",
      source: "Itay Oren",
      rationale: "Custom fields needed but SDM is locked - cloning is the path forward",
      benefits: [
        "Clone Agent Force Analytics Foundations SDM",
        "Add custom fields and calculated fields",
        "Maintain single source of truth",
        "No manual entity joins needed"
      ]
    },
    {
      id: "session-messaging-link",
      icon: Layers,
      title: "Session to Messaging Session Mapping",
      priority: "high",
      quote: "\"Every session that has a messaging session, you will see a button here saying go to messaging session.\"",
      source: "Itay Oren",
      rationale: "Already reporting on messaging session - need clear connection",
      benefits: [
        "Direct link from session to messaging session",
        "Related messaging session field on each session",
        "Connect existing reports to new observability",
        "Unified view of conversation data"
      ]
    },
    {
      id: "natural-language-query",
      icon: MessageSquare,
      title: "Natural Language Querying (Future)",
      priority: "nice-to-have",
      quote: "\"In the near future you'll be able to query it in natural language. Natural language queries are being transferred into SQL queries.\"",
      source: "Itay Oren",
      rationale: "Would make data accessible to non-technical staff",
      benefits: [
        "Query data using plain English",
        "Automatic SQL translation",
        "Empower department staff",
        "Reduce technical dependency"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "sdm-power",
      icon: Database,
      title: "Semantic Data Model is Powerful",
      type: "discovery",
      quote: "\"I didn't even know this exists and it makes our lives much easier. We're using it and we're seeing how it's helping customers.\"",
      source: "Itay Oren",
      insight: "Many customers don't know about SDM - it eliminates manual joins and report type creation.",
      significance: "SDM approach could solve most custom reporting needs if properly leveraged."
    },
    {
      id: "sandbox-production",
      icon: RefreshCw,
      title: "Sandbox ≠ Production Monitoring",
      type: "guidance",
      quote: "\"You can't predict everything. So it's an important step but there's no way around deploying the agent and also monitoring in production.\"",
      source: "Itay Oren",
      insight: "Sandbox is like designing a limited bot experience - can't predict all customer requests.",
      significance: "Even with sandbox testing, production observability remains essential."
    },
    {
      id: "knowledge-workflow",
      icon: Users,
      title: "Department Staff Update Articles",
      type: "process",
      quote: "\"End users that are embedded in the individual units... they're the ones that are updating their articles. 90% at this point is using the knowledge articles.\"",
      source: "Michael Peddycord",
      insight: "Non-technical staff maintain knowledge base - need simple way to identify gaps.",
      significance: "Observability insights need to be actionable by content owners, not just analysts."
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
      case 'high': return 'priority-high';
      default: return 'priority-nice';
    }
  };

  return (
    <div className="uncc-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="UNCC" />
      
      <header className="uncc-ux-header">
        <div className="header-badge">UNCC × UX Research</div>
        <h1 className="uncc-ux-title">Analytics Requirements</h1>
        <p className="uncc-ux-subtitle">Scaling Observability Across Campus</p>
        <div className="uncc-ux-date">November 19, 2025</div>
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
                            <li key={idx}><XCircle size={14} /> {symptom}</li>
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
                        <h4>Proposed Solutions</h4>
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
                  className={`insight-card-uncc ${insight.type} ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="insight-header-uncc">
                    <div className={`insight-icon-uncc ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-uncc">
                      <span className={`insight-type-badge ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote-uncc">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source-uncc">{insight.source}</div>
                  
                  {isExpanded && (
                    <div className="insight-expanded-uncc">
                      <div className="insight-detail-uncc">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance-uncc">
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

      <footer className="uncc-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">UNCC Observability Discussion - November 19, 2025</span>
        </div>
        <a 
          href="?view=uncc-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=uncc-workflow';
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

export default UNCCUXFindings;

