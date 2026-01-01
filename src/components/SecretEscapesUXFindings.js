import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Users, Eye, Activity, Calculator,
  Database, RefreshCw, BarChart2, Download, Search, Settings, Percent
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './SecretEscapesUXFindings.css';

const SecretEscapesUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "abandonment-discrepancy",
      icon: Percent,
      title: "Major Abandonment Rate Discrepancy",
      severity: "critical",
      description: "Salesforce shows extremely low abandonment, but Secret Escapes measures 10-15% internally",
      quote: "\"Our abandonment rate is around 10-15%, but yours is extremely low. I can't sanity check the data because I can't view the underlying sessions.\"",
      source: "Laura Meschi",
      impact: "Cannot trust out-of-box metrics for business reporting",
      symptoms: [
        "SE: 10-15% abandonment rate",
        "Salesforce: Extremely low (close to 0%)",
        "Different definitions compound the issue",
        "Cannot validate which is correct"
      ]
    },
    {
      id: "closed-action-unclear",
      icon: Settings,
      title: "Closed Action Trigger Unclear",
      severity: "high",
      description: "Never observed agent exiting session based on context - sessions just timeout or user ends",
      quote: "\"I've never seen the agent step away from a conversation based on context. It just times out or someone ends the session.\"",
      source: "Laura Meschi",
      impact: "Deflection metric may be inaccurate if closed_action rarely fires",
      symptoms: [
        "Agent says 'glad I could help' but doesn't terminate",
        "Sessions wait for something else to happen",
        "Only timeout or user end-chat observed",
        "API event trigger conditions unknown"
      ]
    },
    {
      id: "no-session-navigation",
      icon: Search,
      title: "Cannot Navigate to Underlying Sessions",
      severity: "high",
      description: "Dashboard shows metrics but can't drill down to individual messaging sessions for validation",
      quote: "\"What would be really good for me would be sanity checking the data - viewing the messaging session related to the report.\"",
      source: "Laura Meschi",
      impact: "Cannot validate if metrics are correctly counting sessions",
      symptoms: [
        "Metrics displayed without drill-down",
        "Must manually search session IDs",
        "No direct link from dashboard to session",
        "Workaround: Create Data Cloud report"
      ]
    },
    {
      id: "duplicate-sessions",
      icon: Database,
      title: "Duplicate Session Counts in Reports",
      severity: "medium",
      description: "Same messaging session ID appears multiple times - possibly due to planner session forking",
      quote: "\"One messaging session might be tied to multiple planner sessions due to escalations or users returning after inactivity.\"",
      source: "Nir Tzavchon",
      impact: "Metrics may be over-counting or misattributing sessions",
      symptoms: [
        "Same session counted 2-3 times",
        "Agent force default running may cause forks",
        "Two sessions generated within few minutes",
        "Escalation creates additional session"
      ]
    },
    {
      id: "sentiment-neutral",
      icon: MessageSquare,
      title: "Internal Sentiment Prompt Too Neutral",
      severity: "medium",
      description: "Custom sentiment analysis labels vast majority as neutral (3/5) - can't distinguish good from bad",
      quote: "\"The vast majority of sessions are labeled as a 3 which is neutral because the system cannot decide between negative and positive.\"",
      source: "Laura Meschi",
      impact: "Cannot use sentiment for deflection formula",
      symptoms: [
        "Most sessions score exactly 3",
        "Prompt doesn't define what sentiment means",
        "Cannot pick up nuances",
        "Quality score from Salesforce is much more decisive"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "session-navigation",
      icon: Search,
      title: "Direct Session Navigation",
      priority: "critical",
      quote: "\"We're going to put a direct link in optimization to get to the messaging session.\"",
      source: "Nir Tzavchon",
      rationale: "Essential for validating metric accuracy",
      benefits: [
        "Click metric → see underlying sessions",
        "Validate deflection/abandonment classification",
        "Read conversation transcripts",
        "Coming in future release"
      ]
    },
    {
      id: "quality-prompt",
      icon: Star,
      title: "Quality Score Prompt Documentation",
      priority: "high",
      quote: "\"I'm more than happy to share with you the actual prompt. It basically asks the LLM to rank how helpful the answer was.\"",
      source: "Nir Tzavchon",
      rationale: "Compare with internal sentiment analysis approach",
      benefits: [
        "Understand scoring methodology",
        "Compare with custom prompts",
        "Validate accuracy expectations",
        "Learn best practices for prompts"
      ]
    },
    {
      id: "data-export",
      icon: Download,
      title: "Export Semantic Layer Data",
      priority: "available",
      quote: "\"Create a Data Cloud report on the semantic model - add messaging session ID and status columns, then export.\"",
      source: "Nir Tzavchon",
      rationale: "Perform validation in Excel/external tools",
      benefits: [
        "Create report in Data Cloud",
        "Add any SDM fields",
        "Export to CSV/Excel",
        "Filter by agent name"
      ]
    },
    {
      id: "llm-improvement",
      icon: Lightbulb,
      title: "Improve Sentiment Prompt",
      priority: "advice",
      quote: "\"Explicitly define what sentiment means for the LLM. Evaluate different models. Play with temperature settings.\"",
      source: "Nir Tzavchon",
      rationale: "Fix neutral-heavy sentiment scoring",
      benefits: [
        "Define sentiment explicitly in prompt",
        "Try Claude for better LLM-as-judge",
        "Adjust temperature hyperparameter",
        "Use GPT-4 over GPT-5 if hyperparameters needed"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "action-definition",
      icon: CheckCircle,
      title: "Welcome Message is NOT an Action",
      type: "clarification",
      quote: "\"The welcome message is a system message. When customer makes an utterance that triggers answer-with-knowledge, that's an action.\"",
      source: "Daniel Measures",
      insight: "Only responses from invoked actions count as engaged.",
      significance: "Small talk, system messages, and topic instructions alone = unengaged session."
    },
    {
      id: "x-vs-endchat",
      icon: XCircle,
      title: "X Button ≠ End Chat",
      type: "clarification",
      quote: "\"The X just minimizes the chat. The three dots and 'End Chat' triggers closed_user_request.\"",
      source: "Nir Tzavchon",
      insight: "Most users probably never click the hidden End Chat option.",
      significance: "This is known issue - many customers report this. Enhancement planned."
    },
    {
      id: "commercial-engagement",
      icon: Calculator,
      title: "Engagement Definition is Commercial",
      type: "learning",
      quote: "\"What guided the definition is the commercial model - we translate value back to customers when an action is invoked.\"",
      source: "Nir Tzavchon",
      insight: "Salesforce counts engagement based on billable actions.",
      significance: "Internal metrics may need different definition based on user behavior, not billing."
    },
    {
      id: "multi-language",
      icon: RefreshCw,
      title: "All Languages Supported",
      type: "clarification",
      quote: "\"The output is in English but the language is agnostic - all languages are processed.\"",
      source: "Nir Tzavchon",
      insight: "Quality scoring works across languages.",
      significance: "No need to filter by language for insights - all sessions analyzed."
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
      case 'high': return 'priority-high';
      case 'available': return 'priority-available';
      case 'advice': return 'priority-advice';
      default: return 'priority-default';
    }
  };

  return (
    <div className="secretescapes-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Secret Escapes" />
      
      <header className="secretescapes-ux-header">
        <div className="header-badge">Secret Escapes × UX Research</div>
        <h1 className="secretescapes-ux-title">Metric Discrepancy Findings</h1>
        <p className="secretescapes-ux-subtitle">Comparing Internal vs Salesforce Definitions</p>
        <div className="secretescapes-ux-date">Sep 16, 2025 & Dec 19, 2025</div>
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
                  className={`insight-card-se ${insight.type} ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="insight-header-se">
                    <div className={`insight-icon-se ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-se">
                      <span className={`insight-type-badge ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote-se">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source-se">{insight.source}</div>
                  
                  {isExpanded && (
                    <div className="insight-expanded-se">
                      <div className="insight-detail-se">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance-se">
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

      <footer className="secretescapes-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Secret Escapes AF Observability Sessions - Sep 16 & Dec 19, 2025</span>
        </div>
        <a 
          href="?view=secretescapes-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=secretescapes-workflow';
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

export default SecretEscapesUXFindings;

