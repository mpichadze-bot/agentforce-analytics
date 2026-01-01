import React, { useState } from 'react';
import {
  ShoppingBag, MessageSquare, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp,
  BarChart2, Target, FileText, HelpCircle, Percent, Users,
  RefreshCw, Zap, Building, Search, Download, Flag, Globe,
  TrendingUp, ClipboardCheck, Database
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './OniverseWorkflow.css';

const OniverseWorkflow = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const agentSetup = {
    company: 'Calcedonia (Oniverse)',
    industry: 'Italian Underwear Retail - 5 Brands',
    liveDate: 'September 17, 2025',
    agents: [
      { type: 'Customer Service Agent', count: '2 per brand', status: 'live' },
      { type: 'Shopper Assistant', count: '1 per brand', status: 'live' }
    ],
    useCases: [
      'FAQ Knowledge Retrieval',
      'Order Status Inquiries',
      'Order Cancellation',
      'Basic Order Management'
    ],
    coverage: 'Worldwide'
  };

  const currentMetrics = {
    resolutionRate: { current: 55, target3mo: 65, target6mo: 75 },
    escalationRate: 40,
    qualityIssues: ['Knowledge articles gaps', 'Cannot go deeper on order/delivery status']
  };

  const resolutionFormula = {
    formula: '(Sessions Processed - Sessions Escalated + Failed Escalated Rate) / Total Sessions',
    issue: 'Any session not escalated counts as resolved - INCLUDING abandoned sessions',
    source: 'Customer-defined formula in custom semantic data model'
  };

  const qualityProcess = [
    {
      step: 1,
      title: 'Identify Low-Score Sessions',
      description: 'Customer service manager reviews sessions with low quality scores',
      pain: 'Cannot filter or download directly',
      icon: Search
    },
    {
      step: 2,
      title: 'Cross-Reference Session IDs',
      description: 'Must manually match messaging session IDs to observability',
      pain: 'Painful cross-referencing process',
      icon: Database
    },
    {
      step: 3,
      title: 'Create Excel File',
      description: 'Manually create Excel with case number, brand, feedback, issues',
      pain: 'Cannot download this information directly',
      icon: FileText
    },
    {
      step: 4,
      title: 'Share with Team',
      description: 'Distribute Excel files across quality team',
      pain: 'Poorly distributed information',
      icon: Users
    },
    {
      step: 5,
      title: 'Track Review Status',
      description: 'Need to mark sessions as reviewed after analysis',
      pain: 'No UI way to mark as reviewed - requires custom fields workaround',
      icon: ClipboardCheck
    }
  ];

  const workarounds = [
    {
      id: 'custom-fields',
      title: 'Custom Fields on Messaging Session',
      description: 'Add custom fields to track review status and QA feedback',
      status: 'in-use',
      steps: [
        'Add custom fields to messaging session object',
        'Track review status (reviewed/not reviewed)',
        'Store QA feedback and notes',
        'Create reports to filter reviewed sessions'
      ]
    },
    {
      id: 'extend-semantic',
      title: 'Extend Semantic Layer',
      description: 'Working with Alejandro to add brand and country filtering',
      status: 'in-progress',
      steps: [
        'Extend semantic data model with brand data',
        'Add country filtering capability',
        'Connect messaging case data',
        'Enable deeper insights per brand/region'
      ]
    },
    {
      id: 'tableau-dashboard',
      title: 'Custom Tableau Dashboard',
      description: 'Engaged Tableau expert to create custom dashboard using new SDM metrics',
      status: 'in-progress',
      steps: [
        'Define custom resolution rate formula',
        'Build dashboard on extended semantic model',
        'Add brand/country filters',
        'Visualize quality metrics'
      ]
    }
  ];

  return (
    <div className="oniverse-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Oniverse" />
      
      <header className="oniverse-header">
        <div className="header-badge">Oniverse (Calcedonia) × Agentforce Analytics</div>
        <h1 className="oniverse-title">Quality Review Process & Challenges</h1>
        <p className="oniverse-subtitle">Italian Retail - 5 Brands Worldwide</p>
        <div className="oniverse-date">December 2025</div>
      </header>

      {/* Navigation */}
      <nav className="oniverse-nav">
        <button
          className={`oniverse-tab ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          <Building size={18} />
          <span>Agent Overview</span>
        </button>
        <button
          className={`oniverse-tab ${activeSection === 'quality' ? 'active' : ''}`}
          onClick={() => setActiveSection('quality')}
        >
          <ClipboardCheck size={18} />
          <span>Quality Process</span>
        </button>
        <button
          className={`oniverse-tab ${activeSection === 'workarounds' ? 'active' : ''}`}
          onClick={() => setActiveSection('workarounds')}
        >
          <RefreshCw size={18} />
          <span>Workarounds</span>
        </button>
      </nav>

      {/* Agent Overview Section */}
      {activeSection === 'overview' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Building size={24} /> Agent Setup & Metrics</h2>
            <p>Current deployment and performance targets</p>
          </div>

          <div className="overview-grid">
            <div className="overview-card company">
              <h3><ShoppingBag size={20} /> Company</h3>
              <div className="company-details">
                <div className="detail-row">
                  <span className="label">Name:</span>
                  <span className="value">{agentSetup.company}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Industry:</span>
                  <span className="value">{agentSetup.industry}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Live Since:</span>
                  <span className="value">{agentSetup.liveDate}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Coverage:</span>
                  <span className="value">{agentSetup.coverage}</span>
                </div>
              </div>
            </div>

            <div className="overview-card agents">
              <h3><Users size={20} /> Agent Types</h3>
              <div className="agents-list">
                {agentSetup.agents.map((agent, idx) => (
                  <div key={idx} className="agent-row">
                    <div className="agent-info">
                      <span className="agent-type">{agent.type}</span>
                      <span className="agent-count">{agent.count}</span>
                    </div>
                    <span className={`agent-status ${agent.status}`}>{agent.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overview-card use-cases">
              <h3><Zap size={20} /> Use Cases</h3>
              <ul className="use-case-list">
                {agentSetup.useCases.map((uc, idx) => (
                  <li key={idx}><CheckCircle size={14} /> {uc}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="metrics-section">
            <h3><TrendingUp size={20} /> Resolution Rate Targets</h3>
            <div className="metrics-cards">
              <div className="metric-card current">
                <div className="metric-value">{currentMetrics.resolutionRate.current}%</div>
                <div className="metric-label">Current</div>
              </div>
              <div className="metric-arrow"><ArrowRight size={24} /></div>
              <div className="metric-card target">
                <div className="metric-value">{currentMetrics.resolutionRate.target3mo}%</div>
                <div className="metric-label">3 Month Target</div>
              </div>
              <div className="metric-arrow"><ArrowRight size={24} /></div>
              <div className="metric-card target">
                <div className="metric-value">{currentMetrics.resolutionRate.target6mo}%</div>
                <div className="metric-label">6 Month Target</div>
              </div>
            </div>

            <div className="escalation-warning">
              <AlertCircle size={18} />
              <span><strong>{currentMetrics.escalationRate}% Escalation Rate</strong> - Agents cannot go deeper on order/delivery status topics</span>
            </div>
          </div>

          <div className="formula-section">
            <h3><HelpCircle size={20} /> Resolution Rate Formula</h3>
            <div className="formula-card">
              <code>{resolutionFormula.formula}</code>
              <div className="formula-warning">
                <AlertCircle size={16} />
                <span><strong>Issue:</strong> {resolutionFormula.issue}</span>
              </div>
              <div className="formula-source">{resolutionFormula.source}</div>
            </div>
          </div>
        </section>
      )}

      {/* Quality Process Section */}
      {activeSection === 'quality' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><ClipboardCheck size={24} /> Current Quality Review Process</h2>
            <p>Manual workflow for reviewing low-score sessions</p>
          </div>

          <div className="quality-process">
            {qualityProcess.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="quality-step">
                  <div className="step-header">
                    <div className="step-number">{step.step}</div>
                    <div className="step-icon"><IconComponent size={20} /></div>
                    {idx < qualityProcess.length - 1 && <div className="step-connector" />}
                  </div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                    <div className="step-pain">
                      <AlertCircle size={14} />
                      <span>{step.pain}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="key-need">
            <MessageSquare size={24} />
            <div>
              <h4>Core Need: QA Annotation Capability</h4>
              <p>"The customer needs the ability for a QA person to review and annotate sessions, 
                 tracking any disagreement with the system's score."</p>
              <span className="source">— Nir Tzavchon</span>
            </div>
          </div>
        </section>
      )}

      {/* Workarounds Section */}
      {activeSection === 'workarounds' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><RefreshCw size={24} /> Current Workarounds & Solutions</h2>
            <p>How the team is addressing gaps today</p>
          </div>

          <div className="workarounds-list">
            {workarounds.map((wa) => {
              const isExpanded = expandedItem === wa.id;
              return (
                <div
                  key={wa.id}
                  className={`workaround-card ${wa.status} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(wa.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(wa.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="workaround-header">
                    <h4>{wa.title}</h4>
                    <span className={`wa-status ${wa.status}`}>{wa.status.replace('-', ' ')}</span>
                  </div>
                  <p>{wa.description}</p>
                  
                  {isExpanded && (
                    <div className="workaround-steps">
                      <h5>Steps:</h5>
                      <ol>
                        {wa.steps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  
                  <div className="expand-hint">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="roadmap-section">
            <h3><Target size={20} /> Expected Capabilities</h3>
            <div className="roadmap-items">
              <div className="roadmap-item">
                <div className="roadmap-date">January 2025</div>
                <div className="roadmap-content">
                  <h4>Download Session Data</h4>
                  <p>Ability to export session data for analysis</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">March 2025</div>
                <div className="roadmap-content">
                  <h4>Deeper Diagnostic Analytics</h4>
                  <p>More granular insights and drill-down capabilities</p>
                </div>
              </div>
              <div className="roadmap-item future">
                <div className="roadmap-date">Long-term</div>
                <div className="roadmap-content">
                  <h4>Automated Annotation & Feedback</h4>
                  <p>Streamlined QA workflow directly in the tool</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="oniverse-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Oniverse Observability Improvement Suggestions - December 2025</span>
        </div>
        <a 
          href="?view=oniverse-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=oniverse-ux';
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

export default OniverseWorkflow;

