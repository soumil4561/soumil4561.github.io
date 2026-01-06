"use client";

import type { SerializeResult } from "next-mdx-remote-client/serialize";

import { MDXClient } from "next-mdx-remote-client";
import { notFound } from "next/navigation";

export default function MDXRenderer({
  mdxSource,
}: {
  mdxSource: SerializeResult;
}) {
  if ("error" in mdxSource) {
    notFound();
  }

  return (
    <article
      className="prose dark:prose-invert max-w-none my-4"
      id="blog-content-start"
    >
      <MDXClient {...mdxSource} />
    </article>
  );
}
