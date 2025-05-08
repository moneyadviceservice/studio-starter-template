import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header id="header" className="p-4">
    <Link href="/en">
      <Image src="/logo-en-desktop.svg" alt="Logo" width={100} height={50} />
    </Link>
  </header>
);
