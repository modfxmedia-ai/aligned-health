import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL, type Route } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { getAllServices } from "@/lib/services";

/**
 * Per-route sitemap metadata. Keep priorities and change frequencies here so
 * they stay explicit and reviewable rather than derived.
 */
const ROUTE_META: Record<
  Route,
  { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
> = {
  "/home": { changeFrequency: "weekly", priority: 1.0 },
  "/about": { changeFrequency: "monthly", priority: 0.8 },
  "/our-team": { changeFrequency: "monthly", priority: 0.8 },
  "/services": { changeFrequency: "monthly", priority: 0.9 },
  "/blog": { changeFrequency: "weekly", priority: 0.6 },
  "/appointments": { changeFrequency: "monthly", priority: 0.9 },
  "/contact-us": { changeFrequency: "yearly", priority: 0.7 },
  "/privacy-policy": { changeFrequency: "yearly", priority: 0.3 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: ROUTE_META[path].changeFrequency,
    priority: ROUTE_META[path].priority,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = getAllServices().map(
    (service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...staticEntries, ...serviceEntries, ...postEntries];
}
