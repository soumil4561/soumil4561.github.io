import { PrimaryButton } from "@/components/button/Button";
import { siteConfig } from "@/config/site";
import ArrowIconButton from "@/components/button/ArrowButton";

export default function Contact() {
  return (
    <section className="section w-11/12 mx-auto" id="contact">
      <div className="flex flex-row justify-center items-stretch w-full gap-4">
        {/* <div className="hidden lg:flex flex-1">
          <div className="relative w-full">
            <Image
              alt="some photo"
              src="/phone.jpg"
              fill
              className="object-contain"
            />
          </div>
        </div> */}

        <div className="flex flex-col flex-1">
          <div className="border-1 border-border p-8 bg-background-tertiary">
            <h4 className="uppercase tracking-widest text-xs font-light">
              contact
            </h4>
            <h2 className="font-heading text-4xl my-2">
              Let&apos;s get in touch
            </h2>

            <form className="flex flex-col gap-4 mt-8 mb-4">
              <input
                className="bg-background-tertiary p-4 rounded-xs outline-0"
                placeholder="Name"
              />
              <input
                className="bg-background-tertiary p-4 rounded-xs outline-0"
                placeholder="Email"
              />
              <textarea
                className="bg-background-tertiary p-4 rounded-xs outline-0"
                placeholder="Message"
                rows={4}
              />
              <PrimaryButton
                className="font-semibold"
                text="Send Message"
                type="submit"
              />
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
            <ArrowIconButton link={siteConfig.links.mail} type="mail" />
            <ArrowIconButton link={siteConfig.links.linkedin} type="linkedin" />
            <ArrowIconButton link={siteConfig.links.github} type="github" />

            <div className="md:col-span-3 flex justify-center gap-4">
              <ArrowIconButton
                className="w-full"
                link={siteConfig.links.pgp}
                type="pgp"
              />
              <ArrowIconButton
                className="w-full"
                link={siteConfig.links.resume}
                type="resume"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
