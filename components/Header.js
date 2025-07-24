import Link from "next/link";

export default function Header() {
  <header className="b-blue-600 text-white p-4 flex gap-4 justify-center ">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact us</Link>
    <Link href="/blogs/first-post">Blog Example</Link>
  </header>;
}
