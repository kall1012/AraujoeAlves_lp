import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.postimg.cc/mrB10S91/Logo-house-PQ-removebg-preview.png"
                alt="Araujo & Alves Advogados"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="text-xl font-bold">
                  Araujo <span className="text-yellow-500">&</span> Alves
                </span>
                <span className="block text-[10px] text-slate-400 tracking-[0.2em] uppercase">
                  Advogados
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialistas em redução de dívidas empresariais.
              Recuperamos empresas endividadas e super endividadas
              com estratégia jurídica de excelência.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span>(61) 98233-5278</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span>priaara@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span>QN 7 conjunto 5 - Riacho Fundo/DF</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#problem" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors">
                O Problema
              </a>
              <a href="#solution" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors">
                Nossa Solução
              </a>
              <a href="#cases" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors">
                Casos de Sucesso
              </a>
              <a href="#faq" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors">
                Dúvidas Frequentes
              </a>
              <a href="#contact" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors">
                Contato
              </a>
              <Link to="/lgpd" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors">
                Política de Privacidade (LGPD)
              </Link>
              <Link to="/termos" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Araujo & Alves Advogados. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
