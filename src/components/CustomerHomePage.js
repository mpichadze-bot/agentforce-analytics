import React, { useState, useMemo } from 'react';
import {
  Briefcase, Building2, Wallet, HelpCircle, ShoppingBag, Package, TrendingUp as TrendingUpIcon,
  Activity, Eye, ArrowRight, BarChart3, Users, Zap, ChevronRight, Music, GraduationCap,
  TrendingUp, Target, Shield, MessageSquare, AlertTriangle, MessageCircle, UserCheck,
  FileSpreadsheet, Settings, EyeOff, BarChart, Database, ChevronDown, ChevronUp, Quote,
  Calculator, Filter, Search, PieChart, FlaskConical, ClipboardCheck, Sparkles, Server, Cpu,
  UserCircle
} from 'lucide-react';
import { painPointsData, customersData } from '../data/dashboardData';
import './CustomerHomePage.css';

const customerIconMap = {
  indeed: Briefcase, lululemon: ShoppingBag, pearson: Building2, 'help-agent': HelpCircle,
  cellebrite: Building2, nexo: Wallet, etoro: TrendingUpIcon, hardrock: Music, uncc: GraduationCap,
  astound: MessageCircle, fedex: Package, secretescapes: Briefcase, oniverse: ShoppingBag,
  allegis: Building2, 'fde-team': Users, nvidia: Cpu, sharkninja: ShoppingBag, ibm: Server, paypal: Wallet
};

