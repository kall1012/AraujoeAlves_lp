import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ChevronLeft, FileText, User, Lock, Scale, AlertTriangle, Globe, Mail } from 'lucide-react';

export default function Termos() {
  useEffect(() => {
    document.title = 'Termos de Uso | Araujo & Alves Advogados';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: '1. Aceitação dos Termos',
      content: 'Ao acessar e utilizar o site da Araujo & Alves Advogados, você concorda em cumprir e estar vinculado aos presentes Termos de Uso. Se você não concordar com qualquer parte destes termos, solicitamos que não utilize nosso site ou serviços. O uso continuado do site após alterações nestes termos constitui aceitação das novas condições.',
    },
    {
      icon: User,
      title: '2. Definições',
      content: 'Para fins destes Termos de Uso, consideram-se: (a) "Usuário" — qualquer pessoa que acesse ou utilize o site; (b) "Site" — o conjunto de páginas e recursos disponíveis em nosso domínio; (c) "Serviços" — os serviços advocatícios oferecidos pelo escritório; (d) "Conteúdo" — textos, imagens, vídeos, logotipos e demais materiais disponíveis no site; (e) "Dados Pessoais" — informações relacionadas a pessoa natural identificada ou identificável.',
    },
    {
      icon: Scale,
      title: '3. Objeto',
      content: 'O site da Araujo & Alves Advogados tem como finalidade apresentar informações sobre os serviços de advocacia especializada em recuperação empresarial e redução de dívidas, captar leads de potenciais clientes, fornecer conteúdo educativo sobre direito empresarial e estabelecer canais de comunicação entre o escritório e interessados em seus serviços.',
    },
    {
      icon: AlertTriangle,
      title: '4. Limitação de Responsabilidade',
      content: 'As informações contidas neste site são de caráter informativo e educativo, não constituindo aconselhamento jurídico personalizado. Cada caso é único e deve ser analisado individualmente. A Araujo & Alves Advogados não se responsabiliza por decisões tomadas pelo usuário com base nas informações disponibilizadas no site. Não garantimos resultados específicos em qualquer caso, uma vez que os resultados dependem de diversas variáveis individuais.',
    },
    {
      icon: Lock,
      title: '5. Propriedade Intelectual',
      content: 'Todo o conteúdo disponível no site, incluindo mas não se limitando a textos, imagens, logotipos, ícones, vídeos, áudios, software e layout, é de propriedade exclusiva da Araujo & Alves Advogados ou de seus licenciadores, sendo protegido pelas leis de direitos autorais e propriedade intelectual. É vedada a reprodução, distribuição, modificação, exibição pública ou criação de obras derivadas sem autorização expressa e por escrito.',
    },
    {
      icon: Globe,
      title: '6. Uso Permitido',
      content: 'O usuário está autorizado a acessar e visualizar o conteúdo do site para fins pessoais e não comerciais. É expressamente proibido: (a) utilizar o site para fins ilegais ou não autorizados; (b) tentar obter acesso não autorizado a sistemas ou redes; (c) interferir ou interromper o funcionamento do site; (d) coletar dados de outros usuários sem consentimento; (e) transmitir vírus, malware ou qualquer código malicioso; (f) praticar spam ou envio de comunicações não solicitadas.',
    },
    {
      icon: FileText,
      title: '7. Links para Terceiros',
      content: 'Nosso site pode conter links para sites de terceiros. A Araujo & Alves Advogados não exerce controle sobre o conteúdo, políticas de privacidade ou práticas de sites de terceiros e não se responsabiliza por eles. O acesso a sites de terceiros ocorre por conta e risco do usuário. Recomendamos a leitura dos termos e políticas de cada site visitado.',
    },
    {
      icon: Mail,
      title: '8. Comunicações e Contato',
      content: 'Ao preencher formulários ou entrar em contato conosco, você concorda em receber comunicações do escritório relacionadas aos serviços solicitados. Não enviamos spam. Você pode optar por não receber comunicações de marketing a qualquer momento. Para questões sobre estes Termos de Uso, entre em contato pelo e-mail priaara@gmail.com.',
    },
    {
      icon: Shield,
      title: '9. Privacidade e Proteção de Dados',
      content: 'O tratamento de dados pessoais realizado através deste site está sujeito à nossa Política de Privacidade, elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD). Ao utilizar o site, você concorda com a coleta e uso de informações conforme descrito na Política de Privacidade. Recomendamos a leitura atenta deste documento.',
    },
    {
      icon: Scale,
      title: '10. Legislação Aplicável e Foro',
      content: 'Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer controvérsias decorrentes do uso deste site serão submetidas ao foro da Comarca de Brasília/DF, com exclusão de qualquer outro, por mais privilegiado que seja.',
    },
    {
      icon: FileText,
      title: '11. Alterações dos Termos',
      content: 'A Araujo & Alves Advogados reserva-se o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após sua publicação no site. O uso continuado do site após a publicação de alterações constitui aceitação dos novos termos. Recomendamos que você revise periodicamente esta página.',
    },
    {
      icon: AlertTriangle,
      title: '12. Disposições Gerais',
      content: 'Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito. A tolerância de qualquer violação não constituirá renúncia ao direito de exigir o cumprimento futuro. Estes Termos de Uso representam o acordo integral entre o usuário e a Araujo & Alves Advogados quanto ao uso do site.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
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

      {/* Hero */}
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
              <FileText className="w-4 h-4" />
              Condições de Uso
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Termos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Uso</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ao acessar e utilizar nosso site, você concorda com as condições estabelecidas
              neste documento. Leia atentamente antes de continuar.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo */}
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

      {/* Footer */}
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
