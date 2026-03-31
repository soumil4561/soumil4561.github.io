import { useEffect } from "react";

export type TooltipProps = {
  children?: React.ReactNode;
  isVisible: boolean;
  onDismiss: () => void;
};

export default function Tooltip(props: TooltipProps) {
  useEffect(() => {
    if (!props.isVisible) return;

    function dismiss() {
      props.onDismiss();
    }

    window.addEventListener("mousedown", dismiss);
    window.addEventListener("keydown", dismiss);
    window.addEventListener("blur", dismiss);

    return () => {
      window.removeEventListener("mousedown", dismiss);
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("blur", dismiss);
    };
  }, [props.isVisible, props.onDismiss]);

  if (!props.isVisible) {
    return null;
  }

  return (
    <div
      className="absolute border-border border-1 rounded-xl z-10 bg-background-secondary p-4 text-center text-sm whitespace-nowrap"
      data-testid="tooltip"
    >
      {props.children}
    </div>
  );
}
