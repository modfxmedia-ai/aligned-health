"use client";

import Image from "next/image";
import {
 motion,
 useReducedMotion,
 useScroll,
 useTransform,
} from "motion/react";
import { useRef } from "react";

/**
 * Editorial photo mosaic, a 12-col composition with a large primary photo
 * and two smaller supporting tiles, framed by tan hairlines and a small
 * caption row. Replaces the previous single-wide-band treatment.
 *
 * Motion:
 * - Hairlines scale-in from center as the section enters view
 * - Primary photo has a scroll-driven parallax lift
 * - Secondary tiles enter with fade + subtle slide
 * - Floating "Est. Laguna Hills" caption card appears after the tiles
 */

const PRIMARY_PHOTO =
 "https://images.squarespace-cdn.com/content/v1/5ee5219c63842071d176def5/29e8393a-4ba8-4764-b520-de23669ec908/IMG_8372.jpeg";
const SECONDARY_PHOTO_A =
 "https://images.squarespace-cdn.com/content/v1/5ee5219c63842071d176def5/13a8a82a-4f38-4686-997f-57d70e3e14b1/IMG_7513.jpeg";
const SECONDARY_PHOTO_B = "https://picsum.photos/seed/aligned-details/800/1000";

export function PhotoBand() {
 const reduce = useReducedMotion();
 const ref = useRef<HTMLDivElement>(null);

 const { scrollYProgress } = useScroll({
 target: ref,
 offset: ["start end", "end start"],
 });
 const primaryY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
 const secondaryAY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
 const secondaryBY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

 return (
 <section
 aria-label="Inside the Aligned Health clinic"
 className="bg-cream pt-4 pb-12 md:pb-16"
 >
 <div className="container-shell">
 {/* Top caption row */}
 <div className="flex items-center gap-4">
 <motion.span
 aria-hidden="true"
 initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
 whileInView={{ scaleX: 1 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 className="block h-px flex-1 origin-left bg-tan/60"
 />
 <span
 aria-hidden="true"
 className="whitespace-nowrap text-[0.7rem] uppercase tracking-[0.4em] text-mocha/70"
 >
 Aligned Health · Laguna Hills
 </span>
 <motion.span
 aria-hidden="true"
 initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
 whileInView={{ scaleX: 1 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 1,
 delay: 0.1,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="block h-px flex-1 origin-right bg-tan/60"
 />
 </div>

 {/* Mosaic */}
 <div ref={ref} className="mt-8 grid gap-4 md:grid-cols-12 md:gap-6">
 {/* Primary photo, spans 8/12 */}
 <motion.figure
 initial={reduce ? false : { opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -80px 0px" }}
 transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
 className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card md:col-span-8 md:aspect-[16/10]"
 >
 <motion.div
 style={reduce ? undefined : { y: primaryY }}
 className="absolute inset-x-0 -top-[10%] -bottom-[10%]"
 >
 <Image
 src={PRIMARY_PHOTO}
 alt="Chiropractic treatment in the Aligned Health clinic"
 fill
 sizes="(min-width: 768px) 66vw, 100vw"
 className="object-cover"
 />
 </motion.div>

 {/* Floating caption card, bottom-right */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -80px 0px" }}
 transition={{
 duration: 0.7,
 delay: 0.6,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="absolute bottom-4 right-4 hidden max-w-[260px] rounded-2xl bg-linen/95 p-4 shadow-card backdrop-blur-sm md:block"
 >
 <p className="text-[0.65rem] uppercase tracking-[0.22em] text-tan">
 Hands-on care
 </p>
 <p className="mt-1.5 text-sm leading-snug text-espresso">
 One-on-one sessions with a highly qualified team, no
 assembly-line care.
 </p>
 </motion.div>

 {/* Corner ticks */}
 <span
 aria-hidden="true"
 className="absolute left-4 top-4 h-4 w-4 border-l border-t border-linen/80"
 />
 <span
 aria-hidden="true"
 className="absolute right-4 top-4 h-4 w-4 border-r border-t border-linen/80"
 />
 </motion.figure>

 {/* Secondary column, spans 4/12, two stacked tiles */}
 <div className="grid gap-4 md:col-span-4 md:gap-6">
 <motion.figure
 initial={reduce ? false : { opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -80px 0px" }}
 transition={{
 duration: 0.85,
 delay: 0.2,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card md:aspect-auto md:h-full"
 >
 <motion.div
 style={reduce ? undefined : { y: secondaryAY }}
 className="absolute inset-x-0 -top-[6%] -bottom-[6%]"
 >
 <Image
 src={SECONDARY_PHOTO_A}
 alt="Aligned Health treatment room"
 fill
 sizes="(min-width: 768px) 33vw, 100vw"
 className="object-cover"
 />
 </motion.div>
 {/* Warm bottom overlay for the stat text */}
 <div
 aria-hidden="true"
 className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent"
 />
 <div className="absolute inset-x-0 bottom-0 p-4">
 <p className="font-serif text-2xl leading-none text-linen">
 Same-day
 </p>
 <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.24em] text-linen/80">
 Availability, typically
 </p>
 </div>
 </motion.figure>

 <motion.figure
 initial={reduce ? false : { opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -80px 0px" }}
 transition={{
 duration: 0.85,
 delay: 0.35,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card md:aspect-auto md:h-full"
 >
 <motion.div
 style={reduce ? undefined : { y: secondaryBY }}
 className="absolute inset-x-0 -top-[6%] -bottom-[6%]"
 >
 <Image
 src={SECONDARY_PHOTO_B}
 alt="Detail of therapy tools at Aligned Health"
 fill
 sizes="(min-width: 768px) 33vw, 100vw"
 className="object-cover"
 />
 </motion.div>
 <div
 aria-hidden="true"
 className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent"
 />
 <div className="absolute inset-x-0 bottom-0 p-4">
 <p className="font-serif text-2xl leading-none text-linen">
 3 therapies
 </p>
 <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.24em] text-linen/80">
 Signature approach
 </p>
 </div>
 </motion.figure>
 </div>
 </div>

 {/* Bottom hairline */}
 <motion.span
 aria-hidden="true"
 initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
 whileInView={{ scaleX: 1 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 1.1,
 delay: 0.2,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-8 block h-px w-full origin-center bg-tan/40"
 />
 </div>
 </section>
 );
}
