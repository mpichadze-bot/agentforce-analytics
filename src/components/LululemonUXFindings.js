import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Filter, Calendar, GitBranch, Eye,
  FileText, Database, Settings, Search, Layers, BarChart3, Target,
  Clipboard, Users, ClipboardCheck, Wrench, Activity, Scale, Shield,
  Zap, Download, Table, Grid, TrendingUp, PieChart
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './LululemonUXFindings.css';

const LululemonUXFindings = () => {
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
      id: "limited-agent-builder",
      icon: Settings,
      title: "Limited Agent Builder Visibility",
      severity: "critical",
      description: "Current agent builder is limited in what can be done without looking at logs and session traces.",
      quote: "\"The current agent builder... is fairly limited in what can be done without looking at logs and session traces. This limitation makes it challenging to identify edge cases that need attention.\"",
      source: "Conner Hobbs, Lululemon",
      impact: "Cannot identify edge cases without manually diving into raw logs.",
      symptoms: [
        "Requires manual log analysis for troubleshooting",
        "Edge cases go unnoticed until they cause problems",
        "No proactive alerting for unusual patterns"
      ]
    },
    {
      id: "dashboard-inflexibility",
      icon: Filter,
      title: "Dashboard Inflexibility",
      severity: "critical",
      description: "Cannot filter by custom date ranges or see versioning for before/after comparison.",
      quote: "\"They want to be able to monitor the impact on metrics after a change to the agent. They need filtering capabilities beyond 'last 7 days' or 'last 30 days.'\"",
      source: "Meeting Notes",
      impact: "Cannot measure the impact of agent changes or A/B test improvements.",
      symptoms: [
        "Only preset date ranges available (7 days, 30 days)",
        "No start/end date picker",
        "Cannot compare agent versions",
        "Cannot filter by localized versions vs global topics"
      ]
    },
    {
      id: "manual-escalation-triage",
      icon: Eye,
      title: "Manual Escalation Triage",
      severity: "critical",
      description: "Identifying why agents fail before escalation requires clicking through individual conversations.",
      quote: "\"They currently have to manually filter intents by those with escalation and then click through each conversation with multiple topics to understand why the agent failed to answer.\"",
      source: "Meeting Notes",
      impact: "Extremely labor-intensive; QA team reviews high volume of sessions daily.",
      symptoms: [
        "Filter intents → Click each conversation → Read session trace",
        "Classify as user-initiated vs agent-initiated manually",
        "Use spreadsheets and Jira for tracking",
        "Being encouraged to use 'grid' but struggling to adopt"
      ]
    },
    {
      id: "stdm-complexity",
      icon: Database,
      title: "Session Tracing Data Model Complexity",
      severity: "high",
      description: "Building custom reports is extremely difficult due to the number of DMOs.",
      quote: "\"Building custom reports and dashboards on the session tracing data model (STDM) is difficult due to the number of different Data Model Objects (DMOs).\"",
      source: "Conner Hobbs, Lululemon",
      impact: "Requires dedicated team member (FTE) to build custom dashboards.",
      symptoms: [
        "Tying metrics back to messaging session is hard",
        "Instruction adherence can't easily connect to chat transcript",
        "Exporting to PowerBI for complex metrics"
      ]
    },
    {
      id: "topic-label-confusion",
      icon: Layers,
      title: "Topic Display Issues",
      severity: "medium",
      description: "Topics show as long API names instead of human-readable labels.",
      quote: "\"They want to see a bucket like 'escalation' instead of a long number (e.g., 'escalation_some long number'), allowing them to drill into specifics if needed.\"",
      source: "Meeting Notes",
      impact: "Dashboard is hard to scan; requires mental translation of API names.",
      symptoms: [
        "API names displayed instead of labels",
        "Cannot quickly identify which topic is which",
        "Drill-down needed just to understand the topic"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "custom-scorecards",
      icon: Clipboard,
      title: "Custom Scorecard Input",
      priority: "critical",
      quote: "\"They want the ability to input their custom scorecard first, then use an LLM to score against it, and finally refine the LLM's scoring outputs.\"",
      source: "John Kepp, FDE",
      rationale: "Contact centers approach evaluation from a QA/QM perspective, valuing structured rigor and scorecards.",
      benefits: [
        "LLM as workbench for validation, not primary source",
        "Align AI scoring with company quality standards",
        "QA team defines success criteria",
        "Scoring against specific business policies"
      ]
    },
    {
      id: "flexible-filtering",
      icon: Calendar,
      title: "Flexible Date & Version Filtering",
      priority: "must-have",
      quote: "\"They need filtering capabilities beyond 'last 7 days' or 'last 30 days,' such as start and end dates.\"",
      source: "Conner Hobbs, Lululemon",
      rationale: "Need to measure impact of agent changes and compare before/after.",
      benefits: [
        "Custom date range selection",
        "Version comparison",
        "Filter by localized vs global topics",
        "Track metric changes after deployments"
      ]
    },
    {
      id: "topic-to-session-drilldown",
      icon: Search,
      title: "Pre-Escalation Topic Visibility",
      priority: "deal-breaker",
      quote: "\"A critical need is to see which topics users go to before escalating, to identify why the agent failed to answer the question.\"",
      source: "Conner Hobbs, Lululemon",
      rationale: "Understanding the path to escalation is key for deflection improvement.",
      benefits: [
        "See topic sequence before escalation",
        "Identify patterns in failed conversations",
        "Reduce manual click-through investigation",
        "Generalize what needs improvement"
      ]
    },
    {
      id: "exploratory-analysis",
      icon: Zap,
      title: "Exploratory Analysis of Failed Sessions",
      priority: "high",
      quote: "\"The system would translate an inquiry like 'are all of those failed because the answer was X?' into a prompt run on each session, and then merge the answers to provide a summary.\"",
      source: "Erez Agami (proposed)",
      rationale: "Power multiplier to save manual verification time across many sessions.",
      benefits: [
        "Ask questions across multiple failed sessions",
        "LLM analyzes and summarizes patterns",
        "Find common failure reasons at scale",
        "Reduce manual review burden"
      ]
    },
    {
      id: "response-tone-control",
      icon: MessageSquare,
      title: "Response Tone & Language Control",
      priority: "should-have",
      quote: "\"Lululemon wants a greater level of control over the agent's response, specifically the tone and language, rather than just getting a response from an action.\"",
      source: "Meeting Notes",
      rationale: "Brand voice consistency is critical for customer-facing agents.",
      benefits: [
        "Control tone beyond action outputs",
        "Brand-consistent responses",
        "Empathy and style guidelines enforcement"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "qa-qm-perspective",
      icon: ClipboardCheck,
      title: "QA/QM Perspective is Primary",
      type: "strategy",
      quote: "\"Customers... approach agent evaluation from a Quality Assurance (QA) and Quality Management (QM) perspective, valuing structured rigor and scorecards.\"",
      source: "John Kepp, FDE",
      insight: "Contact center teams think in terms of scorecards and audits, not abstract metrics. The LLM should validate their definitions, not define them.",
      significance: "Scorecard input should be the first step in the UX, before any LLM evaluation."
    },
    {
      id: "production-focus",
      icon: Target,
      title: "Production is the Only Environment that Matters",
      type: "context",
      quote: "\"They do not run a large number of tests in the sandbox to validate changes... deployment to production relies on sufficient testing in a sandbox and often a round of testing with their QA team.\"",
      source: "Conner Hobbs, Lululemon",
      insight: "Sandbox testing is minimal; production is where real validation happens. Getting teams to use testing centers with conversation history is a struggle.",
      significance: "Observability tools must be robust enough for production use as the primary environment."
    },
    {
      id: "dual-need-scoring-insights",
      icon: Scale,
      title: "Both Scorecards AND Insights are Needed",
      type: "insight",
      quote: "\"Insights surface unexpected issues, such as website errors, which a conversation scoring dashboard might miss if it focused only on programmatic prompts.\"",
      source: "John Kepp, FDE",
      insight: "There's a need for both structured scoring (conversation scorecard, failure reason, root cause, what-if) AND emergent insight surfacing (AIE) to catch unexpected issues.",
      significance: "Don't sacrifice exploration for structure—provide both."
    },
    {
      id: "ideal-workflow-vision",
      icon: GitBranch,
      title: "The Ideal Improvement Workflow",
      type: "process",
      quote: "\"User-defined LLM as a judge for scorecard generation → classifying scores into failure reasons → actual root cause analysis → 'what if' simulation suggesting fixes.\"",
      source: "Erez Agami (proposed)",
      insight: "A clear four-step workflow was articulated: Score → Classify → Root Cause → Simulate Fix. Visualizing these metrics at the topic and intent level was requested.",
      significance: "This is the north star workflow for the observability experience."
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
      case 'deal-breaker': return 'priority-dealbreaker';
      case 'critical': return 'priority-critical';
      case 'must-have': return 'priority-must';
      case 'high': return 'priority-high';
      default: return 'priority-should';
    }
  };

  return (
    <div className="lulu-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Lululemon" />
      <header className="lulu-ux-header">
        <div className="header-badge">Lululemon × UX Research</div>
        <h1 className="lulu-ux-title">Agent Observability Findings</h1>
        <p className="lulu-ux-subtitle">QA/QM-Focused Insights from FDE Session</p>
        <div className="lulu-ux-date">December 16, 2025</div>
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
                  <div className="pain-source">{pain.source}</div>
                  
                  {isExpanded && (
                    <div className="pain-details">
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
        <section className="tab-panel" role="tabpanel">
          <div className="desired-features-grid">
            {desiredFeatures.map((feature) => {
              const IconComponent = feature.icon;
              const isExpanded = expandedCard === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`feature-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(feature.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, feature.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="feature-card-header">
                    <div className={`feature-icon ${getPriorityColor(feature.priority)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="feature-title-section">
                      <h3>{feature.title}</h3>
                      <span className={`priority-tag ${getPriorityColor(feature.priority)}`}>
                        {feature.priority}
                      </span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="feature-quote">
                    <MessageSquare size={14} />
                    <span>{feature.quote}</span>
                  </div>
                  <div className="feature-source">{feature.source}</div>
                  
                  {isExpanded && (
                    <div className="feature-details">
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
          <div className="insights-grid">
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
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source">{insight.source}</div>
                  
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

          {/* Ideal Workflow Diagram */}
          <div className="workflow-vision">
            <h3><Activity size={20} /> Proposed Improvement Workflow</h3>
            <div className="workflow-steps">
              <div className="workflow-step">
                <div className="workflow-num">1</div>
                <div className="workflow-content">
                  <strong>Score</strong>
                  <p>User-defined LLM as Judge</p>
                </div>
              </div>
              <ArrowRight className="workflow-arrow" size={24} />
              <div className="workflow-step">
                <div className="workflow-num">2</div>
                <div className="workflow-content">
                  <strong>Classify</strong>
                  <p>Failure Reasons</p>
                </div>
              </div>
              <ArrowRight className="workflow-arrow" size={24} />
              <div className="workflow-step">
                <div className="workflow-num">3</div>
                <div className="workflow-content">
                  <strong>Root Cause</strong>
                  <p>Pinpoint Agent Changes</p>
                </div>
              </div>
              <ArrowRight className="workflow-arrow" size={24} />
              <div className="workflow-step">
                <div className="workflow-num">4</div>
                <div className="workflow-content">
                  <strong>Simulate</strong>
                  <p>"What If" Fixes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="lulu-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">FDEs / Agentforce Observability - December 16, 2025</span>
        </div>
        <a 
          href="?view=lululemon-workflow" 
          className="workflow-link"
          tabIndex={0}
          aria-label="View Lululemon Workflow"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=lululemon-workflow';
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

export default LululemonUXFindings;


