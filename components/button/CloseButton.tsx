export type CloseButtonProps = {
  open: boolean;
  onToggle: () => void;
};

export default function CloseButton(props: CloseButtonProps) {
  return (
    <button
      aria-label="Toggle menu"
      className="md:hidden ml-auto relative w-8 h-8 flex items-center justify-center"
      onClick={() => props.onToggle()}
    >
      {/* Top line */}
      <span
        className={`
      absolute w-8 h-[2px] bg-foreground transition-all duration-500
      ${props.open ? "rotate-45 top-1/2" : "-translate-y-2"}
    `}
      />

      {/* Middle line */}
      <span
        className={`
      absolute w-8 h-[2px] bg-foreground transition-all duration-400
      ${props.open ? "opacity-0" : "opacity-100"}
    `}
      />

      {/* Bottom line */}
      <span
        className={`
      absolute w-8 h-[2px] bg-foreground transition-all duration-500
      ${props.open ? "-rotate-45 top-1/2" : "translate-y-2"}
    `}
      />
    </button>
  );
}
