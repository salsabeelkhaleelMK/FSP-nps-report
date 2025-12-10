/**
 * Centralized type definitions for the application
 */

// ============================================
// Trigger Types
// ============================================

export interface Trigger {
  id: string;
  key: string;
}

export interface TriggerConfig {
  enabled: boolean;
  surveyId: string | null;
}

export type TriggerConfigMap = Record<string, TriggerConfig>;

// ============================================
// Survey Types
// ============================================

export interface Survey {
  id: string;
  nameKey: string;
  type: string;
  description: string;
}

export interface SurveyType {
  id: string;
  label: string;
}

// ============================================
// Voice & Agent Config Types
// ============================================

export interface VoiceType {
  id: string;
  nameKey: string;
}

export interface EscalationTrigger {
  id: string;
  labelKey: string;
  descriptionKey: string;
  defaultEnabled: boolean;
}

export interface AgentConfig {
  startAfterHours: number;
  retryIntervalHours: number;
  maxRetries: number;
  voiceType: string;
  callWindowFrom: string;
  callWindowTo: string;
  personaScript: string;
  escalationTriggers: Record<string, boolean>;
}

// ============================================
// Language Types
// ============================================

export type LanguageCode = 'en' | 'it';

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}

export type TranslationKey = string;
export type Translations = Record<TranslationKey, string>;
export type AllTranslations = Record<LanguageCode, Translations>;

// ============================================
// Context Types
// ============================================

export interface LanguageContextType {
  language: LanguageCode;
  changeLanguage: (langCode: LanguageCode) => void;
  t: (key: TranslationKey) => string;
  supportedLanguages: Language[];
}

// ============================================
// Component Props Types
// ============================================

export interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export interface ToggleSwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface TriggerConfigRowProps {
  trigger: Trigger;
  surveys: Survey[];
  isEnabled: boolean;
  selectedSurveyId: string | null;
  onToggle: (triggerId: string, enabled: boolean) => void;
  onSurveyChange: (triggerId: string, surveyId: string | null) => void;
}

export interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

// ============================================
// Navigation Types
// ============================================

export interface NavItem {
  key: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  badge?: number;
  badgeColor?: 'orange' | 'teal';
  active?: boolean;
  translationKey?: string;
}

export interface TabItem {
  id: string;
  key: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  hasAlert?: boolean;
}

