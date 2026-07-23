"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Infinite, seamless horizontal marquee.
 *
 * Duplicates its children once so the two tracks can loop into each other.
 * Pauses on hover. Halts when the user prefers reduced motion.
 */
export interface MarqueeProps {
  children: ReactNode;
  /** Full loop duration in seconds. Higher = slower. Default 32. */
  duration?: number;
  /** Reverse the scroll direction. */
  reverse?: boolean;
  className?: string;
}

export function Marquee({
  children,
  duration = 32,
  reverse = false,
  className,
}: MarqueeProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`group relative flex w-full overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <motion.div
        className="flex shrink-0 items-center gap-12 pr-12 [--play-state:running] group-hover:[--play-state:paused]"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={
          reduce
            ? { x: reverse ? "-50%" : "0%" }
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ animationPlayState: "var(--play-state)" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
