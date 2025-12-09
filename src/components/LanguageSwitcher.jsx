import { useLanguage } from '../context/LanguageContext';

/**
 * Language Switcher component - allows users to switch between languages
 */
export function LanguageSwitcher({ className = '' }) {
  const { language, changeLanguage, supportedLanguages } = useLanguage();

  return (
    <div className={`language-switcher ${className}`}>
      {supportedLanguages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          title={lang.name}
          aria-label={`Switch to ${lang.name}`}
        >
          <span className="lang-flag">{lang.flag}</span>
          <span className="lang-code">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;



