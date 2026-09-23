import React from 'react';
import { motion } from 'motion/react';
import { Users, Sparkles, ArrowRight, ShieldCheck, Code2 } from 'lucide-react';
import { teamMembers } from '../data/team';
import { TeamCard } from '../components/team/TeamCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

interface TeamPageProps {
  onNavigate: (path: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 mb-4"
          >
            <Users className="w-3.5 h-3.5 text-indigo-600" />
            THE ENGINEERING COLLECTIVE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Meet Our <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
              Aureon Technologies Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Four dedicated software engineers bringing together expertise in full stack web development, scalable backend architecture, cross-platform mobile apps, and decentralized blockchain systems.
          </motion.p>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              onNavigate={onNavigate}
              index={index}
            />
          ))}
        </div>

        {/* Team Synergy Banner */}
        <div className="rounded-2xl p-8 sm:p-10 bg-white border border-slate-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
                Cross-Functional Execution
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How We Collaborate on Client & Startup Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you collaborate with our team at Aureon Technologies, you gain access to an integrated team structure. Whether you need a standalone mobile application, a hardened server-side microservice, an enterprise web application, or a decentralized smart contract system, our engineers sync daily to deliver seamless results.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => onNavigate('/contact')}
              >
                Work With Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

