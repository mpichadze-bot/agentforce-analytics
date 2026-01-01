import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileSpreadsheet, 
  MessageSquare, 
  AlertTriangle,
  TrendingUp,
  Mail,
  ArrowRight,
  ArrowDown,
  Eye,
  Search,
  CheckCircle,
  XCircle,
  Target,
  Lightbulb,
  Download,
  Edit3,
  RefreshCw,
  FileText,
  Database,
  Layers,
  Activity,
  Zap,
  BookOpen
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './CellebriteAnalyticsFlow.css';

const CellebriteAnalyticsFlow = () => {
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
    <div className="cellebrite-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Cellebrite" />
      <header className="cellebrite-header">
        <div className="header-badge">Cellebrite × Agentforce</div>
        <h1 className="cellebrite-title">Agent Analytics Workflow</h1>
        <p className="cellebrite-subtitle">Current State & Desired Future State</p>
        <div className="cellebrite-date">December 10, 2025 - Usability Study</div>
      </header>

      <div className="workflow-section">
        <div className="section-label current-state">Current State</div>
        
        {/* Current Analytics Dashboard */}
        <section className="flow-stage">
          <div 
            className={`stage-node dashboard-node ${activeNode === 'current-dashboard' ? 'active' : ''}`}
            onClick={() => handleNodeClick('current-dashboard')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'current-dashboard')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'current-dashboard'}
            aria-label="Current Analytics Dashboard"
          >
            <div className="node-icon-container inefficient">
              <BarChart3 size={32} />
            </div>
            <div className="node-info">
              <h3>Current Analytics Dashboard</h3>
              <p className="node-status inefficient">Not Efficient</p>
              <p className="node-desc">Salesforce Agent Analytics for Service Agent</p>
            </div>
          </div>
          {activeNode === 'current-dashboard' && (
            <div className="node-details-panel">
              <h4>Pain Points:</h4>
              <ul>
                <li><XCircle size={14} /> Engagement rate, escalation rate lack context</li>
                <li><XCircle size={14} /> Metrics not clickable - can't drill down</li>
                <li><XCircle size={14} /> Deflection rate definition is repetitive and not valuable</li>
                <li><XCircle size={14} /> Can't see all topics being used by agents</li>
                <li><XCircle size={14} /> Don't know how metrics are calculated</li>
              </ul>
            </div>
          )}
        </section>

        <div className="flow-arrow">
          <ArrowDown size={24} />
          <span>Data extraction workaround</span>
        </div>

        {/* Manual Excel Process */}
        <section className="flow-stage">
          <div 
            className={`stage-node excel-node ${activeNode === 'excel' ? 'active' : ''}`}
            onClick={() => handleNodeClick('excel')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'excel')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'excel'}
            aria-label="Manual Excel Workaround"
          >
            <div className="node-icon-container manual">
              <FileSpreadsheet size={32} />
            </div>
            <div className="node-info">
              <h3>Manual Excel Workaround</h3>
              <p className="node-status manual">Time-Intensive</p>
              <p className="node-desc">Export all feedback & create custom insights</p>
            </div>
          </div>
          {activeNode === 'excel' && (
            <div className="node-details-panel">
              <h4>Manual Process:</h4>
              <ul>
                <li><CheckCircle size={14} /> Export question, answer, user feedback</li>
                <li><CheckCircle size={14} /> Add custom columns: customer type, score (1-5), reason</li>
                <li><CheckCircle size={14} /> Track missing information & needed actions</li>
                <li><CheckCircle size={14} /> Create separate sheet: what's missing, what actions needed</li>
                <li><CheckCircle size={14} /> Generate management presentations from this data</li>
              </ul>
            </div>
          )}
        </section>

        <div className="flow-arrow">
          <ArrowDown size={24} />
          <span>Feedback collection</span>
        </div>

        {/* Alpha Customer Feedback */}
        <section className="flow-stage">
          <div 
            className={`stage-node alpha-node ${activeNode === 'alpha' ? 'active' : ''}`}
            onClick={() => handleNodeClick('alpha')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'alpha')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'alpha'}
            aria-label="Alpha Customer Feedback Loop"
          >
            <div className="node-icon-container alpha">
              <Users size={32} />
            </div>
            <div className="node-info">
              <h3>Alpha Customer Feedback</h3>
              <p className="node-status alpha">5 Customers</p>
              <p className="node-desc">White-glove service with direct communication</p>
            </div>
          </div>
          {activeNode === 'alpha' && (
            <div className="node-details-panel">
              <h4>Process:</h4>
              <ul>
                <li><Mail size={14} /> Customers send Excel files weekly</li>
                <li><MessageSquare size={14} /> Direct emails & text messages daily</li>
                <li><FileText size={14} /> Customers provide: question asked, answer received, experience, free text</li>
                <li><Target size={14} /> Used to understand different question patterns (private vs public sector)</li>
                <li><Lightbulb size={14} /> No feedback mechanism in service agent itself</li>
              </ul>
            </div>
          )}
        </section>

        <div className="flow-divider">
          <RefreshCw size={20} />
          <span>Manual analysis loop</span>
        </div>

        {/* Analysis & Action Items */}
        <section className="flow-stage dual-node-section">
          <div 
            className={`stage-node analysis-node ${activeNode === 'analysis' ? 'active' : ''}`}
            onClick={() => handleNodeClick('analysis')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'analysis')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'analysis'}
            aria-label="Manual Analysis"
          >
            <div className="node-icon-container analysis">
              <Search size={28} />
            </div>
            <div className="node-info">
              <h4>Manual Analysis</h4>
              <p>Review each session one by one</p>
            </div>
          </div>

          <div 
            className={`stage-node actions-node ${activeNode === 'actions' ? 'active' : ''}`}
            onClick={() => handleNodeClick('actions')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'actions')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'actions'}
            aria-label="Action Items Tracking"
          >
            <div className="node-icon-container actions">
              <Edit3 size={28} />
            </div>
            <div className="node-info">
              <h4>Action Items Tracking</h4>
              <p>Track what needs to be done</p>
            </div>
          </div>
        </section>

        {(activeNode === 'analysis' || activeNode === 'actions') && (
          <div className="node-details-panel">
            <div className="details-grid">
              <div>
                <h4>What's Missing:</h4>
                <ul>
                  <li>Computer forensics data</li>
                  <li>Error codes information</li>
                  <li>Outdated iPhone checkmate info</li>
                  <li>External sources data</li>
                  <li>Damaged device procedures</li>
                </ul>
              </div>
              <div>
                <h4>Actions Needed:</h4>
                <ul>
                  <li>Include/exclude expired articles</li>
                  <li>Add knowledge base attachments</li>
                  <li>Rebuild device table, clean duplicates</li>
                  <li>Data merging tasks</li>
                  <li>Update knowledge articles</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="workflow-section future-state">
        <div className="section-label desired-state">Desired Future State</div>

        {/* Ideal Analytics Dashboard */}
        <section className="flow-stage">
          <div 
            className={`stage-node ideal-dashboard-node ${activeNode === 'ideal' ? 'active' : ''}`}
            onClick={() => handleNodeClick('ideal')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'ideal')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'ideal'}
            aria-label="Ideal Analytics Dashboard"
          >
            <div className="node-icon-container ideal">
              <Activity size={32} />
            </div>
            <div className="node-info">
              <h3>Ideal Analytics Dashboard</h3>
              <p className="node-status ideal">UI 10x Better</p>
              <p className="node-desc">Redesigned observability experience</p>
            </div>
          </div>
          {activeNode === 'ideal' && (
            <div className="node-details-panel ideal-panel">
              <h4>Key Requirements:</h4>
              <div className="requirements-grid">
                <div className="requirement-card">
                  <Database size={20} />
                  <div>
                    <strong>Table Format Primary</strong>
                    <p>"I'm a number person - table is better"</p>
                  </div>
                </div>
                <div className="requirement-card">
                  <Layers size={20} />
                  <div>
                    <strong>Metric Transparency</strong>
                    <p>Show exactly how metrics are calculated</p>
                  </div>
                </div>
                <div className="requirement-card">
                  <Edit3 size={20} />
                  <div>
                    <strong>Inline Editing</strong>
                    <p>Add custom columns directly in dashboard</p>
                  </div>
                </div>
                <div className="requirement-card">
                  <Target size={20} />
                  <div>
                    <strong>Drill-Down Capability</strong>
                    <p>Topics → Sessions → Single record</p>
                  </div>
                </div>
                <div className="requirement-card">
                  <Zap size={20} />
                  <div>
                    <strong>AI Insights</strong>
                    <p>"Why is this metric dropping down?"</p>
                  </div>
                </div>
                <div className="requirement-card">
                  <BookOpen size={20} />
                  <div>
                    <strong>Knowledge Article View</strong>
                    <p>See which articles drive resolution/frustration</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="flow-arrow">
          <ArrowDown size={24} />
        </div>

        {/* Key Features */}
        <section className="features-grid">
          <div 
            className={`feature-card ${activeNode === 'categories' ? 'active' : ''}`}
            onClick={() => handleNodeClick('categories')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'categories')}
            tabIndex={0}
            role="button"
            aria-label="Perfect Categories"
          >
            <div className="feature-icon success">
              <CheckCircle size={24} />
            </div>
            <h4>Perfect Categories</h4>
            <p>Usage, Effectiveness, Trust, Quality, Health, Consumption, Voice, User Satisfaction</p>
            <div className="feature-quote">"This is exactly how I want to score it"</div>
          </div>

          <div 
            className={`feature-card ${activeNode === 'drilldown' ? 'active' : ''}`}
            onClick={() => handleNodeClick('drilldown')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'drilldown')}
            tabIndex={0}
            role="button"
            aria-label="Drill-Down Flow"
          >
            <div className="feature-icon success">
              <CheckCircle size={24} />
            </div>
            <h4>Drill-Down Flow</h4>
            <p>Compare topics to metrics → Select topic → Filtered sessions → Single session</p>
            <div className="feature-quote">"Perfect. This is really drill down into the data."</div>
          </div>

          <div 
            className={`feature-card ${activeNode === 'metrics' ? 'active' : ''}`}
            onClick={() => handleNodeClick('metrics')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'metrics')}
            tabIndex={0}
            role="button"
            aria-label="Powerful Metrics"
          >
            <div className="feature-icon success">
              <CheckCircle size={24} />
            </div>
            <h4>Powerful Metrics</h4>
            <p>Unique users, unique interactions, average interaction per session</p>
            <div className="feature-quote">"These three are very very powerful numbers"</div>
          </div>

          <div 
            className={`feature-card ${activeNode === 'download' ? 'active' : ''}`}
            onClick={() => handleNodeClick('download')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'download')}
            tabIndex={0}
            role="button"
            aria-label="Download Capability"
          >
            <div className="feature-icon success">
              <Download size={24} />
            </div>
            <h4>Download & Manipulate</h4>
            <p>Export data to play with numbers in own tools</p>
            <div className="feature-quote">"I can actually download it and play with the numbers"</div>
          </div>
        </section>

        <div className="flow-arrow">
          <ArrowDown size={24} />
        </div>

        {/* Call to Actions */}
        <section className="flow-stage">
          <div 
            className={`stage-node cta-node ${activeNode === 'cta' ? 'active' : ''}`}
            onClick={() => handleNodeClick('cta')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'cta')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'cta'}
            aria-label="Call to Actions"
          >
            <div className="node-icon-container cta">
              <Zap size={32} />
            </div>
            <div className="node-info">
              <h3>Call to Action Buttons</h3>
              <p className="node-status cta">Missing Feature</p>
              <p className="node-desc">Auto-suggest next steps based on insights</p>
            </div>
          </div>
          {activeNode === 'cta' && (
            <div className="node-details-panel">
              <h4>Desired CTAs:</h4>
              <ul>
                <li><Lightbulb size={14} /> "Create knowledge article" when data is insufficient</li>
                <li><Edit3 size={14} /> "Update article" when content is outdated</li>
                <li><BookOpen size={14} /> "Review knowledge base" for specific topic</li>
                <li><Target size={14} /> "Fix routing" when topic collisions detected</li>
                <li><AlertTriangle size={14} /> "Check duplications" in data tables</li>
              </ul>
            </div>
          )}
        </section>
      </div>

      <footer className="cellebrite-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Cellebrite Agent Analytics Prototype Usability Study - Dec 10, 2025</span>
        </div>
        <a 
          href="?view=cellebrite-ux" 
          className="ux-link"
          tabIndex={0}
          aria-label="View UX Findings & Insights"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + '?view=cellebrite-ux';
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

export default CellebriteAnalyticsFlow;

