
import { FaAngular } from 'react-icons/fa';

// Projects data
const projectsData = [

  {
    title: 'PlayMate',
    description: 'A web application for football enthusiasts to find and book fields.',
    details: [
      'Football matchmaking platform with field reservations, tournaments, and sportswear orders.',
      'Built an admin dashboard for efficient platform management.',
      'Integrated Google Maps, Calendar, Mailing, and SMS APIs for seamless user experience.',
    ],
    images: [],
    link: `https://github.com/KabsiMontassar/PlayMate_Web`,
    technologies: ['PHP', 'Symfony', 'Ajax', 'Bootstrap', 'MySQL', 'API Integration', 'Backend Management'],
  },
  {
    title: 'FlexFlow',
    description: 'A web application for managing and optimizing employee schedules.',
    details: [
      'Developed the frontend using React + TypeScript with Vite and Chakra UI for a fast, modern UI.',
      'Implemented secure authentication and role-based access control (RBAC) with NestJS and JWT.',
      'Created backend microservices with NestJS, using MongoDB for user data and PostgreSQL for task management.',
      'Used Docker for containerization and GitHub Actions for automated CI/CD.',
      'Ensured code quality and security with Mocha, Playwright, and Snyk.',
    ],
    images: [],
    link: `https://github.com/KabsiMontassar/Task-Manager-with-Real-time-Notifications`,
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'MongoDB', 'JWT', 'WebSockets', 'Docker', 'GitHub Actions', 'CI/CD', 'Snyk', 'Microservices', 'Vite', 'Chakra'],

  },
  {
    title: 'VerdeSeeds',
    description: 'A multi-tenant SaaS platform for farmers to create and manage e-commerce websites.',
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
    link: `https://github.com/KabsiMontassar/SpringBack`,
    images: [],

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
    description: 'Fundamentals of AI including machine learning, deep learning, and neural networks',
    link: 'https://www.credly.com/badges/1ee596e7-9831-41f4-a81a-baa1700bfd38'
  },
  {
    title: 'Hedera Hashgraph Developer',
    issuer: 'The Hashgraph Association',
    year: 2025,
    icon: FaAngular,
    color: '#00C4BE',
    description: 'Building decentralized applications on the Hedera network',
    link: 'https://certs.hashgraphdev.com/e6beec52-97b1-4bf7-bb84-ee6fbfed1fcf.pdf'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    year: 2022,
    icon: FaAngular,
    color: '#0A0A23',
    description: 'Mastery of JavaScript fundamentals and problem-solving techniques',
    link: 'https://freecodecamp.org/certification/fcc2e4e261a-212a-44f2-97ab-c8af1fc0a2c8/javascript-algorithms-and-data-structures'
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    year: 2024,
    icon: FaAngular,
    color: '#F2F2F2',
    description: 'Fundamentals of networking, including switching, routing, and wireless technologies',
    link: 'https://www.credly.com/badges/2b09d86c-7320-4e62-870d-9f636f36425e'
  }
]

const texts = {
  Technology: "Technology Stack",
  KeyFeatures: "Key Features",
  text1: "View Credential",
}

const textsused = {
  title: "My Projects",
  description: "Showcasing innovative solutions built with cutting-edge technologies",
  certsTitle: "Certifications",
  certsDescription: "Validated expertise through industry-recognized certifications",
  certsText: "Certifications",
}

export { projectsData, certs, texts, textsused }