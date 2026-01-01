import React, { useState } from 'react';
import { 
  MessageSquare, 
  Bot, 
  Cog, 
  BarChart3, 
  Target, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Lightbulb,
  Users,
  TrendingUp,
  Database,
  FileText,
  Bug,
  Zap,
  ArrowRight,
  ArrowDown,
  ChevronRight
} from 'lucide-react';
import './IndeedWorkflowChart.css';

const IndeedWorkflowChart = () => {
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
    <div className="workflow-container">
      <header className="workflow-header">
        <div className="header-badge">Indeed × Agentforce</div>
        <h1 className="workflow-title">Observability Workflow</h1>
        <p className="workflow-subtitle">Chat Classification & Resolution Optimization Pipeline</p>
        <div className="workflow-date">December 16, 2025</div>
      </header>

      <div className="flowchart">
        {/* Entry Point */}
        <section className="flow-section entry-section">
          <div 
            className={`flow-node entry-node ${activeNode === 'entry' ? 'active' : ''}`}
            onClick={() => handleNodeClick('entry')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'entry')}
            tabIndex={0}
            role="button"
            aria-label="Customer Chat Entry Point"
            aria-expanded={activeNode === 'entry'}
          >
            <div className="node-icon-wrapper entry-icon">
              <MessageSquare size={28} />
            </div>
            <div className="node-content">
              <h3>Customer Chat</h3>
              <p>Customers reach out via chat interface</p>
            </div>
          </div>
          {activeNode === 'entry' && (
            <div className="node-details">
              <p>Entry point for all customer interactions. Chats are captured and sent through the classification pipeline.</p>
            </div>
          )}
        </section>

        <div className="flow-connector">
          <ArrowDown size={24} />
        </div>

        {/* N8N Orchestrator */}
        <section className="flow-section orchestrator-section">
          <div 
            className={`flow-node orchestrator-node ${activeNode === 'n8n' ? 'active' : ''}`}
            onClick={() => handleNodeClick('n8n')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'n8n')}
            tabIndex={0}
            role="button"
            aria-label="N8N Workflow Orchestrator"
            aria-expanded={activeNode === 'n8n'}
          >
            <div className="node-icon-wrapper orchestrator-icon">
              <Cog size={28} />
            </div>
            <div className="node-content">
              <h3>N8N Workflow Orchestrator</h3>
              <p>Automates chat evaluation with AI prompts</p>
            </div>
            <div className="node-badge">Automation Engine</div>
          </div>
          {activeNode === 'n8n' && (
            <div className="node-details">
              <ul>
                <li>Controls categorization prompts for consistency</li>
                <li>Maintains custom 20-category taxonomy</li>
                <li>Enables tracking metrics over time</li>
                <li>Replaces reactive, manual one-by-one review</li>
              </ul>
            </div>
          )}
        </section>

        <div className="flow-connector">
          <ArrowDown size={24} />
        </div>

        {/* AI Classification Branch */}
        <section className="flow-section classification-section">
          <h2 className="section-title">
            <Bot size={20} />
            AI Classification Pipeline
          </h2>
          <div className="classification-grid">
            {/* Status Classification */}
            <div 
              className={`flow-node classification-node status-node ${activeNode === 'status' ? 'active' : ''}`}
              onClick={() => handleNodeClick('status')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'status')}
              tabIndex={0}
              role="button"
              aria-label="Resolution Status Classification"
              aria-expanded={activeNode === 'status'}
            >
              <div className="node-icon-wrapper status-icon">
                <CheckCircle size={24} />
              </div>
              <div className="node-content">
                <h4>Resolution Status</h4>
                <p>Resolved vs Abandoned</p>
              </div>
              <div className="status-indicators">
                <span className="indicator resolved"><CheckCircle size={14} /> Resolved</span>
                <span className="indicator abandoned"><XCircle size={14} /> Abandoned</span>
                <span className="indicator escalated"><AlertTriangle size={14} /> Escalated</span>
              </div>
            </div>

            {/* Problem Category */}
            <div 
              className={`flow-node classification-node category-node ${activeNode === 'category' ? 'active' : ''}`}
              onClick={() => handleNodeClick('category')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'category')}
              tabIndex={0}
              role="button"
              aria-label="Problem Category Classification"
              aria-expanded={activeNode === 'category'}
            >
              <div className="node-icon-wrapper category-icon">
                <FileText size={24} />
              </div>
              <div className="node-content">
                <h4>Problem Category</h4>
                <p>20 Custom Categories</p>
              </div>
              <div className="category-examples">
                <span className="category-tag">Candidate Management</span>
                <span className="category-tag">Account Issues</span>
                <span className="category-tag">+18 more</span>
              </div>
            </div>

            {/* Failure Reason */}
            <div 
              className={`flow-node classification-node failure-node ${activeNode === 'failure' ? 'active' : ''}`}
              onClick={() => handleNodeClick('failure')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'failure')}
              tabIndex={0}
              role="button"
              aria-label="Agent Failure Reason Classification"
              aria-expanded={activeNode === 'failure'}
            >
              <div className="node-icon-wrapper failure-icon">
                <AlertTriangle size={24} />
              </div>
              <div className="node-content">
                <h4>Agent Failure Reason</h4>
                <p>Why did the agent fail?</p>
              </div>
              <div className="failure-examples">
                <span className="failure-tag">Data Issues</span>
                <span className="failure-tag">Knowledge Gap</span>
                <span className="failure-tag">Routing Error</span>
              </div>
            </div>
          </div>
          {(activeNode === 'status' || activeNode === 'category' || activeNode === 'failure') && (
            <div className="node-details classification-details">
              <p><strong>Target Accuracy:</strong> 95-99% compared to manual evaluation</p>
              <p>Uses AI prompts to classify thousands of chats automatically</p>
            </div>
          )}
        </section>

        <div className="flow-connector">
          <ArrowDown size={24} />
        </div>

        {/* Analysis & Insights */}
        <section className="flow-section analysis-section">
          <div className="analysis-row">
            <div 
              className={`flow-node analysis-node ${activeNode === 'pivot' ? 'active' : ''}`}
              onClick={() => handleNodeClick('pivot')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'pivot')}
              tabIndex={0}
              role="button"
              aria-label="Data Analysis with Pivot Tables"
              aria-expanded={activeNode === 'pivot'}
            >
              <div className="node-icon-wrapper analysis-icon">
                <Database size={24} />
              </div>
              <div className="node-content">
                <h4>Data Analysis</h4>
                <p>Build pivot tables from classified data</p>
              </div>
            </div>

            <div className="flow-arrow-horizontal">
              <ArrowRight size={20} />
            </div>

            <div 
              className={`flow-node analysis-node ${activeNode === 'buckets' ? 'active' : ''}`}
              onClick={() => handleNodeClick('buckets')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'buckets')}
              tabIndex={0}
              role="button"
              aria-label="Work Bucket Identification"
              aria-expanded={activeNode === 'buckets'}
            >
              <div className="node-icon-wrapper buckets-icon">
                <BarChart3 size={24} />
              </div>
              <div className="node-content">
                <h4>Work Buckets</h4>
                <p>Identify high-escalation areas</p>
              </div>
            </div>

            <div className="flow-arrow-horizontal">
              <ArrowRight size={20} />
            </div>

            <div 
              className={`flow-node analysis-node ${activeNode === 'deepdive' ? 'active' : ''}`}
              onClick={() => handleNodeClick('deepdive')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'deepdive')}
              tabIndex={0}
              role="button"
              aria-label="Deep Dive Analysis"
              aria-expanded={activeNode === 'deepdive'}
            >
              <div className="node-icon-wrapper deepdive-icon">
                <Target size={24} />
              </div>
              <div className="node-content">
                <h4>Deep Dives</h4>
                <p>Investigate high-impact areas</p>
              </div>
            </div>
          </div>
          {activeNode === 'buckets' && (
            <div className="node-details">
              <p><strong>Example:</strong> "Candidate Management" identified as high-escalation bucket</p>
            </div>
          )}
        </section>

        <div className="flow-connector">
          <ArrowDown size={24} />
        </div>

        {/* Metrics Section */}
        <section className="flow-section metrics-section">
          <h2 className="section-title">
            <TrendingUp size={20} />
            Key Metrics
          </h2>
          <div className="metrics-grid">
            <div 
              className={`metric-card ${activeNode === 'csat' ? 'active' : ''}`}
              onClick={() => handleNodeClick('csat')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'csat')}
              tabIndex={0}
              role="button"
              aria-label="CSAT Metric"
            >
              <div className="metric-value">3-4</div>
              <div className="metric-label">CSAT Score</div>
              <div className="metric-status success">
                <CheckCircle size={14} /> Exceeds Goal (3)
              </div>
            </div>
            <div 
              className={`metric-card ${activeNode === 'resolution' ? 'active' : ''}`}
              onClick={() => handleNodeClick('resolution')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'resolution')}
              tabIndex={0}
              role="button"
              aria-label="Resolution Rate Metric"
            >
              <div className="metric-value">↑</div>
              <div className="metric-label">Resolution Rate</div>
              <div className="metric-status focus">
                <Target size={14} /> Current Focus
              </div>
            </div>
            <div 
              className={`metric-card ${activeNode === 'escalation' ? 'active' : ''}`}
              onClick={() => handleNodeClick('escalation')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'escalation')}
              tabIndex={0}
              role="button"
              aria-label="Escalation Rate Metric"
            >
              <div className="metric-value">↓</div>
              <div className="metric-label">Escalation Rate</div>
              <div className="metric-status warning">
                <AlertTriangle size={14} /> Reduce
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Loop */}
        <section className="flow-section feedback-section">
          <h2 className="section-title">
            <RefreshCw size={20} />
            Continuous Improvement Loop
          </h2>
          <div className="feedback-loop">
            <div 
              className={`flow-node feedback-node ${activeNode === 'manual' ? 'active' : ''}`}
              onClick={() => handleNodeClick('manual')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'manual')}
              tabIndex={0}
              role="button"
              aria-label="Manual Evaluation"
            >
              <div className="node-icon-wrapper manual-icon">
                <Users size={24} />
              </div>
              <div className="node-content">
                <h4>Manual Evaluation</h4>
                <p>Sample review of classifications</p>
              </div>
            </div>
            
            <div className="feedback-arrow">
              <ChevronRight size={20} />
            </div>

            <div 
              className={`flow-node feedback-node ${activeNode === 'finetune' ? 'active' : ''}`}
              onClick={() => handleNodeClick('finetune')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'finetune')}
              tabIndex={0}
              role="button"
              aria-label="Prompt Fine-tuning"
            >
              <div className="node-icon-wrapper finetune-icon">
                <Zap size={24} />
              </div>
              <div className="node-content">
                <h4>Prompt Fine-tuning</h4>
                <p>Improve classification accuracy</p>
              </div>
            </div>

            <div className="feedback-arrow">
              <ChevronRight size={20} />
            </div>

            <div 
              className={`flow-node feedback-node ${activeNode === 'examples' ? 'active' : ''}`}
              onClick={() => handleNodeClick('examples')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'examples')}
              tabIndex={0}
              role="button"
              aria-label="Positive and Negative Examples"
            >
              <div className="node-icon-wrapper examples-icon">
                <Lightbulb size={24} />
              </div>
              <div className="node-content">
                <h4>+/- Examples</h4>
                <p>Resolved vs Escalated sessions</p>
              </div>
            </div>

            <div className="feedback-arrow loop-back">
              <RefreshCw size={20} />
            </div>
          </div>
        </section>

        {/* Debugging Mode */}
        <section className="flow-section debug-section">
          <h2 className="section-title">
            <Bug size={20} />
            Troubleshooting: Debugging Mode
          </h2>
          <div 
            className={`flow-node debug-node ${activeNode === 'debug' ? 'active' : ''}`}
            onClick={() => handleNodeClick('debug')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'debug')}
            tabIndex={0}
            role="button"
            aria-label="Debugging Mode Details"
            aria-expanded={activeNode === 'debug'}
          >
            <div className="debug-content">
              <div className="debug-header">
                <Bug size={24} />
                <h4>Chain of Thought Reasoning</h4>
              </div>
              <p className="debug-description">
                Prompt template instructs agent to share its reasoning, helping identify issues like:
              </p>
              <div className="debug-insights">
                <div className="insight-item">
                  <span className="insight-label">Goal Understanding</span>
                  <span className="insight-arrow">→</span>
                  <span className="insight-value">What the agent thinks it should do</span>
                </div>
                <div className="insight-item">
                  <span className="insight-label">Signal Detection</span>
                  <span className="insight-arrow">→</span>
                  <span className="insight-value">What signals triggered the response</span>
                </div>
                <div className="insight-item">
                  <span className="insight-label">Knowledge Matching</span>
                  <span className="insight-arrow">→</span>
                  <span className="insight-value">Which articles were matched</span>
                </div>
              </div>
              <div className="debug-finding">
                <AlertTriangle size={16} />
                <span>Key Finding: "Hallucinations" traced to flawed knowledge articles, not model errors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Improvements */}
        <section className="flow-section improvements-section">
          <h2 className="section-title">
            <TrendingUp size={20} />
            Historical Improvements
          </h2>
          <div className="improvements-timeline">
            <div 
              className={`improvement-card ${activeNode === 'topic' ? 'active' : ''}`}
              onClick={() => handleNodeClick('topic')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'topic')}
              tabIndex={0}
              role="button"
              aria-label="Topic Collision Fix"
            >
              <div className="improvement-phase">Phase 1</div>
              <h4>Topic Collision Fix</h4>
              <p>Annotated utterances to dictate routing (escalate, FAQ, etc.)</p>
              <div className="improvement-result success">
                <TrendingUp size={14} />
                <span>Significant resolution rate improvement</span>
              </div>
            </div>

            <div className="timeline-connector">
              <ArrowRight size={20} />
            </div>

            <div 
              className={`improvement-card ${activeNode === 'faq' ? 'active' : ''}`}
              onClick={() => handleNodeClick('faq')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'faq')}
              tabIndex={0}
              role="button"
              aria-label="FAQ Agent Improvement"
            >
              <div className="improvement-phase">Phase 2</div>
              <h4>FAQ Agent Redesign</h4>
              <p>Made FAQ prompt less deterministic, encourage conversation</p>
              <div className="improvement-result success">
                <TrendingUp size={14} />
                <span>Large increase in resolution rate</span>
              </div>
            </div>

            <div className="timeline-connector">
              <ArrowRight size={20} />
            </div>

            <div 
              className={`improvement-card current ${activeNode === 'current' ? 'active' : ''}`}
              onClick={() => handleNodeClick('current')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'current')}
              tabIndex={0}
              role="button"
              aria-label="Current Phase"
            >
              <div className="improvement-phase">Current</div>
              <h4>Escalation Reduction</h4>
              <p>Finalize categories (Dec) → Prompting work (Jan)</p>
              <div className="improvement-result in-progress">
                <RefreshCw size={14} />
                <span>In Progress</span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="flow-section timeline-section">
          <h2 className="section-title">
            <Target size={20} />
            Next Steps
          </h2>
          <div className="next-steps">
            <div className="step-card december">
              <div className="step-month">December 2024</div>
              <div className="step-content">
                <CheckCircle size={18} />
                <span>Finalize issue categories and problem types</span>
              </div>
            </div>
            <div className="step-arrow">
              <ArrowRight size={20} />
            </div>
            <div className="step-card january">
              <div className="step-month">January 2025</div>
              <div className="step-content">
                <Zap size={18} />
                <span>Begin prompting and fine-tuning for classification</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="workflow-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Indeed/Agentforce Observability Meeting - Dec 16, 2025</span>
        </div>
        <a 
          href="?view=agent-diagnostics" 
          className="diagnostics-link"
          tabIndex={0}
          aria-label="View Agent Diagnostics & Revelations"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + '?view=agent-diagnostics';
          }}
        >
          <Bug size={16} />
          <span>View Diagnostics & Revelations</span>
          <ArrowRight size={16} />
        </a>
      </footer>
    </div>
  );
};

export default IndeedWorkflowChart;

