"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { MagneticLink } from "@/app/_components/motion/MagneticLink";
import { useBookingModal } from "@/app/_components/booking/BookingModalContext";
import { CLINIC } from "@/lib/site";

/**
 * /appointments, cream banner (matches the blog page's hero styling) then
 * a cream section with a prominent Jane App booking CTA.
 *
 * H1: "Let's get you aligned." (reused from the homepage closing section)
 * Sub: "Come in and experience the Aligned Health difference."
 *
 * The booking button preserves the exact external Jane App URL used on
 * the source site, we intentionally do NOT rebuild a custom form.
 */

const PHONE_TEL = CLINIC.phone.replace(/[^\d+]/g, "");

interface Word {
 text: string;
 accent?: boolean;
}
const HEADING_WORDS: readonly Word[] = [
 { text: "Let's" },
 { text: "get" },
 { text: "you" },
 { text: "aligned.", accent: true },
];

const HEADING_CONTAINER: Variants = {
 hidden: {},
 visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const REASSURANCE = [
 {
 label: "Insurance verified first",
 detail: "We confirm your PPO benefits before you book.",
 },
 {
 label: "One-on-one care",
 detail: "No assembly-line visits, every session is personal.",
 },
] as const;

export function AppointmentsIntro() {
 const reduce = useReducedMotion();
 const { openBookingModal } = useBookingModal();

 return (
 <>
 {/* --- Banner, cream background matching the blog page hero --- */}
 <section className="section-cream relative overflow-hidden pt-28 pb-10 md:pt-32 md:pb-14">
 <BackgroundFlourish />

 <div className="container-shell relative z-10">
 <div className="mx-auto max-w-3xl text-center">
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="flex items-center justify-center gap-3"
 >
 <span aria-hidden="true" className="block h-px w-10 bg-tan" />
 <p className="eyebrow !text-mocha">Schedule your visit</p>
 <span aria-hidden="true" className="block h-px w-10 bg-tan" />
 </motion.div>

 <motion.p
 initial={reduce ? false : { opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{
 duration: 0.7,
 delay: 0.2,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-espresso md:text-6xl lg:text-7xl"
 >
 Book an <span className="italic text-tan">Appointment</span>
 </motion.p>
 </div>
 </div>
 </section>

 {/* --- Linen content section --- */}
 <section className="section-linen section relative overflow-hidden">
 <BackgroundFlourish />

 <div className="container-shell relative z-10">
 <div className="mx-auto max-w-4xl">
 {/* Small eyebrow */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="flex items-center gap-3"
 >
 <span aria-hidden="true" className="block h-px w-10 bg-tan" />
 <p className="eyebrow !text-mocha">Ready when you are</p>
 </motion.div>

 {/* Heading, word-reveal, italic tan accent on final word */}
 <motion.h1
 variants={HEADING_CONTAINER}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "0px 0px -80px 0px" }}
 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-espresso md:text-6xl lg:text-7xl"
 >
 {HEADING_WORDS.map((word, index) => (
 <HeadingWord
 key={word.text}
 word={word}
 index={index}
 reduce={!!reduce}
 />
 ))}
 </motion.h1>

 {/* Subheading, verbatim from source */}
 <motion.p
 initial={reduce ? false : { opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.75,
 delay: 0.65,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-8 text-lg leading-relaxed text-mocha md:text-xl"
 >
 Come in and experience the{" "}
 <span className="italic text-espresso">Aligned Health</span>{" "}
 difference.
 </motion.p>

 {/* --- The Book Now CTA, oversized, glowing, magnetic --- */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.8,
 delay: 0.85,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-12 flex flex-col items-start gap-6"
 >
 <div className="relative inline-flex">
 {/* Soft pulsing glow behind the button */}
 <motion.span
 aria-hidden="true"
 animate={
 reduce
 ? undefined
 : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.06, 1] }
 }
 transition={{
 duration: 3.2,
 repeat: Infinity,
 ease: "easeInOut",
 }}
 className="absolute inset-0 -m-4 rounded-full bg-tan/50 blur-2xl"
 />

 <MagneticLink
 onClick={openBookingModal}
 className="btn-primary btn-lg relative !px-10 !py-5 !text-base"
 ariaLabel="Book an appointment online"
 >
 Book Now
 <span aria-hidden="true" className="ml-1">
 →
 </span>
 </MagneticLink>
 </div>

 <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.7rem] uppercase tracking-[0.2em] text-mocha/80">
 <span className="inline-flex items-center gap-2">
 <span
 aria-hidden="true"
 className="inline-block h-1.5 w-1.5 rounded-full bg-tan"
 />
 Secure online scheduling
 </span>
 <span aria-hidden="true" className="text-tan/60">
 ·
 </span>
 <a
 href={`tel:${PHONE_TEL}`}
 className="underline decoration-tan underline-offset-4 hover:text-espresso"
 >
 Or call {CLINIC.phoneDisplay}
 </a>
 </div>
 </motion.div>

 {/* --- Reassurance strip --- */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.75,
 delay: 1.05,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-16 rounded-3xl border border-tan/30 bg-cream p-6 md:p-8"
 >
 <div className="flex items-center gap-3">
 <span aria-hidden="true" className="block h-px w-6 bg-tan" />
 <p className="eyebrow !text-mocha">What to expect</p>
 </div>

 <ReassuranceGrid reduce={!!reduce} />

 <p className="mt-8 text-xs leading-relaxed text-mocha/70">
 <strong className="text-mocha">Using insurance?</strong>{" "}
 Please{" "}
 <Link
 href="/contact-us"
 className="underline decoration-tan underline-offset-4 hover:text-espresso"
 >
 contact us
 </Link>{" "}
 to verify your benefits before booking so there are no
 surprises at your first visit.
 </p>
 </motion.div>

 {/* Signature strip */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.7,
 delay: 1.25,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-12 flex items-center gap-4"
 >
 <span aria-hidden="true" className="block h-px w-16 bg-tan" />
 <span className="text-[0.65rem] uppercase tracking-[0.28em] text-mocha/70">
 {CLINIC.address.street} · {CLINIC.address.city},{" "}
 {CLINIC.address.region}
 </span>
 </motion.div>
 </div>
 </div>
 </section>
 </>
 );
}

/* ---------------------------------------------------------------------- */

function ReassuranceGrid({ reduce }: { reduce: boolean }) {
 const container: Variants = {
 hidden: {},
 visible: {
 transition: { staggerChildren: 0.1, delayChildren: 0.15 },
 },
 };
 const item: Variants = {
 hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
 },
 };
 return (
 <motion.ul
 variants={container}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8"
 >
 {REASSURANCE.map((r) => (
 <motion.li
 key={r.label}
 variants={item}
 className="flex flex-col gap-2"
 >
 <p className="text-sm font-medium tracking-wide text-espresso md:text-base">
 {r.label}
 </p>
 <p className="text-xs leading-relaxed text-mocha md:text-sm">
 {r.detail}
 </p>
 </motion.li>
 ))}
 </motion.ul>
 );
}

function HeadingWord({
 word,
 index,
 reduce,
}: {
 word: Word;
 index: number;
 reduce: boolean;
}) {
 const wordVariant: Variants = {
 hidden: reduce ? { y: 0 } : { y: "110%" },
 visible: {
 y: 0,
 transition: {
 duration: 0.85,
 ease: [0.16, 1, 0.3, 1],
 },
 },
 };
 return (
 <>
 {index > 0 ? " " : null}
 <span className="inline-flex overflow-hidden pb-[0.1em] pr-[0.05em] align-top">
 <motion.span
 variants={wordVariant}
 className={`inline-block ${word.accent ? "italic text-tan" : ""}`}
 >
 {word.text}
 </motion.span>
 </span>
 </>
 );
}

function BackgroundFlourish() {
 const reduce = useReducedMotion();
 const draw = (delay: number) => ({
 initial: reduce
 ? { pathLength: 1, opacity: 0.2 }
 : { pathLength: 0, opacity: 0 },
 whileInView: { pathLength: 1, opacity: 0.2 },
 viewport: { once: true, margin: "0px 0px -100px 0px" },
 transition: {
 pathLength: { duration: 2.6, delay, ease: "easeOut" as const },
 opacity: { duration: 0.5, delay },
 },
 });
 return (
 <svg
 aria-hidden="true"
 viewBox="0 0 1400 900"
 preserveAspectRatio="none"
 className="pointer-events-none absolute inset-0 h-full w-full text-tan"
 fill="none"
 stroke="currentColor"
 strokeWidth="1"
 >
 <motion.path
 d="M -40 720 C 260 620, 460 500, 720 420 S 1180 260, 1440 140"
 {...draw(0.2)}
 />
 <motion.path
 d="M -40 800 C 260 700, 460 580, 720 500 S 1180 340, 1440 220"
 strokeWidth="0.6"
 {...draw(0.5)}
 />
 </svg>
 );
}
