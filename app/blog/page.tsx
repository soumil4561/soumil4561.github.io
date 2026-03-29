"use client";

import { Reveal } from "@/components/animations/reveal";
import BlogMenu from "@/components/blog/BlogMenu";

export default function BlogPage() {
  return (
    <section className="section lg:pt-20" id="blog-menu">
      <Reveal>
        <div className="section-heading">Blog</div>
        <div className="section-heading-subtitle">just because</div>
      </Reveal>
      <BlogMenu />
    </section>
  );
}
