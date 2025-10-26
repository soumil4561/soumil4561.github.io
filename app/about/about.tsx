import Image from "next/image";

import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section className="flex flex-col items-center pt-16 justify-around">
      <div className="page-heading mb-8">About Me</div>
      <div className="flex flex-col-reverse lg:flex-row items-stretch w-full max-w-6xl gap-8 pt-4 lg:pt-0">
        {/* Text column */}
        <div className="w-full lg:w-1/2 flex font-content justify-center whitespace-pre-line">
          {siteConfig.extendedDescription}
        </div>

        {/* Image column */}
        <div className="w-full lg:w-1/2 min-h-[300px] flex">
          <Image
            priority
            alt="idk... another photo of mine ig"
            className="object-cover w-full h-full"
            height={1000}
            src="picture2.jpg"
            width={1000}
          />
        </div>
      </div>
    </section>
  );
}
