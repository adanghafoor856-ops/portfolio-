import React from 'react';
import { EarthOrbitHero } from '../components/home/EarthOrbitHero';
import { About } from '../components/home/About';
import { TeamPreview } from '../components/home/TeamPreview';
import { Expertise } from '../components/home/Expertise';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { TechnologyStack } from '../components/home/TechnologyStack';
import { WhyOurTeam } from '../components/home/WhyOurTeam';
import { Process } from '../components/home/Process';
import { GitHubPreview } from '../components/home/GitHubPreview';
import { ContactCTA } from '../components/home/ContactCTA';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      <EarthOrbitHero onNavigate={onNavigate} />
      <About />
      <TeamPreview onNavigate={onNavigate} />
      <Expertise onNavigate={onNavigate} />
      <FeaturedProjects onNavigate={onNavigate} />
      <TechnologyStack onNavigate={onNavigate} />
      <WhyOurTeam />
      <Process />
      <GitHubPreview onNavigate={onNavigate} />
      <ContactCTA onNavigate={onNavigate} />
    </div>
  );
};
