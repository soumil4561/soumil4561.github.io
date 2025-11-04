"use client";

import Home from "@/app/home/home";
import About from "@/app/about/about";
import Experience from "@/app/experience/experience";

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="h-16" />
      <main className="container mx-auto max-w-8xl px-6 flex-grow">
        <Home />
        <About />
        <Experience />
      </main>
      <footer className="w-full flex items-center justify-center py-3" />
    </div>
  );
}
