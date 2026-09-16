import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Server, Smartphone, Boxes, ArrowRight, CheckCircle2, UserCheck, Shield, Sparkles } from 'lucide-react';
import { services } from '../data/services';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

interface ExpertisePageProps {
  onNavigate: (path: string) => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-8 h-8 text-purple-600" />;
      case 'Server':
        return <Server className="w-8 h-8 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-emerald-600" />;
      case 'Boxes':
        return <Boxes className="w-8 h-8 text-amber-600" />;
      default:
        return <LayoutGrid className="w-8 h-8 text-indigo-600" />;
    }
  };

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
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            ENGINEERING DOMAINS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Our Core <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
              Technical Expertise
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            We organize our capabilities across four core disciplines, each led by dedicated software engineers committed to reliability, modularity, and modern architecture.
          </motion.p>
        </div>

        {/* 4 Deep Expertise Modules */}
        <div className="space-y-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${service.accentGradient} opacity-10 rounded-bl-full pointer-events-none`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Overview */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                      {getIcon(service.iconName)}
                    </div>
                    <button
                      onClick={() => onNavigate(`/team/${service.leadSlug}`)}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 border border-indigo-200 text-indigo-800 hover:bg-indigo-100 transition-colors cursor-pointer"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Domain Lead: <strong className="text-indigo-900 font-bold">{service.lead}</strong></span>
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Capabilities Bullet Points */}
                  <div className="space-y-2.5 pt-2">
                    {service.keyCapabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Tech Box & Lead Button */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-purple-700 mb-3 font-bold">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                      onClick={() => onNavigate(`/team/${service.leadSlug}`)}
                    >
                      View {service.lead}&apos;s Profile
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                      onClick={() => onNavigate('/contact')}
                    >
                      Request Architecture Proposal
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

