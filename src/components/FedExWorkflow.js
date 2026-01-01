import React, { useState } from 'react';
import {
  Package, Database, GitBranch, Shield, Users, Settings, ArrowRight, ArrowDown,
  CheckCircle, Eye, Layers, Server, Lock, Activity, ChevronRight, ChevronDown,
  ChevronUp, MessageSquare, Target, TrendingUp, FileText, Zap, Building2, Lightbulb
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './FedExWorkflow.css';

const FedExWorkflow = () => {
  const [activeSection, setActiveSection] = useState('architecture');
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const architecture = {
    production: [
      { name: 'Data Cloud Home Org', type: 'home', description: 'Enterprise Data Cloud - manages all data and permissions' },
      { name: 'Sales Cloud Companion Org', type: 'companion', description: 'Global sales team (15-16K sellers)' },
      { name: 'Service Cloud Companion Org', type: 'companion', description: 'Customer service team - migrating to enterprise DC' }
    ],
    sandbox: [
      { name: 'Data Cloud Sandbox (Home)', type: 'home', description: 'Replica of production home org' },
      { name: 'Sales Cloud Sandbox', type: 'companion', description: 'Connected via Data Cloud One' },
      { name: 'Service Cloud Sandbox', type: 'companion', description: 'Correlating sandbox instance' }
    ]
  };

  const setupRules = [
    {
      id: 'session-tracing',
      title: 'Enable Session Tracing',
      where: 'Any Org (Home or Companion)',
      description: 'Can be enabled directly from the org - no need to hop to home org',
      quote: '"Setup itself can be done from either the companion or the home org."'
    },
    {
      id: 'permissions',
      title: 'Modify Permissions & Data Governance',
      where: 'Home Org Only',
      description: 'Who can view data, what data they can view - managed centrally',
      quote: '"If you need to modify permissions... that is done from the home org - that\'s the org that manages all data and permissions."'
    },
    {
      id: 'view-analytics',
      title: 'View Analytics & Reports',
      where: 'Companion Org',
      description: 'Users can view their own agent analytics without logging into home org',
      quote: '"Companion orgs have access to all the same analytical reports... they will have access to their agents within the companion."'
    }
  ];

  const teams = [
    {
      name: 'Infrastructure Team',
      members: ['Carlos Droz', 'Raymond Bedrossian', 'Austin Sandlin', 'Preethi Gowda', 'Terrell'],
      focus: 'Data Cloud One enablement',
      description: 'Not building agents - focused on interconnecting things, governance, permissions, integrations',
      quote: '"We\'re focusing on the technical aspect of interconnecting things... when it comes to the agent, it\'s just an integration of data."'
    },
    {
      name: 'Sales Agent Team',
      focus: 'Internal Sales Agent',
      description: '15-16K global sellers. CRM focused, no Data Cloud yet. Most momentum and innovation.',
      agents: '1 live, 3-4 planned',
      quote: '"The groups that have the most momentum right now with agents are the sales side of the business."'
    },
    {
      name: 'Service Cloud Team',
      focus: 'Customer Service Agents',
      description: 'Has own Data Cloud - migrating to enterprise. Busy season (Black Friday) delays innovation.',
      status: 'Migrating',
      quote: '"Service Cloud does have their own separate data cloud, but we\'re going to be moving them to our enterprise."'
    }
  ];

  return (
    <div className="fedex-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="FedEx" />
      
      <header className="fedex-header">
        <div className="header-badge">FedEx × Agentforce</div>
        <h1 className="fedex-title">Sandbox Support for Observability</h1>
        <p className="fedex-subtitle">Data Cloud One & Enterprise Architecture</p>
        <div className="fedex-date">November 10, 2025 • GA: November 20, 2025</div>
      </header>

      {/* Navigation */}
      <nav className="fedex-nav">
        <button
          className={`fedex-tab ${activeSection === 'architecture' ? 'active' : ''}`}
          onClick={() => setActiveSection('architecture')}
        >
          <Layers size={18} />
          <span>Architecture</span>
        </button>
        <button
          className={`fedex-tab ${activeSection === 'rules' ? 'active' : ''}`}
          onClick={() => setActiveSection('rules')}
        >
          <Settings size={18} />
          <span>Setup Rules</span>
        </button>
        <button
          className={`fedex-tab ${activeSection === 'teams' ? 'active' : ''}`}
          onClick={() => setActiveSection('teams')}
        >
          <Users size={18} />
          <span>Teams</span>
        </button>
      </nav>

      {/* Architecture Section */}
      {activeSection === 'architecture' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Layers size={24} /> FedEx Architecture</h2>
            <p>Enterprise Data Cloud with Sales & Service Cloud companion orgs</p>
          </div>

          <div className="architecture-grid">
            <div className="architecture-column">
              <h3><Server size={18} /> Production</h3>
              {architecture.production.map((org, idx) => (
                <div key={idx} className={`org-card ${org.type}`}>
                  <div className="org-header">
                    {org.type === 'home' ? <Database size={20} /> : <Building2 size={20} />}
                    <strong>{org.name}</strong>
                  </div>
                  <p>{org.description}</p>
                </div>
              ))}
            </div>

            <div className="architecture-column">
              <h3><GitBranch size={18} /> Sandbox</h3>
              {architecture.sandbox.map((org, idx) => (
                <div key={idx} className={`org-card ${org.type}`}>
                  <div className="org-header">
                    {org.type === 'home' ? <Database size={20} /> : <Building2 size={20} />}
                    <strong>{org.name}</strong>
                  </div>
                  <p>{org.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="architecture-note">
            <Shield size={18} />
            <div>
              <strong>Key Principle:</strong> Data Cloud is a separate org, not connected to production 
              Sales/Service Clouds. Sandboxes connect via Data Cloud One to corresponding sandbox orgs.
            </div>
          </div>

          <div className="data-flow">
            <h4><Activity size={18} /> How Observability Data Flows</h4>
            <div className="flow-steps">
              <div className="flow-step">
                <span className="flow-num">1</span>
                <p>Agent conversations happen in Sandbox (Sales or Service)</p>
              </div>
              <ArrowRight size={20} className="flow-arrow" />
              <div className="flow-step">
                <span className="flow-num">2</span>
                <p>Session tracing data sent to Data Cloud Sandbox</p>
              </div>
              <ArrowRight size={20} className="flow-arrow" />
              <div className="flow-step">
                <span className="flow-num">3</span>
                <p>Data mapped to selected data space</p>
              </div>
              <ArrowRight size={20} className="flow-arrow" />
              <div className="flow-step">
                <span className="flow-num">4</span>
                <p>Analytics visible in companion org (UI filtered)</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Setup Rules Section */}
      {activeSection === 'rules' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Settings size={24} /> Where to Configure What</h2>
            <p>Understanding home org vs companion org responsibilities</p>
          </div>

          <div className="rules-list">
            {setupRules.map((rule) => {
              const isExpanded = expandedCard === rule.id;
              return (
                <div 
                  key={rule.id} 
                  className={`rule-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardClick(rule.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(rule.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="rule-header">
                    <h4><ChevronRight size={16} /> {rule.title}</h4>
                    <span className="where-badge">{rule.where}</span>
                    <div className="rule-expand">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                  <p>{rule.description}</p>
                  {isExpanded && (
                    <div className="rule-quote">
                      <MessageSquare size={14} />
                      <span>{rule.quote}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="key-insight">
            <Lightbulb size={20} />
            <div>
              <strong>Key Insight:</strong> Data Cloud sandbox does NOT copy data from production. 
              Data collection is based on conversations conducted with agents IN the sandbox.
            </div>
          </div>
        </section>
      )}

      {/* Teams Section */}
      {activeSection === 'teams' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Users size={24} /> FedEx Teams</h2>
            <p>Three distinct groups working with Agent Force</p>
          </div>

          <div className="teams-list">
            {teams.map((team, idx) => {
              const isExpanded = expandedCard === team.name;
              return (
                <div 
                  key={idx} 
                  className={`team-card-fedex ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardClick(team.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(team.name);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="team-fedex-header">
                    <h4>{team.name}</h4>
                    <div className="team-expand">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                  <div className="team-focus-badge">{team.focus}</div>
                  <p>{team.description}</p>
                  {team.members && (
                    <div className="team-members-chips">
                      {team.members.map((member, i) => (
                        <span key={i} className="member-chip-fedex">{member}</span>
                      ))}
                    </div>
                  )}
                  {team.agents && <div className="team-stat">Agents: {team.agents}</div>}
                  {team.status && <div className="team-stat">Status: {team.status}</div>}
                  {isExpanded && (
                    <div className="team-quote-fedex">
                      <MessageSquare size={14} />
                      <span>{team.quote}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="context-box">
            <Target size={18} />
            <div>
              <strong>Context:</strong> FedEx is a 16-17 year Salesforce customer with gigantic Sales Cloud 
              and Service Cloud orgs. Sales side has most momentum with internal sales agent. Service team 
              delayed due to busy season (Black Friday/holiday shipping).
            </div>
          </div>
        </section>
      )}

      <footer className="fedex-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">FedEx Sandbox Support - November 10, 2025</span>
        </div>
        <a 
          href="?view=fedex-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=fedex-ux';
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

export default FedExWorkflow;

