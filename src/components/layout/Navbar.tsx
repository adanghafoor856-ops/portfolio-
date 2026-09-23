import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Code2, Sparkles, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Team', path: '/team' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Projects', path: '/projects' },
    { label: 'Technology', path: '/technology' },
    { label: 'GitHub', path: '/github' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-200/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none min-w-0"
          >
            {/* Minimal futuristic "A" icon */}
            <div className="relative shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1.5px] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono font-extrabold text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-br from-purple-700 via-indigo-600 to-cyan-600">
                  A
                </span>
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="font-extrabold tracking-tight sm:tracking-wider text-sm xs:text-base sm:text-lg text-slate-900 font-mono group-hover:text-indigo-600 transition-colors truncate">
                  AUREON TECHNOLOGIES
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse shrink-0" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 -mt-0.5 hidden sm:inline">
                Beyond the Ordinary
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-slate-200/90 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full -z-10 shadow-sm shadow-indigo-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => handleLinkClick('/contact')}
            >
              Work With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm focus:outline-none flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 border-b border-slate-200 px-4 sm:px-6 py-4 overflow-y-auto max-h-[calc(100vh-5rem)] backdrop-blur-2xl shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-left min-h-[44px] ${
                      active
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/80 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-indigo-600" />}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={() => handleLinkClick('/contact')}
                >
                  Work With Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
