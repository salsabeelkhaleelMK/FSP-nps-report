import { memo } from 'react';

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
}) {
  return (
    <div className={`toggle-row ${disabled ? 'disabled' : ''}`}>
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
        />
        <span className="toggle-slider" />
      </label>
    </div>
  );
});

export default ToggleSwitch;

