import { getAllPosts } from '@/lib/blog'
import { DEFAULT_CTA } from './config'
import type { BlogPostData } from './types'

/** Existing compiled posts win on slug collision with Ranked. */
export function getLocalBlogPosts(): BlogPostData[] {
  return getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    metaDescription: post.description,
    h1: post.title,
    publishDate: post.datePublished,
    intro: post.description,
    coverImage: post.hero.src,
    coverAlt: post.hero.alt,
    sections: [{ heading: post.title, body: [post.description] }],
    cta: DEFAULT_CTA,
  }))
}
