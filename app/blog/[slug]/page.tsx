export const dynamicParams = false;

import { serialize } from "next-mdx-remote-client/serialize";
import { notFound } from "next/navigation";

import MDXRenderer from "@/components/mdx/MDXRenderer";
import { getAllPosts, getPostBySlug } from "@/lib/blog/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts
    .filter((p) => p.frontmatter.published)
    .map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // check if post not found or is not published?
  if (post == null || !post.frontmatter.published) {
    notFound();
  }

  const mdxSource = await serialize({ source: post.content });

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="h-16" />
      <main className="container mx-auto max-w-8xl px-6 flex-grow">
        <section className="section">
          <div className="page-heading">{post.frontmatter.title}</div>
          <div className="page-heading-subtitle">
            {post.frontmatter.description}
          </div>
          {/* read more button */}
          {/* then the three bars: date, tags, reading time */}
          {/* picture */}
          {/* then the mdx parse */}
          <MDXRenderer mdxSource={mdxSource} />
        </section>
      </main>
      <footer className="w-full flex items-center justify-center py-3" />
    </div>
  );
}
