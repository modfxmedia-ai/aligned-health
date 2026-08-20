import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { AreasHubView } from "./_components/AreasHubView";
import { LOCATIONS } from "@/lib/locations";
import { SITE_URL } from "@/lib/site";

const PATH = "/areas-we-serve";

export const metadata: Metadata = {
  title: "Areas We Serve · Orange County Chiropractic Care · Aligned Health",
  description:
    "Aligned Health serves patients across 30 Orange County cities from our Laguna Hills office, chiropractic adjustments, spinal decompression, and 12 other recovery services. Find your city.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Areas We Serve · Orange County Chiropractic Care · Aligned Health",
    description:
      "Find drive times, local details, and the full list of services available to your Orange County city.",
    url: PATH,
    type: "website",
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
