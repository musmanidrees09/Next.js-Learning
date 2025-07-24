import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-800 mb-4">Page not found</p>
      <Link href="/">
        <span className="text-blue-600 underline">← Back to Home</span>
      </Link>
    </div>
  );
}
