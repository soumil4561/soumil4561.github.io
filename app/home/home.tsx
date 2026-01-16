import Image from "next/image";

export default function Home() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col  md:flex-row items-center px-6"
      id="home"
    >
      {/* Image (top on mobile, left on desktop) */}
      <div className=" relative w-full md:w-1/2 aspect-[4/5] max-h-[80svh] md:mt-8">
        <Image
          fill
          priority
          alt="idk... dont have that many photos...."
          className="object-cover rounded-lg"
          src="picture1.jpg"
        />
      </div>

      {/* Text (bottom on mobile, right on desktop) */}
      <div className="font-heading w-full md:w-1/2 h-1/2 md:h-full bg-background-500 flex justify-center items-center text-2xl md:text-4xl">
        Hi, I am Soumil Singh
      </div>
    </section>
  );
}