const CustomerHomePage = () => {
  const [hoveredCustomer, setHoveredCustomer] = useState(null);
  const [expandedPain, setExpandedPain] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handlePainClick = (rank) => {
    setExpandedPain(expandedPain === rank ? null : rank);
  };

  const handleThemeClick = (themeId) => {
    setSelectedTheme(selectedTheme === themeId ? null : themeId);
    setExpandedPain(null); // Reset expanded pain when changing filter
  };

  // Pain Point Themes based on comprehensive analysis
  const painPointThemes = [
    {
      id: 'metrics',
      title: 'Flawed Metrics & Data Issues',
      color: 'orange',
      icon: Calculator,
      description: 'Metric definitions, data discrepancies, and trust issues'
    },
    {
      id: 'usability',
      title: 'Dashboard Usability & UI Challenges',
      color: 'red',
      icon: Settings,
      description: 'Navigation, customization, and visualization problems'
    },
    {
      id: 'troubleshooting',
      title: 'Difficult Troubleshooting & Root Cause Analysis',
      color: 'yellow',
      icon: Search,
      description: 'Manual workarounds, black boxes, and complex reporting'
    },
    {
      id: 'functionality',
      title: 'Critical Functionality Gaps',
      color: 'green',
      icon: Zap,
      description: 'Missing features for tagging, simulation, and security'
    }
  ];

  const themeIcons = { metrics: Calculator, usability: Settings, troubleshooting: Search, functionality: Zap };
  const topPainPoints = useMemo(() =>
    painPointsData.map(p => ({ ...p, icon: themeIcons[p.theme] || Search })), []);
  const customers = useMemo(() =>
    customersData.map(c => ({ ...c, icon: customerIconMap[c.id] || Building2 })), []);

  const handleNavigate = (url) => {
    window.location = window.location.origin + window.location.pathname + url;
  };

  const handleKeyDown = (e, url) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate(url);
    }
  };

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="home-bg">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>

      {/* Header */}
      <header className="home-header">
        <div className="logo-section">
          <div className="logo-icon">
            <Activity size={32} />
          </div>
          <div className="logo-text">
            <h1>Agentforce Observability</h1>
            <p>Customer Research & Workflow Visualizations</p>
          </div>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <Users size={18} />
            <span>{customers.length} Customers</span>
          </div>
          <div className="stat-item">
            <BarChart3 size={18} />
            <span>23 Visualizations</span>
          </div>
          <div className="stat-item">
            <Target size={18} />
            <span>Dec 2025</span>
          </div>
          <a
            href={`${process.env.PUBLIC_URL || ''}/personas.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="stat-item personas-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: 'inherit',
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#22d3ee';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'inherit';
            }}
          >
            <UserCircle size={18} />
            <span>Personas</span>
          </a>
        </div>
      </header>

      {/* Workflow Guide CTA */}
      <section className="guide-cta">
        <div className="cta-content">
          <div className="cta-icon">
            <Activity size={32} />
          </div>
          <div className="cta-text">
            <h3>New: Complete Observability Workflow Guide</h3>
            <p>Learn the end-to-end process: Discover → Investigate → Diagnose → Fix → Monitor</p>
          </div>
          <button
            className="cta-button"
            onClick={() => handleNavigate('?view=workflow-guide')}
            onKeyDown={(e) => handleKeyDown(e, '?view=workflow-guide')}
            tabIndex={0}
          >
            <span>View Guide</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Top Pain Points - Filter by Theme */}
      <section className="pain-points-section">
        <h2 className="section-title">
          <AlertTriangle size={20} />
          <span>Key Issues with Agentforce Analytics</span>
          <span className="section-hint">{topPainPoints.length} Pain Points • Click theme to filter • Sorted by customer count</span>
        </h2>
        
        {/* Clickable Theme Filter Tags */}
        <div className="theme-filter-bar">
          <button 
            className={`theme-filter-tag all ${selectedTheme === null ? 'active' : ''}`}
            onClick={() => handleThemeClick(null)}
            aria-pressed={selectedTheme === null}
          >
            <span>All</span>
            <span className="theme-count">{topPainPoints.length}</span>
          </button>
          {painPointThemes.map((theme) => {
            const ThemeIcon = theme.icon;
            const themeCount = topPainPoints.filter(p => p.theme === theme.id).length;
            const isActive = selectedTheme === theme.id;
            return (
              <button 
                key={theme.id} 
                className={`theme-filter-tag ${theme.color} ${isActive ? 'active' : ''}`}
                onClick={() => handleThemeClick(theme.id)}
                aria-pressed={isActive}
              >
                <ThemeIcon size={16} />
                <span>{theme.title}</span>
                <span className="theme-count">{themeCount}</span>
              </button>
            );
          })}
        </div>

        {/* Pain Points List - Sorted by Customer Count */}
        <div className="pain-points-list">
          {topPainPoints
            .filter(pain => selectedTheme === null || pain.theme === selectedTheme)
            .sort((a, b) => b.customerCount - a.customerCount)
            .map((pain) => {
              const IconComponent = pain.icon;
              const isExpanded = expandedPain === pain.rank;
              const themeInfo = painPointThemes.find(t => t.id === pain.theme);
              return (
                <div 
                  key={pain.rank} 
                  className={`pain-point-card ${pain.color} ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => handlePainClick(pain.rank)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handlePainClick(pain.rank);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className="pain-card-main">
                    <div className={`pain-theme-indicator ${themeInfo?.color || 'gray'}`} title={themeInfo?.title}>
                      {themeInfo && <themeInfo.icon size={14} />}
                    </div>
                    <div className={`pain-icon-wrap ${pain.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="pain-content">
                      <h3>{pain.title}</h3>
                      <p>{pain.description}</p>
                      <div className="pain-customers">
                        {pain.customers.slice(0, 5).map((customer, idx) => (
                          <span key={idx} className="customer-chip">{customer}</span>
                        ))}
                        {pain.customers.length > 5 && (
                          <span className="customer-chip more">+{pain.customers.length - 5} more</span>
                        )}
                      </div>
                    </div>
                    <div className={`pain-count ${pain.color}`}>
                      <span className="count-number">{pain.customerCount}</span>
                      <span className="count-label">/ 17</span>
                    </div>
                    <div className="pain-expand-icon">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="pain-expanded-content">
                      <div className="pain-quotes-section">
                        <h4><Quote size={16} /> Customer Quotes</h4>
                        <div className="pain-quotes-list">
                          {pain.quotes.map((quote, idx) => (
                            <div key={idx} className="pain-quote-item">
                              <p>"{quote.text}"</p>
                              <span className="quote-source">— {quote.source}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pain-examples-section">
                        <h4><AlertTriangle size={16} /> Examples & Symptoms</h4>
                        <ul className="pain-examples-list">
                          {pain.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </section>

      {/* Customer Grid */}
      <section className="customers-section">
        {(() => {
          // Get customers associated with selected theme's pain points
          const themeCustomerNames = selectedTheme 
            ? [...new Set(
                topPainPoints
                  .filter(p => p.theme === selectedTheme)
                  .flatMap(p => p.customers)
              )]
            : null;
          
          const filteredCustomers = customers.filter(
            customer => !themeCustomerNames || themeCustomerNames.includes(customer.name)
          );
          
          return (
            <>
              <h2 className="section-title">
                <span>Select a Customer</span>
                {selectedTheme ? (
                  <span className="filter-indicator">
                    <Filter size={14} />
                    {painPointThemes.find(t => t.id === selectedTheme)?.title}
                    <span className="filter-count">{filteredCustomers.length} of {customers.length}</span>
                  </span>
                ) : (
                  <span className="customer-count-badge">{customers.length} customers</span>
                )}
                <ChevronRight size={20} />
              </h2>
              
              <div className="customer-grid">
                {filteredCustomers.map((customer) => {
                  const IconComponent = customer.icon;
                  const isHovered = hoveredCustomer === customer.id;
            
            return (
              <div
                key={customer.id}
                className={`customer-tile ${customer.color} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCustomer(customer.id)}
                onMouseLeave={() => setHoveredCustomer(null)}
              >
                <div className="tile-header">
                  <div className={`tile-icon ${customer.color}`}>
                    <IconComponent size={32} />
                  </div>
                  <div className="tile-date">{customer.date}</div>
                </div>
                
                <div className="tile-content">
                  <h3>{customer.name}</h3>
                  <span className="tile-tagline">{customer.tagline}</span>
                  <p className="tile-description">{customer.description}</p>
                  
                  <div className="tile-metrics">
                    {customer.metrics.map((metric, idx) => (
                      <span key={idx} className="metric-tag">{metric}</span>
                    ))}
                  </div>
                </div>

                <div className="tile-actions">
                  <button
                    className="tile-btn workflow-btn"
                    onClick={() => handleNavigate(customer.workflowUrl)}
                    onKeyDown={(e) => handleKeyDown(e, customer.workflowUrl)}
                    tabIndex={0}
                    aria-label={`View ${customer.name} Workflow`}
                  >
                    <Activity size={16} />
                    <span>Workflow</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    className="tile-btn ux-btn"
                    onClick={() => handleNavigate(customer.uxUrl)}
                    onKeyDown={(e) => handleKeyDown(e, customer.uxUrl)}
                    tabIndex={0}
                    aria-label={`View ${customer.name} UX Findings`}
                  >
                    <Eye size={16} />
                    <span>UX Findings</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`tile-glow ${customer.color}`}></div>
              </div>
            );
          })}
              </div>
            </>
          );
        })()}
      </section>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon red">
            <MessageSquare size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-number">{topPainPoints.length}</span>
            <span className="stat-label">Pain Points Tracked</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">
            <Zap size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-number">5</span>
            <span className="stat-label">Desired Features</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-number">4</span>
            <span className="stat-label">Key Insights</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue">
            <Shield size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-number">{customers.length}</span>
            <span className="stat-label">Total Customers</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>Agentforce Observability Research • December 2025</p>
      </footer>
    </div>
  );
};

export default CustomerHomePage;

