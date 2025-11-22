import Image from "next/image";

import { BlogItemMetadata } from "@/components/blog/BlogMenu";

export default function BlogPreview(post: BlogItemMetadata) {
  return (
    <div
      className="flex flex-col border-2  hover:border-[3] border-border mx-4 my-2 md:my-4 py-8 px-8 
    bg-background-secondary/80 hover:bg-background-secondary"
    >
      <Image
        alt="/blog/first-post/dock.png" //should have a default fallback here
        className="mb-4"
        height={1000}
        src="/blog/first-post/dock.png" //autofixable when frontmatter will ship it
        width={1000}
      />
      <h6 className="uppercase mb-4 font-light">{post.date}</h6>
      <h1 className="font-heading text-2xl font-normal">{post.title}</h1>
      <p className="font-content font-light">{post.description}</p>
    </div>
  );
}
