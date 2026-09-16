import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Server, Smartphone, Boxes, ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface ExpertiseProps {
  onNavigate: (path: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-purple-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-600" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-amber-600" />;
      default:
        return <LayoutGrid className="w-6 h-6 text-indigo-600" />;
    }
  };

  const getBorderColor = (id: string) => {
    switch (id) {
      case 'full-stack':
        return 'hover:border-purple-400 hover:shadow-purple-500/10';
      case 'backend':
        return 'hover:border-blue-400 hover:shadow-blue-500/10';
      case 'mobile':
        return 'hover:border-emerald-400 hover:shadow-emerald-500/10';
      case 'blockchain':
        return 'hover:border-amber-400 hover:shadow-amber-500/10';
      default:
        return 'hover:border-indigo-400 hover:shadow-indigo-500/10';
    }
  };

  return (
    <section id="expertise" className="py-20 sm:py-24 relative overflow-hidden bg-[#f8fafc]">
      {/* Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECHNICAL MASTERY"
          title="Core Engineering Capabilities"
          subtitle="Focused engineering practices led by dedicated domain specialists, ensuring architectural depth and reliable execution across every stack."
        />

        {/* 4 Large Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-7 sm:p-8 bg-white border border-slate-200/90 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden group flex flex-col justify-between ${getBorderColor(
                service.id
              )}`}
            >
              {/* Subtle top-right ambient background */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${service.accentGradient} rounded-bl-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity`} />

              <div>
                {/* Header with Lead Tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    {getIcon(service.iconName)}
                  </div>

                  <button
                    onClick={() => onNavigate(`/team/${service.leadSlug}`)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 border border-indigo-200 text-indigo-800 hover:bg-indigo-100 hover:border-indigo-300 transition-colors cursor-pointer group/lead"
                  >
                    <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Lead: <strong className="text-indigo-900 font-bold">{service.lead}</strong></span>
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2.5 mb-6">
                  {service.keyCapabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies list & Action */}
              <div className="pt-6 border-t border-slate-200 mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                    Technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-mono font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => onNavigate(`/team/${service.leadSlug}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>View Lead Engineer & Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

