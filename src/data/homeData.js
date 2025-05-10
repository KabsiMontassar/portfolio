import { useTranslation } from 'react-i18next';

const useHomeData = () => {
  const { t } = useTranslation();

  const data = {
    PageData: t('home.quote'),
    
    HeroData: {
      description: t('home.hero.description'),
      buttonText: t('home.hero.buttonText')
    },

    AchievementsData: {
      firstText: t('home.achievements.firstText'),
      secondText: t('home.achievements.secondText'),

      cards: [
        {
          title: t('home.achievements.experience.title'),
          description: t('home.achievements.experience.description'),
          label: t('home.achievements.experience.label'),
          color: "green",
          images: [
            { url: "/images/experiences/exp1.jpg", title: "FIDNESS" },
            { url: "/images/experiences/exp2.jpg", title: "ESPRIT" },
            { url: "/images/experiences/exp3.jpg", title: "MOOD AND FOOD" }
          ],
          skills: ["Leadership", "Agile Methodologies", "Mentoring", "Project Management"]
        },
        {
          title: t('home.achievements.projects.title'),
          description: t('home.achievements.projects.description'),
          label: t('home.achievements.projects.label'),
          color: "purple",
          images: [
            { url: "/images/projects/project1.jpg", title: "PlayMate" },
            { url: "/images/projects/project2.jpg", title: "FlexFlow" },
            { url: "/images/projects/project3.jpg", title: "Verdeseeds" }
          ],
          skills: ["React", "Node.js", "NestJs", "TypeScript", "MongoDb", "PostgreSQl", "Chakra UI"]
        },
        {
          title: t('home.achievements.education.title'),
          description: t('home.achievements.education.description'),
          label: t('home.achievements.education.label'),
          color: "teal",
          images: [
            { url: "/images/education/edu1.jpg", title: "Bachelor's Degree" },
            { url: "/images/education/edu2.jpg", title: "Master's Degree" }
          ],
          skills: ["Research", "Algorithms", "Distributed Systems"]
        },
        {
          title: t('home.achievements.hackathons.title'),
          description: t('home.achievements.hackathons.description'),
          label: t('home.achievements.hackathons.label'),
          color: "blue",
          images: [
            { url: "/images/hackathons/hack1.jpg", title: "EMPOWER X HACK" },
            { url: "/images/hackathons/hack2.jpg", title: "BIGTECH" },
            { url: "/images/hackathons/hack3.jpg", title: "MUTUALHACK" }
          ],
          skills: ["Teamwork", "Problem Solving", "Prototyping", "Presentation"]
        },
        {
          title: t('home.achievements.certificates.title'),
          description: t('home.achievements.certificates.description'),
          label: t('home.achievements.certificates.label'),
          color: "orange",
          images: [
            { url: "/images/certificates/cert1.jpg", title: "IBM" },
            { url: "/images/certificates/cert2.jpg", title: "The Hashgraph Association" },
            { url: "/images/certificates/cert3.jpg", title: "Cisco" }
          ],
          skills: ["Continuous Learning", "BlockChain", "Artificial Intelligence"]
        },
        {
          title: t('home.achievements.skills.title'),
          description: t('home.achievements.skills.description'),
          label: t('home.achievements.skills.label'),
          color: "red",
          images: [
            { url: "/images/skills/skill1.jpg", title: "JavaScript Expertise" },
            { url: "/images/skills/skill2.jpg", title: "React Development" },
            { url: "/images/skills/skill3.jpg", title: "AWS Cloud" }
          ],
          skills: ["JavaScript", "TypeScript", "Python", "Java", "React", "Node.js", "AWS", "Firebase"]
        }
      ]
    },

    PersonalCardData: {
      text: t('home.personal.text')
    }
  };

  return data;
};

export { useHomeData };