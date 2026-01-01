import React, { useState } from 'react';
import { 
  Building2, Shield, Database, Eye, FileText, Settings, AlertTriangle, ArrowRight,
  Users, Lock, CheckCircle, XCircle, Search, Target, BookOpen, MessageSquare,
  Activity, Layers, ArrowDown, ChevronRight, ChevronUp, ChevronDown, Lightbulb, Bug, TrendingUp
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './PearsonWorkflow.css';

const PearsonWorkflow = () => {
  const [activeSection, setActiveSection] = useState('permissions');
  const [expandedStep, setExpandedStep] = useState(null);
  const [expandedTeam, setExpandedTeam] = useState(null);

  const handleStepClick = (step) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  const handleTeamClick = (name) => {
    setExpandedTeam(expandedTeam === name ? null : name);
  };

  const troubleshootingSteps = [
    { 
      step: 1, 
      title: 'Issue Reported', 
      description: 'UK team cannot access Analytics - page spins or shows error', 
      icon: AlertTriangle,
      details: [
        'UK pilot team (Gabrielle, Tish, Barry) completely unable to access',
        'Page shows infinite spinner when trying to load analytics',
        'Sometimes displays red error message',
        'Issue has been ongoing for ~2 weeks'
      ],
      quote: '"It\'s useless. We can\'t even get in there. We can\'t do anything."'
    },
    { 
      step: 2, 
      title: 'Permission Check', 
      description: 'Compared all permission sets - no differences found', 
      icon: Search,
      details: [
        'Rob Power spent a full week comparing profiles line-by-line',
        'All permission sets appear identical between working/non-working users',
        'Checked Agent Force Studio Analytics permission set group',
        'Found: Barry has Tableau Next Limited Viewer + Data Cloud User'
      ],
      quote: '"I\'ve compared every line in the profiles. I cannot figure out what it is."'
    },
    { 
      step: 3, 
      title: 'Data Model Validation', 
      description: 'Checked data spaces, DMOs, analytics install - all fine', 
      icon: Database,
      details: [
        'All DMOs mapped to default data space',
        'Agent Analytics v2.5 installed (up-to-date)',
        'Agent Interaction, Message Step, Session objects all present',
        'Some mapped to profile, some to engagement - no conflicts found'
      ],
      quote: '"If anything were mismatched here, it would not even be working for system admins."'
    },
    { 
      step: 4, 
      title: 'Semantic Layer Test', 
      description: 'Gabrielle can query data successfully via Semantic Layer', 
      icon: CheckCircle,
      details: [
        'Logged in as Gabrielle (standard user)',
        'Opened Semantic Layer → Service Agent Analytics SDM',
        'Ran test query on "agent API name" dimension',
        'Data returned successfully - proves data access is working'
      ],
      quote: '"Gabriella can see data. So, this is not an issue with the data. This is an issue with Tableau Next."'
    },
    { 
      step: 5, 
      title: 'Root Cause Found', 
      description: 'Tableau Next requires "Creator" license - standard users have "Limited Consumer"', 
      icon: Target,
      details: [
        'To access Tableau Next platform via app launcher, need "Creator" license',
        'Standard users only have "Tableau Next Limited Consumer"',
        'This license is insufficient for Analytics UI',
        'Permissions issue is specific to Tableau Next, not Data Cloud'
      ],
      quote: '"To actually access the Tableau Next platform from app launcher you need a different license... that\'s called Creator."'
    },
    { 
      step: 6, 
      title: 'Resolution', 
      description: 'Open case with Tableau Next team + share recording', 
      icon: FileText,
      details: [
        'Product is now GA (not pilot) - can open support cases',
        'Rob Power to open case and add Nicole as collaborator',
        'Share meeting recording with Tableau Next team (Caric)',
        'Recording shows live troubleshooting - no need for separate video'
      ],
      quote: '"I\'m going to share this recording with the Tableau Next team so they can have early access to this issue."'
    }
  ];

  const teams = [
    {
      name: 'UK Pilot Team',
      role: 'End Users',
      members: ['Gabrielle', 'Tish', 'Barry'],
      status: 'Blocked',
      issues: ['Cannot access analytics', 'Need documentation/training', 'Vocal about pain points'],
      details: [
        'Part of pilot group for Agent Analytics',
        'Very vocal at every opportunity about likes/dislikes',
        'Need to understand knowledge gaps in agent',
        'Want to see why agent scores differ from human evaluation',
        'Currently frustrated - cannot use the tool at all'
      ],
      quote: '"They\'re really struggling... they asked for documentation, like some sort of training on this."'
    },
    {
      name: 'Product Team',
      role: 'Support & Implementation',
      members: ['Nicole Lozano', 'Sara Metheny'],
      status: 'Active',
      issues: ['Relaying feedback', 'Creating documentation', 'Researching issues'],
      details: [
        'Walking UK team through analytics to identify pain points',
        'Recording offline session to demonstrate grievances',
        'Creating business-facing documentation (not just config)',
        'Attending prototype review for new analytics framework',
        'Trying to enhance agent with observability insights'
      ],
      quote: '"I\'m going to record a session offline and show you what some of their complaints are."'
    },
    {
      name: 'Admin Team',
      role: 'Configuration',
      members: ['Rob Power'],
      status: 'Troubleshooting',
      issues: ['Spent week chasing permissions', 'Opening support case'],
      details: [
        'Spent full week comparing permissions line-by-line',
        'Performed analytics upgrades for months',
        'Cannot find the root cause via permissions alone',
        'Will open case with Tableau Next team',
        'Add Nicole as collaborator on case'
      ],
      quote: '"I\'ve spent a week just trying to chase down permissions myself. I can\'t see what it is."'
    }
  ];

  const agentContext = {
    region: 'UK (Non-US Educational System)',
    verticals: ['Qualifications', 'Assessment', 'Courseware'],
    topics: ['Knowledge Base', 'Order Management', 'Multifactor Authentication (MFA)'],
    successStory: 'MFA process works well - big driver for adoption'
  };

  return (
    <div className="pearson-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Pearson" />
      <header className="pearson-header">
        <div className="header-badge">Pearson × Agentforce</div>
        <h1 className="pearson-title">UK Education Agent Analytics</h1>
        <p className="pearson-subtitle">Permissions Troubleshooting & Data Extraction Challenges</p>
        <div className="pearson-date">December 15, 2025</div>
      </header>

      {/* Navigation Tabs */}
      <nav className="pearson-nav" role="tablist">
        <button
          className={`pearson-tab ${activeSection === 'permissions' ? 'active' : ''}`}
          onClick={() => setActiveSection('permissions')}
          role="tab"
        >
          <Lock size={18} />
          <span>Permissions Issue</span>
        </button>
        <button
          className={`pearson-tab ${activeSection === 'teams' ? 'active' : ''}`}
          onClick={() => setActiveSection('teams')}
          role="tab"
        >
          <Users size={18} />
          <span>Teams Involved</span>
        </button>
        <button
          className={`pearson-tab ${activeSection === 'context' ? 'active' : ''}`}
          onClick={() => setActiveSection('context')}
          role="tab"
        >
          <BookOpen size={18} />
          <span>Agent Context</span>
        </button>
      </nav>

      {/* Permissions Issue Section */}
      {activeSection === 'permissions' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Lock size={24} /> Permissions Troubleshooting Workflow</h2>
            <p>6-step investigation to identify Tableau Next licensing issue</p>
          </div>

          <div className="permission-alert">
            <AlertTriangle size={20} />
            <div>
              <strong>Critical Issue:</strong> Analytics page only works for local admins. Standard users 
              see infinite spinner or error. Promoting to admin temporarily fixes it.
            </div>
          </div>

          <div className="troubleshooting-flow">
            {troubleshootingSteps.map((step, idx) => {
              const IconComponent = step.icon;
              const isExpanded = expandedStep === step.step;
              return (
                <div key={idx} className="troubleshooting-step-wrapper">
                  <div 
                    className={`troubleshooting-step ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => handleStepClick(step.step)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleStepClick(step.step);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isExpanded}
                  >
                    <div className="step-number">{step.step}</div>
                    <div className="step-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                    <div className="step-expand-icon">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="step-details">
                      <div className="step-details-list">
                        <strong>Details:</strong>
                        <ul>
                          {step.details.map((detail, i) => (
                            <li key={i}><ChevronRight size={14} /> {detail}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="step-quote">
                        <MessageSquare size={14} />
                        <span>{step.quote}</span>
                      </div>
                    </div>
                  )}
                  {idx < troubleshootingSteps.length - 1 && (
                    <ArrowDown className="step-arrow" size={20} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="solution-box">
            <h4><Target size={18} /> Root Cause & Solution</h4>
            <div className="solution-content">
              <div className="solution-item problem">
                <XCircle size={20} />
                <div>
                  <strong>Problem</strong>
                  <p>Standard users have "Tableau Next Limited Consumer" license</p>
                </div>
              </div>
              <ArrowRight size={24} className="solution-arrow" />
              <div className="solution-item solution">
                <CheckCircle size={20} />
                <div>
                  <strong>Required</strong>
                  <p>"Creator" license needed to access Tableau Next via app launcher</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Teams Section */}
      {activeSection === 'teams' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Users size={24} /> Teams & Roles</h2>
            <p>Key stakeholders in the Pearson UK agent implementation</p>
          </div>

          <div className="teams-grid">
            {teams.map((team, idx) => {
              const isExpanded = expandedTeam === team.name;
              return (
                <div 
                  key={idx} 
                  className={`team-card status-${team.status.toLowerCase()} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleTeamClick(team.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleTeamClick(team.name);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="team-header">
                    <h3>{team.name}</h3>
                    <span className={`team-status status-${team.status.toLowerCase()}`}>{team.status}</span>
                  </div>
                  <div className="team-role">{team.role}</div>
                  <div className="team-members">
                    {team.members.map((member, i) => (
                      <span key={i} className="member-chip">{member}</span>
                    ))}
                  </div>
                  <div className="team-issues">
                    <strong>Current Issues:</strong>
                    <ul>
                      {team.issues.map((issue, i) => (
                        <li key={i}><ChevronRight size={14} /> {issue}</li>
                      ))}
                    </ul>
                  </div>
                  {isExpanded && (
                    <div className="team-details">
                      <strong>Additional Details:</strong>
                      <ul>
                        {team.details.map((detail, i) => (
                          <li key={i}><CheckCircle size={14} /> {detail}</li>
                        ))}
                      </ul>
                      <div className="team-quote">
                        <MessageSquare size={14} />
                        <span>{team.quote}</span>
                      </div>
                    </div>
                  )}
                  <div className="team-expand-icon">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Agent Context Section */}
      {activeSection === 'context' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><BookOpen size={24} /> UK Agent Context</h2>
            <p>Dedicated UK agent for qualifications, assessments, and courseware</p>
          </div>

          <div className="context-grid">
            <div className="context-card">
              <h4><Building2 size={18} /> Region</h4>
              <p>{agentContext.region}</p>
              <span className="context-note">European school systems - foreign terminology for US team</span>
            </div>

            <div className="context-card">
              <h4><Layers size={18} /> Business Verticals</h4>
              <ul>
                {agentContext.verticals.map((v, i) => (
                  <li key={i}><ChevronRight size={14} /> {v}</li>
                ))}
              </ul>
            </div>

            <div className="context-card">
              <h4><Target size={18} /> Deployed Topics</h4>
              <ul>
                {agentContext.topics.map((t, i) => (
                  <li key={i}><ChevronRight size={14} /> {t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="success-highlight">
            <Lightbulb size={20} />
            <div>
              <strong>Success Story:</strong> {agentContext.successStory}
            </div>
          </div>

          <div className="goal-box">
            <h4><TrendingUp size={18} /> Team's Goal</h4>
            <p>Understand where the agent has knowledge gaps and why agent scoring differs from human evaluation.</p>
          </div>
        </section>
      )}

      <footer className="pearson-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Pearson Analytics Feedback - December 15, 2025</span>
        </div>
        <a 
          href="?view=pearson-ux" 
          className="ux-link"
          tabIndex={0}
          aria-label="View Pearson UX Findings"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=pearson-ux';
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

export default PearsonWorkflow;

