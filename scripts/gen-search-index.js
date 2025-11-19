import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "content/blog/pages");
const OUTPUT_PATH = path.join(process.cwd(), "public/search-index.json");

function getAllFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);

    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath));
        } else if (filePath.endsWith(".mdx") || filePath.endsWith(".md")) {
            results.push(filePath);
        }
    }
    return results;
}

function buildSearchIndex() {
    console.log("Starting search-index generation...");

    const start = performance.now();

    const allFiles = getAllFiles(POSTS_PATH);
    let publishedCount = 0;
    let skippedCount = 0;

    const index = allFiles
        .map((file) => {
            const raw = fs.readFileSync(file, "utf-8");
            const { data } = matter(raw);

            if (!data.published) {
                skippedCount++;
                return null;
            }

            publishedCount++;
            return {
                slug: data.slug,
                title: data.title,
                date: data.date,
                tags: data.tags || [],
                description: data.description || "",
            };
        })
        .filter(Boolean);

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(index, null, 2));

    const end = performance.now();
    const durationMs = (end - start).toFixed(2);

    console.log(`
Search index generated successfully!
----------------------------------------
Total MD/MDX files found:   ${allFiles.length}
Published posts indexed:    ${publishedCount}
Draft/unpublished skipped:  ${skippedCount}
Output file:                public/search-index.json
Time taken:              ${durationMs} ms
----------------------------------------
`);
}

buildSearchIndex();
