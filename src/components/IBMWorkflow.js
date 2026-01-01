import React, { useState } from 'react';
import {
  Users, MessageSquare, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp,
  Server, Database, FileText, BarChart2, DollarSign, Shield,
  RefreshCw, Zap, HelpCircle, Building, Globe, Lock, TrendingUp,
  Layers, Cpu
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './IBMWorkflow.css';

const IBMWorkflow = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const teamOverview = {
    name: 'IBM Federal Salesforce Agent Force Tiger Team',
    type: 'Cross-functional team - Commercial & Federal',
    scope: 'GSA, NIH NORC, and commercial deployments',
    agents: '~12 agents in various production stages',
    focus: 'Multi-platform agents, consumption tracking, ROI'
  };

  const deployments = [
    {
      id: 'gsa',
      name: 'GSA Deployment',
      owner: 'Erik Fong',
      status: 'Racing to first federal launch',
      type: 'Federal',
      icon: Building
    },
    {
      id: 'nih-norc',
      name: 'NIH NORC Deployment',
      owner: 'Gilda Spencer',
      status: 'Racing to first federal launch',
      type: 'GovCloud',
      icon: Lock
    },
    {
      id: 'commercial',
      name: 'Commercial Agents',
      owner: 'Tiger Team',
      status: '~12 agents in production stages',
      type: 'Commercial',
      icon: Globe
    }
  ];

  const observabilityNeeds = [
    {
      id: 'consumption',
      title: 'Cross-Service Consumption Tracking',
      description: 'Track total cost per agent across Agent Force + Data Cloud + Apex',
      status: 'not-available',
      quote: 'Looking for total cost of ownership over multiple features, multiple services.',
      icon: DollarSign
    },
    {
      id: 'forecasting',
      title: 'Traffic & Spend Forecasting',
      description: 'Predict agent traffic and forecast credit consumption',
      status: 'in-progress',
      quote: 'Predict are you going to need more credits or not.',
      icon: TrendingUp
    },
    {
      id: 'traceability',
      title: 'Cross-Feature Traceability',
      description: 'Connect Data 360 requests with session tracing details',
      status: 'not-available',
      quote: 'None of those data 360 requests have session tracing details attached to it.',
      icon: Layers
    },
    {
      id: 'multiagent',
      title: 'Multi-Platform Observability',
      description: 'Track agents across mainframe, Watson, and Salesforce',
      status: 'desired',
      quote: 'Multiplatform observability is really interesting to us.',
      icon: Cpu
    }
  ];

  const govCloudConstraints = [
    {
      constraint: 'LLM Limitations',
      detail: 'Only Azure GPT-4 and GPT-4 mini approved',
      impact: 'Many features unavailable until fed-ramped'
    },
    {
      constraint: 'Agent Types',
      detail: 'Only Service Agent, Employee Agent available',
      impact: 'Other out-of-box agents not allowed'
    },
    {
      constraint: 'Analytics Timeline',
      detail: 'Analytics: December | Optimization: January',
      impact: 'Must wait for GovCloud onboarding'
    }
  ];

  const digitalWallet = {
    status: 'Very Early Stages',
    useCase: 'Track remaining credits, predict future needs',
    challenge: 'Need per-agent cost breakdown, not just aggregate',
    quote: 'Using digital wallet to track remaining credits and predict future credit needs.'
  };

  const solutions = [
    {
      id: 'session-trace',
      title: 'Session Tracing Available',
      description: 'Supports both old and new Agent Force architecture (daisy planner)',
      status: 'available',
      quote: 'Session tracing will support both architectures with backward compatibility.'
    },
    {
      id: 'guardrails',
      title: 'Public Agent Guardrails',
      description: 'Trust layer protections for public-facing agents',
      status: 'available',
      quote: 'Toxicity scoring, prompt injection scoring to prevent bulk attacks.'
    },
    {
      id: 'tableau-next',
      title: 'Tableau Next Analytics',
      description: 'Out-of-box dashboards bundled with Einstein audit agent analytics',
      status: 'available',
      quote: 'The semantic model is available for extension, customization, and custom reporting.'
    },
    {
      id: 'custom-evals',
      title: 'Custom Evaluations',
      description: 'Create custom taxonomy of metrics using Prompt Builder',
      status: 'coming',
      quote: 'Ability to create custom evaluations in the next release.'
    }
  ];

  return (
    <div className="ibm-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="IBM" />
      
      <header className="ibm-header">
        <div className="header-badge">IBM × Agentforce Analytics</div>
        <h1 className="ibm-title">Federal Agent Force Tiger Team</h1>
        <p className="ibm-subtitle">Commercial & Federal Multi-Platform Agents</p>
        <div className="ibm-date">December 2025</div>
      </header>

      {/* Navigation */}
      <nav className="ibm-nav">
        <button
          className={`ibm-tab ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          <Building size={18} />
          <span>Team Overview</span>
        </button>
        <button
          className={`ibm-tab ${activeSection === 'needs' ? 'active' : ''}`}
          onClick={() => setActiveSection('needs')}
        >
          <BarChart2 size={18} />
          <span>Observability Needs</span>
        </button>
        <button
          className={`ibm-tab ${activeSection === 'solutions' ? 'active' : ''}`}
          onClick={() => setActiveSection('solutions')}
        >
          <CheckCircle size={18} />
          <span>Solutions</span>
        </button>
      </nav>

      {/* Team Overview Section */}
      {activeSection === 'overview' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Building size={24} /> IBM Tiger Team</h2>
            <p>Cross-functional federal Salesforce Agent Force team</p>
          </div>

          <div className="architecture-card">
            <div className="arch-header">
              <div className="arch-icon ibm-blue">
                <Server size={32} />
              </div>
              <div className="arch-info">
                <h3>{teamOverview.name}</h3>
                <span className="type-badge info">{teamOverview.type}</span>
              </div>
            </div>
            
            <div className="arch-details">
              <div className="arch-row">
                <span className="arch-label">Scope:</span>
                <span className="arch-value">{teamOverview.scope}</span>
              </div>
              <div className="arch-row">
                <span className="arch-label">Active Agents:</span>
                <span className="arch-value">{teamOverview.agents}</span>
              </div>
              <div className="arch-row">
                <span className="arch-label">Focus Areas:</span>
                <span className="arch-value">{teamOverview.focus}</span>
              </div>
            </div>
          </div>

          <div className="deployments-section">
            <h3><Globe size={20} /> Active Deployments</h3>
            <div className="deployments-grid">
              {deployments.map((dep) => {
                const IconComponent = dep.icon;
                return (
                  <div key={dep.id} className={`deployment-card ${dep.type.toLowerCase()}`}>
                    <div className="dep-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="dep-content">
                      <h4>{dep.name}</h4>
                      <span className="dep-owner">{dep.owner}</span>
                      <p className="dep-status">{dep.status}</p>
                      <span className={`dep-type-badge ${dep.type.toLowerCase()}`}>{dep.type}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="govcloud-section">
            <h3><Lock size={20} /> GovCloud Constraints</h3>
            <div className="constraints-list">
              {govCloudConstraints.map((item, idx) => (
                <div key={idx} className="constraint-item">
                  <div className="constraint-header">
                    <AlertCircle size={16} />
                    <span className="constraint-name">{item.constraint}</span>
                  </div>
                  <p className="constraint-detail">{item.detail}</p>
                  <p className="constraint-impact">Impact: {item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Observability Needs Section */}
      {activeSection === 'needs' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><BarChart2 size={24} /> Observability Requirements</h2>
            <p>Key tracking and forecasting needs from IBM team</p>
          </div>

          <div className="needs-list">
            {observabilityNeeds.map((need) => {
              const IconComponent = need.icon;
              const isExpanded = expandedItem === need.id;
              return (
                <div
                  key={need.id}
                  className={`need-card ${need.status} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(need.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(need.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="need-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="need-content">
                    <h4>{need.title}</h4>
                    <p>{need.description}</p>
                    <span className={`need-status ${need.status}`}>{need.status.replace('-', ' ')}</span>
                  </div>
                  <div className="expand-hint">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  {isExpanded && (
                    <div className="need-quote">
                      <MessageSquare size={14} />
                      <span>"{need.quote}"</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="wallet-section">
            <h3><DollarSign size={20} /> Digital Wallet Initiative</h3>
            <div className="wallet-card">
              <div className="wallet-status">
                <span className="status-label">Status:</span>
                <span className="status-value warning">{digitalWallet.status}</span>
              </div>
              <div className="wallet-details">
                <p><strong>Use Case:</strong> {digitalWallet.useCase}</p>
                <p><strong>Challenge:</strong> {digitalWallet.challenge}</p>
              </div>
              <div className="wallet-quote">
                <MessageSquare size={14} />
                <span>"{digitalWallet.quote}"</span>
              </div>
            </div>
          </div>

          <div className="context-note-ibm">
            <Zap size={18} />
            <div>
              <strong>Forecasting Insight:</strong> "Start with predicting agent traffic and 
              assessing agent handling performance rather than focusing solely on spend data, 
              which is difficult to derive certainty from."
              <span className="quote-source">— Nir Tzavchon</span>
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {activeSection === 'solutions' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><CheckCircle size={24} /> Available & Upcoming Solutions</h2>
            <p>Capabilities discussed during the session</p>
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
              <li><CheckCircle size={14} /> Follow-up discussion on data model for observability and digital wallet</li>
              <li><CheckCircle size={14} /> Share SDM information with IBM team</li>
              <li><CheckCircle size={14} /> Filter questions from federal and broader market for product team</li>
              <li><CheckCircle size={14} /> Meeting with LCPs and SAs to gather agent feedback</li>
              <li><CheckCircle size={14} /> Potential reversed demo or follow-up session post-January</li>
            </ul>
          </div>
        </section>
      )}

      <footer className="ibm-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">IBM Tab Next & Agent Analytics Discussion - December 2025</span>
        </div>
        <a 
          href="?view=ibm-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=ibm-ux';
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

export default IBMWorkflow;

