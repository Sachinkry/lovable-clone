import { prisma } from "@/lib/db";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className="">
      
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}