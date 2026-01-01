import React, { useState } from 'react';
import {
  Users, MessageSquare, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp,
  Slack, Database, FileText, ThumbsUp, ThumbsDown, BarChart2,
  RefreshCw, Zap, HelpCircle, Building
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './AstoundWorkflow.css';

const AstoundWorkflow = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const agentArchitecture = {
    name: 'HR Service Agent',
    type: 'Service Agent (needs migration to Employee Agent)',
    channel: 'Slack',
    audience: 'Internal Employees',
    purpose: 'HR Q&A and company policy navigation',
    knowledgeSource: 'Confluence → Amazon S3 → Data Cloud'
  };

  const currentMetricsIssues = [
    {
      id: 'escalated',
      metric: 'Escalated Sessions',
      issue: 'No escalation path to human agents exists',
      reason: 'Metric designed for support scenarios with human handoff',
      icon: Users
    },
    {
      id: 'deflected',
      metric: 'Deflected Sessions',
      issue: 'Derived from web chat UI close button - not in Slack',
      reason: 'Users cannot proactively close a Slack chat',
      icon: MessageSquare
    },
    {
      id: 'abandoned',
      metric: 'Abandoned Sessions',
      issue: 'Shows high rate due to Slack UI differences',
      reason: 'No way for users to explicitly end sessions in Slack',
      icon: AlertCircle
    }
  ];

  const migrationPath = [
    {
      step: 1,
      title: 'Current State',
      description: 'Service Agent with irrelevant web chat metrics',
      status: 'problem'
    },
    {
      step: 2,
      title: 'Migrate to Employee Agent',
      description: 'Recreate agent metadata, reuse Data Cloud retrieval setup',
      status: 'action'
    },
    {
      step: 3,
      title: 'Relevant Dashboards',
      description: 'Out-of-box employee agent analytics with unique users',
      status: 'solution'
    }
  ];

  const kpis = [
    {
      name: 'Resolution Rate',
      target: '80%',
      status: 'blocked',
      issue: 'Thumbs up/down feedback not working in Slack',
      icon: ThumbsUp
    },
    {
      name: 'Total Sessions',
      target: 'Track all',
      status: 'partial',
      issue: 'Discrepancy between analytics and event logs',
      icon: BarChart2
    },
    {
      name: 'Unique Users',
      target: 'Track all',
      status: 'blocked',
      issue: 'Not available for Service Agent type',
      icon: Users
    }
  ];

  const solutions = [
    {
      id: 'channel-filter',
      title: 'Channel Type Field',
      description: 'Use "channel type" field to filter API vs Slack sessions',
      status: 'solved',
      quote: 'Upon grouping by this field, they were able to see API and Slack entries.'
    },
    {
      id: 'employee-agent',
      title: 'Migrate to Employee Agent',
      description: 'Get relevant out-of-box dashboards and unique user tracking',
      status: 'recommended',
      quote: 'Strongly encouraged migrating to an employee agent - a more classic approach.'
    },
    {
      id: 'custom-sdm',
      title: 'Custom SDM Reports',
      description: 'Build custom reports inheriting from existing semantic data model',
      status: 'option',
      quote: 'Create new metrics by inheriting from the existing SDM if needed.'
    }
  ];

  return (
    <div className="astound-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Astound" />
      
      <header className="astound-header">
        <div className="header-badge">Astound × Agentforce Analytics</div>
        <h1 className="astound-title">HR Slack Agent Analytics</h1>
        <p className="astound-subtitle">Service Agent → Employee Agent Migration</p>
        <div className="astound-date">November 6, 2025</div>
      </header>

      {/* Navigation */}
      <nav className="astound-nav">
        <button
          className={`astound-tab ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          <Slack size={18} />
          <span>Agent Overview</span>
        </button>
        <button
          className={`astound-tab ${activeSection === 'issues' ? 'active' : ''}`}
          onClick={() => setActiveSection('issues')}
        >
          <AlertCircle size={18} />
          <span>Metrics Issues</span>
        </button>
        <button
          className={`astound-tab ${activeSection === 'solutions' ? 'active' : ''}`}
          onClick={() => setActiveSection('solutions')}
        >
          <CheckCircle size={18} />
          <span>Solutions</span>
        </button>
      </nav>

      {/* Agent Overview Section */}
      {activeSection === 'overview' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Slack size={24} /> Agent Architecture</h2>
            <p>HR service agent on Slack for internal employees</p>
          </div>

          <div className="architecture-card">
            <div className="arch-header">
              <div className="arch-icon">
                <Building size={32} />
              </div>
              <div className="arch-info">
                <h3>{agentArchitecture.name}</h3>
                <span className="type-badge warning">{agentArchitecture.type}</span>
              </div>
            </div>
            
            <div className="arch-details">
              <div className="arch-row">
                <span className="arch-label">Channel:</span>
                <span className="arch-value"><Slack size={16} /> {agentArchitecture.channel}</span>
              </div>
              <div className="arch-row">
                <span className="arch-label">Audience:</span>
                <span className="arch-value">{agentArchitecture.audience}</span>
              </div>
              <div className="arch-row">
                <span className="arch-label">Purpose:</span>
                <span className="arch-value">{agentArchitecture.purpose}</span>
              </div>
              <div className="arch-row">
                <span className="arch-label">Knowledge Flow:</span>
                <span className="arch-value flow">{agentArchitecture.knowledgeSource}</span>
              </div>
            </div>
          </div>

          <div className="kpi-section">
            <h3><BarChart2 size={20} /> Target KPIs</h3>
            <div className="kpi-grid">
              {kpis.map((kpi) => {
                const IconComponent = kpi.icon;
                return (
                  <div key={kpi.name} className={`kpi-card ${kpi.status}`}>
                    <div className="kpi-header">
                      <IconComponent size={24} />
                      <span className={`kpi-status ${kpi.status}`}>{kpi.status}</span>
                    </div>
                    <h4>{kpi.name}</h4>
                    <div className="kpi-target">Target: {kpi.target}</div>
                    <p className="kpi-issue">{kpi.issue}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="context-note-astound">
            <MessageSquare size={18} />
            <div>
              <strong>Key Challenge:</strong> "We are currently unable to reliably calculate the resolution rate 
              because the thumbs up/thumbs down feedback mechanism is not working."
              <span className="quote-source">— Oksana Klymenko</span>
            </div>
          </div>
        </section>
      )}

      {/* Metrics Issues Section */}
      {activeSection === 'issues' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><AlertCircle size={24} /> Why Current Metrics Don't Work</h2>
            <p>Service agent metrics designed for web chat, not Slack</p>
          </div>

          <div className="issues-list">
            {currentMetricsIssues.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="issue-card">
                  <div className="issue-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="issue-content">
                    <h4>{item.metric}</h4>
                    <p className="issue-problem">{item.issue}</p>
                    <p className="issue-reason">{item.reason}</p>
                  </div>
                  <div className="issue-status">
                    <AlertCircle size={16} />
                    <span>Unusable</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="core-problem">
            <Zap size={20} />
            <div>
              <h4>Root Cause</h4>
              <p>
                "These metrics are derivatives of actions from UI components, mainly designed for 
                standardized components like web chat. The current service agent statistics are 
                likely unusable for this specific use case."
              </p>
            </div>
          </div>

          <div className="migration-section">
            <h3><RefreshCw size={20} /> Recommended Migration Path</h3>
            <div className="migration-steps">
              {migrationPath.map((step) => (
                <div key={step.step} className={`migration-step ${step.status}`}>
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {step.step < migrationPath.length && (
                    <ArrowRight size={20} className="step-arrow" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {activeSection === 'solutions' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><CheckCircle size={24} /> Solutions Identified</h2>
            <p>Workarounds and recommendations from the discussion</p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => {
              const isExpanded = expandedItem === solution.id;
              return (
                <div
                  key={solution.id}
                  className={`solution-card ${solution.status} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(solution.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(solution.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="solution-header">
                    <h4>{solution.title}</h4>
                    <span className={`solution-status ${solution.status}`}>{solution.status}</span>
                  </div>
                  <p>{solution.description}</p>
                  {isExpanded && (
                    <div className="solution-quote">
                      <MessageSquare size={14} />
                      <span>"{solution.quote}"</span>
                    </div>
                  )}
                  <div className="expand-hint">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="next-steps">
            <h3><HelpCircle size={20} /> Next Steps</h3>
            <ul>
              <li><CheckCircle size={14} /> Investigate where Slack thumbs up/down feedback data is stored</li>
              <li><CheckCircle size={14} /> Explore semantic data model documentation for custom metrics</li>
              <li><CheckCircle size={14} /> Use channel type filter to separate API from Slack sessions</li>
              <li><CheckCircle size={14} /> Evaluate migration to Employee Agent for relevant dashboards</li>
            </ul>
          </div>
        </section>
      )}

      <footer className="astound-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Astound Analytics Discussion - November 6, 2025</span>
        </div>
        <a 
          href="?view=astound-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=astound-ux';
          }}
        >
          <Eye size={16} />
          <span>View UX Findings</span>
          <ArrowRight size={16} />
        </a>
      </footer>
    </div>
  );
};

export default AstoundWorkflow;

