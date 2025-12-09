"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

import { DefaultButton, PrimaryButton } from "../button/Button";

export type NavItemParams = {
  label: string;
  href: string;
  type: string;
  hidden: boolean;
};

type NavItemProps = NavItemParams & {
  className?: string;
  navMenuStateUpdater?: Dispatch<SetStateAction<boolean>>;
};

export default function NavItem({
  label,
  href,
  type,
  className,
  navMenuStateUpdater,
}: NavItemProps) {
  const router = useRouter();

  const handleClick = () => {
    navMenuStateUpdater?.(false);
    router.push(href);
  };

  switch (type) {
    case "default-btn":
      return (
        <DefaultButton
          className={`py-0 mx-4 tracking-wider text-sm ${className}`}
          text={label}
          onClickExecutor={handleClick}
        />
      );
    case "primary-btn":
      return (
        <PrimaryButton
          className={`py-0 px-4 mx-4 tracking-wider text-sm ${className}`}
          text={label}
          onClickExecutor={handleClick}
        />
      );

    case "label":
      return (
        <Link
          className={`uppercase 
            relative inline-block
             md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0
             md:after:h-0.5 md:after:w-full
             md:after:scale-x-0 md:after:origin-right
             md:after:bg-default/80
             md:after:transition-transform md:after:duration-500 md:after:ease-out
             md:hover:after:scale-x-100 md:hover:after:origin-left
            mx-4 py-2 text-center tracking-wider font-light text-sm ${className}`}
          href={href}
          onClick={() => navMenuStateUpdater?.(false)}
        >
          {label}
        </Link>
      );

    default:
      return null;
  }
}
