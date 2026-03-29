"use client";
import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import FrontmatterDisplayCard from "@/components/blog/FrontMatterDisplayCard";
import ArrowScrollButton from "@/components/button/ArrowScrollButton";
import { FrontmatterType } from "@/lib/blog/posts";

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

export function ShowBlogInfo(frontmatter: FrontmatterType) {
  return (
    <Reveal className="w-full flex flex-col justify-center items-center">
      <div className="section-heading mb-2">{frontmatter.title}</div>
      <div className="font-content font-light md:text-[1.25rem] text-center">
        {frontmatter.description}
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
          value={formatDateWithOrdinal(new Date(frontmatter.date))}
        />
        <FrontmatterDisplayCard title="category" value={frontmatter.tags[0]} />
        <FrontmatterDisplayCard
          title="reading Time"
          value={frontmatter.readingTime}
        />
      </div>
      <div className="relative w-full aspect-[16/9] border-1 border-border my-2">
        <Image
          fill
          priority
          alt={frontmatter.title}
          className="object-cover "
          src={frontmatter.banner}
        />
      </div>
    </Reveal>
  );
}
