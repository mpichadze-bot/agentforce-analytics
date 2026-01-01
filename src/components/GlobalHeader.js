import React from 'react';
import { Search, Plus, HelpCircle, Settings, Bell, Star, Home } from 'lucide-react';
import './GlobalHeader.css';

const GlobalHeader = () => {
  return (
    <header className="global-header">
      <div className="header-logo">
        <SalesforceLogo />
      </div>

      <div className="header-search">
        <div className="search-input">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="header-icons">
        <button className="header-icon-btn split-btn">
          <Star size={14} />
          <span className="divider" />
          <ChevronDown size={10} />
        </button>
        <button className="header-icon-btn split-btn">
          <Plus size={14} />
          <span className="divider" />
          <ChevronDown size={10} />
        </button>
        <button className="header-icon-btn">
          <Home size={20} />
        </button>
        <button className="header-icon-btn">
          <HelpCircle size={20} />
        </button>
        <button className="header-icon-btn">
          <Settings size={20} />
        </button>
        <button className="header-icon-btn">
          <Bell size={20} />
        </button>
        <div className="header-avatar">
          <img src="https://i.pravatar.cc/32?img=8" alt="User avatar" />
        </div>
      </div>
    </header>
  );
};

const SalesforceLogo = () => (
  <svg width="61" height="42" viewBox="0 0 61 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.5 8.5C27.7 6 31 4.3 34.7 4.3C39.7 4.3 44 7.3 46 11.5C48 10.3 50.3 9.6 52.8 9.6C60.5 9.6 66.7 15.9 66.7 23.7C66.7 31.5 60.5 37.8 52.8 37.8C51.7 37.8 50.6 37.7 49.6 37.4C47.9 40.2 44.8 42 41.3 42C39.5 42 37.8 41.5 36.4 40.6C34.6 43.2 31.6 45 28.2 45C25.2 45 22.5 43.7 20.7 41.5C19.6 41.8 18.4 42 17.2 42C10.2 42 4.5 36.3 4.5 29.3C4.5 24.7 6.9 20.6 10.6 18.3C10.3 17.2 10.1 16 10.1 14.8C10.1 8.7 15 3.7 21.1 3.7C23 3.7 24.8 4.1 26.4 4.9" fill="#00A1E0"/>
  </svg>
);

const ChevronDown = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrailheadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L2 7L10 12L18 7L10 2Z" fill="currentColor"/>
    <path d="M2 13L10 18L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default GlobalHeader;

