"use client";

import { Marquee } from "@/app/_components/motion/Marquee";

/**
 * Slim infinite marquee of trust signals shown directly under the hero.
 */

const ITEMS = [
  "Schedule now",
  "6+ PPO plans accepted",
  "HSA · FSA · HRA welcome",
  "New patients welcome",
  "Laguna Hills, CA",
  "Insurance verified first",
  "1-on-1 focused sessions",
] as const;

export function TrustMarquee() {
  return (
    <section
      aria-label="At a glance"
      className="border-y border-tan/30 bg-linen"
    >
      <Marquee duration={40} className="py-5">
        {ITEMS.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-12"
          >
            <span className="text-sm uppercase tracking-[0.28em] text-espresso whitespace-nowrap">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="block h-1.5 w-1.5 shrink-0 rounded-full bg-tan"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
