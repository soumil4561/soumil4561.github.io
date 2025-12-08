"use client";

import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";

import { DefaultButton } from "../button/Button";

import { siteConfig } from "@/config/site";

export type FooterBadgeProps = {
  type: "github" | "linkedin" | "resume" | "pgp";
  link: string;
};

function FooterBadge({ type, link }: FooterBadgeProps) {
  const iconSize = 22;

  let logo = null;

  switch (type) {
    case "github":
      logo = <GithubLogoIcon size={iconSize} />;
      break;
    case "linkedin":
      logo = <LinkedinLogoIcon size={iconSize} />;
      break;
  }

  return (
    <div className="flex flex-row items-center gap-2 font-heading uppercase text-sm">
      <div className="flex items-center justify-center p-2 rounded-full border-1 border-border bg-background-tertiary">
        {logo}
      </div>

      <Link
        className="tracking-widest"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {type}
      </Link>
    </div>
  );
}

export default function Footer() {
  const socialLinks = siteConfig.footer.socialLinks;

  return (
    <footer className="w-full flex items-center justify-center py-20 px-40 bg-background-tertiary mt-2">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="font-content flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h4 className="font-heading text-xl">Links</h4>
            <div className="my-4 flex flex-col gap-2">
              <FooterBadge link={socialLinks.github.link} type="github" />
              <FooterBadge link={socialLinks.linkedin.link} type="linkedin" />
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
        <div className="font-content flex flex-row w-full justify-between">
          © 2025 Soumil Singh — Built from scratch and always evolving.
          <DefaultButton
            disabled={true}
            text="to top"
            type="button"
            onClickExecutor={null}
          />
        </div>
      </div>
    </footer>
  );
}
