/**
 * Mock/Seed data for the application
 * Isolated from store operations for easy replacement with API calls
 */

import type {
  Trigger,
  Survey,
  SurveyType,
  VoiceType,
  EscalationTrigger,
  AgentConfig,
  Language,
  AllTranslations,
} from './types';

// ============================================
// Triggers Data
// ============================================

export const TRIGGERS: Trigger[] = [
  { id: 'generic', key: 'Generic' },
  { id: 'accessories', key: 'Accessories' },
  { id: 'after_sales', key: 'After sales' },
  { id: 'aftersale_mobile', key: 'Aftersale mobile' },
  { id: 'body_repair', key: 'Body Repair' },
  { id: 'online_purchase', key: 'Online purchase' },
  { id: 'purchase_new_vehicle', key: 'Purchase new vehicle' },
  { id: 'purchase_used_vehicle', key: 'Purchase used vehicle' },
  { id: 'short_term_rental', key: 'Short term rental' },
  { id: 'spare_parts', key: 'Spare parts' },
  { id: 'technical_control', key: 'Technical control' },
  { id: 'trade_in', key: 'Trade-in' },
  { id: 'long_term_rental', key: 'long term rental' },
];

// ============================================
// Surveys Data
// ============================================

export const SURVEYS: Survey[] = [
  { id: 'nps_general', nameKey: 'survey_nps_general', type: 'NPS', description: 'General customer satisfaction survey' },
  { id: 'nps_purchase', nameKey: 'survey_nps_purchase', type: 'NPS', description: 'Post-purchase satisfaction survey' },
  { id: 'nps_service', nameKey: 'survey_nps_service', type: 'NPS', description: 'Service quality satisfaction survey' },
  { id: 'csat_delivery', nameKey: 'survey_csat_delivery', type: 'CSAT', description: 'Delivery experience satisfaction' },
  { id: 'csat_support', nameKey: 'survey_csat_support', type: 'CSAT', description: 'Customer support satisfaction' },
  { id: 'ces_process', nameKey: 'survey_ces_process', type: 'CES', description: 'Process ease evaluation' },
  { id: 'fidcar_certified', nameKey: 'survey_fidcar_certified', type: 'Fidcar', description: 'Fidcar Certified quality survey' },
  { id: 'post_repair', nameKey: 'survey_post_repair', type: 'Quality', description: 'Post-repair quality check' },
  { id: 'rental_experience', nameKey: 'survey_rental_experience', type: 'Experience', description: 'Rental service experience survey' },
  { id: 'trade_in_feedback', nameKey: 'survey_trade_in_feedback', type: 'Feedback', description: 'Trade-in process feedback' },
];

export const SURVEY_TYPES: SurveyType[] = [
  { id: 'NPS', label: 'Net Promoter Score' },
  { id: 'CSAT', label: 'Customer Satisfaction' },
  { id: 'CES', label: 'Customer Effort Score' },
  { id: 'Fidcar', label: 'Fidcar Certified' },
  { id: 'Quality', label: 'Quality Check' },
  { id: 'Experience', label: 'Experience Survey' },
  { id: 'Feedback', label: 'General Feedback' },
];

// ============================================
// Voice & Agent Config Data
// ============================================

export const VOICE_TYPES: VoiceType[] = [
  { id: 'male_1', nameKey: 'voice_male_1' },
  { id: 'male_2', nameKey: 'voice_male_2' },
  { id: 'female_1', nameKey: 'voice_female_1' },
  { id: 'female_2', nameKey: 'voice_female_2' },
  { id: 'neutral_1', nameKey: 'voice_neutral_1' },
];

export const ESCALATION_TRIGGERS: EscalationTrigger[] = [
  { id: 'on_call_failure', labelKey: 'escalation_call_failure', descriptionKey: 'escalation_call_failure_desc', defaultEnabled: true },
  { id: 'on_dissatisfaction', labelKey: 'escalation_dissatisfaction', descriptionKey: 'escalation_dissatisfaction_desc', defaultEnabled: false },
  { id: 'on_verbal_complaint', labelKey: 'escalation_verbal_complaint', descriptionKey: 'escalation_verbal_complaint_desc', defaultEnabled: true },
];

