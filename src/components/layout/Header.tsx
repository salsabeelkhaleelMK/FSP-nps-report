import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from '@/components/ui';
import { Bell, ChevronDown } from 'lucide-react';

/**
 * Header component with top navigation
 */
export function Header({ className = '' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <header className={`header ${className}`} data-testid="header">
      <nav className="header-nav" data-testid="header-nav">
        {/* Simplified header nav */}
      </nav>
      
      <div className="header-actions" data-testid="header-actions">
        <LanguageSwitcher />
        <button 
          className="header-btn notification-btn" 
          aria-label="Notifications"
          data-testid="notification-btn"
        >
          <Bell size={20} strokeWidth={1.5} />
        </button>
        <div className="header-profile" data-testid="header-profile">
          <div className="profile-avatar"></div>
          <span>{t('dashboard')}</span>
          <ChevronDown size={16} />
        </div>
        <div className="header-brand-icon" data-testid="header-brand-icon">
          <span>C</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

