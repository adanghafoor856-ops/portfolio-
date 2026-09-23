import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Users2, Zap, GitFork, Lock, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const WhyOurTeam: React.FC = () => {
  const points = [
    {
      title: 'Multidisciplinary Synergy',
      description: 'Zero handover friction. Web, backend, mobile, and blockchain engineers collaborate within a single agile workflow.',
      icon: Users2,
      accent: 'border-purple-200 text-purple-600 bg-purple-50'
    },
    {
      title: 'Architectural Rigor',
      description: 'We prioritize clean schemas, strict TypeScript types, low latency query paths, and modular maintainability from day one.',
      icon: Cpu,
      accent: 'border-indigo-200 text-indigo-600 bg-indigo-50'
    },
    {
      title: 'Security-First Development',
      description: 'Role-based access, cryptographic proofs, token authorization safeguards, and auditable code standards built into every layer.',
      icon: Lock,
      accent: 'border-blue-200 text-blue-600 bg-blue-50'
    },
    {
      title: 'Continuous Velocity',
      description: 'Rapid prototyping backed by production-grade foundations ready for enterprise client demos, VC pitches, and real user scaling.',
      icon: Zap,
      accent: 'border-amber-200 text-amber-600 bg-amber-50'
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-50/60 border-y border-slate-200/80">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="WHY CHOOSE OUR TEAM"
          title="Engineering Standards You Can Trust"
          subtitle="Why software companies, startups, and forward-thinking teams partner with our team at Aureon Technologies for mission-critical software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${point.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
