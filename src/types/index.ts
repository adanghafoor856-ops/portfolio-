export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  title: string;
  shortBio: string;
  fullBio: string;
  image: string;
  initials: string;
  leadSpecialization: string;
  specializations: string[];
  skills: string[];
  categorizedSkills: {
    category: string;
    skills: string[];
  }[];
  github: string;
  githubUsername: string;
  linkedin: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  projects: string[];
  accentColor: string;
}

export interface ProjectContribution {
  memberName: string;
  memberSlug: string;
  role: string;
  contribution: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: 'Web Applications' | 'Backend Systems' | 'Mobile Applications' | 'Blockchain' | 'AI Solutions';
  status: string;
  image: string;
  technologies: string[];
  teamMembers: string[];
  contributions: ProjectContribution[];
  problem?: string;
  solution?: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  screenshots: {
    title: string;
    caption: string;
    placeholderType: 'web' | 'mobile' | 'code' | 'dashboard' | 'blockchain';
  }[];
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'Blockchain' | 'Development Tools';
  description: string;
  iconName: string;
  popular?: boolean;
}

export interface ServiceExpertise {
  id: string;
  title: string;
  lead: string;
  leadSlug: string;
  description: string;
  technologies: string[];
  keyCapabilities: string[];
  iconName: string;
  accentGradient: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt?: string;
}
