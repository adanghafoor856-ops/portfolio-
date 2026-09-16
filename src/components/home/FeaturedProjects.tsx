import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, FolderKanban, Sparkles } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../projects/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface FeaturedProjectsProps {
  onNavigate: (path: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Applications',
    'Backend Systems',
    'Mobile Applications',
    'Blockchain',
    'AI Solutions'
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden bg-white">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PORTFOLIO HIGHLIGHTS"
          title="Selected Projects"
          subtitle="A showcase of architectural systems and applications designed for performance, modularity, and cross-platform reliability."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20 border border-indigo-500'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onNavigate={onNavigate}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <FolderKanban className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No projects in this category yet</h3>
            <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
              Our team at Vertex Technologies is actively engineering new solutions. Check back soon or switch categories.
            </p>
          </div>
        )}

        {/* Explore All CTA */}
        <div className="mt-14 text-center">
          <Button
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => onNavigate('/projects')}
          >
            Explore Complete Project Architecture & Specifications
          </Button>
        </div>
      </div>
    </section>
  );
};

