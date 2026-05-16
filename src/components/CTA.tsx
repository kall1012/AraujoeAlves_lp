import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, ChevronRight, Clock, Shield, Sparkles } from 'lucide-react';
import LeadModal from './LeadModal';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,179,8,0.1),_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-yellow-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20"
            >
              <Sparkles className="w-4 h-4" />
              Fale Conosco
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Não Deixe a Dívida <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Destruir</span> Seu Legado
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Cada dia de espera é um dia a mais de juros e multas acumulando. 
              Agende agora uma análise gratuita e confidencial da situação da sua empresa. 
              Nossos especialistas estão prontos para encontrar a melhor solução para você.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, label: 'Telefone / WhatsApp', value: '(61) 98233-5278' },
                { icon: Mail, label: 'E-mail', value: 'priaara@gmail.com' },
                { icon: MapPin, label: 'Endereço', value: 'QN 7 conjunto 5 - Riacho Fundo/DF' },
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-xl flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500 shadow-lg shadow-yellow-500/5 group-hover:shadow-yellow-500/15">
                    <item.icon className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                    <div className="font-semibold text-white group-hover:text-yellow-300 transition-colors">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Atendimento 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% Confidencial</span>
              </div>
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-500/40 via-amber-500/30 to-yellow-500/40 rounded-2xl blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
                
                <div className="text-center mb-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Análise Gratuita</h3>
                  <p className="text-slate-400">
                    Preencha o formulário e receba uma análise completa da sua situação em até 24h.
                  </p>
                </div>

                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group/btn relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25 mb-4 overflow-hidden"
                >
                  {/* Button shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">QUERO MINHA ANÁLISE GRATUITA</span>
                  <ChevronRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>

                <div className="text-center space-y-2 relative z-10">
                  <p className="text-xs text-slate-500">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                  <p className="text-xs text-slate-600">
                    Seus dados estão protegidos e não serão compartilhados com terceiros.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 relative z-10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { value: '110+', label: 'Clientes' },
                      { value: '90%', label: 'Redução Máx' },
                      { value: '10+', label: 'Anos Exp.' },
                    ].map((badge, i) => (
                      <motion.div 
                        key={badge.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-amber-500">{badge.value}</div>
                        <div className="text-xs text-slate-500">{badge.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
