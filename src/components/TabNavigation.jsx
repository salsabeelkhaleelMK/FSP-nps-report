import { useLanguage } from '../context/LanguageContext';
import { AlertCircle, Bot } from 'lucide-react';

const TABS = [
  { id: 'questions', key: 'tab_questions', icon: AlertCircle },
  { id: 'ai_agent', key: 'tab_ai_agent', icon: Bot },
];

/**
 * Secondary tab navigation component
 */
export function TabNavigation({ activeTab, onTabChange, className = '' }) {
  const { t } = useLanguage();

  return (
    <div className={`tab-navigation ${className}`}>
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            className={`tab-item ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-selected={isActive}
            role="tab"
          >
            {tab.hasAlert && <span className="tab-alert-dot" />}
            <Icon size={16} strokeWidth={1.5} />
            <span>{t(tab.key)}</span>
          </button>
        );
      })}
    </div>
  );
}

export default TabNavigation;

