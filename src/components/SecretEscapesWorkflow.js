import React, { useState } from 'react';
import {
  Users, MessageSquare, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp,
  BarChart2, Calculator, FileText, HelpCircle, Percent,
  RefreshCw, Zap, Building, Search, Download, Link, XCircle
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './SecretEscapesWorkflow.css';

const SecretEscapesWorkflow = () => {
  const [activeSection, setActiveSection] = useState('metrics');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const metricDefinitions = [
    {
      id: 'engagement',
      metric: 'Engagement Rate',
      salesforceDefinition: 'Action invoked (commercial model - value translated when action triggered)',
      secretEscapesDefinition: 'End-user sends 1+ messages (stricter - excludes pre-chat form only)',
      discrepancy: 'SE rate should be higher than Salesforce rate',
      quote: 'We measure engagement based on end-user messages, excluding sessions where pre-chat form is completed but no messages sent.',
      status: 'different'
    },
    {
      id: 'abandonment',
      metric: 'Abandonment Rate',
      salesforceDefinition: 'Not escalated and not deflected (both engaged and unengaged)',
      secretEscapesDefinition: 'Not escalated and not deflected, but unengaged always = abandoned',
      discrepancy: 'SE reports 10-15%, Salesforce shows extremely low',
      quote: 'Our unengaged sessions are always considered abandoned. Your abandonment rate is extremely low compared to our 10-15%.',
      status: 'major-discrepancy'
    },
    {
      id: 'deflection',
      metric: 'Deflection Rate',
      salesforceDefinition: 'Session ended by closed_user_request OR closed_action',
      secretEscapesDefinition: 'Complex formula with sentiment score, case creation, and explicit feedback',
      discrepancy: 'SE definition is more strict with multiple conditions',
      quote: 'We include sentiment score >= 3, no case created, and explicit "yes this resolved" feedback.',
      status: 'different'
    },
    {
      id: 'escalation',
      metric: 'Escalation Rate',
      salesforceDefinition: 'Session escalated to human agent',
      secretEscapesDefinition: 'Case owner is human agent (not automated system user)',
      discrepancy: 'SE suspects Salesforce may be undercounting escalations',
      quote: 'I have a feeling you might be undercounting escalated here.',
      status: 'possible-discrepancy'
    }
  ];

  const closedActionQuestions = [
    {
      id: 'user-request',
      title: 'Closed User Request',
      description: 'User clicks "End Chat" via three dots menu (NOT the X button)',
      status: 'understood',
      note: 'X button only minimizes chat, does not end session'
    },
    {
      id: 'closed-action',
      title: 'Closed Action',
      description: 'Agent leaves chat based on context when user says "I\'m done"',
      status: 'unclear',
      note: 'SE has never observed agent exiting session based on context - sessions just timeout'
    }
  ];

  const actionDefinitions = [
    {
      step: 1,
      event: 'Welcome Message',
      isAction: false,
      reason: 'System message - no action invoked'
    },
    {
      step: 2,
      event: 'User says "Hello"',
      isAction: false,
      reason: 'Small talk response - no action invoked'
    },
    {
      step: 3,
      event: 'User asks about return policy',
      isAction: true,
      reason: 'Answer with knowledge action invoked = ENGAGED'
    }
  ];

  const dataValidationNeeds = [
    {
      id: 'export',
      title: 'Export Semantic Layer Data',
      description: 'Recreate semantic model queries in Data Cloud Reports for export',
      status: 'solution-provided',
      quote: 'Create Data Cloud report on semantic model, add messaging session ID and status columns.'
    },
    {
      id: 'sanity-check',
      title: 'Sanity Check Individual Sessions',
      description: 'View messaging sessions linked to deflection/abandonment status to validate',
      status: 'available',
      quote: 'Messaging session IDs are available in the semantic model for validation.'
    },
    {
      id: 'duplicate-sessions',
      title: 'Duplicate Session Investigation',
      description: 'Same session counted multiple times - possibly due to planner session forking',
      status: 'investigating',
      quote: 'One messaging session might be tied to multiple planner sessions - escalations or users returning after inactivity.'
    }
  ];

  return (
    <div className="secretescapes-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Secret Escapes" />
      
      <header className="secretescapes-header">
        <div className="header-badge">Secret Escapes × Agentforce Analytics</div>
        <h1 className="secretescapes-title">Metric Definitions & Discrepancies</h1>
        <p className="secretescapes-subtitle">Comparing Internal vs Salesforce Metrics</p>
        <div className="secretescapes-date">Sep 16 & Dec 19, 2025</div>
      </header>

      {/* Navigation */}
      <nav className="secretescapes-nav">
        <button
          className={`secretescapes-tab ${activeSection === 'metrics' ? 'active' : ''}`}
          onClick={() => setActiveSection('metrics')}
        >
          <Calculator size={18} />
          <span>Metric Definitions</span>
        </button>
        <button
          className={`secretescapes-tab ${activeSection === 'actions' ? 'active' : ''}`}
          onClick={() => setActiveSection('actions')}
        >
          <Zap size={18} />
          <span>Action vs Non-Action</span>
        </button>
        <button
          className={`secretescapes-tab ${activeSection === 'validation' ? 'active' : ''}`}
          onClick={() => setActiveSection('validation')}
        >
          <Search size={18} />
          <span>Data Validation</span>
        </button>
      </nav>

      {/* Metric Definitions Section */}
      {activeSection === 'metrics' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Calculator size={24} /> Metric Definition Comparison</h2>
            <p>How Secret Escapes measures vs how Salesforce reports</p>
          </div>

          <div className="metrics-comparison">
            {metricDefinitions.map((metric) => {
              const isExpanded = expandedItem === metric.id;
              return (
                <div
                  key={metric.id}
                  className={`metric-card ${metric.status} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(metric.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(metric.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="metric-header">
                    <h4>{metric.metric}</h4>
                    <span className={`metric-status ${metric.status}`}>
                      {metric.status === 'major-discrepancy' ? 'Major Gap' : 
                       metric.status === 'possible-discrepancy' ? 'Possible Gap' : 'Different'}
                    </span>
                  </div>
                  
                  <div className="metric-definitions">
                    <div className="definition-row">
                      <span className="def-label">Salesforce:</span>
                      <span className="def-value">{metric.salesforceDefinition}</span>
                    </div>
                    <div className="definition-row">
                      <span className="def-label">Secret Escapes:</span>
                      <span className="def-value">{metric.secretEscapesDefinition}</span>
                    </div>
                  </div>

                  <div className="metric-discrepancy">
                    <AlertCircle size={14} />
                    <span>{metric.discrepancy}</span>
                  </div>

                  {isExpanded && (
                    <div className="metric-quote">
                      <MessageSquare size={14} />
                      <span>"{metric.quote}"</span>
                    </div>
                  )}

                  <div className="expand-hint">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="closed-action-section">
            <h3><HelpCircle size={20} /> Closed Action Clarification</h3>
            <div className="closed-actions-grid">
              {closedActionQuestions.map((item) => (
                <div key={item.id} className={`closed-action-card ${item.status}`}>
                  <div className="ca-header">
                    <h4>{item.title}</h4>
                    <span className={`ca-status ${item.status}`}>{item.status}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="ca-note">
                    <AlertCircle size={14} />
                    <span>{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Action Definition Section */}
      {activeSection === 'actions' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Zap size={24} /> What Counts as an Action?</h2>
            <p>Understanding when a session becomes "engaged"</p>
          </div>

          <div className="action-flow">
            {actionDefinitions.map((step, idx) => (
              <div key={step.step} className={`action-step ${step.isAction ? 'is-action' : 'not-action'}`}>
                <div className="step-indicator">
                  <div className="step-number">{step.step}</div>
                  {idx < actionDefinitions.length - 1 && <ArrowRight size={20} className="step-arrow" />}
                </div>
                <div className="step-content">
                  <h4>{step.event}</h4>
                  <div className={`action-badge ${step.isAction ? 'yes' : 'no'}`}>
                    {step.isAction ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    {step.isAction ? 'ACTION' : 'NOT ACTION'}
                  </div>
                  <p>{step.reason}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="context-note-se">
            <MessageSquare size={18} />
            <div>
              <strong>Key Insight:</strong> "Every time a message is generated from invoking a standard 
              or custom action, that is considered engaged. The welcome message or small talk responses 
              are NOT actions - they come from system messages or topic instructions."
              <span className="quote-source">— Nir Tzavchon</span>
            </div>
          </div>

          <div className="action-types-section">
            <h3><Settings size={20} /> AI Agent Interaction Step Types</h3>
            <p className="section-hint">Query the Semantic Data Model for full list</p>
            <div className="step-types-grid">
              <div className="step-type-card">
                <h4>Action Step</h4>
                <p>Invokes an action (knowledge, custom, etc.)</p>
              </div>
              <div className="step-type-card">
                <h4>LLM Step</h4>
                <p>Direct LLM response without action</p>
              </div>
              <div className="step-type-card">
                <h4>Topic Step</h4>
                <p>Topic classification/routing</p>
              </div>
              <div className="step-type-card">
                <h4>Session End</h4>
                <p>Session termination events</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Data Validation Section */}
      {activeSection === 'validation' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Search size={24} /> Data Validation Needs</h2>
            <p>How to verify and export metrics data</p>
          </div>

          <div className="validation-needs">
            {dataValidationNeeds.map((need) => {
              const isExpanded = expandedItem === need.id;
              return (
                <div
                  key={need.id}
                  className={`validation-card ${need.status} ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="validation-header">
                    <h4>{need.title}</h4>
                    <span className={`validation-status ${need.status}`}>
                      {need.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p>{need.description}</p>
                  {isExpanded && (
                    <div className="validation-quote">
                      <MessageSquare size={14} />
                      <span>"{need.quote}"</span>
                    </div>
                  )}
                  <div className="expand-hint">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="export-steps">
            <h3><Download size={20} /> How to Export Data</h3>
            <ol className="steps-list">
              <li>Open Data Cloud → Reports tab</li>
              <li>Create New Report → Select Semantic Data Models</li>
              <li>Choose "Service Agent Analytics SDM"</li>
              <li>Add groups: Related Messaging Session ID</li>
              <li>Add columns: Deflection Status, Abandonment Status, Escalation Status</li>
              <li>Filter by Agent API Name (e.g., "Alex")</li>
              <li>Save and Run → Export</li>
            </ol>
          </div>

          <div className="next-steps">
            <h3><HelpCircle size={20} /> Action Items</h3>
            <ul>
              <li><CheckCircle size={14} /> Laura to run engagement rate comparison report</li>
              <li><CheckCircle size={14} /> Nir to research what triggers "closed action" API event</li>
              <li><CheckCircle size={14} /> Nir to share quality score prompt documentation</li>
              <li><CheckCircle size={14} /> Laura to curate validation examples and send to Nir</li>
              <li><CheckCircle size={14} /> Nir to check when messaging session navigation will be available</li>
            </ul>
          </div>
        </section>
      )}

      <footer className="secretescapes-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Secret Escapes AF Observability Sessions - Sep 16 & Dec 19, 2025</span>
        </div>
        <a 
          href="?view=secretescapes-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=secretescapes-ux';
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

export default SecretEscapesWorkflow;

