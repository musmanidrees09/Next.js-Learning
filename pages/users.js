import Link from "next/link";

export default function UsersPage({ users }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded hover:bg-gray-100">
            <Link href={`/users/${user.id}`}>
              {user.name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// This runs at build time to fetch users
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users },
  };
}
