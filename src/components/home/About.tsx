import React from 'react';
import { motion } from 'motion/react';
import { Users, Layers, Cpu, Sparkles, ShieldCheck, Terminal } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  const stats = [
    {
      value: '04',
      label: 'Software Engineers',
      subtext: 'Dedicated specialists in active collaboration',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    },
    {
      value: '04',
      label: 'Core Specializations',
      subtext: 'Full Stack, Backend, Mobile, Blockchain',
      icon: Layers,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200'
    },
    {
      value: 'Web • Mobile • Cloud',
      label: 'End-to-End Coverage',
      subtext: 'Web, Server Architecture, Mobile, EVM Web3',
      icon: Cpu,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      value: 'Modern',
      label: 'Technology Stack',
      subtext: 'React, Next.js, Node, Flutter, Solidity',
      icon: Sparkles,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden bg-white">
      {/* Subtle divider gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ABOUT OUR TEAM"
          title="Behind the Code. Beyond the Ordinary."
          subtitle="Our team at Aureon Technologies is a collaborative group of passionate software engineers with diverse technical expertise. We believe great software is built through strong collaboration, thoughtful problem-solving, and continuous learning."
        />

        {/* Animated Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-6 border ${item.border} bg-slate-50/80 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Background glow spot */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className={`p-2.5 rounded-xl ${item.bg} border ${item.border} ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">0{index + 1}</span>
                </div>

                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-mono mb-1 ${item.color}`}>
                  {item.value}
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Philosophy Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 rounded-2xl p-8 sm:p-10 border border-slate-200 bg-slate-50/60 shadow-xs relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-700 font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-indigo-600" />
                <span>Our Engineering Culture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Engineered for Reliability, Built for Modern Demands
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than working in isolation, our team operates as a synchronized engineering unit. From initial system modeling to full-stack frontend integration and production deployments, each member anchors a critical dimension of modern software engineering at Aureon Technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Modular & Type-Safe Architecture</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="font-medium">Clean Code & Continuous Improvement</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="font-medium">Agile Multi-Platform Delivery</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
