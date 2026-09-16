import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, ExternalLink, Users, Sparkles, Layers } from 'lucide-react';
import { Project } from '../../types';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  project: Project;
  onNavigate: (path: string) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onNavigate, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Project Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/95 backdrop-blur-md text-indigo-800 border border-indigo-200 shadow-xs">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-100/95 backdrop-blur-md text-purple-900 border border-purple-300 shadow-xs">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors mb-2 line-clamp-1">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 font-mono font-semibold"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono font-bold">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Team Members */}
          <div className="flex items-center gap-2 mb-5 text-xs text-slate-600 font-mono bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <Users className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="truncate font-medium">{project.teamMembers.join(' • ')}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-indigo-400 hover:bg-indigo-50/50 transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            ) : null}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-indigo-400 hover:bg-indigo-50/50 transition-colors"
                title="View Live Application"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}
          </div>

          <Button
            variant="secondary"
            size="sm"
            className="flex-1 text-xs font-bold hover:border-indigo-400 justify-between group-hover:bg-indigo-50/50 min-h-[38px]"
            icon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />}
            onClick={() => onNavigate(`/projects/${project.slug}`)}
          >
            <span>View Details</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

