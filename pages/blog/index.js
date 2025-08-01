import Link from "next/link";
import Head from "next/head";

export default function Blog() {
  // example posts
  const posts = [
    { title: "My First Post", slug: "first-post" },
    { title: "Learning Next.js", slug: "learning-nextjs" },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <Head>
        <title>Blog | My Next.js App</title>
        <meta
          name="description"
          content="Read our latest posts and articles."
        />
      </Head>

      <main className="p-8">
        <h1 className="text-3xl mb-4 text-blue-800">Blog</h1>
        <ul className="list-disc pl-6">
          {posts.map((post) => (
            <li key={post.slug} className="mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
