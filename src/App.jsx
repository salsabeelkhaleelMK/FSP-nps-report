import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Sidebar, Header, TabNavigation, AIAgentSettings, QuestionsSettings } from './components';
import './styles/main.css';

/**
 * Main App component
 */
function AppContent() {
  // Default to AI Agent tab as per requirements
  const [activeTab, setActiveTab] = useState('ai_agent');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ai_agent':
        return <AIAgentSettings />;
      case 'questions':
        return <QuestionsSettings />;
      default:
        return (
          <div className="placeholder-content">
            <p>Content for this tab is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <Header />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="main-content">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider defaultLanguage="en">
      <AppContent />
    </LanguageProvider>
  );
}

export default App;





