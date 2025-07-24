import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col">
      <Header />

      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-3xl text-purple-700 mb-4">Blog Post</h1>
        <p className="text-lg text-gray-800 mb-4">
          You are reading the post: <strong>{slug}</strong>
        </p>
      </div>

      <Footer />
    </div>
  );
}
