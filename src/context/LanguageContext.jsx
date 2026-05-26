import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('nc-lang') || 'en');

  useEffect(() => {
    localStorage.setItem('nc-lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggle = () => setLang(l => l === 'en' ? 'ar' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, toggle, isAr: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
