import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, ChevronRight } from 'lucide-react';
import LeadModal from './LeadModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-yellow-500/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[5.5rem] py-8">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="https://i.postimg.cc/mrB10S91/Logo-house-PQ-removebg-preview.png"
                  alt="Araujo & Alves Advogados"
                  className="relative w-10 h-10 object-contain"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Araujo <span className="text-yellow-500">&</span> Alves
                </span>
                <span className="block text-[10px] text-slate-400 tracking-[0.2em] uppercase -mt-0.5">
                  Advogados
                </span>
              </div>
            </motion.a>

            {/* CTA Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Scale className="w-4 h-4 relative z-10" />
              <span className="relative z-10 hidden sm:inline">Análise Gratuita</span>
              <span className="relative z-10 sm:hidden">Análise</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
