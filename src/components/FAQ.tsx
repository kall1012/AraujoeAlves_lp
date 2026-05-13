import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto tempo leva para reduzir as dívidas da minha empresa?',
    answer: 'O prazo varia conforme a complexidade do caso, mas em média conseguimos resultados significativos entre 3 a 6 meses. O diagnóstico inicial é feito em até 7 dias úteis, e as primeiras negociações começam imediatamente após a aprovação da estratégia.',
  },
  {
    question: 'A redução de 90% é garantida para todas as empresas?',
    answer: 'Cada caso é único. A redução de até 90% representa nosso melhor resultado alcançado. O percentual real depende do tipo de dívida (bancária, tributária, trabalhista), dos credores envolvidos e da situação específica da empresa. Durante a análise gratuita, apresentamos uma projeção realista para o seu caso.',
  },
  {
    question: 'Minha empresa precisa estar em recuperação judicial?',
    answer: 'Não necessariamente. Dependendo do perfil das dívidas, podemos atuar via negociação extrajudicial, litígio estratégico ou, quando necessário, recuperação judicial. A melhor estratégia é definida após nosso diagnóstico completo.',
  },
  {
    question: 'O atendimento é sigiloso?',
    answer: 'Absolutamente. O sigilo profissional é um dever ético e legal dos advogados. Todas as informações sobre sua empresa, dívidas e estratégias são tratadas com o mais absoluto sigilo. Nenhum dado é compartilhado com terceiros sem sua autorização expressa.',
  },
  {
    question: 'Quais tipos de dívidas vocês conseguem reduzir?',
    answer: 'Atuamos em todos os tipos de dívidas empresariais: bancárias (empréstimos, financiamentos, CDC), tributárias (federal, estadual e municipal), trabalhistas (reclamações, acordos), fornecedores e outras obrigações comerciais.',
  },
  {
    question: 'Como funciona o pagamento dos honorários?',
    answer: 'Trabalhamos com modelos flexíveis de honorários, incluindo a possibilidade de parcelamento e, em alguns casos, remuneração atrelada ao resultado (success fee). Durante a consulta inicial, apresentamos as opções disponíveis para o seu caso específico.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
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
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Frequentes</span>
          </h2>
          <p className="text-lg text-slate-400">
            Tire suas dúvidas sobre nosso processo de redução de dívidas empresariais.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div
                className={`group relative rounded-2xl transition-all duration-500 overflow-hidden ${
                  openIndex === index
                    ? 'border border-yellow-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-lg shadow-yellow-500/5'
                    : 'border border-slate-800/60 bg-gradient-to-b from-slate-900/40 to-slate-950/40 hover:border-slate-700/80'
                }`}
              >
                {/* Top accent line when open */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent transition-opacity duration-500 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left relative z-10"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={openIndex === index ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-yellow-500/20 border border-yellow-500/30' 
                          : 'bg-slate-800/50 border border-slate-700/50 group-hover:border-yellow-500/20'
                      }`}
                    >
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${openIndex === index ? 'text-yellow-400' : 'text-slate-500 group-hover:text-yellow-500/70'}`} />
                    </motion.div>
                    <span className={`font-semibold transition-colors duration-300 ${openIndex === index ? 'text-yellow-300' : 'text-white group-hover:text-yellow-200'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={openIndex === index ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-2 transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-yellow-500/20 text-yellow-400' 
                        : 'bg-slate-800/50 text-slate-500 group-hover:bg-yellow-500/10 group-hover:text-yellow-500/70'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-[4.5rem]">
                        <div className="h-px bg-gradient-to-r from-yellow-500/20 to-transparent mb-4" />
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
