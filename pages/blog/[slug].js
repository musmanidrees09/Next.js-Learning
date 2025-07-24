import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen bg-blue-100">
      <main className="p-8">
        <h1 className="text-2xl text-blue-800 mb-4">
          Blog Post: {slug ? slug : "Loading..."}
        </h1>
        <p>
          {slug
            ? `This is a dynamic page for the post: ${slug}`
            : "Loading post..."}
        </p>
      </main>
    </div>
  );
}
