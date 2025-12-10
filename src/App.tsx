import { useState, Suspense } from 'react';
import { LanguageProvider } from '@/context/LanguageProvider';
import { Sidebar, Header, TabNavigation } from '@/components/layout';
import { AIAgentPage, QuestionsPage } from '@/pages';
import '@/styles/main.css';

/**
 * Loading spinner component
 */
function LoadingSpinner() {
  return (
    <div className="loading-spinner" data-testid="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

/**
 * Main App content
 */
function AppContent() {
  const [activeTab, setActiveTab] = useState('ai_agent');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ai_agent':
        return <AIAgentPage />;
      case 'questions':
        return <QuestionsPage />;
      default:
        return (
          <div className="placeholder-content" data-testid="placeholder-content">
            <p>Content for this tab is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="app" data-testid="app">
      <Sidebar />
      <div className="main-container">
        <Header />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            {renderTabContent()}
          </Suspense>
        </main>
      </div>
    </div>
  );
}

/**
 * Root App component
 */
function App() {
  return (
    <LanguageProvider defaultLanguage="en">
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

