"use client";
import Link from "next/link";

import { DefaultButton, PrimaryButton } from "../button/Button";

export type NavItemParams = {
  label: string;
  href: string;
  type: string;
  hidden: boolean;
};

type NavItemProps = NavItemParams & {
  className?: string;
};

export default function NavItem({
  label,
  href,
  type,
  className,
}: NavItemProps) {
  switch (type) {
    case "default-btn":
      return (
        <DefaultButton
          className={`py-0 mx-4 tracking-wider text-sm ${className}`}
          text={label}
          onClickExecutor={() => {
            window.location.href = href;
          }}
        />
      );
    case "primary-btn":
      return (
        <PrimaryButton
          className={`py-0 px-4 mx-4 tracking-wider text-sm ${className}`}
          text={label}
          onClickExecutor={() => {
            window.location.href = href;
          }}
        />
      );

    case "label":
      return (
        <Link
          className={`uppercase hover:underline mx-4 py-4 text-center tracking-wider text-sm ${className}`}
          href={href}
        >
          {label}
        </Link>
      );

    default:
      return null;
  }
}
