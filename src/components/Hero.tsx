import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, ChevronRight, ShieldCheck, TrendingDown, Sparkles } from 'lucide-react';
import LeadModal from './LeadModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,179,8,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(234,179,8,0.06),_transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-yellow-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 20, -30, 0],
              x: [0, 15, -10, 20, 0],
              opacity: [0.1, 0.5, 0.3, 0.4, 0.1],
              scale: [1, 1.3, 0.8, 1.1, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-400 text-sm font-medium tracking-wide">
                ESPECIALISTAS EM RECUPERAÇÃO FINANCEIRA EMPRESARIAL E INDIVIDUAL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Reduzimos as dívidas da sua empresa em até{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">90%</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-slate-300 mb-8 leading-relaxed"
            >
              Oferecemos soluções jurídicas eficazes para quem precisa reorganizar suas finanças 
              e recuperar dívidas. Já auxiliamos clientes na recuperação de mais de <strong className="text-white">R$ 1,5 milhão</strong>, 
              permitindo que suas operações financeiras e empresariais voltem a crescer com força total.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25 overflow-hidden"
              >
                {/* Button shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">QUERO REDUZIR MINHAS DÍVIDAS</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('cases')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-yellow-500/50 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-800/50"
              >
                Ver Casos de Sucesso
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: ShieldCheck, text: '100% Sigiloso' },
                { icon: TrendingDown, text: 'Redução Garantida' },
                { icon: Scale, text: 'Assessoria Jurídica Especializada' },
              ].map((item, i) => (
                <motion.div 
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <div className="w-6 h-6 bg-green-500/10 rounded-md flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-green-500" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-500/30 via-amber-500/20 to-yellow-500/30 rounded-2xl blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/15 to-amber-500/15 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-8 overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <h3 className="text-xl font-semibold mb-6 text-center relative z-10">
                  Resultados que Falam por Si
                </h3>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {[
                    { value: 'R$ 1,5M+', label: 'Dívidas Reduzidas' },
                    { value: '110+', label: 'Empresas Salvas' },
                    { value: '90%', label: 'Redução Máxima' },
                    { value: '10+', label: 'Anos de Experiência' },
                  ].map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-center p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl border border-slate-700/50 hover:border-yellow-500/20 transition-all duration-300 group/stat"
                    >
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-amber-500 mb-1 group-hover/stat:scale-105 transition-transform">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-500/50 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-yellow-500 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
