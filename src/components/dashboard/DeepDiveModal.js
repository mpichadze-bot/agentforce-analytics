import React, { useEffect, useState, useMemo } from 'react';
import { X, Quote, AlertTriangle, Users, Lightbulb, ExternalLink, Target, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useAI } from '../ai/AIProvider';
import { painPointsData } from '../../data/dashboardData';

// Customer Detail View Component
const CustomerDetailView = ({ item }) => {
  // Get pain points for this customer, sorted by severity
  const customerPainPoints = useMemo(() => {
    const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    return painPointsData
      .filter(pain => pain.customers?.includes(item.name))
      .sort((a, b) => (severityOrder[a.severity] ?? 3) - (severityOrder[b.severity] ?? 3));
  }, [item.name]);

  // Get all quotes from this customer
  const allCustomerQuotes = useMemo(() => {
    const quotes = [];
    painPointsData.forEach(pain => {
      pain.quotes?.forEach(quote => {
        if (quote.source?.includes(item.name)) {
          quotes.push({ ...quote, painTitle: pain.title });
        }
      });
    });
    return quotes;
  }, [item.name]);
  
  const [showAllQuotes, setShowAllQuotes] = React.useState(false);
  const [showAllPains, setShowAllPains] = React.useState(false);
  const [showAllSolutions, setShowAllSolutions] = React.useState(false);
  
  const customerQuotes = showAllQuotes ? allCustomerQuotes : allCustomerQuotes.slice(0, 3);
  const hasMoreQuotes = allCustomerQuotes.length > 3;
  
  const displayedPains = showAllPains ? customerPainPoints : customerPainPoints.slice(0, 3);
  const hasMorePains = customerPainPoints.length > 3;
  
  const displayedSolutions = showAllSolutions ? customerPainPoints : customerPainPoints.slice(0, 3);
  const hasMoreSolutions = customerPainPoints.length > 3;

  // Count by severity
  const severityCounts = useMemo(() => ({
    critical: customerPainPoints.filter(p => p.severity === 'critical').length,
    high: customerPainPoints.filter(p => p.severity === 'high').length,
    medium: customerPainPoints.filter(p => p.severity === 'medium').length,
  }), [customerPainPoints]);

  return (
    <>
      {/* What They Said - Customer Quotes (TOP) */}
      {customerQuotes.length > 0 && (
        <div className="modal-section" style={{ marginTop: 0 }}>
          <h3 className="modal-section-title">
            <Quote size={14} /> What They Said
          </h3>
          <div className="quote-grid">
            {customerQuotes.map((quote, idx) => (
              <div key={idx} className="quote-card">
                <p className="quote-text">"{quote.text}"</p>
                <span className="quote-source">— {quote.source}</span>
                <div style={{ 
                  marginTop: '0.5rem', 
                  fontSize: '0.7rem', 
                  color: 'var(--text-dimmed)' 
                }}>
                  Re: {quote.painTitle}
                </div>
              </div>
            ))}
          </div>
          {hasMoreQuotes && (
            <button
              onClick={() => setShowAllQuotes(!showAllQuotes)}
              style={{
                marginTop: '0.75rem',
                padding: '0.5rem 1rem',
                background: 'var(--obsidian-glass)',
                border: '1px solid var(--obsidian-border)',
                borderRadius: '6px',
                color: 'var(--accent-purple)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {showAllQuotes ? 'Show Less' : `Show ${allCustomerQuotes.length - 3} More Quotes`}
            </button>
          )}
        </div>
      )}

      {/* Top Pain Points */}
      <div className="modal-section">
        <h3 className="modal-section-title">
          <AlertTriangle size={14} /> Top Pain Points
          <span style={{ 
            marginLeft: '0.75rem', 
            fontSize: '0.75rem', 
            color: 'var(--text-muted)',
            fontWeight: 400
          }}>
            {severityCounts.critical > 0 && <span style={{ color: 'var(--accent-red)' }}>🔴 {severityCounts.critical} critical</span>}
            {severityCounts.high > 0 && <span style={{ marginLeft: '0.5rem', color: 'var(--accent-orange)' }}>🟠 {severityCounts.high} high</span>}
          </span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {displayedPains.map((pain, idx) => (
            <div 
              key={idx} 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.75rem',
                background: 'var(--obsidian-glass)',
                borderRadius: '6px',
                borderLeft: `3px solid var(--accent-${pain.severity === 'critical' ? 'red' : pain.severity === 'high' ? 'orange' : 'yellow'})`
              }}
            >
              <span style={{ 
                fontSize: '0.65rem', 
                padding: '2px 6px',
                borderRadius: '9999px',
                background: pain.severity === 'critical' ? 'var(--accent-red-dim)' : pain.severity === 'high' ? 'var(--accent-orange-dim)' : 'var(--accent-yellow-dim)',
                color: pain.severity === 'critical' ? 'var(--accent-red)' : pain.severity === 'high' ? 'var(--accent-orange)' : 'var(--accent-yellow)',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}>
                {pain.severity}
              </span>
              <span style={{ color: 'var(--text-primary)', fontSize: '0.8rem' }}>{pain.title}</span>
            </div>
          ))}
        </div>
        {hasMorePains && (
          <button
            onClick={() => setShowAllPains(!showAllPains)}
            style={{
              marginTop: '0.75rem',
              padding: '0.5rem 1rem',
              background: 'var(--obsidian-glass)',
              border: '1px solid var(--obsidian-border)',
              borderRadius: '6px',
              color: 'var(--accent-orange)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {showAllPains ? 'Show Less' : `Show ${customerPainPoints.length - 3} More Pain Points`}
          </button>
        )}
      </div>

      {/* Solutions & Workarounds */}
      <div className="modal-section">
        <h3 className="modal-section-title">
          <Lightbulb size={14} /> Solutions & Workarounds
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {displayedSolutions.map((pain, idx) => (
            <div key={idx} style={{ 
              padding: '0.6rem 0.75rem',
              background: 'var(--accent-green-dim)',
              borderRadius: '6px',
              borderLeft: '3px solid var(--accent-green)'
            }}>
              <h4 style={{ 
                margin: '0 0 0.25rem 0', 
                fontSize: '0.75rem',
                color: 'var(--text-primary)'
              }}>
                ⚡ {pain.title}
              </h4>
              <ul style={{ 
                margin: 0, 
                paddingLeft: '1rem',
                color: 'var(--text-secondary)',
                fontSize: '0.75rem',
                lineHeight: 1.4
              }}>
                {pain.solutions?.length > 0 ? (
                  pain.solutions.slice(0, 2).map((solution, sIdx) => (
                    <li key={sIdx}>{solution}</li>
                  ))
                ) : (
                  <li style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    No workaround yet
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        {hasMoreSolutions && (
          <button
            onClick={() => setShowAllSolutions(!showAllSolutions)}
            style={{
              marginTop: '0.75rem',
              padding: '0.5rem 1rem',
              background: 'var(--obsidian-glass)',
              border: '1px solid var(--obsidian-border)',
              borderRadius: '6px',
              color: 'var(--accent-green)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {showAllSolutions ? 'Show Less' : `Show ${customerPainPoints.length - 3} More Solutions`}
          </button>
        )}
      </div>

      {/* Quick Actions - At Bottom */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        flexWrap: 'wrap',
        marginTop: '1.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)'
      }}>
        <a
          href={item.workflowUrl}
          className="customer-chip-v2"
          style={{ 
            textDecoration: 'none',
            padding: '0.75rem 1.25rem',
            fontSize: '0.875rem'
          }}
        >
          View Workflow <ExternalLink size={14} />
        </a>
        <a
          href={item.uxUrl}
          className="customer-chip-v2"
          style={{ 
            textDecoration: 'none',
            padding: '0.75rem 1.25rem',
            fontSize: '0.875rem'
          }}
        >
          View UX Findings <ExternalLink size={14} />
        </a>
      </div>
    </>
  );
};

// Helper to get customer metadata for header
const getCustomerMetadata = (customerName) => {
  const pains = painPointsData.filter(p => p.customers?.includes(customerName));
  const quotes = [];
  painPointsData.forEach(p => {
    p.quotes?.forEach(q => {
      if (q.source?.includes(customerName)) quotes.push(q);
    });
  });
  return { painCount: pains.length, quoteCount: quotes.length };
};

const DeepDiveModal = ({ item, type, onClose, onSelectCustomer }) => {
  const { getRecommendations } = useAI();
  const [recommendations, setRecommendations] = useState([]);
  const [isLoadingRecs, setIsLoadingRecs] = useState(false);

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Load recommendations for pain points
  useEffect(() => {
    if (type === 'pain' && item) {
      setIsLoadingRecs(true);
      getRecommendations(item).then(recs => {
        setRecommendations(recs);
        setIsLoadingRecs(false);
      });
    }
  }, [item, type, getRecommendations]);

  if (!item) return null;

  const getThemeColor = (theme) => {
    const colors = {
      metrics: 'orange',
      usability: 'red',
      troubleshooting: 'yellow',
      functionality: 'green',
    };
    return colors[theme] || 'cyan';
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            {type === 'pain' ? (
              <div 
                className="modal-icon" 
                style={{ 
                  background: `var(--accent-${item.color}-dim)`,
                  color: `var(--accent-${item.color})`
                }}
              >
                <AlertTriangle size={24} />
              </div>
            ) : (
              <div 
                className="modal-icon" 
                style={{ 
                  background: 'var(--accent-cyan-dim)',
                  color: 'var(--accent-cyan)'
                }}
              >
                <Users size={24} />
              </div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <h2 className="modal-title" style={{ margin: 0 }}>
                  {type === 'pain' ? item.title : item.name}
                </h2>
                {type === 'pain' && (
                  item.roadmap ? (
                    <span className="roadmap-tag planned" title={item.roadmap.item}>
                      <Calendar size={12} />
                      {item.roadmap.timeline}
                    </span>
                  ) : (
                    <span className="roadmap-tag not-planned">
                      <Clock size={12} />
                      Not Planned
                    </span>
                  )
                )}
                {type === 'customer' && (() => {
                  const meta = getCustomerMetadata(item.name);
                  return (
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <AlertTriangle size={11} style={{ color: 'var(--accent-orange)' }} />
                        {meta.painCount} pain points
                      </span>
                      <span style={{ opacity: 0.4 }}>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Quote size={11} style={{ color: 'var(--accent-purple)' }} />
                        {meta.quoteCount} quotes
                      </span>
                      <span style={{ opacity: 0.4 }}>•</span>
                      <span>{item.date}</span>
                    </div>
                  );
                })()}
              </div>
              <p className="modal-subtitle">
                {type === 'pain' ? item.description : item.tagline}
              </p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {type === 'pain' ? (
            <>
              {/* Stats Row */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div className="stat-card">
                  <div className={`stat-icon ${getThemeColor(item.theme)}`}>
                    <Users size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{item.customerCount}</div>
                    <div className="stat-label">Customers Affected</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon purple">
                    <Quote size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{item.quotes?.length || 0}</div>
                    <div className="stat-label">Direct Quotes</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon cyan">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{item.examples?.length || 0}</div>
                    <div className="stat-label">Examples</div>
                  </div>
                </div>
              </div>

              {/* Roadmap Status */}
              {item.roadmap ? (
                <div style={{
                  padding: '1rem',
                  background: 'var(--accent-green-dim)',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Calendar size={20} style={{ color: 'var(--accent-green)' }} />
                  <div>
                    <div style={{ 
                      color: 'var(--accent-green)', 
                      fontWeight: 600, 
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem'
                    }}>
                      ✓ In Roadmap — {item.roadmap.timeline}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      {item.roadmap.item}
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(113, 113, 122, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(113, 113, 122, 0.2)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Clock size={20} style={{ color: 'var(--text-muted)' }} />
                  <div>
                    <div style={{ 
                      color: 'var(--text-muted)', 
                      fontWeight: 600, 
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem'
                    }}>
                      Not Currently on Roadmap
                    </div>
                    <div style={{ color: 'var(--text-dimmed)', fontSize: '0.85rem' }}>
                      Consider requesting prioritization with product team
                    </div>
                  </div>
                </div>
              )}

              {/* Customer Quotes */}
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <Quote size={14} /> Customer Quotes
                </h3>
                <div className="quote-grid">
                  {item.quotes?.map((quote, idx) => (
                    <div key={idx} className="quote-card">
                      <p className="quote-text">"{quote.text}"</p>
                      <span className="quote-source">— {quote.source}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Affected Customers */}
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <Users size={14} /> Affected Customers ({item.customers?.length})
                </h3>
                <div className="customer-chip-grid">
                  {item.customers?.map((customer, idx) => (
                    <button
                      key={idx}
                      className="customer-chip-v2"
                      onClick={() => onSelectCustomer && onSelectCustomer(customer)}
                    >
                      {customer}
                      <ExternalLink size={12} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <AlertTriangle size={14} /> Examples & Symptoms
                </h3>
                <ul style={{ 
                  margin: 0, 
                  paddingLeft: '1.25rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8
                }}>
                  {item.examples?.map((example, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{example}</li>
                  ))}
                </ul>
              </div>

              {/* AI Recommendations */}
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <Lightbulb size={14} /> AI Recommendations
                </h3>
                {isLoadingRecs ? (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    Generating recommendations...
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {recommendations.map((rec, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '0.75rem 1rem',
                          background: 'var(--accent-purple-dim)',
                          borderLeft: '3px solid var(--accent-purple)',
                          borderRadius: '0 8px 8px 0',
                          fontSize: '0.875rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {idx + 1}. {rec}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Customer View */
            <CustomerDetailView item={item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DeepDiveModal;

