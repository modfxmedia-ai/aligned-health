import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { AboutApproach } from "@/app/about/_components/AboutApproach";
import { AboutClosing } from "@/app/about/_components/AboutClosing";
import { AboutIntro } from "@/app/about/_components/AboutIntro";
import { AboutTeamPreview } from "@/app/about/_components/AboutTeamPreview";
import { AboutValues } from "@/app/about/_components/AboutValues";

const PATH = "/about";

export const metadata: Metadata = {
 title: "About the Aligned Health Team · Chiropractic Care in Laguna Hills",
 description:
 "Meet the doctors behind Aligned Health, a Laguna Hills chiropractic team helping patients prevent injuries, recover strength and mobility, and get back to doing what they love.",
 alternates: { canonical: PATH },
 openGraph: {
 title: "About the Aligned Health Team · Chiropractic Care in Laguna Hills",
 description:
 "Meet the doctors behind Aligned Health, helping patients prevent injuries, recover mobility, and reach their peak performance.",
 url: PATH,
 type: "website",
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
