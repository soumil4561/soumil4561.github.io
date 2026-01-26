import Image from "next/image";

export default function Home() {
  return (
    <section className="h-[calc(100svh-4rem)]" id="home">
      {/* Padding wrapper (accounts for navbar) */}
      <div
        className="
          h-full
          pt-16
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
        <div className="font-heading flex items-center justify-center text-2xl md:text-4xl text-center md:text-left">
          Hi, I am Soumil Singh
        </div>
      </div>
    </section>
  );
}
