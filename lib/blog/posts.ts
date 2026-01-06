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
  readingTime: string;
  banner: string;
};

export type Post = {
  slug: string;
  frontmatter: FrontmatterType;
  content: string;
};

/**
 * Retrieves all `.mdx` post files from the posts directory.
 *
 * Reads the `POSTS_PATH` directory asynchronously, filters out only
 * MDX files, and returns their absolute file paths.
 *
 * @async
 * @function getAllPostFiles
 * @returns {Promise<string[]>} A promise resolving to an array of absolute file paths.
 */
async function getAllPostFiles(): Promise<string[]> {
  const files = await fsp.readdir(POSTS_PATH);

  return files
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

/**
 * Loads and returns all blog posts from disk.
 *
 * Reads all `.mdx` post files, parses each one into a `Post` object,
 * and returns the complete list. Order is determined by the filesystem.
 *
 * @async
 * @function getAllPosts
 * @returns {Promise<Post[]>} A promise resolving to an array of parsed posts.
 */
export async function getAllPosts(): Promise<Post[]> {
  const files = await getAllPostFiles();

  const posts = await Promise.all(
    files.map((filePath) => getPostFromFile(filePath)),
  );

  return posts;
}
