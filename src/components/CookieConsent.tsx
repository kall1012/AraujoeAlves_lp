import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield, FileText, Scale } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-xl border border-yellow-500/20 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

              <div className="relative p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20 shadow-lg shadow-yellow-500/10">
                    <Cookie className="w-6 h-6 text-yellow-500" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Ao acessar nosso site, você concorda com a nossa{' '}
                      <a href="/lgpd" className="text-yellow-400 hover:text-yellow-300 underline transition-colors inline-flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Política de Privacidade
                      </a>
                      ,{' '}
                      <span className="text-yellow-400">Cookies</span>
                      {' '}e{' '}
                      <a href="/termos" className="text-yellow-400 hover:text-yellow-300 underline transition-colors inline-flex items-center gap-1">
                        <Scale className="w-3 h-3" />
                        Termos de Uso
                      </a>
                      ?
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleAccept}
                      className="flex-1 sm:flex-none group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 overflow-hidden whitespace-nowrap"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <FileText className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Continuar e Fechar</span>
                    </button>

                    <button
                      onClick={handleAccept}
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-yellow-500/30 transition-all duration-300"
                      aria-label="Fechar"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
