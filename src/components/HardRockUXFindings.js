import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Users, Eye, Activity, Clock,
  Smartphone, Globe, UserX, Settings, BarChart2, Target, Zap
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './HardRockUXFindings.css';

const HardRockUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "no-user-tracking",
      icon: UserX,
      title: "Cannot Track Repeat vs First-Time Users",
      severity: "critical",
      description: "No way to identify if users are returning without authentication - different user IDs generated each session",
      quote: "\"This is pretty tough. If it's not an authenticated user, we're generating different user IDs for each time.\"",
      source: "Itay Oren",
      impact: "Cannot measure true adoption or unique reach - a million chats could be 100K repeat users or 1M unique",
      symptoms: [
        "Unauthenticated users get new ID each session",
        "Cannot distinguish first-time from repeat visitors",
        "Unity ID only available for authenticated users",
        "SMS: Phone number could work but not implemented"
      ]
    },
    {
      id: "instrumentation-gaps",
      icon: Smartphone,
      title: "Missing Instrumentation Data",
      severity: "high",
      description: "Device type, IP address, location, page context, and time on site not captured",
      quote: "\"Device type, IP location, where the user was before starting the chat, time on the site - those kind of things are a gap.\"",
      source: "Itay Oren",
      impact: "Cannot understand context of why users initiate chats or identify confusing pages",
      symptoms: [
        "No device type capture",
        "No IP/location data",
        "No 'top pages where chat triggered'",
        "No time on site before chat",
        "Suggestion: Use Adobe Analytics integration"
      ]
    },
    {
      id: "told-to-diy",
      icon: Settings,
      title: "Previously Told to Build Own Reports",
      severity: "high",
      description: "A month ago, customers were told to extract data from Data Cloud and build their own analytics",
      quote: "\"About a month and a half ago... we were told you guys have all the data in data cloud. Go and get your own reports.\"",
      source: "Ruben Akopyan",
      impact: "Frustration and delayed analytics; had to wait for Analytics 2.0",
      symptoms: [
        "No out-of-box dashboards initially",
        "Required custom Data Cloud development",
        "Needed 'AI on AI' themselves",
        "Team had to define metrics independently"
      ]
    },
    {
      id: "surveys-dont-work",
      icon: MessageSquare,
      title: "Surveys Insufficient for Satisfaction",
      severity: "medium",
      description: "End-of-chat surveys have low response rates - need inferential satisfaction scoring",
      quote: "\"We've learned that implementing surveys is just not enough and customers aren't answering this.\"",
      source: "Itay Oren",
      impact: "Cannot measure customer satisfaction without inference-based scoring",
      symptoms: [
        "Low survey response rates",
        "Satisfaction data gaps",
        "Need automated quality scoring",
        "Coming in Q1: 0-5 satisfaction score per session"
      ]
    },
    {
      id: "chatbot-hate",
      icon: Target,
      title: "Customers Hate Chatbots",
      severity: "medium",
      description: "Both internal teams and customers have negative preconceptions about chatbot experiences",
      quote: "\"I learned to hate chat bots. The good thing is that I learned that our customers also hate chat bots.\"",
      source: "Shira Gershoni, VP Product",
      impact: "High bar for success - agents must clearly outperform traditional decision-tree bots",
      symptoms: [
        "Negative user expectations",
        "Need clear differentiation from old bots",
        "Must prove value quickly",
        "Wide persona range (21-70 years old)"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "repeat-users",
      icon: Users,
      title: "Repeat vs First-Time User Tracking",
      priority: "critical",
      quote: "\"We want to know how many of those million chats are unique customers and how many are repeat customers.\"",
      source: "Shira Gershoni",
      rationale: "Essential for understanding true adoption - is the tool reaching many or being used intensively by few?",
      benefits: [
        "Unity ID for authenticated users",
        "Phone number for SMS (Roadie)",
        "Device fingerprinting (future)",
        "SSO integration coming ('tonight')"
      ]
    },
    {
      id: "context-data",
      icon: Globe,
      title: "Page Context & Device Data",
      priority: "must-have",
      quote: "\"If somebody is on a certain page and from that page the most questions come up, it's either an actionable page or a very confusing page.\"",
      source: "Shira Gershoni",
      rationale: "Understanding where chats originate helps identify website UX issues",
      benefits: [
        "Top pages where chat triggered",
        "Device type breakdown",
        "Time on page before chat",
        "Adobe Analytics integration path"
      ]
    },
    {
      id: "satisfaction-score",
      icon: Star,
      title: "Inferential Satisfaction Scoring",
      priority: "must-have",
      quote: "\"This is providing a holistic score if you were to give an end of chat survey. But it's not a survey. It's an inference.\"",
      source: "Lisa",
      rationale: "Surveys don't work - need AI-based satisfaction scoring per session",
      benefits: [
        "0-5 satisfaction score per session",
        "No survey required",
        "Session and moment-level granularity",
        "Custom prompt logic available"
      ]
    },
    {
      id: "intent-accuracy",
      icon: Target,
      title: "Intent Recognition Accuracy",
      priority: "high",
      quote: "\"How many times did the agent have to do the ping-pong with me as a customer in order to give me the response?\"",
      source: "Shira Gershoni",
      rationale: "Measure how good the agent is at understanding customer requests on first try",
      benefits: [
        "Quality score flags repeated requests",
        "LLM confidence scores available internally",
        "Fallback rate metric planned",
        "Combine intent + quality for accuracy"
      ]
    },
    {
      id: "actionable-insights",
      icon: Zap,
      title: "Actionable Insights via Flows",
      priority: "high",
      quote: "\"Are there any actionable items or actionable insights that would be produced... a task list saying we need to fix this?\"",
      source: "Mona B",
      rationale: "Reporting should drive action - trigger cases or CRM updates based on findings",
      benefits: [
        "Flow integration with prompts",
        "Trigger cases on low sentiment",
        "Update CRM objects automatically",
        "Custom business logic support"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "agents-not-bots",
      icon: Target,
      title: "Agents, Not Chatbots",
      type: "strategy",
      quote: "\"We're looking at these as agents rather than chat bots. There's a differentiation between an interface that has a decision tree and something that is more knowledgeable and actionable.\"",
      source: "Shira Gershoni",
      insight: "Hard Rock explicitly wants to position these as intelligent agents, not traditional chatbots.",
      significance: "Analytics must demonstrate agent intelligence and effectiveness, not just usage metrics."
    },
    {
      id: "analytics-evolution",
      icon: Zap,
      title: "Analytics 2.0 is Major Upgrade",
      type: "progress",
      quote: "\"The analytics 2.0 are extremely enhanced and it probably covers a lot of stuff that you guys wanted to see in the reports.\"",
      source: "Ruben Akopyan",
      insight: "From 'build your own' to moments, scores, and intent grouping - significant improvement.",
      significance: "Validates product investment; customers notice and appreciate the enhancements."
    },
    {
      id: "phased-approach",
      icon: Clock,
      title: "Trust-Building Phased Roadmap",
      type: "process",
      quote: "\"We're allowing you to trust the insights we're providing. We're learning from it as well... we should do it carefully.\"",
      source: "Itay Oren",
      insight: "Auto-fix capabilities will come only after customers trust the insights.",
      significance: "Product team recognizes auto-remediation requires proven accuracy first."
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
      default: return 'priority-high';
    }
  };

  return (
    <div className="hardrock-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Hard Rock" />
      
      <header className="hardrock-ux-header">
        <div className="header-badge">Hard Rock × UX Research</div>
        <h1 className="hardrock-ux-title">Analytics Requirements</h1>
        <p className="hardrock-ux-subtitle">Melody & Roadie Success Metrics</p>
        <div className="hardrock-ux-date">November 12, 2025</div>
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
                  className={`insight-card-hr ${insight.type} ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="insight-header-hr">
                    <div className={`insight-icon-hr ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-hr">
                      <span className={`insight-type-badge ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote-hr">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source-hr">{insight.source}</div>
                  
                  {isExpanded && (
                    <div className="insight-expanded-hr">
                      <div className="insight-detail-hr">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance-hr">
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

      <footer className="hardrock-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">SHRSS Analytics Discussion - November 12, 2025</span>
        </div>
        <a 
          href="?view=hardrock-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=hardrock-workflow';
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

export default HardRockUXFindings;

