import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { getAllPostsMeta } from "@/lib/blog";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical insights, industry trends, and engineering perspectives from the Softwave Innovation team.",
  openGraph: {
    title: "Softwave Innovation Blog",
    description: "Technical insights and industry trends.",
    url: "https://softwaveinnovation.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="bg-[#faf4f1] dark:bg-[#0d0d0d]">
      <PageHero
        badge="Insights & Updates"
        title="The Softwave Blog"
        subtitle="Technical insights, industry trends, and perspectives from our engineering team."
      />
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-[#6b7280]">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 hover:border-[#e8735f]/40 dark:hover:border-[#e8735f]/40 transition-all group flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 rounded-full bg-[#e8735f]/10 text-[#e8735f] text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#6b7280] text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-3 group-hover:text-[#e8735f] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e5ddd8] dark:border-[#3d3d3d]/50">
                    <span className="text-[#6b7280] text-xs">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-[#e8735f] text-sm font-medium hover:text-[#d4654f] transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
