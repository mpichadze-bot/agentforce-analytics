import React, { useState } from 'react';
import {
  Users, MessageSquare, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp,
  BarChart2, Target, FileText, HelpCircle, Percent, Lock,
  RefreshCw, Zap, Building, Search, Download, Database, Clock,
  TrendingUp, Shield, Tag, Sliders, Share2, UserCheck, Info,
  Layers, PieChart, MessageCircle, Sparkles, Layout
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './FDEWorkflow.css';

const FDEWorkflow = () => {
  const [activeSection, setActiveSection] = useState('dreamforce');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const sessionContext = {
    team: 'FDE Deployment Strategists',
    date: 'October 29, 2025',
    focus: 'Dreamforce Customer Feedback',
    attendees: [
      { name: 'Courtney Guc', role: 'FDE' },
      { name: 'Chris Gray', role: 'Deployment Strategist' },
      { name: 'Sergio Morales', role: 'FDE (8yr CRM Experience)' },
      { name: 'Itay Oren', role: 'PM - Optimization' },
      { name: 'Nir Tzavchon', role: 'PM - Agent Analytics' },
      { name: 'Shiv Ramanna', role: 'Observability Agent' }
    ]
  };

  const dreamforceFeedback = [
    {
      id: 'metric-definitions',
      icon: Info,
      title: 'Metrics Not Understood',
      feedback: 'Customers did not understand the metrics and desired readily available definitions',
      quote: '"I can\'t screenshot this for my execs"',
      resolution: 'Hover over metric card → "View Metric Info" (not intuitive)',
      status: 'workaround'
    },
    {
      id: 'sharing-unclear',
      icon: Share2,
      title: 'Sharing Capabilities Unclear',
      feedback: 'Customers wanted to share insights with service line business leaders',
      quote: 'How do I share this with my leadership?',
      resolution: 'Users need Tableau Next Limited license, then share link',
      status: 'limitation'
    },
    {
      id: 'target-audience',
      icon: Users,
      title: 'Target Audience Confusion',
      feedback: 'Agent builders vs service managers have different needs',
      quote: 'Service managers found actual numbers more useful than percentages',
      resolution: 'Numbers + line shape preferred by new users',
      status: 'feedback'
    },
    {
      id: 'metric-ranges',
      icon: Sliders,
      title: 'Metric Ranges Not Clear',
      feedback: 'While items show "within range," specific upper/lower values not displayed',
      quote: 'What are the acceptable ranges?',
      resolution: 'Need Tableau Next Plus license to customize',
      status: 'limitation'
    },
    {
      id: 'case-resolution',
      icon: Clock,
      title: 'Missing Case Resolution Metrics',
      feedback: 'No "case resolution time when agent assisted" metric',
      quote: 'FedEx wants to measure Agent Force impact on case resolution time',
      resolution: 'Out of scope - requires custom reporting',
      status: 'gap'
    },
    {
      id: 'llm-scoring',
      icon: Sparkles,
      title: 'LLM Scoring Not Customizable',
      feedback: 'High/medium/low scoring is fixed, customers want to tweak prompts',
      quote: 'Customers have varying needs: sentiment, coherence, completeness',
      resolution: 'Planned: Custom prompts + build own quality metrics',
      status: 'roadmap'
    }
  ];

  const upcomingFeatures = [
    {
      title: 'Custom Tags',
      description: 'Tag product mentions, competitors, custom sentiment (0-5)',
      useCase: 'Show sessions where "XYZ Cloud" mentioned and escalated',
      status: 'In Progress',
      internalName: 'Unified Evals / Agent Force Evals'
    },
    {
      title: 'PII Masking',
      description: 'Mask sensitive data (SSN, etc.) based on user permissions',
      useCase: 'Data Cloud layer solution - visibility based on permissions',
      status: 'Pilot Next Month',
      internalName: 'Data Cloud Permission Queries'
    },
    {
      title: 'Custom Quality Metrics',
      description: 'Combine data points (completeness, sentiment) for custom scores',
      useCase: 'Define quality scores aligned with business needs',
      status: 'Planned',
      internalName: 'Observability Data Points'
    },
    {
      title: 'Customer Sentiment Metric',
      description: 'Separate metric for actual customer sentiment (not just response quality)',
      useCase: 'Track customer satisfaction after chat',
      status: 'Coming with Custom Tags',
      internalName: 'Out-of-box Sentiment'
    }
  ];

  const architectureNotes = [
    {
      component: 'Optimization Page',
      type: 'Lightning Web Component (LWC)',
      note: 'Standard visualizations, modifiable with LWC changes',
      reason: 'Tableau Next lacks flexibility needed'
    },
    {
      component: 'Agent Analytics',
      type: 'Tableau Next',
      note: 'Powered by Tableau Next dashboards',
      reason: 'Richer visualization capabilities'
    },
    {
      component: 'Metric Widgets',
      type: 'Not modifiable',
      note: 'Page is LWC but widgets themselves may not be editable',
      reason: 'Architecture limitation'
    }
  ];

  const competitorWatch = {
    name: 'Wayfound',
    description: 'Perceived competitor at Dreamforce offering recommendations for agent improvement',
    focus: 'Initially governance/policies, now entering observability space',
    action: 'Team will monitor closely'
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'workaround': { bg: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', text: 'Workaround Available' },
      'limitation': { bg: 'rgba(239, 68, 68, 0.2)', color: '#f87171', text: 'Limitation' },
      'feedback': { bg: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', text: 'Feedback Noted' },
      'gap': { bg: 'rgba(239, 68, 68, 0.2)', color: '#f87171', text: 'Feature Gap' },
      'roadmap': { bg: 'rgba(16, 185, 129, 0.2)', color: '#34d399', text: 'On Roadmap' }
    };
    const config = statusConfig[status] || statusConfig.feedback;
    return (
      <span className="status-badge" style={{ background: config.bg, color: config.color }}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="fde-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="FDE Team" />
      
      <header className="fde-header">
        <div className="header-badge">FDE Deployment Strategists × Observability</div>
        <h1 className="fde-title">Dreamforce Feedback Session</h1>
        <p className="fde-subtitle">Aggregated Customer Feedback from Dreamforce 2025</p>
        <div className="fde-date">October 29, 2025</div>
      </header>

      {/* Attendees */}
      <section className="attendees-section">
        <h3><Users size={18} /> Session Attendees</h3>
        <div className="attendees-grid">
          {sessionContext.attendees.map((attendee, idx) => (
            <div key={idx} className="attendee-card">
              <span className="attendee-name">{attendee.name}</span>
              <span className="attendee-role">{attendee.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <nav className="fde-nav">
        <button
          className={`fde-tab ${activeSection === 'dreamforce' ? 'active' : ''}`}
          onClick={() => setActiveSection('dreamforce')}
        >
          <MessageSquare size={18} />
          <span>Dreamforce Feedback</span>
        </button>
        <button
          className={`fde-tab ${activeSection === 'roadmap' ? 'active' : ''}`}
          onClick={() => setActiveSection('roadmap')}
        >
          <TrendingUp size={18} />
          <span>Upcoming Features</span>
        </button>
        <button
          className={`fde-tab ${activeSection === 'architecture' ? 'active' : ''}`}
          onClick={() => setActiveSection('architecture')}
        >
          <Layers size={18} />
          <span>Architecture Notes</span>
        </button>
      </nav>

      {/* Dreamforce Feedback Section */}
      {activeSection === 'dreamforce' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><MessageSquare size={24} /> Customer Feedback from Dreamforce</h2>
            <p>Key pain points raised by customers during Dreamforce demos</p>
          </div>

          <div className="feedback-list">
            {dreamforceFeedback.map((item) => {
              const IconComponent = item.icon;
              const isExpanded = expandedItem === item.id;
              return (
                <div
                  key={item.id}
                  className={`feedback-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="feedback-header">
                    <div className="feedback-icon">
                      <IconComponent size={20} />
                    </div>
                    <div className="feedback-title">
                      <h4>{item.title}</h4>
                      {getStatusBadge(item.status)}
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                  
                  <p className="feedback-desc">{item.feedback}</p>
                  
                  {isExpanded && (
                    <div className="feedback-details">
                      <div className="detail-quote">
                        <MessageCircle size={14} />
                        <span>{item.quote}</span>
                      </div>
                      <div className="detail-resolution">
                        <CheckCircle size={14} />
                        <span><strong>Resolution:</strong> {item.resolution}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="popular-section">
            <h3><Target size={20} /> Most Popular Feature</h3>
            <div className="popular-card">
              <PieChart size={32} />
              <div>
                <h4>Topic/Intent Performance Section</h4>
                <p>"Customers felt this should be the focus of the entire product"</p>
              </div>
            </div>
          </div>

          <div className="competitor-section">
            <h3><Eye size={20} /> Competitor Watch</h3>
            <div className="competitor-card">
              <div className="competitor-header">
                <span className="competitor-name">{competitorWatch.name}</span>
                <span className="watch-badge">Monitoring</span>
              </div>
              <p>{competitorWatch.description}</p>
              <p className="competitor-focus"><strong>Focus:</strong> {competitorWatch.focus}</p>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Features Section */}
      {activeSection === 'roadmap' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><TrendingUp size={24} /> Upcoming Features</h2>
            <p>Planned capabilities to address customer feedback</p>
          </div>

          <div className="features-grid">
            {upcomingFeatures.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-header">
                  <h4>{feature.title}</h4>
                  <span className={`feature-status ${feature.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {feature.status}
                  </span>
                </div>
                <p className="feature-desc">{feature.description}</p>
                <div className="feature-usecase">
                  <strong>Use Case:</strong>
                  <p>{feature.useCase}</p>
                </div>
                <div className="feature-internal">
                  <code>{feature.internalName}</code>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Architecture Notes Section */}
      {activeSection === 'architecture' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Layers size={24} /> Architecture Notes</h2>
            <p>Technical distinction between visualization components</p>
          </div>

          <div className="architecture-grid">
            {architectureNotes.map((note, idx) => (
              <div key={idx} className="architecture-card">
                <div className="arch-header">
                  <h4>{note.component}</h4>
                  <span className="arch-type">{note.type}</span>
                </div>
                <p>{note.note}</p>
                <div className="arch-reason">
                  <AlertCircle size={14} />
                  <span>{note.reason}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="key-distinction">
            <h3><Layout size={20} /> Key Distinction</h3>
            <div className="distinction-content">
              <div className="distinction-item lwc">
                <h4>Optimization Page</h4>
                <p>Lightning Web Component (LWC) - Standard visualizations</p>
                <span className="tag">Tableau Next lacks flexibility</span>
              </div>
              <div className="distinction-arrow">→</div>
              <div className="distinction-item tableau">
                <h4>Agent Analytics</h4>
                <p>Powered by Tableau Next dashboards</p>
                <span className="tag">Richer visualizations</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="fde-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">FDE Deployment Strategists Feedback Session - Oct 29, 2025</span>
        </div>
        <a 
          href="?view=fde-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=fde-ux';
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

export default FDEWorkflow;

