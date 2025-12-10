/**
 * Agent Configuration Store
 * Handles CRUD operations for agent settings
 * Can be easily replaced with API calls
 */

import type { AgentConfig, TriggerConfigMap } from './types';
import { DEFAULT_AGENT_CONFIG, TRIGGERS } from './mockData';

// ============================================
// Local Storage Keys
// ============================================

const STORAGE_KEYS = {
  AGENT_CONFIG: 'fidspark_agent_config',
  TRIGGER_CONFIG: 'fidspark_trigger_config',
} as const;

// ============================================
// Agent Config Operations
// ============================================

export function getAgentConfig(): AgentConfig {
  if (typeof window === 'undefined') return DEFAULT_AGENT_CONFIG;
  
  const stored = localStorage.getItem(STORAGE_KEYS.AGENT_CONFIG);
  if (stored) {
    try {
      return JSON.parse(stored) as AgentConfig;
    } catch {
      return DEFAULT_AGENT_CONFIG;
    }
  }
  return DEFAULT_AGENT_CONFIG;
}

export function saveAgentConfig(config: AgentConfig): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.AGENT_CONFIG, JSON.stringify(config));
}

export function resetAgentConfig(): AgentConfig {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.AGENT_CONFIG);
  }
  return DEFAULT_AGENT_CONFIG;
}

// ============================================
// Trigger Config Operations
// ============================================

export function getInitialTriggerConfig(): TriggerConfigMap {
  if (typeof window === 'undefined') return createDefaultTriggerConfig();
  
  const stored = localStorage.getItem(STORAGE_KEYS.TRIGGER_CONFIG);
  if (stored) {
    try {
      return JSON.parse(stored) as TriggerConfigMap;
    } catch {
      return createDefaultTriggerConfig();
    }
  }
  return createDefaultTriggerConfig();
}

export function saveTriggerConfig(config: TriggerConfigMap): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.TRIGGER_CONFIG, JSON.stringify(config));
}

export function resetTriggerConfig(): TriggerConfigMap {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.TRIGGER_CONFIG);
  }
  return createDefaultTriggerConfig();
}

// ============================================
// Helper Functions
// ============================================

function createDefaultTriggerConfig(): TriggerConfigMap {
  const config: TriggerConfigMap = {};
  
  TRIGGERS.forEach((trigger) => {
    config[trigger.id] = {
      enabled: false,
      surveyId: null,
    };
  });
  
  // Set some defaults for demonstration
  config['online_purchase'] = { enabled: true, surveyId: 'nps_purchase' };
  config['after_sales'] = { enabled: true, surveyId: 'nps_service' };
  config['body_repair'] = { enabled: true, surveyId: 'post_repair' };
  
  return config;
}

// ============================================
// Async API Wrappers (for future API integration)
// ============================================

export async function fetchAgentConfig(): Promise<AgentConfig> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getAgentConfig();
}

export async function updateAgentConfig(config: AgentConfig): Promise<{ success: boolean }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));
  saveAgentConfig(config);
  return { success: true };
}

export async function fetchTriggerConfig(): Promise<TriggerConfigMap> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getInitialTriggerConfig();
}

export async function updateTriggerConfig(config: TriggerConfigMap): Promise<{ success: boolean }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));
  saveTriggerConfig(config);
  return { success: true };
}

