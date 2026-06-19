import { ShieldCheck, CalendarRange } from "lucide-react";

export default function TrustPartners() {
  const partners = [
    { label: "ANVISA", details: "Registro Sanitário Certificado" },
    { label: "CRF-SP", details: "Conselho Regional" },
    { label: "ISO 9001", details: "Gestão de Qualidade" },
    { label: "ABRALE", details: "Insumos Controlados" },
    { label: "ANFARMAG", details: "Associação Nacional" },
  ];

  return (
    <section className="py-20 bg-surface-container-low border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
        
        {/* Core statement */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto text-secondary mb-2 animate-pulse">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-secondary leading-tight">
            Confiança para pacientes. <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-primary-container">Segurança técnica para prescritores.</span>
          </h2>
          <p className="text-on-surface-variant text-base lg:text-lg font-light leading-relaxed">
            Trabalhamos em estreita colaboração e sinergia com médicos especialistas, nutricionistas, dermatologistas e veterinários para garantir que cada fórmula seja executada rigorosamente conforme prescrita.
          </p>
        </div>

        {/* Partners alignment */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center pt-4">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-outline-variant/20 hover:border-primary/40 text-center transition-all duration-350 cursor-pointer hover:shadow-md group"
            >
              <p className="font-black text-2xl text-outline group-hover:text-primary transition-all duration-300 tracking-wide">
                {partner.label}
              </p>
              <p className="text-[10px] uppercase font-bold text-on-surface-variant/50 tracking-wider mt-1 group-hover:text-secondary transition-colors">
                {partner.details}
              </p>
            </div>
          ))}
        </div>

        <div className="text-xs text-on-surface-variant/60 font-light max-w-md mx-auto pt-4 flex items-center justify-center gap-2">
          <CalendarRange className="w-4 h-4 text-primary shrink-0" />
          <span>Fórmulas produzidas estritamente sob as definições da RDC 67/07 da ANVISA</span>
        </div>

      </div>
    </section>
  );
}
