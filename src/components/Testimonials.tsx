import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';

interface Testimonial {
  id: number;
  nome: string;
  cargo: string;
  empresa: string;
  texto: string;
  nota: number;
}

export default function Testimonials() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      nome: 'Ricardo Mendes',
      cargo: 'Diretor Financeiro',
      empresa: 'Construtora Horizonte',
      texto:
        'A atuação da Araujo&Alves Advocacia literalmente salvou nossa empresa. Conseguimos reorganizar as finanças e voltar a crescer.',
      nota: 5,
    },
    {
      id: 2,
      nome: 'Fernanda Lima',
      cargo: 'CEO',
      empresa: 'Bella Forma Estética',
      texto:
        'Estávamos à beira do colapso financeiro. O trabalho jurídico foi extremamente estratégico e trouxe tranquilidade para continuarmos operando.',
      nota: 5,
    },
    {
      id: 3,
      nome: 'Carlos Henrique',
      cargo: 'Sócio Proprietário',
      empresa: 'TransLog Brasil',
      texto:
        'Além da redução significativa das dívidas, recebemos uma orientação completa para proteger a empresa e manter nossa operação ativa.',
      nota: 5,
    },
    {
      id: 4,
      nome: 'Juliana Rocha',
      cargo: 'Administradora',
      empresa: 'Mercado Central Prime',
      texto:
        'A negociação conduzida pela equipe superou nossas expectativas. Conseguimos recuperar o fôlego financeiro rapidamente.',
      nota: 5,
    },
    {
      id: 5,
      nome: 'Eduardo Martins',
      cargo: 'Diretor Executivo',
      empresa: 'TechVision Sistemas',
      texto:
        'Profissionalismo impecável. A redução das dívidas permitiu reinvestir no crescimento da empresa e estabilizar o caixa.',
      nota: 5,
    },
    {
      id: 6,
      nome: 'Marcos Oliveira',
      cargo: 'Produtor Rural',
      empresa: 'Grupo Solar Agro',
      texto:
        'A equipe conseguiu negociar condições que pareciam impossíveis. Hoje nossa empresa voltou a investir e operar com segurança.',
      nota: 5,
    },
  ]);

  const [loading] = useState(false);

  const [hoveredCard, setHoveredCard] = useState<number | null>(
    null
  );

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/testimonials-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/92" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.1),_transparent_60%)]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

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
            className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20"
          >
            <Sparkles className="w-4 h-4" />
            Depoimentos
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            O Que Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
              Clientes
            </span>{' '}
            Dizem
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A satisfação de nossos clientes é o nosso maior orgulho.
            Veja o que empresários como você falam sobre nosso trabalho.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-10 h-10 border-2 border-yellow-500 border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative"
                onMouseEnter={() =>
                  setHoveredCard(testimonial.id)
                }
                onMouseLeave={() =>
                  setHoveredCard(null)
                }
              >
                <div className="absolute -inset-[1px] bg-gradient-to-b from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/30 group-hover:via-amber-500/20 group-hover:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="absolute -inset-2 bg-gradient-to-b from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-transparent rounded-2xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100" />

                <div className="relative h-full bg-gradient-to-b from-slate-900/70 to-slate-950/80 backdrop-blur-md border border-slate-800/60 group-hover:border-yellow-500/25 rounded-2xl p-6 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  <div className="relative z-10">
                    <Quote className="w-10 h-10 text-yellow-500/20 mb-4" />

                    <p className="text-slate-300 leading-relaxed mb-6">
                      "{testimonial.texto}"
                    </p>

                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.nota
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-slate-700'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-sm shadow-lg shadow-yellow-500/20"
                        whileHover={{ scale: 1.1 }}
                      >
                        {testimonial.nome
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .substring(0, 2)}
                      </motion.div>

                      <div>
                        <div className="font-semibold text-white text-sm">
                          {testimonial.nome}
                        </div>

                        <div className="text-slate-500 text-xs">
                          {testimonial.cargo},{' '}
                          {testimonial.empresa}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}