import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { ServicesIntro } from "@/app/services/_components/ServicesIntro";

const PATH = "/services";

const TITLE = "Chiropractic Services · Aligned Health in Laguna Hills, CA";
const DESCRIPTION =
 "Explore all 14 services at Aligned Health in Laguna Hills, CA, chiropractic adjustments, spinal decompression, PEMF, red light therapy, and more.";

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
 url: "/images/services/chiropractic-adjustments-banner.jpg",
 width: 1774,
 height: 887,
 alt: "Chiropractic adjustment being performed at Aligned Health",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: TITLE,
 description: DESCRIPTION,
    images: ["/images/services/chiropractic-adjustments-banner.jpg"],
 },
};

export default function ServicesPage() {
 return (
 <>
 <ClinicJsonLd pagePath={PATH} />
 <ServicesIntro />
 </>
 );
}
