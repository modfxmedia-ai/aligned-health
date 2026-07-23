import { CLINIC, SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * Emits MedicalClinic + LocalBusiness JSON-LD for Aligned Health.
 *
 * Drop into any Server Component (typically a `page.tsx`) to inject the
 * structured data snippet into the rendered HTML. Passing a `pagePath`
 * customizes the `url` field so per-page schema stays canonical.
 */
export interface ClinicJsonLdProps {
  /** Route path for this page (e.g. "/home", "/contact-us"). Defaults to site root. */
  pagePath?: string;
  /** Optional stable `@id` override. Defaults to `${SITE_URL}#clinic`. */
  id?: string;
}

export function ClinicJsonLd({ pagePath, id }: ClinicJsonLdProps) {
  const url = pagePath ? absoluteUrl(pagePath) : SITE_URL;

  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": id ?? `${SITE_URL}#clinic`,
    name: CLINIC.name,
    description: CLINIC.description,
    url,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    priceRange: "$$",
    medicalSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Chiropractic",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.street,
      addressLocality: CLINIC.address.city,
      addressRegion: CLINIC.address.region,
      postalCode: CLINIC.address.postalCode,
      addressCountry: CLINIC.address.country,
    },
    areaServed: {
      "@type": "City",
      name: "Laguna Hills",
      sameAs: "https://en.wikipedia.org/wiki/Laguna_Hills,_California",
    },
    serviceType: "Chiropractic Care and Wellness Services",
    availableService: [
      { "@type": "MedicalTherapy", name: "Chiropractic Care" },
      { "@type": "MedicalTherapy", name: "Wellness Services" },
    ],
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Insurance",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CLINIC.phone,
      email: CLINIC.email,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(
      `${CLINIC.address.street}, ${CLINIC.address.city}, ${CLINIC.address.region} ${CLINIC.address.postalCode}`
    )}`,
  } as const;

  return (
    <script
      type="application/ld+json"
      // JSON.stringify produces safe JSON; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default ClinicJsonLd;
