import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";


export default async function Home() {
  
  const user = await currentUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero clerkId={user?.id} />
    </main>
  );
}
