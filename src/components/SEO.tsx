import { useEffect, useMemo } from "react";
import { seoConfig } from "../config/seo.config";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageType?: string;
  url?: string;
  type?: "website" | "article" | "profile" | string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  jsonLd?: JsonLd;
}

function absoluteUrl(value: string) {
  return new URL(value, `${seoConfig.siteUrl}/`).toString();
}

function upsertMeta(attribute: "name" | "property", key: string, content?: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    if (element?.dataset.seoDynamic === "true") element.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.dataset.seoDynamic = "true";
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = url;
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imageType,
  url,
  type,
  publishedTime,
  modifiedTime,
  noIndex = false,
  jsonLd,
}: SEOProps) {
  const serializedJsonLd = useMemo(() => (jsonLd ? JSON.stringify(jsonLd) : ""), [jsonLd]);
  const serializedKeywords = useMemo(() => (keywords ?? seoConfig.keywords).join(", "), [keywords]);

  useEffect(() => {
    const resolvedTitle = title
      ? seoConfig.titleTemplate.replace("%s", title)
      : seoConfig.title;
    const resolvedDescription = description ?? seoConfig.description;
    const resolvedSocialTitle = title ? resolvedTitle : seoConfig.openGraph.title;
    const resolvedSocialDescription = description ?? seoConfig.openGraph.description;
    const resolvedUrl = absoluteUrl(url ?? seoConfig.openGraph.url);
    const defaultImage = seoConfig.openGraph.images[0];
    const resolvedImage = absoluteUrl(image ?? defaultImage.url);
    const resolvedImageAlt = imageAlt ?? defaultImage.alt;
    const resolvedType = type ?? seoConfig.openGraph.type;
    const robots = noIndex ? "noindex, nofollow" : seoConfig.robots;

    document.title = resolvedTitle;
    document.documentElement.lang = seoConfig.language;

    upsertMeta("name", "description", resolvedDescription);
    upsertMeta("name", "viewport", "width=device-width, initial-scale=1, viewport-fit=cover");
    upsertMeta("name", "keywords", serializedKeywords);
    upsertMeta("name", "author", seoConfig.author);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "googlebot", noIndex ? "noindex, nofollow" : seoConfig.googlebot);
    upsertMeta("name", "theme-color", seoConfig.themeColor);
    upsertMeta("name", "google-site-verification", seoConfig.verification.google);

    upsertMeta("property", "og:title", resolvedSocialTitle);
    upsertMeta("property", "og:description", resolvedSocialDescription);
    upsertMeta("property", "og:url", resolvedUrl);
    upsertMeta("property", "og:type", resolvedType);
    upsertMeta("property", "og:site_name", seoConfig.openGraph.siteName);
    upsertMeta("property", "og:locale", seoConfig.openGraph.locale);
    upsertMeta("property", "og:image", resolvedImage);
    upsertMeta("property", "og:image:secure_url", resolvedImage);
    upsertMeta("property", "og:image:width", String(imageWidth ?? defaultImage.width));
    upsertMeta("property", "og:image:height", String(imageHeight ?? defaultImage.height));
    upsertMeta("property", "og:image:type", imageType ?? defaultImage.type);
    upsertMeta("property", "og:image:alt", resolvedImageAlt);
    upsertMeta("property", "article:published_time", publishedTime);
    upsertMeta("property", "article:modified_time", modifiedTime);

    upsertMeta("name", "twitter:card", seoConfig.twitter.card);
    upsertMeta("name", "twitter:site", seoConfig.twitter.site);
    upsertMeta("name", "twitter:creator", seoConfig.twitter.creator);
    upsertMeta("name", "twitter:title", resolvedSocialTitle);
    upsertMeta("name", "twitter:description", resolvedSocialDescription);
    upsertMeta("name", "twitter:image", resolvedImage);
    upsertMeta("name", "twitter:image:alt", resolvedImageAlt);

    upsertCanonical(resolvedUrl);

    if (serializedJsonLd) {
      let script = document.head.querySelector<HTMLScriptElement>("#structured-data");

      if (!script) {
        script = document.createElement("script");
        script.id = "structured-data";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      script.textContent = serializedJsonLd.replace(/</g, "\\u003c");
    }
  }, [
    description,
    image,
    imageAlt,
    imageHeight,
    imageType,
    imageWidth,
    modifiedTime,
    noIndex,
    publishedTime,
    serializedJsonLd,
    serializedKeywords,
    title,
    type,
    url,
  ]);

  return null;
}
