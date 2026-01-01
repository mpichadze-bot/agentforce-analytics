import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Wrench,
  Settings,
  XCircle,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  ArrowDown,
  Eye,
  Target,
  Lightbulb,
  CheckCircle,
  FileText,
  Database,
  Layers,
  Activity,
  Zap,
  Filter,
  Home,
  DollarSign,
  MessageSquare,
  RefreshCw
} from 'lucide-react';
import NavigationHeader from './NavigationHeader';
import './NexoAnalyticsFlow.css';

const NexoAnalyticsFlow = () => {
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
    <div className="nexo-container" style={{ paddingTop: '70px' }}>
      <NavigationHeader currentPage="Workflow" customerName="Nexo" />
      <header className="nexo-header">
        <div className="header-badge">Nexo × Agentforce</div>
        <h1 className="nexo-title">Agent Analytics Evolution</h1>
        <p className="nexo-subtitle">From Agent Studio to Customizable Analytics</p>
        <div className="nexo-date">December 2, 2025 - Prototype Review</div>
      </header>

      <div className="workflow-section">
        <div className="section-label past-state">Past Experience</div>
        
        {/* Agent Studio Experience */}
        <section className="flow-stage">
          <div 
            className={`stage-node studio-node ${activeNode === 'studio' ? 'active' : ''}`}
            onClick={() => handleNodeClick('studio')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'studio')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'studio'}
            aria-label="Agent Studio Experience"
          >
            <div className="node-icon-container stopped">
              <Activity size={32} />
            </div>
            <div className="node-info">
              <h3>Agent Studio</h3>
              <p className="node-status stopped">Stopped Using</p>
              <p className="node-desc">Used before general release - ultimately abandoned</p>
            </div>
          </div>
          {activeNode === 'studio' && (
            <div className="node-details-panel">
              <h4>Why They Stopped:</h4>
              <ul>
                <li><XCircle size={14} /> Could not sufficiently customize to preferences</li>
                <li><XCircle size={14} /> Unable to see progress in agent improvement</li>
                <li><XCircle size={14} /> Valuable for tracking conversations but not actionable</li>
                <li><XCircle size={14} /> Could identify success/failure points but couldn't act on them</li>
              </ul>
            </div>
          )}
        </section>

        <div className="flow-arrow">
          <ArrowDown size={24} />
          <span>Current workaround</span>
        </div>

        {/* Current Custom Solution */}
        <section className="flow-stage">
          <div 
            className={`stage-node custom-object-node ${activeNode === 'custom' ? 'active' : ''}`}
            onClick={() => handleNodeClick('custom')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'custom')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'custom'}
            aria-label="Custom Salesforce Object Solution"
          >
            <div className="node-icon-container custom">
              <Database size={32} />
            </div>
            <div className="node-info">
              <h3>Custom Salesforce Object</h3>
              <p className="node-status custom">Current Solution</p>
              <p className="node-desc">Human auditor reviews chat conversations</p>
            </div>
          </div>
          {activeNode === 'custom' && (
            <div className="node-details-panel">
              <h4>Process:</h4>
              <ul>
                <li><Users size={14} /> Human auditor manually reviews conversations</li>
                <li><FileText size={14} /> Reviews both regular chats and Agent Force chats</li>
                <li><BarChart3 size={14} /> Audits performance using custom criteria</li>
                <li><Database size={14} /> Data stored in custom Salesforce object</li>
              </ul>
            </div>
          )}
        </section>

        <div className="flow-divider">
          <AlertTriangle size={20} />
          <span>Key pain points</span>
        </div>

        {/* Pain Points */}
        <section className="flow-stage dual-node-section">
          <div 
            className={`stage-node pain-node ${activeNode === 'metric-mismatch' ? 'active' : ''}`}
            onClick={() => handleNodeClick('metric-mismatch')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'metric-mismatch')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'metric-mismatch'}
            aria-label="Metric Discrepancies"
          >
            <div className="node-icon-container pain">
              <AlertTriangle size={28} />
            </div>
            <div className="node-info">
              <h4>Metric Discrepancies</h4>
              <p>Internal vs Agent Analytics calculations differ</p>
            </div>
          </div>

          <div 
            className={`stage-node pain-node ${activeNode === 'inaccurate' ? 'active' : ''}`}
            onClick={() => handleNodeClick('inaccurate')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'inaccurate')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'inaccurate'}
            aria-label="Inaccurate Scoring"
          >
            <div className="node-icon-container pain">
              <XCircle size={28} />
            </div>
            <div className="node-info">
              <h4>Inaccurate Scoring</h4>
              <p>Correct answers marked as "bad"</p>
            </div>
          </div>
        </section>

        {(activeNode === 'metric-mismatch' || activeNode === 'inaccurate') && (
          <div className="node-details-panel">
            <div className="details-grid">
              <div>
                <h4>Escalation Rate Mismatch:</h4>
                <ul>
                  <li><strong>Internal:</strong> Any human ownership = escalation</li>
                  <li><strong>Agent Analytics:</strong> Only counts human-initiated escalations with end chat button</li>
                </ul>
              </div>
              <div>
                <h4>Crypto Business Example:</h4>
                <ul>
                  <li>Frustrated client escalates despite correct info</li>
                  <li>Agent Analytics marks as "bad" conversation</li>
                  <li>Gives chat agent poor score - viewed as inaccurate</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="workflow-section future-state">
        <div className="section-label desired-state">Desired Future State</div>

        {/* Customizable Dashboard */}
        <section className="flow-stage">
          <div 
            className={`stage-node ideal-dashboard-node ${activeNode === 'customizable' ? 'active' : ''}`}
            onClick={() => handleNodeClick('customizable')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'customizable')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'customizable'}
            aria-label="Customizable Dashboard"
          >
            <div className="node-icon-container ideal">
              <Settings size={32} />
            </div>
            <div className="node-info">
              <h3>Fully Customizable Dashboard</h3>
              <p className="node-status ideal">Critical Requirement</p>
              <p className="node-desc">Add, remove, or shuffle categories and metrics</p>
            </div>
          </div>
          {activeNode === 'customizable' && (
            <div className="node-details-panel ideal-panel">
              <h4>Customization Requirements:</h4>
              <div className="requirements-grid">
                <div className="requirement-card">
                  <Wrench size={20} />
                  <div>
                    <strong>Add/Modify Metrics</strong>
                    <p>Deflection rate, unique sessions, problematic topics</p>
                  </div>
                </div>
                <div className="requirement-card">
                  <Layers size={20} />
                  <div>
                    <strong>Shuffle Categories</strong>
                    <p>Reorder and reorganize based on priority</p>
                  </div>
                </div>
                <div className="requirement-card">
                  <XCircle size={20} />
                  <div>
                    <strong>Remove Irrelevant</strong>
                    <p>Hide metrics that don't apply to their use case</p>
                  </div>
                </div>
                <div className="requirement-card">
                  <Home size={20} />
                  <div>
                    <strong>Customizable Homepage</strong>
                    <p>Landing page with favorite metrics at a glance</p>
                  </div>
                </div>
              </div>
              <div className="critical-quote">
                <AlertTriangle size={16} />
                <span>"If we cannot customize to show relevant metrics, we would not use the product."</span>
              </div>
            </div>
          )}
        </section>

        <div className="flow-arrow">
          <ArrowDown size={24} />
        </div>

        {/* Key Features Grid */}
        <section className="features-grid">
          <div 
            className={`feature-card ${activeNode === 'homepage' ? 'active' : ''}`}
            onClick={() => handleNodeClick('homepage')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'homepage')}
            tabIndex={0}
            role="button"
            aria-label="Customizable Homepage"
          >
            <div className="feature-icon must-have">
              <Home size={24} />
            </div>
            <h4>Customizable Homepage</h4>
            <p>Single landing page with favorite metrics before drilling into details</p>
            <div className="feature-priority">MUST-HAVE</div>
          </div>

          <div 
            className={`feature-card ${activeNode === 'table-view' ? 'active' : ''}`}
            onClick={() => handleNodeClick('table-view')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'table-view')}
            tabIndex={0}
            role="button"
            aria-label="Granular Table View"
          >
            <div className="feature-icon must-have">
              <FileText size={24} />
            </div>
            <h4>Granular Table View</h4>
            <p>Most critical feature - straight-to-the-point data analysis with filters and export</p>
            <div className="feature-priority">MUST-HAVE</div>
          </div>

          <div 
            className={`feature-card ${activeNode === 'color-coding' ? 'active' : ''}`}
            onClick={() => handleNodeClick('color-coding')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'color-coding')}
            tabIndex={0}
            role="button"
            aria-label="Color-Coded Metrics"
          >
            <div className="feature-icon should-have">
              <Eye size={24} />
            </div>
            <h4>Color-Coded Metrics</h4>
            <p>Red/yellow/green on percentage values for quick identification of areas needing attention</p>
            <div className="feature-priority">SHOULD-HAVE</div>
          </div>

          <div 
            className={`feature-card ${activeNode === 'bar-charts' ? 'active' : ''}`}
            onClick={() => handleNodeClick('bar-charts')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'bar-charts')}
            tabIndex={0}
            role="button"
            aria-label="Bar Charts Over Line Graphs"
          >
            <div className="feature-icon should-have">
              <BarChart3 size={24} />
            </div>
            <h4>Bar Charts Over Line Graphs</h4>
            <p>Line graphs unintuitive - bar charts easier to understand for trends</p>
            <div className="feature-priority">SHOULD-HAVE</div>
          </div>

          <div 
            className={`feature-card ${activeNode === 'spend' ? 'active' : ''}`}
            onClick={() => handleNodeClick('spend')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'spend')}
            tabIndex={0}
            role="button"
            aria-label="Spend Monitoring"
          >
            <div className="feature-icon critical">
              <DollarSign size={24} />
            </div>
            <h4>Spend Monitoring</h4>
            <p>Track flex credits consumption alongside conversations to identify excessive callouts</p>
            <div className="feature-priority">CRITICAL</div>
          </div>

          <div 
            className={`feature-card ${activeNode === 'custom-intents' ? 'active' : ''}`}
            onClick={() => handleNodeClick('custom-intents')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'custom-intents')}
            tabIndex={0}
            role="button"
            aria-label="Define Custom Intents"
          >
            <div className="feature-icon must-have">
              <MessageSquare size={24} />
            </div>
            <h4>Define Custom Intents</h4>
            <p>Auto-defined intents don't align with internal processes - need to define own</p>
            <div className="feature-priority">MUST-HAVE</div>
          </div>
        </section>

        <div className="flow-arrow">
          <ArrowDown size={24} />
        </div>

        {/* Top Valuable Features */}
        <section className="flow-stage">
          <div 
            className={`stage-node valuable-node ${activeNode === 'top-features' ? 'active' : ''}`}
            onClick={() => handleNodeClick('top-features')}
            onKeyDown={(e) => handleNodeKeyDown(e, 'top-features')}
            tabIndex={0}
            role="button"
            aria-expanded={activeNode === 'top-features'}
            aria-label="Top Valuable Features"
          >
            <div className="node-icon-container valuable">
              <Target size={32} />
            </div>
            <div className="node-info">
              <h3>Top Valuable Features</h3>
              <p className="node-status valuable">Focus Areas</p>
              <p className="node-desc">Intent, topics, and escalation rates</p>
            </div>
          </div>
          {activeNode === 'top-features' && (
            <div className="node-details-panel">
              <h4>Priority Features:</h4>
              <div className="top-features-grid">
                <div className="top-feature">
                  <MessageSquare size={20} />
                  <div>
                    <strong>Intent Analysis</strong>
                    <p>Most talked-about conversations leading to escalations</p>
                  </div>
                </div>
                <div className="top-feature">
                  <Layers size={20} />
                  <div>
                    <strong>Topics Breakdown</strong>
                    <p>Which topics cause most failures and escalations</p>
                  </div>
                </div>
                <div className="top-feature">
                  <TrendingUp size={20} />
                  <div>
                    <strong>Escalation Rates</strong>
                    <p>Compare unique sessions escalated to average spend</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="flow-arrow">
          <ArrowDown size={24} />
        </div>

        {/* Use Cases */}
        <section className="use-cases-section">
          <h3>Key Use Cases</h3>
          <div className="use-cases-grid">
            <div 
              className={`use-case-card ${activeNode === 'cost-optimize' ? 'active' : ''}`}
              onClick={() => handleNodeClick('cost-optimize')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'cost-optimize')}
              tabIndex={0}
              role="button"
            >
              <DollarSign size={24} />
              <h4>Cost Optimization</h4>
              <ul>
                <li>Find setup mistakes causing excessive callouts</li>
                <li>Determine if bot cost is worth it per topic</li>
                <li>Identify discrepancy between volume and credits</li>
              </ul>
            </div>

            <div 
              className={`use-case-card ${activeNode === 'employee-usage' ? 'active' : ''}`}
              onClick={() => handleNodeClick('employee-usage')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'employee-usage')}
              tabIndex={0}
              role="button"
            >
              <Users size={24} />
              <h4>Employee Agent Usage</h4>
              <ul>
                <li>Understand operational teams' usage patterns</li>
                <li>Identify unused or non-functional topics</li>
                <li>Track which teams benefit most from agent</li>
              </ul>
            </div>

            <div 
              className={`use-case-card ${activeNode === 'drill-down' ? 'active' : ''}`}
              onClick={() => handleNodeClick('drill-down')}
              onKeyDown={(e) => handleNodeKeyDown(e, 'drill-down')}
              tabIndex={0}
              role="button"
            >
              <Filter size={24} />
              <h4>Full Context Analysis</h4>
              <ul>
                <li>Drill from high-level metrics to specific sessions</li>
                <li>Filter and compare across periods (Q over Q, yearly)</li>
                <li>Export data for deeper analysis</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <footer className="nexo-footer">
        <div className="footer-content">
          <span className="footer-label">Source:</span>
          <span className="footer-value">Nexo Agent Analytics Prototype Review - Dec 2, 2025</span>
        </div>
        <a 
          href="?view=nexo-ux" 
          className="ux-link"
          tabIndex={0}
          aria-label="View UX Findings & Feedback"
          onClick={(e) => {
            e.preventDefault();
            window.location = window.location.origin + '?view=nexo-ux';
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

export default NexoAnalyticsFlow;

