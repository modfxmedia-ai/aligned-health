import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { DoctorProfiles } from "@/app/our-team/_components/DoctorProfiles";
import { TeamHero } from "@/app/our-team/_components/TeamHero";

const PATH = "/our-team";

export const metadata: Metadata = {
 title: "Our Team · Aligned Health Chiropractors in Laguna Hills, CA",
 description:
 "Meet Dr. Dustin Hack and Dr. Tara Hadden, the Aligned Health chiropractic team serving Laguna Hills and the greater Southern California community.",
 alternates: { canonical: PATH },
 openGraph: {
 title: "Our Team · Aligned Health Chiropractors in Laguna Hills, CA",
 description:
 "Meet the chiropractic team behind Aligned Health, serving Laguna Hills and Southern California with diversified adjusting, percussion therapy, myofascial release, and more.",
 url: PATH,
 type: "website",
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
