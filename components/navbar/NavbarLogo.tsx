import Image from "next/image";

export default function NavbarLogo() {
  return (
    <div className="font-content text-3xl font-normal mr-4">
      <Image alt="/hello" height={50} src="/logo.png" width={50} />
    </div>
  );
}
