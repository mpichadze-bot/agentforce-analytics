import React, { useState } from 'react';
import {
  MessageSquare, Bot, BarChart3, Target, CheckCircle, XCircle, AlertTriangle,
  Lightbulb, Users, TrendingUp, Database, FileText, Bug, Zap, ArrowRight, ArrowDown, ChevronRight,
  Scale, Clock, Activity, Shield, Settings, Search, Layers, Eye, Filter, Clipboard,
  UserCheck, Wrench, GitBranch, ClipboardCheck, FileSearch, ThumbsUp, ThumbsDown,
  HeartHandshake, Brain, MessageCircle, ListChecks, Workflow
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './LululemonWorkflow.css';

const LululemonWorkflow = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const metrics = [
    { name: 'Completeness', icon: CheckCircle, status: 'tracked', description: 'Validates end-to-end conversation success rate' },
    { name: 'Topic Adherence', icon: Target, status: 'tracked', description: 'Evaluates if agent answers questions only on relevant topics' },
    { name: 'Conversation Closure', icon: MessageCircle, status: 'custom', description: 'Measures appropriate closing handling' },
    { name: 'Knowledge Retention', icon: Brain, status: 'tracked', description: 'Whether chatbot remembers info from earlier in conversation' },
    { name: 'Empathy Score', icon: HeartHandshake, status: 'llm-judge', description: 'Emotional intelligence and appropriate validation' },
    { name: 'Safety', icon: Shield, status: 'custom', description: 'Checks for harmful, biased, or inappropriate content' }
  ];

  const teams = [
    {
      name: 'Leadership Team',
      icon: TrendingUp,
      color: 'purple',
      focus: 'ROI & Strategy',
      responsibilities: [
        'Focus on deflection/containment rates',
        'Define quality scorecard criteria',
        'Set strategic direction for agent improvement',
        'Review high-level metrics and trends'
      ]
    },
    {
      name: 'QA Team',
      icon: ClipboardCheck,
      color: 'blue',
      focus: 'Quality Assurance',
      responsibilities: [
        'Review individual messaging sessions',
        'Identify low sentiment conversations',
        'Classify escalations (user vs agent-initiated)',
        'Use spreadsheets and Jira for tracking'
      ]
    },
    {
      name: 'System Admin/Developer',
      icon: Wrench,
      color: 'cyan',
      focus: 'Implementation',
      responsibilities: [
        'Make changes to agent configuration',
        'Review topics, intents, optimization dashboards',
        'Work with QA to fix identified problems',
        'Deploy fixes from sandbox to production'
      ]
    }
  ];

  const escalationProcess = [
    { step: 1, title: 'Filter Intents', description: 'Look at all intents and filter for those with escalation', icon: Filter },
    { step: 2, title: 'Manual Review', description: 'Click through each conversation with multiple topics', icon: Eye },
    { step: 3, title: 'Session Trace Analysis', description: 'Read session traces to understand why agent failed', icon: FileSearch },
    { step: 4, title: 'Classify Escalation', description: 'Determine if user-initiated or agent-initiated', icon: GitBranch },
    { step: 5, title: 'Identify Root Cause', description: 'Action unavailable? Knowledge gap? Instruction issue?', icon: Search }
  ];

  const measurementMethods = [
    {
      metric: 'Topic Adherence',
      method: 'Session Trace + Agent Optimization',
      type: 'ootb',
      description: 'Uses built-in session tracing for evaluation'
    },
    {
      metric: 'Empathy Score',
      method: 'LLM as a Judge',
      type: 'llm',
      description: 'Custom LLM evaluates emotional intelligence'
    },
    {
      metric: 'Safety (Ungrounded)',
      method: 'Keyword Detection + LLM Classification',
      type: 'hybrid',
      description: 'Detects keywords, then LLM classifies failure reason'
    },
    {
      metric: 'Instruction Adherence',
      method: 'Custom Report on Session Data Model',
      type: 'custom',
      description: 'Built on STDM - requires dedicated team member'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'tracked': return 'status-tracked';
      case 'llm-judge': return 'status-llm';
      case 'custom': return 'status-custom';
      default: return 'status-default';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'ootb': return 'type-ootb';
      case 'llm': return 'type-llm';
      case 'hybrid': return 'type-hybrid';
      case 'custom': return 'type-custom';
      default: return 'type-default';
    }
  };

  return (
    <div className="lululemon-workflow-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Lululemon" />
      <header className="lululemon-header">
        <div className="header-badge">Lululemon × Agentforce</div>
        <h1 className="lululemon-title">Agent Monitoring Framework</h1>
        <p className="lululemon-subtitle">Open-source LLM Evaluation Framework with QA/QM Perspective</p>
        <div className="lululemon-date">December 2025</div>
      </header>

      {/* Navigation Tabs */}
      <nav className="workflow-nav" role="tablist">
        <button
          className={`nav-tab ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
          role="tab"
          aria-selected={activeSection === 'overview'}
        >
          <BarChart3 size={18} />
          <span>Metrics Overview</span>
        </button>
        <button
          className={`nav-tab ${activeSection === 'teams' ? 'active' : ''}`}
          onClick={() => setActiveSection('teams')}
          role="tab"
          aria-selected={activeSection === 'teams'}
        >
          <Users size={18} />
          <span>Team Roles</span>
        </button>
        <button
          className={`nav-tab ${activeSection === 'escalation' ? 'active' : ''}`}
          onClick={() => setActiveSection('escalation')}
          role="tab"
          aria-selected={activeSection === 'escalation'}
        >
          <AlertTriangle size={18} />
          <span>Escalation Review</span>
        </button>
        <button
          className={`nav-tab ${activeSection === 'measurement' ? 'active' : ''}`}
          onClick={() => setActiveSection('measurement')}
          role="tab"
          aria-selected={activeSection === 'measurement'}
        >
          <Scale size={18} />
          <span>How Metrics are Measured</span>
        </button>
      </nav>

      {/* Metrics Overview Section */}
      {activeSection === 'overview' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><ListChecks size={24} /> Monitored Metrics</h2>
            <p>Open-source LLM evaluation framework tracking 6 key dimensions</p>
          </div>
          <div className="metrics-grid">
            {metrics.map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <div key={idx} className={`metric-card ${getStatusColor(metric.status)}`}>
                  <div className="metric-icon">
                    <IconComponent size={28} />
                  </div>
                  <div className="metric-content">
                    <h3>{metric.name}</h3>
                    <p>{metric.description}</p>
                    <span className={`metric-status ${getStatusColor(metric.status)}`}>
                      {metric.status === 'tracked' && 'OOTB Tracked'}
                      {metric.status === 'llm-judge' && 'LLM as Judge'}
                      {metric.status === 'custom' && 'Custom Metric'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="insight-callout">
            <Lightbulb size={20} />
            <p>
              <strong>Key Insight:</strong> Customers prefer scorecards where an LLM is used as a 
              <em> workbench for validation</em> rather than the primary definition source. They want to 
              input their custom scorecard first, then use an LLM to score against it.
            </p>
          </div>
        </section>
      )}

      {/* Team Roles Section */}
      {activeSection === 'teams' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Users size={24} /> Team Roles & Responsibilities</h2>
            <p>Distinct roles involved in agent performance improvement</p>
          </div>
          <div className="teams-grid">
            {teams.map((team, idx) => {
              const IconComponent = team.icon;
              return (
                <div key={idx} className={`team-card team-${team.color}`}>
                  <div className={`team-icon team-${team.color}`}>
                    <IconComponent size={32} />
                  </div>
                  <h3>{team.name}</h3>
                  <span className="team-focus">{team.focus}</span>
                  <ul className="team-responsibilities">
                    {team.responsibilities.map((resp, i) => (
                      <li key={i}><ChevronRight size={14} /> {resp}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="workflow-diagram">
            <h3><Workflow size={20} /> Issue Resolution Flow</h3>
            <div className="resolution-flow">
              <div className="flow-step">
                <div className="flow-icon purple"><TrendingUp size={20} /></div>
                <span>Leadership defines scorecard</span>
              </div>
              <ArrowRight className="flow-arrow" size={24} />
              <div className="flow-step">
                <div className="flow-icon blue"><ClipboardCheck size={20} /></div>
                <span>QA identifies problems</span>
              </div>
              <ArrowRight className="flow-arrow" size={24} />
              <div className="flow-step">
                <div className="flow-icon cyan"><Wrench size={20} /></div>
                <span>Admin implements fixes</span>
              </div>
              <ArrowRight className="flow-arrow" size={24} />
              <div className="flow-step">
                <div className="flow-icon green"><CheckCircle size={20} /></div>
                <span>Deploy to production</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Escalation Review Section */}
      {activeSection === 'escalation' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><AlertTriangle size={24} /> Current Escalation Review Process</h2>
            <p>Manual workflow for understanding why agents fail before escalation</p>
          </div>
          
          <div className="escalation-warning">
            <Bug size={20} />
            <div>
              <strong>Pain Point:</strong> This is a highly manual, labor-intensive process. 
              The QA team reviews a high volume of sessions daily, often using spreadsheets and Jira boards.
            </div>
          </div>

          <div className="escalation-steps">
            {escalationProcess.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="escalation-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {idx < escalationProcess.length - 1 && (
                    <ArrowDown className="step-arrow" size={20} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="classification-box">
            <h4>Escalation Classification</h4>
            <div className="classification-options">
              <div className="classification-option user">
                <ThumbsUp size={20} />
                <div>
                  <strong>User-Initiated</strong>
                  <p>User actively chose to escalate</p>
                </div>
              </div>
              <div className="classification-option agent">
                <ThumbsDown size={20} />
                <div>
                  <strong>Agent-Initiated</strong>
                  <p>Agent couldn't answer effectively</p>
                </div>
              </div>
            </div>
          </div>

          <div className="root-causes">
            <h4>Common Root Causes Identified</h4>
            <div className="causes-grid">
              <div className="cause-item">
                <XCircle size={18} />
                <span>Action not available</span>
              </div>
              <div className="cause-item">
                <Database size={18} />
                <span>Knowledge gap</span>
              </div>
              <div className="cause-item">
                <FileText size={18} />
                <span>Knowledge needs updating</span>
              </div>
              <div className="cause-item">
                <Settings size={18} />
                <span>Instruction issue</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Measurement Methods Section */}
      {activeSection === 'measurement' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Scale size={24} /> How Metrics are Measured</h2>
            <p>Combination of OOTB tools, LLM as Judge, and custom reports</p>
          </div>

          <div className="measurement-table">
            <div className="measurement-header">
              <span>Metric</span>
              <span>Method</span>
              <span>Type</span>
            </div>
            {measurementMethods.map((item, idx) => (
              <div key={idx} className="measurement-row">
                <div className="measurement-metric">
                  <strong>{item.metric}</strong>
                </div>
                <div className="measurement-method">
                  <p>{item.method}</p>
                  <span className="method-desc">{item.description}</span>
                </div>
                <div className={`measurement-type ${getTypeColor(item.type)}`}>
                  {item.type === 'ootb' && 'Out-of-Box'}
                  {item.type === 'llm' && 'LLM Judge'}
                  {item.type === 'hybrid' && 'Hybrid'}
                  {item.type === 'custom' && 'Custom Report'}
                </div>
              </div>
            ))}
          </div>

          <div className="ungrounded-flow">
            <h4><Shield size={18} /> Ungrounded Response Handling</h4>
            <div className="ungrounded-steps">
              <div className="ungrounded-step">
                <span className="ungrounded-num">1</span>
                <p>Detect ungrounded response via keyword matching</p>
              </div>
              <ArrowRight size={20} />
              <div className="ungrounded-step">
                <span className="ungrounded-num">2</span>
                <p>Run session through classification prompt</p>
              </div>
              <ArrowRight size={20} />
              <div className="ungrounded-step">
                <span className="ungrounded-num">3</span>
                <p>LLM classifies failure reason</p>
              </div>
            </div>
            <div className="failure-reasons">
              <span className="reason-tag">Instruction Gap</span>
              <span className="reason-tag">Knowledge Gap</span>
              <span className="reason-tag">Fallback Phrase</span>
            </div>
          </div>

          <div className="pain-callout">
            <AlertTriangle size={20} />
            <div>
              <strong>Biggest Pain Point:</strong> Building custom reports and dashboards on the 
              Session Tracing Data Model (STDM) is difficult due to the number of different 
              Data Model Objects (DMOs). Often requires a dedicated team member to build.
            </div>
          </div>
        </section>
      )}

      <footer className="lululemon-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">FDEs / Agentforce Observability - December 16, 2025</span>
        </div>
        <a 
          href="?view=lululemon-ux" 
          className="ux-link"
          tabIndex={0}
          aria-label="View Lululemon UX Findings"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=lululemon-ux';
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

export default LululemonWorkflow;


