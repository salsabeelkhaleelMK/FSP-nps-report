import { useLanguage } from '@/hooks/useLanguage';
import { AlertCircle, Bot } from 'lucide-react';
import type { TabNavigationProps, TabItem } from '@/lib/types';

const TABS: TabItem[] = [
  { id: 'questions', key: 'tab_questions', icon: AlertCircle },
  { id: 'ai_agent', key: 'tab_ai_agent', icon: Bot },
];

/**
 * Secondary tab navigation component
 */
export function TabNavigation({ activeTab, onTabChange, className = '' }: TabNavigationProps) {
  const { t } = useLanguage();

  return (
    <div className={`tab-navigation ${className}`} data-testid="tab-navigation">
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
            data-testid={`tab-${tab.id}`}
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

