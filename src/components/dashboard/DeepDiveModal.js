import React, { useEffect, useState } from 'react';
import { X, Quote, AlertTriangle, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { useAI } from '../ai/AIProvider';

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
            <div>
              <h2 className="modal-title">
                {type === 'pain' ? item.title : item.name}
              </h2>
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
            <>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div className="stat-card">
                  <div className="stat-icon cyan">
                    <Users size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{item.metrics?.length || 0}</div>
                    <div className="stat-label">Key Metrics</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon purple">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{item.date}</div>
                    <div className="stat-label">Last Updated</div>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Description</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Key Metrics</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {item.metrics?.map((metric, idx) => (
                    <span key={idx} className="customer-metric-chip">{metric}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Quick Actions</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href={item.workflowUrl}
                    className="customer-chip-v2"
                    style={{ textDecoration: 'none' }}
                  >
                    View Workflow <ExternalLink size={12} />
                  </a>
                  <a
                    href={item.uxUrl}
                    className="customer-chip-v2"
                    style={{ textDecoration: 'none' }}
                  >
                    View UX Findings <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeepDiveModal;

