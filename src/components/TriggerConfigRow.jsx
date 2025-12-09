import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

/**
 * Individual trigger configuration row
 * Memoized for performance with many triggers
 */
export const TriggerConfigRow = memo(function TriggerConfigRow({
  trigger,
  surveys,
  isEnabled,
  selectedSurveyId,
  onToggle,
  onSurveyChange,
}) {
  const { t } = useLanguage();
  
  // Convert trigger key to translation key
  const triggerTranslationKey = `trigger_${trigger.id}`;
  const triggerLabel = t(triggerTranslationKey) || trigger.key;

  return (
    <div className={`trigger-row ${isEnabled ? 'enabled' : ''}`}>
      <div className="trigger-checkbox-cell">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => onToggle(trigger.id, e.target.checked)}
            aria-label={`Enable ${triggerLabel}`}
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





