import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, x: -30, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -30, scale: 0.8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 left-4 sm:left-6 lg:left-8 z-[90] group"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Main button */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-md border border-yellow-500/30 group-hover:border-yellow-500/60 rounded-full flex items-center justify-center shadow-lg shadow-black/30 group-hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden">
            {/* Shine sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

            {/* Inner gradient ring */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Arrow icon */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300 relative z-10" />
            </motion.div>
          </div>

          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden lg:block">
            <div className="bg-slate-900/90 backdrop-blur-sm border border-yellow-500/20 rounded-lg px-3 py-1.5 whitespace-nowrap shadow-lg">
              <span className="text-xs text-yellow-400 font-medium">Voltar ao topo</span>
              <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-900/90 border-l border-b border-yellow-500/20 rotate-45" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
