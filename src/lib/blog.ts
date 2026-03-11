import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: number;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPostsMeta(): BlogPostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = getSlugFromFilename(filename);
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? "",
      category: data.category ?? "",
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      tags: data.tags ?? [],
      readTime: data.readTime ?? 5,
    } as BlogPostMeta;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!filePath) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    category: data.category ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    readTime: data.readTime ?? 5,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(getSlugFromFilename);
}

// Keep backward compat alias
export const blogPosts = getAllPostsMeta();
export function getBlogPostBySlug(slug: string) {
  return getPostBySlug(slug);
}
