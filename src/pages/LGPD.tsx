import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ChevronLeft, Mail, Phone, MapPin, User, FileText, Lock } from 'lucide-react';

export default function LGPD() {
  useEffect(() => {
    document.title = 'Política de Privacidade | Araujo & Alves Advogados';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Shield,
      title: '1. Introdução',
      content: 'A Araujo & Alves Advogados valoriza a privacidade e a proteção dos dados pessoais de seus clientes, parceiros e visitantes. Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD) e tem como objetivo demonstrar nosso compromisso com a transparência, segurança e respeito aos direitos dos titulares de dados.',
    },
    {
      icon: User,
      title: '2. Quem Somos',
      content: 'Araujo & Alves Advogados, inscrita sob o CNPJ nº 12.345.678/0001-90, com sede em QN 7 conjunto 5 - Riacho Fundo/DF, é um escritório de advocacia especializado em recuperação empresarial e redução de dívidas. Somos o Controlador dos dados pessoais coletados por meio deste site e de nossos canais de atendimento.',
    },
    {
      icon: FileText,
      title: '3. Dados Coletados',
      content: 'Coletamos apenas os dados estritamente necessários para a prestação de nossos serviços advocatícios. Os dados podem incluir: nome completo, e-mail, telefone, nome da empresa, valor aproximado da dívida, CNPJ da empresa e demais informações relevantes ao caso. A coleta ocorre de forma transparente, mediante consentimento livre, específico e informado do titular.',
    },
    {
      icon: Lock,
      title: '4. Finalidade do Tratamento',
      content: 'Os dados pessoais são tratados exclusivamente para as seguintes finalidades: (a) análise preliminar do caso e elaboração de proposta de serviços; (b) comunicação com o titular sobre o andamento dos trabalhos; (c) cumprimento de obrigações legais e regulatórias; (d) proteção do crédito; (e) exercício regular de direitos em processos judiciais, administrativos ou arbitrais. Não utilizamos seus dados para fins de marketing sem autorização prévia e expressa.',
    },
    {
      icon: Shield,
      title: '5. Base Legal',
      content: 'O tratamento de dados pessoais realizado pela Araujo & Alves Advogados fundamenta-se nas seguintes bases legais previstas no art. 7º da LGPD: (I) consentimento do titular; (II) cumprimento de obrigação legal ou regulatória pelo controlador; (III) execução de contrato; (V) exercício regular de direitos em processo judicial, administrativo ou arbitral; (VI) legítimo interesse do controlador ou de terceiro.',
    },
    {
      icon: Lock,
      title: '6. Compartilhamento de Dados',
      content: 'Os dados pessoais podem ser compartilhados com: (a) instituições financeiras e credores, para fins de negociação e reestruturação de dívidas; (b) órgãos públicos, quando exigido por lei ou para exercício de direitos; (c) prestadores de serviços essenciais ao funcionamento do escritório (contabilidade, tecnologia, etc.), sempre mediante contrato de confidencialidade; (d) peritos, mediadores e outros profissionais envolvidos nos casos. Não vendemos, alugamos ou comercializamos dados pessoais.',
    },
    {
      icon: Shield,
      title: '7. Segurança da Informação',
      content: 'Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados, destruição, perda, alteração ou qualquer forma de tratamento inadequado ou ilícito. Entre as medidas implementadas estão: criptografia de dados sensíveis, controle de acesso por senhas, firewalls, backups regulares e treinamento de equipe. Apesar de nossos esforços, nenhum sistema é totalmente invulnerável.',
    },
    {
      icon: FileText,
      title: '8. Prazo de Retenção',
      content: 'Os dados pessoais são mantidos pelo período estritamente necessário ao cumprimento das finalidades para as quais foram coletados, observando os prazos prescricionais aplicáveis às relações jurídicas e às obrigações legais do escritório. Após o término do vínculo contratual e do prazo legal de guarda, os dados são eliminados de forma segura ou anonimizados.',
    },
    {
      icon: User,
      title: '9. Direitos do Titular',
      content: 'Conforme a LGPD, o titular de dados pessoais possui os seguintes direitos: (I) confirmação da existência de tratamento; (II) acesso aos dados; (III) correção de dados incompletos, inexatos ou desatualizados; (IV) anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade; (V) portabilidade dos dados; (VI) eliminação dos dados pessoais tratados com consentimento; (VII) informação sobre entidades com as quais seus dados foram compartilhados; (VIII) informação sobre a possibilidade de não fornecer consentimento e suas consequências; (IX) revogação do consentimento.',
    },
    {
      icon: Shield,
      title: '10. Cookies e Tecnologias de Rastreamento',
      content: 'Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação, analisar o tráfego do site e personalizar conteúdos. Os cookies podem ser: (a) essenciais — necessários para o funcionamento do site; (b) analíticos — utilizados para entender como os visitantes interagem com o site; (c) de preferências — permitem lembrar escolhas do usuário. O usuário pode gerenciar as preferências de cookies diretamente em seu navegador.',
    },
    {
      icon: Mail,
      title: '11. Canal de Comunicação',
      content: 'Para exercer seus direitos como titular de dados pessoais, esclarecer dúvidas sobre esta Política de Privacidade ou registrar reclamações, entre em contato pelo e-mail priaara@gmail.com. Responderemos em até 15 (quinze) dias úteis.',
    },
    {
      icon: FileText,
      title: '12. Alterações desta Política',
      content: 'Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas de tratamento de dados ou em legislação aplicável. Recomendamos que você a revise regularmente. A data da última atualização será sempre indicada no final deste documento. O uso continuado de nossos serviços após alterações constitui aceitação das novas condições.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header Simples */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-yellow-500/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[5.5rem] py-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/logo.png"
                  alt="Araujo & Alves Advogados"
                  className="relative w-10 h-10 object-contain"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Araujo <span className="text-yellow-500">&</span> Alves
                </span>
                <span className="block text-[10px] text-slate-400 tracking-[0.2em] uppercase -mt-0.5">
                  Advogados
                </span>
              </div>
            </Link>

            <Link
              to="/"
              className="group inline-flex items-center gap-2 border border-slate-600 hover:border-yellow-500/50 text-slate-300 hover:text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-800/50"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Voltar ao Site</span>
              <span className="sm:hidden">Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero LGPD */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,179,8,0.08),_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Shield className="w-4 h-4" />
              Privacidade e Proteção de Dados
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Privacidade</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Conforme a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018),
              apresentamos nossas diretrizes de privacidade e segurança da informação.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo LGPD */}
      <section className="relative pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/20 group-hover:via-amber-500/10 group-hover:to-yellow-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm border border-slate-800/80 group-hover:border-yellow-500/20 rounded-2xl p-6 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-xl flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500 shadow-lg shadow-yellow-500/5 group-hover:shadow-yellow-500/15">
                      <section.icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                        {section.title}
                      </h2>
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Footer LGPD */}
      <footer className="relative bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Araujo & Alves" className="w-8 h-8 object-contain" />
              <span className="text-sm font-bold text-white">
                Araujo <span className="text-yellow-500">&</span> Alves
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Voltar ao Site</Link>
              <span>© {new Date().getFullYear()} — Todos os direitos reservados</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
