"use client";

import {
 animate,
 useInView,
 useMotionValue,
 useReducedMotion,
 useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Number that counts up from 0 → `value` the first time it scrolls into view.
 *
 * Uses Motion's imperative `animate` on a `MotionValue`, transformed to a
 * formatted string via `useTransform` and rendered into a `<span>`. This
 * avoids re-renders on every frame, the DOM text updates directly.
 */
export interface CounterProps {
 /** Final value to count up to. */
 value: number;
 /** Seconds. Defaults to 1.6. */
 duration?: number;
 /** Optional suffix ("+", "%"). */
 suffix?: string;
 /** Optional prefix. */
 prefix?: string;
 /** ClassName applied to the wrapper span. */
 className?: string;
 /** Decimal places to format. Defaults to 0. */
 decimals?: number;
}

export function Counter({
 value,
 duration = 1.6,
 suffix = "",
 prefix = "",
 className,
 decimals = 0,
}: CounterProps) {
 const reduce = useReducedMotion();
 const spanRef = useRef<HTMLSpanElement>(null);
 const isInView = useInView(spanRef, { once: true, margin: "0px 0px -40px 0px" });

 const count = useMotionValue(reduce ? value : 0);
 const rounded = useTransform(count, (latest) =>
 latest.toLocaleString(undefined, {
 minimumFractionDigits: decimals,
 maximumFractionDigits: decimals,
 })
 );

 useEffect(() => {
 // Subscribe to `rounded` and write into the DOM imperatively so we don't
 // re-render React on every frame.
 const unsubscribe = rounded.on("change", (latest) => {
 if (spanRef.current) spanRef.current.textContent = `${prefix}${latest}${suffix}`;
 });
 return unsubscribe;
 }, [rounded, prefix, suffix]);

 useEffect(() => {
 if (!isInView || reduce) return;
 const controls = animate(count, value, {
 duration,
 ease: [0.16, 1, 0.3, 1],
 });
 return controls.stop;
 }, [isInView, count, value, duration, reduce]);

 // SSR / pre-animation: show the final value so the DOM stays legible.
 const initialText = `${prefix}${value.toLocaleString(undefined, {
 minimumFractionDigits: decimals,
 maximumFractionDigits: decimals,
 })}${suffix}`;

 return (
 <span ref={spanRef} className={className} aria-label={initialText}>
 {reduce ? initialText : `${prefix}0${suffix}`}
 </span>
 );
}
