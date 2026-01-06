export type FrontMatterDisplayCardProps = {
  title: string;
  value: string;
};

export default function FrontmatterDisplayCard({
  title,
  value,
}: FrontMatterDisplayCardProps) {
  return (
    <div className="box flex flex-row justify-between md:flex-col md:justify-center md:items-center lg:flex-row lg:justify-between font-heading uppercase tracking-widest text-sm">
      <span className="font-light">{title}</span>{" "}
      <span className="font-normal">{value}</span>
    </div>
  );
}
