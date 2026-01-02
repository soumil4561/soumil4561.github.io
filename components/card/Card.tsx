export type CardProps = {
  title: string;
  subtitle?: string;
  primaryLink: string;
  secondaryLink?: string | null;
  backgroundImage?: string | null;
  className?: string | "";
  onClickExecutor?: (() => void) | null;
};

export default function Card(props: CardProps) {
  return (
    <button
      className="w-full aspect-[4/3]
    bg-cover bg-center bg-no-repeat
    rounded-xs border border-border
    flex items-end cursor-pointer"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
      onClick={props.onClickExecutor ?? (() => {})}
    >
      <div className="mx-4 mb-2 border border-border z-40 w-full flex flex-row justify-between items-center p-2 bg-background-tertiary backdrop-blur-[6.8px]">
        <h2 className="font-heading text-2xl">{props.title}</h2>
        <h3 className="font-heading uppercase font-medium text-sm tracking-widest">
          {props.subtitle}
        </h3>
      </div>
    </button>
  );
}
