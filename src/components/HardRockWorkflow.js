import React, { useState } from 'react';
import {
  Smartphone, Globe, MessageSquare, Users, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp, Clock,
  BarChart2, UserCheck, UserX, Target, Zap, HelpCircle, Hotel, Music,
  ThumbsUp, ThumbsDown, Layers
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './HardRockWorkflow.css';

const HardRockWorkflow = () => {
  const [activeSection, setActiveSection] = useState('agents');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const agents = [
    {
      id: 'roadie',
      name: 'Roadie',
      icon: Smartphone,
      type: 'SMS Agent',
      description: 'Transactional customer service for in-house hotel guests via SMS text',
      useCases: [
        'Dining reservations',
        'Spa reservations',
        'Housekeeping requests',
        'Maintenance requests',
        'Property FAQ questions',
        'Escalation to customer care'
      ],
      channels: ['QR code scan', 'Saved number (return guests)', 'Proactive messaging'],
      owner: 'Lisa - Customer Care Team'
    },
    {
      id: 'melody',
      name: 'Melody',
      icon: Globe,
      type: 'Web Bot',
      description: 'AI web chat on casino, loyalty, and reservation sites',
      useCases: [
        'FAQ responses (scrapes sites)',
        'Unity loyalty points lookup (authenticated)',
        'Tier and level information',
        'Room reservation assistance',
        'Redirect to booking with pre-populated fields'
      ],
      channels: ['Casino sites', 'Loyalty site', 'Reservation sites'],
      owner: 'Ruben Akopyan - Customer Care Team'
    }
  ];

  const metricsStatus = [
    { metric: 'Total chats initiated', status: 'available', note: 'Session started vs engaged session distinction' },
    { metric: 'Top 10 topics/intents', status: 'available', note: 'New: intents grouped and associated daily' },
    { metric: 'Average chat duration', status: 'available', note: 'Focused on moments, session duration in semantic model' },
    { metric: 'Average messages per chat', status: 'available', note: 'Interactions, turns, agent latency per interaction' },
    { metric: 'Peak chat times', status: 'custom', note: 'Data available, needs custom report on semantic model' },
    { metric: 'Repeat vs first-time users', status: 'backlog', note: 'Tough without auth; Unity ID or phone for SMS' },
    { metric: 'Device type / IP / location', status: 'gap', note: 'Not captured - instrumentation gap' },
    { metric: 'Top pages where chat triggered', status: 'gap', note: 'Not captured by Salesforce' },
    { metric: 'Time on site before chat', status: 'gap', note: 'Not captured - need Adobe Analytics integration' },
    { metric: 'Conversation quality score', status: 'coming', note: 'Q1: Inferential satisfaction 0-5 per session' },
    { metric: 'Intent recognition accuracy', status: 'complex', note: 'Combine user intent + quality score + confidence' },
    { metric: 'Actionable insights (flows)', status: 'coming', note: 'Trigger cases/CRM updates based on low sentiment' }
  ];

  const analytics2Changes = [
    {
      before: "Go build your own reports from Data Cloud",
      after: "Enhanced dashboards with moments, scores, and summaries",
      quote: "A month and a half ago... we were told go and get your own reports. Now you guys have done it."
    },
    {
      before: "No conversation splitting",
      after: "Conversations split into moments with individual scores",
      quote: "Splits conversations into moments and gives each its own score."
    },
    {
      before: "No intent grouping",
      after: "Daily intent association and grouping",
      quote: "Each day we associate new intents into groups. If there's not enough volume, it waits."
    },
    {
      before: "Topics = configured only",
      after: "Topics + actual intents collision view",
      quote: "You can see the collision between intents and configured topics."
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available': return <CheckCircle size={16} />;
      case 'custom': return <Settings size={16} />;
      case 'coming': return <Clock size={16} />;
      case 'backlog': return <AlertCircle size={16} />;
      case 'gap': return <UserX size={16} />;
      case 'complex': return <HelpCircle size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'status-green';
      case 'custom': return 'status-blue';
      case 'coming': return 'status-purple';
      case 'backlog': return 'status-yellow';
      case 'gap': return 'status-red';
      case 'complex': return 'status-orange';
      default: return 'status-gray';
    }
  };

  return (
    <div className="hardrock-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Hard Rock" />
      
      <header className="hardrock-header">
        <div className="header-badge">Hard Rock × Agentforce</div>
        <h1 className="hardrock-title">Agent Analytics 2.0 Discussion</h1>
        <p className="hardrock-subtitle">Melody & Roadie Metrics Requirements</p>
        <div className="hardrock-date">November 12, 2025</div>
      </header>

      {/* Navigation */}
      <nav className="hardrock-nav">
        <button
          className={`hardrock-tab ${activeSection === 'agents' ? 'active' : ''}`}
          onClick={() => setActiveSection('agents')}
        >
          <Music size={18} />
          <span>Agents</span>
        </button>
        <button
          className={`hardrock-tab ${activeSection === 'metrics' ? 'active' : ''}`}
          onClick={() => setActiveSection('metrics')}
        >
          <BarChart2 size={18} />
          <span>Metrics Status</span>
        </button>
        <button
          className={`hardrock-tab ${activeSection === 'changes' ? 'active' : ''}`}
          onClick={() => setActiveSection('changes')}
        >
          <Zap size={18} />
          <span>Analytics 2.0</span>
        </button>
      </nav>

      {/* Agents Section */}
      {activeSection === 'agents' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Music size={24} /> Hard Rock Agents</h2>
            <p>Two agents serving hotel guests and loyalty members</p>
          </div>

          <div className="agents-grid">
            {agents.map((agent) => {
              const IconComponent = agent.icon;
              const isExpanded = expandedItem === agent.id;
              return (
                <div
                  key={agent.id}
                  className={`agent-card-hr ${isExpanded ? 'expanded' : ''}`}
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
                  <div className="agent-header-hr">
                    <div className="agent-icon-hr">
                      <IconComponent size={32} />
                    </div>
                    <div className="agent-info-hr">
                      <h3>{agent.name}</h3>
                      <span className="agent-type-badge">{agent.type}</span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <p className="agent-description-hr">{agent.description}</p>
                  
                  {isExpanded && (
                    <div className="agent-details-hr">
                      <div className="use-cases-section">
                        <h4>Use Cases</h4>
                        <ul>
                          {agent.useCases.map((uc, idx) => (
                            <li key={idx}><ChevronRight size={14} /> {uc}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="channels-section">
                        <h4>Channels</h4>
                        <div className="channel-chips">
                          {agent.channels.map((ch, idx) => (
                            <span key={idx} className="channel-chip">{ch}</span>
                          ))}
                        </div>
                      </div>
                      <div className="owner-section">
                        <span className="owner-label">Owner:</span>
                        <span className="owner-value">{agent.owner}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="context-note">
            <MessageSquare size={18} />
            <div>
              <strong>Key Context:</strong> "I learned to hate chat bots. The good thing is that I learned that 
              our customers also hate chat bots. So we're looking at these as agents rather than chat bots."
              <span className="quote-source">— Shira Gershoni, VP Product Management</span>
            </div>
          </div>
        </section>
      )}

      {/* Metrics Status Section */}
      {activeSection === 'metrics' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><BarChart2 size={24} /> Metrics Availability</h2>
            <p>Status of requested metrics for Melody & Roadie</p>
          </div>

          <div className="metrics-legend">
            <span className="legend-item status-green"><CheckCircle size={14} /> Available</span>
            <span className="legend-item status-blue"><Settings size={14} /> Custom Report</span>
            <span className="legend-item status-purple"><Clock size={14} /> Coming Q1</span>
            <span className="legend-item status-yellow"><AlertCircle size={14} /> Backlog</span>
            <span className="legend-item status-red"><UserX size={14} /> Gap</span>
            <span className="legend-item status-orange"><HelpCircle size={14} /> Complex</span>
          </div>

          <div className="metrics-list-hr">
            {metricsStatus.map((item, idx) => (
              <div key={idx} className={`metric-row ${getStatusColor(item.status)}`}>
                <div className={`metric-status-icon ${getStatusColor(item.status)}`}>
                  {getStatusIcon(item.status)}
                </div>
                <div className="metric-content-hr">
                  <h4>{item.metric}</h4>
                  <p>{item.note}</p>
                </div>
                <div className={`metric-status-badge ${getStatusColor(item.status)}`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Analytics 2.0 Changes */}
      {activeSection === 'changes' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Zap size={24} /> Analytics 2.0 Changes</h2>
            <p>What changed from "build your own" to enhanced dashboards</p>
          </div>

          <div className="changes-list">
            {analytics2Changes.map((change, idx) => (
              <div key={idx} className="change-card">
                <div className="change-comparison">
                  <div className="change-before">
                    <ThumbsDown size={16} />
                    <div>
                      <span className="change-label">Before</span>
                      <p>{change.before}</p>
                    </div>
                  </div>
                  <ArrowRight size={24} className="change-arrow" />
                  <div className="change-after">
                    <ThumbsUp size={16} />
                    <div>
                      <span className="change-label">After</span>
                      <p>{change.after}</p>
                    </div>
                  </div>
                </div>
                <div className="change-quote">
                  <MessageSquare size={14} />
                  <span>"{change.quote}"</span>
                </div>
              </div>
            ))}
          </div>

          <div className="roadmap-note">
            <Layers size={18} />
            <div>
              <strong>Phased Approach:</strong>
              <ol>
                <li>Store the data ✓</li>
                <li>Provide insights on your agent ✓</li>
                <li>Provide recommendations (coming)</li>
                <li>Auto-fix with approval (future)</li>
              </ol>
            </div>
          </div>
        </section>
      )}

      <footer className="hardrock-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">SHRSS Analytics Discussion - November 12, 2025</span>
        </div>
        <a 
          href="?view=hardrock-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=hardrock-ux';
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

export default HardRockWorkflow;

