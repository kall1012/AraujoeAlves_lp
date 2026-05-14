import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Proteção para ambientes SSR
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    // Executa uma vez ao carregar
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappLink =
    'https://wa.me/5561982335278?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista.';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3 }}
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
              Entre em contato pelo Whatsapp!
            </p>
          </motion.div>

          {/* Botão WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp"
            className="group flex items-center gap-2 bg-green-500 hover:bg-green-400 text-slate-950 font-bold px-6 py-3 rounded-full shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
          >
            <img
              src="https://i.postimg.cc/d0rYxJ1F/Icone-Whats-img6.png"
              alt="Ícone do WhatsApp"
              className="w-5 h-5 object-contain"
            />

            <span className="hidden sm:inline">
              Falar com especialista
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}