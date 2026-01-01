import React, { useState } from 'react';
import { Zap, Users, ChevronRight, Layers, BarChart2, Tag, Search, Download, Shield, Clock, Quote, ChevronDown } from 'lucide-react';

// Top Requested Features derived from pain points analysis
const topFeatures = [
  {
    id: 1,
    title: 'Customizable Dashboards',
    shortDesc: 'Add/remove metrics, create custom views, adjust acceptable ranges',
    fullDesc: 'Enable users to personalize their analytics experience by adding or removing metric widgets, creating saved custom views for different use cases, and adjusting acceptable threshold ranges for alerts. Current dashboards are static with locked calculated fields that cannot be edited.',
    customerCount: 14,
    priority: 'critical',
    icon: Layers,
    customers: ['Indeed', 'Cellebrite', 'Nexo', 'Lululemon', 'Pearson', 'FedEx', 'eToro', 'Hard Rock', 'UNCC', 'Astound', 'Secret Escapes', 'Allegis', 'FDE Team', 'Help Agent'],
    keyQuote: 'I wish I could customize the dashboard... add my own columns and filters.',
    quoteSource: 'Cellebrite'
  },
  {
    id: 2,
    title: 'Click-through Navigation',
    shortDesc: 'Click on metrics to drill into corresponding sessions',
    fullDesc: 'Allow users to click on any aggregate metric and immediately see the underlying individual sessions. Currently, there\'s a major bug that prevents clicking from dashboard metrics to session details.',
    customerCount: 10,
    priority: 'critical',
    icon: ChevronRight,
    customers: ['NVIDIA', 'Cellebrite', 'Nexo', 'Help Agent', 'Lululemon', 'eToro', 'Hard Rock', 'Secret Escapes', 'Oniverse', 'Allegis'],
    keyQuote: 'We want to interact more with the dashboards but can\'t navigate to messaging session directly.',
    quoteSource: 'NVIDIA'
  },
  {
    id: 3,
    title: 'Custom Tagging & Annotations',
    shortDesc: 'Tag sessions with custom labels, add notes, flag for review',
    fullDesc: 'Enable users to create custom tags (e.g., "bug", "needs review") and apply them to individual sessions. Include annotation capabilities to add context notes and track resolution status.',
    customerCount: 7,
    priority: 'critical',
    icon: Tag,
    customers: ['Cellebrite', 'Lululemon', 'Help Agent', 'Indeed', 'Pearson', 'NVIDIA', 'FDE Team'],
    keyQuote: 'I want to flag this session as a bug but there\'s no way to do that in the tool.',
    quoteSource: 'Cellebrite'
  },
  {
    id: 4,
    title: 'Clear Metric Definitions',
    shortDesc: 'In-app tooltips explaining what each metric means',
    fullDesc: 'Add contextual help next to every metric showing: what it measures, how it\'s calculated, what triggers it, and what a "good" value looks like. Current metrics have unclear definitions that don\'t match customer expectations.',
    customerCount: 8,
    priority: 'critical',
    icon: BarChart2,
    customers: ['FDE Team', 'eToro', 'Cellebrite', 'Nexo', 'Help Agent', 'Astound', 'Secret Escapes', 'Allegis'],
    keyQuote: 'We measure engagement based on end-user messages - your definition is guided by your commercial model.',
    quoteSource: 'Secret Escapes'
  },
  {
    id: 5,
    title: 'Export Session Data',
    shortDesc: 'Download session data for offline analysis',
    fullDesc: 'Provide a direct export feature to download session data in CSV/Excel format. Currently, users must navigate complex data transforms or manually copy data.',
    customerCount: 7,
    priority: 'high',
    icon: Download,
    customers: ['Indeed', 'Cellebrite', 'Nexo', 'Help Agent', 'Lululemon', 'Pearson', 'Oniverse'],
    keyQuote: 'I literally have to export everything to Excel and manually tag each session.',
    quoteSource: 'Cellebrite'
  },
  {
    id: 6,
    title: 'Channel/Department Filtering',
    shortDesc: 'Filter by channel, brand, country, or department',
    fullDesc: 'Add filtering by messaging channel (Web, Slack, API), brand, country/region, and department. Currently impossible for multi-channel organizations to segment data.',
    customerCount: 5,
    priority: 'high',
    icon: Search,
    customers: ['UNCC', 'Astound', 'FedEx', 'Hard Rock', 'Oniverse'],
    keyQuote: 'Any reporting based on Agent Force Analytics, we need to filter by messaging channel.',
    quoteSource: 'UNCC'
  },
  {
    id: 7,
    title: 'Real-time Credit Debugging',
    shortDesc: 'Debug output showing per-action credit usage',
    fullDesc: 'Provide a developer debugging view that shows real-time credit breakdown during agent testing. Like a debug log: "Step 1: 15 credits, Step 2: 25 credits..."',
    customerCount: 1,
    priority: 'medium',
    icon: Clock,
    customers: ['Allegis'],
    keyQuote: 'Picturing a debug log that said credits used for steps actions one through five.',
    quoteSource: 'Allegis - Barry'
  },
  {
    id: 8,
    title: 'PII Masking Controls',
    shortDesc: 'Permission-based masking of sensitive data',
    fullDesc: 'Implement permission-based PII masking that automatically detects and masks sensitive data (SSN, credit cards) in transcripts based on user role.',
    customerCount: 2,
    priority: 'high',
    icon: Shield,
    customers: ['FDE Team', 'IBM'],
    keyQuote: 'Customer concern about secure handling of social security numbers in transcripts.',
    quoteSource: 'FDE Team'
  }
];

