import { ArrowUpRight, CheckCircle2, Heart, MessageSquare, ShieldCheck, Truck } from "lucide-react";

export default function ServicesGrid() {
  const specialties = [
    "Nutrologia",
    "Endocrinologia",
    "Ginecologia",
    "Dermatologia",
    "Pediatria",
    "Clínica Médica",
    "Medicina Esportiva",
    "Ortopedia",
    "Gastroenterologia",
    "Longevidade",
    "Estética",
    "Performance Esportiva",
  ];

  const differentiators = [
    "Atendimento consultivo",
    "Agilidade no orçamento",
    "Atendimento via WhatsApp",
    "Envio para todo o Brasil",
    "Fórmulas totalmente personalizadas",
    "Tecnologia de manipulação",
    "Controle rigoroso de qualidade",
    "Farmacêuticos especializados",
    "Suporte ao prescritor",
  ];

  const solutionCards = [
    {
      title: "Saúde e bem-estar",
      description: "Fórmulas sob medida para apoiar tratamentos prescritos e rotinas de cuidado.",
      imageUrl: "/images/servico-bem-estar.webp",
    },
    {
      title: "Performance e esporte",
      description: "Suplementação personalizada para objetivos de performance e recuperação.",
      imageUrl: "/images/servico-performance.webp",
    },
    {
      title: "Saúde da pele e beleza",
      description: "Dermocosméticos e fórmulas individualizadas para adesão ao cuidado diário.",
      imageUrl: "/images/servico-estetica.webp",
    },
    {
      title: "Imunidade e longevidade",
      description: "Compostos personalizados para diferentes fases da vida, sempre sob orientação profissional.",
      imageUrl: "/images/servico-longevidade.webp",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 whitespace-normal space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 text-left space-y-5">
            <span className="text-primary text-xs font-black uppercase tracking-[0.24em] block">
              Para quem é a Dr.Phormula
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary tracking-tight leading-tight">
              Soluções personalizadas para todas as fases da vida.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Atendemos pacientes e prescritores em diferentes áreas clínicas, sempre com foco em personalização, segurança e orientação profissional.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3">
            {specialties.map((specialty) => (
              <div key={specialty} className="rounded-2xl bg-white border border-outline-variant/25 px-4 py-3 flex items-center gap-2 shadow-sm text-left">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-bold text-secondary">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-outline-variant/20 bg-surface-container-low shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-4 bg-white p-8 lg:p-10 text-left flex flex-col justify-center">
              <span className="text-primary text-xs font-black uppercase tracking-[0.24em] block">
                Soluções personalizadas
              </span>
              <h2 className="text-3xl font-black text-secondary leading-tight mt-4">
                Para diferentes necessidades.
              </h2>
              <p className="text-on-surface-variant leading-relaxed mt-4">
                Manipulados sob medida para você, com orientação profissional e acompanhamento consultivo.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {solutionCards.map((card) => (
                <div key={card.title} className="group relative min-h-[320px] overflow-hidden border-l border-white/30">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={card.imageUrl}
                    width="560"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                    <h3 className="text-xl font-black text-white leading-tight">{card.title}</h3>
                    <p className="text-white/85 text-xs leading-relaxed mt-2">{card.description}</p>
                    <ArrowUpRight className="w-5 h-5 text-primary-container mt-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 text-left space-y-5">
            <span className="text-primary text-xs font-black uppercase tracking-[0.24em] block">
              Diferenciais
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary tracking-tight leading-tight">
              O que faz a Dr.Phormula ser diferente?
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white border border-outline-variant/25 p-4 shadow-sm text-left">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-bold text-on-surface">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-[2rem] bg-white border border-outline-variant/25 p-8 lg:p-10 text-left shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Heart className="w-7 h-7" />
            </div>
            <span className="text-primary text-xs font-black uppercase tracking-[0.24em] block">Para o paciente</span>
            <h3 className="text-3xl font-black text-secondary leading-tight mt-3">
              Sua saúde merece um tratamento personalizado.
            </h3>
            <p className="text-on-surface-variant leading-relaxed mt-5">
              Cada organismo é único. Por isso acreditamos que uma fórmula personalizada pode oferecer mais precisão, mais praticidade e melhor adesão ao tratamento prescrito pelo seu médico.
            </p>
            <p className="text-on-surface-variant leading-relaxed mt-4">
              Nossa missão é entregar segurança em cada cápsula, sachê, creme ou suplemento manipulado.
            </p>
          </div>

          <div className="rounded-[2rem] bg-secondary text-white p-8 lg:p-10 text-left shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary-container/20 blur-2xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-primary-container flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7" />
              </div>
              <span className="text-primary-container text-xs font-black uppercase tracking-[0.24em] block">Para o prescritor</span>
              <h3 className="text-3xl font-black leading-tight mt-3">
                Um parceiro que valoriza sua prescrição.
              </h3>
              <p className="text-white/85 leading-relaxed mt-5">
                Mais do que manipular fórmulas, queremos construir uma parceria baseada em confiança.
              </p>
              <p className="text-white/85 leading-relaxed mt-4">
                Nossa equipe oferece suporte técnico, atendimento ágil e compromisso absoluto com a qualidade para que cada prescrição seja executada exatamente como planejada.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-3xl bg-surface-container-low border border-outline-variant/25 p-6 text-left">
            <ShieldCheck className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-black text-secondary">Segurança</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mt-2">Processos acompanhados e documentação organizada para cada demanda.</p>
          </div>
          <div className="rounded-3xl bg-surface-container-low border border-outline-variant/25 p-6 text-left">
            <Truck className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-black text-secondary">Entrega</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mt-2">Atendimento ágil no orçamento, produção e envio, conforme disponibilidade e necessidade.</p>
          </div>
          <div className="rounded-3xl bg-surface-container-low border border-outline-variant/25 p-6 text-left">
            <MessageSquare className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-black text-secondary">Consultoria</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mt-2">Canal direto para pacientes e prescritores tirarem dúvidas sobre o pedido.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
