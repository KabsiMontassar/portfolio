import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getStoredLanguage } from '../utils/localStorage'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: getStoredLanguage(),
  resources: {
    en: {
      translations: {
        "about": "About",
        "experiences": "Experiences",
        "projects": "Projects",
        "contact": "Contact",
        "light": "Light",
        "dark": "Dark",
        "quote": "The only way to do great work is to love what you do",
        "aboutTitle": "About Me",
        "projectsTitle": "My Projects",
        "experienceTitle": "My Experience",
        "contactTitle": "Contact Me"
      }
    },
    fr: {
      translations: {
        "about": "À propos",
        "experiences": "Expériences",
        "projects": "Projets",
        "contact": "Contact",
        "light": "Clair",
        "dark": "Sombre",
        "quote": "La seule façon de faire du bon travail est d'aimer ce que vous faites",
        "aboutTitle": "À Propos de Moi",
        "projectsTitle": "Mes Projets",
        "experienceTitle": "Mon Expérience",
        "contactTitle": "Me Contacter"
      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
})

export default i18n
