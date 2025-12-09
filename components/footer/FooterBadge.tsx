import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  FilePdfIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export type FooterBadgeProps = {
  type: "github" | "linkedin" | "resume" | "pgp";
  link: string;
  hidden: boolean;
};

export default function FooterBadge({ type, link, hidden }: FooterBadgeProps) {
  const iconSize = 22;

  let logo = null;

  switch (type) {
    case "github":
      logo = <GithubLogoIcon size={iconSize} />;
      break;
    case "linkedin":
      logo = <LinkedinLogoIcon size={iconSize} />;
      break;
    case "resume":
      logo = <FilePdfIcon size={iconSize} />;
      break;
    default:
      null;
  }

  return (
    <Link
      className={`tracking-widest ${hidden ? "hidden" : ""}`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex flex-row items-center gap-2 font-heading uppercase text-sm">
        <div className="flex items-center justify-center p-2 rounded-full border-1 border-border hover:border-border-hover bg-background-tertiary hover:bg-background-tertiary-hover duration-500">
          {logo}
        </div>
        {type}
      </div>
    </Link>
  );
}
