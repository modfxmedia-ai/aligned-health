"use client";

import { motion, useReducedMotion } from "motion/react";
import { useBookingModal } from "@/app/_components/booking/BookingModalContext";

/**
 * /appointments — this page is for EXISTING patients only.
 *
 * 1. Cream banner: "Welcome Back" + a small disclaimer routing new
 * patients to the lead-capture booking modal (the "form") instead.
 * 2. Linen section: the Jane App existing-patients scheduler embedded
 * directly on the page, no intermediate form/modal for this flow.
 */

const EXISTING_PATIENT_SCHEDULER_URL =
 "https://alignedhealthoc.janeapp.com/#/existing-patients";

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
 <p className="eyebrow !text-mocha">Existing patients</p>
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
 Welcome <span className="italic text-tan">Back</span>
 </motion.p>

 <motion.p
 initial={reduce ? false : { opacity: 0, y: 14 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{
 duration: 0.7,
 delay: 0.35,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-5 text-lg leading-relaxed text-mocha md:text-xl"
 >
 Schedule your appointment below.
 </motion.p>

 <motion.p
 initial={reduce ? false : { opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{
 duration: 0.7,
 delay: 0.5,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-4 text-xs uppercase tracking-[0.18em] text-mocha/70"
 >
 If you are a new patient,{" "}
 <button
 type="button"
 onClick={openBookingModal}
 className="underline decoration-tan underline-offset-4 hover:text-espresso"
 >
 click here to schedule
 </button>
 .
 </motion.p>
 </div>
 </div>
 </section>

 {/* --- Linen section, existing-patient scheduler CTA ---
 Jane App sends `X-Frame-Options: SAMEORIGIN` on every response, so
 their scheduler can never be embedded in an <iframe> on this site —
 the browser refuses to render it regardless of our own code. A
 direct, one-click link to the same existing-patients calendar is the
 closest equivalent to "scheduling right on the page". */}
 <section className="section-linen section relative overflow-hidden">
 <BackgroundFlourish />

 <div className="container-shell relative z-10">
 <div className="mx-auto max-w-4xl">
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.8,
 delay: 0.15,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="flex flex-col items-center gap-6 rounded-3xl border border-tan/30 bg-cream p-10 text-center shadow-card md:p-14"
 >
 <p className="eyebrow !text-mocha">Existing patients</p>
 <p className="font-serif text-3xl leading-snug text-espresso md:text-4xl">
 Pick a time that works for you.
 </p>
 <p className="max-w-md text-sm leading-relaxed text-mocha md:text-base">
 Opens the Aligned Health calendar in a new tab, secure scheduling
 through Jane App.
 </p>
 <a
 href={EXISTING_PATIENT_SCHEDULER_URL}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary btn-lg inline-flex items-center gap-2"
 >
 Open the scheduler
 <span aria-hidden="true">→</span>
 </a>
 </motion.div>
 </div>
 </div>
 </section>
 </>
 );
}

/* ---------------------------------------------------------------------- */

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
