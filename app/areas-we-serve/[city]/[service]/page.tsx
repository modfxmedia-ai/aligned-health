import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { ServiceAreaView } from "./_components/ServiceAreaView";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  SERVICES,
} from "@/lib/services";
import { getAllLocationSlugs, getLocationBySlug } from "@/lib/locations";
import { buildServiceAreaContent } from "@/lib/serviceAreas";
import { SITE_URL } from "@/lib/site";

/**
 * /areas-we-serve/[city]/[service], the city x service combo pages
 * (14 services x 30 cities = 420 pages). Prerendered at build via
 * generateStaticParams so every combo ships as a static file.
 */

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams(): Promise<
  { city: string; service: string }[]
> {
  const cities = getAllLocationSlugs();
  const services = getAllServiceSlugs();
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city, service });
    }
  }
  return params;
}

// Unknown city/service combos 404 instead of rendering dynamically at runtime.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, service: serviceSlug } = await params;
  const location = getLocationBySlug(city);
  const service = getServiceBySlug(serviceSlug);
  if (!location || !service) return { title: "Not Found" };

  const content = buildServiceAreaContent(service, location);
  const url = `/areas-we-serve/${location.slug}/${service.slug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: content.metaTitle,
      description: content.metaDescription,
      images: [{ url: service.imageSrc, alt: service.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: [service.imageSrc],
    },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { city, service: serviceSlug } = await params;
  const location = getLocationBySlug(city);
  const service = getServiceBySlug(serviceSlug);
  if (!location || !service) notFound();

  const content = buildServiceAreaContent(service, location);
  const url = `${SITE_URL}/areas-we-serve/${location.slug}/${service.slug}`;
  const related = service.relatedSlugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "@id": url,
    url,
    name: `${service.label} in ${location.name}, CA`,
    alternateName: service.short,
    description: content.metaDescription,
    image: service.imageSrc,
    provider: {
      "@type": "MedicalClinic",
      name: "Aligned Health",
      url: `${SITE_URL}/`,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      sameAs: `https://en.wikipedia.org/wiki/${location.wikipediaSlug}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [content.localFaq, ...service.faqs.slice(0, 2)].map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.replace(/&rsquo;/g, "\u2019").replace(/&[a-z]+;/g, ""),
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Areas We Serve", item: `${SITE_URL}/areas-we-serve` },
      { "@type": "ListItem", position: 2, name: location.name, item: `${SITE_URL}/areas-we-serve/${location.slug}` },
      { "@type": "ListItem", position: 3, name: service.label, item: url },
    ],
  };

  return (
    <>
      <ClinicJsonLd
        pagePath={`/areas-we-serve/${location.slug}/${service.slug}`}
        areaServedName={location.name}
        areaServedSameAs={`https://en.wikipedia.org/wiki/${location.wikipediaSlug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceAreaView
        service={service}
        location={location}
        content={content}
        related={related}
      />
    </>
  );
}
