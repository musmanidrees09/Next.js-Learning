import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [apiMessage, setApiMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-yellow-100">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl text-yellow-700 mb-4">Contact Page</h1>
        <p className="text-lg text-gray-800 mb-4">
          This is the Contact page. You can put your email, phone or a contact
          form here.
        </p>
        <Link href="/">
          <span className="text-yellow-700 underline">← Back to Home</span>
        </Link>

        <button
          className="bg-yellow-700 text-white px-4 py-2 rounded mt-4"
          onClick={async () => {
            const res = await fetch("/api/hello");
            const data = await res.json();
            setApiMessage(data.message);
          }}
        >
          Call API
        </button>

        {/* ✅ add here: */}
        {apiMessage && (
          <p className="mt-2 text-gray-700">Response: {apiMessage}</p>
        )}

        <form
          className="flex flex-col items-center gap-2 mt-4"
          onSubmit={async (e) => {
            e.preventDefault(); // stop page reload

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
              });
              const data = await res.json();
              setApiMessage(
                data.message +
                  " Name: " +
                  data.data.name +
                  ", Email: " +
                  data.data.email
              );
            } catch (error) {
              console.error("Fetch error:", error);
              setApiMessage("Something went wrong");
            }
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded w-64"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded w-64"
          />
          <button
            type="submit"
            className="bg-yellow-700 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>

        {apiMessage && <p className="mt-2 text-gray-700">{apiMessage}</p>}
      </div>
    </div>
  );
}
