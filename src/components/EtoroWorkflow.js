import React, { useState } from 'react';
import {
  Users, Settings, Database, ArrowRight, CheckCircle, AlertCircle,
  Eye, Activity, ChevronRight, ChevronDown, ChevronUp, MessageSquare,
  Lock, Unlock, BarChart2, UserCheck, UserX, Calculator, Filter,
  Table, Layers, Link2, PieChart
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './EtoroWorkflow.css';

const EtoroWorkflow = () => {
  const [activeSection, setActiveSection] = useState('problem');
  const [expandedStep, setExpandedStep] = useState(null);

  const handleStepClick = (id) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  const problemContext = {
    current: {
      label: "Current State",
      metric: "Active User Rate",
      formula: "Daily Active Users / Monthly Active Users",
      result: "~6%",
      issue: "Dividing by ALL agents in Salesforce, not just ops team"
    },
    desired: {
      label: "Desired State",
      metric: "Active User Rate (Correct)",
      formula: "Active Users / Assigned Users (Permission Set)",
      result: "141 / 167 = 84%",
      note: "Only count users with Copilot access"
    }
  };

  const walkthroughSteps = [
    {
      id: 1,
      title: "Access Agent for Studio",
      status: "workaround",
      description: "Dashboard not displaying? Use the workaround.",
      details: [
        "Open Service Console",
        "Click app selector (top left)",
        "Switch to 'Service Lex Service' app",
        "Open Agent for Studio in new tab",
        "Data should now display"
      ],
      quote: "If they're in the service console and opening studio in a second tab, for some reason it does show data.",
      source: "Nir Tzavchon"
    },
    {
      id: 2,
      title: "Identify Locked Fields",
      status: "limitation",
      description: "Existing calculated fields cannot be edited.",
      details: [
        "Active user rate field is locked",
        "Cannot modify formula or logic",
        "Must create new custom metric",
        "New metrics won't appear in Studio reports"
      ],
      quote: "This calculated field is locked. You can't edit this one. You'll need to spin off a new metric on your own.",
      source: "Nir Tzavchon"
    },
    {
      id: 3,
      title: "Switch to Data Cloud Console",
      status: "action",
      description: "Move to Data Cloud for custom report creation.",
      details: [
        "Go to Data Cloud console view",
        "Access the semantic model",
        "Sync required data objects",
        "Build custom calculated fields"
      ],
      quote: "This is not the most desired experience but we'll work our way from there.",
      source: "Nir Tzavchon"
    },
    {
      id: 4,
      title: "Sync Permission Objects",
      status: "action",
      description: "Add permission set and assignment objects to semantic model.",
      details: [
        "Click '+' on Data Objects",
        "Add 'Permission Set' object",
        "Add 'Permission Set Assignment' object",
        "Join permission set to assignment",
        "Link assignment to AI Agent Session Participant (assignee ID → participant ID)"
      ],
      quote: "Join the permission set and permission set assignment objects, then link to the AI agent session participant table.",
      source: "Nir Tzavchon"
    },
    {
      id: 5,
      title: "Create 'Assigned Users' Metric",
      status: "action",
      description: "Build a new calculated field for total assigned users.",
      details: [
        "Create new calculated field",
        "Name it 'Assigned Users' or 'Measure Unique Users'",
        "Use COUNT_D function on Assignee ID",
        "This counts total users with access"
      ],
      quote: "Create a new calculated field called 'assigned users' using the aggregate function 'count D' on the assignee ID.",
      source: "Nir Tzavchon"
    },
    {
      id: 6,
      title: "Calculate Correct Active User Rate",
      status: "success",
      description: "Divide unique users by measure unique users.",
      details: [
        "Unique Users = 28 (active users)",
        "Measure Unique Users = 117 (assigned users)",
        "Active User Rate = 28 / 117 = 24%",
        "Can create another calculated field for this ratio"
      ],
      quote: "So if I would divide unique users by measure unique users, I would have the actual active user rate.",
      source: "Jakub Kekus"
    },
    {
      id: 7,
      title: "Identify Non-Active Users",
      status: "success",
      description: "Filter to show users with zero interactions.",
      details: [
        "Add filter: unique_users = 0",
        "Join User table to get full names",
        "Export list for adoption campaigns",
        "This becomes your 'mailing list'"
      ],
      quote: "This could be your mailing list. Hey Anita, start using it!",
      source: "Nir Tzavchon"
    }
  ];

  const keyMetrics = [
    { label: "Active Salesforce Users", value: "167", icon: Users, color: "blue" },
    { label: "Assigned to Copilot", value: "117", icon: UserCheck, color: "green" },
    { label: "Actually Using", value: "28", icon: Activity, color: "purple" },
    { label: "Not Using", value: "89", icon: UserX, color: "red" }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle size={18} />;
      case 'workaround': return <AlertCircle size={18} />;
      case 'limitation': return <Lock size={18} />;
      default: return <ArrowRight size={18} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'status-success';
      case 'workaround': return 'status-warning';
      case 'limitation': return 'status-error';
      default: return 'status-action';
    }
  };

  return (
    <div className="etoro-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="eToro" />
      
      <header className="etoro-header">
        <div className="header-badge">eToro × Agentforce</div>
        <h1 className="etoro-title">Copilot Adoption Dashboard</h1>
        <p className="etoro-subtitle">Adding Custom Rubrics & Metrics Walkthrough</p>
        <div className="etoro-date">November 19, 2025</div>
      </header>

      {/* Key Metrics */}
      <section className="metrics-overview">
        {keyMetrics.map((metric, idx) => {
          const IconComponent = metric.icon;
          return (
            <div key={idx} className={`metric-card-etoro ${metric.color}`}>
              <div className={`metric-icon-wrap ${metric.color}`}>
                <IconComponent size={24} />
              </div>
              <div className="metric-info">
                <span className="metric-value-etoro">{metric.value}</span>
                <span className="metric-label-etoro">{metric.label}</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Navigation */}
      <nav className="etoro-nav">
        <button
          className={`etoro-tab ${activeSection === 'problem' ? 'active' : ''}`}
          onClick={() => setActiveSection('problem')}
        >
          <AlertCircle size={18} />
          <span>Problem</span>
        </button>
        <button
          className={`etoro-tab ${activeSection === 'walkthrough' ? 'active' : ''}`}
          onClick={() => setActiveSection('walkthrough')}
        >
          <Layers size={18} />
          <span>Walkthrough</span>
        </button>
        <button
          className={`etoro-tab ${activeSection === 'outcome' ? 'active' : ''}`}
          onClick={() => setActiveSection('outcome')}
        >
          <CheckCircle size={18} />
          <span>Outcome</span>
        </button>
      </nav>

      {/* Problem Section */}
      {activeSection === 'problem' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><AlertCircle size={24} /> The Problem: Wrong Formula</h2>
            <p>Active user rate calculation was dividing by the wrong population</p>
          </div>

          <div className="formula-comparison">
            <div className="formula-card wrong">
              <div className="formula-badge">❌ Current (Wrong)</div>
              <h4>{problemContext.current.metric}</h4>
              <div className="formula-box">
                <code>{problemContext.current.formula}</code>
              </div>
              <div className="formula-result">
                <span className="result-value">{problemContext.current.result}</span>
                <span className="result-note">{problemContext.current.issue}</span>
              </div>
            </div>

            <div className="formula-arrow">
              <ArrowRight size={32} />
            </div>

            <div className="formula-card correct">
              <div className="formula-badge">✓ Desired (Correct)</div>
              <h4>{problemContext.desired.metric}</h4>
              <div className="formula-box">
                <code>{problemContext.desired.formula}</code>
              </div>
              <div className="formula-result">
                <span className="result-value">{problemContext.desired.result}</span>
                <span className="result-note">{problemContext.desired.note}</span>
              </div>
            </div>
          </div>

          <div className="terminology-note">
            <MessageSquare size={18} />
            <div>
              <strong>Terminology Issue:</strong> The existing "Active User Rate" is actually a 
              <strong> Stickiness Rate</strong> (users who used Copilot at least once in 30 days). 
              True active user rate should use assigned users as denominator.
            </div>
          </div>
        </section>
      )}

      {/* Walkthrough Section */}
      {activeSection === 'walkthrough' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Layers size={24} /> Step-by-Step Walkthrough</h2>
            <p>How to create custom metrics in Data Cloud</p>
          </div>

          <div className="walkthrough-steps">
            {walkthroughSteps.map((step) => {
              const isExpanded = expandedStep === step.id;
              return (
                <div
                  key={step.id}
                  className={`walkthrough-step ${getStatusColor(step.status)} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleStepClick(step.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleStepClick(step.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="step-header">
                    <div className="step-number">{step.id}</div>
                    <div className={`step-status-icon ${getStatusColor(step.status)}`}>
                      {getStatusIcon(step.status)}
                    </div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                    <div className="step-expand">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="step-details">
                      <ul className="step-details-list">
                        {step.details.map((detail, idx) => (
                          <li key={idx}><ChevronRight size={14} /> {detail}</li>
                        ))}
                      </ul>
                      <div className="step-quote">
                        <MessageSquare size={14} />
                        <div>
                          <p>"{step.quote}"</p>
                          <span>— {step.source}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Outcome Section */}
      {activeSection === 'outcome' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><CheckCircle size={24} /> Outcome & Next Steps</h2>
            <p>What was achieved and what's still needed</p>
          </div>

          <div className="outcome-grid">
            <div className="outcome-card achieved">
              <h4><CheckCircle size={18} /> Achieved</h4>
              <ul>
                <li>Dashboard access workaround found</li>
                <li>Custom 'Assigned Users' metric created</li>
                <li>Correct active user rate calculation (28/117 = 24%)</li>
                <li>Non-active users list for adoption campaigns</li>
                <li>User names linked to usage data</li>
                <li>Team grouping capability confirmed</li>
              </ul>
            </div>

            <div className="outcome-card pending">
              <h4><AlertCircle size={18} /> Still Needed</h4>
              <ul>
                <li>Case linkage integration (% of cases with Copilot)</li>
                <li>Potential utilization metric (cases with Copilot / total cases)</li>
                <li>Frequency analysis (how often users engage)</li>
                <li>Feature usage breakdown</li>
                <li>Long-term fix for Studio report editing</li>
              </ul>
            </div>
          </div>

          <div className="future-vision">
            <PieChart size={20} />
            <div>
              <strong>Future Goal:</strong> "If Mateusz is using Salesforce for 1,000 cases a day and only 
              200 cases use Copilot, then the potential would be 200 out of 1000 = 20%. We want to measure 
              what percentage of all Salesforce work uses Copilot."
              <span className="vision-source">— Avi Kuzi</span>
            </div>
          </div>
        </section>
      )}

      <footer className="etoro-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Copilot Dashboard Walkthrough - November 19, 2025</span>
        </div>
        <a 
          href="?view=etoro-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=etoro-ux';
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

export default EtoroWorkflow;

