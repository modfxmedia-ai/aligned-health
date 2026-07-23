"use client";

import { motion, useReducedMotion } from "motion/react";
import { Marquee } from "@/app/_components/motion/Marquee";

/**
 * "What our patients say", Google-style reviews rendered as a horizontal
 * marquee of glass cards. Two counter-scrolling rows create movement.
 *
 * NOTE: These are PLACEHOLDER testimonials for design purposes. Before
 * launch, replace with real reviews via one of:
 * - Google Places API (server-side fetch + revalidate)
 * - Manual copy from Google Business Profile
 * - A third-party widget (Elfsight, EmbedSocial, etc.)
 * The names are anonymized (First name + last initial) and no specific
 * clinical claims or doctor names are attributed.
 */

interface Testimonial {
 id: string;
 name: string;
 initial: string;
 date: string;
 rating: number;
 text: string;
}

const TESTIMONIALS: readonly Testimonial[] = [
 {
 id: "t1",
 name: "Sarah M.",
 initial: "S",
 date: "3 months ago",
 rating: 5,
 text: "Same-day appointment when I threw my back out. The team knew exactly what to do, felt relief after the first visit.",
 },
 {
 id: "t2",
 name: "Michael R.",
 initial: "M",
 date: "1 month ago",
 rating: 5,
 text: "Best chiropractic experience I've had. They really listen and tailor treatment to what my body actually needs.",
 },
 {
 id: "t3",
 name: "Jennifer L.",
 initial: "J",
 date: "2 weeks ago",
 rating: 5,
 text: "Been coming for over a year. The combination of adjustments and percussion therapy has transformed how my body feels every day.",
 },
 {
 id: "t4",
 name: "David K.",
 initial: "D",
 date: "4 months ago",
 rating: 5,
 text: "Professional, friendly, and effective. They verified my insurance up front so there were no surprises. Highly recommend.",
 },
 {
 id: "t5",
 name: "Amanda S.",
 initial: "A",
 date: "2 months ago",
 rating: 5,
 text: "Convenient Laguna Hills location and easy booking. The whole team takes time to explain what they're doing at each visit.",
 },
 {
 id: "t6",
 name: "Robert T.",
 initial: "R",
 date: "5 weeks ago",
 rating: 5,
 text: "The compression therapy after my adjustment is a game-changer. Feels like a spa and PT session combined.",
 },
 {
 id: "t7",
 name: "Emily N.",
 initial: "E",
 date: "1 week ago",
 rating: 5,
 text: "Been to a lot of chiros over the years. Aligned Health stands out for their whole-person approach and warm environment.",
 },
 {
 id: "t8",
 name: "Christopher B.",
 initial: "C",
 date: "3 weeks ago",
 rating: 4,
 text: "Got scheduled the same day I called after tweaking my neck. Relief within a couple of visits, very knowledgeable team.",
 },
];

// Split into two rows for counter-scrolling variety.
const ROW_A = TESTIMONIALS.slice(0, 4);
const ROW_B = TESTIMONIALS.slice(4);

