import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { getTranslation, SUPPORTED_LANGUAGES } from '../data/translations';

const LanguageContext = createContext(null);

/**
 * Language Provider - manages app-wide language state
 */
export function LanguageProvider({ children, defaultLanguage = 'en' }) {
  const [language, setLanguage] = useState(() => {
    // Try to get saved language from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fidspark_language');
      if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
        return saved;
      }
    }
    return defaultLanguage;
  });

  const changeLanguage = useCallback((langCode) => {
    if (SUPPORTED_LANGUAGES.some(l => l.code === langCode)) {
      setLanguage(langCode);
      if (typeof window !== 'undefined') {
        localStorage.setItem('fidspark_language', langCode);
      }
    }
  }, []);

  const t = useCallback((key) => {
    return getTranslation(language, key);
  }, [language]);

  const value = useMemo(() => ({
    language,
    changeLanguage,
    t,
    supportedLanguages: SUPPORTED_LANGUAGES,
  }), [language, changeLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to access language context
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;






