import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-green-100 ">
      <Header />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl text-green-700 mb-4">About Page</h1>
        <p className="text-lg text-gray-800 mb-4">This is the About page.</p>
        <Link href="/">
          <span className="text-green-700 underline">← Back to Home</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
