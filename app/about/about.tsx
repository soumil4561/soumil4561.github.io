import Image from "next/image";

import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-around" id="about">
      <div className="section-heading">About Me</div>
      <div className="section-heading-subtitle">A brief introduction</div>
      <div className="flex flex-col-reverse lg:flex-row items-stretch w-full gap-8 pt-4 lg:pt-0">
        {/* Text column */}
        <div className="w-full flex font-content justify-center whitespace-pre-line">
          {siteConfig.extendedDescription}
        </div>

        {/* Image column */}
        <div className="w-full h-auto max-w-full overflow-hidden rounded-xl">
          <Image
            priority
            alt="About me"
            src="/picture8.jpeg"
            width={1200}
            height={1600}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
