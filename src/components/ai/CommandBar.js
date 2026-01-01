import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Command, ArrowRight, AlertTriangle, Users, Sparkles, X } from 'lucide-react';
import { useAI } from './AIProvider';

const CommandBar = ({ painPoints, customers, onSelectPainPoint, onSelectCustomer }) => {
  const { isCommandBarOpen, setIsCommandBarOpen, handleSearch, searchResults } = useAI();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Keyboard shortcut to open command bar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandBarOpen(true);
      }
      if (e.key === 'Escape' && isCommandBarOpen) {
        setIsCommandBarOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCommandBarOpen, setIsCommandBarOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isCommandBarOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCommandBarOpen]);

  // Search on query change
  useEffect(() => {
    const debounce = setTimeout(() => {
      handleSearch(query);
    }, 150);
    return () => clearTimeout(debounce);
  }, [query, handleSearch]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  const handleClose = useCallback(() => {
    setIsCommandBarOpen(false);
    setQuery('');
  }, [setIsCommandBarOpen]);

  const getAllItems = useCallback(() => {
    if (!searchResults) {
      // Show default items when no search
      return [
        ...painPoints.slice(0, 5).map(p => ({ type: 'pain', data: p })),
        ...customers.slice(0, 5).map(c => ({ type: 'customer', data: c })),
      ];
    }
    return [
      ...searchResults.painPoints.map(p => ({ type: 'pain', data: p })),
      ...searchResults.customers.map(c => ({ type: 'customer', data: c })),
    ];
  }, [searchResults, painPoints, customers]);

  const handleKeyNavigation = (e) => {
    const items = getAllItems();
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && items[selectedIndex]) {
      e.preventDefault();
      const item = items[selectedIndex];
      if (item.type === 'pain') {
        onSelectPainPoint(item.data);
      } else {
        onSelectCustomer(item.data);
      }
      handleClose();
    }
  };

  const handleItemClick = (item) => {
    if (item.type === 'pain') {
      onSelectPainPoint(item.data);
    } else {
      onSelectCustomer(item.data);
    }
    handleClose();
  };

  if (!isCommandBarOpen) {
    return (
      <button 
        className="command-bar-trigger"
        onClick={() => setIsCommandBarOpen(true)}
        aria-label="Open command palette"
      >
        <Search size={18} className="search-icon" />
        <span className="placeholder">Search pain points, customers, or ask AI...</span>
        <kbd><Command size={12} />K</kbd>
      </button>
    );
  }

  const items = getAllItems();
  const painPointItems = items.filter(i => i.type === 'pain');
  const customerItems = items.filter(i => i.type === 'customer');

  return (
    <div className="command-palette-overlay" onClick={handleClose}>
      <div className="command-palette" onClick={e => e.stopPropagation()}>
        <div className="command-input-wrap">
          <Sparkles size={20} />
          <input
            ref={inputRef}
            type="text"
            className="command-input"
            placeholder="Search or ask AI anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyNavigation}
          />
          <button className="modal-close" onClick={handleClose}>
            <X size={16} />
          </button>
        </div>

        <div className="command-results">
          {painPointItems.length > 0 && (
            <div className="command-group">
              <div className="command-group-label">
                <AlertTriangle size={12} /> Pain Points
              </div>
              {painPointItems.map((item, idx) => {
                const globalIdx = items.indexOf(item);
                return (
                  <div
                    key={`pain-${item.data.rank}`}
                    className={`command-item ${globalIdx === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleItemClick(item)}
                    onMouseEnter={() => setSelectedIndex(globalIdx)}
                  >
                    <div className={`command-item-icon`} style={{ 
                      background: item.data.color === 'orange' ? 'var(--accent-orange-dim)' :
                                 item.data.color === 'red' ? 'var(--accent-red-dim)' :
                                 item.data.color === 'yellow' ? 'var(--accent-yellow-dim)' :
                                 item.data.color === 'green' ? 'var(--accent-green-dim)' : 'var(--obsidian-glass)',
                      color: item.data.color === 'orange' ? 'var(--accent-orange)' :
                             item.data.color === 'red' ? 'var(--accent-red)' :
                             item.data.color === 'yellow' ? 'var(--accent-yellow)' :
                             item.data.color === 'green' ? 'var(--accent-green)' : 'var(--text-secondary)'
                    }}>
                      <AlertTriangle size={16} />
                    </div>
                    <div className="command-item-content">
                      <div className="command-item-title">{item.data.title}</div>
                      <div className="command-item-subtitle">{item.data.description.slice(0, 60)}...</div>
                    </div>
                    <div className="command-item-badge">{item.data.customerCount} customers</div>
                    <ArrowRight size={14} style={{ color: 'var(--text-dimmed)' }} />
                  </div>
                );
              })}
            </div>
          )}

          {customerItems.length > 0 && (
            <div className="command-group">
              <div className="command-group-label">
                <Users size={12} /> Customers
              </div>
              {customerItems.map((item, idx) => {
                const globalIdx = items.indexOf(item);
                return (
                  <div
                    key={`customer-${item.data.id}`}
                    className={`command-item ${globalIdx === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleItemClick(item)}
                    onMouseEnter={() => setSelectedIndex(globalIdx)}
                  >
                    <div className="command-item-icon" style={{
                      background: 'var(--accent-cyan-dim)',
                      color: 'var(--accent-cyan)'
                    }}>
                      <Users size={16} />
                    </div>
                    <div className="command-item-content">
                      <div className="command-item-title">{item.data.name}</div>
                      <div className="command-item-subtitle">{item.data.tagline}</div>
                    </div>
                    <ArrowRight size={14} style={{ color: 'var(--text-dimmed)' }} />
                  </div>
                );
              })}
            </div>
          )}

          {query && items.length === 0 && (
            <div className="command-group">
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No results found for "{query}"
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandBar;

