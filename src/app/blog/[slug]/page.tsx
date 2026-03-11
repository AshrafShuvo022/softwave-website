import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getAllPostsMeta, getPostBySlug } from "@/lib/blog";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPostsMeta();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#faf4f1] dark:bg-[#0d0d0d] min-h-screen">
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4b5563] dark:text-[#9ca3af] hover:text-[#e8735f] text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article header */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#e8735f]/10 text-[#e8735f] text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#6b7280] text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
              <span className="text-[#4b5563] dark:text-[#9ca3af]">By Softwave Team</span>
            </div>
          </div>

          <div className="h-px bg-[#e5ddd8] dark:bg-[#3d3d3d]/50 mb-10" />

          {/* MDX Content */}
          <div className="prose-custom">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#e5ddd8] dark:border-[#3d3d3d]/50">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white dark:bg-[#1a1a1a] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 text-[#4b5563] dark:text-[#9ca3af] text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-[#1a1a1a] border-t border-[#e5ddd8] dark:border-[#3d3d3d]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="p-6 rounded-2xl bg-[#faf4f1] dark:bg-[#0d0d0d] border border-[#e5ddd8] dark:border-[#3d3d3d]/50 hover:border-[#e8735f]/40 transition-all group"
                >
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#e8735f]/10 text-[#e8735f] text-xs font-medium mb-3">
                    {related.category}
                  </span>
                  <h3 className="text-[#1a1a1a] dark:text-[#faf4f1] font-bold group-hover:text-[#e8735f] transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
