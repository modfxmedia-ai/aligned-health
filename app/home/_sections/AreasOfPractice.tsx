"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";

/**
 * Three-up service tile grid ("Areas of Practice"). Copy is verbatim from
 * the legacy homepage. Cards stagger in on scroll and use the design
 * system's `card-image` utility for hover lift + media zoom.
 */

interface Practice {
  title: string;
  description: string;
  imageSeed: string;
  imageAlt: string;
}

const PRACTICES: readonly Practice[] = [
  {
    title: "Diversified Adjusting",
    description:
      "A diversified adjustment is characterized by a high-velocity, low amplitude thrust. The objective of a diversified adjustment is to restore proper joint mobility and range of motion. The thrust delivered by the chiropractor usually results in the popping noise associated with a chiropractic adjustment.",
    imageSeed: "aligned-diversified",
    imageAlt: "Chiropractor performing a diversified spinal adjustment",
  },
  {
    title: "Percussion",
    description:
      "Percussive therapy, also known as percussion therapy, is a form of soft tissue manipulation intended to reduce muscle soreness and increase range of motion. It is a deep muscle treatment that delivers rapid and long vertical strokes into the muscle, causing neuromuscular response.",
    imageSeed: "aligned-percussion",
    imageAlt: "Percussive therapy being applied to a patient's muscle",
  },
  {
    title: "Pneumatic Compression",
    description:
      "Pneumatic compression uses an air-driven device with multiple chambers that compress in succession. Our system increases blood flow through your muscles, which has been shown to aid with sports and other recovery, similar to the effects of a professional massage.",
    imageSeed: "aligned-airrelax",
    imageAlt: "Air compression recovery boots on a patient's legs",
  },
];

const CARD_IMG = (seed: string) =>
  `https://picsum.photos/seed/${seed}/800/600`;

export function AreasOfPractice() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  };
  const card: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="section-linen section">
      <div className="container-shell">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">What we offer</p>
            <h2 className="heading-section mt-4">Areas of Practice</h2>
          </div>
          <Link href="/services" className="btn-outline btn-sm">
            View All Services
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </Link>
        </div>

        <span className="divider-hairline mt-10 block" />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="mt-10 grid gap-8 md:grid-cols-3"
        >
          {PRACTICES.map((practice) => (
            <motion.li key={practice.title} variants={card}>
              <article className="card-image h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={CARD_IMG(practice.imageSeed)}
                    alt={practice.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="card-image-media"
                  />
                </div>
                <div className="card-image-body">
                  <h3 className="heading-card">{practice.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-mocha">
                    {practice.description}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
