import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#e8735f] text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article header */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#e8735f]/10 text-[#e8735f] text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-[#faf4f1] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#6b7280] text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#9ca3af]">By Softwave Team</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#3d3d3d]/50 mb-8" />

          {/* Article content */}
          <div className="space-y-4 text-[#9ca3af] leading-relaxed">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-[#faf4f1] mt-8 mb-4">{line.slice(3)}</h2>;
              }
              if (line.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-bold text-[#faf4f1] mt-6 mb-3">{line.slice(4)}</h3>;
              }
              if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
                return <p key={i} className="font-bold text-[#faf4f1]">{line.slice(2, -2)}</p>;
              }
              if (line.startsWith("- ")) {
                return <li key={i} className="ml-4 text-[#9ca3af] list-disc">{line.slice(2)}</li>;
              }
              if (line.trim() === "") {
                return <br key={i} />;
              }
              return <p key={i} className="text-[#9ca3af]">{line}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#3d3d3d]/50">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#1a1a1a] border border-[#3d3d3d]/50 text-[#9ca3af] text-sm"
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
      <section className="py-16 bg-[#1a1a1a] border-t border-[#3d3d3d]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#faf4f1] mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="p-6 rounded-2xl bg-[#0d0d0d] border border-[#3d3d3d]/50 hover:border-[#e8735f]/40 transition-all group"
              >
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#e8735f]/10 text-[#e8735f] text-xs font-medium mb-3">
                  {related.category}
                </span>
                <h3 className="text-[#faf4f1] font-bold group-hover:text-[#e8735f] transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
