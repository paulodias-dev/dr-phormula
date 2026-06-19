import { Heart, Award, ShieldCheck, Truck } from "lucide-react";

export default function FeaturesGrid() {
  const valuePropositions = [
    {
      id: "atend",
      title: "Atendimento Humanizado",
      description: "Suporte consultivo dedicado para acolher e compreender suas particularidades.",
      icon: <Heart className="w-6 h-6 text-primary" />,
      color: "from-rose-500/10 to-transparent",
    },
    {
      id: "qual",
      title: "Qualidade Garantida",
      description: "Rigoroso controle e triagem de matérias-primas importadas de alta pureza.",
      icon: <Award className="w-6 h-6 text-primary" />,
      color: "from-blue-500/10 to-transparent",
    },
    {
      id: "prod",
      title: "Produção Segura",
      description: "Laboratórios estéreis avançados, equipados sob rigorosas normas de biossegurança.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      color: "from-emerald-500/10 to-transparent",
    },
    {
      id: "entre",
      title: "Entrega Ágil",
      description: "Rastreio e logística otimizada para você iniciar seu tratamento sem demora.",
      icon: <Truck className="w-6 h-6 text-primary" />,
      color: "from-amber-500/10 to-transparent",
    },
  ];

  return (
    <section id="quality" className="py-24 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Alignment */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary rounded-full">
            Nossos Pilares de Confiança
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
            Cada fórmula é única e preciosa
          </h2>
          <p className="text-on-surface-variant text-base lg:text-lg font-light leading-relaxed">
            Nosso compromisso consiste na união ideal entre rigor técnico farmacêutico e o cuidado verdadeiramente humanizado que você merece.
          </p>
        </div>

        {/* 4-column Bento grid with hover transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropositions.map((prop) => (
            <div
              key={prop.id}
              className="p-8 rounded-2xl bg-white border border-outline-variant/30 hover:border-primary-container hover:shadow-xl transition-all duration-350 cursor-default group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-6 relative z-10 text-left">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-container/10 transition-all duration-300">
                  {prop.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>

              {/* Decorative design accent line */}
              <div className="h-1 bg-gradient-to-r from-primary/30 to-primary-container/30 w-0 group-hover:w-full transition-all duration-300 mt-6 rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
