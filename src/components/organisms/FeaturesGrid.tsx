import { Award, CheckCircle2, Heart, ShieldCheck, Truck } from "lucide-react";

export default function FeaturesGrid() {
  const qualityPillars = [
    {
      title: "Rigor técnico",
      description: "Equipe farmacêutica qualificada e processos acompanhados.",
      icon: <Award className="w-7 h-7" />,
    },
    {
      title: "Controle total",
      description: "Acompanhamento em todas as etapas de produção.",
      icon: <CheckCircle2 className="w-7 h-7" />,
    },
    {
      title: "Matérias-primas",
      description: "Fornecedores qualificados e insumos selecionados.",
      icon: <ShieldCheck className="w-7 h-7" />,
    },
    {
      title: "Boas práticas",
      description: "Procedimentos padronizados e melhoria contínua.",
      icon: <Heart className="w-7 h-7" />,
    },
    {
      title: "Confidencialidade",
      description: "Prescrição e dados dos pacientes tratados com sigilo.",
      icon: <ShieldCheck className="w-7 h-7" />,
    },
  ];

  const doctorReasons = [
    "Processo produtivo padronizado",
    "Matérias-primas de fornecedores qualificados",
    "Controle de qualidade em todas as etapas",
    "Rastreabilidade completa dos insumos",
    "Equipe farmacêutica especializada",
    "Atendimento rápido ao prescritor",
  ];

  return (
    <section id="quality" className="bg-surface-container-lowest border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left space-y-5">
            <span className="text-primary text-xs font-black uppercase tracking-[0.24em] block">
              Quem somos
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary tracking-tight leading-tight">
              Mais do que manipular fórmulas. Construímos relações de confiança.
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            <div className="rounded-3xl bg-surface-container-low p-7 border border-outline-variant/30 shadow-sm">
              <p className="text-on-surface-variant leading-relaxed">
                A Dr.Phormula nasceu para oferecer uma experiência diferenciada em manipulação magistral.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-7 border border-outline-variant/30 shadow-sm">
              <p className="text-on-surface-variant leading-relaxed">
                Cada prescrição é analisada cuidadosamente por uma equipe qualificada, utilizando matérias-primas selecionadas, processos rigorosos de controle de qualidade e tecnologia que garantem segurança do início ao fim.
              </p>
            </div>
            <div className="md:col-span-2 rounded-3xl bg-secondary text-white p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-primary-container/20 blur-2xl" />
              <p className="relative z-10 text-lg leading-relaxed font-light">
                Nosso compromisso é transformar cada receita em um tratamento personalizado que proporcione saúde, bem-estar, performance e qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-3 text-left flex items-center border-b lg:border-b-0 lg:border-r border-outline-variant/40 pb-6 lg:pb-0 lg:pr-8">
              <div>
                <h3 className="text-2xl font-black text-secondary uppercase leading-tight">
                  Qualidade que você pode confiar.
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
                  Somos uma farmácia de manipulação comprometida com boas práticas, segurança e cuidado em cada etapa.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-5 gap-5">
              {qualityPillars.map((pillar) => (
                <div key={pillar.title} className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl border border-primary/25 text-secondary mx-auto flex items-center justify-center bg-white shadow-sm">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-secondary uppercase tracking-wide leading-tight">{pillar.title}</h4>
                    <p className="text-[11px] text-on-surface-variant leading-snug mt-1">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3 rounded-3xl bg-secondary text-white p-7 flex flex-col justify-between min-h-[220px] shadow-xl">
              <div>
                <h3 className="text-2xl font-black uppercase leading-tight">Compromisso com a sua saúde</h3>
                <p className="text-white/85 text-sm leading-relaxed mt-4">
                  Cada fórmula é única. Cada paciente é especial. Nosso compromisso é entregar o melhor para você.
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-primary-container text-sm font-bold">
                <Truck className="w-5 h-5" />
                <span>Envio para todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="medical" className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left space-y-5">
            <span className="text-primary text-xs font-black uppercase tracking-[0.24em] block">
              Por que médicos escolhem a Dr.Phormula?
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary tracking-tight leading-tight">
              Confiança para quem prescreve. Segurança para quem utiliza.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Sabemos que uma prescrição representa muito mais do que uma receita. Representa a confiança do profissional que indicou aquele tratamento.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Por isso seguimos padrões rigorosos de qualidade durante todo o processo produtivo.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-[2rem] bg-white border border-outline-variant/30 shadow-xl p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {doctorReasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 rounded-2xl bg-surface-container-low p-4 text-left border border-outline-variant/20">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-on-surface">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
