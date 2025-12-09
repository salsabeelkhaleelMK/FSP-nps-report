import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  MessageSquare,
  List,
  CornerDownRight,
  Mail,
  FileText,
  Gift,
  ShoppingBasket,
  Target,
  Bell,
  ChevronDown,
} from 'lucide-react';

const TOP_NAV_ITEMS = [
  { key: 'tab_information', icon: MessageSquare },
  { key: 'tab_zones', icon: List },
  { key: 'tab_responses', icon: CornerDownRight },
  { key: 'tab_general_reports', icon: Mail },
  { key: 'tab_model_review_reports', icon: FileText },
  { key: 'tab_promotions', icon: Gift },
  { key: 'tab_average_basket', icon: ShoppingBasket },
  { key: 'tab_goals', icon: Target },
];

/**
 * Header component with top navigation
 */
export function Header({ className = '' }) {
  const { t } = useLanguage();

  return (
    <header className={`header ${className}`}>
      <nav className="header-nav">
        {TOP_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.key}
              href="#"
              className="header-nav-item"
              onClick={(e) => e.preventDefault()}
            >
              <Icon size={16} strokeWidth={1.5} />
              <span>{t(item.key)}</span>
            </a>
          );
        })}
      </nav>
      
      <div className="header-actions">
        <LanguageSwitcher />
        <button className="header-btn notification-btn" aria-label="Notifications">
          <Bell size={20} strokeWidth={1.5} />
        </button>
        <div className="header-profile">
          <div className="profile-avatar"></div>
          <span>{t('dashboard')}</span>
          <ChevronDown size={16} />
        </div>
        <div className="header-brand-icon">
          <span>C</span>
        </div>
      </div>
    </header>
  );
}

export default Header;





