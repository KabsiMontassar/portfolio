import { FaBrain, FaCogs, FaCloud, FaPuzzlePiece, FaPalette, FaDatabase, FaTools, FaRobot, FaPencilRuler } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const useAboutData = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: FaBrain,
      title: t('skills.programming'),
      items: ['TypeScript', 'JavaScript', 'PHP', 'Java', 'HTML5', 'CSS3'],
      color: 'purple'
    },
    {
      icon: FaCogs,
      title: t('skills.backend'),
      items: ['Node.js', 'Express.js', 'NestJS', 'Spring Boot'],
      color: 'blue'
    },
    {
      icon: FaCloud,
      title: t('skills.cloud'),
      items: ['AWS', 'Azure', 'OpenStack', 'Firebase', 'Supabase'],
      color: 'cyan'
    },
    {
      icon: FaPuzzlePiece,
      title: t('skills.frontend'),
      items: ['React', 'Angular.js', 'Next.js'],
      color: 'teal'
    },
    {
      icon: FaPalette,
      title: t('skills.ui'),
      items: ['Chakra UI', 'TailwindCSS'],
      color: 'pink'
    },
    {
      icon: FaDatabase,
      title: t('skills.databases'),
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      color: 'orange'
    },
    {
      icon: FaTools,
      title: t('skills.devops'),
      items: ['Jenkins', 'GitHub', 'GitHub Actions'],
      color: 'yellow'
    },
    {
      icon: FaRobot,
      title: t('skills.ai'),
      items: ['TensorFlow'],
      color: 'green'
    },
    {
      icon: FaPencilRuler,
      title: t('skills.design'),
      items: ['Figma'],
      color: 'red'
    }
  ];

  const alltexts = [
    t("about.title"),
    t("about.intro"),
    t("about.name"),
    t("about.role"),
    t("about.journey"),
    t("about.description1"),
    t("about.description2"),
    t("about.cta"),
    t("about.expertise"),
    skillCategories,
    t("about.beyond"),
    t("about.hobby"),
    t("about.community"),
  ];

  return alltexts;
};

export default useAboutData;


