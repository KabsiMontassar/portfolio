export const getStoredLanguage = () => {
  return localStorage.getItem('language') || 'en'
}

export const setStoredLanguage = (lang) => {
  localStorage.setItem('language', lang)
}
