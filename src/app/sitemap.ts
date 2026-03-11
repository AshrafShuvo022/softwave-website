import { MetadataRoute } from "next";
import { getAllSlugs as getBlogSlugs } from "@/lib/blog";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://softwaveinnovation.com";

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/services`, priority: 0.9 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.9 },
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = getBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
