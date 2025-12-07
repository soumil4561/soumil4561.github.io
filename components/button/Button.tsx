type ButtonParams = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  text: string;
  onClickExecutor?: (() => void) | null;
  className?: string; // allow variants to inject their styles
};

function BaseButton({
  type = "button",
  disabled = false,
  text,
  onClickExecutor = null,
  className = "",
}: ButtonParams) {
  return (
    <button
      className={`uppercase p-4 rounded-sm tracking-wider border-2 border-border ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClickExecutor ?? (() => {})}
    >
      {text}
    </button>
  );
}

export function PrimaryButton(props: ButtonParams) {
  return (
    <BaseButton
      {...props}
      className={`
        bg-secondary/90 text-inverse 
        hover:bg-secondary 
        transition duration-200 
        ${props.className ?? ""}
      `}
    />
  );
}

export function DefaultButton(props: ButtonParams) {
  return (
    <BaseButton
      {...props}
      className={`
        bg-background-secondary/80 
        hover:bg-background-secondary 
        transition duration-200 
        ${props.className ?? ""}
      `}
    />
  );
}
