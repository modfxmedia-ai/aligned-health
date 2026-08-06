import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { AppointmentsIntro } from "@/app/appointments/_components/AppointmentsIntro";

const PATH = "/appointments";

export const metadata: Metadata = {
 title: "Book an Appointment · Aligned Health Chiropractic in Laguna Hills",
 description:
    "Book your chiropractic appointment at Aligned Health in Laguna Hills, CA. Schedule now, most PPO plans accepted, and secure online scheduling via Jane App.",
 alternates: { canonical: PATH },
 openGraph: {
 title: "Book an Appointment · Aligned Health Chiropractic in Laguna Hills",
 description:
      "Come in and experience the Aligned Health difference. Book online through Jane App or call the clinic, schedule now.",
 url: PATH,
 type: "website",
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
