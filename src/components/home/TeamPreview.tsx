import React from 'react';
import { motion } from 'motion/react';
import { Users, ArrowRight } from 'lucide-react';
import { teamMembers } from '../../data/team';
import { TeamCard } from '../team/TeamCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface TeamPreviewProps {
  onNavigate: (path: string) => void;
}

export const TeamPreview: React.FC<TeamPreviewProps> = ({ onNavigate }) => {
  return (
    <section id="team" className="py-20 sm:py-24 relative overflow-hidden bg-white">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR ENGINEERING TEAM"
          title="Meet Aureon Technologies"
          subtitle="Four specialized software engineers on our team uniting full stack development, backend infrastructure, mobile engineering, and decentralized blockchain architecture."
        />

        {/* 4 Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              onNavigate={onNavigate}
              index={index}
            />
          ))}
        </div>

        {/* Bottom prompt to full team page */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => onNavigate('/team')}
          >
            Explore Complete Team Profiles & Specializations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

