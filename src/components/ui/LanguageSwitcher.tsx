import { useLanguage } from '@/hooks/useLanguage';

/**
 * Language Switcher component
 */
export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, changeLanguage, supportedLanguages } = useLanguage();

  return (
    <div className={`language-switcher ${className}`} data-testid="language-switcher">
      {supportedLanguages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          title={lang.name}
          aria-label={`Switch to ${lang.name}`}
          data-testid={`lang-btn-${lang.code}`}
        >
          <span className="lang-flag">{lang.flag}</span>
          <span className="lang-code">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;

