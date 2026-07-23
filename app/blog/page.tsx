import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";
import { BlogIndex } from "./_components/BlogIndex";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const PATH = "/blog";

export const metadata: Metadata = {
  title: "The Aligned Health Journal · Chiropractic Insights in Laguna Hills",
  description:
    "Plain-spoken articles on chiropractic care, recovery modalities, and treatment plans from the Aligned Health team in Laguna Hills, CA.",
  keywords: [
    "chiropractic blog",
    "chiropractor laguna hills blog",
    "orange county chiropractic articles",
    "recovery therapy blog",
    "aligned health journal",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "The Aligned Health Journal",
    description:
      "Plain-spoken articles on chiropractic care, recovery modalities, and treatment plans.",
    url: PATH,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Blog collection JSON-LD for richer SERP presentation.
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}${PATH}`,
    url: `${SITE_URL}${PATH}`,
    name: "The Aligned Health Journal",
    description:
      "Chiropractic care, recovery modalities, and treatment insights from Aligned Health in Laguna Hills, CA.",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${post.slug}`,
      url: `${SITE_URL}/blog/${post.slug}`,
      headline: post.title.replace(/&[a-z]+;/g, ""),
      description: post.description.replace(/&[a-z]+;/g, ""),
      datePublished: post.datePublished,
      dateModified: post.dateModified ?? post.datePublished,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
      image: post.hero.src,
      keywords: post.keywords.join(", "),
    })),
  };

  return (
    <>
      <ClinicJsonLd pagePath={PATH} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <BlogIndex posts={posts} />
    </>
  );
}
