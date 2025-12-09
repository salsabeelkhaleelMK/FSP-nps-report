/**
 * Data layer index - central export point for all data modules
 * This makes it easy to swap data sources in the future
 */

export { TRIGGERS, fetchTriggers } from './triggers';
export { SURVEYS, SURVEY_TYPES, fetchSurveys } from './surveys';
export { 
  TRANSLATIONS, 
  SUPPORTED_LANGUAGES, 
  getTranslation, 
  getLanguageTranslations 
} from './translations';
export {
  VOICE_TYPES,
  ESCALATION_TRIGGERS,
  DEFAULT_AGENT_CONFIG,
  fetchAgentConfig,
  saveAgentConfig,
} from './agentConfig';

