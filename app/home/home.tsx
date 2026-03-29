import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import ArrowScrollButton from "@/components/button/ArrowScrollButton";

export default function Home() {
  return (
    <section className="h-[100svh]" id="home">
      {/* // <section className="h-[calc(100svh-4rem)] xl:h-[calc(100svh-8rem)]"> */}
      <div
        className="
          h-full
          pt-16 lg:pt-0
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
            priority
            alt="idk... dont have that many photos...."
            className="object-cover rounded-xs"
            src="picture4.jpg"
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
              text="expore more"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
