import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderKanban, Search, Sparkles, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionHeading } from '../components/ui/SectionHeading';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Web Applications',
    'Backend Systems',
    'Mobile Applications',
    'Blockchain',
    'AI Solutions'
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 mb-4"
          >
            <FolderKanban className="w-3.5 h-3.5 text-indigo-600" />
            ENGINEERING ARCHITECTURE SHOWCASE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Selected <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
              Work & Systems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Explore our multidisciplinary projects. Each architectural system highlights collaborative contributions across frontend, backend microservices, mobile UX, and Web3 security.
          </motion.p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex items-center flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20 border border-indigo-500'
                      : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Project Grid */}
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
          <div className="text-center py-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <FolderKanban className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No projects found</h3>
            <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or selecting another category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

