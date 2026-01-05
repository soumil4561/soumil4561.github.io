import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link className="font-content text-3xl font-normal mr-4" href="/">
      <Image alt="/hello" height={50} src="/logo.png" width={50} />
    </Link>
  );
}