export const DEFAULT_AGENT_CONFIG: AgentConfig = {
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

// ============================================
// Language Data
// ============================================

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export const TRANSLATIONS: AllTranslations = {
  en: {
    // App header
    app_name: 'FidSpark',
    dashboard: 'Dashboard',
    
    // Main navigation
    nav_customer_review: 'Customer review',
    nav_live_review: 'Live review',
    nav_unsatisfied: 'Unsatisfied',
    nav_e_reputation: 'E-reputation',
    nav_leads: 'Leads',
    nav_customers: 'Customers',
    nav_statistics: 'Statistics',
    nav_points_of_sale: 'Points of sale',
    nav_competitors: 'Competitors',
    nav_tools: 'Tools',
    nav_users: 'Users',
    nav_network: 'Network',
    
    // Tabs
    tab_questions: 'QUESTIONS',
    tab_ai_agent: 'AI AGENT',
    
    // Page titles
    page_title_surveys: 'SATISFACTION SURVEYS - QUESTIONS SETTINGS',
    page_title_ai_agent: 'AI AGENT CONFIGURATION',
    
    // AI Agent settings
    ai_agent_description: 'Configure which surveys should be triggered by the AI Agent for each service type.',
    trigger_settings: 'Trigger Settings',
    trigger: 'Trigger',
    survey: 'Survey',
    enabled: 'Enabled',
    select_survey: 'Select a survey...',
    save_settings: 'Save Settings',
    settings_saved: 'Settings saved successfully!',
    
    // Triggers
    trigger_generic: 'Generic',
    trigger_accessories: 'Accessories',
    trigger_after_sales: 'After sales',
    trigger_aftersale_mobile: 'Aftersale mobile',
    trigger_body_repair: 'Body Repair',
    trigger_online_purchase: 'Online purchase',
    trigger_purchase_new_vehicle: 'Purchase new vehicle',
    trigger_purchase_used_vehicle: 'Purchase used vehicle',
    trigger_short_term_rental: 'Short term rental',
    trigger_spare_parts: 'Spare parts',
    trigger_technical_control: 'Technical control',
    trigger_trade_in: 'Trade-in',
    trigger_long_term_rental: 'Long term rental',
    
    // Surveys
    survey_nps_general: 'NPS - General Satisfaction',
    survey_nps_purchase: 'NPS - Purchase Experience',
    survey_nps_service: 'NPS - Service Quality',
    survey_csat_delivery: 'CSAT - Delivery Experience',
    survey_csat_support: 'CSAT - Customer Support',
    survey_ces_process: 'CES - Process Ease',
    survey_fidcar_certified: 'Fidcar Certified Survey',
    survey_post_repair: 'Post-Repair Quality Check',
    survey_rental_experience: 'Rental Experience Survey',
    survey_trade_in_feedback: 'Trade-in Feedback',
    
    // Agent Configuration
    agent_configuration: 'AI Agent Configuration',
    agent_config_description: 'Configure the AI agent behavior, timing, and voice settings.',
    start_after_hours: 'Start After (hours)',
    start_after_hours_hint: 'Hours to wait before first call',
    retry_interval_hours: 'Retry Interval (hours)',
    retry_interval_hours_hint: 'Hours between retries',
    max_retries: 'Max Retries',
    voice_type: 'Voice Type',
    call_window_from: 'Call Window From',
    call_window_to: 'Call Window To',
    persona_script: 'Persona Script',
    persona_script_hint: 'The script the AI agent will use',
    
    // Voice types
    voice_male_1: 'Male 1',
    voice_male_2: 'Male 2',
    voice_female_1: 'Female 1',
    voice_female_2: 'Female 2',
    voice_neutral_1: 'Neutral 1',
    
    // Escalation
    create_dispute_when: 'Create Dispute When',
    escalation_call_failure: 'On Call Failure',
    escalation_call_failure_desc: 'Escalate on failure',
    escalation_dissatisfaction: 'On Dissatisfaction',
    escalation_dissatisfaction_desc: 'Customer unhappy',
    escalation_verbal_complaint: 'On Verbal Complaint',
    escalation_verbal_complaint_desc: 'Complaint detected',
    
    // Form labels
    service: 'Service',
    see: 'See',
    add: 'ADD',
    title: 'TITLE',
    type_of_answer: 'TYPE OF ANSWER',
    survey_type: 'SURVEY TYPE',
    language: 'Language',
  },
  
  it: {
    // App header
    app_name: 'FidSpark',
    dashboard: 'Cruscotto',
    
    // Main navigation
    nav_customer_review: 'Recensione cliente',
    nav_live_review: 'Recensione dal vivo',
    nav_unsatisfied: 'Insoddisfatti',
    nav_e_reputation: 'E-reputazione',
    nav_leads: 'Contatti',
    nav_customers: 'Clienti',
    nav_statistics: 'Statistiche',
    nav_points_of_sale: 'Punti vendita',
    nav_competitors: 'Concorrenti',
    nav_tools: 'Strumenti',
    nav_users: 'Utenti',
    nav_network: 'Rete',
    
    // Tabs
    tab_questions: 'DOMANDE',
    tab_ai_agent: 'AGENTE AI',
    
    // Page titles
    page_title_surveys: 'SONDAGGI DI SODDISFAZIONE - IMPOSTAZIONI DOMANDE',
    page_title_ai_agent: 'CONFIGURAZIONE AGENTE AI',
    
    // AI Agent settings
    ai_agent_description: 'Configura quali sondaggi devono essere attivati dall\'Agente AI per ogni tipo di servizio.',
    trigger_settings: 'Impostazioni Trigger',
    trigger: 'Trigger',
    survey: 'Sondaggio',
    enabled: 'Abilitato',
    select_survey: 'Seleziona un sondaggio...',
    save_settings: 'Salva Impostazioni',
    settings_saved: 'Impostazioni salvate con successo!',
    
    // Triggers
    trigger_generic: 'Generico',
    trigger_accessories: 'Accessori',
    trigger_after_sales: 'Post vendita',
    trigger_aftersale_mobile: 'Post vendita mobile',
    trigger_body_repair: 'Riparazione carrozzeria',
    trigger_online_purchase: 'Acquisto online',
    trigger_purchase_new_vehicle: 'Acquisto veicolo nuovo',
    trigger_purchase_used_vehicle: 'Acquisto veicolo usato',
    trigger_short_term_rental: 'Noleggio breve termine',
    trigger_spare_parts: 'Ricambi',
    trigger_technical_control: 'Controllo tecnico',
    trigger_trade_in: 'Permuta',
    trigger_long_term_rental: 'Noleggio lungo termine',
    
    // Surveys
    survey_nps_general: 'NPS - Soddisfazione Generale',
    survey_nps_purchase: 'NPS - Esperienza di Acquisto',
    survey_nps_service: 'NPS - Qualità del Servizio',
    survey_csat_delivery: 'CSAT - Esperienza di Consegna',
    survey_csat_support: 'CSAT - Supporto Clienti',
    survey_ces_process: 'CES - Facilità del Processo',
    survey_fidcar_certified: 'Sondaggio Fidcar Certificato',
    survey_post_repair: 'Controllo Qualità Post-Riparazione',
    survey_rental_experience: 'Sondaggio Esperienza Noleggio',
    survey_trade_in_feedback: 'Feedback Permuta',
    
    // Agent Configuration
    agent_configuration: 'Configurazione Agente AI',
    agent_config_description: 'Configura il comportamento, i tempi e le impostazioni vocali dell\'agente AI.',
    start_after_hours: 'Inizia Dopo (ore)',
    start_after_hours_hint: 'Ore di attesa prima della prima chiamata',
    retry_interval_hours: 'Intervallo Tentativi (ore)',
    retry_interval_hours_hint: 'Ore tra i tentativi',
    max_retries: 'Tentativi Massimi',
    voice_type: 'Tipo di Voce',
    call_window_from: 'Finestra Chiamate Da',
    call_window_to: 'Finestra Chiamate A',
    persona_script: 'Script Persona',
    persona_script_hint: 'Lo script che l\'agente AI utilizzerà',
    
    // Voice types
    voice_male_1: 'Maschile 1',
    voice_male_2: 'Maschile 2',
    voice_female_1: 'Femminile 1',
    voice_female_2: 'Femminile 2',
    voice_neutral_1: 'Neutro 1',
    
    // Escalation
    create_dispute_when: 'Crea Contestazione Quando',
    escalation_call_failure: 'Su Chiamata Fallita',
    escalation_call_failure_desc: 'Escalation su fallimento',
    escalation_dissatisfaction: 'Su Insoddisfazione',
    escalation_dissatisfaction_desc: 'Cliente insoddisfatto',
    escalation_verbal_complaint: 'Su Reclamo Verbale',
    escalation_verbal_complaint_desc: 'Reclamo rilevato',
    
    // Form labels
    service: 'Servizio',
    see: 'Vedi',
    add: 'AGGIUNGI',
    title: 'TITOLO',
    type_of_answer: 'TIPO DI RISPOSTA',
    survey_type: 'TIPO SONDAGGIO',
    language: 'Lingua',
  },
};

