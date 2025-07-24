import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center ">
        {/* <h1 className="text-4xl text-blue-600 mt-16">Hello Tailwind!</h1> */}

        <h1 className="text-4xl text-blue-600 mt-8 mb-4">
          Welcome to Next.js + Tailwind!
        </h1>
        <p className="text-lg text-gray-700">This is your home page.</p>
        <Link href="about">
          <span className="text-blue-500 underline">Go to About page</span>
        </Link>
        <Link href="/contact">
          <span className="text-blue-500 underline mt-2">
            Go to Contact page
          </span>
        </Link>
        <Link href="/blogs/first-post">
          <span className="text-blue-400 underline mb-4">Blog Example</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
