import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { AppointmentsIntro } from "@/app/appointments/_components/AppointmentsIntro";

const PATH = "/appointments";

const TITLE = "Book an Appointment · Aligned Health Chiropractic in Laguna Hills";
const DESCRIPTION =
 "Book your chiropractic appointment at Aligned Health in Laguna Hills, CA. Schedule now, most PPO plans accepted, and secure online scheduling via Jane App.";

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

export default function AppointmentsPage() {
 return (
 <>
 <ClinicJsonLd pagePath={PATH} />
 <AppointmentsIntro />
 </>
 );
}
