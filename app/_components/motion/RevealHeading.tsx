"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";

/**
 * Word-by-word mask reveal for large display headings.
 *
 * Each word slides up from below a clipping mask so the entrance reads as
 * type being "set" into place, quiet, editorial motion appropriate for
 * clinical/wellness brands.
 */
export interface RevealHeadingProps {
 /** The heading text. Line breaks are preserved via the `\n` character. */
 text: string;
 className?: string;
 /** Which heading tag to render (semantic). Defaults to h1. */
 as?: Extract<ElementType, "h1" | "h2" | "h3" | "h4">;
 /** Seconds of delay before the first word animates. */
 delay?: number;
 /** Optional trailing element rendered inline after the words (e.g. period). */
 trailing?: ReactNode;
 /** Rerun on every enter. Ignored when `immediate` is true. */
 repeat?: boolean;
 /**
 * Fire on mount instead of on scroll. Use for above-the-fold headings
 * (heroes) where `whileInView` intersection detection can miss the
 * initial paint.
 */
 immediate?: boolean;
}

export function RevealHeading({
 text,
 className,
 as: Tag = "h1",
 delay = 0,
 trailing,
 repeat = false,
 immediate = false,
}: RevealHeadingProps) {
 const reduce = useReducedMotion();
 const lines = text.split("\n");

 return (
 <Tag className={className}>
 {lines.map((line, lineIdx) => {
 const words = line.split(" ");
 return (
 <span key={lineIdx} className="block">
 {words.map((word, wordIdx) => {
 const globalIdx =
 lines.slice(0, lineIdx).reduce((sum, l) => sum + l.split(" ").length, 0) +
 wordIdx;
 const initial = reduce ? { y: 0 } : { y: "110%" };
 const target = { y: 0 };
 const transition = {
 duration: 0.75,
 delay: delay + globalIdx * 0.06,
 ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
 };
 return (
 <span
 key={`${lineIdx}-${wordIdx}`}
 className="relative inline-flex overflow-hidden pb-[0.1em] pr-[0.25em] align-top"
 >
 {immediate ? (
 <motion.span
 className="inline-block"
 initial={initial}
 animate={target}
 transition={transition}
 >
 {word}
 </motion.span>
 ) : (
 <motion.span
 className="inline-block"
 initial={initial}
 whileInView={target}
 viewport={{ once: !repeat, margin: "0px 0px -60px 0px" }}
 transition={transition}
 >
 {word}
 </motion.span>
 )}
 </span>
 );
 })}
 {lineIdx === lines.length - 1 && trailing ? (
 <span className="inline-block align-top">{trailing}</span>
 ) : null}
 </span>
 );
 })}
 </Tag>
 );
}
