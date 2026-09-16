import { ServiceExpertise } from '../types';

export const services: ServiceExpertise[] = [
  {
    id: 'full-stack',
    title: 'FULL STACK DEVELOPMENT',
    lead: 'Adan Ghafoor',
    leadSlug: 'adan-ghafoor',
    description: 'Building modern web applications with frontend interfaces, backend integration, APIs, databases, and scalable architecture.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'MySQL', 'TypeScript', 'Tailwind CSS'],
    keyCapabilities: [
      'Interactive Next.js & React single-page & hybrid applications',
      'End-to-end API orchestration & state management',
      'Modular component design systems and micro-frontends',
      'AI model integration and automated workflow suites'
    ],
    iconName: 'LayoutGrid',
    accentGradient: 'from-purple-600/30 via-indigo-600/10 to-transparent'
  },
  {
    id: 'backend',
    title: 'BACKEND ENGINEERING',
    lead: 'Muhammad Sameer Ali',
    leadSlug: 'muhammad-sameer-ali',
    description: 'Developing reliable backend systems, APIs, authentication systems, databases, and server-side architecture.',
    technologies: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'JWT', 'REST APIs'],
    keyCapabilities: [
      'High-throughput asynchronous REST microservices',
      'ACID relational schema design & NoSQL indexing',
      'Role-based access control, OAuth2 & JWT auth layers',
      'Server-side performance tuning & connection pooling'
    ],
    iconName: 'Server',
    accentGradient: 'from-blue-600/30 via-cyan-600/10 to-transparent'
  },
  {
    id: 'mobile',
    title: 'MOBILE APP DEVELOPMENT',
    lead: 'Ahmad Shehzad',
    leadSlug: 'ahmad-shehzad',
    description: 'Creating responsive and user-friendly cross-platform mobile applications with modern technologies and API integrations.',
    technologies: ['Flutter', 'Dart', 'React Native', 'Firebase', 'REST APIs'],
    keyCapabilities: [
      'Smooth 60 FPS cross-platform iOS & Android engineering',
      'Real-time Firestore & WebSocket offline synchronization',
      'Hardware biometric authentication (FaceID, TouchID)',
      'App Store & Google Play deployment pipelines'
    ],
    iconName: 'Smartphone',
    accentGradient: 'from-teal-600/30 via-emerald-600/10 to-transparent'
  },
  {
    id: 'blockchain',
    title: 'BLOCKCHAIN DEVELOPMENT',
    lead: 'Asad Abdullah',
    leadSlug: 'asad-abdullah',
    description: 'Developing decentralized applications, smart contracts, Web3 integrations, and blockchain-powered systems.',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Ethers.js', 'Smart Contracts'],
    keyCapabilities: [
      'Auditable Solidity smart contracts & EVM protocols',
      'Web3 wallet integrations & cryptographic signatures',
      'Decentralized storage (IPFS) & token standards',
      'Secure blockchain node interfaces & event listeners'
    ],
    iconName: 'Boxes',
    accentGradient: 'from-amber-600/30 via-orange-600/10 to-transparent'
  }
];
