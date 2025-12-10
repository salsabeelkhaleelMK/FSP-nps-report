import { memo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ChevronDown } from 'lucide-react';
import type { TriggerConfigRowProps } from '@/lib/types';

/**
 * Individual trigger configuration row
 */
export const TriggerConfigRow = memo(function TriggerConfigRow({
  trigger,
  surveys,
  isEnabled,
  selectedSurveyId,
  onToggle,
  onSurveyChange,
}: TriggerConfigRowProps) {
  const { t } = useLanguage();
  
  const triggerTranslationKey = `trigger_${trigger.id}`;
  const triggerLabel = t(triggerTranslationKey) || trigger.key;

  return (
    <div 
      className={`trigger-row ${isEnabled ? 'enabled' : ''}`}
      data-testid={`trigger-row-${trigger.id}`}
    >
      <div className="trigger-checkbox-cell">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => onToggle(trigger.id, e.target.checked)}
            aria-label={`Enable ${triggerLabel}`}
            data-testid={`trigger-checkbox-${trigger.id}`}
          />
          <span className="checkbox-custom" />
        </label>
      </div>
      
      <div className="trigger-name-cell">
        <span className="trigger-name">{triggerLabel}</span>
      </div>
      
      <div className="trigger-survey-cell">
        <div className="select-wrapper">
          <select
            value={selectedSurveyId || ''}
            onChange={(e) => onSurveyChange(trigger.id, e.target.value || null)}
            disabled={!isEnabled}
            className="survey-select"
            aria-label={`Select survey for ${triggerLabel}`}
            data-testid={`trigger-select-${trigger.id}`}
          >
            <option value="">{t('select_survey')}</option>
            {surveys.map((survey) => (
              <option key={survey.id} value={survey.id}>
                {t(survey.nameKey)}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="select-arrow" />
        </div>
      </div>
    </div>
  );
});

export default TriggerConfigRow;

