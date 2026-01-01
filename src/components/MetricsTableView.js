import React, { useState } from 'react';
import { Settings, X, BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { BarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './MetricsTableView.css';

const MetricsTableView = ({ activeMetricTab, viewMode = 'table' }) => {
  // Customization state
  const [showCustomizePanel, setShowCustomizePanel] = useState(false);
  const [chartType, setChartType] = useState('bar');
  const [calculationMethod, setCalculationMethod] = useState('average');
  const [selectedMetrics, setSelectedMetrics] = useState({
    Effectiveness: true,
    Trust: true,
    Quality: true,
    Health: true,
    Voice: true,
    'User Satisfaction': true,
  });

  const toggleMetric = (metricName) => {
    setSelectedMetrics(prev => ({
      ...prev,
      [metricName]: !prev[metricName]
    }));
  };

  const calculateValue = (item) => {
    const values = [item.week45, item.week46, item.week47, item.week48];
    switch (calculationMethod) {
      case 'sum':
        return values.reduce((a, b) => a + b, 0);
      case 'max':
        return Math.max(...values);
      case 'min':
        return Math.min(...values);
      case 'average':
      default:
        return Math.round(values.reduce((a, b) => a + b, 0) / values.length * 10) / 10;
    }
  };
  // Table data matching the image
  const tableData = [
    {
      category: 'Usage',
      metrics: [
        {
          name: 'Unique Sessions',
          week45: 85,
          week46: 63,
          week47: 147,
          week48: 126,
          total: 385,
        },
        {
          name: 'Unique Interactions',
          week45: 679,
          week46: 1295,
          week47: 1378,
          week48: 1491,
          total: 5679,
        },
        {
          name: 'Unique Users',
          week45: 121,
          week46: 126,
          week47: 119,
          week48: 86,
          total: 321,
        },
        {
          name: 'Average Interactions Per Session',
          week45: 14,
          week46: 17,
          week47: 10,
          week48: 19,
          total: 14,
        },
      ],
    },
    {
      category: 'Effectiveness',
      metrics: [
        {
          name: 'Engagement Rate',
          week45: '46%',
          week46: '42%',
          week47: '54%',
          week48: '62%',
          total: '46%',
        },
        {
          name: 'Deflection Rate',
          week45: '56%',
          week46: '51%',
          week47: '48%',
          week48: '45%',
          total: '51%',
        },
        {
          name: 'Abandonment Rate',
          week45: '26%',
          week46: '32%',
          week47: '36%',
          week48: '24%',
          total: '27%',
        },
        {
          name: 'Escalation Rate',
          week45: '28%',
          week46: '31%',
          week47: '34%',
          week48: '36%',
          total: '29%',
        },
        {
          name: 'Success Rate',
          week45: '35%',
          week46: '39%',
          week47: '42%',
          week48: '41%',
          total: '37%',
        },
      ],
    },
    {
      category: 'Trust',
      metrics: [
        {
          name: 'High Instruction adherence rate',
          week45: '82%',
          week46: '75%',
          week47: '78%',
          week48: '75%',
          total: '79%',
        },
        {
          name: 'Average toxicity score',
          week45: '0.84',
          week46: '0.81',
          week47: '0.87',
          week48: '0.91',
          total: '0.83',
        },
        {
          name: 'Average Prompt Injection score',
          week45: '0.69',
          week46: '0.65',
          week47: '0.53',
          week48: '0.51',
          total: '0.65',
        },
      ],
    },
    {
      category: 'Quality',
      metrics: [
        {
          name: 'Average Quality Score',
          week45: '2.8',
          week46: '3.1',
          week47: '2.4',
          week48: '2.6',
          total: '2.5',
        },
        {
          name: 'Average answer faithfulness score',
          week45: '0.84',
          week46: '0.83',
          week47: '0.75',
          week48: '0.77',
          total: '0.81',
        },
        {
          name: 'Average answer relevance score',
          week45: '0.75',
          week46: '0.82',
          week47: '0.86',
          week48: '0.82',
          total: '0.80',
        },
        {
          name: 'Average context relevance score',
          week45: '0.88',
          week46: '0.91',
          week47: '0.93',
          week48: '0.95',
          total: '0.91',
        },
      ],
    },
    {
      category: 'Health',
      metrics: [
        {
          name: 'Interaction Error Rate',
          week45: '4%',
          week46: '5%',
          week47: '7%',
          week48: '9%',
          total: '6%',
        },
        {
          name: 'Average Session Duration',
          week45: '05:53 min',
          week46: '06:10 min',
          week47: '04:10 min',
          week48: '05:03 min',
          total: '06:35 min',
        },
        {
          name: 'Average Agent Interaction Latency',
          week45: '165 msec',
          week46: '121 msec',
          week47: '145 msec',
          week48: '187 msec',
          total: '168 msec',
        },
      ],
    },
    {
      category: 'Spend',
      metrics: [
        {
          name: 'Total Flex Credits',
          week45: 128,
          week46: 159,
          week47: 175,
          week48: 252,
          total: 653,
        },
      ],
    },
    {
      category: 'Voice',
      metrics: [
        {
          name: 'Audio Quality Score',
          week45: '4.3',
          week46: '4.5',
          week47: '4.2',
          week48: '4.1',
          total: '4.3',
        },
        {
          name: 'Interruption Rate',
          week45: '12%',
          week46: '14%',
          week47: '17%',
          week48: '15%',
          total: '15%',
        },
        {
          name: 'Talk-to-Listen Ratio',
          week45: '41%',
          week46: '48%',
          week47: '43%',
          week48: '45%',
          total: '45%',
        },
      ],
    },
    {
      category: 'User Satisfaction',
      metrics: [
        {
          name: 'Average Sentiment Score',
          week45: '2.3',
          week46: '2.1',
          week47: '2.5',
          week48: '2.7',
          total: '2.6',
        },
      ],
    },
  ];

  // Filter data based on active metric tab
  const getFilteredData = () => {
    if (activeMetricTab === 'scorecard') {
      // Score card view shows horizontal bars
      return [];
    }
    
    // Show all data when 'all' is passed (Table View mode)
    if (activeMetricTab === 'all') {
      return tableData;
    }
    
    // Map metric tab IDs to category names
    const categoryMap = {
      usage: 'Usage',
      effectiveness: 'Effectiveness',
      trust: 'Trust',
      quality: 'Quality',
      health: 'Health',
      spend: 'Spend',
      voice: 'Voice',
      satisfaction: 'User Satisfaction',
    };

    const category = categoryMap[activeMetricTab];
    
    // If category exists, filter to show only that category's data
    if (category) {
      return tableData.filter(item => item.category === category);
    }
    
    // Default: show all data if no specific category match
    return tableData;
  };

  const filteredData = getFilteredData();

  if (activeMetricTab === 'scorecard') {
    // Score card data
    const allScoreCardData = [
      { name: 'Effectiveness', value: 3, label: 'Medium', color: '#4992FE', week45: 3, week46: 3, week47: 3, week48: 3 },
      { name: 'Trust', value: 2, label: 'Low', color: '#FFA366', week45: 2, week46: 2, week47: 2, week48: 2 },
      { name: 'Quality', value: 1, label: 'Very Low', color: '#FF4D4D', week45: 1, week46: 1, week47: 2, week48: 1 },
      { name: 'Health', value: 5, label: 'Very High', color: '#0250D9', week45: 4, week46: 5, week47: 5, week48: 5 },
      { name: 'Voice', value: 4, label: 'High', color: '#4992FE', week45: 4, week46: 4, week47: 4, week48: 4 },
      { name: 'User Satisfaction', value: 2, label: 'Low', color: '#FFA366', week45: 2, week46: 2, week47: 3, week48: 2 },
    ];

    // Filter based on selected metrics
    const scoreCardData = allScoreCardData.filter(item => selectedMetrics[item.name]);

    // Recalculate values based on calculation method
    const processedData = scoreCardData.map(item => ({
      ...item,
      calculatedValue: calculateValue(item),
    }));

    const getLabel = (value) => {
      if (value <= 1) return 'Very Low';
      if (value <= 2) return 'Low';
      if (value <= 3) return 'Medium';
      if (value <= 4) return 'High';
      return 'Very High';
    };

    // Customization Panel Component
    const CustomizePanel = () => (
      <div className="customize-panel-overlay" onClick={() => setShowCustomizePanel(false)}>
        <div className="customize-panel" onClick={(e) => e.stopPropagation()}>
          <div className="customize-panel-header">
            <h3>Customize Chart</h3>
            <button className="close-btn" onClick={() => setShowCustomizePanel(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="customize-section">
            <h4>Chart Type</h4>
            <div className="chart-type-options">
              <button 
                className={`chart-type-btn ${chartType === 'bar' ? 'active' : ''}`}
                onClick={() => setChartType('bar')}
              >
                <BarChart3 size={20} />
                <span>Bar</span>
              </button>
              <button 
                className={`chart-type-btn ${chartType === 'line' ? 'active' : ''}`}
                onClick={() => setChartType('line')}
              >
                <LineChart size={20} />
                <span>Line</span>
              </button>
              <button 
                className={`chart-type-btn ${chartType === 'area' ? 'active' : ''}`}
                onClick={() => setChartType('area')}
              >
                <TrendingUp size={20} />
                <span>Area</span>
              </button>
              <button 
                className={`chart-type-btn ${chartType === 'pie' ? 'active' : ''}`}
                onClick={() => setChartType('pie')}
              >
                <PieChart size={20} />
                <span>Pie</span>
              </button>
            </div>
          </div>

          <div className="customize-section">
            <h4>Metrics to Display</h4>
            <div className="metrics-checkboxes">
              {allScoreCardData.map((item) => (
                <label key={item.name} className="metric-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedMetrics[item.name]}
                    onChange={() => toggleMetric(item.name)}
                  />
                  <span className="checkbox-label">{item.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="customize-section">
            <h4>Calculation Method</h4>
            <div className="calculation-options">
              <label className="calculation-radio">
                <input
                  type="radio"
                  name="calculation"
                  value="average"
                  checked={calculationMethod === 'average'}
                  onChange={(e) => setCalculationMethod(e.target.value)}
                />
                <span>Average</span>
              </label>
              <label className="calculation-radio">
                <input
                  type="radio"
                  name="calculation"
                  value="sum"
                  checked={calculationMethod === 'sum'}
                  onChange={(e) => setCalculationMethod(e.target.value)}
                />
                <span>Sum</span>
              </label>
              <label className="calculation-radio">
                <input
                  type="radio"
                  name="calculation"
                  value="max"
                  checked={calculationMethod === 'max'}
                  onChange={(e) => setCalculationMethod(e.target.value)}
                />
                <span>Maximum</span>
              </label>
              <label className="calculation-radio">
                <input
                  type="radio"
                  name="calculation"
                  value="min"
                  checked={calculationMethod === 'min'}
                  onChange={(e) => setCalculationMethod(e.target.value)}
                />
                <span>Minimum</span>
              </label>
            </div>
          </div>

          <div className="customize-panel-footer">
            <button className="apply-btn" onClick={() => setShowCustomizePanel(false)}>
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    );

    // Render different chart types
    const renderChart = () => {
      const maxValue = calculationMethod === 'sum' ? 20 : 5;

      if (chartType === 'pie') {
        return (
          <div className="chart-wrapper pie-chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={processedData}
                  dataKey="calculatedValue"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, calculatedValue }) => `${name}: ${calculatedValue}`}
                >
                  {processedData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        );
      }

      if (chartType === 'line') {
        const lineData = [
          { week: 'Week 45', ...Object.fromEntries(processedData.map(d => [d.name, d.week45])) },
          { week: 'Week 46', ...Object.fromEntries(processedData.map(d => [d.name, d.week46])) },
          { week: 'Week 47', ...Object.fromEntries(processedData.map(d => [d.name, d.week47])) },
          { week: 'Week 48', ...Object.fromEntries(processedData.map(d => [d.name, d.week48])) },
        ];
        return (
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <RechartsLineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Legend />
                {processedData.map((item) => (
                  <Line
                    key={item.name}
                    type="monotone"
                    dataKey={item.name}
                    stroke={item.color}
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                ))}
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        );
      }

      if (chartType === 'area') {
        const areaData = [
          { week: 'Week 45', ...Object.fromEntries(processedData.map(d => [d.name, d.week45])) },
          { week: 'Week 46', ...Object.fromEntries(processedData.map(d => [d.name, d.week46])) },
          { week: 'Week 47', ...Object.fromEntries(processedData.map(d => [d.name, d.week47])) },
          { week: 'Week 48', ...Object.fromEntries(processedData.map(d => [d.name, d.week48])) },
        ];
        return (
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={areaData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Legend />
                {processedData.map((item) => (
                  <Area
                    key={item.name}
                    type="monotone"
                    dataKey={item.name}
                    stroke={item.color}
                    fill={item.color}
                    fillOpacity={0.3}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        );
      }

      // Default: Bar chart (horizontal bars)
      return (
        <div className="scorecard-chart-container">
          {processedData.map((item, index) => (
            <div key={index} className="scorecard-row">
              <div className="scorecard-label">{item.name}</div>
              <div className="scorecard-bar-wrapper">
                <div className="scorecard-bar-track">
                  <div
                    className="scorecard-bar-fill"
                    style={{
                      width: `${(item.calculatedValue / maxValue) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                <span className="scorecard-value-label">
                  {item.calculatedValue} - {getLabel(item.calculatedValue)}
                </span>
              </div>
            </div>
          ))}
          <div className="scorecard-axis">
            <span>0</span>
            <span>{Math.round(maxValue * 0.2)}</span>
            <span>{Math.round(maxValue * 0.4)}</span>
            <span>{Math.round(maxValue * 0.6)}</span>
            <span>{Math.round(maxValue * 0.8)}</span>
            <span>{maxValue}</span>
          </div>
        </div>
      );
    };

    // Table View for Score Card
    if (viewMode === 'table') {
      return (
        <div className="metrics-table-view">
          <div className="metrics-table-container">
            <table className="metrics-table">
              <thead>
                <tr>
                  <th className="metric-column">Metric Category</th>
                  <th className="week-column">Week 45<br />(Nov 3-9)</th>
                  <th className="week-column">Week 46<br />(Nov 10-16)</th>
                  <th className="week-column">Week 47<br />(Nov 17-23)</th>
                  <th className="week-column">Week 48<br />(Nov 24-30)</th>
                  <th className="total-column">Average<br />(Last 30 Days)</th>
                </tr>
              </thead>
              <tbody>
                {processedData.map((item, index) => (
                  <tr key={index}>
                    <td className="metric-cell">{item.name}</td>
                    <td className="week-cell">{item.week45}</td>
                    <td className="week-cell">{item.week46}</td>
                    <td className="week-cell">{item.week47}</td>
                    <td className="week-cell">{item.week48}</td>
                    <td className="total-cell">{item.calculatedValue} - {getLabel(item.calculatedValue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    // Metric Cards view for Score Card
    return (
      <div className="metrics-table-view scorecard-container">
        <div className="scorecard-view">
          <div className="scorecard-header">
            <span className="scorecard-header-label">Metric Category</span>
            <button 
              className="customize-btn"
              onClick={() => setShowCustomizePanel(true)}
              title="Customize Chart"
            >
              <Settings size={18} />
              <span>Customize</span>
            </button>
          </div>
          {renderChart()}
        </div>
        {showCustomizePanel && <CustomizePanel />}
      </div>
    );
  }

  return (
    <div className="metrics-table-view">
      <div className="metrics-table-container">
        <table className="metrics-table">
          <thead>
            <tr>
              <th className="category-column">Category</th>
              <th className="metric-column">Metric</th>
              <th className="week-column">Week 45<br />(Nov 3-9)</th>
              <th className="week-column">Week 46<br />(Nov 10-16)</th>
              <th className="week-column">Week 47<br />(Nov 17-23)</th>
              <th className="week-column">Week 48<br />(Nov 24-30)</th>
              <th className="total-column">Total<br />(Last 30 Days)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((categoryData, categoryIndex) =>
              categoryData.metrics.map((metric, metricIndex) => (
                <tr
                  key={`${categoryIndex}-${metricIndex}`}
                  className={metricIndex === 0 ? 'category-first-row' : ''}
                >
                  {metricIndex === 0 && (
                    <td
                      className="category-cell"
                      rowSpan={categoryData.metrics.length}
                    >
                      {categoryData.category}
                    </td>
                  )}
                  <td className="metric-cell">{metric.name}</td>
                  <td className="week-cell">{metric.week45}</td>
                  <td className="week-cell">{metric.week46}</td>
                  <td className="week-cell">{metric.week47}</td>
                  <td className="week-cell">{metric.week48}</td>
                  <td className="total-cell">{metric.total}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MetricsTableView;

