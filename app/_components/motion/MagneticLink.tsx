"use client";

import Link from "next/link";
import {
 motion,
 useMotionValue,
 useReducedMotion,
 useSpring,
} from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";

/**
 * A link/button that gently drifts toward the cursor while hovered, a
 * "magnetic" feel appropriate for a hero-level primary CTA.
 *
 * Kept as a lightweight wrapper: pass any of our existing button utility
 * classes (`btn-primary`, `btn-cta-onDark`, `btn-lg`) via `className`.
 */
export interface MagneticLinkProps {
 href: string;
 children: ReactNode;
 className?: string;
 /** How strongly the button follows the cursor. 0 disables. Default 0.28. */
 strength?: number;
 /** Open in new tab (adds noopener). */
 external?: boolean;
 ariaLabel?: string;
}

export function MagneticLink({
 href,
 children,
 className,
 strength = 0.28,
 external = false,
 ariaLabel,
}: MagneticLinkProps) {
 const reduce = useReducedMotion();
 const ref = useRef<HTMLSpanElement>(null);

 const x = useMotionValue(0);
 const y = useMotionValue(0);
 const springX = useSpring(x, { stiffness: 200, damping: 15 });
 const springY = useSpring(y, { stiffness: 200, damping: 15 });

 const handleMove = (event: MouseEvent<HTMLSpanElement>) => {
 if (reduce || !ref.current) return;
 const rect = ref.current.getBoundingClientRect();
 x.set((event.clientX - rect.left - rect.width / 2) * strength);
 y.set((event.clientY - rect.top - rect.height / 2) * strength);
 };

 const handleLeave = () => {
 x.set(0);
 y.set(0);
 };

 const linkProps = external
 ? { target: "_blank", rel: "noopener noreferrer" as const }
 : {};

 return (
 <motion.span
 ref={ref}
 onMouseMove={handleMove}
 onMouseLeave={handleLeave}
 style={reduce ? undefined : { x: springX, y: springY }}
 className="inline-block will-change-transform"
 >
 <Link
 href={href}
 aria-label={ariaLabel}
 className={className}
 {...linkProps}
 >
 {children}
 </Link>
 </motion.span>
 );
}
