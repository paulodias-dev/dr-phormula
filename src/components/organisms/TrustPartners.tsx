import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Button from "../atoms/Button";

export default function TrustPartners() {
  const guaranteeItems = [
    "Processos seguros",
    "Equipe capacitada",
    "Excelência operacional",
    "Tranquilidade para pacientes",
    "Confiança para prescritores",
  ];

  return (
    <section className="py-20 lg:py-24 bg-surface-container-lowest border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-[2rem] bg-surface-container-low border border-outline-variant/25 p-8 lg:p-10 text-left shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="text-primary text-xs font-black uppercase tracking-[0.24em] block">
              Nossa garantia
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-secondary leading-tight mt-4">
              Qualidade é um compromisso diário.
            </h2>
            <p className="text-on-surface-variant leading-relaxed mt-5">
              Na Dr.Phormula trabalhamos continuamente para garantir processos seguros, equipe capacitada e excelência operacional, proporcionando confiança para prescritores e tranquilidade para pacientes.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-[2rem] bg-white border border-outline-variant/25 p-8 lg:p-10 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guaranteeItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-surface-container-low p-4 border border-outline-variant/20 text-left">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-secondary text-white p-8 lg:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,189,214,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-primary-container text-xs font-black uppercase tracking-[0.24em] block">
              Chamada final
            </span>
            <h2 className="text-3xl lg:text-5xl font-black leading-tight">
              Sua saúde merece a medida exata.
            </h2>
            <p className="text-white/85 text-lg leading-relaxed">
              Seja para um tratamento, suplementação, longevidade ou performance, conte com uma farmácia que transforma precisão em cuidado.
            </p>
            <a href="#upload" className="inline-flex">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Solicite seu orçamento agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
