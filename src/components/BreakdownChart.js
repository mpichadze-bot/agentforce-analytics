import React from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import './BreakdownChart.css';

const BreakdownChart = ({ activeTab }) => {
  // Topics Data - Service Agent specific
  const topicsData = [
    { name: 'Billing & Payments', sessions: 78, metric: 1.7 },
    { name: 'Order Status', sessions: 77, metric: 1.8 },
    { name: 'Returns & Refunds', sessions: 76, metric: 2.7 },
    { name: 'Shipping Issues', sessions: 60, metric: 4.0 },
    { name: 'Account Access', sessions: 49, metric: 2.5 },
    { name: 'Technical Support', sessions: 25, metric: 3.7 },
    { name: 'Product Information', sessions: 8, metric: 1.3 },
  ];

  // Intents Data
  const intentsData = [
    { name: 'Understand a Char...', sessions: 75, metric: 12 },
    { name: 'Dispute a Charge', sessions: 72, metric: 35 },
    { name: 'Update Payment M...', sessions: 70, metric: 14 },
    { name: 'Update Billing Addr...', sessions: 59, metric: 20 },
    { name: 'Payment Failed', sessions: 30, metric: 24 },
    { name: 'Price Match Request', sessions: 24, metric: 18 },
    { name: 'Promo Code Not W...', sessions: 12, metric: 15 },
  ];

  // Actions Data
  const actionsData = [
    { name: 'Lookup Order Details', sessions: 4521, metric: 2.1 },
    { name: 'Process Return Request', sessions: 2847, metric: 18.4 },
    { name: 'Send Tracking Link', sessions: 2654, metric: 1.2 },
    { name: 'Update Customer Record', sessions: 1987, metric: 5.8 },
    { name: 'Apply Promo Code', sessions: 1432, metric: 8.5 },
    { name: 'Create Support Ticket', sessions: 1287, metric: 42.3 },
    { name: 'Escalate to Human', sessions: 1098, metric: 100 },
  ];

  // Get quality score label and color
  const getQualityLabel = (score) => {
    if (score >= 4) return '(High)';
    if (score >= 3) return '(Medium)';
    if (score >= 2) return '(Low)';
    return '(Very Low)';
  };

  const getQualityColor = (score) => {
    if (score >= 4) return '#00B388';
    if (score >= 3) return '#BA01FF';
    if (score >= 2) return '#FFA366';
    return '#FF4D4D';
  };

  // Topics & Intents combined view
  if (activeTab === 'topicsIntents') {
    return (
      <div className="breakdown-charts">
        {/* Topics Section */}
        <div className="breakdown-section">
          <h3 className="breakdown-section-title">Breakdown by Topics</h3>
          
          <div className="breakdown-charts-row">
            {/* Left Chart - Unique Sessions */}
            <div className="breakdown-chart-panel">
              <div className="breakdown-metric-label">Unique Sessions</div>
              
              <div className="breakdown-chart-content">
                <div className="breakdown-labels-column">
                  <div className="breakdown-label-header">
                    <span>Topic</span>
                  </div>
                  {topicsData.map((item, index) => (
                    <div key={index} className="breakdown-label-item">
                      <span className="breakdown-label-link">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="breakdown-bars-column">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                      data={topicsData}
                      layout="vertical"
                      barCategoryGap={8}
                      margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
                    >
                      <XAxis
                        type="number"
                        domain={[0, 80]}
                        tickLine={false}
                        axisLine={{ stroke: '#C9C9C9' }}
                        tick={{ fontSize: 12, fill: '#2e2e2e' }}
                      />
                      <YAxis type="category" dataKey="name" hide />
                      <Tooltip
                        formatter={(value) => [value, 'Sessions']}
                        contentStyle={{ borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 12 }}
                      />
                      <Bar
                        dataKey="sessions"
                        radius={[0, 4, 4, 0]}
                        label={{
                          position: 'right',
                          fontSize: 11,
                          fill: '#2e2e2e',
                          formatter: (val) => val
                        }}
                      >
                        {topicsData.map((entry, index) => (
                          <Cell key={index} fill="#4992FE" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="breakdown-axis-label">
                    <span>Session Count ↓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chart - Average Quality Score */}
            <div className="breakdown-chart-panel">
              <div className="breakdown-filter-row">
                <FilterDropdown label="Select Metric" value="Average Quality Score" />
              </div>

              <div className="breakdown-chart-content right-chart">
                <div className="breakdown-bars-column">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                      data={topicsData}
                      layout="vertical"
                      barCategoryGap={8}
                      margin={{ top: 0, right: 80, bottom: 0, left: 0 }}
                    >
                      <XAxis
                        type="number"
                        domain={[1, 5]}
                        tickLine={false}
                        axisLine={{ stroke: '#C9C9C9' }}
                        tick={{ fontSize: 12, fill: '#2e2e2e' }}
                      />
                      <YAxis type="category" dataKey="name" hide />
                      <Tooltip
                        formatter={(value) => [value, 'Quality Score']}
                        contentStyle={{ borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 12 }}
                      />
                      <Bar
                        dataKey="metric"
                        radius={[0, 4, 4, 0]}
                        label={{
                          position: 'right',
                          fontSize: 11,
                          fill: '#2e2e2e',
                          formatter: (val) => `${val} ${getQualityLabel(val)}`
                        }}
                      >
                        {topicsData.map((entry, index) => (
                          <Cell key={index} fill={getQualityColor(entry.metric)} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="breakdown-axis-label">
                    <span>Average Quality Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intents Section */}
        <div className="breakdown-section">
          <div className="breakdown-section-header">
            <h3 className="breakdown-section-title">Breakdown by Intents</h3>
            <FilterDropdown label="Select Topic" value="Billing and Payments" />
          </div>
          
          <div className="breakdown-charts-row">
            {/* Left Chart - Unique Sessions */}
            <div className="breakdown-chart-panel">
              <div className="breakdown-metric-label">Unique Sessions</div>
              
              <div className="breakdown-chart-content">
                <div className="breakdown-labels-column">
                  <div className="breakdown-label-header">
                    <span>Intent</span>
                  </div>
                  {intentsData.map((item, index) => (
                    <div key={index} className="breakdown-label-item">
                      <span className="breakdown-label-link">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="breakdown-bars-column">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                      data={intentsData}
                      layout="vertical"
                      barCategoryGap={8}
                      margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
                    >
                      <XAxis
                        type="number"
                        domain={[0, 80]}
                        tickLine={false}
                        axisLine={{ stroke: '#C9C9C9' }}
                        tick={{ fontSize: 12, fill: '#2e2e2e' }}
                      />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        hide
                        width={0}
                      />
                      <Tooltip
                        formatter={(value) => [value, 'Sessions']}
                        contentStyle={{ borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 12 }}
                      />
                      <Bar
                        dataKey="sessions"
                        radius={[0, 4, 4, 0]}
                        label={{
                          position: 'right',
                          fontSize: 11,
                          fill: '#2e2e2e',
                          formatter: (val) => val
                        }}
                      >
                        {intentsData.map((entry, index) => (
                          <Cell key={index} fill="#B60554" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="breakdown-axis-label">
                    <span>Session Count ↓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chart - Escalation Rate */}
            <div className="breakdown-chart-panel">
              <div className="breakdown-filter-row">
                <FilterDropdown label="Select Metric" value="Escalation Rate" />
              </div>

              <div className="breakdown-chart-content">
                {/* Spacer column to match left chart's labels column exactly */}
                <div className="breakdown-labels-column breakdown-labels-spacer">
                  <div className="breakdown-label-header">
                    <span></span>
                  </div>
                  {intentsData.map((item, index) => (
                    <div key={index} className="breakdown-label-item">
                      <span></span>
                    </div>
                  ))}
                </div>

                <div className="breakdown-bars-column">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                      data={intentsData}
                      layout="vertical"
                      barCategoryGap={8}
                      margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
                    >
                      <XAxis
                        type="number"
                        domain={[0, 40]}
                        tickLine={false}
                        axisLine={{ stroke: '#C9C9C9' }}
                        tick={{ fontSize: 12, fill: '#2e2e2e' }}
                      />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        hide
                        width={0}
                      />
                      <Tooltip
                        formatter={(value) => [value, 'Escalation Rate']}
                        contentStyle={{ borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 12 }}
                      />
                      <Bar
                        dataKey="metric"
                        radius={[0, 4, 4, 0]}
                        label={{
                          position: 'right',
                          fontSize: 11,
                          fill: '#2e2e2e',
                          formatter: (val) => val
                        }}
                      >
                        {intentsData.map((entry, index) => (
                          <Cell key={index} fill={entry.metric > 25 ? '#B60554' : '#FFA366'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="breakdown-axis-label">
                    <span>Escalation Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Actions & Custom Evals tab
  if (activeTab === 'actionsEvals') {
    return (
      <div className="breakdown-charts">
        <div className="breakdown-section">
          <h3 className="breakdown-section-title">Breakdown by Actions</h3>
          
          <div className="breakdown-charts-row">
            {/* Left Chart - Execution Count */}
            <div className="breakdown-chart-panel">
              <div className="breakdown-metric-label">Execution Count</div>
              
              <div className="breakdown-chart-content">
                <div className="breakdown-labels-column">
                  <div className="breakdown-label-header">
                    <span>Action</span>
                  </div>
                  {actionsData.map((item, index) => (
                    <div key={index} className="breakdown-label-item">
                      <span className="breakdown-label-link">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="breakdown-bars-column">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                      data={actionsData}
                      layout="vertical"
                      barCategoryGap={8}
                      margin={{ top: 0, right: 50, bottom: 0, left: 0 }}
                    >
                      <XAxis
                        type="number"
                        domain={[0, 5000]}
                        tickLine={false}
                        axisLine={{ stroke: '#C9C9C9' }}
                        tick={{ fontSize: 12, fill: '#2e2e2e' }}
                        tickFormatter={(val) => val >= 1000 ? `${val / 1000}K` : val}
                      />
                      <YAxis type="category" dataKey="name" hide />
                      <Tooltip
                        formatter={(value) => [value.toLocaleString(), 'Executions']}
                        contentStyle={{ borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 12 }}
                      />
                      <Bar
                        dataKey="sessions"
                        radius={[0, 4, 4, 0]}
                        label={{
                          position: 'right',
                          fontSize: 11,
                          fill: '#2e2e2e',
                          formatter: (val) => val.toLocaleString()
                        }}
                      >
                        {actionsData.map((entry, index) => (
                          <Cell key={index} fill="#4992FE" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="breakdown-axis-label">
                    <span>Execution Count ↓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chart - Failure Rate */}
            <div className="breakdown-chart-panel">
              <div className="breakdown-filter-row">
                <FilterDropdown label="Select Metric" value="Failure Rate" />
              </div>

              <div className="breakdown-chart-content right-chart">
                <div className="breakdown-bars-column">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                      data={actionsData}
                      layout="vertical"
                      barCategoryGap={8}
                      margin={{ top: 0, right: 50, bottom: 0, left: 0 }}
                    >
                      <XAxis
                        type="number"
                        domain={[0, 100]}
                        tickLine={false}
                        axisLine={{ stroke: '#C9C9C9' }}
                        tick={{ fontSize: 12, fill: '#2e2e2e' }}
                        tickFormatter={(val) => `${val}%`}
                      />
                      <YAxis type="category" dataKey="name" hide />
                      <Tooltip
                        formatter={(value) => [`${value}%`, 'Failure Rate']}
                        contentStyle={{ borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 12 }}
                      />
                      <Bar
                        dataKey="metric"
                        radius={[0, 4, 4, 0]}
                        label={{
                          position: 'right',
                          fontSize: 11,
                          fill: '#2e2e2e',
                          formatter: (val) => `${val}%`
                        }}
                      >
                        {actionsData.map((entry, index) => (
                          <Cell
                            key={index}
                            fill={entry.metric > 25 ? '#B60554' : '#BA01FF'}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="breakdown-axis-label">
                    <span>Failure Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const FilterDropdown = ({ label, value }) => (
  <div className="breakdown-filter">
    <label className="breakdown-filter-label">{label}</label>
    <div className="breakdown-filter-select">
      <span>{value}</span>
      <ChevronDown size={14} />
    </div>
  </div>
);

export default BreakdownChart;
