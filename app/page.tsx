import type { Metadata } from "next";
import { BookNowBanner } from "@/app/_components/BookNowBanner";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { BlogPreview } from "@/app/home/_sections/BlogPreview";
import { ClosingSection } from "@/app/home/_sections/ClosingSection";
import { Hero } from "@/app/home/_sections/Hero";
import { MapSection } from "@/app/home/_sections/MapSection";
import { ServicesGrid } from "@/app/home/_sections/ServicesGrid";
import { TeamSection } from "@/app/home/_sections/TeamSection";
import { TestimonialsMarquee } from "@/app/home/_sections/TestimonialsMarquee";
import { TrustMarquee } from "@/app/home/_sections/TrustMarquee";
import { ValueProps } from "@/app/home/_sections/ValueProps";
import { getRecentPosts } from "@/lib/blog";

const PATH = "/";

export const metadata: Metadata = {
  title: "Chiropractic Care in Laguna Hills, CA",
  description:
    "Aligned Health's Laguna Hills chiropractic team helps patients relieve pain, recover from surgery, and rebuild strength, balance, and mobility. Schedule now.",
  alternates: { canonical: PATH },
};

/**
 * Homepage — server component shell, mounted at the site root (`/`).
 *
 * Each section is its own client component so motion can live at the leaves
 * while the shell (and JSON-LD) stays server-rendered for SEO. Sections
 * live under `app/home/_sections/` — that folder starts with `_`, so
 * Next.js treats it as private (no route generated).
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
      <TeamSection />
      <TestimonialsMarquee />
      <BlogPreview posts={recentPosts} />
      <ClosingSection />
      <MapSection />
      <BookNowBanner />
    </>
  );
}
