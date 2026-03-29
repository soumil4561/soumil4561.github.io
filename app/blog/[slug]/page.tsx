export const dynamicParams = false;

import { serialize } from "next-mdx-remote-client/serialize";
import { notFound } from "next/navigation";

import { ShowBlogInfo } from "./blog-info";

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
    <section className="section" id={post.slug}>
      <ShowBlogInfo
        banner={post.frontmatter.banner}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        published={post.frontmatter.published}
        readingTime={post.frontmatter.readingTime}
        slug={post.frontmatter.slug}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <MDXRenderer mdxSource={mdxSource} />
    </section>
  );
}
