import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Users, Eye, Activity, DollarSign,
  Server, Database, RefreshCw, BarChart2, Globe, Lock, TrendingUp,
  Layers, Shield, Cpu
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './IBMUXFindings.css';

const IBMUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "cross-service-cost",
      icon: DollarSign,
      title: "No Cross-Service Cost Tracking",
      severity: "critical",
      description: "Cannot track total cost per agent across Agent Force + Data Cloud + Apex and other services",
      quote: "\"Looking for per agent total cost total consumption... total cost of ownership over multiple features, multiple services.\"",
      source: "Gilda Spencer",
      impact: "Cannot accurately calculate ROI or predict costs at agent level",
      symptoms: [
        "Cost data is aggregated at org level, not agent level",
        "Agent Force and Data Cloud costs not connected",
        "Apex execution costs separate from agent metrics",
        "No unified view of agent total cost of ownership"
      ]
    },
    {
      id: "traceability",
      icon: Layers,
      title: "Cross-Feature Traceability Gap",
      severity: "critical",
      description: "Cannot connect Data 360 requests with session tracing details for end-to-end visibility",
      quote: "\"None of those data 360 requests have session tracing details attached to it. How would you connect the two?\"",
      source: "Gilda Spencer",
      impact: "Missing linkage between data operations and agent sessions",
      symptoms: [
        "Session traces don't include Data Cloud operations",
        "Cannot trace data retrievals back to specific sessions",
        "Fragmented view of agent execution flow",
        "Considering building agent to track agents"
      ]
    },
    {
      id: "govcloud-limits",
      icon: Lock,
      title: "GovCloud Feature Limitations",
      severity: "high",
      description: "Only specific LLMs and agent types approved for federal use, limiting available features",
      quote: "\"We're only limited to certain LLMs... we've found things where it looks pretty cool, works commercial fine, we bring it over, we just can't use it.\"",
      source: "Gilda Spencer",
      impact: "Many observability features unavailable in GovCloud",
      symptoms: [
        "Only Azure GPT-4 and GPT-4 mini approved",
        "Only Service Agent and Employee Agent allowed",
        "Beta connectors may not work reliably",
        "Must wait for features to be FedRAMPed"
      ]
    },
    {
      id: "spend-prediction",
      icon: TrendingUp,
      title: "Inadequate Spend Forecasting",
      severity: "high",
      description: "Digital wallet initiative in early stages - cannot reliably predict agent credit consumption",
      quote: "\"If you've got an agent spinning out and spending 30 actions to no resolution, you want to tighten that up as soon as you can.\"",
      source: "Erik Fong",
      impact: "Cannot proactively manage or control agent costs",
      symptoms: [
        "Digital wallet very early stage",
        "No per-agent credit forecasting",
        "Cannot predict spike patterns",
        "Runaway agents consume unexpected credits"
      ]
    },
    {
      id: "multiplatform",
      icon: Cpu,
      title: "Multi-Platform Observability Missing",
      severity: "medium",
      description: "Building agents across Watson, mainframe, and Salesforce but no unified observability",
      quote: "\"My interest is in building multiplatform agents... multiplatform observability is really interesting to us.\"",
      source: "Ashley Cohen",
      impact: "Cannot monitor agent performance across platforms",
      symptoms: [
        "Mainframe integration not visible in traces",
        "Watson interactions not tracked",
        "Multiple API calls across platforms",
        "Fragmented monitoring tools"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "per-agent-cost",
      icon: DollarSign,
      title: "Per-Agent Cost Tracking",
      priority: "critical",
      quote: "\"What our client is looking for is per agent total cost, total consumption.\"",
      source: "Gilda Spencer",
      rationale: "Need granular cost attribution for ROI calculations",
      benefits: [
        "Track costs at individual agent level",
        "Include Data Cloud consumption",
        "Include API and Apex costs",
        "Calculate true agent ROI"
      ]
    },
    {
      id: "traffic-forecast",
      icon: TrendingUp,
      title: "Traffic & Credit Forecasting",
      priority: "critical",
      quote: "\"Predict are you going to need more credits or not.\"",
      source: "Michael (IBM)",
      rationale: "Proactively manage consumption-based costs",
      benefits: [
        "Predict agent traffic patterns",
        "Forecast credit usage",
        "Identify potential spikes",
        "Budget planning support"
      ]
    },
    {
      id: "custom-evals",
      icon: Star,
      title: "Custom Evaluations",
      priority: "coming",
      quote: "\"Ability to create custom evaluations in the next release, allowing customers to define their own taxonomy of metrics.\"",
      source: "Nir Tzavchon",
      rationale: "Define metrics specific to IBM's agent use cases",
      benefits: [
        "Custom metric taxonomy",
        "Use any Prompt Builder model",
        "Salesforce hosted or BYOM",
        "Tailored quality scoring"
      ]
    },
    {
      id: "sdm-extension",
      icon: Database,
      title: "Semantic Model Customization",
      priority: "available",
      quote: "\"The semantic model is available for extension, customization, and custom reporting for anything not covered in the dashboards.\"",
      source: "Nir Tzavchon",
      rationale: "Build custom reports beyond out-of-box dashboards",
      benefits: [
        "Extend existing foundation model",
        "Connect additional objects",
        "Join spend data with session data",
        "Create custom calculated fields"
      ]
    },
    {
      id: "public-guardrails",
      icon: Shield,
      title: "Public Agent Security",
      priority: "available",
      quote: "\"Toxicity scoring, prompt injection scoring to prevent bulk attacks, manage credit consumption, and protect security.\"",
      source: "Nir Tzavchon",
      rationale: "Protect public-facing federal agents from attacks",
      benefits: [
        "Trust layer guardrails",
        "Toxicity scoring",
        "Prompt injection detection",
        "Bulk attack prevention"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "architecture-support",
      icon: RefreshCw,
      title: "Session Tracing Supports Both Architectures",
      type: "solution",
      quote: "\"Session trace will support both. It's going to be backward compatible for customers that haven't migrated yet to the new planner.\"",
      source: "Nir Tzavchon",
      insight: "No need to wait for new daisy planner - current agents already supported.",
      significance: "IBM can start using observability immediately with existing agents."
    },
    {
      id: "start-with-traffic",
      icon: BarChart2,
      title: "Start with Traffic, Not Spend",
      type: "learning",
      quote: "\"Forecasting should start with predicting agent traffic and assessing agent handling performance rather than focusing solely on spend data.\"",
      source: "Nir Tzavchon",
      insight: "Traffic patterns are more predictable than raw spend data.",
      significance: "Better approach: forecast traffic → assess handling → derive spend estimates."
    },
    {
      id: "tableau-bundled",
      icon: Eye,
      title: "Tableau Next Bundled - No Extra License",
      type: "solved",
      quote: "\"The Tableau Next app is bundled with the Einstein audit agent analytics. You don't need a separate license.\"",
      source: "Ashley Cohen",
      insight: "Out-of-box dashboards included but not customer-modifiable.",
      significance: "Use SDM for custom reports; use Tableau Next for standard dashboards."
    },
    {
      id: "govcloud-timeline",
      icon: Globe,
      title: "GovCloud Onboarding Timeline",
      type: "timeline",
      quote: "\"Analytics onboarding for GovCloud is planned for December, with optimization following a month later.\"",
      source: "Nir Tzavchon",
      insight: "Clear timeline for federal availability.",
      significance: "Analytics: December | Optimization: January - plan rollout accordingly."
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
      case 'coming': return 'priority-coming';
      case 'available': return 'priority-available';
      default: return 'priority-default';
    }
  };

  return (
    <div className="ibm-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="IBM" />
      
      <header className="ibm-ux-header">
        <div className="header-badge">IBM × UX Research</div>
        <h1 className="ibm-ux-title">Federal Tiger Team Findings</h1>
        <p className="ibm-ux-subtitle">Multi-Platform Agent Observability</p>
        <div className="ibm-ux-date">December 2025</div>
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
                  className={`insight-card-ibm ${insight.type} ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="insight-header-ibm">
                    <div className={`insight-icon-ibm ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-ibm">
                      <span className={`insight-type-badge ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="insight-quote-ibm">
                    <MessageSquare size={14} />
                    <span>{insight.quote}</span>
                  </div>
                  <div className="insight-source-ibm">{insight.source}</div>
                  
                  {isExpanded && (
                    <div className="insight-expanded-ibm">
                      <div className="insight-detail-ibm">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance-ibm">
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

      <footer className="ibm-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">IBM Tab Next & Agent Analytics Discussion - December 2025</span>
        </div>
        <a 
          href="?view=ibm-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=ibm-workflow';
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

export default IBMUXFindings;

