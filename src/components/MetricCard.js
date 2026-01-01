import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, ReferenceLine } from 'recharts';
import './MetricCard.css';

const MetricCard = ({ title, value, valueSuffix, change, changeType, period, description, chartData }) => {
  const data = chartData || generateDefaultData();
  
  const values = data.map(d => d.value);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const avgVal = values.reduce((a, b) => a + b, 0) / values.length;
  const currentVal = data[data.length - 1].value;

  return (
    <div className="metric-card">
      {/* Header */}
      <div className="metric-card-header">
        <div className="metric-title-block">
          <h3 className="metric-card-title">{title}</h3>
          <span className="metric-card-period">{period}</span>
        </div>
        <button className="metric-menu-button">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Value & Change */}
      <div className="metric-value-block">
        <div className="metric-value-display">
          <span className="metric-main-value">{value}</span>
          {valueSuffix && <span className="metric-value-suffix">{valueSuffix}</span>}
        </div>
        <div className={`metric-change-display ${changeType}`}>
          <span className="metric-change-value">{change}</span>
          <span className="metric-change-label">vs previous period</span>
        </div>
      </div>

      {/* Chart */}
      <div className="metric-chart-block">
        <div className="chart-y-labels">
          <span>{formatValue(maxVal)}</span>
          <span>{formatValue(minVal)}</span>
        </div>
        <div className="chart-main">
          <ResponsiveContainer width="100%" height={80}>
            <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <defs>
                <linearGradient id={`gradient-${title.replace(/\s+/g, '-')}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4992FE" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#4992FE" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#4992FE"
                strokeWidth={2}
                fill={`url(#gradient-${title.replace(/\s+/g, '-')})`}
                dot={false}
              />
              <ReferenceLine y={avgVal} stroke="#E5E5E5" strokeDasharray="3 3" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="chart-x-labels">
            <span>Nov 1</span>
            <span>Nov 30</span>
          </div>
        </div>
        <div className="chart-current-value">
          <div className="current-value-dot" />
          <span className="current-value-label">{formatValue(currentVal)}</span>
        </div>
      </div>

      {/* Description */}
      <p className="metric-card-description">{description}</p>
    </div>
  );
};

function formatValue(val) {
  if (typeof val !== 'number') return val;
  
  if (val >= 1000000) {
    return `${(val / 1000000).toFixed(1)}M`;
  } else if (val >= 1000) {
    return `${(val / 1000).toFixed(1)}K`;
  } else if (val < 1) {
    return val.toFixed(2);
  } else if (val < 10) {
    return val.toFixed(1);
  }
  return Math.round(val).toString();
}

function generateDefaultData() {
  return Array.from({ length: 12 }, (_, i) => ({
    value: 30 + Math.random() * 40
  }));
}

export default MetricCard;
