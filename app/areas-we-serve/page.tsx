import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { AreasHubView } from "./_components/AreasHubView";
import { LOCATIONS } from "@/lib/locations";
import { SITE_URL } from "@/lib/site";

const PATH = "/areas-we-serve";

const TITLE = "Areas We Serve · Orange County Chiropractic Care · Aligned Health";
const DESCRIPTION =
  "Aligned Health serves patients across 30 Orange County cities from our Laguna Hills office with chiropractic adjustments, spinal decompression, and more.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: "website",
    images: [
      {
        url: "/images/about/about-hero-office.jpg",
        width: 768,
        height: 1024,
        alt: "Aligned Health interior office in Laguna Hills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/about/about-hero-office.jpg"],
  },
};

export default function AreasWeServePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: LOCATIONS.map((location, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: location.name,
      url: `${SITE_URL}/areas-we-serve/${location.slug}`,
    })),
  };

  return (
    <>
      <ClinicJsonLd pagePath={PATH} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <AreasHubView />
    </>
  );
}
