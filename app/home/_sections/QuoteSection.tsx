"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

/**
 * Full-bleed John Wooden quote on the mocha secondary-dark background.
 * Each word masks up on scroll. Uses parent-level `whileInView` with child
 * variants so the reveal fires reliably (per-word intersection observers on
 * inline motion spans were unreliable).
 */

const QUOTE =
 "Don't let what you can't do keep you from doing what you can do.";

export function QuoteSection() {
 const reduce = useReducedMotion();
 const words = QUOTE.split(" ");

 const container: Variants = {
 hidden: {},
 visible: {
 transition: { staggerChildren: 0.06, delayChildren: 0.15 },
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
 <section className="section-mocha section">
 <div className="container-shell max-w-4xl text-center">
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
 variants={container}
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
 initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.7,
 delay: 0.15 + words.length * 0.06 + 0.15,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-10"
 >
 <cite className="not-italic text-sm uppercase tracking-[0.32em] text-tan">
John Wooden
 </cite>
 </motion.footer>
 </blockquote>

 <motion.span
 aria-hidden="true"
 initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
 whileInView={{ scaleX: 1 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
 className="mx-auto mt-12 block h-px w-16 origin-center bg-tan"
 />
 </div>
 </section>
 );
}
