import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Paths
const POSTS_PATH = path.join(process.cwd(), "content/blog/pages");
const OUTPUT_FILE = "public/blog-index.json";
const OUT_PATH = path.join(process.cwd(), OUTPUT_FILE);

// Recursively find markdown files
function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath));
    } else if (filePath.endsWith(".mdx") || filePath.endsWith(".md")) {
      results.push(filePath);
    }
  }

  return results;
}

export function buildIndexes() {
  console.log("Starting blog index generation...");
  const startTime = performance.now();

  const allFiles = getAllFiles(POSTS_PATH);

  let publishedCount = 0;
  let skippedCount = 0;

  const tagCounts = {};
  const yearCounts = {};

  const posts = allFiles
    .map((file) => {
      const raw = fs.readFileSync(file, "utf-8");
      const { data: fm } = matter(raw);

      if (!fm.published) {
        skippedCount++;
        return null;
      }

      publishedCount++;

      // Tag counts
      (fm.tags || []).forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });

      // Year counts
      const year = new Date(fm.date).getFullYear().toString();
      yearCounts[year] = (yearCounts[year] || 0) + 1;

      return {
        slug: fm.slug,
        title: fm.title,
        date: fm.date,
        tags: fm.tags || [],
        description: fm.description || "",
        cover: fm.cover || ""
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

  const fullOutput = {
    meta: {
      totalPosts: posts.length,
      generatedAt: new Date().toISOString(),
      tags: tagCounts,
      years: yearCounts
    },
    posts
  };

  // Write file
  fs.writeFileSync(OUT_PATH, JSON.stringify(fullOutput, null, 2));

  const endTime = performance.now();
  const durationMs = (endTime - startTime).toFixed(2);

  const fileSizeKB = (fs.statSync(OUT_PATH).size / 1024).toFixed(2);

  console.log(`
Blog Index Generation Output:
-----------------------------------------
Files scanned:          ${allFiles.length}
Published posts:        ${publishedCount}
Skipped (drafts):       ${skippedCount}

Output file:            ${OUTPUT_FILE}
File size:              ${fileSizeKB} KB
Time taken:             ${durationMs} ms
-----------------------------------------
`);
}

buildIndexes();
