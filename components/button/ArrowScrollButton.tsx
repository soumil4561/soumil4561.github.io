"use client";

import { ArrowUpIcon, ArrowDownIcon } from "@phosphor-icons/react";

type ScrollTarget = "top" | { id: string };

export type ArrowScrollButtonProps = {
  text: string;
  target: ScrollTarget;
  iconToTextRelativeDirection?: "left" | "right";
  className?: string;
};

const ICON_SIZE = 20;

export default function ArrowScrollButton({
  text,
  target,
  iconToTextRelativeDirection = "left",
  className = "",
}: ArrowScrollButtonProps) {
  const handleClick = () => {
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });

      return;
    }

    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth" });
  };

  const icon =
    target === "top" ? (
      <ArrowUpIcon size={ICON_SIZE} />
    ) : (
      <ArrowDownIcon size={ICON_SIZE} />
    );

  const iconNode = (
    <div className="flex items-center justify-center p-2 rounded-full border border-border bg-background-tertiary hover:bg-background-tertiary-hover hover:border-border-hover duration-500">
      {icon}
    </div>
  );

  return (
    <button
      className={`flex items-center font-heading uppercase gap-2 text-sm tracking-widest font-normal ${className}`}
      onClick={handleClick}
    >
      {iconToTextRelativeDirection === "left" ? (
        <>
          {iconNode}
          {text}
        </>
      ) : (
        <>
          {text}
          {iconNode}
        </>
      )}
    </button>
  );
}
