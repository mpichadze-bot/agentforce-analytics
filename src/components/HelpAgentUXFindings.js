import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Star,
  Lightbulb,
  XCircle,
  CheckCircle,
  Eye,
  Settings,
  Brain,
  Search,
  BarChart3,
  Zap,
  Activity,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Database,
  FileQuestion,
  TrendingUp,
  Target,
  Clock,
  RefreshCw,
  Layers
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './HelpAgentUXFindings.css';

const HelpAgentUXFindings = () => {
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
      id: 'lack-tooling',
      icon: Search,
      title: 'Lack of Robust Tooling for Investigation',
      severity: 'critical',
      description: 'Root cause analysis is a significant pain point - no tools to show relevant chunks or conflicts',
      quote: '"Currently lack robust tooling for investigation, which makes root cause analysis a significant pain point"',
      impact: 'Manual, time-consuming investigation process',
      symptoms: [
        'Must manually examine session traces and JSON outputs',
        'No way to show relevant chunks retrieved',
        'Cannot see possible conflicts',
        'Requires manual testing and documentation',
        'Painful backtracking through failures'
      ]
    },
    {
      id: 'black-box',
      icon: Eye,
      title: 'Black-Box Retriever & Proprietary Planner',
      severity: 'critical',
      description: 'Cannot see into retriever and planner decision-making processes',
      quote: '"Retriever and the proprietary planner as black boxes"',
      impact: 'Cannot diagnose why wrong decisions are made',
      symptoms: [
        'Retriever returning wrong chunks (invisible why)',
        'Planner impacts instructions via multiple calls',
        'Example: "Hallucination" was actually retriever error',
        'Cannot understand component relationships',
        'Middle pipeline section is opaque'
      ]
    },
    {
      id: 'no-what-if',
      icon: Settings,
      title: 'No "What If" Analysis Capability',
      severity: 'critical',
      description: 'Cannot simulate impact of changes before implementing them',
      quote: '"Need for a \'what if\' analysis capability to simulate the impact of changes"',
      impact: 'Must implement changes blindly and hope for the best',
      symptoms: [
        'Can\'t test token count changes',
        'Can\'t simulate chunk retrieval number changes',
        'Unknown impact on answer quality',
        'Unknown impact on latency',
        'No safe experimentation'
      ]
    },
    {
      id: 'aggregate-scale',
      icon: BarChart3,
      title: 'Aggregate Analysis at Scale',
      severity: 'critical',
      description: '30% failure rate at 2M conversations/month requires aggregate troubleshooting',
      quote: '"The primary challenge is doing this in aggregate... making any system that simplifies aggregate analysis super valuable"',
      impact: 'Cannot scale per-issue investigation to millions of conversations',
      symptoms: [
        'Currently 250K conversations/week',
        'Goal: 2M conversations/month',
        'Anticipating 30% failure rate',
        'Per-issue investigation too slow',
        'Need pattern identification at scale'
      ]
    },
    {
      id: 'manual-taxonomy',
      icon: FileQuestion,
      title: 'Manual Failure Taxonomy Classification',
      severity: 'high',
      description: 'Failure reasons manually classified by human evaluators - investigating AI automation',
      quote: '"Manually determined failure reason taxonomy, currently classified by human evaluators"',
      impact: 'Slow to categorize and provide investigation leads',
      symptoms: [
        'Human evaluators classify each failure',
        'Time-consuming manual work',
        'Investigating AI automation',
        'Taxonomy provides leads but slowly'
      ]
    },
    {
      id: 'production-data',
      icon: Database,
      title: 'Cannot Connect Production Data to Lower Environments',
      severity: 'medium',
      description: 'Limitations prevent using production data for testing in dev/staging',
      quote: '"Focus is primarily on production impacts due to limitations on connecting production data to lower environments"',
      impact: 'Must rely on synthetic testing for development',
      symptoms: [
        'Production-only insights',
        'Cannot replay production scenarios in dev',
        'Synthetic testing doesn\'t catch all issues',
        'Development/production parity gap'
      ]
    }
  ];

  const desiredFeatures = [
    {
      id: 'what-if-sim',
      icon: Settings,
      title: '"What If" Simulation Capability',
      priority: 'critical',
      quote: '"What if analysis capability to simulate the impact of changes like token counts or number of retrieved chunks"',
      rationale: 'Must be able to test changes before implementing them to understand impact on quality and latency',
      benefits: [
        'Simulate token count changes',
        'Test different chunk retrieval numbers',
        'Predict impact on answer quality',
        'Predict impact on latency',
        'Safe experimentation environment'
      ]
    },
    {
      id: 'auto-taxonomy',
      icon: Brain,
      title: 'Automated Failure Taxonomy',
      priority: 'critical',
      quote: '"Investigating using AI to automate this taxonomy application to improve efficiency"',
      rationale: 'LLM as judge can categorize failures automatically instead of manual classification',
      benefits: [
        'Scale to millions of conversations',
        'Consistent classification criteria',
        'Faster symptom identification',
        'More investigation leads',
        'Reduced manual work'
      ]
    },
    {
      id: 'component-visibility',
      icon: Eye,
      title: 'Retriever & Planner Visibility',
      priority: 'critical',
      quote: '"Retriever and proprietary planner as black boxes... need to understand the relationships between components"',
      rationale: 'Cannot fix what you cannot see - need visibility into component decision-making',
      benefits: [
        'See which chunks were retrieved and why',
        'Understand planner instruction modifications',
        'Trace decision paths',
        'Identify component conflicts',
        'Faster root cause identification'
      ]
    },
    {
      id: 'aggregate-tools',
      icon: BarChart3,
      title: 'Aggregate Troubleshooting Tools',
      priority: 'critical',
      quote: '"Any system that simplifies aggregate analysis super valuable"',
      rationale: 'Scale requires pattern identification across thousands of failures, not one-by-one investigation',
      benefits: [
        'Identify patterns early',
        'Focus investigations on high-impact issues',
        'Reduce manual time spent',
        'Handle 30% failure rate at scale',
        'Prioritize efficiently'
      ]
    },
    {
      id: 'diagnostic-summary',
      icon: FileQuestion,
      title: 'Automated Diagnostic Summary',
      priority: 'must-have',
      quote: '"Analyze response, query, and agent configuration together to provide a diagnostic summary and pinpoint which part needs fine-tuning"',
      rationale: 'Holistic analysis that points directly to the problem component',
      benefits: [
        'Combined analysis of response + query + config',
        'Clear diagnostic output',
        'Pinpoint exact component needing work',
        'Actionable recommendations',
        'Faster fix implementation'
      ]
    },
    {
      id: 'goal-setting-doc',
      icon: Target,
      title: 'Goal-Setting Document per Agent',
      priority: 'should-have',
      quote: '"Goal-setting document for each agent that includes metrics and recommended actions to achieve those goals"',
      rationale: 'Proactive guidance on what metrics to track and how to improve them',
      benefits: [
        'Clear success criteria per agent',
        'Recommended actions to improve',
        'Metric targets and thresholds',
        'Guided optimization path'
      ]
    },
    {
      id: 'enhanced-metrics',
      icon: Activity,
      title: 'Enhanced LLM-Based Metrics',
      priority: 'should-have',
      quote: '"Generating additional metrics like helpfulness, teachability, and toxicity"',
      rationale: 'Beyond basic metrics - understand quality dimensions that matter',
      benefits: [
        'Helpfulness scoring',
        'Teachability assessment',
        'Toxicity detection',
        'RAGAS metrics',
        'Drive different behaviors'
      ]
    },
    {
      id: 'drift-monitoring',
      icon: TrendingUp,
      title: 'Drift & Trend Monitoring',
      priority: 'should-have',
      quote: '"Laser-focused on understanding long-term impacts like drift and trends over time"',
      rationale: 'Understand how agent performance changes over time and why',
      benefits: [
        'Detect performance degradation',
        'Identify seasonal patterns',
        'Understand version impact',
        'Long-term quality tracking'
      ]
    }
  ];

  const keyInsights = [
    {
      id: 'symptoms-first',
      icon: Search,
      title: 'Symptoms Before Root Causes',
      type: 'process',
      quote: '"Categorizing how conversations are failing (symptoms) is crucial"',
      insight: 'Team first identifies that failures exist (symptoms), then investigates why they happened (root causes). The symptom taxonomy provides leads for investigation.',
      significance: 'Proper symptom classification is the foundation for efficient root cause analysis.'
    },
    {
      id: 'tech-vs-content',
      icon: TrendingUp,
      title: 'Technology Fixes vs Content Fixes',
      type: 'strategy',
      quote: '"Prioritize technology fixes higher than content strategy fixes due to wider impact, though they execute content fixes more frequently"',
      insight: 'Technology fixes have broader impact but are harder. Content fixes are easier and faster, so they execute more of them despite lower priority.',
      significance: 'Prioritization doesn\'t equal execution frequency - quick wins matter too.'
    },
    {
      id: 'production-focus',
      icon: Activity,
      title: 'Production-First Focus',
      type: 'strategy',
      quote: '"Focus is primarily on production impacts due to limitations on connecting production data to lower environments"',
      insight: 'Unable to use production data in dev/staging, so they focus on production monitoring and use synthetic testing for development.',
      significance: 'Observability tools must work exceptionally well in production since that\'s where real insights come from.'
    },
    {
      id: 'scale-challenge',
      icon: BarChart3,
      title: 'Scale is the Defining Challenge',
      type: 'context',
      quote: '"250,000 conversations a week, with a goal of reaching 2 million conversations a month"',
      insight: '8x growth anticipated. At 30% failure rate, that\'s 600K failures/month to investigate. Manual processes won\'t scale.',
      significance: 'Every tool and process must be designed for massive scale from day one.'
    },
    {
      id: 'immediate-escalation',
      icon: AlertTriangle,
      title: 'Immediate Escalation Problem',
      type: 'unique-challenge',
      quote: '"33-37% of customers immediately request to talk to a human on their first turn"',
      insight: 'Unique problem: 1/3 of customers bypass agent entirely, eliminating any deflection opportunity.',
      significance: 'Standard resolution metrics don\'t capture this behavioral pattern - need specialized tracking.'
    },
    {
      id: 'llm-judge-evolution',
      icon: Brain,
      title: 'LLM as Judge Evolution',
      type: 'approach',
      quote: '"Ongoing efforts to use LLMs as a judge for both synthetic and real conversations to automate failure taxonomy"',
      insight: 'Currently using LLM as judge only for synthetic conversations. Expanding to real conversations and automating taxonomy.',
      significance: 'AI evaluating AI is the path to scaling quality assurance.'
    },
    {
      id: 'hallucination-actually-retriever',
      icon: Eye,
      title: 'Hallucinations Are Often Retriever Issues',
      type: 'revelation',
      quote: '"Initial assumption of LLM hallucination was found to be a problem with the retriever returning the wrong chunks"',
      insight: 'What looks like the LLM making things up is often the retriever feeding it wrong information.',
      significance: 'Don\'t assume LLM is the problem - investigate the entire pipeline.'
    },
    {
      id: 'middle-pipeline',
      icon: Layers,
      title: 'Focus on Middle Pipeline',
      type: 'focus-area',
      quote: '"Team is focused on the middle section—instructions, prompt, custom action, retriever, and planner"',
      insight: 'Front-end and end-of-pipeline feel good. The middle components (where AI decisions happen) need the most work.',
      significance: 'Observability tools should prioritize visibility into the middle pipeline components.'
    },
    {
      id: 'ragas-metrics',
      icon: Activity,
      title: 'RAGAS Metrics Drive Behavior',
      type: 'insight',
      quote: '"RAGAS metrics, which drive different behaviors and work"',
      insight: 'Using RAGAS (Retrieval-Augmented Generation Assessment) framework for synthetic answer quality testing.',
      significance: 'Industry-standard metrics help benchmark and drive specific improvements.'
    },
    {
      id: 'answer-quality-primary',
      icon: Target,
      title: 'Answer Quality is Primary Accountability',
      type: 'priority',
      quote: '"Team\'s primary accountability is answer quality... correct, complete, and accurate"',
      insight: 'Not just resolution rate or deflection - the answer itself must be right. Quality over quantity.',
      significance: 'Quality metrics must be first-class, not secondary to volume metrics.'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'severity-critical';
      case 'high': return 'severity-high';
      default: return 'severity-medium';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'priority-critical';
      case 'must-have': return 'priority-must';
      default: return 'priority-should';
    }
  };

  return (
    <div className="help-ux-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Help Agent" />
      <header className="help-ux-header">
        <div className="header-badge">Salesforce Help Agent</div>
        <h1 className="help-ux-title">UX Findings & Insights</h1>
        <p className="help-ux-subtitle">Agentforce Observability Pain Points & Requirements</p>
        <div className="participants">
          <span className="participant-label">Participants:</span>
          <span className="participant-name">Zachary Stauber (Team Lead)</span>
          <span className="participant-name">Daniel Zielaski</span>
          <span className="participant-name">Raymond Laghaeian (Observability PM)</span>
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
                        <h4>Symptoms</h4>
                        <ul>
                          {pain.symptoms.map((symptom, idx) => (
                            <li key={idx}>{symptom}</li>
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

      <footer className="help-ux-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Help Agent / Agentforce Observability - Jan 28, 2026</span>
        </div>
        <a 
          href="?view=help-agent-workflow" 
          className="workflow-link"
          tabIndex={0}
          aria-label="View Help Agent Workflow"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=help-agent-workflow';
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

export default HelpAgentUXFindings;

