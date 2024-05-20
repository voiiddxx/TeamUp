import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const MainNavBar = () => {
  return (
    <div className="h-20 w-full bg-transparent flex justify-center items-center border-b">
      <div className="h-full w-full flex justify-between px-20">
        {/* left div */}
        <div className="h-full flex items-center">
          <p className="text-xl font-medium text-green-300 italic">TeamUp</p>
        </div>
        {/* mid div */}
        <div className="flex items-center gap-10 text-zinc-200">
          <p>Home</p>
          <p>Matches</p>
          <p>About</p>
        </div>
        {/* right div */}

        <div className=" flex items-center gap-4">
          <Button className="bg-white text-zinc-900" size={"lg"}>
            Logout
          </Button>
         <Link href={`/dashboard`} >
         
         </Link>
         <SignedIn >
          <UserButton  afterSignOutUrl="/" />
         </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
