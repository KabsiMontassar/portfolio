
import { FaAngular } from 'react-icons/fa';

// Projects data
const projectsData = [
  {
    title: 'PlayMate',
    details: [
      'Football matchmaking platform with field reservations, tournaments, and sportswear orders.',
      'Built an admin dashboard for efficient platform management.',
      'Integrated Google Maps, Calendar, Mailing, and SMS APIs for seamless user experience.',
    ],
    technologies: ['PHP', 'Symfony', 'Ajax', 'Bootstrap', 'MySQL', 'API Integration', 'Backend Management'],
  },
  {
    title: 'FlexFlow',
    details: [
      'Developed the frontend using React + TypeScript with Vite and Chakra UI for a fast, modern UI.',
      'Implemented secure authentication and role-based access control (RBAC) with NestJS and JWT.',
      'Created backend microservices with NestJS, using MongoDB for user data and PostgreSQL for task management.',
      'Used Docker for containerization and GitHub Actions for automated CI/CD.',
      'Ensured code quality and security with Mocha, Playwright, and Snyk.',
    ],
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'MongoDB', 'JWT', 'WebSockets', 'Docker', 'GitHub Actions', 'CI/CD', 'Snyk', 'Microservices', 'Vite', 'Chakra'],
  },
  {
    title: 'VerdeSeeds',
    details: [
      'Developed a multi-tenant SaaS platform allowing farmers to easily create and manage customizable e-commerce websites.',
      'Built with Angular (frontend) and Spring Boot (backend) for a responsive, scalable, and modular experience.',
      'Integrated a shared marketplace for buying/selling seeds, equipment, and farming resources.',
      'Added AI-powered features, including:',
      'Automated component generation for e-commerce sites.',
      'Plant disease detection with AI-driven recommendations.',
      'Image color extraction for platform customization.',
      'Enabled real-time notifications and messaging using WebSockets.',
      'Designed role-based access control for managing products, customers, employees, and orders.',
      'Deployed on OpenStack using Docker, Ansible, and Heat for automated provisioning.',
      'Used Kubernetes for orchestration, ensuring scalability and fault tolerance.',
      'Monitored system health with Prometheus & Grafana dashboards.',
    ],
    technologies: ['Angular', 'Spring Boot', 'Java', 'WebSockets', 'JWT', 'Docker', 'Kubernetes', 'OpenStack', 'Ansible', 'Heat', 'Prometheus', 'Grafana'],
  },
]

const certs = [
  {
    title: 'IBM Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    year: 2025,
    icon: FaAngular,
    color: '#052FAD',
    description: 'Fundamentals of AI including machine learning, deep learning, and neural networks'
  },
  {
    title: 'Hedera Hashgraph Developer',
    issuer: 'The Hashgraph Association',
    year: 2025,
    icon: FaAngular,
    color: '#00C4BE',
    description: 'Building decentralized applications on the Hedera network'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    year: 2022,
    icon: FaAngular,
    color: '#0A0A23',
    description: 'Mastery of JavaScript fundamentals and problem-solving techniques'
  },
]

export { projectsData, certs }