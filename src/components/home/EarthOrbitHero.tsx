import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Pause, Compass, Sun, Moon, Sparkles, Orbit, 
  ArrowDown, ChevronRight, Terminal, Shield, RefreshCw,
  Maximize2, Eye, Zap, Layers, Users, ExternalLink
} from 'lucide-react';
import { EarthOrbitCanvas, SOLVED_FRAMINGS } from './EarthOrbitCanvas';
import { Button } from '../ui/Button';

interface EarthOrbitHeroProps {
  onNavigate: (path: string) => void;
}

export const EarthOrbitHero: React.FC<EarthOrbitHeroProps> = ({ onNavigate }) => {
  // Orbital progress: 0.0 to 1.0
  const [progress, setProgress] = useState(0.0);
  const [activeFramingIndex, setActiveFramingIndex] = useState(0);
  
  // Auto-Loop (GIF-like continuous playback)
  const [isLooping, setIsLooping] = useState(true);
  const [loopDirection, setLoopDirection] = useState<1 | -1>(1);

  // User interactive scrubbing state
  const isInteractingRef = useRef(false);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0.0);
  progressRef.current = progress;

  // --- Auto-Loop (Continuous Orbit GIF Mode) ---
  useEffect(() => {
    if (!isLooping) return;

    let animId: number;
    let lastTime = performance.now();

    const loopStep = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Speed: completes full 4-framing cycle in ~18 seconds
      const speed = 0.055;

      if (!isInteractingRef.current) {
        setProgress((prev) => {
          let next = prev + delta * speed;
          if (next >= 1.0) {
            next = 0.0; // Continuous seamless loop
          }
          return next;
        });
      }

      animId = requestAnimationFrame(loopStep);
    };

    animId = requestAnimationFrame(loopStep);
    return () => cancelAnimationFrame(animId);
  }, [isLooping]);

  // --- Scroll-Driven Orbit Progress ---
  useEffect(() => {
    const handleScroll = () => {
      if (!heroContainerRef.current) return;
      const rect = heroContainerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // If user scrolls inside hero section
      if (rect.top <= 0 && rect.bottom >= windowH) {
        const totalScrollable = rect.height - windowH;
        if (totalScrollable > 0) {
          const currentScrolled = -rect.top;
          const scrollProgress = Math.min(1.0, Math.max(0.0, currentScrolled / totalScrollable));
          
          // When actively scrolling, sync directly to scroll progress
          isInteractingRef.current = true;
          setIsLooping(false);
          setProgress(scrollProgress);

          // Release interaction lock shortly after scroll stops
          clearTimeout((window as any).__scrollTimeout);
          (window as any).__scrollTimeout = setTimeout(() => {
            isInteractingRef.current = false;
          }, 300);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jump to specific solved framing
  const jumpToFraming = (index: number) => {
    setIsLooping(false);
    isInteractingRef.current = true;
    const targetProgress = index / (SOLVED_FRAMINGS.length - 1);
    setProgress(targetProgress);
    setActiveFramingIndex(index);
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 600);
  };

  const currentFraming = SOLVED_FRAMINGS[activeFramingIndex] || SOLVED_FRAMINGS[0];

  return (
    <div 
      ref={heroContainerRef} 
      className="relative w-full min-h-[140vh] sm:min-h-[160vh] lg:min-h-[180vh] bg-[#02040a] text-slate-100 overflow-visible"
    >
      {/* Sticky Cinematic Viewport Container (Locks onto screen as user scrolls) */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        
        {/* ================= 3D EARTH ORBIT CANVAS ================= */}
        <div className="absolute inset-0 z-0">
          <EarthOrbitCanvas 
            progress={progress} 
            onFramingChange={setActiveFramingIndex}
          />
        </div>

        {/* Cinematic Vignette & Atmospheric Contrast Gradients */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]/70" />
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#02040a]/75 via-transparent to-[#02040a]/75" />

        {/* ================= TOP HUD: Telemetry & Status ================= */}
        <header className="relative z-20 pt-20 px-4 sm:px-8 max-w-7xl mx-auto w-full flex items-start justify-between pointer-events-none">
          {/* Left: Mission & Architecture Tag */}
          <div className="pointer-events-auto flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-300 font-bold">
                VERTEX PLANETARY ARCHITECTURE
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-700/50">
                LEO CONTINUOUS SHOT
              </span>
            </div>
            
            <div className="text-xs text-slate-300 font-mono flex items-center gap-3">
              <span>ALT: <strong className="text-white font-semibold">{currentFraming.altitude}</strong></span>
              <span className="text-slate-600">|</span>
              <span>VELOCITY: <strong className="text-white font-semibold">{currentFraming.speed}</strong></span>
              <span className="text-slate-600">|</span>
              <span>PHASE: <strong className="text-cyan-300 font-semibold">{currentFraming.phaseAngle}</strong></span>
            </div>
          </div>

          {/* Right: GIF Loop Toggle & Framing Quick Select */}
          <div className="pointer-events-auto flex items-center gap-2">
            {/* Auto-Loop / GIF Mode Button */}
            <button
              onClick={() => setIsLooping(!isLooping)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                isLooping
                  ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900/80 border-slate-700/80 text-slate-400 hover:text-white'
              }`}
              title={isLooping ? 'Pause Continuous Orbit' : 'Resume Continuous GIF Loop'}
            >
              {isLooping ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span className="font-bold">GIF LOOP: ACTIVE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-slate-300" />
                  <span>PLAY LOOP</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* ================= CENTER: Cinematic Framing Titles & Narrative ================= */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto flex flex-col justify-center pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            {/* Mission Category */}
            <motion.div
              key={currentFraming.id + '-badge'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 backdrop-blur-md mb-3"
            >
              <Orbit className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>FRAMING {activeFramingIndex + 1} OF 4</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-200 font-semibold">{currentFraming.shortLabel}</span>
            </motion.div>

            {/* Main Framing Headline */}
            <motion.h1
              key={currentFraming.id + '-title'}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase"
            >
              {currentFraming.name}
            </motion.h1>

            {/* Subtitle / Key Light Status */}
            <motion.div
              key={currentFraming.id + '-subtitle'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-xl text-cyan-400 font-mono font-medium mt-1 mb-3"
            >
              {currentFraming.subtitle} — <span className="text-slate-300 text-sm font-normal">{currentFraming.solarStatus}</span>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              key={currentFraming.id + '-desc'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl backdrop-blur-sm bg-slate-950/40 p-3 rounded-xl border border-slate-800/60"
            >
              {currentFraming.description}
            </motion.p>

            {/* Quick Action Navigation CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Button
                variant="primary"
                size="md"
                onClick={() => onNavigate('/team')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs cursor-pointer shadow-lg shadow-indigo-600/30 flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Meet Engineering Team</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={() => onNavigate('/projects')}
                className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700/80 font-mono text-xs cursor-pointer flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Verified Systems</span>
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => onNavigate('/contact')}
                className="border-slate-800 hover:border-cyan-500/60 text-slate-300 hover:text-white font-mono text-xs cursor-pointer"
              >
                <span>Initiate Contact</span>
              </Button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM HUD: Solved Framings Controller & Scrubber ================= */}
        <footer className="relative z-20 pb-6 px-4 sm:px-8 max-w-7xl mx-auto w-full">
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-2xl shadow-2xl">
            {/* 4 Solved Framing Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {SOLVED_FRAMINGS.map((framing, idx) => {
                const isActive = activeFramingIndex === idx;
                return (
                  <button
                    key={framing.id}
                    onClick={() => jumpToFraming(idx)}
                    className={`px-3 py-2 rounded-xl text-left transition-all font-mono cursor-pointer border ${
                      isActive
                        ? 'bg-indigo-950/90 border-cyan-400 text-white shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-400">
                        STAGE {idx + 1}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" />
                      )}
                    </div>
                    <div className="text-xs font-bold truncate mt-0.5">
                      {framing.name}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate hidden sm:block">
                      {framing.phaseAngle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Timeline Scrubber Bar */}
            <div className="flex items-center gap-4 pt-1">
              <div className="text-[11px] font-mono text-slate-400 shrink-0 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span className="hidden sm:inline">ORBIT TIMELINE:</span>
                <strong className="text-cyan-300">{Math.round(progress * 100)}%</strong>
              </div>

              {/* Slider Scrub Input */}
              <div className="relative flex-1 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={progress}
                  onChange={(e) => {
                    setIsLooping(false);
                    isInteractingRef.current = true;
                    setProgress(parseFloat(e.target.value));
                    setTimeout(() => {
                      isInteractingRef.current = false;
                    }, 300);
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Scroll Down Indicator */}
              <div className="text-[11px] font-mono text-slate-400 shrink-0 hidden md:flex items-center gap-1">
                <ArrowDown className="w-3 h-3 text-cyan-400 animate-bounce" />
                <span>SCROLL TO TRAVERSE ORBIT</span>
              </div>
            </div>
          </div>
        </footer>

      </div>

      {/* Spacer area allowing the natural page scroll to advance through the continuous shot */}
      <div className="relative z-10 w-full flex items-center justify-center py-12 bg-gradient-to-b from-transparent to-[#060813] pointer-events-none">
        <div className="px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-slate-300 flex items-center gap-2">
          <span>Entering Collective Architecture & Systems</span>
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
