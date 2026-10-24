import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import ArrowScrollButton from "@/components/button/ArrowScrollButton";

export default function Home() {
  return (
    <section className="h-[100svh]" id="home">
      <div
        className="
          h-full
          pt-24 md:pt-16 lg:pt-0
          grid
          grid-rows-[3fr_2fr]
          md:grid-cols-2
          md:grid-rows-1
          items-center
        "
      >
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            fill
            alt="Home Page"
            className="object-cover rounded-xs"
            priority={true}
            src="/picture4.jpg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <Reveal>
          <div className="flex flex-col justify-center items-center px-8 md:px-16">
            <h1 className="text-2xl md:text-6xl font-normal font-heading">
              Hi, I’m Soumil Singh
            </h1>
            <ArrowScrollButton
              className="pt-4 items-center"
              iconToTextRelativeDirection="left"
              target={{ id: "experience" }}
              text="explore more"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
