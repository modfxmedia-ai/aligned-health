import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { DoctorProfiles } from "@/app/our-team/_components/DoctorProfiles";
import { TeamHero } from "@/app/our-team/_components/TeamHero";

const PATH = "/our-team";

const TITLE = "Our Team · Aligned Health Chiropractors in Laguna Hills, CA";
const DESCRIPTION =
 "Meet Dr. Dustin Hack and Dr. Tara Hadden, the Aligned Health chiropractic team serving Laguna Hills and the greater Southern California community.";

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
 url: "/images/contact-us/hero-v2.jpg",
 width: 2400,
 height: 1018,
 alt: "Aligned Health chiropractic office in Laguna Hills, CA",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: TITLE,
 description: DESCRIPTION,
 images: ["/images/contact-us/hero-v2.jpg"],
 },
};

export default function OurTeamPage() {
 return (
 <>
 <ClinicJsonLd pagePath={PATH} />
 <TeamHero />
 <DoctorProfiles />
 </>
 );
}
