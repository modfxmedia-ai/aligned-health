"use client";

import type { MouseEvent, ReactNode } from "react";
import { useBookingModal } from "@/app/_components/booking/BookingModalContext";

interface BookNowLinkProps {
 children: ReactNode;
 className?: string;
 /** Extra behavior to run alongside opening the modal, e.g. closing a mobile nav sheet. */
 onNavigate?: () => void;
 ariaLabel?: string;
 role?: string;
 tabIndex?: number;
}

/**
 * Drop-in replacement for the old `<a href="https://alignedhealthoc.janeapp.com/">`
 * Book Now buttons/links, opens the lead-capture booking modal instead of
 * navigating straight to Jane App.
 */
export function BookNowLink({
 children,
 className,
 onNavigate,
 ariaLabel,
 role,
 tabIndex,
}: BookNowLinkProps) {
 const { openBookingModal } = useBookingModal();

 const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
 event.preventDefault();
 openBookingModal();
 onNavigate?.();
 };

 return (
 <button
 type="button"
 onClick={handleClick}
 className={className}
 aria-label={ariaLabel}
 role={role}
 tabIndex={tabIndex}
 >
 {children}
 </button>
 );
}
