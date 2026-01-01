import React, { useState } from 'react';
import {
  GraduationCap, Users, MessageSquare, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp, Clock,
  BarChart2, Database, Layers, BookOpen, Headphones, Building, Filter,
  Table, FileText, Zap, HelpCircle
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './UNCCWorkflow.css';

const UNCCWorkflow = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const agents = [
    {
      id: 'it-support',
      name: 'IT Support Agent',
      icon: Settings,
      department: 'Information Technology',
      description: 'Handles IT-related questions and support requests for students, faculty, and staff',
      capabilities: [
        'Knowledge article retrieval',
        'Password reset guidance',
        'Software installation help',
        'Network connectivity issues',
        'Account access support'
      ],
      channel: 'Web Chat'
    },
    {
      id: 'student-services',
      name: 'Student Support Services',
      icon: GraduationCap,
      department: 'Student Affairs',
      description: 'Supports students with enrollment, advising, and campus services questions',
      capabilities: [
        'Enrollment guidance',
        'Academic advising FAQs',
        'Campus services information',
        'Student resource navigation',
        'General university questions'
      ],
      channel: 'Web Chat'
    }
  ];

  const observabilityFeatures = [
    {
      id: 'analytics',
      name: 'Analytics 2.0',
      status: 'available',
      description: 'Usage, adoption, deflection, engagement, and escalation metrics',
      details: [
        'Replaces standard reports and dashboards',
        'Powered by Tableau Next (bundled)',
        'Concentrated in Agent Force Studio',
        'Quality scoring by intent'
      ]
    },
    {
      id: 'optimization',
      name: 'Agent Optimization',
      status: 'available',
      description: 'Intent-based analysis for improving agent performance',
      details: [
        'Sessions split into intents using LLM',
        'Quality score per intent',
        'Similar intents grouped together',
        'Drill down to session logs'
      ]
    },
    {
      id: 'health',
      name: 'Agent Health Monitoring',
      status: 'beta',
      description: 'Near real-time monitoring of agent uptime and performance',
      details: [
        'Uptime monitoring',
        'Error rate tracking',
        'Response latency metrics',
        'Currently in pilot → beta soon'
      ]
    }
  ];

  const dataArchitecture = [
    {
      level: 'Session',
      description: 'Full customer journey / conversation',
      icon: MessageSquare,
      color: 'purple'
    },
    {
      level: 'Interaction',
      description: 'Exchange of messages (user question + agent response)',
      icon: Users,
      color: 'blue'
    },
    {
      level: 'Step',
      description: 'Topic trigger, action, flow, or prompt execution',
      icon: Zap,
      color: 'cyan'
    },
    {
      level: 'Intent',
      description: 'LLM-extracted request with response (may span interactions)',
      icon: HelpCircle,
      color: 'green'
    }
  ];

  const customReportingPath = [
    {
      step: 1,
      title: 'Semantic Data Model (SDM)',
      description: 'Agent Force Analytics Foundations - pre-built, locked SDM in Data Cloud',
      action: 'Clone to extend'
    },
    {
      step: 2,
      title: 'Clone & Customize',
      description: 'Create copy of SDM, add custom fields and calculated fields',
      action: 'Add dimensions'
    },
    {
      step: 3,
      title: 'Create Reports',
      description: 'Select SDM as report type - no manual entity joins needed',
      action: 'Build reports'
    },
    {
      step: 4,
      title: 'Natural Language (Future)',
      description: 'Query data using natural language, translated to SQL',
      action: 'Coming soon'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'status-green';
      case 'beta': return 'status-purple';
      default: return 'status-gray';
    }
  };

  return (
    <div className="uncc-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="UNCC" />
      
      <header className="uncc-header">
        <div className="header-badge">UNCC × Agentforce Observability</div>
        <h1 className="uncc-title">University Analytics Overview</h1>
        <p className="uncc-subtitle">Scaling Agent Force Across Campus</p>
        <div className="uncc-date">November 19, 2025</div>
      </header>

      {/* Navigation */}
      <nav className="uncc-nav">
        <button
          className={`uncc-tab ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          <GraduationCap size={18} />
          <span>Agents</span>
        </button>
        <button
          className={`uncc-tab ${activeSection === 'features' ? 'active' : ''}`}
          onClick={() => setActiveSection('features')}
        >
          <Eye size={18} />
          <span>Observability Features</span>
        </button>
        <button
          className={`uncc-tab ${activeSection === 'data' ? 'active' : ''}`}
          onClick={() => setActiveSection('data')}
        >
          <Database size={18} />
          <span>Data Architecture</span>
        </button>
        <button
          className={`uncc-tab ${activeSection === 'reporting' ? 'active' : ''}`}
          onClick={() => setActiveSection('reporting')}
        >
          <BarChart2 size={18} />
          <span>Custom Reporting</span>
        </button>
      </nav>

      {/* Agents Section */}
      {activeSection === 'overview' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><GraduationCap size={24} /> Campus Agents</h2>
            <p>Currently 2 agents, potentially consolidating to 1 unified agent</p>
          </div>

          <div className="agents-grid-uncc">
            {agents.map((agent) => {
              const IconComponent = agent.icon;
              const isExpanded = expandedItem === agent.id;
              return (
                <div
                  key={agent.id}
                  className={`agent-card-uncc ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(agent.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(agent.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="agent-header-uncc">
                    <div className="agent-icon-uncc">
                      <IconComponent size={32} />
                    </div>
                    <div className="agent-info-uncc">
                      <h3>{agent.name}</h3>
                      <span className="dept-badge">{agent.department}</span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <p className="agent-description-uncc">{agent.description}</p>
                  
                  {isExpanded && (
                    <div className="agent-details-uncc">
                      <div className="capabilities-section">
                        <h4>Capabilities</h4>
                        <ul>
                          {agent.capabilities.map((cap, idx) => (
                            <li key={idx}><ChevronRight size={14} /> {cap}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="channel-section">
                        <span className="channel-label">Channel:</span>
                        <span className="channel-value">{agent.channel}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="context-note-uncc">
            <Building size={18} />
            <div>
              <strong>Scaling Goal:</strong> "We are a university and we're planning to use agent force across campus. 
              Various departments. We want to be able to scale this out."
              <span className="quote-source">— Alexandra Flinn</span>
            </div>
          </div>
        </section>
      )}

      {/* Observability Features Section */}
      {activeSection === 'features' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Eye size={24} /> Observability Features</h2>
            <p>Three pillars of Agent Force observability</p>
          </div>

          <div className="features-grid">
            {observabilityFeatures.map((feature) => {
              const isExpanded = expandedItem === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`feature-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(feature.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(feature.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="feature-header">
                    <h3>{feature.name}</h3>
                    <span className={`status-badge ${getStatusColor(feature.status)}`}>
                      {feature.status}
                    </span>
                  </div>
                  <p className="feature-description">{feature.description}</p>
                  
                  {isExpanded && (
                    <div className="feature-details">
                      <ul>
                        {feature.details.map((detail, idx) => (
                          <li key={idx}><CheckCircle size={14} /> {detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="expand-hint">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sandbox-note">
            <AlertCircle size={18} />
            <div>
              <strong>Sandbox Support:</strong> Observability now works in sandbox, but production monitoring 
              is still essential. "You can't predict everything... there's no way around deploying the agent 
              and also monitoring in production."
              <span className="quote-source">— Itay Oren</span>
            </div>
          </div>
        </section>
      )}

      {/* Data Architecture Section */}
      {activeSection === 'data' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Database size={24} /> Session Tracing Data Model</h2>
            <p>Granular data hierarchy stored in Data Cloud</p>
          </div>

          <div className="data-hierarchy">
            {dataArchitecture.map((level, idx) => {
              const IconComponent = level.icon;
              return (
                <div key={level.level} className="hierarchy-level">
                  <div className={`level-icon ${level.color}`}>
                    <IconComponent size={24} />
                  </div>
                  <div className="level-content">
                    <h4>{level.level}</h4>
                    <p>{level.description}</p>
                  </div>
                  {idx < dataArchitecture.length - 1 && (
                    <div className="hierarchy-arrow">
                      <ChevronDown size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="intent-explanation">
            <Layers size={20} />
            <div>
              <h4>Intent-Based Evaluation</h4>
              <p>
                Sessions are split into "intents" using an external LLM. An intent is a request with a response 
                that may span multiple interactions. This allows quality scoring at a more granular level than 
                the full session.
              </p>
              <blockquote>
                "The session is not granular enough for evaluating the agent. We need something more granular."
                <span>— Itay Oren</span>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Custom Reporting Section */}
      {activeSection === 'reporting' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><BarChart2 size={24} /> Custom Reporting Path</h2>
            <p>Leverage the Semantic Data Model for custom reports</p>
          </div>

          <div className="reporting-steps">
            {customReportingPath.map((item) => (
              <div key={item.step} className="step-card-uncc">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="step-action">
                  <span>{item.action}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>

          <div className="sdm-benefits">
            <Table size={18} />
            <div>
              <h4>SDM Benefits</h4>
              <ul>
                <li>No need to manually join entities</li>
                <li>No need to create report types</li>
                <li>All fields and relationships pre-configured</li>
                <li>Clone to add custom fields and calculated fields</li>
                <li>Single source of truth for reporting</li>
              </ul>
            </div>
          </div>

          <div className="key-quote-uncc">
            <MessageSquare size={18} />
            <blockquote>
              "What we've done was saving a semantic data model... providing a clear representation of our 
              entities and how it's working together. You can quickly understand which dimensions are available 
              and what you can do with them."
              <span>— Itay Oren</span>
            </blockquote>
          </div>
        </section>
      )}

      <footer className="uncc-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">UNCC Observability Discussion - November 19, 2025</span>
        </div>
        <a 
          href="?view=uncc-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=uncc-ux';
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

export default UNCCWorkflow;

