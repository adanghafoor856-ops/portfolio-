import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Terminal } from 'lucide-react';
import { TechnologyStack } from '../components/home/TechnologyStack';
import { Button } from '../components/ui/Button';

interface TechnologyPageProps {
  onNavigate: (path: string) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            ENGINEERING TOOLCHAINS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Technology <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
              Stack & Arsenal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            A comprehensive overview of the programming languages, frontend libraries, backend runtimes, database engines, mobile frameworks, and decentralized protocols powering Aureon Technologies&apos; digital solutions.
          </motion.p>
        </div>

        {/* Interactive Technology Component */}
        <TechnologyStack onNavigate={onNavigate} showAllInitially={true} />

        {/* Production Standards Box */}
        <div className="mt-16 rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700">
                <Terminal className="w-4 h-4 text-indigo-600" />
                <span>Modern Tooling Standards</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Zero Legacy Overhead. Built for Modern Workloads.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Aureon Technologies continuously evaluates emerging tools, ensuring every technology in our stack is mature, performant, community-backed, and optimized for rapid product delivery without sacrificing security.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => onNavigate('/contact')}
              >
                Consult on Tech Strategy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

