import Image from "next/image";
import { GithubLogoIcon } from "@phosphor-icons/react";

import { ArrowIconButtonV2 } from "@/components/button/ArrowButton";

type ViewerVariant = "modal" | "drawer";

export type ProjectContentViewerProps = {
  title: string;
  description: string;
  link: string;
  techTags: string[];
  variant: ViewerVariant;
};

function GithubLinkerButton({
  link,
  className,
}: {
  link: string;
  className?: string;
}) {
  return (
    <ArrowIconButtonV2
      className={`bg-secondary/90 text-inverse hover:bg-secondary transition duration-200 p-0 ${className}`}
      link={link}
    >
      <div className="flex flex-row font-heading items-center tracking-widest uppercase text-sm gap-1">
        <GithubLogoIcon size={22} />
        View in Github
      </div>
    </ArrowIconButtonV2>
  );
}

export default function ProjectContentViewer(props: ProjectContentViewerProps) {
  const isModal = props.variant === "modal";

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          fill
          priority
          alt="Some background picture"
          className="object-cover"
          src="/blog/first-post/dock.png"
        />
      </div>
      <div className="p-8 flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-3xl">{props.title}</h3>
          {isModal && <GithubLinkerButton link={props.link} />}
        </div>
        <p className="font-content">{props.description}</p>
        <div className="flex flex-row flex-wrap gap-2">
          {props.techTags.map((techTag, index) => {
            return (
              <h6 key={index} className="label">
                {techTag}
              </h6>
            );
          })}
        </div>
        {!isModal && <GithubLinkerButton link={props.link} />}
      </div>
    </div>
  );
}
