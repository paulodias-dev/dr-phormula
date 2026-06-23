import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  const specialties = [
    {
      id: "wellness",
      title: "Saúde e Bem-Estar",
      tag: "Equilíbrio Integral",
      description: "Suplementação preventiva personalizada, fitoterápicos e vitaminas sob prescrição exata para fortalecer imunidade.",
      imageUrl: "/images/servico-bem-estar.webp",
    },
    {
      id: "performance",
      title: "Performance Física",
      tag: "Suplementação Esportiva",
      description: "Fórmulas ergogênicas avançadas para aumento de performance, regeneração e fadiga controlada para atletas.",
      imageUrl: "/images/servico-performance.webp",
    },
    {
      id: "longev",
      title: "Longevidade Saudável",
      tag: "Envelhecimento Ativo",
      description: "Moduladores biológicos, antioxidantes e compostos de suporte celular focados na vitalidade ao longo dos anos.",
      imageUrl: "/images/servico-longevidade.webp",
    },
    {
      id: "beauty",
      title: "Beleza e Estética",
      tag: "Dermatologia Avançada",
      description: "Cosméticos clínicos sob medida, cremes anti-sinais de alta eficácia e nutricosméticos para rejuvenescimento integral.",
      imageUrl: "/images/servico-estetica.webp",
    },
  ];

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 whitespace-normal">
        
        {/* Header containing inline-navigation trigger */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 text-left">
          <div className="space-y-4">
            <span className="text-primary text-xs font-bold uppercase tracking-widest block">
              Nossas Especialidades Médicas
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
              Soluções para todas as fases e necessidades da vida
            </h2>
          </div>
          <a
            href="https://wa.me/557930000000?text=Olá! Gostaria de consultar os serviços completos da Dr. Phormula."
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold inline-flex items-center gap-1.5 hover:underline decoration-2 underline-offset-4 shrink-0 transition-all text-sm group-hover:translate-x-1"
          >
            Falar com nossa equipe <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4-column elegant Card block with rich image background + overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className="group relative overflow-hidden rounded-2xl h-[400px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-outline-variant/20 ambient-shadow"
            >
              {/* Image with zoom transition */}
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={spec.imageUrl}
                id={`bg-image-${spec.id}`}
                width="560"
                height="800"
                loading="lazy"
                decoding="async"
              />
              
              {/* Deep modern gradient shadow representation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />
              
              {/* Content overlay positioning */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left h-2/3">
                <span className="text-primary-container text-xs font-bold uppercase tracking-wider mb-2 opacity-90">
                  {spec.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-primary-container transition-colors duration-200">
                  {spec.title}
                </h3>
                
                {/* Secondary detail showing progressively */}
                <p className="text-white/85 text-xs font-light leading-relaxed h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mt-1 mt-0">
                  {spec.description}
                </p>
              </div>

              {/* Little corner link indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-primary-container/90 group-hover:text-on-primary-container transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
