import React, { MouseEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, HeartHandshake } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const handleScrollToTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (e: MouseEvent, selector: string) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="contact" className="bg-secondary text-white pt-20 pb-8 relative overflow-hidden">
      {/* Visual background pattern overlays */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10 text-left">
        
        {/* Brand identity */}
        <div className="space-y-6">
          <a
            href="#"
            onClick={handleScrollToTop}
            className="inline-flex p-3 bg-white rounded-xl shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-200"
          >
            <img
              src="/images/logo-dr-phormula-ui.webp"
              alt="Dr.Phormula - Saúde na Medida Exata"
              className="h-10 w-auto object-contain"
              id="footer-logo-img"
              width="256"
              height="108"
              loading="lazy"
            />
          </a>
          <p className="text-white/85 text-sm leading-relaxed font-light">
            Cuidado personalizado, segurança técnica certificada e a exatidão farmacêutica ideal a serviço da sua saúde e qualidade de vida.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all"
              aria-label="Siga-nos no Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/557930000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all animate-pulse"
              aria-label="Fale no WhatsApp"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links navigation */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">
            Navegação
          </h2>
          <ul className="space-y-3.5 text-sm">
            <li>
              <a
                href="#quality"
                onClick={(e) => handleScrollToSection(e, "#quality")}
                className="text-white/85 hover:text-white hover:translate-x-1 transition-all inline-block font-light"
              >
                Qualidade Técnica
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScrollToSection(e, "#services")}
                className="text-white/85 hover:text-white hover:translate-x-1 transition-all inline-block font-light"
              >
                Especialidades
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={(e) => handleScrollToSection(e, "#process")}
                className="text-white/85 hover:text-white hover:translate-x-1 transition-all inline-block font-light"
              >
                Como Funciona seu Pedido
              </a>
            </li>
            <li>
              <a
                href="#upload"
                onClick={(e) => handleScrollToSection(e, "#upload")}
                className="text-white/85 hover:text-white hover:translate-x-1 transition-all inline-block font-light"
              >
                Enviar Receita Online
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info detail */}
        <div className="space-y-6 text-left">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">
            Contato & Endereço
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-container shrink-0 mt-0.5" />
              <span className="text-white/85 font-light">
                Avenida Pedro Paes de Azevedo, 700
                <br />
                Salgado Filho — Aracaju, SE
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-container shrink-0" />
              <span className="text-white/85 font-light">(79) 3000-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-container shrink-0" />
              <span className="text-white/85 font-light">contato@drphormula.com.br</span>
            </li>
          </ul>
        </div>

        {/* Timing calendar and Technical Resp. responsibility */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">
            Expediente
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-white/85 font-light">
              <Clock className="w-4 h-4 text-primary-container" />
              <span>Segunda à Sexta: 08:00 às 19:00</span>
            </li>
            <li className="flex items-center gap-2 text-white/85 font-light">
              <Clock className="w-4 h-4 text-primary-container" />
              <span>Sábado: 08:00 às 13:00</span>
            </li>
            <li className="flex items-center gap-2 text-white/75 font-light">
              <Clock className="w-4 h-4 opacity-50" />
              <span>Domingos e Feriados: Fechado</span>
            </li>
          </ul>

          {/* Technical responsibility compliance card */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
            <div className="flex items-center gap-2 mb-1.5 font-bold text-primary-container">
              <HeartHandshake className="w-4 h-4" />
              <span>Farmacêutico Responsável</span>
            </div>
            <p className="text-white/90">Dr. Ricardo Macedo Santos</p>
            <p className="text-white/75 font-light">CRF/SE nº 1234 • CRF Regional</p>
          </div>
        </div>

      </div>

      {/* Copy definitions line bottom */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/90 relative z-10 text-left">
        <p>© 2026 Dr.Phormula. Precision Compounding Pharmacy. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
