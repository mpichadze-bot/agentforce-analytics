import React, { useState } from 'react';
import GlobalHeader from './components/GlobalHeader';
import ConsoleNavigation from './components/ConsoleNavigation';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SomaSwarmVisualizer from './components/SomaSwarmVisualizer';
import IndeedWorkflowChart from './components/IndeedWorkflowChart';
import AgentDiagnostics from './components/AgentDiagnostics';
import CellebriteAnalyticsFlow from './components/CellebriteAnalyticsFlow';
import CellebriteUXFindings from './components/CellebriteUXFindings';
import NexoAnalyticsFlow from './components/NexoAnalyticsFlow';
import NexoUXFindings from './components/NexoUXFindings';
import HelpAgentWorkflow from './components/HelpAgentWorkflow';
import HelpAgentUXFindings from './components/HelpAgentUXFindings';
import LululemonWorkflow from './components/LululemonWorkflow';
import LululemonUXFindings from './components/LululemonUXFindings';
import PearsonWorkflow from './components/PearsonWorkflow';
import PearsonUXFindings from './components/PearsonUXFindings';
import FedExWorkflow from './components/FedExWorkflow';
import FedExUXFindings from './components/FedExUXFindings';
import EtoroWorkflow from './components/EtoroWorkflow';
import EtoroUXFindings from './components/EtoroUXFindings';
import HardRockWorkflow from './components/HardRockWorkflow';
import HardRockUXFindings from './components/HardRockUXFindings';
import UNCCWorkflow from './components/UNCCWorkflow';
import UNCCUXFindings from './components/UNCCUXFindings';
import AstoundWorkflow from './components/AstoundWorkflow';
import AstoundUXFindings from './components/AstoundUXFindings';
import IBMWorkflow from './components/IBMWorkflow';
import IBMUXFindings from './components/IBMUXFindings';
import NvidiaWorkflow from './components/NvidiaWorkflow';
import NvidiaUXFindings from './components/NvidiaUXFindings';
import SecretEscapesWorkflow from './components/SecretEscapesWorkflow';
import SecretEscapesUXFindings from './components/SecretEscapesUXFindings';
import OniverseWorkflow from './components/OniverseWorkflow';
import OniverseUXFindings from './components/OniverseUXFindings';
import AllegisWorkflow from './components/AllegisWorkflow';
import AllegisUXFindings from './components/AllegisUXFindings';
import FDEWorkflow from './components/FDEWorkflow';
import FDEUXFindings from './components/FDEUXFindings';
import ObservabilityWorkflowGuide from './components/ObservabilityWorkflowGuide';
import CustomerHomePage from './components/CustomerHomePage';
import DashboardV2 from './components/dashboard/DashboardV2';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('analytics');
  const [activeMetricTab, setActiveMetricTab] = useState('scorecard');
  const [dashboardVersion, setDashboardVersion] = useState('v2'); // 'classic' or 'v2'
  const [showSomaVisualizer, setShowSomaVisualizer] = useState(false);
  const [showIndeedWorkflow, setShowIndeedWorkflow] = useState(false);
  const [showAgentDiagnostics, setShowAgentDiagnostics] = useState(false);
  const [showCellebriteWorkflow, setShowCellebriteWorkflow] = useState(false);
  const [showCellebriteUX, setShowCellebriteUX] = useState(false);
  const [showNexoWorkflow, setShowNexoWorkflow] = useState(false);
  const [showNexoUX, setShowNexoUX] = useState(false);
  const [showHelpAgentWorkflow, setShowHelpAgentWorkflow] = useState(false);
  const [showHelpAgentUX, setShowHelpAgentUX] = useState(false);
  const [showLululemonWorkflow, setShowLululemonWorkflow] = useState(false);
  const [showLululemonUX, setShowLululemonUX] = useState(false);
  const [showPearsonWorkflow, setShowPearsonWorkflow] = useState(false);
  const [showPearsonUX, setShowPearsonUX] = useState(false);
  const [showFedExWorkflow, setShowFedExWorkflow] = useState(false);
  const [showFedExUX, setShowFedExUX] = useState(false);
  const [showEtoroWorkflow, setShowEtoroWorkflow] = useState(false);
  const [showEtoroUX, setShowEtoroUX] = useState(false);
  const [showHardRockWorkflow, setShowHardRockWorkflow] = useState(false);
  const [showHardRockUX, setShowHardRockUX] = useState(false);
  const [showUNCCWorkflow, setShowUNCCWorkflow] = useState(false);
  const [showUNCCUX, setShowUNCCUX] = useState(false);
  const [showAstoundWorkflow, setShowAstoundWorkflow] = useState(false);
  const [showAstoundUX, setShowAstoundUX] = useState(false);
  const [showIBMWorkflow, setShowIBMWorkflow] = useState(false);
  const [showIBMUX, setShowIBMUX] = useState(false);
  const [showNvidiaWorkflow, setShowNvidiaWorkflow] = useState(false);
  const [showNvidiaUX, setShowNvidiaUX] = useState(false);
  const [showSecretEscapesWorkflow, setShowSecretEscapesWorkflow] = useState(false);
  const [showSecretEscapesUX, setShowSecretEscapesUX] = useState(false);
  const [showOniverseWorkflow, setShowOniverseWorkflow] = useState(false);
  const [showOniverseUX, setShowOniverseUX] = useState(false);
  const [showAllegisWorkflow, setShowAllegisWorkflow] = useState(false);
  const [showAllegisUX, setShowAllegisUX] = useState(false);
  const [showFDEWorkflow, setShowFDEWorkflow] = useState(false);
  const [showFDEUX, setShowFDEUX] = useState(false);
  const [showWorkflowGuide, setShowWorkflowGuide] = useState(false);

  // Check URL for special views
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('view') === 'soma') {
      setShowSomaVisualizer(true);
    }
    if (urlParams.get('view') === 'indeed-workflow') {
      setShowIndeedWorkflow(true);
    }
    if (urlParams.get('view') === 'agent-diagnostics') {
      setShowAgentDiagnostics(true);
    }
    if (urlParams.get('view') === 'cellebrite-workflow') {
      setShowCellebriteWorkflow(true);
    }
    if (urlParams.get('view') === 'cellebrite-ux') {
      setShowCellebriteUX(true);
    }
    if (urlParams.get('view') === 'nexo-workflow') {
      setShowNexoWorkflow(true);
    }
    if (urlParams.get('view') === 'nexo-ux') {
      setShowNexoUX(true);
    }
    if (urlParams.get('view') === 'help-agent-workflow') {
      setShowHelpAgentWorkflow(true);
    }
    if (urlParams.get('view') === 'help-agent-ux') {
      setShowHelpAgentUX(true);
    }
    if (urlParams.get('view') === 'lululemon-workflow') {
      setShowLululemonWorkflow(true);
    }
    if (urlParams.get('view') === 'lululemon-ux') {
      setShowLululemonUX(true);
    }
    if (urlParams.get('view') === 'pearson-workflow') {
      setShowPearsonWorkflow(true);
    }
    if (urlParams.get('view') === 'pearson-ux') {
      setShowPearsonUX(true);
    }
    if (urlParams.get('view') === 'fedex-workflow') {
      setShowFedExWorkflow(true);
    }
    if (urlParams.get('view') === 'fedex-ux') {
      setShowFedExUX(true);
    }
    if (urlParams.get('view') === 'etoro-workflow') {
      setShowEtoroWorkflow(true);
    }
    if (urlParams.get('view') === 'etoro-ux') {
      setShowEtoroUX(true);
    }
    if (urlParams.get('view') === 'hardrock-workflow') {
      setShowHardRockWorkflow(true);
    }
    if (urlParams.get('view') === 'hardrock-ux') {
      setShowHardRockUX(true);
    }
    if (urlParams.get('view') === 'uncc-workflow') {
      setShowUNCCWorkflow(true);
    }
    if (urlParams.get('view') === 'uncc-ux') {
      setShowUNCCUX(true);
    }
    if (urlParams.get('view') === 'astound-workflow') {
      setShowAstoundWorkflow(true);
    }
    if (urlParams.get('view') === 'astound-ux') {
      setShowAstoundUX(true);
    }
    if (urlParams.get('view') === 'ibm-workflow') {
      setShowIBMWorkflow(true);
    }
    if (urlParams.get('view') === 'ibm-ux') {
      setShowIBMUX(true);
    }
    if (urlParams.get('view') === 'nvidia-workflow') {
      setShowNvidiaWorkflow(true);
    }
    if (urlParams.get('view') === 'nvidia-ux') {
      setShowNvidiaUX(true);
    }
    if (urlParams.get('view') === 'secretescapes-workflow') {
      setShowSecretEscapesWorkflow(true);
    }
    if (urlParams.get('view') === 'secretescapes-ux') {
      setShowSecretEscapesUX(true);
    }
    if (urlParams.get('view') === 'oniverse-workflow') {
      setShowOniverseWorkflow(true);
    }
    if (urlParams.get('view') === 'oniverse-ux') {
      setShowOniverseUX(true);
    }
    if (urlParams.get('view') === 'allegis-workflow') {
      setShowAllegisWorkflow(true);
    }
    if (urlParams.get('view') === 'allegis-ux') {
      setShowAllegisUX(true);
    }
    if (urlParams.get('view') === 'fde-workflow') {
      setShowFDEWorkflow(true);
    }
    if (urlParams.get('view') === 'fde-ux') {
      setShowFDEUX(true);
    }
    if (urlParams.get('view') === 'workflow-guide') {
      setShowWorkflowGuide(true);
    }
  }, []);

  if (showSomaVisualizer) {
    return <SomaSwarmVisualizer />;
  }

  if (showIndeedWorkflow) {
    return <IndeedWorkflowChart />;
  }

  if (showAgentDiagnostics) {
    return <AgentDiagnostics />;
  }

  if (showCellebriteWorkflow) {
    return <CellebriteAnalyticsFlow />;
  }

  if (showCellebriteUX) {
    return <CellebriteUXFindings />;
  }

  if (showNexoWorkflow) {
    return <NexoAnalyticsFlow />;
  }

  if (showNexoUX) {
    return <NexoUXFindings />;
  }

  if (showHelpAgentWorkflow) {
    return <HelpAgentWorkflow />;
  }

  if (showHelpAgentUX) {
    return <HelpAgentUXFindings />;
  }

  if (showLululemonWorkflow) {
    return <LululemonWorkflow />;
  }

  if (showLululemonUX) {
    return <LululemonUXFindings />;
  }

  if (showPearsonWorkflow) {
    return <PearsonWorkflow />;
  }

  if (showPearsonUX) {
    return <PearsonUXFindings />;
  }

  if (showFedExWorkflow) {
    return <FedExWorkflow />;
  }

  if (showFedExUX) {
    return <FedExUXFindings />;
  }

  if (showEtoroWorkflow) {
    return <EtoroWorkflow />;
  }

  if (showEtoroUX) {
    return <EtoroUXFindings />;
  }

  if (showHardRockWorkflow) {
    return <HardRockWorkflow />;
  }

  if (showHardRockUX) {
    return <HardRockUXFindings />;
  }

  if (showUNCCWorkflow) {
    return <UNCCWorkflow />;
  }

  if (showUNCCUX) {
    return <UNCCUXFindings />;
  }

  if (showAstoundWorkflow) {
    return <AstoundWorkflow />;
  }

  if (showAstoundUX) {
    return <AstoundUXFindings />;
  }

  if (showIBMWorkflow) {
    return <IBMWorkflow />;
  }

  if (showIBMUX) {
    return <IBMUXFindings />;
  }

  if (showNvidiaWorkflow) {
    return <NvidiaWorkflow />;
  }

  if (showNvidiaUX) {
    return <NvidiaUXFindings />;
  }

  if (showSecretEscapesWorkflow) {
    return <SecretEscapesWorkflow />;
  }

  if (showSecretEscapesUX) {
    return <SecretEscapesUXFindings />;
  }

  if (showOniverseWorkflow) {
    return <OniverseWorkflow />;
  }

  if (showOniverseUX) {
    return <OniverseUXFindings />;
  }

  if (showAllegisWorkflow) {
    return <AllegisWorkflow />;
  }

  if (showAllegisUX) {
    return <AllegisUXFindings />;
  }

  if (showFDEWorkflow) {
    return <FDEWorkflow />;
  }

  if (showFDEUX) {
    return <FDEUXFindings />;
  }

  if (showWorkflowGuide) {
    return <ObservabilityWorkflowGuide />;
  }

  // View Switcher Component
  const ViewSwitcher = () => (
    <div className="view-switcher">
      <button
        className={`view-switch-btn ${dashboardVersion === 'v2' ? 'active' : ''}`}
        onClick={() => setDashboardVersion('v2')}
      >
        ✨ New UI
      </button>
      <button
        className={`view-switch-btn ${dashboardVersion === 'classic' ? 'active' : ''}`}
        onClick={() => setDashboardVersion('classic')}
      >
        Classic
      </button>
    </div>
  );

  // Default: Show Dashboard based on version
  if (dashboardVersion === 'v2') {
    return (
      <>
        <ViewSwitcher />
        <DashboardV2 />
      </>
    );
  }

  return (
    <>
      <ViewSwitcher />
      <CustomerHomePage />
    </>
  );
}

export default App;
