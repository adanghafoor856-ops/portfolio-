import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { MemberProfilePage } from './pages/MemberProfilePage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { GitHubPage } from './pages/GitHubPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('#')) {
      if (currentPath !== '/') {
        // Switch to home first, then scroll
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(path);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching
  const renderCurrentRoute = () => {
    // Check dynamic routes
    if (currentPath.startsWith('/team/')) {
      const slug = currentPath.replace('/team/', '');
      return <MemberProfilePage slug={slug} onNavigate={navigate} />;
    }

    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }

    switch (currentPath) {
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/team':
        return <TeamPage onNavigate={navigate} />;
      case '/expertise':
        return <ExpertisePage onNavigate={navigate} />;
      case '/projects':
        return <ProjectsPage onNavigate={navigate} />;
      case '/technology':
        return <TechnologyPage onNavigate={navigate} />;
      case '/github':
        return <GitHubPage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Global Navbar */}
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {renderCurrentRoute()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
