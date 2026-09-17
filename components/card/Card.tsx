export type CardProps = {
  title: string;
  subtitle?: string;
  tag?: string;
  backgroundImage?: string | null;
  className?: string | "";
  onClickExecutor?: (() => void) | null;
};

export default function Card(props: CardProps) {
  return (
    <button
      className={`w-full aspect-[4/3]
    bg-cover bg-center bg-no-repeat
    rounded-xs border border-border
    flex flex-col justify-between cursor-pointer ${props.className}`}
      data-testid="card"
      style={{
        backgroundImage: props.backgroundImage
          ? `url(${props.backgroundImage})`
          : undefined,
      }}
      onClick={props.onClickExecutor ?? (() => {})}
    >
      <div className="mt-2 mx-2 flex flex-row-reverse">
        <h4
          className={`font-heading uppercase font-medium text-xs tracking-widest border border-border rounded-xs z-40 p-2
                  bg-background-tertiary backdrop-blur-[6.8px] w-fit
                ${!props.tag ? "invisible" : ""}`}
        >
          {props.tag}
        </h4>
      </div>
      <div className="mb-2 mx-2 flex flex-row">
        <div className="flex flex-row border border-border z-40 w-full justify-between items-center p-2 bg-background-tertiary backdrop-blur-[6.8px]">
          <h2 className="font-heading text-2xl">{props.title}</h2>
          <h3 className="font-heading uppercase font-medium text-sm tracking-widest">
            {props.subtitle}
          </h3>
        </div>
      </div>
    </button>
  );
}
