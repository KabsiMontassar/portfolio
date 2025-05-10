import { useTranslation } from 'react-i18next';
import { FaAngular } from 'react-icons/fa';
import { GrCertificate } from "react-icons/gr";
import flexflow from "../assets/projects/flexflow.png";
import playmate from "../assets/projects/playmate.png";
import verdeseeds from "../assets/projects/verdeseeds.png";

const useProjectsData = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      title: 'PlayMate',
      description: t('projects.playmate.description'),
      details: t('projects.playmate.details', { returnObjects: true }),
      image: playmate,
      link: 'https://github.com/KabsiMontassar/PlayMate_Web',
      technologies: ['PHP', 'Symfony', 'Ajax', 'Bootstrap', 'MySQL', 'API Integration', 'Backend Management'],
    },
    {
      title: 'FlexFlow',
      description: t('projects.flexflow.description'),
      details: t('projects.flexflow.details', { returnObjects: true }),
      image: flexflow,
      link: 'https://github.com/KabsiMontassar/Task-Manager-with-Real-time-Notifications',
      technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'MongoDB', 'JWT', 'WebSockets', 'Docker', 'GitHub Actions', 'CI/CD', 'Snyk', 'Microservices', 'Vite', 'Chakra'],
    },
    {
      title: 'VerdeSeeds',
      description: t('projects.verdeseeds.description'),
      details: t('projects.verdeseeds.details', { returnObjects: true }),
      image: verdeseeds,
      link: 'https://github.com/KabsiMontassar/SpringBack',
      technologies: ['Angular', 'Spring Boot', 'Java', 'WebSockets', 'JWT', 'Docker', 'Kubernetes', 'OpenStack', 'Ansible', 'Heat', 'Prometheus', 'Grafana'],
    },
  ];

  const certs = [
    {
      title: 'IBM Artificial Intelligence Fundamentals',
      issuer: 'IBM',
      year: 2025,
      icon: GrCertificate,
      color: '#052FAD',
      description: 'Fundamentals of AI including machine learning, deep learning, and neural networks',
      link: 'https://www.credly.com/badges/1ee596e7-9831-41f4-a81a-baa1700bfd38'
    },
    {
      title: 'Hedera Hashgraph Developer',
      issuer: 'The Hashgraph Association',
      year: 2025,
      icon: GrCertificate,
      color: '#00C4BE',
      description: 'Building decentralized applications on the Hedera network',
      link: 'https://certs.hashgraphdev.com/e6beec52-97b1-4bf7-bb84-ee6fbfed1fcf.pdf'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      year: 2022,
      icon: GrCertificate,
      color: '#0A0A23',
      description: 'Mastery of JavaScript fundamentals and problem-solving techniques',
      link: 'https://freecodecamp.org/certification/fcc2e4e261a-212a-44f2-97ab-c8af1fc0a2c8/javascript-algorithms-and-data-structures'
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco Networking Academy',
      year: 2024,
      icon: GrCertificate,
      color: '#F2F2F2',
      description: 'Fundamentals of networking, including switching, routing, and wireless technologies',
      link: 'https://www.credly.com/badges/2b09d86c-7320-4e62-870d-9f636f36425e'
    }
  ];

  const texts = {
    Technology: t('projects.labels.technology'),
    KeyFeatures: t('projects.labels.features'),
    text1: t('projects.labels.viewCredential'),
  };

  const textsused = {
    title: t('projects.page.title'),
    description: t('projects.page.description'),
    certsTitle: t('certs.page.title'),
    certsDescription: t('certs.page.description'),
    certsText: t('certs.page.title'),
  };

  return { projectsData, certs, texts, textsused };
};

export { useProjectsData };