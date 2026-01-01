import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Lock, Database, Settings, Eye, Activity,
  Calculator, Users, BarChart2, Link2, UserX, Filter
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './EtoroUXFindings.css';

const EtoroUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "locked-fields",
      icon: Lock,
      title: "Locked Calculated Fields",
      severity: "critical",
      description: "Cannot edit existing metrics in Agent for Studio - must create entirely new custom metrics",
      quote: "\"This calculated field is locked. You can't edit this one. You'll need to spin off a new metric on your own.\"",
      source: "Nir Tzavchon",
      impact: "Workarounds require Data Cloud console knowledge; new metrics won't appear in Studio reports",
      symptoms: [
        "Active user rate formula cannot be modified",
        "Must create custom metrics from scratch",
        "Custom metrics don't show in Studio UI",
        "Requires deep Data Cloud knowledge"
      ]
    },
    {
      id: "wrong-formulas",
      icon: Calculator,
      title: "Incorrect Default Formulas",
      severity: "critical",
      description: "Built-in 'Active User Rate' divides by wrong population, showing ~6% instead of actual 84%",
      quote: "\"The monthly active users number in the formula seemed incorrect, likely dividing by all registered agents in Salesforce, not just the operations agents we were aiming for.\"",
      source: "Avi Kuzi",
      impact: "Completely misleading metrics that understate adoption success",
      symptoms: [
        "Daily Active Users / Monthly Active Users = wrong formula",
        "Denominator includes ALL Salesforce users, not just assigned",
        "Shows 6% when actual rate is 84%",
        "Wrong terminology: 'Active User Rate' should be 'Stickiness Rate'"
      ]
    },
    {
      id: "dashboard-access",
      icon: Eye,
      title: "Dashboard Display Issues",
      severity: "high",
      description: "Agent for Studio doesn't display data without specific workaround steps",
      quote: "\"If they're in the service console and opening studio in a second tab, for some reason it does show data.\"",
      source: "Nir Tzavchon",
      impact: "Users think dashboard is broken; requires support intervention",
      symptoms: [
        "Dashboard shows blank/empty",
        "Refresh doesn't fix the issue",
        "Must switch to 'Service Lex Service' app first",
        "Then open Studio in second tab"
      ]
    },
    {
      id: "no-case-linkage",
      icon: Link2,
      title: "No Case Record Linkage",
      severity: "high",
      description: "Cannot link Copilot sessions to case records to measure utilization potential",
      quote: "\"I have no idea how I can tell you how many cases were done with Copilot and how many not. We do not link the agent to cases.\"",
      source: "Jakub Kekus",
      impact: "Cannot measure % of work done with Copilot vs total Salesforce work",
      symptoms: [
        "Cases not part of the semantic model",
        "Cannot calculate utilization potential",
        "Missing 'cases with Copilot / total cases' metric",
        "Cannot tie Copilot usage to business outcomes"
      ]
    },
    {
      id: "limited-studio",
      icon: Settings,
      title: "Limited Studio Customization",
      severity: "medium",
      description: "Cannot edit Studio reports directly - must use Data Cloud console for any customization",
      quote: "\"This is not the most desired experience but we'll work our way from there.\"",
      source: "Nir Tzavchon",
      impact: "Steep learning curve; requires Data Cloud expertise for basic customizations",
      symptoms: [
        "Studio reports are read-only",
        "Must switch to Data Cloud console",
        "Requires knowledge of semantic models",
        "Custom work won't sync back to Studio"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "correct-metrics",
      icon: Calculator,
      title: "Correct Active User Rate Formula",
      priority: "critical",
      quote: "\"The basic formula for active user rate is active users for any time frame divided by total users that can reach Salesforce and use Copilot.\"",
      source: "Avi Kuzi",
      rationale: "Current formula is fundamentally wrong and severely understates adoption success",
      benefits: [
        "Denominator = users assigned via permission set (167)",
        "Numerator = users who actually used Copilot (141)",
        "Result = true adoption rate (84% vs current 6%)",
        "Accurate executive reporting"
      ]
    },
    {
      id: "non-active-list",
      icon: UserX,
      title: "Non-Active Users List",
      priority: "must-have",
      quote: "\"This could be your mailing list. Hey Anita, start using it!\"",
      source: "Nir Tzavchon",
      rationale: "Need to identify users who have access but aren't using Copilot for targeted adoption campaigns",
      benefits: [
        "Filter to show users with zero interactions",
        "Include full names for outreach",
        "Export for email campaigns",
        "Track adoption progress over time"
      ]
    },
    {
      id: "case-integration",
      icon: Link2,
      title: "Case Record Integration",
      priority: "must-have",
      quote: "\"If Mateusz is using Salesforce for 1,000 cases a day and only 200 cases use Copilot, then the potential would be 20%.\"",
      source: "Avi Kuzi",
      rationale: "Need to measure what percentage of total Salesforce work uses Copilot",
      benefits: [
        "Link sessions to case records",
        "Calculate utilization potential",
        "Identify expansion opportunities",
        "Measure business impact"
      ]
    },
    {
      id: "team-grouping",
      icon: Users,
      title: "Team-Based Grouping & Filtering",
      priority: "high",
      quote: "\"Can I group data by teams?\"",
      source: "Jakub Kekus",
      rationale: "Need to analyze adoption by team/department for targeted interventions",
      benefits: [
        "Group by FCMU, Cash out, etc.",
        "Compare team adoption rates",
        "Identify high/low performing teams",
        "Enable team-level coaching"
      ]
    },
    {
      id: "usage-frequency",
      icon: BarChart2,
      title: "Frequency & Feature Usage Analysis",
      priority: "high",
      quote: "\"How many times they use it and what features everyone used and what is the frequency of using it?\"",
      source: "Avi Kuzi",
      rationale: "Need to understand depth of usage, not just whether users touched it once",
      benefits: [
        "Frequency distribution (daily/weekly/monthly)",
        "Feature breakdown by user",
        "Power user identification",
        "Feature adoption tracking"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "formula-matters",
      icon: Calculator,
      title: "Formula Choice Drastically Changes Story",
      type: "data",
      quote: "\"We have 141 unique users... going to divide it by 167 and we get above 80% adoption rate.\"",
      source: "Avi Kuzi",
      insight: "Same underlying data showed 6% with wrong formula vs 84% with correct formula - a 14x difference in perceived success.",
      significance: "Default metrics can severely misrepresent reality. Always validate calculation methodology."
    },
    {
      id: "adoption-campaigns",
      icon: UserX,
      title: "Non-Users Are Actionable Targets",
      type: "strategy",
      quote: "\"This could be your mailing list.\"",
      source: "Nir Tzavchon",
      insight: "Identifying the 89 users with access who haven't used Copilot creates an immediate adoption action list.",
      significance: "Analytics should drive action. Lists of non-users enable targeted outreach campaigns."
    },
    {
      id: "workarounds-exist",
      icon: Settings,
      title: "Product Limitations Require Workarounds",
      type: "process",
      quote: "\"This is not the most desired experience but we'll work our way from there.\"",
      source: "Nir Tzavchon",
      insight: "Studio limitations are acknowledged. Data Cloud console provides power but requires expertise.",
      significance: "Product team is aware of gaps. Customers with Data Cloud skills can create custom solutions."
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
    <div className="etoro-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="eToro" />
      
      <header className="etoro-ux-header">
        <div className="header-badge">eToro × UX Research</div>
        <h1 className="etoro-ux-title">Copilot Adoption Findings</h1>
        <p className="etoro-ux-subtitle">Dashboard Customization & Metrics Analysis</p>
        <div className="etoro-ux-date">November 19, 2025</div>
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
                  className={`insight-card-etoro ${insight.type} ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="insight-header-etoro">
                    <div className={`insight-icon-etoro ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-etoro">
                      <span className={`insight-type-badge ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote-etoro">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source-etoro">{insight.source}</div>
                  
                  {isExpanded && (
                    <div className="insight-expanded-etoro">
                      <div className="insight-detail-etoro">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance-etoro">
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

      <footer className="etoro-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Copilot Dashboard Walkthrough - November 19, 2025</span>
        </div>
        <a 
          href="?view=etoro-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=etoro-workflow';
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

export default EtoroUXFindings;

