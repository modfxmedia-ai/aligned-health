import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { ContactIntro } from "./_components/ContactIntro";
import { ContactMap } from "./_components/ContactMap";
import { ContactAreas } from "./_components/ContactAreas";

const PATH = "/contact-us";

export const metadata: Metadata = {
 title: "Contact Aligned Health · Chiropractic in Laguna Hills, CA",
 description:
 "Get in touch with Aligned Health in Laguna Hills, CA. Call (949) 557-7208, email Contact@AlignedHealthOC.com, or send us a message, we typically respond within one business day.",
 alternates: { canonical: PATH },
 openGraph: {
 title: "Contact Aligned Health · Chiropractic in Laguna Hills, CA",
 description:
 "Call, email, or message us. Same-day availability, most PPO plans accepted.",
 url: PATH,
 type: "website",
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
