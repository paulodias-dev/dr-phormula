import React, { MouseEvent } from "react";
import { ShieldCheck, ArrowRight, MessageSquare, FileSpreadsheet } from "lucide-react";
import Button from "../atoms/Button";

export default function HeroSection() {
  const handleScrollToUpload = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#upload");
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
    <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-surface via-surface-container-low to-surface-container-high/40 min-h-[90vh] flex items-center">
      {/* Decorative ambient background blur vectors */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px]. h-[450px] bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copywrite */}
          <div className="space-y-8 lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs tracking-wider uppercase animate-fade-in">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Farmácia de Manipulação Certificada ANVISA</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.1] max-w-2xl">
                Saúde na <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-primary-container">medida exata.</span>
              </h1>
              <p className="text-on-surface-variant text-lg lg:text-xl font-light leading-relaxed max-w-lg">
                Sua fórmula manipulada por especialistas com precisão molecular, segurança técnica e rapidez. Soluções personalizadas desenhadas estritamente para o seu bem-estar.
              </p>
            </div>

            {/* Tactile conversion triggers */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handleScrollToUpload}
                leftIcon={<FileSpreadsheet className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Enviar Receita
              </Button>
              <a
                href="https://wa.me/557930000000?text=Olá, Dr. Phormula! Gostaria de falar com um de seus farmacêuticos especialistas sobre uma fórmula."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  leftIcon={<MessageSquare className="w-5 h-5" />}
                >
                  Falar com Especialista
                </Button>
              </a>
            </div>

            {/* Core features indicators under Hero */}
            <div className="pt-6 border-t border-outline-variant/30 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold text-on-surface-variant/80">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                <span>Rigoroso Controle de Insumos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                <span>Atendimento Consultivo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                <span>Laboratório de Última Geração</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase - Mac-style overlapping frame with subtle float interaction */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-[90px] animate-pulse duration-[6s] pointer-events-none" />
            
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-white/50 p-2 float-anim ambient-shadow">
              <div className="absolute top-4 left-4 z-20 flex gap-1.5 p-1 rounded-full bg-white/60 backdrop-blur-md border border-white/20">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              
              <img
                alt="Alta tecnologia e precisão de laboratório de manipulação"
                className="w-full h-full object-cover rounded-2xl filter brightness-95"
                src="/images/hero-laboratorio.webp"
                width="960"
                height="720"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              
              {/* Overlapping badge */}
              <div className="absolute bottom-6 left-6 z-20 glass p-4 rounded-2xl border border-white/20 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                  24h
                </div>
                <div className="text-xs text-left">
                  <p className="font-extrabold text-on-surface">Entrega Rápida</p>
                  <p className="text-on-surface-variant font-light">Envios seguros em todo estado.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
