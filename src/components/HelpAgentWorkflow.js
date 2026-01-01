import React, { useState } from 'react';
import { 
  Users, 
  Target,
  BarChart3,
  Clock,
  TrendingDown,
  AlertTriangle,
  Settings,
  Database,
  FileText,
  Zap,
  Eye,
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowDown,
  Brain,
  RefreshCw,
  Search,
  Lightbulb,
  Activity,
  Wrench
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './HelpAgentWorkflow.css';

const HelpAgentWorkflow = () => {
  const [activeNode, setActiveNode] = useState(null);

  const handleNodeClick = (nodeId) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  };

  const handleNodeKeyDown = (e, nodeId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNodeClick(nodeId);
    }
  };

  return (
    <div className="help-agent-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Help Agent" />
      <header className="help-agent-header">
        <div className="header-badge">Salesforce Help Agent</div>
        <h1 className="help-agent-title">Agentforce Observability</h1>
        <p className="help-agent-subtitle">Answer Quality, Metrics & Root Cause Analysis</p>
        <div className="help-agent-date">December 15, 2025</div>
        <div className="scale-challenge">
          <div className="scale-label">Scale Challenge:</div>
          <div className="scale-numbers">
            <span className="current">250K/week</span>
            <ArrowRight size={20} />
            <span className="goal">2M/month</span>
          </div>
        </div>
      </header>

      <div className="workflow-section">
        <div className="section-label team-section">Team Accountability</div>
        
        {/* Team Structure */}
        <section className="team-grid">
          <div 
            className={`team-card ${activeNode === 'answer-quality' ? 'active' : ''}`}
            onClick={() => handleNodeClick('answer-quality')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'answer-quality')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'answer-quality'}
          >
            <div className="team-icon primary">
              <Target size={28} />
            </div>
            <h3>Answer Quality</h3>
            <p className="team-role">Primary Accountability</p>
            <p className="team-desc">Correct, complete, and accurate answers</p>
            {activeNode === 'answer-quality' && (
              <div className="team-details">
                <ul>
                  <li>Evaluations function reviews how conversations failed</li>
                  <li>Focus on retrieval failures vs subject matter</li>
                  <li>"Agents testing agents" custom tool</li>
                  <li>Synthetic + real conversations</li>
                </ul>
              </div>
            )}
          </div>

          <div 
            className={`team-card ${activeNode === 'instruction' ? 'active' : ''}`}
            onClick={() => handleNodeClick('instruction')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'instruction')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'instruction'}
          >
            <div className="team-icon secondary">
              <FileText size={28} />
            </div>
            <h3>Instruction Design</h3>
            <p className="team-role">Multi-turn Quality</p>
            <p className="team-desc">Instruction adherence & connected sets</p>
            {activeNode === 'instruction' && (
              <div className="team-details">
                <ul>
                  <li>High conversation quality across turns</li>
                  <li>Key part of observability</li>
                  <li>Instruction adherence tracking</li>
                  <li>Connected instruction sets</li>
                </ul>
              </div>
            )}
          </div>

          <div 
            className={`team-card ${activeNode === 'data-strategy' ? 'active' : ''}`}
            onClick={() => handleNodeClick('data-strategy')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'data-strategy')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'data-strategy'}
          >
            <div className="team-icon secondary">
              <Database size={28} />
            </div>
            <h3>Data Cloud Strategy</h3>
            <p className="team-role">Data Health</p>
            <p className="team-desc">Content, chunking, embeddings, retriever</p>
            {activeNode === 'data-strategy' && (
              <div className="team-details">
                <ul>
                  <li>Content transformation</li>
                  <li>Chunking strategy</li>
                  <li>Embeddings optimization</li>
                  <li>Retriever strategy</li>
                </ul>
              </div>
            )}
          </div>

          <div 
            className={`team-card ${activeNode === 'observability-pm' ? 'active' : ''}`}
            onClick={() => handleNodeClick('observability-pm')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'observability-pm')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'observability-pm'}
          >
            <div className="team-icon primary">
              <Eye size={28} />
            </div>
            <h3>Observability PM</h3>
            <p className="team-role">Raymond Laghaeian</p>
            <p className="team-desc">Measuring what leadership cares about</p>
            {activeNode === 'observability-pm' && (
              <div className="team-details">
                <ul>
                  <li>Full-time Observability PM role</li>
                  <li>Ensure AI tech works as desired</li>
                  <li>Executive scorecard metrics</li>
                  <li>Leadership-focused measurements</li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="flow-arrow">
        <ArrowDown size={24} />
      </div>

      {/* Executive Scorecard */}
      <div className="workflow-section">
        <div className="section-label metrics-section">Executive Scorecard Metrics</div>
        
        <section className="metrics-grid">
          <div 
            className={`metric-card primary-metric ${activeNode === 'usage' ? 'active' : ''}`}
            onClick={() => handleNodeClick('usage')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'usage')}
            tabIndex={0}
            role="button"
          >
            <div className="metric-icon">
              <Activity size={24} />
            </div>
            <h4>Usage</h4>
            <div className="metric-breakdown">
              <span>Total Sessions + Conversation Rate</span>
            </div>
            {activeNode === 'usage' && (
              <div className="metric-details">
                <p><strong>Total Sessions:</strong> Eligible sessions that could use AgentForce</p>
                <p><strong>Conversation Rate:</strong> Sessions that DO use AgentForce (case deflection)</p>
              </div>
            )}
          </div>

          <div 
            className={`metric-card primary-metric ${activeNode === 'resolution' ? 'active' : ''}`}
            onClick={() => handleNodeClick('resolution')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'resolution')}
            tabIndex={0}
            role="button"
          >
            <div className="metric-icon">
              <CheckCircle size={24} />
            </div>
            <h4>Resolution Rate</h4>
            <div className="metric-breakdown">
              <span>Implicit + Explicit Confirmation</span>
            </div>
            {activeNode === 'resolution' && (
              <div className="metric-details">
                <p><strong>Implicit:</strong> No case created after conversation</p>
                <p><strong>Explicit:</strong> Customer Confirmed Resolution survey</p>
              </div>
            )}
          </div>

          <div 
            className={`metric-card ${activeNode === 'latency' ? 'active' : ''}`}
            onClick={() => handleNodeClick('latency')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'latency')}
            tabIndex={0}
            role="button"
          >
            <div className="metric-icon">
              <Clock size={24} />
            </div>
            <h4>Latency</h4>
            <div className="metric-breakdown">
              <span>P50 & P90 Time to Last Token</span>
            </div>
            {activeNode === 'latency' && (
              <div className="metric-details">
                <p>Expanding to include:</p>
                <ul>
                  <li>Time to first token</li>
                  <li>All calls in between</li>
                  <li>Past issue: Version switch +3sec</li>
                </ul>
              </div>
            )}
          </div>

          <div 
            className={`metric-card ${activeNode === 'abandonment' ? 'active' : ''}`}
            onClick={() => handleNodeClick('abandonment')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'abandonment')}
            tabIndex={0}
            role="button"
          >
            <div className="metric-icon">
              <TrendingDown size={24} />
            </div>
            <h4>Abandonment Rate</h4>
            <div className="metric-breakdown">
              <span>Opens, Sees Welcome, Leaves</span>
            </div>
            {activeNode === 'abandonment' && (
              <div className="metric-details">
                <p>Exploring granular capture:</p>
                <ul>
                  <li>Prompted to take step → doesn't</li>
                  <li>Multiple abandonment points</li>
                </ul>
              </div>
            )}
          </div>

          <div 
            className={`metric-card ${activeNode === 'escalation' ? 'active' : ''}`}
            onClick={() => handleNodeClick('escalation')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'escalation')}
            tabIndex={0}
            role="button"
          >
            <div className="metric-icon">
              <AlertTriangle size={24} />
            </div>
            <h4>Escalation Rate</h4>
            <div className="metric-breakdown">
              <span>Resolution - Abandon = Escalation</span>
            </div>
            {activeNode === 'escalation' && (
              <div className="metric-details">
                <p>Results in case creation (cost reduction)</p>
                <p><strong>Unique Problem:</strong> Immediate Escalation</p>
                <p className="immediate-esc">33-37% immediately request human on first turn</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="flow-arrow">
        <ArrowDown size={24} />
      </div>

      {/* LLM as Judge */}
      <div className="workflow-section">
        <div className="section-label llm-section">LLM as Judge Approach</div>
        
        <section className="llm-flow">
          <div 
            className={`llm-card ${activeNode === 'llm-symptoms' ? 'active' : ''}`}
            onClick={() => handleNodeClick('llm-symptoms')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'llm-symptoms')}
            tabIndex={0}
            role="button"
          >
            <div className="llm-icon">
              <Search size={28} />
            </div>
            <h4>1. Identify Symptoms</h4>
            <p>LLM as judge identifies sessions with failures</p>
            {activeNode === 'llm-symptoms' && (
              <div className="llm-details">
                <p>Applied to synthetic utterances (not real conversations yet)</p>
                <p>Monthly synthetic baseline report</p>
                <p>Manually determined failure taxonomy (currently)</p>
              </div>
            )}
          </div>

          <ArrowRight className="llm-arrow" size={20} />

          <div 
            className={`llm-card ${activeNode === 'llm-root-cause' ? 'active' : ''}`}
            onClick={() => handleNodeClick('llm-root-cause')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'llm-root-cause')}
            tabIndex={0}
            role="button"
          >
            <div className="llm-icon">
              <Brain size={28} />
            </div>
            <h4>2. Root Cause Analysis</h4>
            <p>Analyze multiple failed sessions + config + context</p>
            {activeNode === 'llm-root-cause' && (
              <div className="llm-details">
                <p>Analyze: response + query + agent config together</p>
                <p>Provide diagnostic summary</p>
                <p>Pinpoint which part needs fine-tuning</p>
              </div>
            )}
          </div>

          <ArrowRight className="llm-arrow" size={20} />

          <div 
            className={`llm-card ${activeNode === 'llm-action' ? 'active' : ''}`}
            onClick={() => handleNodeClick('llm-action')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'llm-action')}
            tabIndex={0}
            role="button"
          >
            <div className="llm-icon">
              <Wrench size={28} />
            </div>
            <h4>3. Assign & Fix</h4>
            <p>Route to program/product managers for fixes</p>
            {activeNode === 'llm-action' && (
              <div className="llm-details">
                <p>Based on where problem sits:</p>
                <ul>
                  <li>Instructions</li>
                  <li>Data Cloud</li>
                  <li>Retriever</li>
                  <li>Other components</li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="flow-arrow">
        <ArrowDown size={24} />
      </div>

      {/* Pain Points */}
      <div className="workflow-section">
        <div className="section-label pain-section">Critical Pain Points</div>
        
        <section className="pain-points-grid">
          <div className="pain-point-card">
            <AlertTriangle size={24} />
            <h4>Lack of Tooling</h4>
            <p>"Currently lack robust tooling for investigation"</p>
            <ul>
              <li>Manual process examining session traces</li>
              <li>No way to show relevant chunks</li>
              <li>Can't see possible conflicts</li>
              <li>Requires manual testing & documentation</li>
            </ul>
          </div>

          <div className="pain-point-card">
            <XCircle size={24} />
            <h4>Black-Box Components</h4>
            <p>Retriever & proprietary planner are opaque</p>
            <ul>
              <li>Retriever returning wrong chunks</li>
              <li>Planner impacts instructions via multiple calls</li>
              <li>Can't see internal decision-making</li>
              <li>Painful to backtrack failures</li>
            </ul>
          </div>

          <div className="pain-point-card">
            <Settings size={24} />
            <h4>No "What If" Analysis</h4>
            <p>Can't simulate impact of changes</p>
            <ul>
              <li>Token count changes</li>
              <li>Number of retrieved chunks</li>
              <li>Impact on answer quality</li>
              <li>Impact on latency</li>
            </ul>
          </div>

          <div className="pain-point-card">
            <BarChart3 size={24} />
            <h4>Aggregate Analysis Challenge</h4>
            <p>30% failure rate at 2M conversations/month</p>
            <ul>
              <li>Must troubleshoot at scale</li>
              <li>Per-issue investigation too slow</li>
              <li>Need pattern identification</li>
              <li>Reduce manual investigation time</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="flow-arrow">
        <ArrowDown size={24} />
      </div>

      {/* Troubleshooting Process */}
      <div className="workflow-section">
        <div className="section-label process-section">5-Step Troubleshooting Process</div>
        
        <section className="troubleshooting-steps">
          <div className="troubleshooting-question">
            <Lightbulb size={20} />
            <span>Primary Question: "Is this a data issue or a technology issue?"</span>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h5>Eliminate Improbability</h5>
                <p>Focus on most likely source of failure</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h5>Check Pipeline Components</h5>
                <p>Instructions → Prompt → Custom Action → Retriever → Planner</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h5>Identify Patterns</h5>
                <p>Early pattern identification to focus investigations</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h5>Prioritize Fixes</h5>
                <p>Technology fixes (higher impact) vs Content fixes (faster)</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h5>Monitor Drift</h5>
                <p>Long-term impacts and trends over time</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="help-agent-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Help Agent / Agentforce Observability - Dec 15, 2025</span>
        </div>
        <a 
          href="?view=help-agent-ux" 
          className="ux-link"
          tabIndex={0}
          aria-label="View UX Findings & Pain Points"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + window.location.pathname + '?view=help-agent-ux';
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

export default HelpAgentWorkflow;

