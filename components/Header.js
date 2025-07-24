import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="b-blue-600 text-white p-4 flex gap-4 justify-center ">
      <Image src="/next.svg" width={100} height={24} alt="Logo" />

      <nav className="flex gap-4 text-black underline">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact us</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
