import { useTranslation } from 'react-i18next';

const useExperienceData = () => {
  const { t } = useTranslation();

  const experienceData = [
    {
      title: t('experience.fidness.title'),
      company: t('experience.fidness.company'),
      location: t('experience.fidness.location'),
      startDate: "2023-2-01",
      endDate: "2023-6-31",
      description: t('experience.fidness.description', { returnObjects: true }),
      technologies: [
        "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "RESTful APIs",
        "Full Stack Development", "Cross-Browser Compatibility", "Security Best Practices",
        "Encryption", "Data Visualization", "ChartJs", "MongoDB", "Mongoose", "Postman", "Git"
      ],
      linkToCompany: "https://www.linkedin.com/company/fidness-company/",
      images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
    },
    {
      title: t('experience.esprit.title'),
      company: t('experience.esprit.company'),
      location: t('experience.esprit.location'),
      startDate: "2024-6-01",
      endDate: "2024-7-31",
      description: t('experience.esprit.description', { returnObjects: true }),
      technologies: [
        "Full Stack Development", "E-commerce", "AI", "JWT Authentication",
        "Firebase", "Algolia API", "Chakra UI", "Figma", "Cross-Browser Compatibility",
        "ReactJS", "Postman", "Security Best Practices"
      ],
      linkToCompany: "https://www.linkedin.com/school/ecole-supérieure-privée-d'ingénierie-et-de-technologies---esprit/",
      images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
    },
    {
      title: t('experience.moodandfood.title'),
      company: t('experience.moodandfood.company'),
      location: t('experience.moodandfood.location'),
      startDate: "2024-8-01",
      endDate: "2025-1-31",
      description: t('experience.moodandfood.description', { returnObjects: true }),
      technologies: [
        "Full Stack Development", "E-commerce", "RESTful APIs", "Firebase",
        "Firebase Extensions", "Security Best Practices", "AI (OpenAI)",
        "HTML", "CSS", "JavaScript", "ReactJS", "Chakra UI", "Figma", "Postman"
      ],
      linkToCompany: "https://www.linkedin.com/company/mood-and-food/",
      images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
    }
  ];

  const eventsData = [
    {
      title: t('events.empowerxhack.title'),
      company: t('events.empowerxhack.company'),
      location: t('events.empowerxhack.location'),
      startDate: "2024-07-23",
      endDate: "2024-07-25",
      description: t('events.empowerxhack.description', { returnObjects: true }),
      technologies: [
        "React", "Node.js", "Firebase", "Chakra UI", "BlockChain",
        "Hedera Ecosystem", "Smart Contracts", "Web3.js", "NFT"
      ]
    },
    {
      title: t('events.bigtech.title'),
      company: t('events.bigtech.company'),
      location: t('events.bigtech.location'),
      startDate: "2024-07-29",
      endDate: "2024-07-29",
      description: t('events.bigtech.description', { returnObjects: true }),
      technologies: [
        "React", "Node.js", "Firebase", "Chakra UI", "BlockChain",
        "Hedera Ecosystem", "Smart Contracts", "Web3.js", "NFT"
      ]
    },
    {
      title: t('events.mutualhack.title'),
      company: t('events.mutualhack.company'),
      location: t('events.mutualhack.location'),
      startDate: "2025-05-02",
      endDate: "2025-05-03",
      description: t('events.mutualhack.description', { returnObjects: true }),
      technologies: [
        "React", "Node.js", "Firebase", "Chakra UI", "Artificial Intelligence",
        "Machine Learning", "IOT"
      ]
    }
  ];

  return { experienceData, eventsData };
};

export { useExperienceData };