import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { ui } from './ui'

const STORAGE_KEY = 'lang'
const SUPPORTED = ['en', 'es']

const getInitialLang = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(saved)) return saved
  } catch (e) {}
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch (e) {}
  }, [lang])

  const value = useMemo(() => ({
    lang,
    setLang,
    toggleLang: () => setLang((current) => (current === 'en' ? 'es' : 'en')),
    // UI string by key
    t: (key) => ui[lang][key] ?? ui.en[key] ?? key,
    // Bilingual content value: { en, es } objects or plain values
    tr: (value) => (value && typeof value === 'object' && !Array.isArray(value) && 'en' in value ? value[lang] : value)
  }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
