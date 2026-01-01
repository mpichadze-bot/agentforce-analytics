import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  CreditCard, 
  Bot, 
  FileText, 
  Database,
  List,
  ClipboardCheck,
  ExternalLink,
  ChevronLeft,
  ChevronDown
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const observeItems = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3, active: true, badge: 'Beta' },
    { id: 'optimization', label: 'Optimization', icon: TrendingUp, hasChevron: true, badge: 'Beta' },
    { id: 'consumption', label: 'Consumption Cards', icon: CreditCard },
  ];

  const buildItems = [
    { id: 'agents', label: 'Agents', icon: Bot, hasExternal: true },
    { id: 'prompts', label: 'Prompt Templates', icon: FileText, hasExternal: true },
    { id: 'retrievers', label: 'Retrievers', icon: Database },
    { id: 'indexes', label: 'Search Indexes', icon: List },
    { id: 'tests', label: 'Tests', icon: ClipboardCheck, hasExternal: true },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="nav-group">
          <div className="nav-group-header">
            <span>Observe</span>
          </div>
          {observeItems.map((item) => (
            <NavItem 
              key={item.id} 
              item={item} 
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </div>

        <div className="nav-divider-line" />

        <div className="nav-group">
          <div className="nav-group-header">
            <span>Build</span>
          </div>
          {buildItems.map((item) => (
            <NavItem 
              key={item.id} 
              item={item} 
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="nav-item">
          <ChevronLeft size={16} className="nav-icon" />
          <span className="nav-label">Collapse</span>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ item, isActive, onClick }) => {
  const Icon = item.icon;
  
  return (
    <div 
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <Icon size={16} className="nav-icon" />
      <span className="nav-label">{item.label}</span>
      {item.badge && (
        <span className={`nav-badge ${isActive ? 'badge-light' : 'badge-info'}`}>
          {item.badge}
        </span>
      )}
      {item.hasChevron && <ChevronDown size={16} className="nav-chevron" />}
      {item.hasExternal && <ExternalLink size={16} className="nav-external" />}
    </div>
  );
};

export default Sidebar;

