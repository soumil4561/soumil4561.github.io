import useEscapeKeyToClose from "@/hooks/useEscapeToClose";

export type DrawerProps = {
  direction: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  onClose: () => void;
  className: string;
};

const drawerVariants = {
  bottom: {
    position: "bottom-0 left-0 w-full",
    size: "max-h-[75vh]",
  },
  top: {
    position: "top-0 left-0 w-full",
    size: "max-h-[75vh]",
  },
  left: {
    position: "left-0 top-0 h-full",
    size: "w-[75vw] max-w-md",
  },
  right: {
    position: "right-0 top-0 h-full",
    size: "w-[75vw] max-w-md",
  },
};

export default function Drawer(props: DrawerProps) {
  const variant = drawerVariants[props.direction];

  useEscapeKeyToClose(props.onClose);

  return (
    <div className={`fixed inset-0 z-50 ${props.className}`}>
      {/* Backdrop */}
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/40"
        onClick={props.onClose}
      />

      {/* Drawer */}
      <div
        className={`
          absolute bg-background overflow-y-auto
          ${variant.position}
          ${variant.size}
        `}
      >
        {props.children}
      </div>
    </div>
  );
}
