import { MouseEvent } from "react";
import { ArrowRight, CheckCircle2, FileSpreadsheet, MessageSquare, ShieldCheck } from "lucide-react";
import Button from "../atoms/Button";

export default function HeroSection() {
  const handleScrollToUpload = (e: MouseEvent<HTMLButtonElement>) => {
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

  const trustItems = [
    {
      title: "Segurança",
      description: "Processos rigorosos e controle de qualidade.",
    },
    {
      title: "Tecnologia",
      description: "Equipamentos modernos e equipe farmacêutica especializada.",
    },
    {
      title: "Confiança",
      description: "Cuidado personalizado em cada etapa do atendimento.",
    },
  ];

  const quickBenefits = [
    "Atendimento Humanizado",
    "Manipulação com Precisão",
    "Matérias-primas Selecionadas",
    "Agilidade no Orçamento e Entrega",
  ];

  return (
    <section className="relative overflow-hidden pt-28 lg:pt-24 bg-gradient-to-br from-white via-surface to-surface-container-low min-h-[92vh] flex items-center border-b border-outline-variant/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,189,214,0.16),transparent_34%),radial-gradient(circle_at_12%_18%,rgba(52,94,162,0.12),transparent_30%)] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block bg-gradient-to-l from-surface-container-high/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="space-y-7 lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs tracking-[0.22em] uppercase">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Saúde na medida exata</span>
            </div>

            <div className="space-y-5">
              <p className="text-secondary text-lg lg:text-xl font-bold tracking-tight">
                Cada fórmula é única. Cada paciente também.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary tracking-tight leading-[1.05] max-w-2xl">
                Fórmulas manipuladas com segurança, precisão e qualidade.
              </h1>
              <p className="text-on-surface-variant text-base lg:text-lg leading-relaxed max-w-2xl">
                Na Dr.Phormula, unimos rigor farmacêutico, tecnologia e atendimento humanizado para produzir fórmulas manipuladas com segurança, precisão e qualidade em cada etapa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Button
                variant="primary"
                size="lg"
                onClick={handleScrollToUpload}
                leftIcon={<FileSpreadsheet className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Enviar Receita
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleScrollToUpload}
                leftIcon={<MessageSquare className="w-5 h-5" />}
              >
                Solicitar Orçamento
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-outline-variant/30">
              {quickBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 text-xs font-semibold text-on-surface-variant">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-2xl rounded-[2rem] overflow-hidden border border-white/70 shadow-2xl bg-white p-2 ambient-shadow">
              <img
                alt="Farmacêutica manipulando fórmula em laboratório moderno"
                className="w-full h-[360px] sm:h-[460px] object-cover rounded-[1.5rem] brightness-105"
                src="/images/hero-laboratorio.webp"
                width="960"
                height="720"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              <div className="absolute top-6 right-6 w-[250px] max-w-[70%] rounded-3xl bg-white/92 backdrop-blur-md border border-white/80 shadow-xl p-5 space-y-4 hidden sm:block">
                {trustItems.map((item, index) => (
                  <div key={item.title} className={`${index > 0 ? "border-t border-outline-variant/30 pt-4" : ""} flex gap-3 text-left`}>
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-black text-secondary text-sm uppercase tracking-wide">{item.title}</p>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute left-6 bottom-6 rounded-2xl bg-secondary text-white p-5 shadow-xl max-w-[280px] hidden sm:block">
                <p className="text-xs uppercase tracking-[0.22em] font-bold text-primary-container">Compromisso</p>
                <p className="text-xl font-black mt-1">Cuidado do início ao fim</p>
                <p className="text-white/80 text-xs leading-relaxed mt-2">Cada prescrição é analisada com atenção por uma equipe qualificada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
