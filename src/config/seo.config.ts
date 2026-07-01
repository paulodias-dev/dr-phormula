const siteUrl = "https://drphormulabrasil.com.br";

export const seoConfig = {
  title: "Dr.Phormula | Saúde na medida exata",
  titleTemplate: "%s | Dr.Phormula",
  description:
    "Farmácia de manipulação com fórmulas personalizadas, rigor farmacêutico, tecnologia, atendimento humanizado e orçamento online para pacientes e prescritores.",
  keywords: [
    "farmácia de manipulação",
    "fórmulas manipuladas",
    "medicamentos personalizados",
    "orçamento de fórmula manipulada",
    "enviar receita online",
    "suplementação personalizada",
    "farmácia magistral",
    "atendimento farmacêutico",
    "suporte ao prescritor",
  ],
  author: "Dr.Phormula",
  siteName: "Dr.Phormula",
  siteUrl,
  locale: "pt_BR",
  language: "pt-BR",
  themeColor: "#006877",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Dr.Phormula | Saúde na medida exata",
    description:
      "Fórmulas manipuladas com segurança, precisão, qualidade e atendimento humanizado. Envie sua receita e solicite seu orçamento online.",
    url: siteUrl,
    siteName: "Dr.Phormula",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: `${siteUrl}/images/og-dr-phormula.jpg`,
        secureUrl: `${siteUrl}/images/og-dr-phormula.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Dr.Phormula — fórmulas personalizadas e saúde na medida exata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // Preencha somente depois de confirmar os perfis oficiais, incluindo o @.
    site: "",
    creator: "",
  },
  verification: {
    // Cole aqui o token fornecido pelo Google Search Console.
    google: "",
  },
} as const;

export type SeoConfig = typeof seoConfig;
