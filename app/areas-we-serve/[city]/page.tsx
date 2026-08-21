import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { CityAreaView } from "./_components/CityAreaView";
import { SERVICES } from "@/lib/services";
import { getAllLocationSlugs, getLocationBySlug } from "@/lib/locations";
import { buildCityOverview } from "@/lib/serviceAreas";
import { SITE_URL } from "@/lib/site";

/**
 * /areas-we-serve/[city], one landing page per served city (30 total).
 * Prerendered at build via generateStaticParams.
 */

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams(): Promise<{ city: string }[]> {
  return getAllLocationSlugs().map((city) => ({ city }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return { title: "Not Found" };

  const url = `/areas-we-serve/${location.slug}`;
  const title = `Chiropractor in ${location.name}, CA \u00b7 Aligned Health`;
  const description = `Chiropractic adjustments, spinal decompression, and 12 other recovery services for ${location.name}, CA patients at Aligned Health in Laguna Hills. Schedule now, most PPO plans accepted.`;
  const image = "/images/about/about-hero-office.jpg";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [
        { url: image, width: 768, height: 1024, alt: "Aligned Health interior office in Laguna Hills" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function CityAreaPage({ params }: PageProps) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  const content = buildCityOverview(location);
  const url = `${SITE_URL}/areas-we-serve/${location.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Areas We Serve", item: `${SITE_URL}/areas-we-serve` },
      { "@type": "ListItem", position: 2, name: location.name, item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: content.localFaq.q,
        acceptedAnswer: { "@type": "Answer", text: content.localFaq.a },
      },
    ],
  };

  return (
    <>
      <ClinicJsonLd
        pagePath={`/areas-we-serve/${location.slug}`}
        areaServedName={location.name}
        areaServedSameAs={`https://en.wikipedia.org/wiki/${location.wikipediaSlug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CityAreaView location={location} services={SERVICES} content={content} />
    </>
  );
}
