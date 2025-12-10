import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { CollapsibleSectionProps } from '@/lib/types';

/**
 * Reusable collapsible section component
 */
export function CollapsibleSection({ 
  title, 
  children, 
  defaultOpen = false,
  className = '' 
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div 
      className={`collapsible-section ${isOpen ? 'open' : ''} ${className}`}
      data-testid="collapsible-section"
    >
      <button 
        className="collapsible-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        data-testid="collapsible-header"
      >
        <span className="collapsible-icon">
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </span>
        <h2 className="collapsible-title">{title}</h2>
      </button>
      {isOpen && (
        <div className="collapsible-content" data-testid="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default CollapsibleSection;

