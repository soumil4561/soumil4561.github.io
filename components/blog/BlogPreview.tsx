import Image from "next/image";
import Link from "next/link";

import { BlogItemMetadata } from "@/components/blog/BlogMenu";

export default function BlogPreview(post: BlogItemMetadata) {
  return (
    <Link
      className="
        flex flex-col 
        border-2 border-border 
        my-2 md:my-4 
        py-8 px-8 
        bg-background-tertiary
        
        transition-all duration-400 ease-in
        hover:bg-background-tertiary-hover
        hover:border-border-hover
        hover:shadow-lg 
      "
      href={`/blog/${post.slug}`}
    >
      <Image
        alt="/blog/first-post/dock.png" //should have a default fallback here
        className="mb-4 object-cover"
        height={1000}
        src="/blog/first-post/dock.png" //autofixable when frontmatter will ship it
        width={1000}
      />

      <h6 className="uppercase mb-4 font-light opacity-70">{post.date}</h6>

      <h1 className="font-heading text-2xl font-normal mb-2">{post.title}</h1>

      <p className="font-content font-light opacity-90">{post.description}</p>
    </Link>
  );
}
