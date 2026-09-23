import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Users, Sparkles, Terminal, Code, Cpu, Smartphone, Layers, CheckCircle2, Shield, Flame, Laptop } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const animatedTexts = [
    'Web Applications',
    'Scalable Backend Systems',
    'Cross-Platform Mobile Apps',
    'Blockchain & Web3 Solutions'
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#f8fafc]">
      {/* Background Matrix & Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none opacity-70" />

      {/* Atmospheric Accent Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-purple-300/40 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-1/4 translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-300/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 mb-6 shadow-xs max-w-full flex-wrap"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span className="font-extrabold tracking-wider truncate">AUREON TECHNOLOGIES</span>
              <span className="text-indigo-300 hidden xs:inline">•</span>
              <span className="text-slate-700 font-medium hidden xs:inline">Software Engineering Collective</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] mb-4"
            >
              We Engineer What <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
                Others Imagine.
              </span>
            </motion.h1>

            {/* Animated Dynamic Focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-h-10 sm:min-h-12 flex items-center justify-center lg:justify-start mb-6 font-mono text-base xs:text-lg sm:text-2xl flex-wrap"
            >
              <span className="text-slate-500 mr-2 font-medium">Specialized in</span>
              <div className="relative inline-block overflow-hidden py-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-block font-extrabold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent border-b-2 border-indigo-500/40 pb-0.5"
                  >
                    {animatedTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Professional Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal"
            >
              Aureon Technologies is a specialized software engineering collective dedicated to crafting reliable, scalable, and modern digital applications. We unite full stack development, high-throughput backend APIs, fluid mobile interfaces, and secure smart contracts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => onNavigate('/projects')}
              >
                Explore Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={<Users className="w-4 h-4" />}
                iconPosition="left"
                onClick={() => onNavigate('/team')}
              >
                Meet The Engineers
              </Button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-700 font-mono"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="font-semibold text-slate-800">4 Domain Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="font-semibold text-slate-800">Production Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">Direct Contact Ready</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Architecture & Floating Code Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0 w-full">
            {/* Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto"
            >
              {/* Central Abstract Architecture Card */}
              <div className="rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-2xl border border-slate-800 bg-[#0f172a]">
                {/* Window header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-1 sm:ml-2 text-slate-300 font-bold text-[11px] sm:text-xs truncate">aureon_engine.ts</span>
                  </div>
                  <span className="text-[10px] text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-700/50 font-bold tracking-wider shrink-0">
                    ● ACTIVE
                  </span>
                </div>

                {/* Architecture code visualization */}
                <div className="mt-3 sm:mt-4 font-mono text-[11px] sm:text-xs space-y-1.5 sm:space-y-2 text-slate-100 overflow-x-auto">
                  <div>
                    <span className="text-purple-400 font-bold">interface</span> <span className="text-cyan-300 font-bold">AureonStack</span> {'{'}
                  </div>
                  <div className="pl-3 sm:pl-4 text-slate-300">
                    frontend: <span className="text-emerald-300 font-semibold">'React'</span> | <span className="text-emerald-300 font-semibold">'Next.js'</span>;
                  </div>
                  <div className="pl-3 sm:pl-4 text-slate-300">
                    backend: <span className="text-emerald-300 font-semibold">'Node.js'</span> | <span className="text-emerald-300 font-semibold">'Express'</span>;
                  </div>
                  <div className="pl-3 sm:pl-4 text-slate-300">
                    mobile: <span className="text-emerald-300 font-semibold">'Flutter'</span> | <span className="text-emerald-300 font-semibold">'React Native'</span>;
                  </div>
                  <div className="pl-3 sm:pl-4 text-slate-300">
                    blockchain: <span className="text-emerald-300 font-semibold">'Solidity'</span> | <span className="text-emerald-300 font-semibold">'EVM'</span>;
                  </div>
                  <div className="pl-3 sm:pl-4 text-amber-300 font-semibold">
                    quality: <span className="text-cyan-300">"Production-Verified"</span>;
                  </div>
                  <div className="text-purple-400 font-bold">{'}'}</div>
                </div>

                {/* Interactive Status Indicator */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300">
                    <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
                    <span>status: <span className="text-emerald-400 font-mono font-bold">ready_for_build</span></span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-slate-300 font-semibold">
                    <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
                    <span>Aureon Technologies</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill 1 - Web & React */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 sm:-top-5 left-1 sm:-left-4 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 border border-purple-200 bg-white/95 backdrop-blur-md shadow-lg shadow-purple-500/10"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200 shrink-0">
                  <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Full Stack</div>
                  <div className="text-[9px] sm:text-[10px] text-purple-700 font-mono font-semibold">Next.js & React</div>
                </div>
              </motion.div>

              {/* Floating Pill 2 - Backend & Node */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 sm:-bottom-6 right-1 sm:-right-4 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 border border-blue-200 bg-white/95 backdrop-blur-md shadow-lg shadow-blue-500/10"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200 shrink-0">
                  <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Backend Lead</div>
                  <div className="text-[9px] sm:text-[10px] text-blue-700 font-mono font-semibold">Node.js & APIs</div>
                </div>
              </motion.div>

              {/* Floating Pill 3 - Mobile Flutter */}
              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-8 rounded-xl px-3 py-2 hidden sm:flex items-center gap-2.5 border border-emerald-200 bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-500/10"
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-mono font-bold text-slate-800">Flutter • Mobile</span>
              </motion.div>

              {/* Floating Pill 4 - Blockchain */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-4 left-4 rounded-xl px-3 py-2 hidden sm:flex items-center gap-2.5 border border-amber-200 bg-white/95 backdrop-blur-md shadow-lg shadow-amber-500/10"
              >
                <Layers className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-mono font-bold text-slate-800">Solidity • Web3</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

