import { Timer, ArrowRight, ShieldAlert, Sparkles, SendToBack, Truck } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "1",
      title: "Envie sua receita",
      description: "Tire uma fotografia legível ou faça o upload direto do arquivo digital (PDF ou imagem) da sua prescrição no formulário.",
      color: "border-primary-container",
    },
    {
      number: "2",
      title: "Análise Técnica Rigorosa",
      description: "Profissionais farmacêuticos competentes avaliam minuciosamente dosagens, posologia e possíveis incompatibilidades químicas.",
      color: "border-primary",
    },
    {
      number: "3",
      title: "Manipulação de Precisão",
      description: "Sua fórmula é pesada e produzida em laboratório de atmosfera estéril computadorizado com controle pleno de temperatura e umidade.",
      color: "border-secondary",
    },
    {
      number: "4",
      title: "Entrega Rápida e Segura",
      description: "Despachamos em embalagens blindadas contra luz de forma ágil, diretamente para o conforto da sua residência.",
      color: "border-emerald-500",
    },
  ];

  return (
    <section id="process" className="py-24 bg-surface-container-low overflow-hidden border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left column: Visual display featuring real-laboratory process and float mac-badge */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 ambient-shadow">
            <img
              alt="Farmacêutico manipulando fórmula com absoluto controle estéril em laboratório"
              className="w-full h-full object-cover filter brightness-95"
              src="/images/processo-laboratorio.webp"
              width="720"
              height="900"
              loading="lazy"
              decoding="async"
            />
            
            {/* Soft Translucent macOS overlay banner */}
            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/20 shadow-xl float-anim">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full text-white shrink-0 shadow-lg shadow-primary/20">
                  <Timer className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="text-on-surface font-extrabold text-sm">Produção Expressa</p>
                  <p className="text-primary text-2xl font-black tracking-tight mt-0.5">Até 24 Horas</p>
                  <p className="text-on-surface-variant/80 text-[11px] font-medium leading-none mt-1">
                    Pronto para envio ou retirada rápido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: The vertical sequence timeline of user journey */}
        <div className="lg:col-span-7 space-y-12 text-left">
          <div className="space-y-4">
            <span className="text-primary text-xs font-bold uppercase tracking-widest block">
              Processo de Atendimento Certificado
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
              Como funciona seu pedido, do envio até você
            </h2>
            <p className="text-on-surface-variant font-light text-base lg:text-lg">
              Nossa esteira técnica é otimizada por processos automatizados para entregar segurança molecular sem abrir mão da eficiência operacional.
            </p>
          </div>

          <div className="space-y-6 relative">
            {/* Absolute indicator line linking steps */}
            <div className="absolute left-6 top-3 bottom-3 w-0.5 bg-outline-variant/30 hidden sm:block pointer-events-none" />

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group transition-all"
              >
                {/* Numeric Indicator */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-container text-primary flex items-center justify-center font-extrabold text-lg shadow-md shrink-0 z-10 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  {step.number}
                </div>

                {/* Card describing step */}
                <div className="bg-white p-6 rounded-2xl border border-outline-variant/20 shadow-sm group-hover:shadow-md group-hover:translate-x-1.5 transition-all duration-250 flex-1 text-left">
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
