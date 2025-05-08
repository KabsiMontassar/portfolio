import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getStoredLanguage } from '../utils/localStorage'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: getStoredLanguage(),
  resources: {
    en: {
      translations: {



        "light": "Light",
        "dark": "Dark",

      }
    },
    fr: {
      translations: {



        "light": "Clair",
        "dark": "Sombre",


      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
})

export default i18n
