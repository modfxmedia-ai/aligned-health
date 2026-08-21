import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { ContactIntro } from "./_components/ContactIntro";
import { ContactMap } from "./_components/ContactMap";
import { ContactAreas } from "./_components/ContactAreas";

const PATH = "/contact-us";

const TITLE = "Contact Aligned Health · Chiropractic in Laguna Hills, CA";
const DESCRIPTION =
 "Get in touch with Aligned Health in Laguna Hills, CA. Call, email, or send us a message, we typically respond within one business day.";

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

export default function ContactUsPage() {
 return (
 <>
 <ClinicJsonLd pagePath={PATH} />
 <ContactIntro />
 <ContactMap />
 <ContactAreas />
 </>
 );
}
