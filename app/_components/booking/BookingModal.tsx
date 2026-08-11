"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { useBookingModal } from "@/app/_components/booking/BookingModalContext";

/**
 * Every "Book an Appointment" trigger on the site opens this popup instead
 * of navigating straight to Jane App: it shows the lead-capture SCHEDULE
 * form first, then the form itself (configured in GoHighLevel) redirects
 * the visitor to the Jane App booking calendar on submit.
 *
 * Kept permanently mounted (visibility toggled by CSS, not conditional
 * rendering) so the embed's own `form_embed.js` script only ever needs to
 * find the iframe once, it doesn't reliably re-detect an iframe that gets
 * unmounted and remounted later.
 */
const FORM_ID = "JDyWXD7QpCxQQUcQ2iov";

export function BookingModal() {
 const { isOpen, closeBookingModal } = useBookingModal();
 const [hasOpened, setHasOpened] = useState(false);

 useEffect(() => {
 if (isOpen) setHasOpened(true);
 }, [isOpen]);

 useEffect(() => {
 const onKey = (event: KeyboardEvent) => {
 if (event.key === "Escape") closeBookingModal();
 };
 window.addEventListener("keydown", onKey);
 return () => window.removeEventListener("keydown", onKey);
 }, [closeBookingModal]);

 useEffect(() => {
 const previousOverflow = document.body.style.overflow;
 document.body.style.overflow = isOpen ? "hidden" : previousOverflow;
 return () => {
 document.body.style.overflow = previousOverflow;
 };
 }, [isOpen]);

 return (
 <div
 role="dialog"
 aria-modal="true"
 aria-hidden={!isOpen}
 aria-label="Schedule an appointment"
 className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
 isOpen
 ? "pointer-events-auto opacity-100"
 : "pointer-events-none opacity-0"
 }`}
 >
 <div
 aria-hidden="true"
 onClick={closeBookingModal}
 className="absolute inset-0 bg-espresso/70 backdrop-blur-sm"
 />

 <div
 className={`relative flex max-h-[88vh] w-full max-w-xl flex-col overflow-hidden rounded-[24px] bg-linen shadow-card ring-1 ring-tan/20 transition-all duration-300 ${
 isOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"
 }`}
 >
 {/* Branded header */}
 <div className="relative shrink-0 overflow-hidden bg-espresso px-6 py-7 text-linen sm:px-9 sm:py-8">
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 opacity-90"
 style={{
 background:
 "radial-gradient(60% 90% at 15% 0%, rgba(185,165,144,0.3) 0%, rgba(54,48,42,0) 65%)",
 }}
 />
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-tan/40"
 />
 <div className="relative pr-10">
 <p className="eyebrow !text-tan">Schedule your visit</p>
 <h2 className="heading-card mt-2 !text-linen">
 Let&rsquo;s get you{" "}
 <span className="italic text-tan">aligned.</span>
 </h2>
 </div>
 <button
 type="button"
 onClick={closeBookingModal}
 tabIndex={isOpen ? 0 : -1}
 aria-label="Close booking form"
 className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-linen/10 text-linen ring-1 ring-linen/25 transition-colors hover:bg-linen/20 sm:right-6 sm:top-6"
 >
 <CloseIcon />
 </button>
 </div>

 <div className="min-h-0 flex-1 overflow-y-auto bg-cream px-3 pb-3 pt-4 sm:px-5 sm:pb-5">
 {hasOpened ? (
 <iframe
 src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
 style={{
 width: "100%",
 height: 1072,
 border: "none",
 borderRadius: 16,
 display: "block",
 }}
 id={`inline-${FORM_ID}`}
 data-layout="{'id':'INLINE'}"
 data-trigger-type="alwaysShow"
 data-trigger-value=""
 data-activation-type="alwaysActivated"
 data-activation-value=""
 data-deactivation-type="neverDeactivate"
 data-deactivation-value=""
 data-form-name="SCHEDULE Form"
 data-height="1072"
 data-layout-iframe-id={`inline-${FORM_ID}`}
 data-form-id={FORM_ID}
 title="SCHEDULE Form"
 />
 ) : null}
 </div>
 </div>

 <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
 </div>
 );
}

function CloseIcon() {
 return (
 <svg
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinecap="round"
 className="h-4 w-4"
 aria-hidden="true"
 >
 <path d="M6 6l12 12M18 6L6 18" />
 </svg>
 );
}
