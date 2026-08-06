import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { ServicesIntro } from "@/app/services/_components/ServicesIntro";

const PATH = "/services";

export const metadata: Metadata = {
 title: "Chiropractic Services · Aligned Health in Laguna Hills, CA",
 description:
 "Explore all 14 services at Aligned Health, chiropractic adjustments, spinal decompression, PEMF, cupping, red light therapy, pneumatic compressions, auto and personal injury care, and more, in Laguna Hills, CA.",
 alternates: { canonical: PATH },
 openGraph: {
 title: "Chiropractic Services · Aligned Health in Laguna Hills, CA",
 description:
 "14 advanced treatment and therapeutic modalities offered at Aligned Health, from Diversified adjusting and spinal decompression to PEMF, red light, and auto/personal injury care.",
 url: PATH,
 type: "website",
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
