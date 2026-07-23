"use client";

import Image from "next/image";
import {
 motion,
 useReducedMotion,
 useScroll,
 useTransform,
 type Variants,
} from "motion/react";
import { useRef } from "react";
import { MagneticLink } from "@/app/_components/motion/MagneticLink";
import { CLINIC } from "@/lib/site";

/**
 * Closing section, merged John Wooden quote + "Let's get you aligned." CTA
 * on a single dark, photo-backed panel.
 *
 * Layout: centered stack in a max-w-4xl container.
 * 1. Hairline
 * 2. Quote (word-reveal via parent variants, reliable, no per-word observer)
 * 3. Attribution
 * 4. Vertical hairline connector
 * 5. Eyebrow + heading + subhead + CTAs
 *
 * Motion (respects `prefers-reduced-motion`):
 * - Background photo scroll-parallax
 * - Quote word cascade
 * - Attribution fade after last word
 * - CTA block fade + slide
 * - Magnetic Contact button
 */

const PHONE_TEL = CLINIC.phone.replace(/[^\d+]/g, "");

const BG_IMAGE =
 "https://images.squarespace-cdn.com/content/v1/5ee5219c63842071d176def5/29e8393a-4ba8-4764-b520-de23669ec908/IMG_8372.jpeg";

const QUOTE =
 "Don't let what you can't do keep you from doing what you can do.";

export function ClosingSection() {
 const reduce = useReducedMotion();
 const sectionRef = useRef<HTMLElement>(null);

 const { scrollYProgress } = useScroll({
 target: sectionRef,
 offset: ["start end", "end start"],
 });
 const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

 const words = QUOTE.split(" ");

 const wordContainer: Variants = {
 hidden: {},
 visible: {
 transition: { staggerChildren: 0.05, delayChildren: 0.2 },
 },
 };
 const word: Variants = {
 hidden: reduce ? { y: 0 } : { y: "110%" },
 visible: {
 y: 0,
 transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
 },
 };

 return (
 <section
 ref={sectionRef}
 className="section relative overflow-hidden bg-espresso text-linen"
 >
 {/* --- Background photo + overlays --- */}
 <motion.div
 aria-hidden="true"
 style={reduce ? undefined : { y: bgY }}
 className="pointer-events-none absolute inset-x-0 -top-[10%] -bottom-[10%]"
 >
 <Image
 src={BG_IMAGE}
 alt=""
 fill
 sizes="100vw"
 className="object-cover opacity-25"
 />
 </motion.div>

 {/* Vertical dark gradient, keeps top and bottom dense */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso via-espresso/70 to-espresso"
 />

 {/* Warm radial highlights */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0"
 style={{
 background:
 "radial-gradient(50% 45% at 50% 22%, rgba(185,165,144,0.2) 0%, rgba(54,48,42,0) 55%), radial-gradient(45% 40% at 50% 88%, rgba(185,165,144,0.16) 0%, rgba(54,48,42,0) 55%)",
 }}
 />

 {/* Masked tan dot-grid */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 opacity-[0.08]"
 style={{
 backgroundImage:
 "radial-gradient(rgba(185,165,144,0.9) 1px, transparent 1px)",
 backgroundSize: "26px 26px",
 maskImage:
 "radial-gradient(80% 60% at 50% 50%, black 40%, transparent 100%)",
 WebkitMaskImage:
 "radial-gradient(80% 60% at 50% 50%, black 40%, transparent 100%)",
 }}
 />

 <div className="container-shell relative z-10">
 {/* --- Quote --- */}
 <div className="mx-auto max-w-4xl text-center">
 <motion.span
 aria-hidden="true"
 initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
 whileInView={{ scaleX: 1 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
 className="mx-auto block h-px w-16 origin-center bg-tan"
 />

 <blockquote className="mt-10">
 <motion.p
 variants={wordContainer}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "0px 0px -80px 0px" }}
 className="font-serif text-3xl leading-[1.15] md:text-4xl lg:text-5xl"
 >
 <span aria-hidden="true" className="text-tan">
 &ldquo;
 </span>
 {words.map((w, index) => (
 <span
 key={`${w}-${index}`}
 className="inline-flex overflow-hidden pr-[0.25em] align-top"
 >
 <motion.span variants={word} className="inline-block">
 {w}
 </motion.span>
 </span>
 ))}
 <span aria-hidden="true" className="text-tan">
 &rdquo;
 </span>
 </motion.p>

 <motion.footer
 initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.7,
 delay: 0.2 + words.length * 0.05 + 0.2,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-8"
 >
 <cite className="not-italic text-sm uppercase tracking-[0.32em] text-tan">
, John Wooden
 </cite>
 </motion.footer>
 </blockquote>
 </div>

 {/* --- Vertical hairline connector --- */}
 <motion.span
 aria-hidden="true"
 initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
 whileInView={{ scaleY: 1 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.9,
 delay: 0.4,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mx-auto mt-16 block h-16 w-px origin-top bg-tan/50 md:mt-20 md:h-20"
 />

 {/* --- CTA --- */}
 <div className="mx-auto mt-10 max-w-3xl text-center md:mt-14">
 <motion.p
 initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="eyebrow"
 >
 We&rsquo;d love to hear from you
 </motion.p>

 <motion.h2
 initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.8,
 delay: 0.1,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="heading-display mt-6 text-linen"
 >
 Let&rsquo;s get you{" "}
 <span className="italic text-tan">aligned.</span>
 </motion.h2>

 <motion.p
 initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.7,
 delay: 0.4,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="body-lead mt-8 text-linen/85"
 >
 Have a question? Fill out the form on our contact page and we will
 get back to you quickly.
 </motion.p>

 <motion.div
 initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.7,
 delay: 0.6,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
 >
 <MagneticLink href="/contact-us" className="btn-cta-onDark btn-lg">
 Contact Us
 <span aria-hidden="true" className="ml-1">
 →
 </span>
 </MagneticLink>

 <a
 href={`tel:${PHONE_TEL}`}
 className="text-sm uppercase tracking-[0.2em] text-linen/80 underline decoration-tan underline-offset-4 transition-colors hover:text-linen"
 >
 Or call {CLINIC.phoneDisplay}
 </a>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
