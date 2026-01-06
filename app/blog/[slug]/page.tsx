export const dynamicParams = false;

import { serialize } from "next-mdx-remote-client/serialize";
import { notFound } from "next/navigation";
import Image from "next/image";

import MDXRenderer from "@/components/mdx/MDXRenderer";
import { getAllPosts, getPostBySlug } from "@/lib/blog/posts";
import ArrowScrollButton from "@/components/button/ArrowScrollButton";
import FrontmatterDisplayCard from "@/components/blog/FrontMatterDisplayCard";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts
    .filter((p) => p.frontmatter.published)
    .map((p) => ({ slug: p.slug }));
}

function formatDateWithOrdinal(date: Date): string {
  const day = date.getDate();

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";

  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${day}${suffix} ${month} ${year}`;
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
      <div className="section-heading mb-2">{post.frontmatter.title}</div>
      <div className="font-content font-light md:text-[1.25rem] text-center">
        {post.frontmatter.description}
      </div>
      <ArrowScrollButton
        className="my-10"
        target={{ id: "blog-content-start" }}
        text="Read more"
      />
      {/* then the three bars: date, tags, reading time */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 my-2">
        <FrontmatterDisplayCard
          title="date"
          value={formatDateWithOrdinal(new Date(post.frontmatter.date))}
        />
        <FrontmatterDisplayCard
          title="category"
          value={post.frontmatter.tags[0]}
        />
        <FrontmatterDisplayCard
          title="reading Time"
          value={post.frontmatter.readingTime}
        />
      </div>
      {/* picture */}
      <div className="relative w-full aspect-[16/9] border-1 border-border my-2">
        <Image
          fill
          priority
          alt={post.frontmatter.title}
          className="object-cover "
          src={post.frontmatter.banner}
        />
      </div>
      {/* then the mdx parse */}
      <MDXRenderer mdxSource={mdxSource} />
    </section>
  );
}
