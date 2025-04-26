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
        "contactTitle": "Contact Me",
        "summary" :"Hi, I'm Kebsi Montassar, a Full Stack Developer passionate about building AI-integrated web applications and scalable cloud-based solutions. I aspire to create secure, efficient systems using the best tools for each project. I’m especially focused on delivering complete web experiences that combine strong UI/UX design with smart, thoughtful AI features."
        ,  "moreAboutMe": "More About Me",
        "copyright": "© 2024 Kebsi Montassar. All rights reserved.",
        "privacyNote": "Built with privacy and security in mind.",
        "home": "Home",
        "getToKnowMe": "Get To Know Me More",
        "hackathons": "Hackathons",
        "certificates": "Certificates",
        "skills": "Skills",
        "education": "Education Degrees"
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
        "contactTitle": "Me Contacter",
        "summary" :"Bonjour, je suis Kebsi Montassar, un développeur Full Stack passionné par la création d'applications web intégrées à l'IA et de solutions cloud évolutives. J'aspire à créer des systèmes sécurisés et efficaces en utilisant les meilleurs outils pour chaque projet. Je me concentre particulièrement sur la livraison d'expériences web complètes qui allient un design UI/UX solide à des fonctionnalités IA intelligentes et réfléchies.",
        "moreAboutMe": "En savoir plus sur moi",
        "copyright": "© 2024 Kebsi Montassar. Tous droits réservés.",
        "privacyNote": "Construit avec la confidentialité et la sécurité à l'esprit.",
        "home": "Accueil",
        "getToKnowMe": "Apprenez à Me Connaître",
        "hackathons": "Hackathons",
        "certificates": "Certificats",
        "skills": "Compétences",
        "education": "Diplômes"
      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
})

export default i18n
