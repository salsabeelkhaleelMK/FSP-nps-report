/**
 * AI Agent configuration data
 * Voice types and escalation trigger options
 */

export const VOICE_TYPES = [
  { id: 'male_1', nameKey: 'voice_male_1' },
  { id: 'male_2', nameKey: 'voice_male_2' },
  { id: 'female_1', nameKey: 'voice_female_1' },
  { id: 'female_2', nameKey: 'voice_female_2' },
  { id: 'neutral_1', nameKey: 'voice_neutral_1' },
];

export const ESCALATION_TRIGGERS = [
  { 
    id: 'on_call_failure', 
    labelKey: 'escalation_call_failure',
    descriptionKey: 'escalation_call_failure_desc',
    defaultEnabled: true,
  },
  { 
    id: 'on_dissatisfaction', 
    labelKey: 'escalation_dissatisfaction',
    descriptionKey: 'escalation_dissatisfaction_desc',
    defaultEnabled: false,
  },
  { 
    id: 'on_verbal_complaint', 
    labelKey: 'escalation_verbal_complaint',
    descriptionKey: 'escalation_verbal_complaint_desc',
    defaultEnabled: true,
  },
];

export const DEFAULT_AGENT_CONFIG = {
  startAfterHours: 2,
  retryIntervalHours: 3,
  maxRetries: 5,
  voiceType: 'male_1',
  callWindowFrom: '09:00',
  callWindowTo: '20:00',
  personaScript: 'Hello, this is a follow-up call from our team regarding your recent inquiry. We wanted to reconnect and answer any questions you might have.',
  escalationTriggers: {
    on_call_failure: true,
    on_dissatisfaction: false,
    on_verbal_complaint: true,
  },
};

/**
 * Fetch agent configuration - can be replaced with API call
 */
export async function fetchAgentConfig() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...DEFAULT_AGENT_CONFIG }), 100);
  });
}

/**
 * Save agent configuration - can be replaced with API call
 */
export async function saveAgentConfig(config) {
  return new Promise((resolve) => {
    console.log('Saving agent config:', config);
    setTimeout(() => resolve({ success: true }), 200);
  });
}

export default {
  VOICE_TYPES,
  ESCALATION_TRIGGERS,
  DEFAULT_AGENT_CONFIG,
};




