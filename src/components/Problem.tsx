import { motion } from 'framer-motion';
import { AlertTriangle, Banknote, TrendingDown, Lock } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    icon: Banknote,
    title: 'Dívidas Acima de R$ 100 Mil',
    description: 'Quando a dívida ultrapassa os R$ 100 mil, o peso financeiro começa a sufocar as operações da empresa e ameaça sua sobrevivência.',
  },
  {
    icon: AlertTriangle,
    title: 'Super Endividamento (R$ 1M+)',
    description: 'Empresas com dívidas acima de R$ 1 milhão enfrentam uma crise sem precedentes. Sem ação jurídica estratégica, a falência é inevitável.',
  },
  {
    icon: TrendingDown,
    title: 'Queda de Faturamento',
    description: 'O endividamento impede investimentos em marketing, equipe e infraestrutura, criando um ciclo vicioso de queda de receita.',
  },
  {
    icon: Lock,
    title: 'Bloqueio de Contas e Bens',
    description: 'Execuções judiciais podem bloquear contas bancárias, penhorar bens e paralisar completamente as atividades da empresa.',
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-red-400 text-sm font-semibold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20"
          >
            O Problema
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            A Dívida Está <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Sufocando</span> Sua Empresa?
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Milhares de empresários brasileiros enfrentam diariamente a angústia de ver 
            seu legado de anos ser destruído pelo endividamento. Você não está sozinho — 
            e existe uma saída jurídica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/40 group-hover:via-orange-500/40 group-hover:to-red-500/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[1px]" />
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 rounded-2xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
              
              <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm border border-slate-800/80 group-hover:border-red-500/30 rounded-2xl p-6 transition-all duration-500 overflow-hidden">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-red-500/10 group-hover:border-red-500/30 transition-all duration-500 shadow-lg shadow-red-500/5 group-hover:shadow-red-500/15"
                  >
                    <problem.icon className="w-7 h-7 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-red-300 transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 relative group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-red-500/30 via-orange-500/20 to-red-500/30 rounded-2xl blur-sm" />
          <div className="relative bg-gradient-to-r from-red-950/60 via-orange-950/40 to-red-950/60 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,0.1),_transparent_70%)]" />
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-4" />
            </motion.div>
            <p className="text-lg text-slate-200 relative z-10">
              <strong className="text-white">Atenção:</strong> Cada dia que passa sem ação jurídica, 
              os juros e multas aumentam. Empresas que demoram a buscar ajuda perdem 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-bold"> até 40% a mais</span> em redução de dívidas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
