import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import LeadModal from './LeadModal';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          >
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900 border border-yellow-500/30 rounded-lg px-4 py-2 shadow-lg max-w-xs"
            >
              <p className="text-sm text-white">
                Fale com um especialista agora!
              </p>
            </motion.div>

            {/* Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-6 py-3 rounded-full shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Fale Conosco</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
