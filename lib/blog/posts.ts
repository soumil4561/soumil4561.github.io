import fs from "fs";
import fsp from "fs/promises";
import path from "path";

import matter from "gray-matter";

//TODO: add this later as a build param dep var...
const POSTS_PATH = path.join(process.cwd(), "content/blog/pages");

//TODO: add some form of validation here as well ( or atleast a test step in ci so that only correctly formatted frontmatter can passthrough)
export type FrontmatterType = {
  slug: string;
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

function getAllPostFiles(): string[] {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => path.join(POSTS_PATH, f));
}

//Required by individual statically rendered which will get only "slug" from the generateStaticParams
export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  const file = await fsp.readFile(fullPath, "utf8");

  const { data: frontmatter, content } = matter(file);

  return { slug: realSlug, frontmatter, content };
}

export async function getPostFromFile(fullPath: string): Promise<Post> {
  const file = await fsp.readFile(fullPath, "utf-8");
  const { data, content } = matter(file);

  return {
    slug: data.slug,
    frontmatter: data as FrontmatterType,
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const files = getAllPostFiles();

  const posts = await Promise.all(
    files.map((filePath) => getPostFromFile(filePath)),
  );

  return posts;
}
