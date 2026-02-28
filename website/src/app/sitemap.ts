import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.midtermmentor.com";
  const lastModified = new Date("2026-02-28");

  const blogEntries: MetadataRoute.Sitemap = blogPosts
    .filter((p) => new Date(p.date) <= new Date())
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...blogEntries,
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
