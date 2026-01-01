import React, { useState } from 'react';
import {
  Eye, AlertCircle, CheckCircle, XCircle, Clock, Target,
  ChevronDown, ChevronUp, ArrowRight, TrendingUp, Building,
  Lightbulb, MessageSquare, BarChart2, Lock, RefreshCw, Zap,
  Database, CreditCard, Settings, Users, Activity, FileText,
  Shield, Search, AlertTriangle
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import '../styles/workflow-obsidian.css';

const AllegisUXFindings = () => {
  const [expandedPainPoint, setExpandedPainPoint] = useState(null);

  const handlePainPointClick = (id) => {
    setExpandedPainPoint(expandedPainPoint === id ? null : id);
  };

  const painPoints = [
    {
      id: 'no-tableau-next',
      severity: 'critical',
      category: 'Access',
      icon: XCircle,
      title: 'Cannot Access Tableau Next UI',
      description: 'Legacy conversation SKU prevents access to out-of-box reporting through Tableau Next',
      impact: 'Must build custom reports until Flex switch, more manual work required',
      quote: 'Because they\'re on conversations, we can\'t fire up Tableau Next which gets the out of the box reporting.',
      workaround: 'Query semantic data model directly to build custom reports and dashboards'
    },
    {
      id: 'consumption-zero',
      severity: 'critical',
      category: 'Tracking',
      icon: CreditCard,
      title: 'Consumption Cards Show Zero',
      description: 'Even for conversation-based agents, consumption cards display zero consumed',
      impact: 'Cannot accurately forecast credit usage during development',
      quote: 'When you saw the consumption cards even on the conversations for the ASA it still said zero consumed.',
      workaround: 'Build custom analysis on session tracing with interaction step object'
    },
    {
      id: 'realtime-consumption',
      severity: 'critical',
      category: 'Need',
      icon: Zap,
      title: 'No Real-Time Consumption Analysis',
      description: 'Need debug-style tool showing credits per action step in real-time during development',
      impact: 'Cannot forecast credit usage when testing sequences of actions',
      quote: 'Need real time or near real time capability to evaluate consumption... how many credits are burned during a sequence of actions.',
      workaround: 'Use interaction step object to project flex credit costs based on invoked actions'
    },
    {
      id: 'user-discrepancy',
      severity: 'high',
      category: 'Data',
      icon: Users,
      title: 'User Count Discrepancy',
      description: 'Report shows 12 unique users despite assigning employee agent to 2,000 users',
      impact: 'Cannot accurately track user adoption metrics',
      quote: 'We basically assigned this employee agent to almost 2,000 users. So it\'s showing only 12.',
      workaround: 'Increase sample size in queries or use custom reports for verification'
    },
    {
      id: 'full-refresh',
      severity: 'high',
      category: 'Performance',
      icon: RefreshCw,
      title: 'DMOS Full Refresh Instead of Incremental',
      description: 'Data refresh history shows full refreshes of 4.8M records rather than incremental updates',
      impact: 'High credit consumption, was turned off by Salesforce support',
      quote: 'The refresh history showed full refreshes of 4.8 million records instead of incrementals.',
      workaround: 'Disable legacy agent analytics and use session tracing data model instead'
    },
    {
      id: 'permissions-issue',
      severity: 'high',
      category: 'Access',
      icon: Lock,
      title: 'Non-Admin Users Cannot See Studio Tabs',
      description: 'Users with same permission sets as admins cannot see Agent Force Studio tabs unless made system administrator',
      impact: 'Limits who can access observability features',
      quote: 'I can\'t see any tabs in Agent Force Studio unless I\'m made a system administrator.',
      workaround: 'Work with Salesforce support to resolve permissions configuration'
    }
  ];

  const desiredFeatures = [
    {
      icon: Zap,
      title: 'Real-Time Credit Debugging',
      description: 'Debug tool showing credit consumption per action step',
      priority: 'Critical',
      useCase: 'During development, test an agent and see: "Step 1: 5 credits, Step 2: 10 credits..." in real-time'
    },
    {
      icon: BarChart2,
      title: 'User Adoption Metrics',
      description: 'Accurate count of users actively using agents',
      priority: 'Critical',
      useCase: 'Track how many of 2,000 assigned users are actually engaging with employee agent'
    },
    {
      icon: Database,
      title: 'Custom Reports Without Tableau Next',
      description: 'Full reporting capabilities on semantic data model',
      priority: 'Critical',
      useCase: 'Build dashboards showing agent performance without needing Tableau Next license'
    },
    {
      icon: Activity,
      title: 'Forecasting Tools',
      description: 'Predict agent performance and identify issues',
      priority: 'High',
      useCase: 'Prevent runaway issues and identify nefarious activities in real-time'
    },
    {
      icon: RefreshCw,
      title: 'Incremental Data Refresh',
      description: 'Efficient data updates without full table refreshes',
      priority: 'High',
      useCase: 'Reduce credit consumption and enable faster data availability'
    }
  ];

  const keyInsights = [
    {
      icon: Database,
      label: 'Semantic Model Access',
      insight: 'Even without Tableau Next UI, can build queries and custom reports on semantic data model',
      implication: 'Legacy SKU customers still have access to underlying analytics data'
    },
    {
      icon: RefreshCw,
      label: 'Legacy Retirement',
      insight: 'Agent Analytics (legacy) is scheduled for retirement in April 2025',
      implication: 'Customers should migrate to session tracing data model'
    },
    {
      icon: Clock,
      label: 'Refresh Rates',
      insight: 'Session tracing data model refreshes up to every 15 minutes',
      implication: 'Not real-time but more frequent than expected'
    },
    {
      icon: Shield,
      label: 'No Data Loss',
      insight: 'Disabling legacy agent analytics does not cause loss of historical data',
      implication: 'Safe to migrate without losing session history'
    }
  ];

  const getSeverityClass = (severity) => {
    switch (severity) {
      case 'critical': return 'critical';
      case 'high': return 'high';
      case 'medium': return 'medium';
      default: return 'low';
    }
  };

  return (
    <div className="obsidian-workflow">
      <NavigationHeader currentPage="UX Findings" customerName="Allegis" />
      
      <div className="obsidian-workflow-content">
        {/* Header */}
        <header className="obsidian-header">
          <div className="obsidian-badge">
            <Eye size={14} />
            UX Research Findings
          </div>
          <h1 className="obsidian-title">Allegis Observability Analysis</h1>
          <p className="obsidian-subtitle">Pain points and needs from early adopter on legacy SKU</p>
          <div className="obsidian-meta">
            <span className="obsidian-meta-item">
              <Building size={14} />
              Allegis
            </span>
            <span className="obsidian-meta-item">
              <Clock size={14} />
              September 2025
            </span>
            <span className="obsidian-meta-item">
              <Target size={14} />
              Observability & Reporting
            </span>
          </div>
        </header>

        {/* Stats Overview */}
        <div className="obsidian-grid-4" style={{ marginBottom: '2rem' }}>
          <div className="obsidian-stat">
            <div className="obsidian-stat-value">{painPoints.length}</div>
            <div className="obsidian-stat-label">Pain Points</div>
          </div>
          <div className="obsidian-stat">
            <div className="obsidian-stat-value">{painPoints.filter(p => p.severity === 'critical').length}</div>
            <div className="obsidian-stat-label">Critical Issues</div>
          </div>
          <div className="obsidian-stat">
            <div className="obsidian-stat-value">{desiredFeatures.length}</div>
            <div className="obsidian-stat-label">Desired Features</div>
          </div>
          <div className="obsidian-stat">
            <div className="obsidian-stat-value">{keyInsights.length}</div>
            <div className="obsidian-stat-label">Key Insights</div>
          </div>
        </div>

        {/* Pain Points Section */}
        <section className="obsidian-section">
          <div className="obsidian-section-header">
            <h2><AlertCircle size={24} /> Critical Pain Points</h2>
            <p>Key challenges discovered during observability discussion</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {painPoints.map((point) => {
              const IconComponent = point.icon;
              const isExpanded = expandedPainPoint === point.id;
              return (
                <div
                  key={point.id}
                  className={`obsidian-card obsidian-expandable ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handlePainPointClick(point.id)}
                  style={{ cursor: 'pointer', position: 'relative', paddingLeft: '1.75rem' }}
                >
                  <div className={`severity-bar ${getSeverityClass(point.severity)}`} />
                  
                  <div className="obsidian-card-header" style={{ marginBottom: isExpanded ? '1rem' : 0 }}>
                    <div className={`obsidian-card-icon ${point.severity === 'critical' ? 'red' : 'orange'}`}>
                      <IconComponent size={20} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                        <h4 className="obsidian-card-title" style={{ margin: 0 }}>{point.title}</h4>
                        <span className={`obsidian-tag ${getSeverityClass(point.severity)}`}>
                          {point.severity}
                        </span>
                        <span className="obsidian-tag info">{point.category}</span>
                      </div>
                      <p className="obsidian-card-desc">{point.description}</p>
                    </div>
                    <ChevronDown size={18} className="expand-indicator" />
                  </div>
                  
                  {isExpanded && (
                    <div className="obsidian-card-expanded">
                      <div className="obsidian-detail">
                        <AlertCircle size={16} className="obsidian-detail-icon" style={{ color: '#f97316' }} />
                        <div>
                          <div className="obsidian-detail-label">Impact</div>
                          <div className="obsidian-detail-value">{point.impact}</div>
                        </div>
                      </div>
                      
                      <div className="obsidian-quote">
                        <MessageSquare size={16} className="obsidian-quote-icon" />
                        <div>
                          <p className="obsidian-quote-text">"{point.quote}"</p>
                        </div>
                      </div>
                      
                      <div className="obsidian-detail">
                        <CheckCircle size={16} className="obsidian-detail-icon" style={{ color: '#22c55e' }} />
                        <div>
                          <div className="obsidian-detail-label">Workaround</div>
                          <div className="obsidian-detail-value">{point.workaround}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Desired Features Section */}
        <section className="obsidian-section">
          <div className="obsidian-section-header">
            <h2><Lightbulb size={24} /> Desired Features</h2>
            <p>Capabilities requested to improve observability experience</p>
          </div>

          <div className="obsidian-grid-3">
            {desiredFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="obsidian-card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div className="obsidian-card-icon cyan">
                      <IconComponent size={20} />
                    </div>
                    <span className={`obsidian-tag ${feature.priority === 'Critical' ? 'critical' : 'high'}`}>
                      {feature.priority}
                    </span>
                  </div>
                  <h4 className="obsidian-card-title" style={{ marginBottom: '0.5rem' }}>{feature.title}</h4>
                  <p className="obsidian-card-desc" style={{ marginBottom: '1rem' }}>{feature.description}</p>
                  <div style={{ 
                    padding: '0.75rem', 
                    background: 'rgba(0, 0, 0, 0.2)', 
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: '#a1a1aa'
                  }}>
                    <strong style={{ color: '#00d4ff' }}>Use Case:</strong> {feature.useCase}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="obsidian-section">
          <div className="obsidian-section-header">
            <h2><TrendingUp size={24} /> Key Insights</h2>
            <p>Important takeaways from the discussion</p>
          </div>

          <div className="obsidian-grid-2">
            {keyInsights.map((insight, idx) => {
              const IconComponent = insight.icon;
              return (
                <div key={idx} className="obsidian-insight">
                  <div className="obsidian-insight-icon">
                    <IconComponent size={20} />
                  </div>
                  <div className="obsidian-insight-content">
                    <h4>{insight.label}</h4>
                    <p className="obsidian-insight-text">{insight.insight}</p>
                    <p className="obsidian-insight-implication">
                      <ArrowRight size={12} />
                      {insight.implication}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Action Items */}
        <section className="obsidian-section">
          <div className="obsidian-section-header">
            <h2><Target size={24} /> Action Items</h2>
            <p>Next steps from the meeting</p>
          </div>

          <div className="obsidian-grid-2">
            <div className="obsidian-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="obsidian-card-icon orange">
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#71717a' }}>Owner: Abhijit Mahato</div>
                  <div style={{ color: '#e4e4e7', fontWeight: 500 }}>Disable agent analytics in setup</div>
                </div>
              </div>
            </div>
            <div className="obsidian-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="obsidian-card-icon orange">
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#71717a' }}>Owner: Jeff Grosse</div>
                  <div style={{ color: '#e4e4e7', fontWeight: 500 }}>Take lead in exploring observability issues</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="obsidian-footer">
          <div className="obsidian-footer-info">
            <span className="obsidian-footer-label">Source</span>
            <span className="obsidian-footer-value">Critical Agentforce Observability Reporting Discussion - September 2025</span>
          </div>
          <a 
            href="?view=allegis-workflow" 
            className="obsidian-footer-link"
            onClick={(e) => {
              e.preventDefault();
              window.location = window.location.origin + window.location.pathname + '?view=allegis-workflow';
            }}
          >
            <Settings size={16} />
            View Workflow
            <ArrowRight size={16} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AllegisUXFindings;
