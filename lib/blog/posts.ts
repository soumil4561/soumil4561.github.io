import fsp from "fs/promises";
import path from "path";

import matter from "gray-matter";

//TODO: add this later as a build param dep var...
const POSTS_PATH = path.join(process.cwd(), "content/blog/pages");

export async function getPostSlugs() {
  const files = await fsp.readdir(POSTS_PATH);

  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export type FrontmatterType = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
};

export type Post = {
  slug: string;
  frontmatter: FrontmatterType;
  content: string;
};

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  const file = await fsp.readFile(fullPath, "utf8");

  const { data: frontmatter, content } = matter(file);

  return { slug: realSlug, frontmatter, content };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();

  return slugs.map(async (s) => await getPostBySlug(s));
}
