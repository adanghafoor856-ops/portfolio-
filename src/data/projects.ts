import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-01',
    slug: 'project-01-decentralized-cloud-vault',
    title: 'Decentralized Cloud Architecture & Web Portal',
    shortDescription: 'A modern full-stack decentralized file management platform combining EVM smart contracts, high-throughput microservices, and a reactive dashboard.',
    description: 'A cutting-edge collaborative engineering project engineered by our team at Vertex Technologies. Designed to provide enterprise-grade cryptographic file verification, multi-region API orchestration, and real-time frontend visualization.',
    category: 'Web Applications',
    status: 'Coming Soon / Add Project Details',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Solidity', 'Web3.js', 'Tailwind CSS'],
    teamMembers: ['Adan Ghafoor', 'Muhammad Sameer Ali', 'Asad Abdullah'],
    contributions: [
      {
        memberName: 'Adan Ghafoor',
        memberSlug: 'adan-ghafoor',
        role: 'Frontend & API Integration Lead',
        contribution: 'Engineered the responsive Next.js client interface, state hydration pipelines, dynamic data filters, and interactive metrics visualization.'
      },
      {
        memberName: 'Muhammad Sameer Ali',
        memberSlug: 'muhammad-sameer-ali',
        role: 'Backend & Database Architect',
        contribution: 'Designed the PostgreSQL schemas, JWT session management, load-balanced Express REST microservices, and rate-limiting middleware.'
      },
      {
        memberName: 'Asad Abdullah',
        memberSlug: 'asad-abdullah',
        role: 'Smart Contract & Web3 Engineer',
        contribution: 'Developed verifiable Solidity smart contracts for decentralized cryptographic asset proof, hash validation, and Web3 RPC connectivity.'
      }
    ],
    problem: 'Traditional centralized data storage systems suffer from single points of failure, vulnerable credentials, and opaque file validation logs.',
    solution: 'Our team at Vertex Technologies engineered a hybrid architecture leveraging hardened server-side APIs for rapid indexing while delegating integrity proofs to immutable smart contracts with a seamless UI.',
    features: [
      'Zero-Knowledge metadata encryption with instant browser verification',
      'Ultra-responsive Next.js frontend with dark mode & accessibility compliance',
      'Optimized backend microservices handling high-concurrency requests',
      'Auditable EVM smart contract logic for immutable tamper-evident logs'
    ],
    githubUrl: '',
    liveUrl: '',
    screenshots: [
      {
        title: 'Main System Dashboard',
        caption: 'Central operations console displaying encrypted storage telemetry and real-time query metrics.',
        placeholderType: 'dashboard'
      },
      {
        title: 'Decentralized Verification Gateway',
        caption: 'Smart contract proof inspector validating cryptographic signatures across nodes.',
        placeholderType: 'blockchain'
      },
      {
        title: 'Backend API Telemetry',
        caption: 'Low-latency server logs and connection pooling benchmarks.',
        placeholderType: 'code'
      }
    ]
  },
  {
    id: 'project-02',
    slug: 'project-02-cross-platform-crypto-wallet',
    title: 'Cross-Platform Mobile FinTech & Wallet Gateway',
    shortDescription: 'High-performance mobile application engineered for secure asset tracking, real-time blockchain telemetry, and biometric transaction authorizations.',
    description: 'An advanced mobile application built by our team at Vertex Technologies delivering frictionless cross-platform performance across iOS and Android, backed by hardened server architecture and smart contract integrations.',
    category: 'Mobile Applications',
    status: 'Coming Soon / Add Project Details',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'Firebase', 'Solidity', 'Ethers.js', 'PostgreSQL'],
    teamMembers: ['Ahmad Shehzad', 'Muhammad Sameer Ali', 'Asad Abdullah'],
    contributions: [
      {
        memberName: 'Ahmad Shehzad',
        memberSlug: 'ahmad-shehzad',
        role: 'Mobile Lead Engineer',
        contribution: 'Crafted the Flutter cross-platform mobile user interface, gesture handling, hardware biometric auth, and 60fps smooth animations.'
      },
      {
        memberName: 'Muhammad Sameer Ali',
        memberSlug: 'muhammad-sameer-ali',
        role: 'Backend Services Specialist',
        contribution: 'Engineered secure socket streams for instant price feeds, asynchronous notification workers, and PostgreSQL database migrations.'
      },
      {
        memberName: 'Asad Abdullah',
        memberSlug: 'asad-abdullah',
        role: 'Web3 & Security Specialist',
        contribution: 'Integrated Ethers.js transaction serialization, non-custodial key derivation flows, and decentralized node fallbacks.'
      }
    ],
    problem: 'Mobile users frequently struggle with complex Web3 interfaces, sluggish mobile performance, and insecure credential management.',
    solution: 'Designed an elegant, intuitive Flutter mobile client that simplifies complex decentralized operations into one-tap biometric confirmations backed by robust microservices.',
    features: [
      '60 FPS cross-platform mobile client with tactile feedback and dark theme',
      'Real-time price feed synchronization via lightweight WebSockets',
      'Biometric authentication (FaceID & Fingerprint) security layers',
      'Multi-chain asset tracking and seamless transaction signing'
    ],
    githubUrl: '',
    liveUrl: '',
    screenshots: [
      {
        title: 'Mobile Wallet Overview',
        caption: 'Clean asset distribution overview with interactive portfolio charts.',
        placeholderType: 'mobile'
      },
      {
        title: 'Biometric Confirmation Screen',
        caption: 'Hardware-level authentication flow securing outgoing blockchain transactions.',
        placeholderType: 'mobile'
      },
      {
        title: 'Real-Time Telemetry Feed',
        caption: 'Low-overhead WebSocket data streaming component for dynamic market rates.',
        placeholderType: 'dashboard'
      }
    ]
  },
  {
    id: 'project-03',
    slug: 'project-03-enterprise-ai-workflow-suite',
    title: 'Enterprise AI Workflow Orchestrator & Mobile Companion',
    shortDescription: 'Scalable full-stack SaaS platform orchestrating AI models, scheduled background processing, and a companion cross-platform mobile control app.',
    description: 'A comprehensive full-stack ecosystem built to streamline complex automated data processing workflows, automated code analysis, and mobile remote control for engineering teams.',
    category: 'AI Solutions',
    status: 'Coming Soon / Add Project Details',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Next.js', 'Node.js', 'Flutter', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Firebase'],
    teamMembers: ['Adan Ghafoor', 'Ahmad Shehzad'],
    contributions: [
      {
        memberName: 'Adan Ghafoor',
        memberSlug: 'adan-ghafoor',
        role: 'Full Stack Engineering Lead',
        contribution: 'Architected the core web dashboard, AI pipeline connectors, drag-and-drop workflow canvas, and MongoDB data persistence.'
      },
      {
        memberName: 'Ahmad Shehzad',
        memberSlug: 'ahmad-shehzad',
        role: 'Mobile Companion Developer',
        contribution: 'Developed the mobile monitoring client with Firebase push notifications, status badges, and remote execution triggers.'
      }
    ],
    problem: 'Enterprise automation tools often lack unified interfaces, requiring fragmented web tools and separate mobile notification systems.',
    solution: 'Created an all-in-one platform connecting web orchestration canvas with live mobile companion triggers for seamless team collaboration.',
    features: [
      'Visual drag-and-drop pipeline configuration with instant validation',
      'Sub-second push notifications delivered to mobile team members',
      'Dynamic schema execution engine powered by Node.js and MongoDB',
      'Modern glassmorphism UI with keyboard shortcuts and responsive layouts'
    ],
    githubUrl: '',
    liveUrl: '',
    screenshots: [
      {
        title: 'Interactive Pipeline Canvas',
        caption: 'Drag-and-drop workflow orchestrator with node dependency resolution.',
        placeholderType: 'web'
      },
      {
        title: 'Mobile Execution Console',
        caption: 'Companion mobile app for monitoring background jobs and triggering workflows on the go.',
        placeholderType: 'mobile'
      },
      {
        title: 'Audit & Telemetry Logs',
        caption: 'High-density execution traces and performance bottlenecks analyzer.',
        placeholderType: 'code'
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
};

export const getProjectsForMember = (memberSlug: string): Project[] => {
  return projects.filter((p) =>
    p.contributions.some((c) => c.memberSlug.toLowerCase() === memberSlug.toLowerCase())
  );
};
