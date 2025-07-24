import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title> Home | My Next.js App</title>
        <meta
          name="description"
          content="This is the home page of my learning Next.js app."
        />
      </Head>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl text-blue-600 mt-8 mb-4">Hello Tailwind!</h1>
        <p className="text-gray-700">Welcome to my Next.js site</p>
      </div>
    </div>
  );
}
