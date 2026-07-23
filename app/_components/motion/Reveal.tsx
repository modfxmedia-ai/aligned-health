"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-triggered fade + slide-up wrapper.
 *
 * Wrap any block to have it animate in as it enters the viewport. Respects
 * `prefers-reduced-motion`. `delay` staggers the entrance when used in lists.
 */
export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds of delay before this element animates in. */
  delay?: number;
  /** How far below its final position the element starts (px). */
  distance?: number;
  /** Render as this HTML element. */
  as?: "div" | "section" | "article" | "aside" | "li" | "p" | "span" | "header";
  /** Rerun the animation every time it enters the viewport. */
  repeat?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  as = "div",
  repeat = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </MotionTag>
  );
}
