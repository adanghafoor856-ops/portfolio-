import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Heart, Sparkles, Terminal } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-white border-t border-slate-200/90 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-indigo-50/50 via-slate-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center p-[1px] shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-mono font-bold text-indigo-700 text-base">
                  A
                </div>
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-wider text-slate-900 font-mono">
                AUREON TECHNOLOGIES
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Building Digital Solutions Beyond the Ordinary. A collaborative software engineering team creating resilient web, backend, mobile, and blockchain systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Aureon Technologies GitHub"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-indigo-500/50 hover:bg-slate-100 transition-all shadow-xs"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Aureon Technologies LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-blue-500/50 hover:bg-slate-100 transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('/contact')}
                aria-label="Email Aureon Technologies"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-purple-500/50 hover:bg-slate-100 transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  About Aureon Technologies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/team')}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Engineering Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/expertise')}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Core Expertise
                </button>
              </li>
            </ul>
          </div>

          {/* Portfolio & Tech */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/projects')}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Selected Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/technology')}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Technology Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/github')}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  GitHub Code Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Contact & Hire
                </button>
              </li>
            </ul>
          </div>

          {/* Team Members Direct Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-4">
              Engineers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/team/adan-ghafoor')}
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                >
                  <span>Adan Ghafoor</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/team/muhammad-sameer-ali')}
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                >
                  <span>Muhammad Sameer Ali</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/team/ahmad-shehzad')}
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                >
                  <span>Ahmad Shehzad</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/team/asad-abdullah')}
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                >
                  <span>Asad Abdullah</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Aureon Technologies. Built with code, creativity, and innovation.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for collaborations</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
