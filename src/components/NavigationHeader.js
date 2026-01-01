import React from 'react';
import { Home, ChevronLeft, Activity } from 'lucide-react';
import './NavigationHeader.css';

const NavigationHeader = ({ currentPage, customerName }) => {
  const handleHomeClick = () => {
    window.location = window.location.origin + window.location.pathname;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleHomeClick();
    }
  };

  return (
    <nav className="nav-header">
      <button
        className="nav-back-btn"
        onClick={handleHomeClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Back to Home"
      >
        <ChevronLeft size={20} />
        <Home size={18} />
        <span>Home</span>
      </button>
      
      <div className="nav-breadcrumb">
        <span className="breadcrumb-home">Customers</span>
        <ChevronLeft size={14} className="breadcrumb-separator" style={{ transform: 'rotate(180deg)' }} />
        <span className="breadcrumb-customer">{customerName}</span>
        <ChevronLeft size={14} className="breadcrumb-separator" style={{ transform: 'rotate(180deg)' }} />
        <span className="breadcrumb-page">{currentPage}</span>
      </div>

      <div className="nav-logo">
        <Activity size={18} />
        <span>Agentforce Observability</span>
      </div>
    </nav>
  );
};

export default NavigationHeader;


