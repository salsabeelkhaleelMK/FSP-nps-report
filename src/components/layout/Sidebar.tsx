import { useLanguage } from '@/hooks/useLanguage';
import {
  LayoutDashboard,
  MessageSquare,
  Radio,
  Frown,
  Star,
  Users,
  UserCircle,
  BarChart3,
  MapPin,
  Target,
  Wrench,
  UsersRound,
  Network,
} from 'lucide-react';
import type { NavItem } from '@/lib/types';

const NAV_ITEMS: NavItem[] = [
  { key: 'nav_dashboard', icon: LayoutDashboard, translationKey: 'dashboard' },
  { key: 'nav_customer_review', icon: MessageSquare, badge: 0, badgeColor: 'orange' },
  { key: 'nav_live_review', icon: Radio },
  { key: 'nav_unsatisfied', icon: Frown, badge: 28, badgeColor: 'teal' },
  { key: 'nav_e_reputation', icon: Star, badge: 0, badgeColor: 'teal' },
  { key: 'nav_leads', icon: Users },
  { key: 'nav_customers', icon: UserCircle },
  { key: 'nav_statistics', icon: BarChart3 },
  { key: 'nav_points_of_sale', icon: MapPin },
  { key: 'nav_competitors', icon: Target },
  { key: 'nav_tools', icon: Wrench },
  { key: 'nav_users', icon: UsersRound },
  { key: 'nav_network', icon: Network, active: true },
];

/**
 * Sidebar navigation component
 */
export function Sidebar({ className = '' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <aside className={`sidebar ${className}`} data-testid="sidebar">
      <div className="sidebar-logo" data-testid="sidebar-logo">
        <span className="logo-text">FidSpar</span>
        <span className="logo-k">K</span>
        <span className="logo-accent">'</span>
      </div>
      
      <nav className="sidebar-nav" data-testid="sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.key}
              href="#"
              className={`nav-item ${item.active ? 'active' : ''}`}
              onClick={(e) => e.preventDefault()}
              data-testid={`nav-item-${item.key}`}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="nav-label">{t(item.key)}</span>
              {item.badge !== undefined && (
                <span className={`nav-badge badge-${item.badgeColor}`}>
                  {item.badge}
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

