import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Users, Eye, Activity, Navigation,
  Database, RefreshCw, BarChart2, Target, Filter, Settings, MousePointer,
  Bug, Link
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './NvidiaUXFindings.css';

const NvidiaUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "navigation-bug",
      icon: Bug,
      title: "Confusing Navigation & Data Access",
      severity: "critical",
      description: "Navigation is confusing and hard to use - messaging session object is the most comfortable but manual method",
      quote: "\"It's very confusing, very hard to cruise between and browse between the information. Currently the messaging session is the most comfortable but it's manual effort.\"",
      source: "Maor Goldfarb",
      impact: "Must use manual workarounds instead of intuitive drill-down",
      symptoms: [
        "Clicking intent doesn't filter moments table",
        "Session links not clickable",
        "Must manually copy/paste session IDs",
        "Navigation complexity causes frustration with business stakeholders"
      ]
    },
    {
      id: "quality-mismatch",
      icon: Star,
      title: "Quality Score Doesn't Match Business Needs",
      severity: "critical",
      description: "Out-of-box quality score measures if agent followed instructions, not if answer was actually helpful",
      quote: "\"The scoring was high but the response was not accurate enough for NVIDIA business needs.\"",
      source: "Maor Goldfarb",
      impact: "Cannot rely on quality scores for business evaluation",
      symptoms: [
        "High score for procedurally correct but wrong answers",
        "Score reflects instruction-following, not accuracy",
        "No business-specific evaluation criteria",
        "Custom evals not available until mid-2026"
      ]
    },
    {
      id: "no-questions-metric",
      icon: MessageSquare,
      title: "Missing Questions Per Session Metric",
      severity: "high",
      description: "Cannot see count/content of questions asked in a session - only intents are summarized",
      quote: "\"We don't have any observation about the amount and the content of questions unless we manually review messaging session records.\"",
      source: "Maor Goldfarb",
      impact: "Cannot analyze customer behavior patterns",
      symptoms: [
        "Moments summarize intents, not individual questions",
        "Must manually review session records",
        "Cannot determine if customers are interactive or single-question",
        "No way to segment by customer behavior type"
      ]
    },
    {
      id: "no-product-tagging",
      icon: Target,
      title: "No Product-Based Session Tagging",
      severity: "high",
      description: "Cannot tag sessions by product (DJX, switches) to identify low confidence areas",
      quote: "\"We noticed low confidence scores for DJX topics... need to add more KB articles specifically for DJX products.\"",
      source: "Yana Irani",
      impact: "Cannot identify which products need more content",
      symptoms: [
        "Sessions not categorized by product",
        "Cannot filter by product category",
        "Hard to identify content gaps per product",
        "No way to prioritize KB article creation"
      ]
    },
    {
      id: "label-api-mismatch",
      icon: Settings,
      title: "Label vs API Name Mismatch",
      severity: "medium",
      description: "Old topic API names still appear in analytics despite label changes",
      quote: "\"Why did the labeling wasn't change for the agent type and topics API?\"",
      source: "Maor Goldfarb",
      impact: "Confusing analytics display with old naming",
      symptoms: [
        "Old topic names in dashboards",
        "Labels changed but API names unchanged",
        "Cannot edit API names in agent",
        "Configuration changes avoided to prevent breakage"
      ]
    },
    {
      id: "generic-optimization",
      icon: Filter,
      title: "Optimization Tools Too Generic",
      severity: "high",
      description: "Current optimization insights don't match internal business focus - topics are too high-level and generic",
      quote: "\"The current optimization tools are too generic for our internal focus. Topics like pre-RMA, post-RMA are too high level, too general.\"",
      source: "Maor Goldfarb",
      impact: "Must build manual tagging process outside the tool",
      symptoms: [
        "Topics don't reflect business taxonomy",
        "Need reclassification of topics to express real intent",
        "Manual review of 300+ messaging sessions weekly",
        "Custom fields added to messaging session object"
      ]
    },
    {
      id: "manual-tagging",
      icon: Database,
      title: "Manual Tagging Process Required",
      severity: "high",
      description: "Team reviews each conversation manually and tags with custom fields because optimization can't do it",
      quote: "\"We are reviewing each conversation and classifying - valid responses, topics, action items like missing articles or incorrect logic.\"",
      source: "Maor Goldfarb",
      impact: "Time-consuming manual effort that doesn't scale",
      symptoms: [
        "Added custom fields: valid response, action item, Jira number, topic",
        "Weekly sessions reviewing 300+ messaging items",
        "Business getting frustrated with lack of automation",
        "Cannot leverage out-of-box tagging for internal taxonomy"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "seamless-nav",
      icon: Navigation,
      title: "Seamless Dashboard Navigation",
      priority: "critical",
      quote: "\"You can go from your dashboard to the moments table already pre-filtered and from that to the messaging session intent.\"",
      source: "Christian Lanz",
      rationale: "Core workflow for investigating agent performance",
      benefits: [
        "Click intent → filter moments table",
        "Click moment → view session transcript",
        "See topics, actions, quality reasoning",
        "One-click journey from KPI to details"
      ]
    },
    {
      id: "custom-evals",
      icon: Star,
      title: "Custom Business Evaluations",
      priority: "critical",
      quote: "\"The ability to define your own custom evals on top of the session data will come later next year.\"",
      source: "Nir Tzavchon",
      rationale: "Out-of-box scoring doesn't reflect business accuracy needs",
      benefits: [
        "Define business-specific quality criteria",
        "Custom scoring based on domain knowledge",
        "Evaluate content accuracy, not just process",
        "Coming GA mid-2026"
      ]
    },
    {
      id: "product-tagging",
      icon: Target,
      title: "Product Category Tagging",
      priority: "high",
      quote: "\"Is this something we can do per messaging session? Tag by product to identify low confidence areas?\"",
      source: "Yana Irani",
      rationale: "Identify which products need more knowledge content",
      benefits: [
        "FIQ to collect product categories",
        "Filter analytics by product",
        "Identify content gaps by product",
        "Prioritize KB article creation"
      ]
    },
    {
      id: "user-feedback",
      icon: MessageSquare,
      title: "User Feedback Mechanism",
      priority: "coming",
      quote: "\"We are developing a user-feedback mechanism (scoring and comments) at the end of the conversation.\"",
      source: "Christian Lanz",
      rationale: "Get direct user sentiment on agent interactions",
      benefits: [
        "End-of-chat feedback collection",
        "User scoring and comments",
        "Sentiment capture from customer",
        "Available soon"
      ]
    },
    {
      id: "questions-count",
      icon: BarChart2,
      title: "Questions Per Session Analytics",
      priority: "high",
      quote: "\"What is the behavior for our customers? Do they ask one question or is it something more interactive?\"",
      source: "Yana Irani",
      rationale: "Understand customer behavior patterns",
      benefits: [
        "Count of questions per session",
        "Average questions per session",
        "Segment by interaction intensity",
        "Identify follow-up question patterns"
      ]
    },
    {
      id: "custom-trackers",
      icon: Target,
      title: "Custom Tags & Trackers",
      priority: "coming",
      quote: "\"Creating custom tags will allow you the flexibility. If you want to set up a tracker on product demand you'll do that.\"",
      source: "Nir Tzavchon",
      rationale: "Track business-specific topics like product categories (VGPU, DGX)",
      benefits: [
        "Create custom tag taxonomy",
        "Set up trackers for trending topics",
        "Track by product category",
        "Coming end of Q1 next year"
      ]
    },
    {
      id: "semantic-reports",
      icon: Database,
      title: "Data Cloud Reports on Semantic Layer",
      priority: "available",
      quote: "\"You could call for this semantic layer on top of a report in data cloud and create any view that's useful to you.\"",
      source: "Nir Tzavchon",
      rationale: "Create custom views like abandoned sessions table",
      benefits: [
        "Create reports on semantic model",
        "Bridge gap between experiences",
        "Include any field from moments table",
        "All fields documented in help docs"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "quality-meaning",
      icon: Star,
      title: "Quality Score = Process, Not Accuracy",
      type: "learning",
      quote: "\"A high quality score is given when the agent correctly follows instructions and adheres to the required actions based on the intent.\"",
      source: "Christian Lanz",
      insight: "Score measures whether agent followed its instructions correctly.",
      significance: "High score doesn't mean the answer was factually correct or helpful for the business context."
    },
    {
      id: "workaround-exists",
      icon: Filter,
      title: "Intent Filter Workaround Available",
      type: "solution",
      quote: "\"On the moments table, we have a filter. Select intent tags, select from the list what you've seen performing poorly.\"",
      source: "Shani Avnet",
      insight: "Manual workaround exists despite navigation bug.",
      significance: "Can still filter moments by intent, just requires manual steps instead of click-through."
    },
    {
      id: "external-llm-option",
      icon: RefreshCw,
      title: "External LLM for Custom Eval",
      type: "workaround",
      quote: "\"Build a flow that takes session data, sends it to an external LLM provider, runs the custom evaluation using a prompt, and connects the score back to the session.\"",
      source: "Nir Tzavchon",
      insight: "Can build custom evaluation today using external LLM.",
      significance: "Workaround is complex and requires custom reports/dashboards, but enables business-specific scoring now."
    },
    {
      id: "trace-ui-coming",
      icon: Eye,
      title: "Trace UI Coming Next Phase",
      type: "roadmap",
      quote: "\"In the next phase, we'll have also more information regarding each of those interactions.\"",
      source: "Shani Avnet",
      insight: "Session trace UI will provide more granular interaction details.",
      significance: "Future release will show step-by-step agent reasoning and actions."
    },
    {
      id: "valid-response-def",
      icon: CheckCircle,
      title: "Valid Response = Business Accuracy",
      type: "learning",
      quote: "\"A valid response is a relevant and semantic response to a product troubleshooting query. An invalid response is where the agent lacked proper instruction.\"",
      source: "Maor Goldfarb",
      insight: "NVIDIA defines validity differently than the out-of-box quality score.",
      significance: "Need custom taxonomy: valid/invalid, topic classification, action items like missing articles."
    },
    {
      id: "manual-scaling-issue",
      icon: RefreshCw,
      title: "Manual Tagging Doesn't Scale",
      type: "learning",
      quote: "\"If you try to do it manual it will be really difficult to scale. If you try to create specific tags it will be difficult to scale as well.\"",
      source: "Christian Lanz",
      insight: "Current approach of reviewing 300+ sessions weekly is unsustainable.",
      significance: "Dynamic analysis has huge potential but navigation complexity is blocking adoption."
    },
    {
      id: "topics-restructure",
      icon: Settings,
      title: "Topics Need Restructuring",
      type: "solution",
      quote: "\"Topics need reclassification and restructure to express your real intent - ticketing management vs product direction vs troubleshooting.\"",
      source: "Christian Lanz",
      insight: "Current topic structure from POC doesn't match evolved agent capabilities.",
      significance: "Agent started as troubleshooting-focused but now does more - structure must evolve."
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
      case 'coming': return 'priority-coming';
      default: return 'priority-default';
    }
  };

  return (
    <div className="nvidia-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="NVIDIA" />
      
      <header className="nvidia-ux-header">
        <div className="header-badge">NVIDIA × UX Research</div>
        <h1 className="nvidia-ux-title">Agent Observability Findings</h1>
        <p className="nvidia-ux-subtitle">Navigation & Custom Evaluation</p>
        <div className="nvidia-ux-date">December 2025</div>
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
                  className={`insight-card-nvidia ${insight.type} ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="insight-header-nvidia">
                    <div className={`insight-icon-nvidia ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-nvidia">
                      <span className={`insight-type-badge ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote-nvidia">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source-nvidia">{insight.source}</div>
                  
                  {isExpanded && (
                    <div className="insight-expanded-nvidia">
                      <div className="insight-detail-nvidia">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance-nvidia">
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

      <footer className="nvidia-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">NVIDIA Agentforce Analytics Review - December 2025</span>
        </div>
        <a 
          href="?view=nvidia-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=nvidia-workflow';
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

export default NvidiaUXFindings;