export function TestimonialsMarquee() {
 const reduce = useReducedMotion();

 return (
 <section
 aria-label="Patient testimonials"
 className="section-espresso section relative overflow-hidden"
 >
 {/* Warm radial glows to add depth on dark ground */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0"
 style={{
 background:
 "radial-gradient(50% 45% at 12% 20%, rgba(185,165,144,0.15) 0%, rgba(54,48,42,0) 60%), radial-gradient(45% 40% at 88% 80%, rgba(185,165,144,0.12) 0%, rgba(54,48,42,0) 60%)",
 }}
 />

 <div className="container-shell relative z-10">
 {/* Header row */}
 <div className="grid gap-8 md:grid-cols-12 md:items-end">
 <div className="md:col-span-7 lg:col-span-6">
 <motion.p
 initial={reduce ? false : { opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="eyebrow"
 >
 Patient stories
 </motion.p>
 <motion.h2
 initial={reduce ? false : { opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.75,
 delay: 0.1,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="heading-section mt-4 !text-linen"
 >
 What our patients{" "}
 <span className="italic text-tan">say.</span>
 </motion.h2>
 </div>

 {/* Right: Google rating badge */}
 <div className="md:col-span-5 md:col-start-8 lg:col-span-5 lg:col-start-8">
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.6,
 delay: 0.2,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="inline-flex items-center gap-4 rounded-2xl border border-linen/25 bg-espresso/40 px-5 py-3 shadow-card backdrop-blur-sm"
 >
 <span className="font-serif text-3xl leading-none text-linen">
 4.9
 </span>
 <div className="flex flex-col gap-1">
 <StarRating rating={5} />
 <span className="text-[0.65rem] uppercase tracking-[0.2em] text-linen/70">
 Rated on{" "}
 <span className="font-medium text-linen">Google</span>
 </span>
 </div>
 </motion.div>
 </div>
 </div>
 </div>

 {/* Marquees, full-bleed so the cards can flow off both edges */}
 <div className="relative mt-14 md:mt-16">
 {/* Edge fade masks so cards fade in/out at the section edges */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-espresso to-transparent md:w-40"
 />
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-espresso to-transparent md:w-40"
 />

 <div className="flex flex-col gap-5">
 <Marquee duration={55}>
 {ROW_A.map((t) => (
 <TestimonialCard key={t.id} testimonial={t} />
 ))}
 </Marquee>
 <Marquee duration={65} reverse>
 {ROW_B.map((t) => (
 <TestimonialCard key={t.id} testimonial={t} />
 ))}
 </Marquee>
 </div>
 </div>
 </section>
 );
}

/* ---------------------------------------------------------------------- */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
 return (
 <article className="flex w-[340px] shrink-0 flex-col gap-4 rounded-2xl border border-tan/25 bg-linen p-6 shadow-card md:w-[380px]">
 <header className="flex items-center justify-between">
 <StarRating rating={testimonial.rating} />
 <GoogleMark />
 </header>

 <p className="line-clamp-4 text-sm leading-relaxed text-espresso">
 &ldquo;{testimonial.text}&rdquo;
 </p>

 <footer className="mt-auto flex items-center gap-3 border-t border-tan/25 pt-4">
 <span
 aria-hidden="true"
 className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tan/20 font-serif text-sm text-tan"
 >
 {testimonial.initial}
 </span>
 <div className="min-w-0 flex-1">
 <p className="truncate text-sm font-medium text-espresso">
 {testimonial.name}
 </p>
 <p className="text-[0.65rem] uppercase tracking-[0.18em] text-mocha/70">
 {testimonial.date}
 </p>
 </div>
 </footer>
 </article>
 );
}

/* ---------------------------------------------------------------------- */
/* Star rating + Google mark */
/* ---------------------------------------------------------------------- */

function StarRating({ rating }: { rating: number }) {
 return (
 <div
 className="flex items-center gap-0.5"
 aria-label={`${rating} out of 5 stars`}
 >
 {Array.from({ length: 5 }).map((_, i) => (
 <svg
 key={i}
 viewBox="0 0 24 24"
 className="h-3.5 w-3.5"
 aria-hidden="true"
 >
 <path
 fill={i < rating ? "var(--color-tan)" : "rgba(87,76,63,0.2)"}
 d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
 />
 </svg>
 ))}
 </div>
 );
}

/**
 * Small "G" mark used as a source attribution, deliberately monochrome
 * rather than Google's multi-color brand mark so we don't need to reproduce
 * their trademark colors.
 */
function GoogleMark() {
 return (
 <span
 aria-hidden="true"
 className="inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-mocha/70"
 >
 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-espresso/5 font-serif text-xs text-espresso">
 G
 </span>
 Google
 </span>
 );
}
