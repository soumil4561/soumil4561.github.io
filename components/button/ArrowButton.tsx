"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
  EnvelopeIcon,
  KeyIcon,
  FilePdfIcon,
} from "@phosphor-icons/react";

export type ArrowIconButtonProps = {
  type: "mail" | "github" | "linkedin" | "pgp" | "resume";
  link: string;
  hidden?: boolean | false;
  className?: string;
  children?: React.ReactNode;
};

/**
 * @deprecated This component is deprecated. Please use the `ArrowIconButtonV2` instead.
 */
export default function ArrowIconButton(props: ArrowIconButtonProps) {
  const iconSize = 22;
  let logo = null;

  switch (props.type) {
    case "github":
      logo = <GithubLogoIcon size={iconSize} />;
      break;
    case "linkedin":
      logo = <LinkedinLogoIcon size={iconSize} />;
      break;
    case "mail":
      logo = <EnvelopeIcon size={iconSize} />;
      break;
    case "pgp":
      logo = <KeyIcon size={iconSize} />;
      break;
    case "resume":
      logo = <FilePdfIcon size={iconSize} />;
      break;
    default:
      break;
  }

  return (
    <Link
      className={`group flex flex-row p-4 border-1 justify-between items-center border-border 
      hover:border-border-hover bg-background-tertiary hover:bg-background-tertiary-hover duration-500 ${props.className}`}
      href={props.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex flex-row font-heading items-center tracking-widest uppercase text-sm gap-1">
        {logo}
        {props.type}
      </div>

      <ArrowRightIcon
        className="transition-transform duration-300 ease-in group-hover:-rotate-45"
        size={18}
      />
    </Link>
  );
}

export function ArrowIconButtonV2(props: ArrowIconButtonProps) {
  return (
    <Link
      className={`group flex flex-row p-4 border-1 justify-between items-center border-border 
      hover:border-border-hover bg-background-tertiary hover:bg-background-tertiary-hover duration-500 ${props.className}`}
      href={props.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
      <ArrowRightIcon
        className="transition-transform duration-300 ease-in group-hover:-rotate-45 ml-6"
        size={18}
      />
    </Link>
  );
}
