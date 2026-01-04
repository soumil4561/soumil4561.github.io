"use client";

import { ArrowUpIcon } from "@phosphor-icons/react";
import Link from "next/link";

import FooterBadge from "./FooterBadge";

import { siteConfig } from "@/config/site";

export default function Footer() {
  const socialLinks = siteConfig.footer.socialLinks;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex items-center justify-center p-10 md:py-20 md:px-40 bg-background-tertiary mt-4">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="font-content flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h4 className="font-heading text-xl">Links</h4>
            <div className="my-4 flex flex-col gap-2">
              <FooterBadge
                hidden={socialLinks.github.hidden}
                link={socialLinks.github.link}
                type="github"
              />
              <FooterBadge
                hidden={socialLinks.linkedin.hidden}
                link={socialLinks.linkedin.link}
                type="linkedin"
              />
              <FooterBadge
                hidden={socialLinks.resume.hidden}
                link={socialLinks.resume.link}
                type="resume"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-heading text-xl">Pages</h4>
            <div className="my-4 flex flex-col gap-2">
              {siteConfig.footer.pages.map((page, index) => {
                return (
                  <Link
                    key={index}
                    className="font-heading tracking-widest uppercase text-sm"
                    href={page.href}
                  >
                    {page.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="font-content flex flex-col gap-2 md:gap-0 md:flex-row text-center w-full justify-between items-center mt-5">
          © {year} Soumil Singh — Built from scratch and always evolving.
          <button
            className="flex flex-row items-center justify-content font-heading uppercase  gap-2 text-sm tracking-widest font-normal"
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            to top
            <div className="flex items-center justify-center p-2 rounded-full border-1 border-border bg-background-tertiary hover:bg-background-tertiary-hover hover:border-border-hover duration-500">
              <ArrowUpIcon size={20} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
