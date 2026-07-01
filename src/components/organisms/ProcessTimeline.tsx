import { Award, CheckCircle2, ShieldCheck, Timer } from "lucide-react";

export default function ProcessTimeline() {
  const processItems = [
    "Identificação correta da prescrição",
    "Conferência farmacêutica",
    "Pesagem precisa",
    "Manipulação segura",
    "Controle de qualidade",
    "Embalagem adequada",
    "Orientação farmacêutica",
  ];

  const qualityStandards = [
    "Farmacêuticos responsáveis tecnicamente habilitados",
    "Matérias-primas de fornecedores homologados",
    "Procedimentos Operacionais Padronizados (POPs)",
    "Equipamentos calibrados",
    "Rastreabilidade completa dos lotes",
    "Controle de qualidade em todas as etapas",
    "Atendimento técnico ao prescritor",
    "Compromisso com a melhoria contínua",
  ];

  return (
    <section id="process" className="py-20 lg:py-24 bg-surface-container-low overflow-hidden border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/70 bg-white p-2 ambient-shadow">
              <img
                alt="Processo técnico de manipulação farmacêutica em laboratório"
                className="w-full h-full object-cover rounded-[1.5rem] brightness-105"
                src="/images/processo-laboratorio-v2.webp"
                width="1024"
                height="1536"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/92 backdrop-blur-md p-6 rounded-3xl border border-white/80 shadow-xl">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-2xl text-white shrink-0 shadow-lg shadow-primary/20">
                    <Timer className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-secondary font-black text-sm uppercase tracking-wide">Excelência em cada detalhe</p>
                    <p className="text-on-surface-variant text-xs leading-relaxed mt-1">
                      Processo cuidadosamente monitorado para entregar segurança e precisão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-5">
              <span className="text-primary text-xs font-black uppercase tracking-[0.24em] block">
                Nosso compromisso
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-secondary tracking-tight leading-tight">
                Excelência em cada detalhe.
              </h2>
              <p className="text-on-surface-variant text-base lg:text-lg leading-relaxed">
                Cada fórmula produzida passa por um processo cuidadosamente monitorado para garantir segurança, precisão e qualidade em todas as etapas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-outline-variant/25 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-secondary font-black text-lg">
              Porque quando falamos de saúde, cada detalhe importa.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white border border-outline-variant/25 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 bg-secondary text-white p-8 lg:p-10 text-left relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary-container/20 blur-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-primary-container flex items-center justify-center mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <span className="text-primary-container text-xs font-black uppercase tracking-[0.24em] block">
                  Nosso padrão de qualidade
                </span>
                <h2 className="text-3xl lg:text-4xl font-black leading-tight mt-4">
                  Profissionalismo sem promessas frágeis.
                </h2>
                <p className="text-white/85 leading-relaxed mt-5">
                  Uma comunicação técnica e responsável aumenta a credibilidade com prescritores e pacientes.
                </p>
              </div>
              <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-primary-container text-sm font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>Qualidade como rotina diária</span>
              </div>
            </div>

            <div className="lg:col-span-8 p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualityStandards.map((standard) => (
                <div key={standard} className="flex items-start gap-3 rounded-2xl bg-surface-container-low border border-outline-variant/20 p-4 text-left">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-on-surface">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
