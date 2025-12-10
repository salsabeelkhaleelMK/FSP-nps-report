import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { LanguageContextType, LanguageCode, TranslationKey } from '@/lib/types';
import { TRANSLATIONS, SUPPORTED_LANGUAGES } from '@/lib/mockData';

const LanguageContext = createContext<LanguageContextType | null>(null);

export { LanguageContext };

/**
 * Hook to access language context
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

/**
 * Hook to create language context value
 */
export function useLanguageProvider(defaultLanguage: LanguageCode = 'en') {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fidspark_language') as LanguageCode | null;
      if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
        return saved;
      }
    }
    return defaultLanguage;
  });

  const changeLanguage = useCallback((langCode: LanguageCode) => {
    if (SUPPORTED_LANGUAGES.some(l => l.code === langCode)) {
      setLanguage(langCode);
      if (typeof window !== 'undefined') {
        localStorage.setItem('fidspark_language', langCode);
      }
    }
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;
  }, [language]);

  const value = useMemo<LanguageContextType>(() => ({
    language,
    changeLanguage,
    t,
    supportedLanguages: SUPPORTED_LANGUAGES,
  }), [language, changeLanguage, t]);

  return value;
}

export default useLanguage;

