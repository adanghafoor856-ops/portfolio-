import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Server,
  Database,
  Smartphone,
  ShieldCheck,
  Wrench,
  Sparkles,
  Search,
  Check
} from 'lucide-react';
import { technologies } from '../../data/technologies';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface TechnologyStackProps {
  onNavigate?: (path: string) => void;
  showAllInitially?: boolean;
}

export const TechnologyStack: React.FC<TechnologyStackProps> = ({
  onNavigate,
  showAllInitially = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { label: 'All', icon: Sparkles },
    { label: 'Frontend', icon: Code2 },
    { label: 'Backend', icon: Server },
    { label: 'Database', icon: Database },
    { label: 'Mobile', icon: Smartphone },
    { label: 'Blockchain', icon: ShieldCheck },
    { label: 'Development Tools', icon: Wrench }
  ];

  const filteredTechnologies = technologies.filter((tech) => {
    const matchesCategory =
      selectedCategory === 'All' || tech.category === selectedCategory;
    const matchesSearch =
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'text-purple-800 border-purple-300 bg-purple-100';
      case 'Backend':
        return 'text-blue-800 border-blue-300 bg-blue-100';
      case 'Database':
        return 'text-emerald-800 border-emerald-300 bg-emerald-100';
      case 'Mobile':
        return 'text-teal-800 border-teal-300 bg-teal-100';
      case 'Blockchain':
        return 'text-amber-800 border-amber-300 bg-amber-100';
      case 'Development Tools':
        return 'text-indigo-800 border-indigo-300 bg-indigo-100';
      default:
        return 'text-slate-800 border-slate-300 bg-slate-100';
    }
  };

  return (
    <section id="technology" className="py-20 sm:py-24 relative overflow-hidden bg-white">
      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECH ARSENAL"
          title="Interactive Technology Stack"
          subtitle="Battle-tested technologies, modern frameworks, and robust developer tools powering Vertex Technologies' digital infrastructure."
        />

        {/* Filter Toolbar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories Pills */}
          <div className="flex items-center flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20 border border-indigo-500'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono transition-all"
            />
          </div>
        </div>

        {/* Grid of Technology Cards */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
          <AnimatePresence>
            {filteredTechnologies.map((tech, index) => {
              const colorClasses = getCategoryColor(tech.category);
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-3 sm:p-4 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/10 cursor-default"
                >
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${colorClasses}`}
                    >
                      {tech.category.split(' ')[0]}
                    </span>
                    {tech.popular && (
                      <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" title="Core Specialty" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-mono mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-600 text-xs">
            No technologies found matching &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </section>
  );
};

