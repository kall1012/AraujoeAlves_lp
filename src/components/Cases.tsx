import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Building2, TrendingDown, ArrowRight, Sparkles } from 'lucide-react';

interface Case {
  id: number;
  empresa: string;
  setor: string;
  divida_original: number;
  divida_reduzida: number;
  reducao_percentual: number;
  descricao: string;
}

export default function Cases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/cases')
      .then((res) => res.json())
      .then((data) => {
        setCases(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="cases" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[150px] -translate-y-1/2" />

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
            className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20"
          >
            <Sparkles className="w-4 h-4" />
            Casos de Sucesso
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Empresas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Renasceram</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Conheça alguns dos casos reais onde conseguimos reduzir drasticamente 
            as dívidas e devolver a tranquilidade aos empresários.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 border-2 border-yellow-500 border-t-transparent rounded-full" 
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative"
                onMouseEnter={() => setHoveredCard(caseItem.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/40 group-hover:via-amber-500/30 group-hover:to-yellow-500/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/0 to-amber-500/0 group-hover:from-yellow-500/10 group-hover:to-amber-500/10 rounded-2xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
                
                <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/95 backdrop-blur-sm border border-slate-800/80 group-hover:border-yellow-500/30 rounded-2xl p-6 transition-all duration-500 overflow-hidden">
                  {/* Shine sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-xl flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500 shadow-lg shadow-yellow-500/5 group-hover:shadow-yellow-500/15"
                      >
                        <Building2 className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">{caseItem.empresa}</h3>
                        <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{caseItem.setor}</p>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {caseItem.descricao}
                    </p>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Dívida Original</span>
                        <span className="text-sm font-medium text-red-400/80 line-through">
                          {formatCurrency(caseItem.divida_original)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Dívida Reduzida</span>
                        <motion.span 
                          className="text-sm font-bold text-green-400"
                          animate={hoveredCard === caseItem.id ? { scale: 1.05 } : { scale: 1 }}
                        >
                          {formatCurrency(caseItem.divida_reduzida)}
                        </motion.span>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <TrendingDown className="w-4 h-4" />
                          Redução
                        </span>
                        <motion.span 
                          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300"
                          animate={hoveredCard === caseItem.id ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {caseItem.reducao_percentual}%
                        </motion.span>
                      </div>
                    </div>

                    {/* Progress bar with gradient */}
                    <div className="mt-4 h-2.5 bg-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${caseItem.reducao_percentual}%` } : {}}
                        transition={{ duration: 1.8, delay: 0.6 + index * 0.15, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm inline-flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Resultados reais de clientes atendidos. Cada caso é único e os resultados podem variar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
