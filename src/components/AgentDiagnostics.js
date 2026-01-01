import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Bug, 
  Lightbulb, 
  Wrench,
  Brain,
  MessageSquare,
  Target,
  TrendingUp,
  XCircle,
  CheckCircle,
  Search,
  FileQuestion,
  Route,
  Zap,
  Eye,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Database,
  BookOpen,
  Users,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './AgentDiagnostics.css';

const AgentDiagnostics = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('problems');

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleCardKeyDown = (e, cardId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardToggle(cardId);
    }
  };

  const problems = [
    {
      id: 'topic-collision',
      icon: Route,
      title: 'Topic Collisions',
      severity: 'critical',
      description: 'Utterances being routed to wrong handlers',
      details: 'Customer queries were being sent to incorrect topics, causing FAQ queries to escalate unnecessarily and escalation-worthy queries to get stuck in FAQ loops.',
      impact: 'Significant drop in resolution rate',
      symptoms: [
        'FAQ queries escalating to human agents',
        'Complex issues stuck in FAQ loops',
        'Inconsistent routing behavior'
      ]
    },
    {
      id: 'faq-failure',
      icon: FileQuestion,
      title: 'FAQ Agent Over-Determinism',
      severity: 'high',
      description: 'Agent responding "I don\'t have an answer" too often',
      details: 'The FAQ agent was too deterministic in its responses, refusing to engage in conversation when it didn\'t find an exact knowledge match.',
      impact: 'High rate of "no answer" responses',
      symptoms: [
        'Low resolution rate for FAQ topics',
        'Users abandoning chat sessions',
        'Unnecessary escalations'
      ]
    },
    {
      id: 'hallucinations',
      icon: Brain,
      title: 'Apparent "Hallucinations"',
      severity: 'critical',
      description: 'Agent giving incorrect or fabricated answers',
      details: 'The agent appeared to be making up information, leading the team to initially suspect model issues.',
      impact: 'Customer trust erosion, incorrect guidance',
      symptoms: [
        'Factually incorrect responses',
        'Answers not matching knowledge base',
        'Confident but wrong statements'
      ]
    },
    {
      id: 'escalation-rate',
      icon: TrendingUp,
      title: 'High Escalation Rates',
      severity: 'high',
      description: 'Too many conversations escalating to human agents',
      details: 'Certain work buckets like "Candidate Management" showed disproportionately high escalation rates, straining human agent capacity.',
      impact: 'Increased human agent workload, costs',
      symptoms: [
        'Specific categories with 50%+ escalation',
        'Human agents overwhelmed',
        'Long wait times for customers'
      ]
    },
    {
      id: 'manual-review',
      icon: Search,
      title: 'Reactive Manual Review',
      severity: 'medium',
      description: 'One-by-one chat review is slow and inefficient',
      details: 'The team was manually reviewing chats one at a time, making it impossible to identify patterns across thousands of conversations.',
      impact: 'Slow problem discovery, missed patterns',
      symptoms: [
        'Unable to scale quality review',
        'Pattern blindness',
        'Delayed issue detection'
      ]
    },
    {
      id: 'taxonomy-drift',
      icon: Database,
      title: 'Taxonomy Instability',
      severity: 'medium',
      description: 'Categories changing due to unsupervised processes',
      details: 'The Optimizer\'s categorization runs once a week with unsupervised clustering, causing taxonomy to shift unpredictably and break historical comparisons.',
      impact: 'Unable to track metrics over time',
      symptoms: [
        'Category definitions changing',
        'Historical comparisons invalid',
        'Inconsistent reporting'
      ]
    }
  ];

  const workarounds = [
    {
      id: 'n8n-control',
      icon: Wrench,
      title: 'N8N Workflow Control',
      status: 'implemented',
      problem: 'Taxonomy Instability',
      description: 'Using N8N instead of Optimizer for categorization',
      details: 'By controlling the categorization prompt through N8N, the team maintains a consistent 20-category taxonomy that doesn\'t change unexpectedly.',
      benefits: [
        'Consistent category definitions',
        'Trackable metrics over time',
        'Full control over classification logic'
      ]
    },
    {
      id: 'dual-prompts',
      icon: Bug,
      title: 'Dual Prompt System',
      status: 'implemented',
      problem: 'Debugging Difficulty',
      description: 'Running debug and production prompt versions in parallel',
      details: 'Maintain two versions of each prompt - one with "always share your reasoning" instruction for debugging, one clean version for production.',
      benefits: [
        'Instant access to agent reasoning',
        'No production performance impact',
        'Easy troubleshooting workflow'
      ]
    },
    {
      id: 'sample-evaluation',
      icon: Users,
      title: 'Sample Manual Evaluation',
      status: 'implemented',
      problem: 'AI Classification Noise',
      description: 'Manual review of classification samples for accuracy',
      details: 'Rather than reviewing all chats manually, review a sample of AI classifications to validate accuracy and identify systematic errors.',
      benefits: [
        'Scalable quality assurance',
        'Identifies classification errors',
        'Enables prompt fine-tuning'
      ]
    },
    {
      id: 'positive-negative',
      icon: ThumbsUp,
      title: 'Positive/Negative Examples',
      status: 'in-progress',
      problem: 'Escalation Evaluation',
      description: 'Using resolved vs escalated sessions as training examples',
      details: 'Compare sessions that resolved successfully with those that escalated to identify what differentiates successful agent interactions.',
      benefits: [
        'Data-driven improvement signals',
        'Clear success/failure patterns',
        'Targeted prompt improvements'
      ]
    },
    {
      id: 'human-session-analysis',
      icon: Eye,
      title: 'Post-Escalation Analysis',
      status: 'in-progress',
      problem: 'Unknown Success Factors',
      description: 'Analyzing what humans do well after escalation',
      details: 'After escalation to a human agent, analyze the human session (filtered by positive CSAT) to understand what the human did that the agent couldn\'t.',
      benefits: [
        'Learn from human success',
        'Identify agent capability gaps',
        'Replicate human strategies in agent'
      ]
    }
  ];

  const revelations = [
    {
      id: 'knowledge-not-model',
      icon: Sparkles,
      title: 'Hallucinations = Flawed Knowledge Articles',
      category: 'Root Cause Discovery',
      description: 'What looked like model hallucinations were actually caused by incorrect or outdated knowledge articles',
      insight: 'The agent was correctly retrieving and summarizing knowledge - the knowledge itself was wrong. Fixing the articles fixed the "hallucinations."',
      action: 'Implemented knowledge article review process',
      impact: 'Eliminated category of "model errors" by fixing content'
    },
    {
      id: 'chain-of-thought',
      icon: Brain,
      title: 'Chain of Thought Reveals Intent',
      category: 'Debugging Breakthrough',
      description: 'Adding "share your reasoning" to prompts unlocks understanding of agent decisions',
      insight: 'By seeing the agent\'s step-by-step reasoning (goal understanding, signals detected, articles matched), the team can quickly identify where the process breaks down.',
      action: 'Created debug prompt templates with reasoning instructions',
      impact: 'Reduced troubleshooting time from hours to minutes'
    },
    {
      id: 'less-deterministic',
      icon: MessageSquare,
      title: 'Conversation Over Precision',
      category: 'Prompt Strategy',
      description: 'Making FAQ prompts less deterministic dramatically improved resolution',
      insight: 'Instead of refusing to answer when no exact match is found, encouraging the agent to engage in conversation and ask clarifying questions led to much higher resolution rates.',
      action: 'Rewrote FAQ prompts to encourage dialogue',
      impact: 'Large increase in resolution rate'
    },
    {
      id: 'utterance-annotation',
      icon: Route,
      title: 'Explicit Routing Annotations',
      category: 'Architecture Fix',
      description: 'Annotating utterances with routing instructions solved topic collisions',
      insight: 'Rather than relying on the model to infer routing, explicitly annotating utterances with where they should go (escalate, FAQ, specific topic) provides deterministic control.',
      action: 'Added routing annotations to utterance dataset',
      impact: 'Significant resolution rate improvement'
    },
    {
      id: 'csat-filter',
      icon: ThumbsUp,
      title: 'CSAT as Quality Filter',
      category: 'Metrics Strategy',
      description: 'Using post-human CSAT to identify successful escalation handling',
      insight: 'The CSAT survey after human interaction provides a natural filter - high CSAT escalations indicate the human did something replicable, low CSAT indicates systemic issues.',
      action: 'Built CSAT-filtered analysis pipeline',
      impact: 'Focused improvement efforts on proven strategies'
    }
  ];

  const diagnosticSteps = [
    {
      step: 1,
      title: 'Enable Debug Mode',
      icon: Bug,
      description: 'Switch to the debug prompt template that includes reasoning instructions',
      code: 'Always share your reasoning step by step before answering'
    },
    {
      step: 2,
      title: 'Review Goal Understanding',
      icon: Target,
      description: 'Check what the agent thinks it should accomplish',
      code: 'What is the agent\'s stated goal for this query?'
    },
    {
      step: 3,
      title: 'Analyze Signal Detection',
      icon: Search,
      description: 'Identify what signals triggered the agent\'s response path',
      code: 'What signals/keywords did the agent identify?'
    },
    {
      step: 4,
      title: 'Verify Knowledge Matching',
      icon: BookOpen,
      description: 'Check which knowledge articles were matched and used',
      code: 'Which articles were retrieved? Are they correct?'
    },
    {
      step: 5,
      title: 'Trace Response Generation',
      icon: MessageSquare,
      description: 'Follow how the response was constructed from the reasoning',
      code: 'Does the response logically follow from the reasoning?'
    },
    {
      step: 6,
      title: 'Identify Breakdown Point',
      icon: AlertTriangle,
      description: 'Pinpoint where the reasoning chain failed',
      code: 'At which step did the agent go wrong?'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'severity-critical';
      case 'high': return 'severity-high';
      case 'medium': return 'severity-medium';
      default: return 'severity-low';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'implemented': return 'status-implemented';
      case 'in-progress': return 'status-progress';
      default: return 'status-planned';
    }
  };

  return (
    <div className="diagnostics-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="UX Findings" customerName="Indeed" />
      <header className="diagnostics-header">
        <div className="header-badge">Indeed × Agentforce</div>
        <h1 className="diagnostics-title">Agent Diagnostics & Revelations</h1>
        <p className="diagnostics-subtitle">Problems, Workarounds, and Breakthrough Insights</p>
      </header>

      {/* Tab Navigation */}
      <nav className="tab-navigation" role="tablist">
        <button
          className={`tab-button ${activeTab === 'problems' ? 'active' : ''}`}
          onClick={() => setActiveTab('problems')}
          onKeyDown={(e) => e.key === 'Enter' && setActiveTab('problems')}
          role="tab"
          aria-selected={activeTab === 'problems'}
          tabIndex={0}
        >
          <AlertTriangle size={18} />
          <span>Problems & Pains</span>
        </button>
        <button
          className={`tab-button ${activeTab === 'workarounds' ? 'active' : ''}`}
          onClick={() => setActiveTab('workarounds')}
          onKeyDown={(e) => e.key === 'Enter' && setActiveTab('workarounds')}
          role="tab"
          aria-selected={activeTab === 'workarounds'}
          tabIndex={0}
        >
          <Wrench size={18} />
          <span>Workarounds</span>
        </button>
        <button
          className={`tab-button ${activeTab === 'revelations' ? 'active' : ''}`}
          onClick={() => setActiveTab('revelations')}
          onKeyDown={(e) => e.key === 'Enter' && setActiveTab('revelations')}
          role="tab"
          aria-selected={activeTab === 'revelations'}
          tabIndex={0}
        >
          <Lightbulb size={18} />
          <span>Revelations</span>
        </button>
        <button
          className={`tab-button ${activeTab === 'diagnostics' ? 'active' : ''}`}
          onClick={() => setActiveTab('diagnostics')}
          onKeyDown={(e) => e.key === 'Enter' && setActiveTab('diagnostics')}
          role="tab"
          aria-selected={activeTab === 'diagnostics'}
          tabIndex={0}
        >
          <Bug size={18} />
          <span>Diagnostic Guide</span>
        </button>
      </nav>

      {/* Problems Tab */}
      {activeTab === 'problems' && (
        <section className="tab-content" role="tabpanel">
          <div className="section-header">
            <AlertTriangle size={24} />
            <div>
              <h2>Problems & Pains</h2>
              <p>Key challenges faced in agent development and operation</p>
            </div>
          </div>
          <div className="problems-grid">
            {problems.map((problem) => {
              const IconComponent = problem.icon;
              const isExpanded = expandedCard === problem.id;
              return (
                <div
                  key={problem.id}
                  className={`problem-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(problem.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, problem.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={problem.title}
                >
                  <div className="card-header">
                    <div className={`card-icon ${getSeverityColor(problem.severity)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="card-title-section">
                      <h3>{problem.title}</h3>
                      <span className={`severity-badge ${getSeverityColor(problem.severity)}`}>
                        {problem.severity}
                      </span>
                    </div>
                    <div className="expand-icon">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <p className="card-description">{problem.description}</p>
                  
                  {isExpanded && (
                    <div className="card-details">
                      <div className="detail-section">
                        <h4>Details</h4>
                        <p>{problem.details}</p>
                      </div>
                      <div className="detail-section impact">
                        <h4>Impact</h4>
                        <p><XCircle size={14} /> {problem.impact}</p>
                      </div>
                      <div className="detail-section">
                        <h4>Symptoms</h4>
                        <ul>
                          {problem.symptoms.map((symptom, idx) => (
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

      {/* Workarounds Tab */}
      {activeTab === 'workarounds' && (
        <section className="tab-content" role="tabpanel">
          <div className="section-header">
            <Wrench size={24} />
            <div>
              <h2>Workarounds & Solutions</h2>
              <p>Tactical approaches to address agent challenges</p>
            </div>
          </div>
          <div className="workarounds-grid">
            {workarounds.map((workaround) => {
              const IconComponent = workaround.icon;
              const isExpanded = expandedCard === workaround.id;
              return (
                <div
                  key={workaround.id}
                  className={`workaround-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(workaround.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, workaround.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={workaround.title}
                >
                  <div className="card-header">
                    <div className={`card-icon ${getStatusColor(workaround.status)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="card-title-section">
                      <h3>{workaround.title}</h3>
                      <span className={`status-badge ${getStatusColor(workaround.status)}`}>
                        {workaround.status === 'in-progress' ? 'In Progress' : 'Implemented'}
                      </span>
                    </div>
                    <div className="expand-icon">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div className="addresses-label">
                    <span>Addresses:</span> {workaround.problem}
                  </div>
                  <p className="card-description">{workaround.description}</p>
                  
                  {isExpanded && (
                    <div className="card-details">
                      <div className="detail-section">
                        <h4>How It Works</h4>
                        <p>{workaround.details}</p>
                      </div>
                      <div className="detail-section benefits">
                        <h4>Benefits</h4>
                        <ul>
                          {workaround.benefits.map((benefit, idx) => (
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

      {/* Revelations Tab */}
      {activeTab === 'revelations' && (
        <section className="tab-content" role="tabpanel">
          <div className="section-header">
            <Lightbulb size={24} />
            <div>
              <h2>Key Revelations</h2>
              <p>Breakthrough insights that transformed agent performance</p>
            </div>
          </div>
          <div className="revelations-list">
            {revelations.map((revelation) => {
              const IconComponent = revelation.icon;
              const isExpanded = expandedCard === revelation.id;
              return (
                <div
                  key={revelation.id}
                  className={`revelation-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleCardToggle(revelation.id)}
                  onKeyDown={(e) => handleCardKeyDown(e, revelation.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={revelation.title}
                >
                  <div className="revelation-header">
                    <div className="revelation-icon">
                      <IconComponent size={28} />
                    </div>
                    <div className="revelation-title-section">
                      <span className="revelation-category">{revelation.category}</span>
                      <h3>{revelation.title}</h3>
                      <p className="revelation-description">{revelation.description}</p>
                    </div>
                    <div className="expand-icon">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="revelation-details">
                      <div className="insight-block">
                        <div className="insight-label">
                          <Sparkles size={16} />
                          <span>Key Insight</span>
                        </div>
                        <p>{revelation.insight}</p>
                      </div>
                      <div className="action-impact-row">
                        <div className="action-block">
                          <div className="block-label">
                            <Zap size={16} />
                            <span>Action Taken</span>
                          </div>
                          <p>{revelation.action}</p>
                        </div>
                        <div className="impact-block">
                          <div className="block-label">
                            <TrendingUp size={16} />
                            <span>Impact</span>
                          </div>
                          <p>{revelation.impact}</p>
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

      {/* Diagnostics Tab */}
      {activeTab === 'diagnostics' && (
        <section className="tab-content" role="tabpanel">
          <div className="section-header">
            <Bug size={24} />
            <div>
              <h2>Agent Diagnostic Guide</h2>
              <p>Step-by-step process to troubleshoot agent issues using chain of thought</p>
            </div>
          </div>
          
          <div className="diagnostic-intro">
            <div className="intro-icon">
              <Brain size={32} />
            </div>
            <div className="intro-content">
              <h3>Chain of Thought Debugging</h3>
              <p>
                The key revelation: By instructing the agent to "always share your reasoning," 
                you unlock visibility into its decision-making process. This transforms debugging 
                from guesswork into systematic analysis.
              </p>
            </div>
          </div>

          <div className="diagnostic-steps">
            {diagnosticSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="diagnostic-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <div className="step-header">
                      <IconComponent size={20} />
                      <h4>{step.title}</h4>
                    </div>
                    <p>{step.description}</p>
                    <div className="step-code">
                      <code>{step.code}</code>
                    </div>
                  </div>
                  {step.step < diagnosticSteps.length && (
                    <div className="step-connector">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="diagnostic-tips">
            <h3>Pro Tips</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon warning">
                  <AlertTriangle size={20} />
                </div>
                <div className="tip-content">
                  <h4>Check Knowledge First</h4>
                  <p>Many "hallucinations" are actually correct retrievals of incorrect knowledge articles. Always verify the source content.</p>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon info">
                  <RefreshCw size={20} />
                </div>
                <div className="tip-content">
                  <h4>Compare Versions</h4>
                  <p>Run the same query through both debug and production prompts to ensure behavior is consistent.</p>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon success">
                  <ThumbsUp size={20} />
                </div>
                <div className="tip-content">
                  <h4>Use Human Sessions</h4>
                  <p>Analyze high-CSAT human sessions to understand what success looks like for specific query types.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="diagnostics-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Indeed/Agentforce Observability Meeting - Dec 16, 2025</span>
        </div>
        <a 
          href="?view=indeed-workflow" 
          className="back-link"
          tabIndex={0}
          aria-label="View main workflow chart"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + '?view=indeed-workflow';
          }}
        >
          <ArrowRight size={16} />
          <span>View Workflow Chart</span>
        </a>
      </footer>
    </div>
  );
};

export default AgentDiagnostics;




