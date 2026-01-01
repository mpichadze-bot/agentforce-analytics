import React, { useState } from 'react';
import {
  Users, MessageSquare, Settings, ArrowRight, CheckCircle,
  AlertCircle, Eye, Activity, ChevronRight, ChevronDown, ChevronUp,
  Navigation, Database, FileText, BarChart2, Star, Search,
  RefreshCw, Zap, HelpCircle, Building, Link, Filter, Target,
  MousePointer, Bug, Lightbulb
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './NvidiaWorkflow.css';

const NvidiaWorkflow = () => {
  const [activeSection, setActiveSection] = useState('navigation');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const navigationIssues = [
    {
      id: 'dashboard-to-session',
      title: 'Dashboard → Messaging Session',
      description: 'Cannot navigate from dashboard data (escalations, transfers) to specific messaging session details',
      status: 'bug',
      quote: 'We want to click on that number, be able to see the details and try to reach the information of that messaging session.',
      icon: MousePointer
    },
    {
      id: 'intent-to-sessions',
      title: 'Intent → Session List',
      description: 'Unable to determine specific sessions linked to an intent directly from dashboard',
      status: 'bug',
      quote: 'We don\'t have any approach to know the exact session, the specific session that encountered this intent.',
      icon: Link
    },
    {
      id: 'moments-table',
      title: 'Moments Table Filtering',
      description: 'Click on intent should filter moments table to show relevant session examples',
      status: 'workaround',
      quote: 'If you\'ve seen an intent performing poorly, go to moments table and filter by intent tags.',
      icon: Filter
    }
  ];

  const desiredNavFlow = [
    {
      step: 1,
      title: 'Dashboard View',
      description: 'See aggregated KPIs, intents, quality scores',
      status: 'current'
    },
    {
      step: 2,
      title: 'Click on Intent',
      description: 'Filter moments table to show relevant sessions',
      status: 'bug'
    },
    {
      step: 3,
      title: 'View Session Details',
      description: 'See transcript, topics, actions, quality reasoning',
      status: 'bug'
    }
  ];

  const qualityScoreExplanation = {
    highScore: 'Agent correctly follows instructions and adheres to required actions based on intent',
    lowScore: 'Answer is deemed irrelevant or unhelpful to the user\'s question',
    limitation: 'High score doesn\'t mean content is accurate - just that agent followed instructions correctly'
  };

  const customEvalNeeds = [
    {
      id: 'product-tagging',
      title: 'Product-Based Tagging',
      description: 'Tag sessions by product (VGPU, DGX) to track demand and identify content gaps',
      priority: 'high',
      quote: 'How many questions have been asked about VGPU? How many interactions about DGX?',
      icon: Target
    },
    {
      id: 'business-eval',
      title: 'Valid Response Classification',
      description: 'Custom classification: valid response, action items (missing article, incorrect logic, new design)',
      priority: 'critical',
      quote: 'A valid response is a relevant semantic response. Invalid is when agent lacked proper instruction.',
      icon: Star
    },
    {
      id: 'topic-taxonomy',
      title: 'Topic Restructuring',
      description: 'Topics need reclassification - case creation vs troubleshooting vs entitlement info',
      priority: 'high',
      quote: 'Topics are too high level, too general. Pre-RMA, post-RMA don\'t reflect evolved agent capabilities.',
      icon: Settings
    },
    {
      id: 'questions-per-session',
      title: 'Questions Per Session Metric',
      description: 'Understand customer behavior - one question or highly interactive?',
      priority: 'high',
      quote: 'What is the behavior for our customers? Do they ask one question or is it more interactive?',
      icon: MessageSquare
    }
  ];

  const workarounds = [
    {
      id: 'intent-filter',
      title: 'Intent Tag Filter Workaround',
      description: 'Use moments table filter by "intent tags" after observing poor performance on dashboard',
      status: 'available',
      steps: [
        'Go to moments table',
        'Select filter → intent tags',
        'Select intent from list',
        'View filtered sessions'
      ]
    },
    {
      id: 'semantic-layer',
      title: 'Semantic Layer Reports',
      description: 'Create Data Cloud reports on semantic model for custom views like abandoned sessions',
      status: 'available',
      steps: [
        'Open Data Cloud app → Semantic Layer tab',
        'Access Service Agent Analytics SDM',
        'Use "test model" to query session data',
        'Create report with any fields from moments table',
        'All fields documented in help docs'
      ]
    },
    {
      id: 'custom-fields',
      title: 'Custom Messaging Session Fields',
      description: 'Add custom fields to messaging session object for manual tagging and classification',
      status: 'in-use',
      steps: [
        'Add fields: valid response, action item, Jira number, topic',
        'Review each conversation weekly',
        'Classify by topic (case creation, troubleshooting, etc.)',
        'Tag action items (missing article, incorrect logic, new design)',
        'Create reports to track reviewed vs unreviewed'
      ]
    },
    {
      id: 'custom-llm-flow',
      title: 'External LLM Evaluation',
      description: 'Build flow to send session data to external LLM for custom business evaluation',
      status: 'complex',
      steps: [
        'Build flow triggered on session close',
        'Send session data to LLM provider',
        'Run custom eval using prompt',
        'Connect score back to session',
        'Create custom reports/dashboards'
      ]
    }
  ];

  return (
    <div className="nvidia-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="NVIDIA" />
      
      <header className="nvidia-header">
        <div className="header-badge">NVIDIA × Agentforce Analytics</div>
        <h1 className="nvidia-title">Agent Observability Review</h1>
        <p className="nvidia-subtitle">Navigation & Custom Evaluation Needs</p>
        <div className="nvidia-date">December 2025</div>
      </header>

      {/* Navigation */}
      <nav className="nvidia-nav">
        <button
          className={`nvidia-tab ${activeSection === 'navigation' ? 'active' : ''}`}
          onClick={() => setActiveSection('navigation')}
        >
          <Navigation size={18} />
          <span>Navigation Issues</span>
        </button>
        <button
          className={`nvidia-tab ${activeSection === 'quality' ? 'active' : ''}`}
          onClick={() => setActiveSection('quality')}
        >
          <Star size={18} />
          <span>Quality Score</span>
        </button>
        <button
          className={`nvidia-tab ${activeSection === 'customization' ? 'active' : ''}`}
          onClick={() => setActiveSection('customization')}
        >
          <Settings size={18} />
          <span>Custom Evaluation</span>
        </button>
      </nav>

      {/* Navigation Issues Section */}
      {activeSection === 'navigation' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Navigation size={24} /> Navigation Pain Points</h2>
            <p>Difficulty navigating from dashboard data to session details</p>
          </div>

          <div className="issues-list">
            {navigationIssues.map((issue) => {
              const IconComponent = issue.icon;
              const isExpanded = expandedItem === issue.id;
              return (
                <div
                  key={issue.id}
                  className={`issue-card ${issue.status} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(issue.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(issue.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="issue-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="issue-content">
                    <h4>{issue.title}</h4>
                    <p>{issue.description}</p>
                    <span className={`issue-status ${issue.status}`}>
                      {issue.status === 'bug' ? <Bug size={14} /> : <CheckCircle size={14} />}
                      {issue.status}
                    </span>
                  </div>
                  <div className="expand-hint">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  {isExpanded && (
                    <div className="issue-quote">
                      <MessageSquare size={14} />
                      <span>"{issue.quote}"</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="desired-flow-section">
            <h3><ArrowRight size={20} /> Desired Navigation Flow</h3>
            <div className="flow-steps">
              {desiredNavFlow.map((step) => (
                <div key={step.step} className={`flow-step ${step.status}`}>
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {step.step < desiredNavFlow.length && (
                    <ArrowRight size={20} className="step-arrow" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="workaround-section">
            <h3><Lightbulb size={20} /> Available Workarounds</h3>
            <div className="workarounds-grid">
              {workarounds.map((wa) => {
                const isExpanded = expandedItem === wa.id;
                return (
                  <div
                    key={wa.id}
                    className={`workaround-card ${wa.status} ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => handleItemClick(wa.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleItemClick(wa.id);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isExpanded}
                  >
                    <div className="wa-header">
                      <h4>{wa.title}</h4>
                      <span className={`wa-status ${wa.status}`}>{wa.status}</span>
                    </div>
                    <p>{wa.description}</p>
                    {isExpanded && (
                      <div className="wa-steps">
                        <h5>Steps:</h5>
                        <ol>
                          {wa.steps.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                    <div className="expand-hint">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Quality Score Section */}
      {activeSection === 'quality' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Star size={24} /> Quality Score Explained</h2>
            <p>Understanding how the out-of-box quality score works</p>
          </div>

          <div className="quality-explanation">
            <div className="quality-card high">
              <div className="quality-header">
                <CheckCircle size={24} />
                <h4>High Quality Score</h4>
              </div>
              <p>{qualityScoreExplanation.highScore}</p>
            </div>

            <div className="quality-card low">
              <div className="quality-header">
                <AlertCircle size={24} />
                <h4>Low Quality Score</h4>
              </div>
              <p>{qualityScoreExplanation.lowScore}</p>
            </div>

            <div className="quality-card limitation">
              <div className="quality-header">
                <Zap size={24} />
                <h4>Key Limitation</h4>
              </div>
              <p>{qualityScoreExplanation.limitation}</p>
            </div>
          </div>

          <div className="context-note-nvidia">
            <MessageSquare size={18} />
            <div>
              <strong>NVIDIA's Challenge:</strong> "The scoring was high but Jana, do you think the response 
              was good enough? The quality score is based on following instructions correctly, but that doesn't 
              mean the content was accurate for our business needs."
              <span className="quote-source">— Maor Goldfarb</span>
            </div>
          </div>

          <div className="quality-insight">
            <h3><Lightbulb size={20} /> Key Insight</h3>
            <p>
              The out-of-box quality score measures <strong>procedural correctness</strong> (did the agent follow 
              its instructions?), not <strong>content accuracy</strong> (was the answer factually correct for this 
              specific business domain?). This gap is why NVIDIA needs custom business evaluations.
            </p>
          </div>
        </section>
      )}

      {/* Custom Evaluation Section */}
      {activeSection === 'customization' && (
        <section className="workflow-section">
          <div className="section-header">
            <h2><Settings size={24} /> Custom Evaluation Needs</h2>
            <p>Business-specific evaluation requirements not covered by out-of-box scoring</p>
          </div>

          <div className="custom-needs-grid">
            {customEvalNeeds.map((need) => {
              const IconComponent = need.icon;
              const isExpanded = expandedItem === need.id;
              return (
                <div
                  key={need.id}
                  className={`custom-need-card ${need.priority} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handleItemClick(need.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(need.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="need-header">
                    <div className="need-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="need-title">
                      <h4>{need.title}</h4>
                      <span className={`priority-badge ${need.priority}`}>{need.priority}</span>
                    </div>
                  </div>
                  <p>{need.description}</p>
                  {isExpanded && (
                    <div className="need-quote">
                      <MessageSquare size={14} />
                      <span>"{need.quote}"</span>
                    </div>
                  )}
                  <div className="expand-hint">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="timeline-section">
            <h3><RefreshCw size={20} /> Custom Evaluation Timeline</h3>
            <div className="timeline-card">
              <div className="timeline-item current">
                <span className="timeline-label">Now</span>
                <span className="timeline-desc">Workaround: External LLM flow for custom eval</span>
              </div>
              <div className="timeline-arrow">→</div>
              <div className="timeline-item future">
                <span className="timeline-label">Mid-2026</span>
                <span className="timeline-desc">Native custom evaluations on session data (GA)</span>
              </div>
            </div>
            <div className="context-note-nvidia warning">
              <AlertCircle size={18} />
              <div>
                <strong>Timeline Concern:</strong> "Waiting until mid-next year for custom evaluations 
                is too late for NVIDIA's internal business needs."
                <span className="quote-source">— Maor Goldfarb</span>
              </div>
            </div>
          </div>

          <div className="next-steps">
            <h3><HelpCircle size={20} /> Next Steps</h3>
            <ul>
              <li><CheckCircle size={14} /> Investigate ETA for navigation bug fix</li>
              <li><CheckCircle size={14} /> Use intent filter workaround in moments table</li>
              <li><CheckCircle size={14} /> Define critical business evaluation criteria</li>
              <li><CheckCircle size={14} /> Build external LLM flow for custom business evaluation</li>
              <li><CheckCircle size={14} /> Implement user feedback mechanism in chat</li>
            </ul>
          </div>
        </section>
      )}

      <footer className="nvidia-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">NVIDIA Agentforce Analytics Review - December 2025</span>
        </div>
        <a 
          href="?view=nvidia-ux" 
          className="ux-link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=nvidia-ux';
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

export default NvidiaWorkflow;

