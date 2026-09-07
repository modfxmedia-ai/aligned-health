import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Live-site interior photos on Squarespace's CDN.
      // TODO: self-host under `/public/images/` before decommissioning the
      // legacy site — Squarespace URLs will 404 once the account lapses.
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
  outputFileTracingExcludes: {
    "*": ["./public/images/**", "./public/**/*.mp4", "./public/**/*.webm"],
  },
};

export default nextConfig;
