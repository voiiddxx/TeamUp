import SecondFold from "@/components/SecondFold";
import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";


export default async function Home() {
  
  const user = await currentUser();
  return (
    <div className="h-screen w-full bg-red-400" >
      <Hero clerkId={user?.id} />
      <SecondFold/>
    </div>
  );
}
