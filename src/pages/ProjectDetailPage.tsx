import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Users,
  Sparkles,
  Layers,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Image as ImageIcon,
  ArrowRight,
  Code2
} from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import { Button } from '../components/ui/Button';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center max-w-lg mx-auto px-4 bg-[#f8fafc]">
        <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Project Not Found</h2>
          <p className="text-slate-600 text-sm mb-6">
            The requested project specification could not be found.
          </p>
          <Button
            variant="primary"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
            onClick={() => onNavigate('/projects')}
          >
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </button>
        </div>

        {/* HERO SECTION */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white border border-slate-200/90 mb-14 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 border border-purple-200 text-purple-700">
                  {project.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Action Buttons (Only shown if URLs exist) */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-sm font-bold transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-900" />
                    <span>GitHub Repository</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}

                <Button
                  variant="secondary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={() => onNavigate('/contact')}
                >
                  Discuss Similar Project
                </Button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-slate-100 border border-slate-200 shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* THE PROBLEM & OUR SOLUTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* The Problem */}
          <div className="rounded-2xl p-7 sm:p-8 bg-rose-50/60 border border-rose-200 relative overflow-hidden shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-rose-100 border border-rose-200 text-rose-700">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">The Engineering Challenge</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.problem || 'Complex distributed data workflows required synchronization between multiple client interfaces, robust access control, and low-latency response times.'}
            </p>
          </div>

          {/* Our Solution */}
          <div className="rounded-2xl p-7 sm:p-8 bg-emerald-50/60 border border-emerald-200 relative overflow-hidden shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Vertex Technologies&apos; Solution</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.solution || 'Engineered a unified hybrid architecture with modular microservices, clean responsive UI design, and strict type-safe contracts across the entire stack.'}
            </p>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
              CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Key Architectural Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-mono font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY STACK */}
        <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider">
              STACK BREAKDOWN
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Technologies & Frameworks Utilized
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-semibold hover:border-indigo-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* TEAM CONTRIBUTIONS MATRIX */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
              MULTIDISCIPLINARY EXECUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Vertex Technologies Member Contributions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear breakdown of individual roles and technical modules delivered for this project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.contributions.map((item, cIdx) => (
              <div
                key={cIdx}
                className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <button
                      onClick={() => onNavigate(`/team/${item.memberSlug}`)}
                      className="text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors text-left cursor-pointer"
                    >
                      {item.memberName}
                    </button>
                    <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      Active Lead
                    </span>
                  </div>
                  <div className="text-xs font-mono font-bold text-purple-700 mb-3">{item.role}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.contribution}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate(`/team/${item.memberSlug}`)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 group cursor-pointer"
                  >
                    <span>View Engineer Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECT GALLERY */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider">
              VISUAL REPOSITORIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Project Architecture Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.screenshots.map((shot, sIdx) => (
              <div
                key={sIdx}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col"
              >
                <div className="aspect-video bg-slate-50 p-6 flex flex-col items-center justify-center relative border-b border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-3">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-600">
                    Interactive Preview Placeholder
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{shot.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{shot.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center pt-6">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => onNavigate('/contact')}
          >
            Inquire About Custom Engineering with Vertex Technologies
          </Button>
        </div>
      </div>
    </div>
  );
};

