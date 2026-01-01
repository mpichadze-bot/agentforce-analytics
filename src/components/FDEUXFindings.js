import React, { useState } from 'react';
import {
  Eye, AlertCircle, CheckCircle, XCircle, Clock, Target,
  ChevronDown, ChevronUp, ArrowRight, TrendingUp, Building,
  Lightbulb, MessageSquare, BarChart2, Lock, RefreshCw, Zap,
  Database, Settings, Users, Activity, FileText, Info,
  Shield, Search, Share2, Sliders, Tag, Sparkles, UserCheck,
  PieChart, Layers
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './FDEUXFindings.css';

const FDEUXFindings = () => {
  const [expandedPainPoint, setExpandedPainPoint] = useState(null);

  const handlePainPointClick = (id) => {
    setExpandedPainPoint(expandedPainPoint === id ? null : id);
  };

  const meetingContext = {
    source: 'FDE Deployment Strategists',
    date: 'October 29, 2025',
    focus: 'Dreamforce Customer Feedback',
    scope: 'Aggregated feedback from multiple customers'
  };

  const painPoints = [
    {
      id: 'metric-understanding',
      severity: 'high',
      category: 'Usability',
      title: 'Metrics Not Understood by Customers',
      description: 'Customers at Dreamforce did not understand metrics and desired readily available definitions',
      impact: 'Cannot present to executives, erodes trust in data',
      quote: '"I can\'t screenshot this for my execs"',
      workaround: 'Hover over metric card → "View Metric Info" (not intuitive)'
    },
    {
      id: 'sharing-confusion',
      severity: 'high',
      category: 'Collaboration',
      title: 'Sharing Capabilities Unclear',
      description: 'Customers wanted to share insights with service line business leaders but unclear how',
      impact: 'Limited adoption, siloed insights',
      quote: 'How do we share this with leadership?',
      workaround: 'Recipients need Tableau Next Limited license, then share link'
    },
    {
      id: 'audience-mismatch',
      severity: 'medium',
      category: 'Design',
      title: 'Target Audience Confusion',
      description: 'Agent builders vs service managers have different needs; percentages vs numbers',
      impact: 'Product doesn\'t serve either audience well',
      quote: 'Service managers found actual numbers more useful than percentages',
      workaround: 'None - design decision needed'
    },
    {
      id: 'range-opacity',
      severity: 'medium',
      category: 'Transparency',
      title: 'Metric Ranges Not Visible',
      description: 'Items show "within range" but specific upper/lower values are not displayed',
      impact: 'Cannot set or validate business-appropriate ranges',
      quote: 'What are the acceptable ranges?',
      workaround: 'Need Tableau Next Plus (Creator) license to customize'
    },
    {
      id: 'missing-case-resolution',
      severity: 'high',
      category: 'Feature Gap',
      title: 'No Case Resolution Time Metric',
      description: 'No "case resolution time when agent assisted" metric to measure Agent Force value',
      impact: 'Cannot prove ROI of Agent Force enablement',
      quote: 'FedEx wants to measure Agent Force impact on case resolution',
      workaround: 'Requires custom reporting - out of scope for dashboards'
    },
    {
      id: 'llm-not-customizable',
      severity: 'high',
      category: 'Customization',
      title: 'LLM Scoring Not Customizable',
      description: 'High/medium/low scoring is fixed; customers cannot tweak prompts or criteria',
      impact: 'Score may not align with business definition of quality',
      quote: 'Customers have varying needs: sentiment, coherence, completeness',
      workaround: 'Planned: Custom prompts + build own quality metrics'
    },
    {
      id: 'no-custom-tags',
      severity: 'medium',
      category: 'Analysis',
      title: 'No Custom Tagging',
      description: 'Cannot tag product mentions, competitors, or custom sentiment scores',
      impact: 'Cannot slice data by business-relevant categories',
      quote: 'Show sessions where "XYZ Cloud" mentioned and escalated',
      workaround: 'In progress: "Unified Evals" / "Agent Force Evals"'
    },
    {
      id: 'pii-concerns',
      severity: 'high',
      category: 'Security',
      title: 'PII Masking Concerns',
      description: 'Sensitive info (SSN, etc.) visible in chat transcripts without permission controls',
      impact: 'Compliance and security risk',
      quote: 'How do we handle social security numbers in transcripts?',
      workaround: 'Data Cloud pilot next month - mask based on permissions'
    },
    {
      id: 'session-contact-link',
      severity: 'low',
      category: 'Navigation',
      title: 'Sessions Not Linked to Contacts',
      description: 'Cannot easily navigate from messaging session to specific contact/user',
      impact: 'Must manually review transcripts to identify user',
      quote: 'Can we link sessions to the actual contact?',
      workaround: 'Button on right side navigates to messaging session (if data exists)'
    },
    {
      id: 'sentiment-vs-quality',
      severity: 'medium',
      category: 'Metrics',
      title: 'Quality Score ≠ Customer Sentiment',
      description: 'Quality score measures response quality, not actual customer satisfaction',
      impact: 'May miss frustrated customers with technically "good" responses',
      quote: 'Is there a metric for customer satisfaction after chat?',
      workaround: 'Sentiment metric coming with custom tags feature'
    }
  ];

  const desiredFeatures = [
    {
      icon: Info,
      title: 'Intuitive Metric Definitions',
      description: 'CRM-style "info buttons" for immediate metric explanations',
      priority: 'High',
      currentState: 'Hidden behind hover → "View Metric Info"'
    },
    {
      icon: Sliders,
      title: 'Customizable Metric Ranges',
      description: 'Set business-appropriate upper/lower bounds for metrics',
      priority: 'High',
      currentState: 'Requires Tableau Next Plus license'
    },
    {
      icon: Sparkles,
      title: 'Custom LLM Scoring Prompts',
      description: 'Tweak quality score criteria to match business definitions',
      priority: 'High',
      currentState: 'Fixed high/medium/low scoring'
    },
    {
      icon: Tag,
      title: 'Custom Tagging System',
      description: 'Tag products, competitors, custom sentiment (0-5)',
      priority: 'High',
      currentState: 'In development (Unified Evals)'
    },
    {
      icon: Clock,
      title: 'Case Resolution Time Metrics',
      description: 'Compare resolution time with/without Agent Force',
      priority: 'High',
      currentState: 'Out of scope - requires custom reporting'
    },
    {
      icon: Shield,
      title: 'Permission-Based PII Masking',
      description: 'Mask sensitive data based on user permissions',
      priority: 'Critical',
      currentState: 'Data Cloud pilot next month'
    }
  ];

  const keyInsights = [
    {
      icon: PieChart,
      label: 'Topic/Intent Section Most Popular',
      insight: 'Customers felt the topic/intent performance section should be the focus of the entire product',
      implication: 'Consider reorganizing product around this capability'
    },
    {
      icon: Users,
      label: 'Audience Needs Differ',
      insight: 'Agent builders care less about optimization; service managers prefer numbers over percentages',
      implication: 'May need persona-specific views or customization'
    },
    {
      icon: Layers,
      label: 'LWC vs Tableau Next',
      insight: 'Optimization page uses LWC because Tableau Next lacks flexibility needed',
      implication: 'Mixed architecture until Tableau Next matures'
    },
    {
      icon: Eye,
      label: 'Wayfound Competitor',
      insight: 'Wayfound at Dreamforce offers agent improvement recommendations based on conversations',
      implication: 'Team monitoring - initially governance, now observability'
    }
  ];

  const customerMention = {
    name: 'FedEx',
    context: 'Current client providing feedback once set up on full suite',
    priorities: ['Monitoring', 'Testing', 'Agent revamping'],
    specificNeed: 'Measuring Agent Force impact on case resolution time'
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#f97316';
    }
  };

  return (
    <div className="fde-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="FDE Team" />
      
      <header className="fde-ux-header">
        <div className="header-badge">Dreamforce UX Research</div>
        <h1 className="fde-ux-title">FDE Team Feedback Analysis</h1>
        <p className="fde-ux-subtitle">
          Aggregated pain points from Dreamforce customer demos
        </p>
        <div className="header-meta">
          <span className="meta-item">
            <Users size={14} />
            {meetingContext.source}
          </span>
          <span className="meta-item">
            <Clock size={14} />
            {meetingContext.date}
          </span>
          <span className="meta-item">
            <Target size={14} />
            {meetingContext.focus}
          </span>
        </div>
      </header>

      {/* Pain Points Section */}
      <section className="ux-section">
        <div className="section-header">
          <h2><AlertCircle size={24} /> Dreamforce Pain Points</h2>
          <p>Key issues raised by customers during product demos</p>
        </div>

        <div className="pain-points-grid">
          {painPoints.map((point) => {
            const isExpanded = expandedPainPoint === point.id;
            return (
              <div
                key={point.id}
                className={`pain-point-card ${point.severity} ${isExpanded ? 'expanded' : ''}`}
                onClick={() => handlePainPointClick(point.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePainPointClick(point.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
              >
                <div className="pain-point-header">
                  <div 
                    className="severity-indicator" 
                    style={{ backgroundColor: getSeverityColor(point.severity) }}
                  />
                  <span className="category-tag">{point.category}</span>
                  <span className="expand-icon">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </div>
                
                <h4>{point.title}</h4>
                <p className="pain-desc">{point.description}</p>
                
                {isExpanded && (
                  <div className="pain-point-details">
                    <div className="detail-block impact">
                      <strong>Impact:</strong>
                      <p>{point.impact}</p>
                    </div>
                    
                    <div className="detail-block quote">
                      <MessageSquare size={14} />
                      <p>"{point.quote}"</p>
                    </div>
                    
                    <div className="detail-block workaround">
                      <CheckCircle size={14} />
                      <div>
                        <strong>Workaround:</strong>
                        <p>{point.workaround}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Customer Mention */}
      <section className="ux-section">
        <div className="section-header">
          <h2><Building size={24} /> Customer Mentioned</h2>
          <p>Specific customer referenced during feedback session</p>
        </div>

        <div className="customer-mention-card">
          <div className="customer-header">
            <h3>{customerMention.name}</h3>
            <span className="customer-status">Providing Feedback</span>
          </div>
          <p className="customer-context">{customerMention.context}</p>
          <div className="customer-priorities">
            <strong>Priorities:</strong>
            <div className="priority-tags">
              {customerMention.priorities.map((priority, idx) => (
                <span key={idx} className="priority-tag">{priority}</span>
              ))}
            </div>
          </div>
          <div className="specific-need">
            <Target size={14} />
            <span><strong>Specific Need:</strong> {customerMention.specificNeed}</span>
          </div>
        </div>
      </section>

      {/* Desired Features Section */}
      <section className="ux-section">
        <div className="section-header">
          <h2><Lightbulb size={24} /> Desired Features</h2>
          <p>Capabilities requested to address customer pain points</p>
        </div>

        <div className="features-grid">
          {desiredFeatures.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="feature-card">
                <div className="feature-header">
                  <div className="feature-icon">
                    <IconComponent size={20} />
                  </div>
                  <span className={`priority-tag ${feature.priority.toLowerCase()}`}>
                    {feature.priority}
                  </span>
                </div>
                <h4>{feature.title}</h4>
                <p className="feature-desc">{feature.description}</p>
                <div className="current-state">
                  <strong>Current State:</strong>
                  <p>{feature.currentState}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="ux-section">
        <div className="section-header">
          <h2><TrendingUp size={24} /> Key Insights</h2>
          <p>Important takeaways from Dreamforce feedback</p>
        </div>

        <div className="insights-grid">
          {keyInsights.map((insight, idx) => {
            const IconComponent = insight.icon;
            return (
              <div key={idx} className="insight-card">
                <div className="insight-icon">
                  <IconComponent size={20} />
                </div>
                <div className="insight-content">
                  <h4>{insight.label}</h4>
                  <p className="insight-text">{insight.insight}</p>
                  <p className="insight-implication">
                    <ArrowRight size={12} />
                    {insight.implication}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="fde-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">FDE Deployment Strategists Feedback Session - Oct 29, 2025</span>
        </div>
        <a 
          href="?view=fde-workflow" 
          className="workflow-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=fde-workflow';
          }}
        >
          <Settings size={16} />
          <span>View Workflow</span>
          <ArrowRight size={16} />
        </a>
      </footer>
    </div>
  );
};

export default FDEUXFindings;

