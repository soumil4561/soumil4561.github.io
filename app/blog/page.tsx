import BlogMenu from "@/components/blog/BlogMenu";

export default async function BlogPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="h-16" />
      <main className="container mx-auto max-w-8xl px-6 flex-grow">
        <section className="section">
          <div className="page-heading">Blog</div>
          <div className="page-heading-subtitle">just because</div>
          <BlogMenu />
        </section>
      </main>
      <footer className="w-full flex items-center justify-center py-3 text-sm" />
    </div>
  );
}
