"use client";

import { useEffect, useState } from "react";

import { PrimaryButton, DefaultButton } from "@/components/button/Button";
import BlogPreview from "@/components/blog/BlogPreview";

export type BlogItemMetadata = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  published: boolean;
  cover: string;
};

export type IndexMetadata = {
  totalPosts: string;
  generatedAt: string;
  tag: {
    string: number;
  };
  years: {
    number: number;
  };
};

export type BlogIndex = {
  meta: IndexMetadata;
  posts: BlogItemMetadata[];
};

async function fetchBlogListings(): Promise<BlogIndex> {
  const res = await fetch("/blog-index.json");
  const data = await res.json();

  return data;
}

export default function BlogMenu() {
  const [index, setIndex] = useState<BlogIndex | null>(null);
  const [visible, setVisible] = useState(6); // initial number of posts

  useEffect(() => {
    fetchBlogListings().then(setIndex);
  }, []);

  if (!index) return <div>Loading...</div>;

  const { posts } = index;

  const currentPosts = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {currentPosts.map((post, i) => (
          <BlogPreview key={i} {...post} />
        ))}
      </div>
      {hasMore && (
        <DefaultButton
          className="mt-4"
          text="load more"
          onClickExecutor={() => setVisible((v) => v + 6)}
        />
      )}
    </div>
  );
}
