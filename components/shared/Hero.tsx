"use client";

import { gerUserasPerClerkId } from "@/lib/actions/user.action";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { lusitiana } from "../ui/font";

type HeroPagePros = {
  clerkId: any;
};

const Hero = ({ clerkId }: HeroPagePros) => {
  useEffect(() => {
    const getUser = async () => {
      const res = await gerUserasPerClerkId(clerkId);
      if (res.status == 200) {
        const token = localStorage.setItem("x-auth-user", res.data.userid);
      } else {
        alert("You Can't access this page");
      }
    };
    getUser();
  }, []);
  return (
    <>
      <div className="w-full">
        <iframe
          className="h-screen bg-black w-[120%] right-30 absolute -left-52"
          src="https://player.vimeo.com/video/923419451?api=1&background=1"
        >
        </iframe>
      </div>
    </>
  );
};

export default Hero;
