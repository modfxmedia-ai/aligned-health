import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { ServicePageView } from "./_components/ServicePageView";
import {
 getAllServiceSlugs,
 getRelatedServices,
 getServiceBySlug,
} from "@/lib/services";
import { SITE_URL } from "@/lib/site";

/**
 * /services/[slug], dynamic service detail page. Prerendered at build
 * via generateStaticParams so every service ships as a static file.
 */

interface PageProps {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
 return getAllServiceSlugs().map((slug) => ({ slug }));
}

// Unknown slugs 404 instead of rendering dynamically at runtime.
export const dynamicParams = false;

export async function generateMetadata({
 params,
}: PageProps): Promise<Metadata> {
 const { slug } = await params;
 const service = getServiceBySlug(slug);
 if (!service) return { title: "Not Found" };

 const url = `/services/${service.slug}`;
 return {
 title: { absolute: service.metaTitle },
 description: service.metaDescription.replace(/&[a-z]+;/g, ""),
 keywords: service.keywords,
 alternates: { canonical: url },
 openGraph: {
 type: "article",
 url,
 title: service.metaTitle,
 description: service.metaDescription.replace(/&[a-z]+;/g, ""),
 images: [{ url: service.imageSrc, alt: service.imageAlt }],
 },
 twitter: {
 card: "summary_large_image",
 title: service.metaTitle,
 description: service.metaDescription.replace(/&[a-z]+;/g, ""),
 images: [service.imageSrc],
 },
 };
}

export default async function ServiceDetailPage({ params }: PageProps) {
 const { slug } = await params;
 const service = getServiceBySlug(slug);
 if (!service) notFound();

 const related = getRelatedServices(slug);
 const url = `${SITE_URL}/services/${service.slug}`;

 // MedicalTherapy / Service JSON-LD for richer SERP presentation.
 const serviceJsonLd = {
 "@context": "https://schema.org",
 "@type": "MedicalTherapy",
 "@id": url,
 url,
 name: service.label,
 alternateName: service.short,
 description: service.metaDescription.replace(/&[a-z]+;/g, ""),
 image: service.imageSrc,
 provider: {
 "@type": "MedicalClinic",
 name: "Aligned Health",
      url: `${SITE_URL}/`,
 },
 availableService: service.indications.map((ind) => ({
 "@type": "MedicalIndication",
 description: ind.replace(/&[a-z]+;/g, ""),
 })),
 };

 // FAQPage JSON-LD for FAQ rich-result eligibility.
 const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: service.faqs.map((f) => ({
 "@type": "Question",
 name: f.q.replace(/&[a-z]+;/g, ""),
 acceptedAnswer: {
 "@type": "Answer",
 text: f.a.replace(/&[a-z]+;/g, ""),
 },
 })),
 };

 return (
 <>
 <ClinicJsonLd pagePath={`/services/${service.slug}`} />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />
 <ServicePageView service={service} related={related} />
 </>
 );
}
