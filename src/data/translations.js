/**
 * Translation data for internationalization
 * Supports English (en) and Italian (it)
 */

export const TRANSLATIONS = {
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
    
    // Top navigation tabs
    tab_information: 'INFORMATION',
    tab_zones: 'ZONES',
    tab_responses: 'RESPONSES',
    tab_general_reports: 'GENERAL REPORTS',
    tab_model_review_reports: 'MODEL REVIEW REPORTS',
    tab_promotions: 'PROMOTIONS',
    tab_average_basket: 'AVERAGE BASKET',
    tab_goals: 'GOALS',
    
    // Secondary tabs
    tab_quality_surveys: 'QUALITY SURVEYS',
    tab_questions: 'QUESTIONS',
    tab_ai_agent: 'AI AGENT',
    tab_pos_communications: 'POS COMMUNICATIONS',
    tab_pos_options: 'POS OPTIONS',
    tab_pos_tags: 'POS TAGS',
    tab_pos_experts: 'POS EXPERTS',
    tab_pos_blacklist: 'POS BLACKLIST',
    
    // Page titles
    page_title_surveys: 'SATISFACTION SURVEYS - QUESTIONS SETTINGS',
    page_title_ai_agent: 'AI AGENT CONFIGURATION',
    
    // AI Agent settings
    ai_agent_description: 'Configure which surveys should be triggered by the AI Agent for each service type. Enable a trigger and select the appropriate survey to be sent automatically.',
    trigger_settings: 'Trigger Settings',
    trigger: 'Trigger',
    survey: 'Survey',
    enabled: 'Enabled',
    select_survey: 'Select a survey...',
    no_survey: 'No survey assigned',
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
    
    // Form labels
    service: 'Service',
    see: 'See',
    add: 'ADD',
    title: 'TITLE',
    type_of_answer: 'TYPE OF ANSWER',
    survey_type: 'SURVEY TYPE',
    
    // Language
    language: 'Language',
    english: 'English',
    italian: 'Italian',
    
    // AI Agent Configuration Section
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
    
    // Create Dispute When
    create_dispute_when: 'Create Dispute When',
    escalation_call_failure: 'On Call Failure',
    escalation_call_failure_desc: 'Escalate on failure',
    escalation_dissatisfaction: 'On Dissatisfaction',
    escalation_dissatisfaction_desc: 'Customer unhappy',
    escalation_verbal_complaint: 'On Verbal Complaint',
    escalation_verbal_complaint_desc: 'Complaint detected',
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
    
    // Top navigation tabs
    tab_information: 'INFORMAZIONI',
    tab_zones: 'ZONE',
    tab_responses: 'RISPOSTE',
    tab_general_reports: 'RAPPORTI GENERALI',
    tab_model_review_reports: 'RAPPORTI MODELLO RECENSIONE',
    tab_promotions: 'PROMOZIONI',
    tab_average_basket: 'CARRELLO MEDIO',
    tab_goals: 'OBIETTIVI',
    
    // Secondary tabs
    tab_quality_surveys: 'SONDAGGI QUALITÀ',
    tab_questions: 'DOMANDE',
    tab_ai_agent: 'AGENTE AI',
    tab_pos_communications: 'COMUNICAZIONI POS',
    tab_pos_options: 'OPZIONI POS',
    tab_pos_tags: 'TAG POS',
    tab_pos_experts: 'ESPERTI POS',
    tab_pos_blacklist: 'LISTA NERA POS',
    
    // Page titles
    page_title_surveys: 'SONDAGGI DI SODDISFAZIONE - IMPOSTAZIONI DOMANDE',
    page_title_ai_agent: 'CONFIGURAZIONE AGENTE AI',
    
    // AI Agent settings
    ai_agent_description: 'Configura quali sondaggi devono essere attivati dall\'Agente AI per ogni tipo di servizio. Abilita un trigger e seleziona il sondaggio appropriato da inviare automaticamente.',
    trigger_settings: 'Impostazioni Trigger',
    trigger: 'Trigger',
    survey: 'Sondaggio',
    enabled: 'Abilitato',
    select_survey: 'Seleziona un sondaggio...',
    no_survey: 'Nessun sondaggio assegnato',
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
    
    // Form labels
    service: 'Servizio',
    see: 'Vedi',
    add: 'AGGIUNGI',
    title: 'TITOLO',
    type_of_answer: 'TIPO DI RISPOSTA',
    survey_type: 'TIPO SONDAGGIO',
    
    // Language
    language: 'Lingua',
    english: 'Inglese',
    italian: 'Italiano',
    
    // AI Agent Configuration Section
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
    
    // Create Dispute When
    create_dispute_when: 'Crea Contestazione Quando',
    escalation_call_failure: 'Su Chiamata Fallita',
    escalation_call_failure_desc: 'Escalation su fallimento',
    escalation_dissatisfaction: 'Su Insoddisfazione',
    escalation_dissatisfaction_desc: 'Cliente insoddisfatto',
    escalation_verbal_complaint: 'Su Reclamo Verbale',
    escalation_verbal_complaint_desc: 'Reclamo rilevato',
  },
};

/**
 * Get translation by key
 * @param {string} lang - Language code (en/it)
 * @param {string} key - Translation key
 * @returns {string} Translated string
 */
export function getTranslation(lang, key) {
  return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en[key] || key;
}

/**
 * Get all translations for a language
 * @param {string} lang - Language code
 * @returns {Object} All translations for the language
 */
export function getLanguageTranslations(lang) {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export default TRANSLATIONS;

