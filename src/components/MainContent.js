import React, { useState, useEffect } from 'react';
import { ChevronDown, BookOpen, Info, Download, Table2, LayoutGrid } from 'lucide-react';
import MetricCard from './MetricCard';
import BreakdownChart from './BreakdownChart';
import PerformanceOverview from './PerformanceOverview';
import MetricsTableView from './MetricsTableView';
import './MainContent.css';

const MainContent = ({ activeMetricTab, setActiveMetricTab }) => {
  const [activePageTab, setActivePageTab] = useState('overview');
  const [activeBreakdownTab, setActiveBreakdownTab] = useState('topicsIntents');
  const [viewMode, setViewMode] = useState('cards');
  
  // When Score Card tab is active, default to cards view
  useEffect(() => {
    if (activeMetricTab === 'scorecard') {
      setViewMode('cards');
    }
  }, [activeMetricTab]);

  const pageTabs = [
    { id: 'overview', label: 'Performance Overview' },
    { id: 'detailed', label: 'Agent Detailed View' },
  ];

  const metricTabs = [
    { id: 'scorecard', label: 'Score Card' },
    { id: 'usage', label: 'Usage' },
    { id: 'effectiveness', label: 'Effectiveness' },
    { id: 'trust', label: 'Trust' },
    { id: 'quality', label: 'Quality' },
    { id: 'health', label: 'Health' },
    { id: 'spend', label: 'Spend' },
    { id: 'voice', label: 'Voice' },
    { id: 'satisfaction', label: 'User Satisfaction' },
  ];

  const breakdownTabs = [
    { id: 'topicsIntents', label: 'Topics & Intents' },
    { id: 'actionsEvals', label: 'Actions & Custom Evals' },
  ];

  // Performance Overview Metrics
  const overviewMetrics = {
    usage: [
      {
        title: 'Total Conversations',
        value: '24,847',
        change: '+12.4%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Total customer conversations handled by the Service Agent across all channels.',
        chartData: generateTrendData(18000, 24847, 12),
      },
      {
        title: 'Resolution Rate',
        value: '78.3%',
        change: '+5.2%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Percentage of conversations resolved without escalation to human agents.',
        chartData: generateTrendData(72, 78.3, 12),
      },
      {
        title: 'Avg. Handle Time',
        value: '4:32',
        valueSuffix: 'min',
        change: '-18.5%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Average time to resolve customer inquiries. Lower is better.',
        chartData: generateTrendData(6.2, 4.53, 12, true),
      },
    ],
    effectiveness: [
      {
        title: 'CSAT Score',
        value: '4.6',
        valueSuffix: '/5',
        change: '+0.3',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Average customer satisfaction score from post-conversation surveys.',
        chartData: generateTrendData(4.2, 4.6, 12),
      },
      {
        title: 'First Contact Resolution',
        value: '72.1%',
        change: '+4.8%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Issues resolved in the first interaction without follow-up needed.',
        chartData: generateTrendData(65, 72.1, 12),
      },
      {
        title: 'Escalation Rate',
        value: '21.7%',
        change: '-3.2%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Conversations requiring escalation to human agents. Lower is better.',
        chartData: generateTrendData(28, 21.7, 12, true),
      },
    ],
    health: [
      {
        title: 'Error Rate',
        value: '2.1%',
        change: '-1.8%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Percentage of conversations that encountered system errors.',
        chartData: generateTrendData(4.2, 2.1, 12, true),
      },
      {
        title: 'Avg. Response Latency',
        value: '1.8',
        valueSuffix: 'sec',
        change: '-0.4s',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Average time to generate and send a response to customer messages.',
        chartData: generateTrendData(2.5, 1.8, 12, true),
      },
      {
        title: 'System Uptime',
        value: '99.7%',
        change: '+0.2%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Percentage of time the Service Agent was available and operational.',
        chartData: generateTrendData(99.3, 99.7, 12),
      },
    ],
    trust: [
      {
        title: 'Hallucination Rate',
        value: '0.8%',
        change: '-0.5%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Percentage of responses containing inaccurate or fabricated information.',
        chartData: generateTrendData(1.5, 0.8, 12, true),
      },
      {
        title: 'Grounding Score',
        value: '94.2%',
        change: '+2.1%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Responses grounded in verified knowledge base content.',
        chartData: generateTrendData(91, 94.2, 12),
      },
      {
        title: 'Safety Violations',
        value: '0.02%',
        change: '-0.01%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Responses flagged for safety or compliance concerns.',
        chartData: generateTrendData(0.05, 0.02, 12, true),
      },
    ],
    quality: [
      {
        title: 'Response Quality Score',
        value: '4.2',
        valueSuffix: '/5',
        change: '+0.4',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Average quality score based on automated evaluation.',
        chartData: generateTrendData(3.7, 4.2, 12),
      },
      {
        title: 'Coherence Rate',
        value: '96.8%',
        change: '+1.2%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Percentage of responses rated as coherent and contextually appropriate.',
        chartData: generateTrendData(94.5, 96.8, 12),
      },
      {
        title: 'Completeness Score',
        value: '89.4%',
        change: '+3.1%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Percentage of responses that fully addressed customer queries.',
        chartData: generateTrendData(84, 89.4, 12),
      },
    ],
    spend: [
      {
        title: 'Total API Costs',
        value: '$12,847',
        change: '+8.2%',
        changeType: 'neutral',
        period: 'Last 30 Days',
        description: 'Total costs for LLM API calls and inference.',
        chartData: generateTrendData(10500, 12847, 12),
      },
      {
        title: 'Cost per Conversation',
        value: '$0.52',
        change: '-4.1%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Average cost to handle one customer conversation.',
        chartData: generateTrendData(0.58, 0.52, 12, true),
      },
      {
        title: 'Token Usage',
        value: '4.2M',
        change: '+15.3%',
        changeType: 'neutral',
        period: 'Last 30 Days',
        description: 'Total tokens processed for all conversations.',
        chartData: generateTrendData(3.2, 4.2, 12),
      },
    ],
    voice: [
      {
        title: 'Voice Calls Handled',
        value: '3,241',
        change: '+22.4%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Total voice calls handled by the agent.',
        chartData: generateTrendData(2400, 3241, 12),
      },
      {
        title: 'Avg. Call Duration',
        value: '3:45',
        valueSuffix: 'min',
        change: '-12.3%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Average duration of voice conversations.',
        chartData: generateTrendData(4.5, 3.75, 12, true),
      },
      {
        title: 'Speech Recognition Accuracy',
        value: '97.2%',
        change: '+1.8%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Accuracy of speech-to-text transcription.',
        chartData: generateTrendData(94.8, 97.2, 12),
      },
    ],
    satisfaction: [
      {
        title: 'Average Sentiment Score',
        value: '2.6',
        valueSuffix: '/5',
        change: '+0.3',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Average sentiment score from user interactions.',
        chartData: generateTrendData(2.2, 2.6, 12),
      },
      {
        title: 'Positive Feedback Rate',
        value: '68.4%',
        change: '+5.2%',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Percentage of interactions with positive feedback.',
        chartData: generateTrendData(62, 68.4, 12),
      },
      {
        title: 'User Rating',
        value: '4.1',
        valueSuffix: '/5',
        change: '+0.2',
        changeType: 'positive',
        period: 'Last 30 Days',
        description: 'Average user rating from surveys.',
        chartData: generateTrendData(3.8, 4.1, 12),
      },
    ],
  };

  // Score Card metrics
  const scoreCardMetrics = [
    {
      title: 'Effectiveness',
      value: '3',
      valueSuffix: '',
      change: 'Medium',
      changeType: 'neutral',
      period: 'Last 30 Days',
      description: 'Overall effectiveness score',
      chartData: generateTrendData(2.5, 3, 12),
    },
    {
      title: 'Trust',
      value: '2',
      valueSuffix: '',
      change: 'Low',
      changeType: 'neutral',
      period: 'Last 30 Days',
      description: 'Trust score',
      chartData: generateTrendData(1.8, 2, 12),
    },
    {
      title: 'Quality',
      value: '1',
      valueSuffix: '',
      change: 'Very Low',
      changeType: 'neutral',
      period: 'Last 30 Days',
      description: 'Quality score',
      chartData: generateTrendData(0.8, 1, 12),
    },
    {
      title: 'Health',
      value: '5',
      valueSuffix: '',
      change: 'Very High',
      changeType: 'positive',
      period: 'Last 30 Days',
      description: 'System health score',
      chartData: generateTrendData(4.5, 5, 12),
    },
    {
      title: 'Voice',
      value: '4',
      valueSuffix: '',
      change: 'High',
      changeType: 'positive',
      period: 'Last 30 Days',
      description: 'Voice quality score',
      chartData: generateTrendData(3.5, 4, 12),
    },
    {
      title: 'User Satisfaction',
      value: '2',
      valueSuffix: '',
      change: 'Low',
      changeType: 'neutral',
      period: 'Last 30 Days',
      description: 'User satisfaction score',
      chartData: generateTrendData(1.8, 2, 12),
    },
  ];
  
  const currentMetrics = activeMetricTab === 'scorecard' 
    ? scoreCardMetrics 
    : (overviewMetrics[activeMetricTab] || overviewMetrics.usage || []);

  return (
    <main className="main-content">
      <div className="content-scroll">
        {/* Page Header with Tabs */}
        <div className="page-header">
          <div className="header-rectangle" />
          <div className="page-tabs-container">
            <div className="page-tabs">
              {pageTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`page-tab ${activePageTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActivePageTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
              <div className="page-tab-spacer" />
            </div>
          </div>

          {/* Title Section */}
          <div className="page-title-section">
            <div className="title-row">
              <div className="title-left">
                <h1 className="page-title">Agent Analytics</h1>
                <div className="agent-type-selector">
                  <span className="selector-label">Agent Type</span>
                  <div className="selector-dropdown">
                    <span>Service Agent</span>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
              <button className="help-button">
                <Info size={14} />
                <span>Agent Analytics Help</span>
              </button>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
              <span className="filter-by-label">Filter by:</span>
              <div className="filter-controls">
                {activePageTab === 'detailed' && (
                  <FilterControl label="Agent Name" value="Agent A" />
                )}
                <FilterControl label="Timeframe" value={activePageTab === 'detailed' ? 'Last 30 days' : 'Last 30 Days'} />
                <FilterControl label="Channel" value="All Channels" />
                <FilterControl label="Modality" value="All Modalities" />
              </div>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activePageTab === 'overview' ? (
          <PerformanceOverview />
        ) : (
          <>
            {/* Agent Metrics Section */}
            <section className="agent-metrics-section">
              <div className="section-header">
                <h2 className="section-title">Agent Metrics</h2>
              </div>

              {/* View Mode Toggle and Actions */}
              <div className="detailed-view-controls">
                <div className="view-mode-toggle">
                  <button 
                    className={`view-mode-btn ${viewMode === 'cards' ? 'active' : ''}`}
                    onClick={() => setViewMode('cards')}
                  >
                    <LayoutGrid size={16} />
                    <span>Metric Cards</span>
                  </button>
                  <button 
                    className={`view-mode-btn ${viewMode === 'table' ? 'active' : ''}`}
                    onClick={() => setViewMode('table')}
                  >
                    <Table2 size={16} />
                    <span>Table View</span>
                  </button>
                </div>
                <div className="detailed-view-actions">
                  <button className="action-btn">
                    <Download size={16} />
                    <ChevronDown size={12} />
                  </button>
                  <div className="time-period-selector">
                    <span>Time Period</span>
                    <div className="selector-dropdown">
                      <span>Week</span>
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Metric Tabs - only show when in cards view */}
              {viewMode === 'cards' && (
                <div className="metrics-tabs-bar">
                  {metricTabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`metrics-tab ${activeMetricTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveMetricTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                  <div className="metrics-tab-spacer" />
                </div>
              )}

              {/* Metrics Display */}
              {viewMode === 'table' ? (
                <MetricsTableView activeMetricTab="all" viewMode={viewMode} />
              ) : activeMetricTab === 'scorecard' ? (
                <MetricsTableView activeMetricTab={activeMetricTab} viewMode={viewMode} />
              ) : (
                <div className="metrics-grid">
                  {currentMetrics.map((card, index) => (
                    <MetricCard key={`${activeMetricTab}-${index}`} {...card} />
                  ))}
                </div>
              )}
            </section>

            {/* Breakdowns Section */}
            <section className="breakdowns-section">
              <div className="section-header">
                <h2 className="section-title">Breakdowns</h2>
              </div>
              <div className="breakdowns-container">
                <div className="scoped-tabs-bar">
                  {breakdownTabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`scoped-tab ${activeBreakdownTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveBreakdownTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                  <div className="scoped-tab-spacer" />
                </div>

                <div className="breakdowns-content">
                  <BreakdownChart activeTab={activeBreakdownTab} />
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

// Helper function to generate trend data
function generateTrendData(start, end, points, decreasing = false) {
  const data = [];
  const range = end - start;
  
  for (let i = 0; i < points; i++) {
    const progress = i / (points - 1);
    const noise = (Math.random() - 0.5) * Math.abs(range) * 0.15;
    let value = start + (range * progress) + noise;
    
    if (decreasing) {
      value = Math.max(end, Math.min(start, value));
    } else {
      value = Math.min(end, Math.max(start, value));
    }
    
    data.push({ value });
  }
  
  // Ensure last point is the end value
  data[data.length - 1] = { value: end };
  
  return data;
}

const FilterControl = ({ label, value }) => (
  <div className="filter-control">
    <span className="filter-control-label">{label}</span>
    <div className="filter-control-dropdown">
      <span>{value}</span>
      <ChevronDown size={12} />
    </div>
  </div>
);

export default MainContent;