const InsightsPanel = ({ onFeatureClick }) => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'critical': return { bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', label: 'Critical' };
      case 'high': return { bg: 'rgba(249, 115, 22, 0.15)', color: '#f97316', label: 'High' };
      case 'medium': return { bg: 'rgba(0, 212, 255, 0.15)', color: '#00d4ff', label: 'Medium' };
      default: return { bg: 'rgba(113, 113, 122, 0.15)', color: '#71717a', label: 'Low' };
    }
  };

  const handleFeatureClick = (feature) => {
    setExpandedFeature(expandedFeature === feature.id ? null : feature.id);
    if (onFeatureClick) onFeatureClick(feature);
  };

  return (
    <div className="features-panel">
      <div className="features-header">
        <div className="features-header-left">
          <div className="features-icon-wrap">
            <Zap size={16} />
          </div>
          <div>
            <h3 className="features-title">Top Requested Features</h3>
            <p className="features-subtitle">Based on {topFeatures.reduce((sum, f) => sum + f.customerCount, 0)} customer mentions</p>
          </div>
        </div>
      </div>

      <div className="features-list">
        {topFeatures.map((feature, index) => {
          const Icon = feature.icon;
          const isExpanded = expandedFeature === feature.id;
          const priorityStyles = getPriorityStyles(feature.priority);
          
          return (
            <div 
              key={feature.id}
              className={`feature-item ${isExpanded ? 'expanded' : ''}`}
              onClick={() => handleFeatureClick(feature)}
            >
              <div className="feature-main">
                <div className="feature-left">
                  <span className="feature-rank">{index + 1}</span>
                  <div 
                    className="feature-icon-box"
                    style={{ background: priorityStyles.bg, color: priorityStyles.color }}
                  >
                    <Icon size={14} />
                  </div>
                </div>
                
                <div className="feature-center">
                  <div className="feature-title-row">
                    <span className="feature-name">{feature.title}</span>
                    <span 
                      className="feature-priority"
                      style={{ background: priorityStyles.bg, color: priorityStyles.color }}
                    >
                      {priorityStyles.label}
                    </span>
                  </div>
                  <p className="feature-short">{feature.shortDesc}</p>
                </div>

                <div className="feature-right">
                  <div className="feature-count">
                    <Users size={12} />
                    <span>{feature.customerCount}</span>
                  </div>
                  <ChevronDown 
                    size={14} 
                    className={`feature-chevron ${isExpanded ? 'rotated' : ''}`}
                  />
                </div>
              </div>
              
              {isExpanded && (
                <div className="feature-expanded">
                  <p className="feature-full">{feature.fullDesc}</p>
                  
                  <div className="feature-quote-box">
                    <Quote size={14} className="feature-quote-icon" />
                    <div>
                      <p className="feature-quote-text">"{feature.keyQuote}"</p>
                      <span className="feature-quote-source">— {feature.quoteSource}</span>
                    </div>
                  </div>

                  <div className="feature-customers-section">
                    <span className="feature-customers-label">Requesting customers</span>
                    <div className="feature-customers-grid">
                      {feature.customers.map((customer, i) => (
                        <span key={i} className="feature-customer-chip">{customer}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .features-panel {
          background: linear-gradient(180deg, rgba(20, 20, 23, 0.95) 0%, rgba(15, 15, 18, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(20px);
        }

        .features-header {
          padding: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.04) 0%, rgba(168, 85, 247, 0.04) 100%);
        }

        .features-header-left {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .features-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #00d4ff 0%, #a855f7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
        }

        .features-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #fafafa;
          margin: 0 0 2px 0;
        }

        .features-subtitle {
          font-size: 0.7rem;
          color: #71717a;
          margin: 0;
        }

        .features-list {
          padding: 0.5rem;
          max-height: 480px;
          overflow-y: auto;
        }

        .feature-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          margin-bottom: 0.375rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 212, 255, 0.2);
        }

        .feature-item.expanded {
          background: rgba(0, 212, 255, 0.03);
          border-color: rgba(0, 212, 255, 0.15);
        }

        .feature-main {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.875rem;
        }

        .feature-left {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          flex-shrink: 0;
        }

        .feature-rank {
          font-size: 0.65rem;
          font-weight: 700;
          color: #52525b;
          font-family: 'JetBrains Mono', monospace;
          width: 16px;
          text-align: center;
        }

        .feature-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-center {
          flex: 1;
          min-width: 0;
        }

        .feature-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 3px;
        }

        .feature-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: #e4e4e7;
        }

        .feature-priority {
          font-size: 0.55rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .feature-short {
          font-size: 0.7rem;
          color: #71717a;
          margin: 0;
          line-height: 1.4;
        }

        .feature-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          flex-shrink: 0;
        }

        .feature-count {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.1);
          padding: 3px 8px;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
        }

        .feature-chevron {
          color: #52525b;
          transition: transform 0.2s ease;
        }

        .feature-chevron.rotated {
          transform: rotate(180deg);
        }

        .feature-expanded {
          padding: 0 0.875rem 0.875rem 3.5rem;
          animation: slideDown 0.2s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .feature-full {
          font-size: 0.75rem;
          line-height: 1.65;
          color: #a1a1aa;
          margin: 0 0 0.875rem 0;
        }

        .feature-quote-box {
          display: flex;
          gap: 0.625rem;
          padding: 0.75rem;
          background: rgba(168, 85, 247, 0.06);
          border-radius: 8px;
          border-left: 3px solid #a855f7;
          margin-bottom: 0.875rem;
        }

        .feature-quote-icon {
          color: #a855f7;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-quote-text {
          font-size: 0.7rem;
          font-style: italic;
          color: #d4d4d8;
          margin: 0 0 4px 0;
          line-height: 1.5;
        }

        .feature-quote-source {
          font-size: 0.65rem;
          color: #71717a;
        }

        .feature-customers-section {
          margin-top: 0.5rem;
        }

        .feature-customers-label {
          font-size: 0.6rem;
          color: #52525b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 0.5rem;
        }

        .feature-customers-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
        }

        .feature-customer-chip {
          font-size: 0.6rem;
          padding: 3px 8px;
          background: rgba(0, 212, 255, 0.08);
          color: #00d4ff;
          border-radius: 4px;
          font-weight: 500;
        }

        .features-list::-webkit-scrollbar {
          width: 4px;
        }

        .features-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .features-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .features-list::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default InsightsPanel;
