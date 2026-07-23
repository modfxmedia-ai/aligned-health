"use client";

import { motion, useReducedMotion } from "motion/react";
import { MagneticLink } from "@/app/_components/motion/MagneticLink";
import { RevealHeading } from "@/app/_components/motion/RevealHeading";
import { CLINIC } from "@/lib/site";

const PHONE_TEL = CLINIC.phone.replace(/[^\d+]/g, "");

/**
 * Closing "Get in Touch" CTA. Big serif headline, quick sentence, magnetic
 * primary button + a plain-text call-us shortcut. Sits on the dark espresso
 * so it visually closes the page against the footer that follows.
 */
export function GetInTouch() {
  const reduce = useReducedMotion();

  return (
    <section className="section-espresso section relative overflow-hidden">
      {/* Soft warm glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 30%, rgba(185,165,144,0.18) 0%, rgba(87,76,63,0) 65%)",
        }}
      />

      <div className="container-shell relative z-10 max-w-3xl text-center">
        <motion.p
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          We&rsquo;d love to hear from you
        </motion.p>

        <RevealHeading
          as="h2"
          text={"Let's get you\naligned."}
          className="heading-display mt-6 text-linen"
          delay={0.1}
        />

        <motion.p
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.55,
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
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.75,
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
            className="link-underline text-sm uppercase tracking-[0.2em] text-linen/80 hover:text-linen"
          >
            Or call {CLINIC.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
