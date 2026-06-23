import { seoConfig } from "../config/seo.config";

const organizationId = `${seoConfig.siteUrl}/#organization`;
const websiteId = `${seoConfig.siteUrl}/#website`;
const webpageId = `${seoConfig.siteUrl}/#webpage`;

// Telefone, perfis sociais e GeoCoordinates só devem entrar após validação dos dados oficiais.
export const homePageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Pharmacy"],
      "@id": organizationId,
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/images/logo-dr-phormula.png`,
        width: 512,
        height: 216,
      },
      image: `${seoConfig.siteUrl}/images/og-dr-phormula.jpg`,
      description: seoConfig.description,
      email: "contato@drphormula.com.br",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Pedro Paes de Azevedo, 700",
        addressLocality: "Aracaju",
        addressRegion: "SE",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sergipe",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: seoConfig.siteUrl,
      name: seoConfig.siteName,
      description: seoConfig.description,
      inLanguage: seoConfig.language,
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: seoConfig.siteUrl,
      name: seoConfig.title,
      description: seoConfig.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/images/og-dr-phormula.jpg`,
        width: 1200,
        height: 630,
      },
      inLanguage: seoConfig.language,
    },
  ],
};
