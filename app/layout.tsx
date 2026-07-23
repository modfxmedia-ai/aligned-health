import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { CLINIC, SITE_URL } from "@/lib/site";
import { SiteHeader } from "@/app/_components/SiteHeader";
import { SiteFooter } from "@/app/_components/SiteFooter";

// Body: clean modern sans-serif.
const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
 display: "swap",
});

// Headings: expressive display serif, matches the ref-site aesthetic.
// Fraunces is a variable font, so we omit `weight` and load the full axis.
const fraunces = Fraunces({
 subsets: ["latin"],
 style: ["normal", "italic"],
 variable: "--font-fraunces",
 display: "swap",
});

export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL),
 title: {
 default: CLINIC.name,
 template: `%s | ${CLINIC.name}`,
 },
 description: CLINIC.description,
 applicationName: CLINIC.name,
 robots: { index: true, follow: true },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html
 lang="en"
 className={`${inter.variable} ${fraunces.variable} h-full`}
 >
 <body className="min-h-full flex flex-col bg-cream text-espresso font-sans antialiased">
 <SiteHeader />
 <main className="flex-1">{children}</main>
 <SiteFooter />
 </body>
 </html>
 );
}
