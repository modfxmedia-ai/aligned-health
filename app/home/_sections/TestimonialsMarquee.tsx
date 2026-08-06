"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Marquee } from "@/app/_components/motion/Marquee";

/**
 * "What our patients say", real 5-star Google reviews rendered as a
 * horizontal marquee of glass cards. Two counter-scrolling rows create
 * movement, and a "See more reviews on Google" CTA anchors the section
 * to the clinic's live Google Business Profile.
 *
 * Names are shortened to First name + last initial to match the
 * presentation on Google's own review widget.
 */

const GOOGLE_REVIEWS_URL =
 "https://www.google.com/maps/place/Aligned+Health+formerly+known+as+ASAP+Alpha+Sport+And+Performance+Chiropractic/@33.5748115,-117.6755535,871m/data=!3m2!1e3!5s0x80dceec47cf99773:0x8e0bd7756e6af25c!4m8!3m7!1s0x80dcebe3bbff6193:0xa55599af90af8db0!8m2!3d33.5748115!4d-117.6755535!9m1!1b1!16s%2Fg%2F11fwj32nr9?entry=ttu";

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
 name: "Jenna M.",
 initial: "J",
 date: "1 month ago",
 rating: 5,
 text: "Dustin treats his clients well, like you’re not just a number. Treatment feels tailored to specific needs and not rushed. This new location is great: easy to find, larger space, and has a comfortable feel and energy to it. I highly recommend!",
 },
 {
 id: "t2",
 name: "Jay L.",
 initial: "J",
 date: "2 months ago",
 rating: 5,
 text: "Doctor Dustin is an adjusting savant. I go to chiropractors every 3 months, this man aligns joints and alleviates pressure others miss or can’t get to. Leaves me feeling like I can smell colors. Even my nasal passages open up. Forever grateful for you doctor.",
 },
 {
 id: "t3",
 name: "Juani L.",
 initial: "J",
 date: "11 months ago",
 rating: 5,
 text: "I made an appointment with Dr. Dustin Hack after I threw out my lower back. I’d been in excruciating pain for three weeks. In a single session he was able to put my SI joint back and I felt huge relief. He is very personable, knowledgeable and very professional. He is a life changer.",
 },
 {
 id: "t4",
 name: "Trevor C.",
 initial: "T",
 date: "8 months ago",
 rating: 5,
 text: "I can’t say enough good things about Dr. Dustin Hack. I’ve been to so many chiropractors over the years, and he is by far the best I’ve ever worked with. He helped me when no one else could. His care, skill, and attention to detail are on another level. Highly, highly recommend.",
 },
 {
 id: "t5",
 name: "Diana C.",
 initial: "D",
 date: "2 months ago",
 rating: 5,
 text: "Dr. Dustin Hack is very honest, fair and knowledgeable! Highly recommend him for any kind of body pain you may be experiencing, he has creative solutions!",
 },
 {
 id: "t6",
 name: "Robert R.",
 initial: "R",
 date: "1 year ago",
 rating: 5,
 text: "I have been going for 6 years now and every time I leave I feel so much better than when I walked in. Dustin spends the time to understand and evaluate the ailments of his patients and figures out the best treatment. His depth of knowledge is incredible. He is a true hidden gem.",
 },
 {
 id: "t7",
 name: "Rachel W.",
 initial: "R",
 date: "9 months ago",
 rating: 5,
 text: "Dustin is the best! He is skilled and knowledgeable about how to treat injuries and is a great chiropractor too. Our whole family has benefited from his treatments. 10/10 recommend!",
 },
 {
 id: "t8",
 name: "Emma R.",
 initial: "E",
 date: "1 year ago",
 rating: 5,
 text: "Dustin is simply the best!! I’ve been going to him for 8 years. Being an athlete he has always kept me on the field and playing my best. He always goes the extra mile, he massages, stretches, and has many modalities that help with recovery and performance.",
 },
 {
 id: "t9",
 name: "Malisa H.",
 initial: "M",
 date: "1 year ago",
 rating: 5,
 text: "Dustin is the best chiropractor. He spends quality time doing muscle work to allow the body to adjust easily. Dustin is professional and very knowledgeable. I highly recommend him and I visit his office three times a month.",
 },
 {
 id: "t10",
 name: "Jessica R.",
 initial: "J",
 date: "1 year ago",
 rating: 5,
 text: "I’m currently training for the LA Marathon and ended up with severe pain in my back, hip, and leg. After nearly a month of discomfort, I finally visited Dr. Dustin. The next day, ALL of my pain was completely gone. If you’re considering going to a sports chiropractor, Dr. Dustin is worth every penny!",
 },
 {
 id: "t11",
 name: "Maurice T.",
 initial: "M",
 date: "1 year ago",
 rating: 5,
 text: "I started seeing Dustin a few years back for back issues from surfing and working out. At 57, I need to stay healthy, the chiropractic and preventive therapy he uses keeps me active. There’s no shortage of chiropractors around, but Dustin has produced the results.",
 },
 {
 id: "t12",
 name: "Stephanie K.",
 initial: "S",
 date: "1 year ago",
 rating: 5,
 text: "I can’t say enough good things about Dr. Dustin! From the moment I walked into his office, I felt genuinely cared for. Not only is he incredibly skilled, but his bedside manner is unmatched. Every visit leaves me feeling more aligned and pain-free.",
 },
 {
 id: "t13",
 name: "Jordan B.",
 initial: "J",
 date: "10 months ago",
 rating: 5,
 text: "Dustin is literally the best! I don’t know anyone that does both chiropractic work AND deep tissue work at the same time. He knows the body inside and out, and not only works on your body but helps you understand what he is doing and why.",
 },
 {
 id: "t14",
 name: "Rosen S.",
 initial: "R",
 date: "1 year ago",
 rating: 5,
 text: "I’ve been going here for years, and every time Dustin does a great job on my weak spots. I work at a desk, so my neck, back and legs need constant work. Dustin is very professional, takes the time to work on the problem areas, and I always leave in much better shape.",
 },
 {
 id: "t15",
 name: "Nick",
 initial: "N",
 date: "9 months ago",
 rating: 5,
 text: "I had an amazing experience! Dr. Dustin was incredibly accommodating, and his adjustment and treatment were absolutely top-notch. I highly recommend him!",
 },
 {
 id: "t16",
 name: "Aggi L.",
 initial: "A",
 date: "10 months ago",
 rating: 5,
 text: "Dustin has helped my daughter and I for 7 years and I have no complaints. He’s thorough, considerate and takes everything you tell him into consideration to give you the best care.",
 },
 {
 id: "t17",
 name: "Joselyn C.",
 initial: "J",
 date: "1 year ago",
 rating: 5,
 text: "I came in serious pain after hurting my back out of nowhere. I could barely breathe or lie down comfortably. Dr. Dustin Hack took the time to understand what was going on and provided real treatment, not just a quick fix. After my first adjustment my pain decreased dramatically. 10/10 recommend!",
 },
 {
 id: "t18",
 name: "Teresa C.",
 initial: "T",
 date: "8 months ago",
 rating: 5,
 text: "I’ve been to many other offices and I finally found the best! Dr. Hack is incredibly knowledgeable, kind, and attentive to whatever injury I have at the time. He takes the time to listen and explain what’s going on. Definitely recommend!",
 },
 {
 id: "t19",
 name: "Kelly J.",
 initial: "K",
 date: "2 years ago",
 rating: 5,
 text: "Dustin is amazing! My sister has been raving about his treatments and I finally got to experience one myself. I walked in with a lot of issues and left an hour later feeling like a new person. He used the percussion massager, compression boots and did adjustments. The best treatment I’ve ever had.",
 },
];

// Split into two counter-scrolling rows for visual variety.
const ROW_A = TESTIMONIALS.slice(0, 10);
const ROW_B = TESTIMONIALS.slice(10);

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
 5.0
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

 {/* Footer CTA, links to the live Google Business Profile so patients
 can read every review and add their own. */}
 <div className="container-shell relative z-10 mt-12 flex justify-center md:mt-16">
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 >
 <Link
 href={GOOGLE_REVIEWS_URL}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-cta-onDark btn-lg inline-flex items-center gap-2"
 >
 See more reviews on Google
 <span aria-hidden="true">↗</span>
 </Link>
 </motion.div>
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
