import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Terminal, Users, Sparkles, Code2, Cpu, Globe, Rocket, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { teamMembers } from '../data/team';
import { TeamCard } from '../components/team/TeamCard';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const pillars = [
    {
      title: 'Multidisciplinary Collaboration',
      description: 'We do not believe in siloed engineering. Frontend, backend, mobile, and blockchain engineers collaborate closely from the first architectural sketch.',
      icon: Users,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      title: 'Precision & Type Safety',
      description: 'Strict typing with TypeScript, clean RESTful standards, auditable smart contract rules, and resilient test patterns guide our day-to-day work.',
      icon: Code2,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      title: 'Continuous Velocity & Scaling',
      description: 'We build systems capable of evolving from initial MVP launch to high-traffic production workloads without architectural rewrites.',
      icon: Rocket,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    }
  ];

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
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            WHO WE ARE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Behind the Code. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
              Beyond the Ordinary.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Aureon Technologies is a collaborative group of passionate software engineers with diverse technical expertise. We believe great software is built through strong collaboration, thoughtful problem-solving, and continuous learning.
          </motion.p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-2xl p-8 sm:p-10 bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-4">
                <Terminal className="w-4 h-4 text-indigo-600" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Bridging Imaginative Concepts with Resilient Engineering
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                In a digital landscape filled with generic templates and fragile prototypes, Aureon Technologies was founded to provide end-to-end engineering excellence. We combine deep specializations across web, backend, mobile, and Web3 architectures into a single cohesive unit.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether partnering with early-stage startups to build their core platform or collaborating with established tech organizations to engineer scalable modules, we approach every challenge with craftsmanship and transparency.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-mono">
              <span className="text-indigo-700 font-bold">• 4 Core Specialists</span>
              <span className="text-purple-700 font-bold">• 100% Production Mindset</span>
              <span className="text-emerald-700 font-bold">• Modern Toolchains</span>
            </div>
          </motion.div>

          {/* Quick Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            <div className="rounded-2xl p-6 bg-white border border-purple-200 shadow-xs">
              <div className="text-3xl font-extrabold font-mono text-purple-700 mb-1">04</div>
              <div className="text-sm font-bold text-slate-900">Software Engineers</div>
              <p className="text-xs text-slate-600 mt-1">Full Stack, Backend, Mobile, Blockchain</p>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-indigo-200 shadow-xs">
              <div className="text-3xl font-extrabold font-mono text-indigo-700 mb-1">04</div>
              <div className="text-sm font-bold text-slate-900">Core Specializations</div>
              <p className="text-xs text-slate-600 mt-1">Web Applications, Microservices, Mobile Apps, Smart Contracts</p>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-blue-200 shadow-xs sm:col-span-2 lg:col-span-1">
              <div className="text-xl font-extrabold font-mono text-blue-700 mb-1">Modern Stack</div>
              <div className="text-sm font-bold text-slate-900">End-to-End Technology Stack</div>
              <p className="text-xs text-slate-600 mt-1">React, Next.js, Node.js, Flutter, Solidity, PostgreSQL</p>
            </div>
          </motion.div>
        </div>

        {/* Engineering Pillars */}
        <div className="mb-20">
          <SectionHeading
            badge="OUR PRINCIPLES"
            title="How We Deliver Excellence"
            subtitle="The fundamental tenets guiding every line of code written by Aureon Technologies engineers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl p-7 bg-white border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors"
                >
                  <div className={`p-3 rounded-xl border w-fit mb-4 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Section on About Page */}
        <div className="mb-20">
          <SectionHeading
            badge="THE ENGINEERS"
            title="Meet The Team Members"
            subtitle="Explore each software engineer's background and core proficiencies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                onNavigate={onNavigate}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => onNavigate('/contact')}
          >
            Start a Project with Aureon Technologies
          </Button>
        </div>
      </div>
    </div>
  );
};

