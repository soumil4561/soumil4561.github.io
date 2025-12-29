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
          className={`py-2 px-4 ml-4 tracking-wider text-[0.8125rem] ${className}`}
          text={label}
          onClickExecutor={handleClick}
        />
      );
    case "primary-btn":
      return (
        <PrimaryButton
          className={`py-2 px-4 ml-4 tracking-wider text-[0.8125rem] ${className}`}
          text={label}
          onClickExecutor={handleClick}
        />
      );

    case "label":
      return (
        <Link
          className={`
            uppercase relative flex items-center justify-center mx-1 my-2
            text-center tracking-wider font-light text-[0.8125rem]
            md:after:content-['']
            md:after:absolute md:after:left-0 md:after:-bottom-0.5
            md:after:h-[1px] md:after:w-full
            md:after:scale-x-0 md:after:origin-right
            md:after:bg-default/80
            md:after:transition-transform md:after:duration-400 md:after:ease-out
            md:hover:after:scale-x-100 md:hover:after:origin-left
            ${className} `}
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
