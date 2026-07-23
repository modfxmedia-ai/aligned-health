import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Live-site interior photos on Squarespace's CDN.
      // TODO: self-host under `/public/images/` before decommissioning the
      // legacy site — Squarespace URLs will 404 once the account lapses.
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      // Photorealistic placeholders for card slots not yet supplied.
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  async redirects() {
    return [
      {
        // Preserve the legacy canonical: root traffic lands on `/home`.
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
