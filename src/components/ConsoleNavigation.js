import React from 'react';
import { Grid3X3 } from 'lucide-react';
import './ConsoleNavigation.css';

const ConsoleNavigation = ({ activeTab }) => {
  return (
    <nav className="console-navigation">
      <div className="nav-app-name">
        <button className="waffle-btn">
          <Grid3X3 size={20} />
        </button>
        <span className="app-title">Agentforce Studio</span>
      </div>
      
      <div className="nav-divider" />
      
      <div className="nav-tabs">
        <div className={`nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}>
          <span className="tab-label">Analytics</span>
          <div className="tab-indicator" />
        </div>
      </div>
    </nav>
  );
};

export default ConsoleNavigation;

