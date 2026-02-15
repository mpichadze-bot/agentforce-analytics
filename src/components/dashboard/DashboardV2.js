import React, { useState, useMemo } from 'react';
import {
  AlertTriangle, Users, Layers, TrendingUp, ChevronDown, ChevronUp,
  ArrowUpRight, Calculator, Settings, Search, Zap, Calendar, Clock, UserCircle
} from 'lucide-react';
import { AIProvider } from '../ai/AIProvider';
import CommandBar from '../ai/CommandBar';
import InsightsPanel from '../ai/InsightsPanel';
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
  const [showAllPainPoints, setShowAllPainPoints] = useState(false);
  const [showAllCustomers, setShowAllCustomers] = useState(false);
  
  const COLLAPSED_LIMIT = 7;
  const CUSTOMER_COLLAPSED_LIMIT = 8;

  // Parse date string to sortable value (handles formats like "Dec 16, 2025" and "Sep 16 - Dec 19, 2025")
  const parseDate = (dateStr) => {
    if (!dateStr) return 0;
    // For date ranges, use the end date
    const cleanDate = dateStr.includes(' - ') ? dateStr.split(' - ')[1] : dateStr;
    const parsed = new Date(cleanDate);
    return isNaN(parsed.getTime()) ? 0 : parsed.getTime();
  };

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

  // Filter and sort customers by date (most recent first)
  const filteredCustomers = useMemo(() => {
    let customers = [...customersData];
    
    if (selectedTheme) {
      const themeCustomerNames = [...new Set(
        painPointsData
          .filter(p => p.theme === selectedTheme)
          .flatMap(p => p.customers)
      )];
      customers = customers.filter(c => themeCustomerNames.includes(c.name));
    }
    
    // Sort by date (most recent first)
    customers.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    
    return customers;
  }, [selectedTheme]);
  
  const displayedCustomers = showAllCustomers ? filteredCustomers : filteredCustomers.slice(0, CUSTOMER_COLLAPSED_LIMIT);
  const hasMoreCustomers = filteredCustomers.length > CUSTOMER_COLLAPSED_LIMIT;

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

          {/* Command Bar with Personas Button */}
          <div style={{ 
            marginBottom: 'var(--space-6)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)'
          }}>
            <div style={{ flex: 1 }}>
              <CommandBar
                painPoints={painPointsData}
                customers={customersData}
                onSelectPainPoint={handleSelectPainPoint}
                onSelectCustomer={handleSelectCustomer}
              />
            </div>
            <a
              href={process.env.NODE_ENV === 'production' ? '/agentforce-analytics/personas.html' : '/personas.html'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-4)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-card-hover)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.color = 'var(--accent-purple)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-card)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <UserCircle size={18} />
              Personas
            </a>
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
                  {(showAllPainPoints ? filteredPainPoints : filteredPainPoints.slice(0, COLLAPSED_LIMIT)).map((pain) => {
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
                          <div className="table-cell-title">
                            {pain.title}
                            {pain.roadmap ? (
                              <span className="roadmap-tag planned" title={pain.roadmap.item}>
                                <Calendar size={10} />
                                {pain.roadmap.timeline}
                              </span>
                            ) : (
                              <span className="roadmap-tag not-planned">
                                <Clock size={10} />
                                Not Planned
                              </span>
                            )}
                          </div>
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
              
              {/* Show More / Show Less Button */}
              {filteredPainPoints.length > COLLAPSED_LIMIT && (
                <button
                  onClick={() => setShowAllPainPoints(!showAllPainPoints)}
                  className="show-more-btn"
                >
                  {showAllPainPoints ? (
                    <>
                      <ChevronUp size={16} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Show {filteredPainPoints.length - COLLAPSED_LIMIT} More Pain Points
                    </>
                  )}
                </button>
              )}
            </div>

            {/* AI Insights Panel */}
            <InsightsPanel selectedTheme={selectedTheme} />
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
                  ({filteredCustomers.length}) • Sorted by recent
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
              {displayedCustomers.map((customer) => {
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
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                        <div className="customer-pain-badge">
                          <AlertTriangle size={12} />
                          {painCount} issues
                        </div>
                        {customer.date && (
                          <div style={{ 
                            fontSize: '0.65rem', 
                            color: 'var(--text-dimmed)',
                            fontFamily: 'var(--font-mono)'
                          }}>
                            {customer.date}
                          </div>
                        )}
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
            
            {/* Show More / Show Less Button for Customers */}
            {hasMoreCustomers && (
              <button
                onClick={() => setShowAllCustomers(!showAllCustomers)}
                className="show-more-btn"
                style={{ marginTop: '1rem' }}
              >
                {showAllCustomers ? (
                  <>
                    <ChevronUp size={16} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} />
                    Show {filteredCustomers.length - CUSTOMER_COLLAPSED_LIMIT} More Customers
                  </>
                )}
              </button>
            )}
          </div>
        </div>

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

