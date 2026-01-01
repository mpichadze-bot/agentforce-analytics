import React, { useState, useMemo } from 'react';
import {
  AlertTriangle, Users, Layers, TrendingUp, ChevronDown, ChevronUp,
  ArrowUpRight, Calculator, Settings, Search, Zap
} from 'lucide-react';
import { AIProvider } from '../ai/AIProvider';
import CommandBar from '../ai/CommandBar';
import InsightsPanel from '../ai/InsightsPanel';
import ChatWidget from '../ai/ChatWidget';
import DeepDiveModal from './DeepDiveModal';
import '../../styles/obsidian.css';

// Import data from CustomerHomePage (we'll extract it)
import { painPointsData, customersData, themesData } from '../../data/dashboardData';

const DashboardV2 = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [sortBy, setSortBy] = useState('customerCount');
  const [sortDir, setSortDir] = useState('desc');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);

  // Filter and sort pain points
  const filteredPainPoints = useMemo(() => {
    let points = [...painPointsData];
    
    if (selectedTheme) {
      points = points.filter(p => p.theme === selectedTheme);
    }
    
    points.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      return sortDir === 'desc' ? bVal - aVal : aVal - bVal;
    });
    
    return points;
  }, [selectedTheme, sortBy, sortDir]);

  // Filter customers based on selected theme
  const filteredCustomers = useMemo(() => {
    if (!selectedTheme) return customersData;
    
    const themeCustomerNames = [...new Set(
      painPointsData
        .filter(p => p.theme === selectedTheme)
        .flatMap(p => p.customers)
    )];
    
    return customersData.filter(c => themeCustomerNames.includes(c.name));
  }, [selectedTheme]);

  // Stats
  const stats = useMemo(() => ({
    totalPainPoints: painPointsData.length,
    totalCustomers: customersData.length,
    totalThemes: themesData.length,
    avgCustomersPerPain: Math.round(
      painPointsData.reduce((sum, p) => sum + p.customerCount, 0) / painPointsData.length
    ),
  }), []);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDir(sortDir === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(field);
      setSortDir('desc');
    }
  };

  const handleSelectPainPoint = (painPoint) => {
    setSelectedItem(painPoint);
    setSelectedItemType('pain');
  };

  const handleSelectCustomer = (customer) => {
    // If customer is a string (name), find the full object
    const customerObj = typeof customer === 'string'
      ? customersData.find(c => c.name === customer)
      : customer;
    
    if (customerObj) {
      setSelectedItem(customerObj);
      setSelectedItemType('customer');
    }
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setSelectedItemType(null);
  };

  const getThemeIcon = (themeId) => {
    const icons = { metrics: Calculator, usability: Settings, troubleshooting: Search, functionality: Zap };
    return icons[themeId] || AlertTriangle;
  };

  return (
    <AIProvider painPoints={painPointsData} customers={customersData}>
      <div className="obsidian-app">
        <div style={{ 
          maxWidth: 1400, 
          margin: '0 auto', 
          padding: 'var(--space-6)',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Header */}
          <header style={{ marginBottom: 'var(--space-8)' }}>
            <h1 style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-2)'
            }}>
              Agentforce Analytics
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Customer pain points and feedback analysis dashboard
            </p>
          </header>

          {/* Command Bar */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <CommandBar
              painPoints={painPointsData}
              customers={customersData}
              onSelectPainPoint={handleSelectPainPoint}
              onSelectCustomer={handleSelectCustomer}
            />
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stat-card">
              <div className="stat-icon orange">
                <AlertTriangle size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.totalPainPoints}</div>
                <div className="stat-label">Pain Points</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon cyan">
                <Users size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.totalCustomers}</div>
                <div className="stat-label">Customers</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon purple">
                <Layers size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.totalThemes}</div>
                <div className="stat-label">Themes</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green">
                <TrendingUp size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.avgCustomersPerPain}</div>
                <div className="stat-label">Avg. Customers/Issue</div>
              </div>
            </div>
          </div>

          {/* Theme Filter Pills */}
          <div className="theme-pills">
            <button
              className={`theme-pill all ${selectedTheme === null ? 'active' : ''}`}
              onClick={() => setSelectedTheme(null)}
            >
              All
              <span className="theme-pill-count">{painPointsData.length}</span>
            </button>
            {themesData.map((theme) => {
              const ThemeIcon = getThemeIcon(theme.id);
              const count = painPointsData.filter(p => p.theme === theme.id).length;
              return (
                <button
                  key={theme.id}
                  className={`theme-pill ${theme.color} ${selectedTheme === theme.id ? 'active' : ''}`}
                  onClick={() => setSelectedTheme(selectedTheme === theme.id ? null : theme.id)}
                >
                  <ThemeIcon size={14} />
                  {theme.title}
                  <span className="theme-pill-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 320px', 
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-8)'
          }}>
            {/* Pain Points Table */}
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ width: 50 }}>Theme</th>
                    <th>Pain Point</th>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('customerCount')}
                      style={{ width: 150 }}
                    >
                      Customers
                      {sortBy === 'customerCount' && (
                        sortDir === 'desc' ? <ChevronDown size={14} /> : <ChevronUp size={14} />
                      )}
                    </th>
                    <th style={{ width: 50 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPainPoints.map((pain) => {
                    const ThemeIcon = getThemeIcon(pain.theme);
                    const barWidth = (pain.customerCount / stats.totalCustomers) * 100;
                    
                    return (
                      <tr key={pain.rank} onClick={() => handleSelectPainPoint(pain)}>
                        <td>
                          <div 
                            className={`pain-theme-indicator ${pain.color}`}
                            title={themesData.find(t => t.id === pain.theme)?.title}
                          >
                            <ThemeIcon size={14} />
                          </div>
                        </td>
                        <td>
                          <div className="table-cell-title">{pain.title}</div>
                          <div className="table-cell-subtitle">
                            {pain.description.length > 80 
                              ? pain.description.slice(0, 80) + '...' 
                              : pain.description
                            }
                          </div>
                        </td>
                        <td>
                          <div className="table-bar">
                            <div className="table-bar-track">
                              <div 
                                className={`table-bar-fill ${pain.color}`}
                                style={{ width: `${barWidth}%` }}
                              />
                            </div>
                            <span className="table-bar-value">{pain.customerCount}</span>
                          </div>
                        </td>
                        <td>
                          <ArrowUpRight size={16} style={{ color: 'var(--text-dimmed)' }} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* AI Insights Panel */}
            <InsightsPanel />
          </div>

          {/* Customer Grid */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: 'var(--space-4)'
            }}>
              <h2 style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}>
                <Users size={20} />
                Customers
                <span style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontWeight: 400
                }}>
                  ({filteredCustomers.length} of {customersData.length})
                </span>
              </h2>
              {selectedTheme && (
                <span style={{
                  fontSize: '0.8rem',
                  padding: '0.375rem 0.75rem',
                  background: 'var(--accent-purple-dim)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--accent-purple)'
                }}>
                  Filtered by: {themesData.find(t => t.id === selectedTheme)?.title}
                </span>
              )}
            </div>

            <div className="customer-grid-v2">
              {filteredCustomers.map((customer) => {
                // Count pain points for this customer
                const painCount = painPointsData.filter(p => 
                  p.customers.includes(customer.name)
                ).length;
                
                const colorMap = {
                  blue: 'cyan', indigo: 'purple', purple: 'purple',
                  green: 'green', cyan: 'cyan', red: 'red',
                  orange: 'orange', teal: 'cyan', pink: 'red',
                  rose: 'red', lime: 'green', violet: 'purple',
                  sky: 'cyan', emerald: 'green'
                };
                const mappedColor = colorMap[customer.color] || 'cyan';
                
                return (
                  <div
                    key={customer.id}
                    className={`customer-card-v2 ${mappedColor}`}
                    onClick={() => handleSelectCustomer(customer)}
                  >
                    <div className="customer-card-header">
                      <div className={`customer-avatar ${mappedColor}`}>
                        {customer.name.charAt(0)}
                      </div>
                      <div className="customer-pain-badge">
                        <AlertTriangle size={12} />
                        {painCount} issues
                      </div>
                    </div>
                    <div className="customer-card-name">{customer.name}</div>
                    <div className="customer-card-tagline">{customer.tagline}</div>
                    <div className="customer-card-metrics">
                      {customer.metrics?.slice(0, 3).map((metric, idx) => (
                        <span key={idx} className="customer-metric-chip">{metric}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating AI Chat */}
        <ChatWidget />

        {/* Deep Dive Modal */}
        {selectedItem && (
          <DeepDiveModal
            item={selectedItem}
            type={selectedItemType}
            onClose={handleCloseModal}
            onSelectCustomer={handleSelectCustomer}
          />
        )}
      </div>
    </AIProvider>
  );
};

export default DashboardV2;

