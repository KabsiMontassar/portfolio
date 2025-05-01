import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getStoredLanguage } from '../utils/localStorage'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: getStoredLanguage(),
  resources: {
    en: {
      translations: {
        // Navbar & General Navigation
        "about": "About",
        "experiences": "Experiences",
        "projects": "Projects",
        "contact": "Contact",
        "home": "Home",
        
        // Theme Settings
        "light": "Light",
        "dark": "Dark",
        
        // Home Page
        "quote": "The only way to do great work is to love what you do",
        "summary": "Hi, I'm Kebsi Montassar, a Full Stack Developer passionate about building AI-integrated web applications and scalable cloud-based solutions. I aspire to create secure, efficient systems using the best tools for each project. I'm especially focused on delivering complete web experiences that combine strong UI/UX design with smart, thoughtful AI features.",
        "moreAboutMe": "More About Me",
        "getToKnowMe": "Get To Know Me More",
        "exploreJourney": "Explore my journey through projects, experiences, and achievements that shaped my career.",
       
        // Page Titles
        "aboutTitle": "About Me",
        "projectsTitle": "My Projects",
        "experienceTitle": "My Experience",
        "contactTitle": "Contact Me",
        
        // Achievement Categories
        "hackathons": "Hackathons",
        "certificates": "Certificates",
        "skills": "Skills",
        "education": "Education Degrees",
        "featuredWorks": "Featured Works",
        "worksDescription": "Explore some of my notable projects and their impact.",
        
        // Footer
        "copyright": "© 2024 Kebsi Montassar. All rights reserved.",
        "privacyNote": "Built with privacy and security in mind.",
        
        // Project Labels
        "viewProject": "View Project",
        "liveDemo": "Live Demo",
        "sourceCode": "Source Code",
        
        // Contact Form
        "sendMessage": "Send Message",
        "yourName": "Your Name",
        "yourEmail": "Your Email",
        "yourMessage": "Your Message",
        
        // Success Messages
        "messageSent": "Message sent successfully!",
        "thankYou": "Thank you for your message.",
        
        // Achievements Data
        "achievements": {
          "projects": {
            "number": "15+",
            "label": "projects",
            "title": "Projects",
            "description": "Built responsive web applications using React, Node.js, and modern frameworks. Specialized in creating interactive dashboards and e-commerce solutions with focus on performance and accessibility.",
            "images": [
              { "url": "/images/projects/project1.jpg", "title": "E-commerce Platform" },
              { "url": "/images/projects/project2.jpg", "title": "Analytics Dashboard" },
              { "url": "/images/projects/project3.jpg", "title": "Mobile App" }
            ],
            "skills": ["React", "Node.js", "TypeScript", "GraphQL", "Chakra UI"]
          },
          "hackathons": {
            "number": "5+",
            "label": "hackathons",
            "title": "Hackathons",
            "description": "Participated in competitive coding events, winning awards for innovative solutions in AI and web development categories. Collaborated with diverse teams to build prototypes under time constraints.",
            "images": [
              { "url": "/images/hackathons/hack1.jpg", "title": "AI Challenge" },
              { "url": "/images/hackathons/hack2.jpg", "title": "Web Dev Contest" },
              { "url": "/images/hackathons/hack3.jpg", "title": "Hackathon Finals" }
            ],
            "skills": ["Teamwork", "Problem Solving", "Prototyping", "Presentation"]
          },
          "experience": {
            "number": "3+",
            "label": "experiences",
            "title": "Years Experience",
            "description": "Professional work experience at tech companies, contributing to large-scale projects and collaborating with cross-functional teams. Led initiatives that improved performance by 40% and user satisfaction by 25%.",
            "images": [
              { "url": "/images/experiences/exp1.jpg", "title": "Tech Company A" },
              { "url": "/images/experiences/exp2.jpg", "title": "Tech Company B" },
              { "url": "/images/experiences/exp3.jpg", "title": "Tech Company C" }
            ],
            "skills": ["Leadership", "Agile Methodologies", "Mentoring", "Project Management"]
          },
          "certificates": {
            "number": "10+",
            "label": "certificates",
            "title": "Certifications",
            "description": "Completed certifications in web development, cloud computing, and UX design from recognized platforms like Coursera and Udemy. Continuously learning new technologies to stay ahead in the field.",
            "images": [
              { "url": "/images/certificates/cert1.jpg", "title": "Web Development" },
              { "url": "/images/certificates/cert2.jpg", "title": "Cloud Computing" },
              { "url": "/images/certificates/cert3.jpg", "title": "UX Design" }
            ],
            "skills": ["Continuous Learning", "Cloud Architecture", "UI/UX Principles"]
          },
          "skills": {
            "number": "20+",
            "label": "skills",
            "title": "Skills",
            "description": "Mastered technologies including JavaScript, Python, React, Node.js, and cloud platforms like AWS and Firebase. Strong foundation in both frontend and backend development with focus on clean code practices.",
            "images": [
              { "url": "/images/skills/skill1.jpg", "title": "JavaScript Expertise" },
              { "url": "/images/skills/skill2.jpg", "title": "React Development" },
              { "url": "/images/skills/skill3.jpg", "title": "AWS Cloud" }
            ],
            "skills": ["JavaScript", "Python", "React", "Node.js", "AWS", "Firebase"]
          },
          "education": {
            "number": "2+",
            "label": "education",
            "title": "Degrees",
            "description": "Advanced degrees in Computer Science with focus on human-computer interaction and distributed systems. Published research papers on innovative approaches to user interface design.",
            "images": [
              { "url": "/images/education/edu1.jpg", "title": "Bachelor's Degree" },
              { "url": "/images/education/edu2.jpg", "title": "Master's Degree" }
            ],
            "skills": ["Research", "Algorithms", "Distributed Systems", "HCI"]
          }
        },
        // Experience Data
        "experience_data": {
          "fidness": {
            "title": "Full Stack Web Developer Intern",
            "company": "FIDNESS",
            "location": "La Marsa, Tunisia",
            "startDate": "2023-2-01",
            "endDate": "2023-6-31",
            "description": [
              "Designed and developed a web application for managing partner contracts, implementing encryption and other security measures to protect sensitive data.",
              "Designed and implemented data visualization features to improve data presentation, enabling efficient management and enhancing client retention."
            ],
            "technologies": [
              "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "RESTful APIs",
              "Full Stack Development", "Cross-Browser Compatibility", "Security Best Practices",
              "Encryption", "Data Visualization", "ChartJs", "MongoDB", "Mongoose", "Postman", "Git"
            ],
            "linkToCompany": "https://www.linkedin.com/company/fidness-company/",
            "images": ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
          },
          "esprit": {
            "title": "Full Stack Web Developer Intern",
            "company": "ESPRIT",
            "location": "Ariana, Tunisia",
            "startDate": "2024-6-01",
            "endDate": "2024-7-31",
            "description": [
              "Developed an e-commerce platform for plant sales with category filtering and Algolia search.",
              "Implemented stateless authentication using JWT.",
              "Built AI models for plant disease diagnosis and plant recognition with care recommendations.",
              "Designed a user-friendly interface with Chakra UI and Figma.",
              "Utilized Firebase for backend services and tested APIs with Postman."
            ],
            "technologies": [
              "Full Stack Development", "E-commerce", "AI", "JWT Authentication",
              "Firebase", "Algolia API", "Chakra UI", "Figma", "Cross-Browser Compatibility",
              "ReactJS", "Postman", "Security Best Practices"
            ],
            "linkToCompany": "https://www.linkedin.com/school/ecole-supérieure-privée-d'ingénierie-et-de-technologies---esprit/",
            "images": ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
          },
          "moodandfood": {
            "title": "Full Stack Web Developer Intern",
            "company": "Mood and Food",
            "location": "Ariana, Tunisia",
            "startDate": "2024-8-01",
            "endDate": "2025-1-31",
            "description": [
              "Designed and developed a full-stack e-commerce web application for diet products, gym accessories, and nutritional documentation.",
              "Created modern, responsive UI/UX designs using Figma and implemented them with ReactJS and Chakra UI.",
              "Built the back-end using Node.js and Express, with RESTful APIs for secure data handling and JWT for authentication.",
              "Implemented real-time data management using Firebase Firestore and Firebase Extensions.",
              "Conducted API testing and debugging using Postman."
            ],
            "technologies": [
              "Full Stack Development", "E-commerce", "RESTful APIs", "Firebase",
              "Firebase Extensions", "Security Best Practices", "AI (OpenAI)",
              "HTML", "CSS", "JavaScript", "ReactJS", "Chakra UI", "Figma", "Postman"
            ],
            "linkToCompany": "https://www.linkedin.com/company/mood-and-food/",
            "images": ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
          }
        }
      }
    },
    fr: {
      translations: {
        // Navbar & General Navigation
        "about": "À propos",
        "experiences": "Expériences",
        "projects": "Projets",
        "contact": "Contact",
        "home": "Accueil",
        
        // Theme Settings
        "light": "Clair",
        "dark": "Sombre",
        
        // Home Page
        "quote": "La seule façon de faire du bon travail est d'aimer ce que vous faites",
        "summary": "Bonjour, je suis Kebsi Montassar, un développeur Full Stack passionné par la création d'applications web intégrées à l'IA et de solutions cloud évolutives. J'aspire à créer des systèmes sécurisés et efficaces en utilisant les meilleurs outils pour chaque projet. Je me concentre particulièrement sur la livraison d'expériences web complètes qui allient un design UI/UX solide à des fonctionnalités IA intelligentes et réfléchies.",
        "moreAboutMe": "En savoir plus sur moi",
        "getToKnowMe": "Apprenez à Me Connaître",
        "exploreJourney": "Explorez mon parcours à travers les projets, expériences et réalisations qui ont façonné ma carrière.",
        
        // Page Titles
        "aboutTitle": "À Propos de Moi",
        "projectsTitle": "Mes Projets",
        "experienceTitle": "Mon Expérience",
        "contactTitle": "Me Contacter",
        
        // Achievement Categories
        "hackathons": "Hackathons",
        "certificates": "Certificats",
        "skills": "Compétences",
        "education": "Diplômes",
        "featuredWorks": "Travaux en Vedette",
        "worksDescription": "Découvrez certains de mes projets notables et leur impact.",
        
        // Footer
        "copyright": "© 2024 Kebsi Montassar. Tous droits réservés.",
        "privacyNote": "Construit avec la confidentialité et la sécurité à l'esprit.",
        
        // Project Labels
        "viewProject": "Voir le Projet",
        "liveDemo": "Démo en Direct",
        "sourceCode": "Code Source",
        
        // Contact Form
        "sendMessage": "Envoyer le Message",
        "yourName": "Votre Nom",
        "yourEmail": "Votre Email",
        "yourMessage": "Votre Message",
        
        // Success Messages
        "messageSent": "Message envoyé avec succès!",
        "thankYou": "Merci pour votre message.",
        
        // Achievements Data
        "achievements": {
          "projects": {
            "number": "15+",
            "label": "projets",
            "title": "Projets",
            "description": "Création d'applications web réactives utilisant React, Node.js et des frameworks modernes. Spécialisé dans la création de tableaux de bord interactifs et de solutions e-commerce axés sur la performance et l'accessibilité.",
            "images": [
              { "url": "/images/projects/project1.jpg", "title": "Plateforme E-commerce" },
              { "url": "/images/projects/project2.jpg", "title": "Tableau de Bord Analytique" },
              { "url": "/images/projects/project3.jpg", "title": "Application Mobile" }
            ],
            "skills": ["React", "Node.js", "TypeScript", "GraphQL", "Chakra UI"]
          },
          "hackathons": {
            "number": "5+",
            "label": "hackathons",
            "title": "Hackathons",
            "description": "Participation à des événements de programmation compétitive, remportant des prix pour des solutions innovantes dans les catégories IA et développement web. Collaboration avec des équipes diverses pour créer des prototypes sous contrainte de temps.",
            "images": [
              { "url": "/images/hackathons/hack1.jpg", "title": "Défi IA" },
              { "url": "/images/hackathons/hack2.jpg", "title": "Concours Dev Web" },
              { "url": "/images/hackathons/hack3.jpg", "title": "Finale Hackathon" }
            ],
            "skills": ["Travail d'équipe", "Résolution de problèmes", "Prototypage", "Présentation"]
          },
          "experience": {
            "number": "3+",
            "label": "expériences",
            "title": "Années d'Expérience",
            "description": "Expérience professionnelle dans des entreprises technologiques, contribuant à des projets à grande échelle et collaborant avec des équipes pluridisciplinaires. Direction d'initiatives ayant amélioré les performances de 40% et la satisfaction des utilisateurs de 25%.",
            "images": [
              { "url": "/images/experiences/exp1.jpg", "title": "Entreprise Tech A" },
              { "url": "/images/experiences/exp2.jpg", "title": "Entreprise Tech B" },
              { "url": "/images/experiences/exp3.jpg", "title": "Entreprise Tech C" }
            ],
            "skills": ["Leadership", "Méthodologies Agiles", "Mentorat", "Gestion de Projet"]
          },
          "certificates": {
            "number": "10+",
            "label": "certificats",
            "title": "Certifications",
            "description": "Obtention de certifications en développement web, cloud computing et design UX sur des plateformes reconnues comme Coursera et Udemy. Apprentissage continu des nouvelles technologies pour rester à la pointe du domaine.",
            "images": [
              { "url": "/images/certificates/cert1.jpg", "title": "Développement Web" },
              { "url": "/images/certificates/cert2.jpg", "title": "Cloud Computing" },
              { "url": "/images/certificates/cert3.jpg", "title": "Design UX" }
            ],
            "skills": ["Apprentissage Continu", "Architecture Cloud", "Principes UI/UX"]
          },
          "skills": {
            "number": "20+",
            "label": "compétences",
            "title": "Compétences",
            "description": "Maîtrise des technologies incluant JavaScript, Python, React, Node.js et des plateformes cloud comme AWS et Firebase. Solide fondation en développement frontend et backend avec focus sur les pratiques de code propre.",
            "images": [
              { "url": "/images/skills/skill1.jpg", "title": "Expertise JavaScript" },
              { "url": "/images/skills/skill2.jpg", "title": "Développement React" },
              { "url": "/images/skills/skill3.jpg", "title": "Cloud AWS" }
            ],
            "skills": ["JavaScript", "Python", "React", "Node.js", "AWS", "Firebase"]
          },
          "education": {
            "number": "2+",
            "label": "éducation",
            "title": "Diplômes",
            "description": "Diplômes avancés en informatique avec spécialisation en interaction homme-machine et systèmes distribués. Publication d'articles de recherche sur des approches innovantes en conception d'interfaces utilisateur.",
            "images": [
              { "url": "/images/education/edu1.jpg", "title": "Licence" },
              { "url": "/images/education/edu2.jpg", "title": "Master" }
            ],
            "skills": ["Recherche", "Algorithmes", "Systèmes Distribués", "IHM"]
          }
        },
        // Experience Data
        "experience_data": {
          "fidness": {
            "title": "Stagiaire Développeur Web Full Stack",
            "company": "FIDNESS",
            "location": "La Marsa, Tunisie",
            "startDate": "2023-2-01",
            "endDate": "2023-6-31",
            "description": [
              "Conception et développement d'une application web pour la gestion des contrats partenaires, avec mise en place du chiffrement et d'autres mesures de sécurité.",
              "Conception et implémentation de fonctionnalités de visualisation des données pour améliorer la présentation et la gestion efficace."
            ],
            "technologies": [
              "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "RESTful APIs",
              "Développement Full Stack", "Compatibilité Cross-Browser", "Bonnes Pratiques de Sécurité",
              "Chiffrement", "Visualisation de Données", "ChartJs", "MongoDB", "Mongoose", "Postman", "Git"
            ],
            "linkToCompany": "https://www.linkedin.com/company/fidness-company/",
            "images": ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"] 

          },
          "esprit": {
            "title": "Stagiaire Développeur Web Full Stack",
            "company": "ESPRIT",
            "location": "Ariana, Tunisie",
            "startDate": "2024-6-01",
            "endDate": "2024-7-31",
            "description": [
              "Développement d'une plateforme e-commerce pour la vente de plantes avec filtrage par catégorie et recherche Algolia.",
              "Mise en œuvre d'une authentification sans état utilisant JWT.",
              "Création de modèles IA pour le diagnostic des maladies des plantes et la reconnaissance des plantes avec recommandations de soins.",
              "Conception d'une interface utilisateur conviviale avec Chakra UI et Figma.",
              "Utilisation de Firebase pour les services backend et test des APIs avec Postman."
            ],
            "technologies": [
              "Développement Full Stack", "E-commerce", "IA", "Authentification JWT",
              "Firebase", "API Algolia", "Chakra UI", "Figma", "Compatibilité Cross-Browser",
              "ReactJS", "Postman", "Bonnes Pratiques de Sécurité"
            ],
            "linkToCompany": "https://www.linkedin.com/school/ecole-supérieure-privée-d'ingénierie-et-de-technologies---esprit/",
             "images": ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"] 
          },
          "moodandfood": {
            "title": "Stagiaire Développeur Web Full Stack",
            "company": "Mood and Food",
            "location": "Ariana, Tunisie",
            "startDate": "2024-8-01",
            "endDate": "2025-1-31",
            "description": [
              "Conception et développement d'une application web e-commerce complète pour les produits diététiques, accessoires de gym et documentation nutritionnelle.",
              "Création de designs UI/UX modernes et réactifs avec Figma et leur implémentation avec ReactJS et Chakra UI.",
              "Développement du backend avec Node.js et Express, avec APIs RESTful pour la gestion sécurisée des données et JWT pour l'authentification.",
              "Mise en œuvre de la gestion des données en temps réel avec Firebase Firestore et Firebase Extensions.",
              "Test et débogage des APIs avec Postman."
            ],
            "technologies": [
              "Développement Full Stack", "E-commerce", "APIs RESTful", "Firebase",
              "Extensions Firebase", "Bonnes Pratiques de Sécurité", "IA (OpenAI)",
              "HTML", "CSS", "JavaScript", "ReactJS", "Chakra UI", "Figma", "Postman"
            ],
            "linkToCompany": "https://www.linkedin.com/company/mood-and-food/",
            "images": ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
          }
        }
      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
})

export default i18n
