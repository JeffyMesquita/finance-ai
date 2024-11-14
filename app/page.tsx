import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <main className="flex h-full w-full items-center justify-center">
      <UserButton showName />
    </main>
  );
}
