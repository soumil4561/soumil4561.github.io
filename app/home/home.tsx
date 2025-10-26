import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex flex-col md:flex-row h-[calc(100vh-4rem)] pb-4">
      {/* Image (top on mobile, left on desktop) */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
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
