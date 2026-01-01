import React, { useState } from 'react';
import {
  Eye, Search, Stethoscope, Wrench, CheckCircle, TrendingUp, ArrowRight,
  BarChart3, Filter, MessageSquare, Target, Database, FileText, Settings,
  RefreshCw, Activity, AlertTriangle, Lightbulb, ChevronRight, ChevronDown,
  ChevronUp, Users, BookOpen, Flag, Download, GitBranch, Zap, Shield, Brain, Layers
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './ObservabilityWorkflowGuide.css';

const ObservabilityWorkflowGuide = () => {
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [expandedStep, setExpandedStep] = useState(null);

  const handlePhaseClick = (phase) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
  };

  const handleStepClick = (step) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  const workflow = [
    {
      phase: 1,
      title: 'Discover Problems',
      icon: Eye,
      color: 'red',
      description: 'Identify sessions and areas where the agent is underperforming',
      steps: [
        {
          id: 'metrics-review',
          title: 'Review Executive Scorecard',
          what: 'Look at high-level metrics for drops or anomalies',
          how: [
            'Check Resolution Rate, CSAT, Abandonment Rate, Escalation Rate',
            'Compare current period vs previous (week-over-week, month-over-month)',
            'Look for trending down metrics (red indicators)',
            'Identify which metric is most concerning for business goals'
          ],
          tools: ['Performance Overview Dashboard', 'Agent Details View'],
          customerExample: 'Indeed: CSAT went from 3.0 → 4.0 (success), now focus on Resolution Rate',
          quote: '"Usage and resolution rate - these two metrics are super important."'
        },
        {
          id: 'drill-topics',
          title: 'Drill Down by Topic/Intent',
          what: 'Identify which topics or intents are performing poorly',
          how: [
            'Go to Breakdown section → Topics or Intents view',
            'Sort by quality score (ascending) or escalation rate (descending)',
            'Identify top 3-5 lowest performing topics',
            'Check volume - high volume + low quality = priority'
          ],
          tools: ['Quality Tab', 'Intents View', 'Topic Breakdown'],
          customerExample: 'Cellebrite: "I want to know what topics and what works within the topic or not"',
          quote: '"We want to see top 10 or top 5 lists to quickly identify strengths and weaknesses."'
        },
        {
          id: 'filter-sessions',
          title: 'Filter for Problematic Sessions',
          what: 'Get a list of specific sessions to investigate',
          how: [
            'Click on low-performing topic/intent',
            'Add filters: Quality Score ≤ Low, or Escalated = True',
            'Apply date range filter for recent issues',
            'Result: Curated list of sessions to review (e.g., 17 sessions ranked "low")'
          ],
          tools: ['Session Intent View', 'Filters', 'Quality Score Operator'],
          customerExample: 'Pearson: Filter intents by "less than low" to surface 17 problematic sessions',
          quote: '"You could drill into areas where some intents perform not as well as others."'
        }
      ]
    },
    {
      phase: 2,
      title: 'Investigate & Classify',
      icon: Search,
      color: 'orange',
      description: 'Review sessions manually to understand failure patterns',
      steps: [
        {
          id: 'review-sessions',
          title: 'Read Session Transcripts',
          what: 'Manually review each session to understand what went wrong',
          how: [
            'Click into individual messaging session',
            'Review full conversation transcript',
            'Look at user intent vs agent response',
            'Check which topics were triggered',
            'Identify if escalation was user-initiated or agent-initiated'
          ],
          tools: ['Messaging Session View', 'Session Trace'],
          customerExample: 'Lululemon: "Filter intents with escalation, then click through each conversation to understand why agent failed"',
          quote: '"We spend a lot of time reviewing session logs to classify if escalation was user-initiated or agent-initiated."'
        },
        {
          id: 'tag-classify',
          title: 'Tag & Classify Failures',
          what: 'Label sessions with failure reasons for pattern analysis',
          how: [
            'WORKAROUND: Export to Excel and add columns (customer type, score, reasoning)',
            'DESIRED: Use in-tool tagging to flag issue type',
            'Common tags: Knowledge Gap, Instruction Issue, Action Unavailable, Retrieval Failure',
            'Add notes explaining why it failed'
          ],
          tools: ['Excel (workaround)', 'In-tool flagging (requested)', 'Jira (current)'],
          customerExample: 'Cellebrite: "I take everything into an Excel file... I have my own three columns: customer type, score, and why"',
          quote: '"Give users the ability to review sessions, flag issues, and leave notes."'
        },
        {
          id: 'aggregate-patterns',
          title: 'Aggregate & Find Patterns',
          what: 'Look across multiple sessions to identify common failure reasons',
          how: [
            'MANUAL: Create pivot tables in Excel from exported data',
            'AUTOMATED: Use LLM to classify failure reasons across sessions',
            'Identify high-volume failure buckets (e.g., "Candidate Management")',
            'Calculate: X% failed due to knowledge gap, Y% due to retrieval'
          ],
          tools: ['Excel Pivot Tables', 'N8N (Indeed)', 'LLM as Judge (Help Agent)'],
          customerExample: 'Indeed: "Use N8N and AI to categorize chats into 20 categories to build pivot tables"',
          quote: '"We anticipate a feedback loop where we use manual evaluation to fine-tune the AI classification."'
        }
      ]
    },
    {
      phase: 3,
      title: 'Diagnose Root Cause',
      icon: Stethoscope,
      color: 'purple',
      description: 'Determine the specific component that needs fixing',
      steps: [
        {
          id: 'five-step-debug',
          title: 'Use Component Quality Analysis',
          what: 'Systematically check each component in the conversation pipeline (see diagram above)',
          how: [
            '1. The Utterance - Check clarity, specificity, topic collisions',
            '2. Instructions/Prompt - Validate correctness, clarity, completeness, consistency',
            '3. Retriever & Chunks - Check answer relevancy, faithfulness, chunk quality (BLACK BOX)',
            '4. Planner Steps - Validate step latency, faithfulness, step count (BLACK BOX)',
            '5. Agent Response - Measure completeness, correctness, tone, latency'
          ],
          tools: ['Debug Mode (Indeed)', 'Session Trace', 'RAG Quality Telemetry (needed)'],
          customerExample: 'Help Agent: "We approach troubleshooting using a five-step process to eliminate improbability and focus on the most likely source of failure"',
          quote: '"Implementing a debugging mode that instructed the agent to share its reasoning - this helped us understand why the agent was answering a particular way."'
        },
        {
          id: 'check-retrieval',
          title: 'Inspect Retrieved Chunks',
          what: 'Verify if the right knowledge was retrieved and used',
          how: [
            'CURRENT PAIN: Retriever is a "black box" - cannot see chunks',
            'WORKAROUND: Enable debug mode to see reasoning',
            'Check: Did retriever return relevant articles?',
            'Validate: Are the chunks semantically correct for the query?'
          ],
          tools: ['Debug Mode', 'Session Trace (limited)', 'Manual Testing'],
          customerExample: 'Help Agent: "The retriever and proprietary planner are black boxes... painful manual process of examining JSON outputs"',
          quote: '"We lack tooling for root cause investigation - requires manual testing and documentation."'
        },
        {
          id: 'human-validation',
          title: 'Compare Agent Score vs Human Score',
          what: 'Understand why agent scores differ from human evaluation',
          how: [
            'Look at LLM-as-Judge score for the session',
            'Have human (QA team) evaluate the same session',
            'Identify discrepancy: Is it knowledge gap or scoring criteria issue?',
            'Refine evaluation criteria or agent knowledge based on gap'
          ],
          tools: ['LLM as Judge', 'Manual QA Review', 'Custom Scorecards'],
          customerExample: 'Pearson: "Why is the agent saying it\'s high when a human looks at it, they don\'t think that?"',
          quote: '"The LLM should be a workbench for validation, not the primary definition source."'
        }
      ]
    },
    {
      phase: 4,
      title: 'Fix & Implement',
      icon: Wrench,
      color: 'blue',
      description: 'Make changes to resolve identified issues',
      steps: [
        {
          id: 'knowledge-updates',
          title: 'Update or Create Knowledge Articles',
          what: 'Fill knowledge gaps or correct inaccurate content',
          how: [
            'If "I don\'t have an answer" → Create new knowledge article',
            'If hallucination/wrong answer → Update existing article',
            'If outdated → Refresh content and expiration dates',
            'Add missing FAQs based on common questions'
          ],
          tools: ['Knowledge Management', 'Content CMS'],
          customerExample: 'Cellebrite: "Missing information on computer forensics, error codes, damaged devices"',
          quote: '"Let\'s create a knowledge article from your database to answer these type of questions."'
        },
        {
          id: 'instruction-refinement',
          title: 'Refine Instructions & Prompts',
          what: 'Update agent instructions to handle edge cases',
          how: [
            'Clarify guardrails and boundaries',
            'Add examples of desired behavior',
            'Update tone/empathy guidelines',
            'Add instructions for when to escalate vs continue'
          ],
          tools: ['Agent Builder', 'Prompt Templates'],
          customerExample: 'Indeed: "Redo FAQ prompt to be less deterministic and encourage conversation → large increase in resolution rate"',
          quote: '"After the third question, I\'m trying to reroute the customer - you need to speak with a live agent."'
        },
        {
          id: 'topic-routing',
          title: 'Fix Topic Routing & Utterances',
          what: 'Ensure user questions route to the correct topic',
          how: [
            'Add annotated utterances for better routing',
            'Fix topic collisions (same query → wrong topic)',
            'Test: "I got a new device. What do I do?" should route to Registration',
            'Update topic priorities'
          ],
          tools: ['Topic Configuration', 'Utterance Annotation'],
          customerExample: 'Indeed: "First addressed topic collisions by annotating utterances → significantly improved resolution rate"',
          quote: '"I would ask: How to register your device. You would ask: I got a new device. What do I do with it?"'
        },
        {
          id: 'test-sandbox',
          title: 'Test Changes in Sandbox',
          what: 'Validate fixes before deploying to production',
          how: [
            'REALITY: Most teams do NOT test heavily in sandbox',
            'Use synthetic testing ("Agents testing Agents")',
            'QA team validates with sample queries',
            'Run through common failure scenarios'
          ],
          tools: ['Sandbox Environment', 'Synthetic Testing', 'QA Team Review'],
          customerExample: 'Lululemon: "We do not run a large number of tests in sandbox - deployment relies on QA team validation"',
          quote: '"Our focus is primarily on production impacts... we are laser-focused on understanding long-term impacts."'
        }
      ]
    },
    {
      phase: 5,
      title: 'Deploy & Monitor',
      icon: CheckCircle,
      color: 'green',
      description: 'Release changes and track impact',
      steps: [
        {
          id: 'deploy-production',
          title: 'Deploy to Production',
          what: 'Push validated changes to live environment',
          how: [
            'Schedule deployment during low-traffic window',
            'Use versioning to compare before/after',
            'Monitor immediately after deployment for regressions',
            'Be prepared to roll back if issues arise'
          ],
          tools: ['Deployment Pipeline', 'Version Control'],
          customerExample: 'Help Agent: "Past issue where version switch drove latency up by 3 seconds"',
          quote: '"If issue impacts 20-30 sessions daily, we may pull the agent and switch to Einstein bot."'
        },
        {
          id: 'measure-impact',
          title: 'Measure Impact of Changes',
          what: 'Compare metrics before and after the fix',
          how: [
            'PAIN: Cannot filter by date range or version to compare',
            'WORKAROUND: Manually track metrics in spreadsheet',
            'DESIRED: Filter "Dec 1-7" (before) vs "Dec 8-14" (after)',
            'Calculate improvement percentage'
          ],
          tools: ['Before/After Filtering (requested)', 'Custom Reports', 'Excel'],
          customerExample: 'Nexo: "Need filtering beyond last 7 days or 30 days - need start/end dates to monitor impact after change"',
          quote: '"We want to be able to monitor the impact on metrics after a change to the agent."'
        },
        {
          id: 'iterate',
          title: 'Continuous Iteration',
          what: 'Repeat the cycle for ongoing improvement',
          how: [
            'Return to Phase 1: Discover new problems',
            'Track trends over time (drift detection)',
            'Build feedback loop: Manual review → Refine LLM-as-Judge',
            'Maintain backlog of known issues'
          ],
          tools: ['Dashboards', 'Jira Backlog', 'Spreadsheets'],
          customerExample: 'Indeed: "Feedback loop where we use manual evaluation of incorrect classifications to fine-tune the prompt"',
          quote: '"It\'s a whole story that we built... we started by building trust, correcting the prompt, changing from one big prompt to different topics."'
        }
      ]
    }
  ];

  const additionalSteps = [
    {
      id: 'scale-automation',
      title: '6. Scale with Automation (Advanced)',
      icon: Zap,
      description: 'For high-volume operations (250K+ sessions/week)',
      actions: [
        'Use LLM-as-Judge to automate failure classification',
        'Build N8N or workflow orchestrator for batch processing',
        'Implement custom scorecards with automated evaluation',
        'Create synthetic testing pipeline for continuous validation'
      ],
      customerExample: 'Indeed (N8N) + Help Agent (Synthetic Testing)',
      quote: '"We\'re using N8N to evaluate thousands of chats... the goal is to achieve 95-99% accuracy compared to manual evaluation."'
    },
    {
      id: 'governance',
      title: '7. Document & Govern (Enterprise)',
      icon: Shield,
      description: 'For regulated industries requiring audit trails',
      actions: [
        'Maintain documentation of all changes',
        'Track which sessions led to which fixes',
        'Provide audit trail for compliance',
        'Create approval workflows for production changes'
      ],
      customerExample: 'RBC, FedEx, Financial Services',
      quote: '"Governing bodies need us at the enterprise level to provide proof that we have proper observability."'
    }
  ];

  const getPhaseColor = (color) => `phase-${color}`;

  return (
    <div className="guide-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow Guide" customerName="All Customers" />
      
      <header className="guide-header">
        <div className="header-badge">Customer Research Synthesis</div>
        <h1 className="guide-title">Observability Workflow Guide</h1>
        <p className="guide-subtitle">End-to-End Process: Discover → Investigate → Diagnose → Fix → Monitor</p>
        <div className="guide-date">Based on 6 Customer Interviews - December 2025</div>
      </header>

      <div className="workflow-overview">
        <h2><Activity size={20} /> The Complete Journey</h2>
        <div className="overview-phases">
          {workflow.map((phase) => {
            const IconComponent = phase.icon;
            return (
              <div key={phase.phase} className={`overview-phase ${getPhaseColor(phase.color)}`}>
                <div className="overview-icon">
                  <IconComponent size={20} />
                </div>
                <div className="overview-content">
                  <span className="overview-number">{phase.phase}</span>
                  <strong>{phase.title}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Component Quality Analysis Diagram */}
      <section className="component-analysis-section">
        <h2><Layers size={20} /> Component Quality Analysis Framework</h2>
        <p className="section-subtitle">What to measure at each step of the agent conversation pipeline</p>
        
        <div className="component-diagram">
          <div className="diagram-header">
            <p>Analyzing the Quality of the Components of an Agentforce Conversation</p>
          </div>

          <div className="pipeline-flow">
            <div className="pipeline-step">User Query</div>
            <ArrowRight size={18} className="pipeline-arrow" />
            <div className="pipeline-step">LLM Instructions</div>
            <ArrowRight size={18} className="pipeline-arrow" />
            <div className="pipeline-step">Prompt & Topic</div>
            <ArrowRight size={18} className="pipeline-arrow" />
            <div className="pipeline-step">Custom Action</div>
            <ArrowRight size={18} className="pipeline-arrow" />
            <div className="pipeline-step highlight">Retriever</div>
            <ArrowRight size={18} className="pipeline-arrow" />
            <div className="pipeline-step highlight">Planner</div>
            <ArrowRight size={18} className="pipeline-arrow" />
            <div className="pipeline-step">Trust Gateway</div>
            <ArrowRight size={18} className="pipeline-arrow" />
            <div className="pipeline-step">LLM</div>
            <ArrowRight size={18} className="pipeline-arrow" />
            <div className="pipeline-step success">Agent Response</div>
          </div>

          <div className="component-metrics-grid">
            <div className="metric-group">
              <h4>The Utterance</h4>
              <ul>
                <li>Utterance quality (positive/negative/missing info)</li>
                <li>Rephrasing Rate (proxy for clarity/specificity)</li>
                <li>Topic Collisions</li>
                <li>Clarity, Specificity, Completeness</li>
              </ul>
            </div>

            <div className="metric-group">
              <h4>Instructions, Prompt, Topic, Action</h4>
              <ul>
                <li>Topic collisions</li>
                <li>Correctness</li>
                <li>Clarity</li>
                <li>Completeness</li>
                <li>Consistency</li>
                <li>Conciseness</li>
              </ul>
            </div>

            <div className="metric-group highlight">
              <h4>Chunks, Content</h4>
              <div className="rag-badge">RAG Quality Telemetry Needed</div>
              <ul>
                <li>Answer Relevancy (%)</li>
                <li>Faithfulness</li>
                <li>Information Completeness</li>
                <li>Content Completeness</li>
                <li>Content Relevance</li>
                <li>Conciseness</li>
                <li>Prompt Alignment Score</li>
                <li>Chunk Quality</li>
              </ul>
            </div>

            <div className="metric-group highlight">
              <h4>Planner Steps</h4>
              <div className="rag-badge">Black Box Issue</div>
              <ul>
                <li>Step Latency (Planner speed)</li>
                <li>Faithfulness</li>
                <li>Step Count</li>
              </ul>
            </div>

            <div className="metric-group">
              <h4>Prompt</h4>
              <ul>
                <li>Clarity</li>
                <li>Completeness</li>
                <li>Consistency</li>
                <li>Conciseness</li>
              </ul>
            </div>

            <div className="metric-group success">
              <h4>Agent Response</h4>
              <ul>
                <li>Completeness</li>
                <li>Correctness</li>
                <li>Relevance</li>
                <li>Faithfulness</li>
                <li>Clarity</li>
                <li>Tone and Helpfulness</li>
                <li>Conciseness</li>
                <li>Latency</li>
              </ul>
            </div>
          </div>

          <div className="diagram-note">
            <AlertTriangle size={16} />
            <p><strong>Customer Pain Point:</strong> Retriever and Planner metrics are currently a "black box" - 
            customers cannot see chunks retrieved or planner reasoning, making root cause analysis extremely difficult.</p>
          </div>
        </div>
      </section>

      {/* Main Workflow */}
      <section className="workflow-phases">
        {workflow.map((phase) => {
          const PhaseIcon = phase.icon;
          const isPhaseExpanded = expandedPhase === phase.phase;
          
          return (
            <div key={phase.phase} className="phase-section">
              <div 
                className={`phase-header ${getPhaseColor(phase.color)} ${isPhaseExpanded ? 'expanded' : ''}`}
                onClick={() => handlePhaseClick(phase.phase)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePhaseClick(phase.phase);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isPhaseExpanded}
              >
                <div className="phase-number">{phase.phase}</div>
                <div className={`phase-icon ${getPhaseColor(phase.color)}`}>
                  <PhaseIcon size={28} />
                </div>
                <div className="phase-title-section">
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </div>
                <div className="phase-expand">
                  {isPhaseExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>

              {isPhaseExpanded && (
                <div className="phase-steps">
                  {phase.steps.map((step) => {
                    const isStepExpanded = expandedStep === step.id;
                    return (
                      <div key={step.id} className="step-card">
                        <div 
                          className={`step-header ${isStepExpanded ? 'expanded' : ''}`}
                          onClick={() => handleStepClick(step.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleStepClick(step.id);
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-expanded={isStepExpanded}
                        >
                          <h4><ChevronRight size={16} /> {step.title}</h4>
                          <div className="step-expand-icon">
                            {isStepExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </div>
                        </div>
                        <p className="step-what"><strong>What:</strong> {step.what}</p>
                        
                        {isStepExpanded && (
                          <div className="step-details">
                            <div className="step-how">
                              <strong>How:</strong>
                              <ol>
                                {step.how.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ol>
                            </div>
                            <div className="step-tools">
                              <strong>Tools:</strong>
                              {step.tools.map((tool, i) => (
                                <span key={i} className="tool-chip">{tool}</span>
                              ))}
                            </div>
                            <div className="step-example">
                              <Lightbulb size={14} />
                              <div>
                                <strong>Customer Example:</strong>
                                <p>{step.customerExample}</p>
                              </div>
                            </div>
                            <div className="step-quote">
                              <MessageSquare size={14} />
                              <span>{step.quote}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Additional Steps */}
      <section className="additional-steps">
        <h2><Zap size={20} /> Advanced Steps (Optional)</h2>
        <div className="additional-grid">
          {additionalSteps.map((step) => {
            const IconComponent = step.icon;
            const isExpanded = expandedStep === step.id;
            return (
              <div 
                key={step.id} 
                className={`additional-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => handleStepClick(step.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStepClick(step.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
              >
                <div className="additional-header">
                  <div className="additional-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="additional-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  <div className="step-expand-icon">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="additional-details">
                    <ul>
                      {step.actions.map((action, i) => (
                        <li key={i}><CheckCircle size={14} /> {action}</li>
                      ))}
                    </ul>
                    <div className="additional-example">
                      <strong>Example:</strong> {step.customerExample}
                    </div>
                    <div className="step-quote">
                      <MessageSquare size={14} />
                      <span>{step.quote}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="key-takeaways">
        <h2><Brain size={20} /> Key Takeaways</h2>
        <div className="takeaways-grid">
          <div className="takeaway-card">
            <AlertTriangle size={20} />
            <strong>Pain Reality</strong>
            <p>Most work happens in Excel/manual processes because dashboards lack flexibility and drill-down capability.</p>
          </div>
          <div className="takeaway-card">
            <Eye size={20} />
            <strong>Black Box Problem</strong>
            <p>Cannot see retriever chunks, planner reasoning, or chain of thought - makes root cause analysis nearly impossible.</p>
          </div>
          <div className="takeaway-card">
            <Target size={20} />
            <strong>Production First</strong>
            <p>Teams do minimal sandbox testing. Real validation happens in production with live traffic.</p>
          </div>
          <div className="takeaway-card">
            <Users size={20} />
            <strong>QA Team Critical</strong>
            <p>Human review is essential for calibrating LLM-as-Judge and identifying edge cases at scale.</p>
          </div>
        </div>
      </section>

      <footer className="guide-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">6 Customer Research Sessions - December 2025</span>
        </div>
      </footer>
    </div>
  );
};

export default ObservabilityWorkflowGuide;

