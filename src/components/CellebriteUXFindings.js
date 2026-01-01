import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Star,
  Lightbulb,
  XCircle,
  CheckCircle,
  Table,
  BarChart,
  Edit3,
  Target,
  Brain,
  TrendingDown,
  Eye,
  Download,
  Layers,
  Palette,
  Navigation,
  FileQuestion,
  Zap,
  BookOpen,
  MessageSquare,
  Activity,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  Users
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './CellebriteUXFindings.css';

const CellebriteUXFindings = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('pain-points');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleCardKeyDown = (e, cardId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardToggle(cardId);
    }
  };

  const painPoints = [
    {
      id: 'non-actionable',
      icon: XCircle,
      title: 'Non-Actionable Metrics',
      severity: 'critical',
      description: 'Metrics like engagement rate and escalation rate lack context and are not clickable',
      quote: '"What does it mean engagement rate? What does it mean escalation rate? It\'s not even clickable."',
      impact: 'Cannot drill down to understand why metrics are what they are',
      examples: [
        '63% escalation rate increased by 29.4% - but why?',
        'Deflection rate definition just repeats the title',
        'Quality score of 4.59 - but how was it calculated?'
      ]
    },
    {
      id: 'manual-excel',
      icon: FileQuestion,
      title: 'Manual Excel Workarounds Required',
      severity: 'critical',
      description: 'Forced to export all data to Excel to create actionable insights',
      quote: '"I take everything into an Excel file and I have every feedback from the last three weeks."',
      impact: 'Massive time sink, error-prone, not scalable',
      examples: [
        'Export questions, answers, user feedback',
        'Add custom columns: customer type, score (1-5), reason',
        'Create separate sheet for missing info & actions needed',
        'Generate management presentations manually from this data'
      ]
    },
    {
      id: 'heat-maps',
      icon: Palette,
      title: 'Heat Maps Are Confusing',
      severity: 'high',
      description: 'Users hate heat maps and find them difficult to interpret',
      quote: '"I hate heat maps. I never never understood heat maps."',
      impact: 'Key insights buried in visualization that doesn\'t work for users',
      examples: [
        'Too many colors blur the data (can\'t distinguish 4 from 5)',
        'Red stands out, but everything else is blurred',
        'Prefer simple: good (green), bad (red), passive'
      ]
    },
    {
      id: 'too-many-tabs',
      icon: Navigation,
      title: 'Too Many Navigation Levels',
      severity: 'medium',
      description: 'Two-level tab structure creates confusion and extra clicks',
      quote: '"Why do you split between the performance overview and the agent details view?"',
      impact: 'Cognitive load, more clicks to get to desired information',
      examples: [
        'Performance Overview tab → then 8 more tabs inside',
        'Agent Details tab → another set of tabs',
        'Prefer single high-level tabs with agent filter'
      ]
    },
    {
      id: 'no-transparency',
      icon: Eye,
      title: 'Lack of Metric Transparency',
      severity: 'high',
      description: 'Don\'t know how metrics are calculated or what they include',
      quote: '"I want one level deeper within this matrix... not to trust, to understand the matrix."',
      impact: 'Cannot trust or act on metrics without understanding them',
      examples: [
        'Average deflection rate - justified or not justified?',
        'Abandon rate - how is it calculated?',
        'What does "unique session" mean vs "unique interaction"?'
      ]
    },
    {
      id: 'no-cta',
      icon: Zap,
      title: 'Missing Call-to-Action Buttons',
      severity: 'high',
      description: 'Dashboard doesn\'t suggest next steps or actions',
      quote: '"We\'re missing the call to actions of what needs to be applied."',
      impact: 'Users must figure out next steps themselves',
      examples: [
        'No "Create knowledge article" when data is insufficient',
        'No "Update article" when content is outdated',
        'No "Fix routing" when topics are misaligned'
      ]
    },
    {
      id: 'no-feedback',
      icon: MessageSquare,
      title: 'No Customer Feedback Mechanism',
      severity: 'medium',
      description: 'Service agent doesn\'t have built-in customer feedback collection',
      quote: '"You don\'t have a feedback on the service agent."',
      impact: 'Must rely on manual customer outreach for feedback',
      examples: [
        'No thumbs up/down in customer agent',
        'Alpha customers send Excel files with feedback',
        'Direct emails & text messages to collect insights'
      ]
    },
    {
      id: 'cards-unclear',
      icon: BarChart,
      title: 'Cards Provide Insufficient Information',
      severity: 'medium',
      description: 'Metric cards show numbers without context or explanation',
      quote: '"You\'ve got no information over there. You\'ve got a number and a line."',
      impact: 'Can\'t understand what\'s happening or why without drilling in',
      examples: [
        '23% abandon rate - out of what? Why?',
        'Straight line trend graph isn\'t helpful',
        'Missing: why is metric dropping? What\'s being measured?'
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: 'table-primary',
      icon: Table,
      title: 'Table Format as Primary View',
      priority: 'must-have',
      quote: '"I love the table format better than the cards. I\'m a number person."',
      rationale: 'Direct access to numbers, easier to scan, can download and manipulate',
      benefits: [
        'Immediate visibility of all metrics',
        'Can sort and filter as needed',
        'Download functionality for external analysis',
        'Familiar and comfortable for data-driven users'
      ]
    },
    {
      id: 'inline-editing',
      icon: Edit3,
      title: 'Inline Editing for Custom Columns',
      priority: 'must-have',
      quote: '"If I would have even an inline editing on this dashboard, that would be perfect."',
      rationale: 'Users need to add context and categorization specific to their business',
      benefits: [
        'Add customer type, score, reasoning directly',
        'No need to export to Excel',
        'Context stays with the data',
        'Can create custom views for management'
      ]
    },
    {
      id: 'drill-down',
      icon: Target,
      title: 'Complete Drill-Down Capability',
      priority: 'must-have',
      quote: '"Perfect. This is perfect. This is really drill down into the data."',
      rationale: 'Must connect high-level metrics to individual records',
      benefits: [
        'Topics → compare to metrics',
        'Select topic → filtered sessions',
        'Session → single record details',
        'Can trace any metric to its source'
      ]
    },
    {
      id: 'ai-insights',
      icon: Brain,
      title: 'AI-Driven Insights on Metrics',
      priority: 'should-have',
      quote: '"I would expect an AI to give me an insight of why is it dropping down."',
      rationale: 'Users want proactive explanations, not just data presentation',
      benefits: [
        'Automatic detection of metric drops',
        'Explanation of root causes',
        'Suggested actions to improve',
        'Reduces manual analysis time'
      ]
    },
    {
      id: 'metric-transparency',
      icon: Eye,
      title: 'Complete Metric Transparency',
      priority: 'must-have',
      quote: '"I want one level deeper... to understand the matrix."',
      rationale: 'Can\'t act on what you don\'t understand',
      benefits: [
        'Show calculation methodology',
        'Explain what\'s included/excluded',
        'Distinguish justified vs unjustified (e.g., deflections)',
        'Build trust in the data'
      ]
    },
    {
      id: 'knowledge-view',
      icon: BookOpen,
      title: 'Knowledge Article Performance View',
      priority: 'should-have',
      quote: '"I would love to drill down all the way down to the record of the knowledge articles."',
      rationale: 'Need to see which articles drive resolution vs frustration',
      benefits: [
        'Articles leading to resolutions',
        'Articles causing frustrations',
        'Articles with low scores',
        'Identify content that needs rewriting'
      ]
    },
    {
      id: 'top-lists',
      icon: Star,
      title: 'Top 10/Top 5 Lists',
      priority: 'should-have',
      quote: '"Instead of heat map, I would do top 10 or top five."',
      rationale: 'Quickly identify strengths and weaknesses',
      benefits: [
        'Immediate focus on what matters',
        'Easy to understand and action',
        'Shows best and worst performers',
        'Good for stakeholder presentations'
      ]
    },
    {
      id: 'cta-buttons',
      icon: Zap,
      title: 'Contextual Call-to-Action Buttons',
      priority: 'should-have',
      quote: '"I need the call to action button that says... Let\'s create a knowledge article."',
      rationale: 'Guide users to productive next steps',
      benefits: [
        'Create article when data is insufficient',
        'Update article when content is outdated',
        'Fix routing when topics are misaligned',
        'Close the loop on identified issues'
      ]
    },
    {
      id: 'voice-metrics',
      icon: Activity,
      title: 'Voice/Tone Conversation Metrics',
      priority: 'nice-to-have',
      quote: '"Voice... measure the tone of the conversation. Is the AI agent making the customer frustrated?"',
      rationale: 'Understand emotional impact of agent interactions',
      benefits: [
        'Detect customer frustration patterns',
        'Identify topics that cause stress',
        'Measure overall sentiment trends',
        'Guide tone improvements in responses'
      ]
    }
  ];

  const keyInsights = [
    {
      id: 'categories-perfect',
      icon: CheckCircle,
      title: 'Categories Are Exactly Right',
      type: 'validation',
      quote: '"This is exactly how I want to score it."',
      insight: 'The categorical breakdown (Usage, Effectiveness, Trust, Quality, Health, Consumption, Voice, User Satisfaction) perfectly matches user mental model.',
      significance: 'This structure helps connect ground knowledge with high-level expectations - the "middle level" that enables decision-making.'
    },
    {
      id: 'drill-down-perfect',
      icon: Target,
      title: 'Drill-Down Flow is Perfect',
      type: 'validation',
      quote: '"Perfect. This is perfect. This is really drill down into the data."',
      insight: 'The ability to compare topics to metrics, select a topic, and drill into filtered sessions meets core workflow needs.',
      significance: 'This confirms the information architecture for drill-down is on the right track.'
    },
    {
      id: 'ui-10x-better',
      icon: TrendingDown,
      title: 'UI is 10x Better Than Current',
      type: 'validation',
      quote: '"The UI 10 times better than the previous one."',
      insight: 'Despite specific pain points, the overall redesign is a massive improvement.',
      significance: 'Shows direction is correct, but refinements needed on specific elements.'
    },
    {
      id: 'powerful-metrics',
      icon: Star,
      title: 'Three Most Powerful Metrics Identified',
      type: 'insight',
      quote: '"These three are very very powerful numbers to use."',
      insight: 'Unique users, unique interactions, and average interaction per session are the most valuable usage metrics.',
      significance: 'These should be prominently featured and always accessible.'
    },
    {
      id: 'middle-level',
      icon: Layers,
      title: 'Need for "Middle Level" Detail',
      type: 'insight',
      quote: '"I need a middle level that connects between my ground knowledge and my expectation of the high level."',
      insight: 'Users don\'t want just high-level overview or raw data - they need a middle layer that enables decision-making.',
      significance: 'Dashboard should provide enough detail to understand patterns without drowning in raw data.'
    },
    {
      id: 'green-success',
      icon: Palette,
      title: 'Color Psychology: Green = Success',
      type: 'insight',
      quote: '"Something needs to be green. Good is green."',
      insight: 'Users have strong expectations about color meaning. Green should indicate success/good performance.',
      significance: 'Color choices aren\'t just aesthetic - they communicate meaning and should align with user expectations.'
    },
    {
      id: 'three-colors',
      icon: Palette,
      title: 'Heat Maps Need Max 3 Colors',
      type: 'insight',
      quote: '"You cannot use more than three colors for a heat map... Good, bad, and passive."',
      insight: 'Too many colors blur distinctions. Simple good/bad/neutral is more effective.',
      significance: 'If heat maps are used, they must be radically simplified or replaced with alternatives.'
    },
    {
      id: 'alpha-process',
      icon: Users,
      title: 'Alpha Customer Process Reveals Gap',
      type: 'insight',
      quote: '"I have five customers that creating an Excel files for me and send them over to me on a weekly basis."',
      insight: 'Users have established elaborate manual processes to compensate for missing product features.',
      significance: 'These workarounds reveal feature gaps and provide blueprint for what analytics should enable.'
    },
    {
      id: 'justified-deflections',
      icon: Eye,
      title: 'Need to Distinguish Justified vs Unjustified',
      type: 'insight',
      quote: '"Average of deflection is it is it justified or not? How do you measure if it\'s justified or not?"',
      insight: 'Not all deflections/escalations are equal - some are appropriate, some indicate problems.',
      significance: 'Metrics need nuance and context, not just aggregates.'
    },
    {
      id: 'year-journey',
      icon: Activity,
      title: 'Year-Long Journey to Production',
      type: 'context',
      quote: '"I\'m only now very comfortable to go live with it with customers... This is where I wanted to be a year and a half ago."',
      insight: 'Getting agent to production-ready took much longer than expected, with many iterations.',
      significance: 'Sets realistic expectations for analytics maturity - users understand this is a journey.'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'must-have': return 'priority-must';
      case 'should-have': return 'priority-should';
      default: return 'priority-nice';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'severity-critical';
      case 'high': return 'severity-high';
      default: return 'severity-medium';
    }
  };

  return (
    <div className="ux-findings-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Cellebrite" />
      <header className="ux-findings-header">
        <div className="header-badge">Cellebrite × Agentforce</div>
        <h1 className="ux-findings-title">UX Findings & Insights</h1>
        <p className="ux-findings-subtitle">Agent Analytics Prototype Usability Study</p>
        <div className="participants">
          <span className="participant-label">Participants:</span>
          <span className="participant-name">Yoav Silberman (VP Technology)</span>
          <span className="participant-name">Gyora Turel (Data & Analytics Master)</span>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="findings-tabs" role="tablist">
        <button
          className={`findings-tab ${activeTab === 'pain-points' ? 'active' : ''}`}
          onClick={() => setActiveTab('pain-points')}
          role="tab"
          aria-selected={activeTab === 'pain-points'}
          tabIndex={0}
        >
          <AlertTriangle size={18} />
          <span>Pain Points</span>
        </button>
        <button
          className={`findings-tab ${activeTab === 'desired' ? 'active' : ''}`}
          onClick={() => setActiveTab('desired')}
          role="tab"
          aria-selected={activeTab === 'desired'}
          tabIndex={0}
        >
          <Star size={18} />
          <span>Desired Features</span>
        </button>
        <button
          className={`findings-tab ${activeTab === 'insights' ? 'active' : ''}`}
          onClick={() => setActiveTab('insights')}
          role="tab"
          aria-selected={activeTab === 'insights'}
          tabIndex={0}
        >
          <Lightbulb size={18} />
          <span>Key Insights</span>
        </button>
      </nav>

      {/* Pain Points Tab */}
      {activeTab === 'pain-points' && (
        <section className="tab-panel" role="tabpanel">
          <div className="pain-points-grid">
            {painPoints.map((pain) => {
              const IconComponent = pain.icon;
              const isExpanded = expandedCard === pain.id;
              return (
                <div
                  key={pain.id}
                  className={`pain-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(pain.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, pain.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="pain-card-header">
                    <div className={`pain-icon ${getSeverityColor(pain.severity)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="pain-title-section">
                      <h3>{pain.title}</h3>
                      <span className={`severity-tag ${getSeverityColor(pain.severity)}`}>
                        {pain.severity}
                      </span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <p className="pain-description">{pain.description}</p>
                  <div className="pain-quote">
                    <MessageSquare size={14} />
                    <span>{pain.quote}</span>
                  </div>
                  
                  {isExpanded && (
                    <div className="pain-details">
                      <div className="impact-section">
                        <h4>Impact</h4>
                        <p>{pain.impact}</p>
                      </div>
                      <div className="examples-section">
                        <h4>Examples</h4>
                        <ul>
                          {pain.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Desired Features Tab */}
      {activeTab === 'desired' && (
        <section className="tab-panel" role="tabpanel">
          <div className="desired-features-grid">
            {desiredFeatures.map((feature) => {
              const IconComponent = feature.icon;
              const isExpanded = expandedCard === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`feature-wish-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(feature.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, feature.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="feature-wish-header">
                    <div className={`feature-wish-icon ${getPriorityColor(feature.priority)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="feature-wish-title-section">
                      <h3>{feature.title}</h3>
                      <span className={`priority-tag ${getPriorityColor(feature.priority)}`}>
                        {feature.priority}
                      </span>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="feature-wish-quote">
                    <MessageSquare size={14} />
                    <span>{feature.quote}</span>
                  </div>
                  
                  {isExpanded && (
                    <div className="feature-wish-details">
                      <div className="rationale-section">
                        <h4>Rationale</h4>
                        <p>{feature.rationale}</p>
                      </div>
                      <div className="benefits-section">
                        <h4>Benefits</h4>
                        <ul>
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx}><CheckCircle size={14} /> {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Key Insights Tab */}
      {activeTab === 'insights' && (
        <section className="tab-panel" role="tabpanel">
          <div className="insights-list">
            {keyInsights.map((insight) => {
              const IconComponent = insight.icon;
              const isExpanded = expandedCard === insight.id;
              return (
                <div
                  key={insight.id}
                  className={`insight-card ${insight.type} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(insight.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, insight.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="insight-card-header">
                    <div className={`insight-icon-wrap ${insight.type}`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="insight-content-section">
                      <span className={`insight-type-label ${insight.type}`}>{insight.type}</span>
                      <h3>{insight.title}</h3>
                      <div className="insight-quote">
                        <MessageSquare size={14} />
                        <span>{insight.quote}</span>
                      </div>
                    </div>
                    <div className="expand-toggle">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="insight-expanded">
                      <div className="insight-detail">
                        <h4>Insight</h4>
                        <p>{insight.insight}</p>
                      </div>
                      <div className="insight-significance">
                        <h4>Significance</h4>
                        <p>{insight.significance}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      <footer className="ux-findings-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Cellebrite Agent Analytics Prototype Usability Study - Dec 10, 2025</span>
        </div>
        <a 
          href="?view=cellebrite-workflow" 
          className="workflow-link"
          tabIndex={0}
          aria-label="View Analytics Workflow"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + '?view=cellebrite-workflow';
          }}
        >
          <Activity size={16} />
          <span>View Workflow</span>
          <ArrowRight size={16} />
        </a>
      </footer>
    </div>
  );
};

export default CellebriteUXFindings;

