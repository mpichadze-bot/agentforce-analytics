import React, { useState } from 'react';
import {
  AlertTriangle, Star, Lightbulb, MessageSquare, ChevronDown, ChevronUp,
  ArrowRight, CheckCircle, XCircle, Lock, Database, BookOpen, Settings,
  GitBranch, Eye, Activity, FileText, Building2, Shield
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './FedExUXFindings.css';

const FedExUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const painPoints = [
    {
      id: "sandbox-complexity",
      icon: GitBranch,
      title: "Sandbox Configuration Complexity",
      severity: "high",
      description: "Understanding how sandbox maps in Data Cloud One environment is complex and requires validation",
      quote: "\"We need to understand connectivity, permission sets... how is that all going to work within our way of doing things.\"",
      source: "Carlos Droz",
      impact: "Delays testing and rollout - must validate each scenario",
      symptoms: [
        "Separate Data Cloud org (not hanging from Sales/Service)",
        "Multiple companion orgs with sandboxes",
        "Need to validate: sandbox mapped in DC1 environment",
        "Data doesn't copy from prod - registered from sandbox conversations only"
      ]
    },
    {
      id: "permission-confusion",
      icon: Lock,
      title: "Permission Management Confusion",
      severity: "medium",
      description: "Unclear where to manage permissions - home org vs companion org responsibilities",
      quote: "\"Do we have to come to the home org for setting up? Can modifications be done in companion org?\"",
      source: "Preethi Gowda",
      impact: "Teams unsure where to configure what - risk of misconfiguration",
      symptoms: [
        "Setup can be done from either org",
        "Permissions MUST be managed in home org",
        "Data governance rules in home org only",
        "Confusing for distributed teams"
      ]
    },
    {
      id: "lack-documentation",
      icon: BookOpen,
      title: "Lack of Sandbox Setup Documentation",
      severity: "medium",
      description: "No clear documentation for complex multi-org sandbox configurations",
      quote: "\"We're pretty difficult when it comes to putting things in production. We're going to have to be testing the mess out of this thing for a few weeks.\"",
      source: "Carlos Droz",
      impact: "Extended testing cycles, dependency on support for validation",
      symptoms: [
        "FedEx is 16-17 year customer with giant orgs",
        "Requires extensive testing before production",
        "Complex architecture not well-documented",
        "Need product team validation for scenarios"
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: "sandbox-parity",
      icon: GitBranch,
      title: "Full Sandbox-Production Parity",
      priority: "critical",
      quote: "\"Is this functionality going to be the same in a sandbox?... Please call out if there are any differences.\"",
      source: "Gaby Dorough",
      rationale: "FedEx tests extensively in sandbox before production - any differences are blockers",
      benefits: [
        "Same reports in sandbox as production",
        "Same pipelines running on sandbox data",
        "Confirmed for November 20 GA release",
        "Data based on sandbox conversations (not copied from prod)"
      ]
    },
    {
      id: "companion-analytics",
      icon: Eye,
      title: "Analytics Access in Companion Orgs",
      priority: "must-have",
      quote: "\"We would prefer if they had the visibility to the reports and analytics in each companion org... that's where they'll probably be managing their own permission sets.\"",
      source: "Austin Sandlin",
      rationale: "Sales/Service users shouldn't need to log into Data Cloud home org for their own agent analytics",
      benefits: [
        "Each team accesses analytics in their own org",
        "UI filters to show only that org's agents",
        "Data still queryable across orgs if needed",
        "Better user experience for distributed teams"
      ]
    },
    {
      id: "clear-documentation",
      icon: FileText,
      title: "Clear Multi-Org Setup Documentation",
      priority: "high",
      quote: "\"I'd love to validate this scenario with the team... I'll check and come back with a definitive answer in a few days.\"",
      source: "Nir Tzavchon",
      rationale: "Complex configurations need documented patterns and validated scenarios",
      benefits: [
        "Reduces dependency on product team validation",
        "Faster implementation",
        "Clear guidelines for home vs companion responsibilities",
        "Architecture decision framework"
      ]
    }
  ];

  const keyInsights = [
    {
      id: "enterprise-complexity",
      icon: Building2,
      title: "Enterprise Complexity at Scale",
      type: "context",
      quote: "\"FedEx is a 16-17 year old customer... gigantic Sales Cloud org with gigantic Service Cloud org.\"",
      source: "John Salzsiedler",
      insight: "Large enterprises have custom architectures that don't match standard patterns. FedEx has separate Data Cloud org, not hanging from Sales/Service.",
      significance: "Product must support non-standard configurations for enterprise customers."
    },
    {
      id: "technical-gatekeepers",
      icon: Shield,
      title: "Infrastructure Teams are Gatekeepers",
      type: "strategy",
      quote: "\"We're not necessarily the experts on how things are done... we're trying to figure out how that data comes into data cloud.\"",
      source: "Carlos Droz",
      insight: "Infrastructure teams enable the ecosystem but don't build agents. They need different documentation than agent builders.",
      significance: "Create separate docs: 'For Infrastructure Teams' vs 'For Agent Builders'."
    },
    {
      id: "testing-first",
      icon: CheckCircle,
      title: "Testing-First Culture",
      type: "process",
      quote: "\"We're going to have to be testing the mess out of this thing for a few weeks... we're pretty difficult when it comes to putting things in production.\"",
      source: "Carlos Droz",
      insight: "Enterprise customers have rigorous testing requirements. Sandbox parity is non-negotiable.",
      significance: "Sandbox functionality must be 100% identical to production - no shortcuts."
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
    <div className="fedex-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="FedEx" />
      
      <header className="fedex-ux-header">
        <div className="header-badge">FedEx × UX Research</div>
        <h1 className="fedex-ux-title">Sandbox Support Findings</h1>
        <p className="fedex-ux-subtitle">Infrastructure Team Insights & Requirements</p>
        <div className="fedex-ux-date">November 10, 2025</div>
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

      {/* Tabs Content */}
      {activeTab === 'pain-points' && (
        <section className="tab-panel">
          <div className="pain-points-grid">
            {painPoints.map((pain) => {
              const IconComponent = pain.icon;
              const isExpanded = expandedCard === pain.id;
              return (
                <div
                  key={pain.id}
                  className={`pain-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(pain.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardToggle(pain.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
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

      {activeTab === 'desired' && (
        <section className="tab-panel">
          <div className="desired-features-grid">
            {desiredFeatures.map((feature) => {
              const IconComponent = feature.icon;
              const isExpanded = expandedCard === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`feature-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(feature.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardToggle(feature.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
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

      {activeTab === 'insights' && (
        <section className="tab-panel">
          <div className="insights-grid">
            {keyInsights.map((insight) => {
              const IconComponent = insight.icon;
              const isExpanded = expandedCard === insight.id;
              return (
                <div
                  key={insight.id}
                  className={`insight-card ${insight.type} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(insight.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardToggle(insight.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
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

      <footer className="fedex-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">FedEx Sandbox Support - November 10, 2025</span>
        </div>
        <a 
          href="?view=fedex-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=fedex-workflow';
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

export default FedExUXFindings;

