import { memo } from 'react';
import type { ToggleSwitchProps } from '@/lib/types';

/**
 * Reusable toggle switch component
 */
export const ToggleSwitch = memo(function ToggleSwitch({
  id,
  checked,
  onChange,
  label,
  description,
  disabled = false,
}: ToggleSwitchProps) {
  return (
    <div 
      className={`toggle-row ${disabled ? 'disabled' : ''}`}
      data-testid={`toggle-row-${id}`}
    >
      <div className="toggle-info">
        <label htmlFor={id} className="toggle-label">{label}</label>
        {description && <span className="toggle-description">{description}</span>}
      </div>
      <label className="toggle-switch">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          data-testid={`toggle-input-${id}`}
        />
        <span className="toggle-slider" />
      </label>
    </div>
  );
});

export default ToggleSwitch;

