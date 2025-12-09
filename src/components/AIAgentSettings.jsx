import { useState, useCallback, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TriggerConfigRow } from './TriggerConfigRow';
import { CollapsibleSection } from './CollapsibleSection';
import { ToggleSwitch } from './ToggleSwitch';
import { TRIGGERS } from '../data/triggers';
import { SURVEYS } from '../data/surveys';
import { VOICE_TYPES, ESCALATION_TRIGGERS, DEFAULT_AGENT_CONFIG } from '../data/agentConfig';
import { Bot, Save, Check, Clock, ChevronDown } from 'lucide-react';

/**
 * AI Agent Settings page component
 * Manages trigger-survey configuration and agent settings
 */
export function AIAgentSettings({ className = '' }) {
  const { t } = useLanguage();
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  
  // Trigger configuration state
  const [triggerConfig, setTriggerConfig] = useState(() => {
    const initial = {};
    TRIGGERS.forEach((trigger) => {
      initial[trigger.id] = {
        enabled: false,
        surveyId: null,
      };
    });
    // Set some defaults for demonstration
    initial['online_purchase'] = { enabled: true, surveyId: 'nps_purchase' };
    initial['after_sales'] = { enabled: true, surveyId: 'nps_service' };
    initial['body_repair'] = { enabled: true, surveyId: 'post_repair' };
    return initial;
  });

  // Agent configuration state
  const [agentConfig, setAgentConfig] = useState(DEFAULT_AGENT_CONFIG);

  const handleToggle = useCallback((triggerId, enabled) => {
    setTriggerConfig((prev) => ({
      ...prev,
      [triggerId]: {
        ...prev[triggerId],
        enabled,
        surveyId: enabled ? prev[triggerId]?.surveyId : null,
      },
    }));
  }, []);

  const handleSurveyChange = useCallback((triggerId, surveyId) => {
    setTriggerConfig((prev) => ({
      ...prev,
      [triggerId]: {
        ...prev[triggerId],
        surveyId,
      },
    }));
  }, []);

  const handleAgentConfigChange = useCallback((field, value) => {
    setAgentConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleEscalationToggle = useCallback((triggerId, enabled) => {
    setAgentConfig((prev) => ({
      ...prev,
      escalationTriggers: {
        ...prev.escalationTriggers,
        [triggerId]: enabled,
      },
    }));
  }, []);

  const handleSave = useCallback(() => {
    console.log('Saving configuration:', { triggerConfig, agentConfig });
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
  }, [triggerConfig, agentConfig]);

  const enabledCount = useMemo(() => {
    return Object.values(triggerConfig).filter((c) => c.enabled).length;
  }, [triggerConfig]);

  return (
    <div className={`ai-agent-settings ${className}`}>
      <div className="settings-header">
        <div className="settings-title-section">
          <div className="settings-icon">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="settings-title">{t('page_title_ai_agent')}</h1>
            <p className="settings-description">{t('ai_agent_description')}</p>
          </div>
        </div>
        
        <div className="settings-actions">
          <span className="enabled-count">
            {enabledCount} / {TRIGGERS.length} {t('enabled').toLowerCase()}
          </span>
          <button 
            className={`save-btn ${showSaveSuccess ? 'success' : ''}`}
            onClick={handleSave}
          >
            {showSaveSuccess ? (
              <>
                <Check size={18} />
                <span>{t('settings_saved')}</span>
              </>
            ) : (
              <>
                <Save size={18} />
                <span>{t('save_settings')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Trigger Settings Section - Collapsible (Now on top) */}
      <div className="settings-card">
        <CollapsibleSection title={t('trigger_settings')} defaultOpen={false}>
          <div className="trigger-table">
            <div className="trigger-table-header">
              <div className="trigger-checkbox-cell">
                <span>{t('enabled')}</span>
              </div>
              <div className="trigger-name-cell">
                <span>{t('trigger')}</span>
              </div>
              <div className="trigger-survey-cell">
                <span>{t('survey')}</span>
              </div>
            </div>
            
            <div className="trigger-table-body">
              {TRIGGERS.map((trigger) => (
                <TriggerConfigRow
                  key={trigger.id}
                  trigger={trigger}
                  surveys={SURVEYS}
                  isEnabled={triggerConfig[trigger.id]?.enabled || false}
                  selectedSurveyId={triggerConfig[trigger.id]?.surveyId}
                  onToggle={handleToggle}
                  onSurveyChange={handleSurveyChange}
                />
              ))}
            </div>
          </div>
        </CollapsibleSection>
      </div>

      {/* Agent Configuration Section */}
      <div className="settings-card agent-config-card">
        <div className="settings-card-header">
          <h2>{t('agent_configuration')}</h2>
        </div>
        <div className="agent-config-content">
          <p className="section-description">{t('agent_config_description')}</p>
          
          <div className="config-grid">
            <div className="config-field">
              <label htmlFor="startAfterHours">{t('start_after_hours')}</label>
              <input
                type="number"
                id="startAfterHours"
                value={agentConfig.startAfterHours}
                onChange={(e) => handleAgentConfigChange('startAfterHours', parseInt(e.target.value) || 0)}
                min="0"
                className="config-input"
              />
              <span className="field-hint">{t('start_after_hours_hint')}</span>
            </div>
            
            <div className="config-field">
              <label htmlFor="retryIntervalHours">{t('retry_interval_hours')}</label>
              <input
                type="number"
                id="retryIntervalHours"
                value={agentConfig.retryIntervalHours}
                onChange={(e) => handleAgentConfigChange('retryIntervalHours', parseInt(e.target.value) || 0)}
                min="0"
                className="config-input"
              />
              <span className="field-hint">{t('retry_interval_hours_hint')}</span>
            </div>
            
            <div className="config-field">
              <label htmlFor="maxRetries">{t('max_retries')}</label>
              <input
                type="number"
                id="maxRetries"
                value={agentConfig.maxRetries}
                onChange={(e) => handleAgentConfigChange('maxRetries', parseInt(e.target.value) || 0)}
                min="0"
                className="config-input"
              />
            </div>
            
            <div className="config-field">
              <label htmlFor="voiceType">{t('voice_type')}</label>
              <div className="select-wrapper">
                <select
                  id="voiceType"
                  value={agentConfig.voiceType}
                  onChange={(e) => handleAgentConfigChange('voiceType', e.target.value)}
                  className="config-select"
                >
                  {VOICE_TYPES.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                      {t(voice.nameKey)}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>
            </div>
            
            <div className="config-field">
              <label htmlFor="callWindowFrom">{t('call_window_from')}</label>
              <div className="time-input-wrapper">
                <input
                  type="time"
                  id="callWindowFrom"
                  value={agentConfig.callWindowFrom}
                  onChange={(e) => handleAgentConfigChange('callWindowFrom', e.target.value)}
                  className="config-input time-input"
                />
                <Clock size={16} className="time-icon" />
              </div>
            </div>
            
            <div className="config-field">
              <label htmlFor="callWindowTo">{t('call_window_to')}</label>
              <div className="time-input-wrapper">
                <input
                  type="time"
                  id="callWindowTo"
                  value={agentConfig.callWindowTo}
                  onChange={(e) => handleAgentConfigChange('callWindowTo', e.target.value)}
                  className="config-input time-input"
                />
                <Clock size={16} className="time-icon" />
              </div>
            </div>
          </div>
          
          <div className="config-field full-width">
            <label htmlFor="personaScript">{t('persona_script')}</label>
            <textarea
              id="personaScript"
              value={agentConfig.personaScript}
              onChange={(e) => handleAgentConfigChange('personaScript', e.target.value)}
              className="config-textarea"
              rows={4}
            />
            <span className="field-hint">{t('persona_script_hint')}</span>
          </div>
          
          <div className="escalation-section">
            <h3>{t('create_dispute_when')}</h3>
            <div className="escalation-triggers">
              {ESCALATION_TRIGGERS.map((trigger) => (
                <ToggleSwitch
                  key={trigger.id}
                  id={trigger.id}
                  checked={agentConfig.escalationTriggers[trigger.id] || false}
                  onChange={(checked) => handleEscalationToggle(trigger.id, checked)}
                  label={t(trigger.labelKey)}
                  description={t(trigger.descriptionKey)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAgentSettings;
