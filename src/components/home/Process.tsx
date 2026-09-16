import React from 'react';
import { motion } from 'motion/react';
import { Layers, Terminal, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      description: 'We map system specifications, entity-relationship diagrams, API contracts, and user flows before writing a single line of code.',
      icon: Layers,
      color: 'text-purple-600 border-purple-200 bg-purple-50'
    },
    {
      step: '02',
      title: 'Full-Stack Agile Sprints',
      description: 'Frontend interfaces, backend microservices, and mobile modules are built concurrently using type-safe contracts and Git branching.',
      icon: Terminal,
      color: 'text-indigo-600 border-indigo-200 bg-indigo-50'
    },
    {
      step: '03',
      title: 'Security & Quality Testing',
      description: 'Comprehensive unit tests, integration benchmarks, smart contract verification, and accessibility audits.',
      icon: ShieldCheck,
      color: 'text-blue-600 border-blue-200 bg-blue-50'
    },
    {
      step: '04',
      title: 'Deployment & Scaling',
      description: 'Production deployment with CI/CD automation, cloud scaling, telemetry tracking, and comprehensive documentation handoff.',
      icon: Rocket,
      color: 'text-emerald-600 border-emerald-200 bg-emerald-50'
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-[#f8fafc]">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="HOW WE OPERATE"
          title="Development Process"
          subtitle="From initial concept to deployment, our structured four-phase engineering methodology ensures quality and delivery velocity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm relative group hover:border-indigo-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Step number badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono font-extrabold text-sm text-slate-400 group-hover:text-indigo-600 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

