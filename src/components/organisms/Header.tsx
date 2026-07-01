import React, { useState, useEffect, MouseEvent } from "react";
import { Menu, X, PhoneCall, FileText } from "lucide-react";
import Button from "../atoms/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Quem Somos", href: "#quality" },
    { label: "Prescritores", href: "#medical" },
    { label: "Especialidades", href: "#services" },
    { label: "Qualidade", href: "#process" },
    { label: "Orçamento", href: "#upload" },
    { label: "Contato", href: "#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 h-20 transition-all duration-300 border-b ${
        isScrolled
          ? "glass shadow-md border-outline-variant/20 py-2"
          : "bg-white/90 backdrop-blur-md border-transparent py-4"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
        >
          <img
            src="/images/logo-dr-phormula-ui.webp"
            alt="Dr.Phormula - Saúde na Medida Exata"
            className="h-12 w-auto object-contain mix-blend-multiply"
            id="header-logo-img"
            width="256"
            height="108"
            fetchPriority="high"
          />
        </a>

        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-2 text-sm font-bold text-on-surface-variant hover:text-primary rounded-lg hover:bg-primary-container/5 transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/557930000000?text=Olá, Dr.Phormula! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" leftIcon={<PhoneCall className="w-4 h-4" />}>
              Solicitar Orçamento
            </Button>
          </a>
          <a href="#upload" onClick={(e) => handleLinkClick(e, "#upload")}>
            <Button variant="primary" size="sm" leftIcon={<FileText className="w-4 h-4" />}>
              Enviar Receita
            </Button>
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 text-on-surface hover:bg-neutral-100 rounded-xl transition-all"
          aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-outline-variant/20 shadow-xl py-6 px-6 space-y-4 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-3 px-4 text-base font-semibold text-on-surface hover:text-primary hover:bg-surface-container-low rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-outline-variant/10 flex flex-col gap-3">
            <a
              href="https://wa.me/557930000000?text=Olá, Dr.Phormula! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="outline"
                fullWidth
                className="py-3"
                leftIcon={<PhoneCall className="w-4 h-4" />}
              >
                Solicitar Orçamento
              </Button>
            </a>
            <a
              href="#upload"
              onClick={(e) => handleLinkClick(e, "#upload")}
              className="w-full"
            >
              <Button
                variant="primary"
                fullWidth
                className="py-3"
                leftIcon={<FileText className="w-4 h-4" />}
              >
                Enviar Receita
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
