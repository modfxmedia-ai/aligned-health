import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { SitemapView } from "./_components/SitemapView";

const PATH = "/sitemap";

export const metadata: Metadata = {
  title: "Sitemap · Aligned Health",
  description:
    "Browse every page on the Aligned Health website, including our services, blog, and all Orange County areas we serve.",
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sitemap · Aligned Health",
    description:
      "Browse every page on the Aligned Health website, including our services, blog, and all Orange County areas we serve.",
    url: PATH,
    type: "website",
  },
};

export default function SitemapPage() {
  return (
    <>
      <ClinicJsonLd pagePath={PATH} />
      <SitemapView />
    </>
  );
}
