import type { Metadata } from "next";
import { BookNowBanner } from "@/app/_components/BookNowBanner";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { BlogPreview } from "@/app/home/_sections/BlogPreview";
import { ClosingSection } from "@/app/home/_sections/ClosingSection";
import { Hero } from "@/app/home/_sections/Hero";
import { InsuranceSection } from "@/app/home/_sections/InsuranceSection";
import { MapSection } from "@/app/home/_sections/MapSection";
import { ServicesGrid } from "@/app/home/_sections/ServicesGrid";
import { TeamSection } from "@/app/home/_sections/TeamSection";
import { TestimonialsMarquee } from "@/app/home/_sections/TestimonialsMarquee";
import { TrustMarquee } from "@/app/home/_sections/TrustMarquee";
import { ValueProps } from "@/app/home/_sections/ValueProps";
import { getRecentPosts } from "@/lib/blog";

const PATH = "/home";

export const metadata: Metadata = {
 title: "Chiropractic Care in Laguna Hills, CA",
 description:
 "Aligned Health's Laguna Hills chiropractic team helps patients relieve pain, recover from surgery, and rebuild strength, balance, and mobility, with same-day or next-day appointments.",
 alternates: { canonical: PATH },
};

/**
 * /home, server component shell.
 *
 * Each section is its own client component so motion can live at the leaves
 * while the shell (and JSON-LD) stays server-rendered for SEO.
 */
export default function HomePage() {
 const recentPosts = getRecentPosts(3);
 return (
 <>
 <ClinicJsonLd pagePath={PATH} />
 <Hero />
 <TrustMarquee />
 <ValueProps />
 <ServicesGrid />
 <InsuranceSection />
 <TeamSection />
 <TestimonialsMarquee />
 <BlogPreview posts={recentPosts} />
 <ClosingSection />
 <MapSection />
      <BookNowBanner />
 </>
 );
}
