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

      {/* Subtle Ambient Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />

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

          {/* Right Visual Engineering Architecture Card (Clean, Light-themed, No dark box, No orbit) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-lg mx-auto"
            >
              {/* Clean White Architecture & Capabilities Card */}
              <div className="rounded-2xl p-5 sm:p-6 relative bg-white border border-slate-200 shadow-xl shadow-slate-200/70">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold font-mono text-sm">
                      A
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 font-mono tracking-wide">
                        AUREON ARCHITECTURE
                      </div>
                      <div className="text-[10px] text-slate-500 font-sans">
                        Engineering Collective Systems
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE READY
                  </span>
                </div>

                {/* 4 Core Pillars Grid (Organized cleanly, no floating orbits) */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Pillar 1: Full Stack Web */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                        <Code className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Web Engineering</div>
                        <div className="text-[10px] text-purple-700 font-mono font-semibold">React & Next.js</div>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Responsive single-page webapps & high-speed interfaces.
                    </p>
                  </div>

                  {/* Pillar 2: Scalable Backend */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Backend & APIs</div>
                        <div className="text-[10px] text-blue-700 font-mono font-semibold">Node.js & Cloud</div>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Robust microservices, database schemas & high throughput.
                    </p>
                  </div>

                  {/* Pillar 3: Cross-Platform Mobile */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Mobile Systems</div>
                        <div className="text-[10px] text-emerald-700 font-mono font-semibold">Flutter & Cross-Plat</div>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Native performance Android & iOS applications.
                    </p>
                  </div>

                  {/* Pillar 4: Blockchain & Web3 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Web3 & Smart Contracts</div>
                        <div className="text-[10px] text-amber-700 font-mono font-semibold">Solidity & EVM</div>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Audited contracts, decentralized finance & tokenomics.
                    </p>
                  </div>
                </div>

                {/* Architecture Highlights Footer */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600 font-mono text-[11px]">
                    <Shield className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Quality: <strong className="text-slate-900 font-bold">Production-Verified</strong></span>
                  </div>
                  <button
                    onClick={() => onNavigate('/team')}
                    className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                  >
                    View Engineering Leads →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

