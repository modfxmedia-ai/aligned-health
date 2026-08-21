import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { AboutApproach } from "@/app/about/_components/AboutApproach";
import { AboutClosing } from "@/app/about/_components/AboutClosing";
import { AboutIntro } from "@/app/about/_components/AboutIntro";
import { AboutTeamPreview } from "@/app/about/_components/AboutTeamPreview";
import { AboutValues } from "@/app/about/_components/AboutValues";

const PATH = "/about";

const TITLE = "About the Aligned Health Team · Chiropractic Care in Laguna Hills";
const DESCRIPTION =
 "Meet the doctors behind Aligned Health, the Laguna Hills chiropractic team helping patients prevent injuries and recover strength, balance, and mobility.";

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

export default function AboutPage() {
 return (
 <>
 <ClinicJsonLd pagePath={PATH} />
 <AboutIntro />
 <AboutValues />
 <AboutApproach />
 <AboutTeamPreview />
 <AboutClosing />
 </>
 );
}
