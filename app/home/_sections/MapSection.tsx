"use client";

import {
 motion,
 useReducedMotion,
} from "motion/react";
import { useState, type FormEvent } from "react";
import { Marquee } from "@/app/_components/motion/Marquee";
import { CLINIC } from "@/lib/site";

/**
 * "Visit us", location + contact form + areas-served marquee.
 *
 * Simplified layout after design review:
 * Row 1 Header (eyebrow + heading + right-aligned "Get Directions" pill)
 * Row 2 Map (7/12) with floating address overlay · Contact form (5/12)
 * Row 3 Slim "Serving" marquee of nearby cities
 *
 * The old 4-card info strip below has been retired, address is now baked
 * into the map card, phone/email live in the form's footer, and service
 * areas run as a single-row marquee at the bottom.
 */

const PHONE_TEL = CLINIC.phone.replace(/[^\d+]/g, "");

const FULL_ADDRESS = `${CLINIC.address.street}, ${CLINIC.address.city}, ${CLINIC.address.region} ${CLINIC.address.postalCode}`;

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
 FULL_ADDRESS
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const MAP_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
 FULL_ADDRESS
)}`;

const SERVICE_AREAS = [
 "Laguna Hills",
 "Laguna Niguel",
 "Mission Viejo",
 "Aliso Viejo",
 "Lake Forest",
 "Irvine",
 "Newport Beach",
 "Costa Mesa",
 "Dana Point",
 "San Clemente",
] as const;

export function MapSection() {
 const reduce = useReducedMotion();

 return (
 <section
 id="visit"
 className="section-cream section relative overflow-hidden"
 >
 <BackgroundFlourish />

 <div className="container-shell relative z-10">
 {/* Header row */}
 <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
 <div className="max-w-2xl">
 <motion.p
 initial={reduce ? false : { opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="eyebrow"
 >
 Come visit us
 </motion.p>
 <motion.h2
 initial={reduce ? false : { opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.75,
 delay: 0.1,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="heading-section mt-4"
 >
 In the heart of{" "}
 <span className="italic text-mocha">Laguna Hills.</span>
 </motion.h2>
 </div>

 <motion.a
 href={MAP_LINK}
 target="_blank"
 rel="noopener noreferrer"
 initial={reduce ? false : { opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.6,
 delay: 0.25,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="btn-outline btn-sm inline-flex"
 >
 Get Directions
 <span aria-hidden="true" className="ml-1">
 ↗
 </span>
 </motion.a>
 </div>

 {/* Row 2: Map + Form (matched heights) */}
 <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-12 lg:gap-8">
 {/* Map, 7 cols */}
 <motion.div
 initial={reduce ? false : { opacity: 0, x: -24 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
 className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-tan/30 lg:col-span-7"
 >
 <div className="relative aspect-[4/3] w-full bg-linen md:aspect-[3/2] lg:aspect-auto lg:h-full lg:min-h-[560px]">
 <iframe
 src={MAP_EMBED_URL}
 title={`Map showing ${CLINIC.name} at ${FULL_ADDRESS}`}
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 allowFullScreen
 className="absolute inset-0 h-full w-full border-0"
 />
 </div>

 {/* Top-left: city pill with pulsing dot */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.6,
 delay: 0.4,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-linen/95 px-4 py-2 shadow-card backdrop-blur-sm md:left-6 md:top-6"
 >
 <span
 aria-hidden="true"
 className="relative inline-flex h-2 w-2"
 >
 <motion.span
 animate={
 reduce
 ? undefined
 : { scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }
 }
 transition={{
 duration: 2.2,
 repeat: Infinity,
 ease: "easeOut",
 }}
 className="absolute inset-0 rounded-full bg-tan"
 />
 <span className="relative h-2 w-2 rounded-full bg-tan" />
 </span>
 <span className="text-[0.7rem] uppercase tracking-[0.22em] text-espresso">
 {CLINIC.address.city}, {CLINIC.address.region}
 </span>
 </motion.div>

 {/* Bottom-left: floating address card overlay */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.7,
 delay: 0.6,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="absolute inset-x-4 bottom-4 rounded-2xl bg-linen/95 p-5 shadow-card backdrop-blur-sm md:inset-x-auto md:bottom-6 md:left-6 md:max-w-[300px]"
 >
 <div className="flex items-start gap-3">
 <span
 aria-hidden="true"
 className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-tan/15 text-tan"
 >
 <PinIcon />
 </span>
 <div className="min-w-0 flex-1">
 <p className="eyebrow !text-mocha">The clinic</p>
 <p className="mt-2 text-sm leading-snug text-espresso">
 {CLINIC.address.street}
 <br />
 {CLINIC.address.city}, {CLINIC.address.region}{" "}
 {CLINIC.address.postalCode}
 </p>
 <a
 href={MAP_LINK}
 target="_blank"
 rel="noopener noreferrer"
 className="mt-3 inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.2em] text-mocha underline decoration-tan underline-offset-4 hover:text-espresso"
 >
 Get directions <span aria-hidden="true">↗</span>
 </a>
 </div>
 </div>
 </motion.div>
 </motion.div>

 {/* Contact form, 5 cols */}
 <motion.div
 initial={reduce ? false : { opacity: 0, x: 24 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.85,
 delay: 0.15,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="lg:col-span-5"
 >
 <ContactForm />
 </motion.div>
 </div>

 {/* Row 3: Areas we serve, slim marquee (no info cards) */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px 0px -60px 0px" }}
 transition={{
 duration: 0.7,
 delay: 0.2,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="mt-12 overflow-hidden rounded-3xl border border-tan/30 bg-linen py-4 md:mt-14"
 >
 <div className="flex items-center gap-4 px-6">
 <p className="whitespace-nowrap text-[0.65rem] uppercase tracking-[0.24em] text-mocha">
 Serving
 </p>
 <span aria-hidden="true" className="h-px w-8 bg-tan/50" />
 <div className="min-w-0 flex-1">
 <Marquee duration={40}>
 <ul className="flex shrink-0 items-center gap-8 pr-8">
 {SERVICE_AREAS.map((area) => (
 <li
 key={area}
 className="flex items-center gap-3 whitespace-nowrap text-sm text-espresso"
 >
 <span>{area}</span>
 <span
 aria-hidden="true"
 className="block h-1 w-1 rounded-full bg-tan"
 />
 </li>
 ))}
 </ul>
 </Marquee>
 </div>
 </div>
 </motion.div>
 </div>
 </section>
 );
}

/* ---------------------------------------------------------------------- */
/* Contact form */
/* ---------------------------------------------------------------------- */

interface FormState {
 name: string;
 email: string;
 phone: string;
 message: string;
}

const INITIAL: FormState = { name: "", email: "", phone: "", message: "" };

function ContactForm() {
 const [values, setValues] = useState<FormState>(INITIAL);
 const [submitting, setSubmitting] = useState(false);
 const [submitted, setSubmitted] = useState(false);

 const handleChange = (field: keyof FormState) =>
 (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 setValues((prev) => ({ ...prev, [field]: event.target.value }));
 };

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
 event.preventDefault();
 setSubmitting(true);
 // TODO: wire to a real endpoint (Formspree / Resend / API route).
 await new Promise((resolve) => setTimeout(resolve, 700));
 setSubmitting(false);
 setSubmitted(true);
 setValues(INITIAL);
 }

 return (
 <form
 onSubmit={handleSubmit}
 className="flex h-full flex-col rounded-3xl border border-tan/30 bg-linen p-6 shadow-card md:p-8"
 >
 <div className="flex items-center gap-3">
 <span
 aria-hidden="true"
 className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-tan/15 text-tan"
 >
 <MailIcon />
 </span>
 <p className="eyebrow">Send us a message</p>
 </div>

 <h3 className="heading-card mt-3">
 We&rsquo;ll be in touch{" "}
 <span className="italic text-tan">shortly.</span>
 </h3>
 <p className="mt-3 text-sm leading-relaxed text-mocha">
 Have a question or want to check benefits before booking? Drop a note
 and we&rsquo;ll get back to you within one business day.
 </p>

 <div className="mt-6 flex flex-col gap-4">
 <Field
 id="ah-name"
 label="Name"
 name="name"
 type="text"
 autoComplete="name"
 required
 value={values.name}
 onChange={handleChange("name")}
 disabled={submitting}
 />
 <Field
 id="ah-email"
 label="Email"
 name="email"
 type="email"
 autoComplete="email"
 required
 value={values.email}
 onChange={handleChange("email")}
 disabled={submitting}
 />
 <Field
 id="ah-phone"
 label="Phone (optional)"
 name="phone"
 type="tel"
 autoComplete="tel"
 value={values.phone}
 onChange={handleChange("phone")}
 disabled={submitting}
 />
 <Field
 id="ah-message"
 label="Message"
 name="message"
 multiline
 rows={4}
 required
 value={values.message}
 onChange={handleChange("message")}
 disabled={submitting}
 />
 </div>

 <div className="mt-6 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
 <button
 type="submit"
 disabled={submitting}
 className="btn-primary inline-flex w-full items-center justify-center gap-2 md:w-auto"
 >
 {submitting ? "Sending…" : "Send Message"}
 {!submitting ? <span aria-hidden="true">→</span> : null}
 </button>

 {submitted ? (
 <motion.p
 initial={{ opacity: 0, y: 6 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
 className="text-xs uppercase tracking-[0.2em] text-tan"
 aria-live="polite"
 >
 ✓ Message sent, thank you.
 </motion.p>
 ) : (
 <p className="text-xs leading-relaxed text-mocha/70">
 Or call{" "}
 <a
 href={`tel:${PHONE_TEL}`}
 className="underline decoration-tan underline-offset-4 hover:text-espresso"
 >
 {CLINIC.phoneDisplay}
 </a>{" "}
 · <a
 href={`mailto:${CLINIC.email}`}
 className="underline decoration-tan underline-offset-4 hover:text-espresso"
 >
 email us
 </a>
 </p>
 )}
 </div>
 </form>
 );
}

interface FieldProps {
 id: string;
 label: string;
 name: string;
 type?: string;
 value: string;
 onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
 required?: boolean;
 disabled?: boolean;
 autoComplete?: string;
 multiline?: boolean;
 rows?: number;
}

function Field({
 id,
 label,
 name,
 type = "text",
 value,
 onChange,
 required = false,
 disabled = false,
 autoComplete,
 multiline = false,
 rows = 3,
}: FieldProps) {
 const baseInput =
 "w-full rounded-xl border border-tan/40 bg-cream/60 px-4 py-3 text-sm text-espresso placeholder:text-mocha/40 focus:border-tan focus:bg-linen focus:outline-none focus:ring-2 focus:ring-tan/40 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60";

 return (
 <div>
 <label
 htmlFor={id}
 className="mb-1.5 block text-[0.65rem] uppercase tracking-[0.2em] text-mocha"
 >
 {label}
 {required ? (
 <span aria-hidden="true" className="ml-1 text-tan">
 *
 </span>
 ) : null}
 </label>
 {multiline ? (
 <textarea
 id={id}
 name={name}
 value={value}
 onChange={onChange}
 required={required}
 disabled={disabled}
 rows={rows}
 className={`${baseInput} resize-none`}
 />
 ) : (
 <input
 id={id}
 name={name}
 type={type}
 value={value}
 onChange={onChange}
 required={required}
 disabled={disabled}
 autoComplete={autoComplete}
 className={baseInput}
 />
 )}
 </div>
 );
}

/* ---------------------------------------------------------------------- */
/* Icons */
/* ---------------------------------------------------------------------- */

function PinIcon() {
 return (
 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
 <path d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
 <circle cx="12" cy="10" r="2.5" />
 </svg>
 );
}

function MailIcon() {
 return (
 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
 <rect x="3" y="5" width="18" height="14" rx="2" />
 <path d="M3 7l9 6 9-6" />
 </svg>
 );
}

/* ---------------------------------------------------------------------- */
/* Background flourish */
/* ---------------------------------------------------------------------- */
function BackgroundFlourish() {
 const reduce = useReducedMotion();
 const draw = (delay: number) => ({
 initial: reduce
 ? { pathLength: 1, opacity: 0.22 }
 : { pathLength: 0, opacity: 0 },
 whileInView: { pathLength: 1, opacity: 0.22 },
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
 d="M -40 700 C 260 600, 460 480, 720 400 S 1180 240, 1440 120"
 {...draw(0.2)}
 />
 <motion.path
 d="M -40 780 C 260 680, 460 560, 720 480 S 1180 320, 1440 200"
 strokeWidth="0.6"
 {...draw(0.5)}
 />
 </svg>
 );
}
