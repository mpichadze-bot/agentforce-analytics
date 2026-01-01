import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PerformanceOverview.css';

const PerformanceOverview = () => {
  const [selectedKpi, setSelectedKpi] = useState(null);

  // KPI Data
  const kpis = [
    {
      id: 'sessions',
      label: 'Unique Sessions',
      value: '1,485',
      change: '+5.1%',
      changeLabel: 'period vs period',
      positive: true
    },
    {
      id: 'deflection',
      label: 'Average Deflection Rate',
      value: '32%',
      change: '+3.3%',
      changeLabel: 'period vs period',
      positive: true
    },
    {
      id: 'abandonment',
      label: 'Average Abandonment Rate',
      value: '27%',
      change: '+4.5%',
      changeLabel: 'period vs period',
      positive: true
    },
    {
      id: 'escalation',
      label: 'Average Escalation Rate',
      value: '41%',
      change: '+7.7%',
      changeLabel: 'period vs period',
      positive: true
    }
  ];

  // Line Chart Data - matching the image data
  const lineChartData = [
    { date: 'Nov 10', agentA: 40, agentB: 42, agentC: 20, agentD: 38 },
    { date: 'Nov 17', agentA: 35, agentB: 45, agentC: 22, agentD: 39 },
    { date: 'Nov 24', agentA: 42, agentB: 40, agentC: 20, agentD: 30 },
    { date: 'Dec 1', agentA: 38, agentB: 48, agentC: 15, agentD: 32 },
    { date: 'Dec 7', agentA: 40, agentB: 40, agentC: 12, agentD: 27 }
  ];

  // Heat-map Data
  const heatMapData = [
    {
      agent: 'Agent A',
      effectiveness: { value: 3, label: 'Medium' },
      trust: { value: 2, label: 'Low' },
      quality: { value: 1, label: 'Very Low' },
      health: { value: 5, label: 'Very High' },
      voice: { value: 4, label: 'High' },
      userSatisfaction: { value: 2, label: 'Low' }
    },
    {
      agent: 'Agent B',
      effectiveness: { value: 4, label: 'High' },
      trust: { value: 1, label: 'Very Low' },
      quality: { value: 4, label: 'High' },
      health: { value: 3, label: 'Medium' },
      voice: { value: null, label: 'N/A' },
      userSatisfaction: { value: 3, label: 'Medium' }
    },
    {
      agent: 'Agent C',
      effectiveness: { value: 5, label: 'Very High' },
      trust: { value: 3, label: 'Medium' },
      quality: { value: 3, label: 'Medium' },
      health: { value: 4, label: 'High' },
      voice: { value: 3, label: 'Medium' },
      userSatisfaction: { value: 4, label: 'High' }
    },
    {
      agent: 'Agent D',
      effectiveness: { value: 2, label: 'Low' },
      trust: { value: 4, label: 'High' },
      quality: { value: 2, label: 'Low' },
      health: { value: 3, label: 'Medium' },
      voice: { value: null, label: 'N/A' },
      userSatisfaction: { value: 1, label: 'Very Low' }
    }
  ];

  const getHeatMapColor = (value) => {
    if (value === null) return 'heatmap-na';
    if (value === 1) return 'heatmap-1';
    if (value === 2) return 'heatmap-2';
    if (value === 3) return 'heatmap-3';
    if (value === 4) return 'heatmap-4';
    if (value === 5) return 'heatmap-5';
    return 'heatmap-na';
  };

  return (
    <div className="performance-overview">
      {/* KPIs and Line Chart Section */}
      <div className="overview-top-section">
        {/* KPIs */}
        <div className="kpis-container">
          {kpis.map((kpi, index) => (
            <div 
              key={index} 
              className={`kpi-card ${selectedKpi === kpi.id ? 'selected' : ''}`}
              onClick={() => setSelectedKpi(selectedKpi === kpi.id ? null : kpi.id)}
            >
              <div className="kpi-label">{kpi.label}</div>
              <div className="kpi-value">{kpi.value}</div>
              <div className={`kpi-change ${kpi.positive ? 'positive' : 'negative'}`}>
                <span className="kpi-change-value">{kpi.change}</span>
                <span className="kpi-change-label">{kpi.changeLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Line Chart */}
        <div className="line-chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis 
                dataKey="date" 
                stroke="#5c5c5c"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[10, 50]}
                ticks={[10, 20, 30, 40, 50]}
                stroke="#5c5c5c"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="agentA" 
                stroke="#4992FE" 
                strokeWidth={2}
                name="Agent A"
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="agentB" 
                stroke="#BA01FF" 
                strokeWidth={2}
                name="Agent B"
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="agentC" 
                stroke="#00C9A7" 
                strokeWidth={2}
                name="Agent C"
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="agentD" 
                stroke="#0250D9" 
                strokeWidth={2}
                name="Agent D"
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heat-map Section */}
      <div className="heatmap-section">
        <h3 className="heatmap-title">Agents Performance Heat-Map</h3>
        <div className="heatmap-container">
          <table className="heatmap-table">
            <thead>
              <tr>
                <th className="heatmap-corner-cell"></th>
                <th>Effectiveness</th>
                <th>Trust</th>
                <th>Quality</th>
                <th>Health</th>
                <th>Voice</th>
                <th>User Satisfaction</th>
              </tr>
            </thead>
            <tbody>
              {heatMapData.map((row, index) => (
                <tr key={index}>
                  <td className="heatmap-agent-name">{row.agent}</td>
                  <td className={`heatmap-cell ${getHeatMapColor(row.effectiveness.value)}`}>
                    <span className="heatmap-cell-text">{row.effectiveness.value ? `${row.effectiveness.value} - ${row.effectiveness.label}` : 'N/A'}</span>
                  </td>
                  <td className={`heatmap-cell ${getHeatMapColor(row.trust.value)}`}>
                    <span className="heatmap-cell-text">{row.trust.value ? `${row.trust.value} - ${row.trust.label}` : 'N/A'}</span>
                  </td>
                  <td className={`heatmap-cell ${getHeatMapColor(row.quality.value)}`}>
                    <span className="heatmap-cell-text">{row.quality.value ? `${row.quality.value} - ${row.quality.label}` : 'N/A'}</span>
                  </td>
                  <td className={`heatmap-cell ${getHeatMapColor(row.health.value)}`}>
                    <span className="heatmap-cell-text">{row.health.value ? `${row.health.value} - ${row.health.label}` : 'N/A'}</span>
                  </td>
                  <td className={`heatmap-cell ${getHeatMapColor(row.voice.value)}`}>
                    <span className="heatmap-cell-text">{row.voice.value ? `${row.voice.value} - ${row.voice.label}` : 'N/A'}</span>
                  </td>
                  <td className={`heatmap-cell ${getHeatMapColor(row.userSatisfaction.value)}`}>
                    <span className="heatmap-cell-text">{row.userSatisfaction.value ? `${row.userSatisfaction.value} - ${row.userSatisfaction.label}` : 'N/A'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="heatmap-legend">
            <span className="legend-title">Agent Performance</span>
            <div className="legend-item">
              <span className="legend-dot heatmap-1"></span>
              <span>1 - Very Low</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot heatmap-2"></span>
              <span>2 - Low</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot heatmap-3"></span>
              <span>3 - Medium</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot heatmap-4"></span>
              <span>4 - High</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot heatmap-5"></span>
              <span>5 - Very High</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot heatmap-na"></span>
              <span>N/A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;

