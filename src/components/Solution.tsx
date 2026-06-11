import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FileSearch,
  Gavel,
  Handshake,
  Rocket,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    number: '01',
    title: 'Diagnóstico Completo',
    description:
      'Analisamos todas as dívidas da sua empresa — bancárias, tributárias, trabalhistas e fornecedores. Mapeamos cada passivo e identificamos as melhores oportunidades de redução.',
  },
  {
    icon: Gavel,
    number: '02',
    title: 'Estratégia Jurídica Personalizada',
    description:
      'Nossos advogados especialistas elaboram uma estratégia sob medida para o seu caso, utilizando as melhores ferramentas jurídicas disponíveis: recuperação judicial, renegociação e litígio estratégico.',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'Negociação com Credores',
    description:
      'Negociamos diretamente com bancos. Nossa experiência e relacionamento nos permitem alcançar reduções de até 90% sobre o valor original da dívida.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Empresa Livre para Crescer',
    description:
      'Com as dívidas reduzidas e renegociadas, sua empresa volta a respirar. Você pode reinvestir no negócio, contratar, expandir e construir um futuro próspero sem o peso do passado.',
  },
];

export default function Solution() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="solution" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,179,8,0.06),_transparent_70%)]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[150px]" />

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
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
            className="inline-block text-yellow-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 px-3 sm:px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 whitespace-nowrap"
          >
            <span className="sm:hidden">NOSSA SOLUÇÃO</span>

            <span className="hidden sm:inline">Nossa Solução</span>
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Como Reduzimos Suas Dívidas em até{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
              90%
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Nosso método comprovado em mais de 110 casos de sucesso segue um
            processo estruturado e transparente que garante os melhores
            resultados para sua empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/50 group-hover:via-amber-500/30 group-hover:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-b from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/15 group-hover:to-transparent rounded-2xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100" />

              <div className="relative h-full bg-gradient-to-b from-slate-900/90 to-slate-950/95 backdrop-blur-sm border border-slate-800/80 group-hover:border-yellow-500/30 rounded-2xl p-6 transition-all duration-500 overflow-hidden">
                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                {/* Top accent line */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      animate={
                        hoveredIndex === index
                          ? { scale: 1.1, rotate: -5 }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-xl flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500 shadow-lg shadow-yellow-500/5 group-hover:shadow-yellow-500/20"
                    >
                      <step.icon className="w-7 h-7 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
                    </motion.div>

                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-500/30 to-transparent">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    className="mt-4 flex items-center gap-1 text-yellow-500/0 group-hover:text-yellow-500/70 transition-all duration-500"
                    animate={
                      hoveredIndex === index ? { x: 5 } : { x: 0 }
                    }
                  >
                    <span className="text-xs font-medium">Saiba mais</span>

                    <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </div>
              </div>

              {/* Connector line between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px]">
                  <div className="w-full h-full bg-gradient-to-r from-yellow-500/20 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://wa.me/5561982335278?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20 text-lg overflow-hidden"
          >
            {/* Button shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10">
              COMECE AGORA SUA RECUPERAÇÃO
            </span>

            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="mt-4 text-slate-500 text-sm">
            Análise gratuita e 100% confidencial. Sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}