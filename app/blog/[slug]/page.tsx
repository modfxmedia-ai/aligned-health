import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "./_components/BlogPostView";
import {
 getAllPostSlugs,
 getPostBySlug,
 formatPostDate,
} from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

/**
 * /blog/[slug], dynamic post page. Prerendered at build time via
 * generateStaticParams so every post ends up as a static file.
 */

interface PageProps {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
 return getAllPostSlugs().map((slug) => ({ slug }));
}

// If someone requests a slug we don't know about, 404 instead of trying
// to render it dynamically at runtime.
export const dynamicParams = false;

export async function generateMetadata({
 params,
}: PageProps): Promise<Metadata> {
 const { slug } = await params;
 const post = getPostBySlug(slug);
 if (!post) {
 return { title: "Not Found" };
 }

 // Strip HTML entities from title for meta tags (search engines want plain text).
 const plainTitle = post.title.replace(/&[a-z]+;/g, "");
 const plainDescription = post.description.replace(/&[a-z]+;/g, "");

 const url = `/blog/${post.slug}`;
 return {
 title: { absolute: plainTitle },
 description: plainDescription,
 keywords: post.keywords,
 authors: [{ name: post.author.name }],
 alternates: { canonical: url },
 openGraph: {
 type: "article",
 url,
 title: plainTitle,
 description: plainDescription,
 publishedTime: post.datePublished,
 modifiedTime: post.dateModified ?? post.datePublished,
 authors: [post.author.name],
 images: [{ url: post.hero.src, alt: post.hero.alt }],
 },
 twitter: {
 card: "summary_large_image",
 title: plainTitle,
 description: plainDescription,
 images: [post.hero.src],
 },
 };
}

export default async function BlogPostPage({ params }: PageProps) {
 const { slug } = await params;
 const post = getPostBySlug(slug);
 if (!post) {
 notFound();
 }

 const plainTitle = post.title.replace(/&[a-z]+;/g, "");
 const plainDescription = post.description.replace(/&[a-z]+;/g, "");
 const url = `${SITE_URL}/blog/${post.slug}`;

 // Article JSON-LD (BlogPosting) for rich results.
 const jsonLd = {
 "@context": "https://schema.org",
 "@type": "BlogPosting",
 "@id": url,
 mainEntityOfPage: { "@type": "WebPage", "@id": url },
 url,
 headline: plainTitle,
 description: plainDescription,
 datePublished: post.datePublished,
 dateModified: post.dateModified ?? post.datePublished,
 author: {
 "@type": "Person",
 name: post.author.name,
 },
 publisher: {
 "@type": "Organization",
 name: "Aligned Health",
 logo: {
 "@type": "ImageObject",
 url: `${SITE_URL}/logos/aligned-health-light.png`,
 },
 },
 image: [post.hero.src],
 keywords: post.keywords.join(", "),
 articleSection: post.category.replace(/&[a-z]+;/g, ""),
 wordCount: estimateWordCount(post),
 // Human-friendly published date string (extra hint for parsers).
 inLanguage: "en-US",
 // Duplicate as a human-readable string too.
 datePublishedText: formatPostDate(post.datePublished),
 };

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 <BlogPostView post={post} />
 </>
 );
}

function estimateWordCount(post: {
 body: { type: string }[];
}): number {
 // Rough estimate, sum text length across blocks. Good enough for JSON-LD.
 let count = 0;
 for (const b of post.body as Array<Record<string, unknown>>) {
 if (typeof b.text === "string") {
 count += (b.text as string).split(/\s+/).length;
 }
 if (Array.isArray(b.items)) {
 for (const item of b.items as string[]) {
 count += item.split(/\s+/).length;
 }
 }
 }
 return count;
}
