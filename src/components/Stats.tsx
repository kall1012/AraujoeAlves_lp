import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: 90, suffix: '%', label: 'Redução Máxima de Dívidas', prefix: 'até ' },
  { icon: Users, value: 110, suffix: '+', label: 'Empresas Atendidas' },
  { icon: Award, value: 1.5, suffix: 'M+', label: 'Reais em Dívidas Reduzidas', prefix: 'R$ ' },
  { icon: Clock, value: 10, suffix: '+', label: 'Anos de Experiência' },
];

function AnimatedNumber({ value, prefix = '', suffix = '', isInView }: { value: number; prefix?: string; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number.isInteger(value) ? Math.floor(start) : Number(start.toFixed(1)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with Image */}
      <div className="absolute inset-0">
        <img
          src="/images/stats-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,179,8,0.12),_transparent_70%)]" />
      </div>

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
            className="inline-block text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20"
          >
            Nossos Números
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Resultados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Comprovam</span> Nossa Excelência
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group text-center relative"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-transparent rounded-2xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100 -z-10" />
              
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-2xl mb-5 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500 shadow-lg shadow-yellow-500/5 group-hover:shadow-yellow-500/20"
              >
                <stat.icon className="w-10 h-10 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
              </motion.div>
              
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
