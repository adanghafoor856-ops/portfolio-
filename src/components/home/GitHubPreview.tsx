import React from 'react';
import { motion } from 'motion/react';
import { Github, ArrowRight, GitFork, Star, Code2, Terminal, Users } from 'lucide-react';
import { teamMembers } from '../../data/team';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface GitHubPreviewProps {
  onNavigate: (path: string) => void;
}

export const GitHubPreview: React.FC<GitHubPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OPEN SOURCE & REPOSITORIES"
          title="Explore Our Code"
          subtitle="Inspect our team's code patterns, collaborative repositories, and technical contributions across modern programming ecosystems."
        />

        {/* 4 Member GitHub Preview Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => onNavigate('/github')}
              className="rounded-2xl p-6 bg-slate-50/70 border border-slate-200/90 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-indigo-600 group-hover:border-indigo-300 transition-colors shadow-2xs">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200/80 font-bold">
                  {member.leadSpecialization.split(' ')[0]}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {member.name}
              </h4>
              <p className="text-xs font-mono text-slate-500 mt-1 truncate">
                @{member.githubUsername}
              </p>

              <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600">
                <span className="text-[11px] text-purple-700 font-mono font-medium">
                  {member.skills[0]} • {member.skills[1]}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-indigo-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => onNavigate('/github')}
          >
            View GitHub Repository Matrix & Profiles
          </Button>
        </div>
      </div>
    </section>
  );
};
