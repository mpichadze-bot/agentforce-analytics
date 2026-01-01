import React, { useState } from 'react';
import {
  Users, MessageSquare, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp,
  BarChart2, Target, FileText, HelpCircle, Percent, Lock,
  RefreshCw, Zap, Building, Search, Download, Database, Clock,
  TrendingUp, CreditCard, Shield, XCircle, AlertTriangle, ExternalLink
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import '../styles/workflow-obsidian.css';

const AllegisWorkflow = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const companyContext = {
    name: 'Allegis',
    status: 'Early Adopter - Legacy SKU',
    sku: 'Conversations (Legacy)',
    targetSku: 'Flex Credits',
    agents: ['Default Employee Agent', 'Service Agent'],
    concern: 'Forecasting and real-time agent performance monitoring'
  };

  const skuIssues = [
    {
      id: 'no-tableau',
      icon: XCircle,
      color: 'red',
      title: 'Cannot Access Tableau Next',
      description: 'Legacy conversation SKU prevents access to out-of-box reporting UI',
      impact: 'Must build custom reports until Flex switch',
      workaround: 'Use semantic data model queries directly'
    },
    {
      id: 'no-perm-set',
      icon: Lock,
      color: 'orange',
      title: 'Missing Permission Set',
      description: 'No "Tableau Next Limited Consumer" permission set available',
      impact: 'Service agent analytics app installation fails',
      workaround: 'Build custom reports on session tracing SDM'
    },
    {
      id: 'new-features-blocked',
      icon: AlertTriangle,
      color: 'orange',
      title: 'New Features Blocked',
      description: 'Legacy SKU restricts access to new observability features',
      impact: 'Cannot use latest analytics capabilities',
      workaround: 'Evaluate move to Flex credits'
    }
  ];

  const sessionTracingGuide = [
    {
      step: 1,
      title: 'Access Semantic Layer',
      description: 'Navigate to Data Cloud → Semantic Layer tab',
      detail: 'Even without Tableau Next UI, you can query the semantic model'
    },
    {
      step: 2,
      title: 'Open Service Agent Analytics SDM',
      description: 'This is the semantic data model activated by session tracing',
      detail: 'Expresses semantic relations between observability objects'
    },
    {
      step: 3,
      title: 'Use Test Model',
      description: 'Run ad-hoc queries on the model',
      detail: 'Anything queryable here is replicable through Data Cloud reports'
    },
    {
      step: 4,
      title: 'Build User Adoption Report',
      description: 'Filter by agent type, add unique users measurement',
      detail: 'Example: Filter employee agent → add unique users dimension'
    },
    {
      step: 5,
      title: 'Analyze Interaction Steps',
      description: 'Step object shows invoked actions and retrievers',
      detail: 'Use to project flex credit costs based on steps within a session'
    }
  ];

  const documentationResources = [
    {
      title: 'Agent Analytics Salesforce Beta',
      description: 'Main documentation page for new analytics',
      url: 'Search: "agent analytics Salesforce beta"'
    },
    {
      title: 'Data Model and Calculated Fields',
      description: 'Dictionary of measurements and dimensions on semantic model',
      url: 'Under Agent Analytics Beta → Data Model'
    },
    {
      title: 'Session Tracing Data Model',
      description: 'Full list of objects and fields in the session tracing SDM',
      url: 'Under Agent Force Session Tracing → Data Model'
    }
  ];

  return (
    <div className="obsidian-workflow">
      <NavigationHeader currentPage="Workflow" customerName="Allegis" />
      
      <div className="obsidian-workflow-content">
        {/* Header */}
        <header className="obsidian-header">
          <div className="obsidian-badge">
            <Building size={14} />
            Allegis × Agentforce Analytics
          </div>
          <h1 className="obsidian-title">Observability Reporting Discussion</h1>
          <p className="obsidian-subtitle">Legacy SKU Challenges & Custom Reporting Solutions</p>
          <div className="obsidian-meta">
            <span className="obsidian-meta-item">
              <Clock size={14} />
              September 2025
            </span>
            <span className="obsidian-meta-item">
              <Users size={14} />
              Nir Tzavchon, Abhijit Mahato, Barry, Jeff Grosse
            </span>
          </div>
        </header>

        {/* Navigation */}
        <nav className="obsidian-nav">
          <button
            className={`obsidian-tab ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            <AlertTriangle size={16} />
            SKU Issues
          </button>
          <button
            className={`obsidian-tab ${activeSection === 'queries' ? 'active' : ''}`}
            onClick={() => setActiveSection('queries')}
          >
            <Database size={16} />
            Custom Queries
          </button>
          <button
            className={`obsidian-tab ${activeSection === 'migration' ? 'active' : ''}`}
            onClick={() => setActiveSection('migration')}
          >
            <RefreshCw size={16} />
            Migration
          </button>
        </nav>

        {/* Context Banner */}
        <div className="obsidian-context">
          <h3 className="obsidian-context-title">
            <Building size={18} />
            Company Context
          </h3>
          <div className="obsidian-context-grid">
            <div className="obsidian-context-item">
              <span className="obsidian-context-label">Status</span>
              <span className="obsidian-context-value highlight">{companyContext.status}</span>
            </div>
            <div className="obsidian-context-item">
              <span className="obsidian-context-label">Current SKU</span>
              <span className="obsidian-context-value">{companyContext.sku}</span>
            </div>
            <div className="obsidian-context-item">
              <span className="obsidian-context-label">Target</span>
              <span className="obsidian-context-value">{companyContext.targetSku}</span>
            </div>
            <div className="obsidian-context-item">
              <span className="obsidian-context-label">Agents</span>
              <span className="obsidian-context-value">{companyContext.agents.join(', ')}</span>
            </div>
          </div>
          <div className="obsidian-alert warning" style={{ marginTop: '1rem', marginBottom: 0 }}>
            <AlertCircle size={18} className="obsidian-alert-icon" />
            <div className="obsidian-alert-content">
              <p className="obsidian-alert-title">Primary Concern</p>
              <p className="obsidian-alert-text">{companyContext.concern}</p>
            </div>
          </div>
        </div>

        {/* SKU Issues Section */}
        {activeSection === 'overview' && (
          <section className="obsidian-section">
            <div className="obsidian-section-header">
              <h2><AlertTriangle size={24} /> Legacy SKU Limitations</h2>
              <p>Challenges from being on the legacy conversation SKU</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {skuIssues.map((issue) => {
                const IconComponent = issue.icon;
                const isExpanded = expandedItem === issue.id;
                return (
                  <div
                    key={issue.id}
                    className={`obsidian-card obsidian-expandable ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => handleItemClick(issue.id)}
                    style={{ cursor: 'pointer', position: 'relative', paddingLeft: '1.75rem' }}
                  >
                    <div className={`severity-bar ${issue.color === 'red' ? 'critical' : 'high'}`} />
                    <div className="obsidian-card-header" style={{ marginBottom: isExpanded ? '1rem' : 0 }}>
                      <div className={`obsidian-card-icon ${issue.color}`}>
                        <IconComponent size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 className="obsidian-card-title">{issue.title}</h4>
                        <p className="obsidian-card-desc">{issue.description}</p>
                      </div>
                      <ChevronDown size={18} className="expand-indicator" />
                    </div>
                    
                    {isExpanded && (
                      <div className="obsidian-card-expanded">
                        <div className="obsidian-detail">
                          <AlertCircle size={16} className="obsidian-detail-icon" style={{ color: '#f97316' }} />
                          <div>
                            <div className="obsidian-detail-label">Impact</div>
                            <div className="obsidian-detail-value">{issue.impact}</div>
                          </div>
                        </div>
                        <div className="obsidian-detail">
                          <CheckCircle size={16} className="obsidian-detail-icon" style={{ color: '#22c55e' }} />
                          <div>
                            <div className="obsidian-detail-label">Workaround</div>
                            <div className="obsidian-detail-value">{issue.workaround}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Consumption Section */}
            <div style={{ marginTop: '2rem' }}>
              <div className="obsidian-section-header">
                <h2><CreditCard size={24} /> Consumption Tracking Needs</h2>
              </div>
              
              <div className="obsidian-grid-2">
                <div className="obsidian-card">
                  <h4 className="obsidian-card-title" style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Need</h4>
                  <p className="obsidian-card-desc">Real-time or near real-time consumption analysis during development</p>
                </div>
                <div className="obsidian-card">
                  <h4 className="obsidian-card-title" style={{ color: '#f97316', marginBottom: '0.5rem' }}>Current State</h4>
                  <p className="obsidian-card-desc">Consumption cards showing zero even for conversation-based agents</p>
                </div>
                <div className="obsidian-card">
                  <h4 className="obsidian-card-title" style={{ color: '#a855f7', marginBottom: '0.5rem' }}>Refresh Rate</h4>
                  <p className="obsidian-card-desc">15-30 minutes for DMOS, up to 15 minutes for session tracing</p>
                </div>
                <div className="obsidian-card">
                  <h4 className="obsidian-card-title" style={{ color: '#22c55e', marginBottom: '0.5rem' }}>Desired State</h4>
                  <p className="obsidian-card-desc">Debug-style tool showing credits per action step in real-time</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Custom Queries Section */}
        {activeSection === 'queries' && (
          <section className="obsidian-section">
            <div className="obsidian-section-header">
              <h2><Database size={24} /> Building Custom Reports via Semantic Layer</h2>
              <p>How to query session tracing data without Tableau Next</p>
            </div>

            <div className="obsidian-timeline">
              {sessionTracingGuide.map((step) => (
                <div key={step.step} className="obsidian-timeline-item">
                  <div className="obsidian-timeline-dot">{step.step}</div>
                  <div className="obsidian-timeline-content">
                    <h4 className="obsidian-timeline-title">{step.title}</h4>
                    <p className="obsidian-timeline-desc">{step.description}</p>
                    <p className="obsidian-timeline-detail">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Documentation Resources */}
            <div style={{ marginTop: '2rem' }}>
              <div className="obsidian-section-header">
                <h2><FileText size={24} /> Documentation Resources</h2>
              </div>
              
              <div className="obsidian-grid-3">
                {documentationResources.map((resource, idx) => (
                  <div key={idx} className="obsidian-card">
                    <h4 className="obsidian-card-title" style={{ marginBottom: '0.5rem' }}>{resource.title}</h4>
                    <p className="obsidian-card-desc">{resource.description}</p>
                    <code className="obsidian-code">{resource.url}</code>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Quote */}
            <div className="obsidian-quote" style={{ marginTop: '2rem' }}>
              <MessageSquare size={20} className="obsidian-quote-icon" />
              <div>
                <p className="obsidian-quote-text">
                  "Even if you don't have access to Tableau Next UI, you can still build queries 
                  and build custom reports on top of the semantic model."
                </p>
                <span className="obsidian-quote-source">— Nir Tzavchon, PM Agentforce Platform</span>
              </div>
            </div>
          </section>
        )}

        {/* Migration Section */}
        {activeSection === 'migration' && (
          <section className="obsidian-section">
            <div className="obsidian-section-header">
              <h2><RefreshCw size={24} /> Legacy Agent Analytics Migration</h2>
              <p>Transitioning from legacy to session tracing</p>
            </div>

            <div className="obsidian-alert warning">
              <AlertTriangle size={20} className="obsidian-alert-icon" />
              <div className="obsidian-alert-content">
                <p className="obsidian-alert-title">Action Required: Disable Legacy Agent Analytics</p>
                <p className="obsidian-alert-text">
                  The legacy feature is causing full refreshes of 4.8M records, consuming high credits. 
                  It will be retired in April 2025.
                </p>
              </div>
            </div>

            <div className="obsidian-grid-2" style={{ marginTop: '1.5rem' }}>
              <div className="obsidian-stat">
                <div className="obsidian-stat-value">4.8M</div>
                <div className="obsidian-stat-label">Records per refresh</div>
              </div>
              <div className="obsidian-stat">
                <div className="obsidian-stat-value">Apr '25</div>
                <div className="obsidian-stat-label">Retirement date</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ color: '#fafafa', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Settings size={18} style={{ color: '#00d4ff' }} />
                How to Disable
              </h3>
              <ol className="obsidian-steps">
                <li>Open Setup in Salesforce</li>
                <li>Search for "audit" or "agent analytics"</li>
                <li>Navigate to "Agent Audit, Analytics and Monitoring Setup"</li>
                <li>Find "Agent Analytics" toggle and disable it</li>
                <li>This stops the data transforms causing full refreshes</li>
              </ol>
            </div>

            <div className="obsidian-alert success" style={{ marginTop: '1.5rem' }}>
              <CheckCircle size={20} className="obsidian-alert-icon" />
              <div className="obsidian-alert-content">
                <p className="obsidian-alert-title">No Data Loss</p>
                <p className="obsidian-alert-text">
                  Disabling legacy agent analytics does not cause loss of historical data. 
                  Session tracing records data independently.
                </p>
              </div>
            </div>

            {/* Permissions Issue */}
            <div style={{ marginTop: '2rem' }}>
              <div className="obsidian-section-header">
                <h2><Lock size={24} /> Permissions Issue Noted</h2>
              </div>
              
              <div className="obsidian-card">
                <div className="obsidian-detail">
                  <AlertCircle size={16} className="obsidian-detail-icon" style={{ color: '#f97316' }} />
                  <div>
                    <div className="obsidian-detail-label">Issue</div>
                    <div className="obsidian-detail-value">
                      Non-system admin users cannot see Agent Force Studio tabs even with same permission sets as admin users.
                    </div>
                  </div>
                </div>
                <div className="obsidian-detail">
                  <Target size={16} className="obsidian-detail-icon" />
                  <div>
                    <div className="obsidian-detail-label">Expected</div>
                    <div className="obsidian-detail-value">
                      System administrator privileges should NOT be required to use Agent Force Studio.
                    </div>
                  </div>
                </div>
                <span className="obsidian-tag high" style={{ marginTop: '0.5rem' }}>
                  Action: Work with Salesforce support to resolve
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="obsidian-footer">
          <div className="obsidian-footer-info">
            <span className="obsidian-footer-label">Source</span>
            <span className="obsidian-footer-value">Allegis Critical Observability Reporting Discussion - September 2025</span>
          </div>
          <a 
            href="?view=allegis-ux" 
            className="obsidian-footer-link"
            onClick={(e) => {
              e.preventDefault();
              window.location = window.location.origin + window.location.pathname + '?view=allegis-ux';
            }}
          >
            <Eye size={16} />
            View UX Findings
            <ArrowRight size={16} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AllegisWorkflow;
