import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f8fafc] text-slate-900 select-none"
        >
          {/* Subtle radial glow */}
          <div className="absolute w-96 h-96 bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Futuristic Symbol */}
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-2xl border border-dashed border-indigo-400/50 flex items-center justify-center p-2"
            >
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-2xl text-white shadow-lg shadow-indigo-500/20">
                A
              </div>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-2 rounded-3xl border border-indigo-300/40 -z-10"
            />
          </div>

          {/* Branding Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-700 font-mono">
              AUREON TECHNOLOGIES
            </h1>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-500 font-mono">
              <Terminal className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
              <span>Initializing Digital Experience...</span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden mt-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
