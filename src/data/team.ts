import { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    slug: 'adan-ghafoor',
    name: 'ADAN GHAFOOR',
    role: 'Software Engineer | Full Stack Developer',
    title: 'Full Stack Engineering Lead',
    shortBio: 'Specializes in building modern, scalable, and user-friendly web platforms with clean architecture, robust APIs, and interactive UIs.',
    fullBio: 'Adan Ghafoor is a Software Engineer focused on building modern, scalable, and user-friendly digital products. His interests include full stack development, frontend interfaces, backend integration, databases, APIs, and AI-powered applications. He crafts resilient client-server systems with precision UI engineering, modern component lifecycles, and high-performance state management.',
    image: '',
    initials: 'AG',
    leadSpecialization: 'Full Stack Development',
    specializations: [
      'Full Stack Development',
      'Web Application Development',
      'Frontend Development',
      'Backend Integration',
      'API Integration',
      'Database Systems',
      'AI-powered Applications'
    ],
    skills: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'REST APIs',
      'Git',
      'GitHub',
      'Tailwind CSS'
    ],
    categorizedSkills: [
      {
        category: 'Frontend & UI',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3']
      },
      {
        category: 'Backend & Integration',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'Serverless Functions', 'API Gateways']
      },
      {
        category: 'Database Systems',
        skills: ['MongoDB', 'MySQL', 'Database Schema Modeling']
      },
      {
        category: 'Tools & Workflows',
        skills: ['Git', 'GitHub', 'Vite', 'Postman', 'Docker Basics']
      }
    ],
    github: 'ADD_GITHUB_URL',
    githubUsername: 'ADAN_GITHUB_USERNAME',
    linkedin: 'ADD_LINKEDIN_URL',
    email: 'adanghafoor856@gmail.com',
    phone: '03020537184',
    whatsapp: 'https://wa.me/923020537184',
    projects: ['project-01', 'project-03'],
    accentColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: '2',
    slug: 'muhammad-sameer-ali',
    name: 'MUHAMMAD SAMEER ALI',
    role: 'Software Engineer | Backend Development Specialist',
    title: 'Backend Systems & Architecture Lead',
    shortBio: 'Builds reliable technical foundations, resilient microservices, high-throughput REST APIs, and secure database infrastructures.',
    fullBio: 'Muhammad Sameer Ali specializes in backend development and building reliable technical foundations for modern applications. His focus includes backend architecture, API development, databases, authentication, authorization, and scalable server-side systems. He emphasizes clean schema design, low-latency queries, and strict application security.',
    image: '/team/muhammad-sameer-ali.jpg',
    initials: 'SA',
    leadSpecialization: 'Backend Engineering',
    specializations: [
      'Backend Development',
      'API Development',
      'Database Design',
      'Authentication',
      'Authorization',
      'Server-side Architecture',
      'System Integration'
    ],
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'REST APIs',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'JWT',
      'Authentication',
      'Git',
      'GitHub',
      'Backend Architecture'
    ],
    categorizedSkills: [
      {
        category: 'Backend Runtime & Engines',
        skills: ['Node.js', 'Express.js', 'Python', 'Backend Architecture']
      },
      {
        category: 'Database & Storage',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Indexing & Query Optimization']
      },
      {
        category: 'Security & Auth',
        skills: ['JWT', 'OAuth2', 'Role-Based Access Control', 'API Security']
      },
      {
        category: 'Architecture & DevOps',
        skills: ['REST APIs', 'System Integration', 'Git', 'GitHub']
      }
    ],
    github: 'https://github.com/sameerali-dev',
    githubUsername: 'sameerali-dev',
    linkedin: 'https://linkedin.com/in/muhammad-sameer-ali',
    email: 'alishameer@gmail.com',
    phone: '03161882970',
    whatsapp: 'https://wa.me/923161882970',
    projects: ['project-01', 'project-02'],
    accentColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: '3',
    slug: 'ahmad-shehzad',
    name: 'AHMAD SHEHZAD',
    role: 'Software Engineer | Mobile App Developer',
    title: 'Mobile Applications & Cross-Platform Lead',
    shortBio: 'Designs and engineers high-performance cross-platform mobile apps for iOS and Android with smooth 60fps native animations and robust backend sync.',
    fullBio: 'Ahmad Shehzad specializes in mobile application development and focuses on creating modern, responsive, efficient, and user-friendly applications. His work includes mobile application architecture, API integration, user interface implementation, and cross-platform development with Flutter, Dart, and React Native.',
    image: '/team/ahmad-shehzad.jpg',
    initials: 'AS',
    leadSpecialization: 'Mobile App Development',
    specializations: [
      'Mobile Application Development',
      'Cross-platform Development',
      'Mobile UI Development',
      'API Integration',
      'Firebase',
      'Mobile Architecture',
      'Performance Optimization'
    ],
    skills: [
      'Flutter',
      'Dart',
      'React Native',
      'JavaScript',
      'Firebase',
      'REST APIs',
      'Mobile UI/UX',
      'Git',
      'GitHub',
      'App Deployment'
    ],
    categorizedSkills: [
      {
        category: 'Mobile Frameworks',
        skills: ['Flutter', 'Dart', 'React Native', 'Mobile UI/UX']
      },
      {
        category: 'Mobile Cloud & Sync',
        skills: ['Firebase Firestore', 'Cloud Messaging', 'Offline Sync', 'Push Notifications']
      },
      {
        category: 'Integration & Optimization',
        skills: ['REST APIs', 'Mobile Architecture', 'Performance Optimization']
      },
      {
        category: 'Deployment & Tooling',
        skills: ['Git', 'GitHub', 'App Store / Play Store Deployment', 'Mobile CI/CD']
      }
    ],
    github: 'https://github.com/ahmadshehzad-dev',
    githubUsername: 'ahmadshehzad-dev',
    linkedin: 'https://linkedin.com/in/ahmad-shehzad-dev',
    email: 'ahmadshehzad.dev@gmail.com',
    projects: ['project-02', 'project-03'],
    accentColor: 'from-emerald-500 to-teal-400'
  },
  {
    id: '4',
    slug: 'asad-abdullah',
    name: 'ASAD ABDULLAH',
    role: 'Software Engineer | Blockchain Developer',
    title: 'Decentralized Systems & Web3 Lead',
    shortBio: 'Engineers smart contracts, decentralized applications (dApps), cryptographic integrations, and EVM blockchain architectures.',
    fullBio: 'Asad Abdullah specializes in blockchain technologies and decentralized application development. His interests include smart contracts, Web3 integration, decentralized systems, and blockchain architecture. He builds auditable smart contract systems and integrates decentralized nodes with modern consumer applications.',
    image: '/team/asad-abdullah.jpg',
    initials: 'AA',
    leadSpecialization: 'Blockchain Development',
    specializations: [
      'Blockchain Development',
      'Smart Contracts',
      'Web3 Development',
      'Decentralized Applications',
      'Blockchain Architecture',
      'Ethereum Ecosystem'
    ],
    skills: [
      'Solidity',
      'Ethereum',
      'Web3.js',
      'Ethers.js',
      'Smart Contracts',
      'JavaScript',
      'Node.js',
      'Git',
      'GitHub'
    ],
    categorizedSkills: [
      {
        category: 'Smart Contracts & Web3',
        skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Ethers.js']
      },
      {
        category: 'Decentralized Architecture',
        skills: ['dApp Architecture', 'Wallet Integrations (MetaMask/WalletConnect)', 'IPFS']
      },
      {
        category: 'Backend & Scripting',
        skills: ['Node.js', 'JavaScript', 'Hardhat / Foundry Workflow']
      },
      {
        category: 'Tools & Security',
        skills: ['Git', 'GitHub', 'Smart Contract Auditing Principles']
      }
    ],
    github: 'https://github.com/asadabdullah-dev',
    githubUsername: 'asadabdullah-dev',
    linkedin: 'https://linkedin.com/in/asad-abdullah-dev',
    email: 'asadabdullah.dev@gmail.com',
    projects: ['project-01', 'project-02'],
    accentColor: 'from-amber-500 to-orange-500'
  }
];

export const getMemberBySlug = (slug: string): TeamMember | undefined => {
  return teamMembers.find((m) => m.slug.toLowerCase() === slug.toLowerCase());
};
