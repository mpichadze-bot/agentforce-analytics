import React, { useState } from 'react';
import { 
  Building2, Activity, Eye, ArrowRight, AlertTriangle, Star, Lightbulb,
  MessageSquare, ChevronDown, ChevronUp, CheckCircle, XCircle, Lock,
  FileText, Download, BookOpen, Tag, Calendar, MousePointer, Users,
  Settings, TrendingUp
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './PearsonUXFindings.css';

const PearsonUXFindings = () => {
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
      id: "permissions-blocker",
      icon: Lock,
      title: "Permissions Blocking Pilot Team",
      severity: "critical",
      description: "Standard users cannot access analytics - page spins indefinitely. Only works for local admins.",
      quote: "\"The tool is currently only working for local admins... standard users like Gabrielle and Tish cannot see the analytics page, which typically either spins or shows an error.\"",
      source: "Nicole Lozano & Rob Power",
      impact: "UK pilot team completely blocked from using the tool. Loss of trust during critical pilot phase.",
      symptoms: [
        "Analytics page spins without loading for standard users",
        "Promoting to admin temporarily fixes issue",
        "Requires 'Creator' license for Tableau Next, not 'Limited Consumer'",
        "Has been an issue for ~2 weeks"
      ]
    },
    {
      id: "no-data-extraction",
      icon: Download,
      title: "Cannot Extract Data for Analysis",
      severity: "critical",
      description: "No mechanism to export data in reportable format for deeper analytical review.",
      quote: "\"They are really looking for a way to extract this out of here and massage that data... you can't filter these... they want to look at this more from an analytical perspective.\"",
      source: "Nicole Lozano (UK Team Feedback)",
      impact: "Team cannot analyze data to find knowledge gaps or understand agent performance patterns.",
      symptoms: [
        "Can see 25 of 250 sessions but can't export",
        "Cannot filter beyond topic grouping",
        "Scrolling required to review full picture",
        "Download capability confirmed for January"
      ]
    },
    {
      id: "session-jump-issue",
      icon: MousePointer,
      title: "Messaging Session Doesn't Jump to Interaction",
      severity: "high",
      description: "When opening a session from analytics, doesn't jump to the specific point in time - requires tedious scrolling.",
      quote: "\"When you open that messaging session, if somebody has messaged with us multiple times, it doesn't just jump to that. You have to actually like scroll back in the chat.\"",
      source: "Nicole Lozano",
      impact: "Time-consuming and tedious for frequent contacts. Makes research very difficult.",
      symptoms: [
        "Confirmed as 'meow feature gap' by Sara Metheny",
        "Especially painful for repeat customers",
        "Slows down analytics review significantly"
      ]
    },
    {
      id: "no-in-tool-flagging",
      icon: FileText,
      title: "No In-Tool Issue Flagging",
      severity: "high",
      description: "Cannot flag sessions or leave notes within the tool - must manually create Jira bugs.",
      quote: "\"Other vendors have the ability to flag or open an issue directly from a scored session... there's got to be a better way for us to be able to kind of get ahead of these issues.\"",
      source: "Nicole Lozano",
      impact: "Manual, tedious exercise to report issues. Competitive disadvantage vs other vendors.",
      symptoms: [
        "Must exit tool and create Jira bug manually",
        "No quality review notes feature",
        "Cannot flag for follow-up within the UI"
      ]
    },
    {
      id: "api-names-not-labels",
      icon: Tag,
      title: "Topics Show API Names, Not Labels",
      severity: "medium",
      description: "Topic breakdowns display API names which are not descriptive or user-friendly.",
      quote: "\"One of the things that they're finding difficult are like these topic breakdowns... some of them are not named the greatest... right now you're seeing here API names.\"",
      source: "Nicole Lozano",
      impact: "Dashboard is hard to read and understand at a glance.",
      symptoms: [
        "Topics weren't designed for external use",
        "API names are cryptic",
        "Fix confirmed for March (labels instead of API names)"
      ]
    },
    {
      id: "documentation-gap",
      icon: BookOpen,
      title: "No Business-Facing Documentation",
      severity: "high",
      description: "Only configuration guides exist - no walkthrough for business users on how to use analytics for agent improvement.",
      quote: "\"Is there documentation that explains... from a business perspective like not the configuration... that's not what we need we need something that's more forward-facing.\"",
      source: "Nicole Lozano",
      impact: "Teams don't know how to use observability to identify and fix agent gaps.",
      symptoms: [
        "UK team requested training/documentation",
        "Existing docs focus on setup, not usage",
        "Need walkthrough for subject matter experts"
      ]
    },
    {
      id: "deflection-definition",
      icon: Settings,
      title: "Deflection Definition Doesn't Align",
      severity: "high",
      description: "Current deflection metric includes frustrated users who left without creating a case - not truly deflected.",
      quote: "\"The current definition of deflection doesn't align with Pearson's needs because it includes people who disengaged due to frustration without creating a case.\"",
      source: "Nicole Lozano",
      impact: "Reported deflection rate is artificially inflated and not actionable.",
      symptoms: [
        "Frustrated users counted as deflected",
        "Need custom deflection criteria",
        "Want: started + no escalation + score 4-5",
        "Lower scores likely mean customer called instead"
      ]
    },
    {
      id: "quality-score-accuracy",
      icon: AlertTriangle,
      title: "Quality Score 4-5 May Be Inaccurate",
      severity: "medium",
      description: "UK team raised concerns that scores of 4 or 5 don't always reflect actual quality when humans review.",
      quote: "\"The UK team has raised issues about scores of four or five potentially being inaccurate.\"",
      source: "Meeting Notes",
      impact: "Cannot trust quality scores for decision making without validation.",
      symptoms: [
        "Human vs LLM scoring mismatch",
        "Need to calibrate expectations",
        "Requires drilling into sessions to verify"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "in-tool-flagging",
      icon: FileText,
      title: "In-Tool Flagging & Notes",
      priority: "critical",
      quote: "\"Give users the ability to review sessions... flag that... leave a note... then something else alert you that you have problems.\"",
      source: "Nir Tzavchon (proposed)",
      rationale: "Eliminate manual Jira workflow and create chain of command for issue monitoring.",
      benefits: [
        "Flag sessions directly in the UI",
        "Leave quality review notes",
        "Alert system for follow-up",
        "Define roles & responsibilities"
      ]
    },
    {
      id: "data-extraction",
      icon: Download,
      title: "Data Export & Download",
      priority: "critical",
      quote: "\"We're going to add the ability to just download the content from this list and have you just massage that data in a spreadsheet.\"",
      source: "Nir Tzavchon (confirmed for January)",
      rationale: "Teams need to analyze full picture and create custom reports outside the tool.",
      benefits: [
        "Export session lists for analysis",
        "Massage data in Excel/PowerBI",
        "Create custom visualizations",
        "Coming in January 2025"
      ]
    },
    {
      id: "jump-to-interaction",
      icon: MousePointer,
      title: "Jump to Specific Point in Session",
      priority: "must-have",
      quote: "\"When you're jumping from this page to the messaging session object you want to get to the right point in time.\"",
      source: "Nir Tzavchon",
      rationale: "Eliminates tedious scrolling for repeat customers.",
      benefits: [
        "Automatically scroll to interaction timestamp",
        "Faster session review",
        "Better UX for frequent contacts",
        "Confirmed feature gap"
      ]
    },
    {
      id: "topic-labels",
      icon: Tag,
      title: "Descriptive Topic Labels (Not API Names)",
      priority: "must-have",
      quote: "\"We have a work item coming up to basically fix this... this is going to be replaced with the labels.\"",
      source: "Nir Tzavchon (confirmed for March)",
      rationale: "Topics were not designed for external use - need human-readable names.",
      benefits: [
        "Show labels instead of API names",
        "Better dashboard readability",
        "No mental translation required",
        "Coming in March 2025"
      ]
    },
    {
      id: "business-documentation",
      icon: BookOpen,
      title: "Business-Facing Documentation",
      priority: "high",
      quote: "\"You want like a walkthrough that you could hand off... to the builders or to the people governing this agent... on how you could use observability to have a better understanding of those gaps.\"",
      source: "Nir Tzavchon",
      rationale: "Subject matter experts need guidance on using analytics, not just configuring it.",
      benefits: [
        "Walkthrough for non-technical users",
        "How to identify knowledge gaps",
        "How to improve agent with analytics",
        "Training for pilot teams"
      ]
    },
    {
      id: "customize-deflection",
      icon: Settings,
      title: "Customizable Deflection Metric",
      priority: "critical",
      quote: "\"We need the ability to customize the deflection metric with additional criteria beyond the current definition.\"",
      source: "Nicole Lozano (Prototype Feedback)",
      rationale: "Deflection = started + no escalation + score 4-5. Lower scores = frustrated users who likely called.",
      benefits: [
        "Define custom deflection criteria",
        "Exclude frustrated disengagements",
        "More accurate deflection reporting",
        "Align with business definition"
      ]
    },
    {
      id: "separate-chat-voice",
      icon: Activity,
      title: "Separate Chat vs Voice Metrics",
      priority: "high",
      quote: "\"We would want to see chat and voice metrics separately.\"",
      source: "Nicole Lozano (Prototype Feedback)",
      rationale: "Different channels have different performance characteristics.",
      benefits: [
        "Channel-specific quality scores",
        "Voice implementation planned for early next year",
        "Better comparison and optimization"
      ]
    },
    {
      id: "compare-topics-across-agents",
      icon: TrendingUp,
      title: "Compare Topics Across Agents",
      priority: "high",
      quote: "\"Comparing agents is 'apples and oranges'. Comparing similar topics across agents (UK knowledge vs US knowledge) would be a better metric.\"",
      source: "Rob Power (Prototype Feedback)",
      rationale: "If similar topics score differently, the low-scoring one likely has bad knowledge.",
      benefits: [
        "Topic-level comparison across agents",
        "AgentName.TopicName format for clarity",
        "Identify knowledge quality issues",
        "Search filter for topics"
      ]
    },
    {
      id: "topic-to-editor-link",
      icon: ArrowRight,
      title: "Direct Link from Topic to Editor",
      priority: "high",
      quote: "\"Include a direct link from a low-scoring topic in the table to the editor to allow business users to easily address issues.\"",
      source: "Vp Tambe (Prototype Feedback)",
      rationale: "Reduce clicks from discovering issue to fixing it.",
      benefits: [
        "Click low-scoring topic → open editor",
        "Faster issue resolution",
        "Better workflow for business users"
      ]
    },
    {
      id: "session-annotation",
      icon: MessageSquare,
      title: "Session Annotation & Comment Feature",
      priority: "critical",
      quote: "\"Need an annotation or comment feature for QA personnel to track reviews and flag issues within the tool, instead of relying on external spreadsheets.\"",
      source: "Nicole Lozano (Prototype Feedback)",
      rationale: "Proposed: thumbs up/down icon on message bubbles that opens comment window.",
      benefits: [
        "Flag conversations for review",
        "Track QA reviews in-tool",
        "Eliminate external spreadsheets",
        "Thumbs up/down with comments"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "competitive-pressure",
      icon: Activity,
      title: "Competitive Pressure on Features",
      type: "context",
      quote: "\"There's some other vendors... that have the ability in the tool to capture the issues... directly in the tool to kind of flag that or like open an issue.\"",
      source: "Nicole Lozano",
      insight: "Other vendors have in-tool flagging capabilities. Pearson is actively comparing Salesforce to competitors.",
      significance: "Feature parity with competitors is critical for retention."
    },
    {
      id: "pilot-trust-loss",
      icon: Users,
      title: "Pilot Phase Trust is Fragile",
      type: "strategy",
      quote: "\"They're like well it's useless. We can't even get in there. We can't do anything. So that's kind of a big problem right now.\"",
      source: "Nicole Lozano",
      insight: "When pilot users are blocked, they quickly lose confidence in the product. The UK team is 'very vocal' about pain points.",
      significance: "Permissions issues during pilots can kill adoption before it starts."
    },
    {
      id: "human-vs-agent-scoring",
      icon: MessageSquare,
      title: "Human vs Agent Scoring Mismatch",
      type: "insight",
      quote: "\"They want to dig into this to understand why is the agent saying it's high when when a human looks at it, they don't think that.\"",
      source: "Nicole Lozano",
      insight: "Humans and LLMs score agent performance differently. Teams need to understand the criteria and calibrate expectations.",
      significance: "Documentation must explain how LLM-as-Judge works and what it measures."
    },
    {
      id: "table-view-preference",
      icon: FileText,
      title: "Strong Preference for Table View",
      type: "feedback",
      quote: "\"Nicole expressed a strong preference for the table view, finding it useful for a closer look compared to the high-level metric cards.\"",
      source: "Prototype Feedback Session",
      insight: "Table view preferred over metric cards. All columns should be sortable - standard expectation.",
      significance: "High-level metrics good for exec readouts, but deeper investigation requires drilling into insights and sessions."
    },
    {
      id: "prototype-architecture-approval",
      icon: CheckCircle,
      title: "New Prototype Architecture Approved",
      type: "positive",
      quote: "\"The new structure made much more sense, being less cluttered and allowing quick access to needed information. Appearance and UI seemed more compact and better.\"",
      source: "Sara Metheny & Nicole Lozano",
      insight: "Prototype topics view significantly better than current (which only shows top/bottom 4 topics).",
      significance: "New design allows comprehensive view and comparison of metrics across ALL topics."
    },
    {
      id: "stickiness-for-employee-agents",
      icon: Users,
      title: "Stickiness Metric for Employee Agents",
      type: "clarification",
      quote: "\"Stickiness is generally less relevant for service agents than employee agents. For service agents, the goal is to get the user their answer and move them out quickly.\"",
      source: "Nir Tzavchon & Rob Power",
      insight: "Stickiness = how often person repeatedly accesses same agent. Different goals: adoption (employee) vs resolution (service).",
      significance: "Paying per credit changes the calculus - want users to get answers and exit, not 'live in' the agent."
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
      default: return 'priority-should';
    }
  };

  return (
    <div className="pearson-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Pearson" />
      <header className="pearson-ux-header">
        <div className="header-badge">Pearson × UX Research</div>
        <h1 className="pearson-ux-title">Analytics Feedback & Questions</h1>
        <p className="pearson-ux-subtitle">UK Pilot Team Insights & Pain Points</p>
        <div className="pearson-ux-date">December 15, 2025</div>
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
        </section>
      )}

      <footer className="pearson-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Pearson Analytics Feedback - December 15, 2025</span>
        </div>
        <a 
          href="?view=pearson-workflow" 
          className="workflow-link"
          tabIndex={0}
          aria-label="View Pearson Workflow"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=pearson-workflow';
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

export default PearsonUXFindings;

