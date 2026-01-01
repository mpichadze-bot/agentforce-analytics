import React from 'react';
import './SomaSwarmVisualizer.css';

const SomaSwarmVisualizer = () => {
  // Simulated data from the Python script execution
  const rawLogs = [
    { timestamp: "2023-10-27", level: "INFO", message: "User login success", type: "info" },
    { timestamp: "2023-10-27", level: "WARN", message: "High memory usage", type: "warn" },
    { timestamp: "2023-10-27", level: "ERROR", message: "UNAUTHORIZED_ACCESS from IP 192.168...", type: "error" },
    { timestamp: "2023-10-27", level: "INFO", message: "User logout", type: "info" },
    { timestamp: "2023-10-27", level: "CRITICAL", message: "ROOT_SHELL spawned by unknown user", type: "critical" },
    { timestamp: "2023-10-27", level: "INFO", message: "Backup started", type: "info" },
  ];

  const workerBatches = [
    {
      id: 1,
      logs: [
        { text: "User login success", flagged: false },
        { text: "High memory usage", flagged: false }
      ]
    },
    {
      id: 2,
      logs: [
        { text: "UNAUTHORIZED_ACCESS...", flagged: true, level: "flagged" },
        { text: "User logout", flagged: false }
      ]
    },
    {
      id: 3,
      logs: [
        { text: "ROOT_SHELL spawned...", flagged: true, level: "critical" },
        { text: "Backup started", flagged: false }
      ]
    }
  ];

  const flaggedEvents = [
    {
      type: "warning",
      badge: "FLAGGED",
      message: "UNAUTHORIZED_ACCESS from IP 192.168..."
    },
    {
      type: "critical",
      badge: "CRITICAL",
      message: "ROOT_SHELL spawned by unknown user"
    }
  ];

  return (
    <div className="soma-visualizer">
      {/* Header */}
      <header className="soma-header">
        <h1 className="soma-title">SOMA Swarm</h1>
        <p className="soma-subtitle">Stream-Oriented Multi-Agent Pattern Visualization</p>
      </header>

      {/* Main Grid */}
      <div className="soma-grid">
        {/* Input Stream Panel */}
        <div className="soma-panel">
          <div className="panel-header">
            <div className="panel-icon stream">📥</div>
            <span className="panel-title">Raw Log Stream</span>
          </div>
          <div className="log-stream">
            {rawLogs.map((log, index) => (
              <div key={index} className={`log-entry ${log.type}`}>
                <span className="log-timestamp">{log.timestamp}</span>
                <span className="log-level">{log.level}:</span>
                {log.message}
              </div>
            ))}
          </div>
        </div>

        {/* Flow Connector 1 */}
        <div className="flow-connector">
          <div className="flow-arrow"></div>
          <div className="flow-arrow-head"></div>
          <span className="flow-label">Shard</span>
        </div>

        {/* Worker Panel */}
        <div className="soma-panel">
          <div className="panel-header">
            <div className="panel-icon worker">⚙️</div>
            <span className="panel-title">Parallel Workers</span>
          </div>
          <div className="worker-grid">
            {workerBatches.map((batch) => (
              <div key={batch.id} className="worker-batch">
                <div className="worker-header">
                  <div className="worker-indicator processing"></div>
                  <span className="worker-name">Worker #{batch.id}</span>
                </div>
                <div className="worker-logs">
                  {batch.logs.map((log, idx) => (
                    <div 
                      key={idx} 
                      className={`worker-log-item ${log.flagged ? (log.level === 'critical' ? 'critical-flag' : 'flagged') : ''}`}
                    >
                      {log.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Connector 2 */}
        <div className="flow-connector">
          <div className="flow-arrow"></div>
          <div className="flow-arrow-head"></div>
          <span className="flow-label">Aggregate</span>
        </div>

        {/* Results Panel */}
        <div className="soma-panel">
          <div className="panel-header">
            <div className="panel-icon results">🎯</div>
            <span className="panel-title">Flagged Events</span>
          </div>
          
          <div className="results-summary">
            <div className="stat-row">
              <span className="stat-label">Total Logs Processed</span>
              <span className="stat-value">6</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Worker Batches</span>
              <span className="stat-value warning">3</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Anomalies Detected</span>
              <span className="stat-value danger">2</span>
            </div>
          </div>

          <div className="flagged-items">
            {flaggedEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flagged-item ${event.type === 'critical' ? 'critical-flag' : 'warning-flag'}`}
              >
                <span className={`flag-badge ${event.type}`}>{event.badge}</span>
                <div>{event.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Footer */}
      <div className="status-footer">
        <div className="status-indicator">
          <div className="status-dot"></div>
          <span className="status-text">Processing Complete</span>
        </div>
      </div>

      {/* Architecture Diagram */}
      <section className="architecture-section">
        <h2 className="architecture-title">SOMA Pattern Architecture</h2>
        <div className="architecture-flow">
          <div className="arch-node">
            <div className="arch-box stream">
              <span className="arch-icon">📊</span>
              <span className="arch-label">Stream</span>
            </div>
          </div>
          
          <span className="arch-arrow">→</span>
          
          <div className="arch-node">
            <div className="arch-box manager">
              <span className="arch-icon">🧠</span>
              <span className="arch-label">Manager</span>
            </div>
          </div>
          
          <span className="arch-arrow">→</span>
          
          <div className="worker-group">
            <div className="arch-box worker">
              <span className="arch-icon">🐝</span>
              <span className="arch-label">W1</span>
            </div>
            <div className="arch-box worker">
              <span className="arch-icon">🐝</span>
              <span className="arch-label">W2</span>
            </div>
            <div className="arch-box worker">
              <span className="arch-icon">🐝</span>
              <span className="arch-label">W3</span>
            </div>
          </div>
          
          <span className="arch-arrow">→</span>
          
          <div className="arch-node">
            <div className="arch-box inbox">
              <span className="arch-icon">📬</span>
              <span className="arch-label">Inbox</span>
            </div>
          </div>
          
          <span className="arch-arrow">→</span>
          
          <div className="arch-node">
            <div className="arch-box output">
              <span className="arch-icon">📋</span>
              <span className="arch-label">Report</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SomaSwarmVisualizer;

