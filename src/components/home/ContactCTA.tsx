import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Sparkles, Terminal, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';

interface ContactCTAProps {
  onNavigate: (path: string) => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-white border-t border-slate-200">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-white via-indigo-50/30 to-slate-50 border border-indigo-100 shadow-xl shadow-indigo-500/5 overflow-hidden text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-50 border border-indigo-200 text-indigo-700 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Ready to Build Solutions <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600">
              Beyond the Ordinary?
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Whether you are looking for a dedicated software engineering team, want to discuss an innovative startup product, or need specialized technical consultation, our team at Vertex Technologies is ready to connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => onNavigate('/contact')}
            >
              Work With Our Team
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
              iconPosition="left"
              onClick={() => onNavigate('/contact')}
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
