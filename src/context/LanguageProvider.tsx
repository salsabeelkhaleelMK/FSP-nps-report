import type { ReactNode } from 'react';
import type { LanguageCode } from '@/lib/types';
import { LanguageContext, useLanguageProvider } from '@/hooks/useLanguage';

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: LanguageCode;
}

/**
 * Language Provider component
 */
export function LanguageProvider({ children, defaultLanguage = 'en' }: LanguageProviderProps) {
  const value = useLanguageProvider(defaultLanguage);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;

