"use client";

import { gerUserasPerClerkId } from "@/lib/actions/user.action";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { lusitiana } from "../ui/font";
import MainNavBar from "./navbars/MainNavBar";
import { ChevronRight } from "lucide-react";

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
      <div className="h-screen w-full bg-stone-950 flex items-center justify-center" >
        <video className="h-full w-full absolute object-cover flex items-center justify-center brightness-[25%]" playsInline loop muted  src="https://assets-global.website-files.com/64e9425e335d3c7bcc2177c0%2F6657abbbb3e4dac40a4a6d33_IMG_0047%20%281%29-transcode.mp4" autoPlay >
          <h1>This is the home screen</h1>
        </video>

        <div className="h-screen w-full flex flex-col  z-10" >
          <MainNavBar/>
        <div className="h-full w-full flex items-center justify-center flex-col" >
        <h1 className="text-8xl tracking-wide italic uppercase text-white font-bold text-center" >
        Compete With Best  <br /> Now on <span className="text-red-500" >TeamUp</span>
      </h1>
      <div className="w-full flex justify-center items-center gap-2" >
      <Button className="bg-transparent border border-white tracking-wide  text-lg flex hover:bg-transparent hover:scale-105 transition-all">Go to the Dashboard</Button>
      <Button className="bg-red-500 text-lg tracking-wide flex items-center justify-center group hover:bg-red-500
       " >Register Now <ChevronRight className="text-white group-hover:translate-x-1 transition-all" strokeWidth={1.5} size={20} /> </Button>
      </div>


      {/* scroll animation which loops */}
      <div className="flex gap-12 animate-pulse  text-white mt-20" >
        <h1>Cricket</h1>
        <h1>Football</h1>
        <h1>Basketball</h1>
        <h1>Volleyball</h1>
        <h1>KhoKho</h1>
        <h1>Baseball</h1>
        <h1>BasketBall</h1>
        <h1>Rugby</h1>
        <h1>Cricket</h1>
      </div>
      {/* scroll animation which loops end */}
        </div>
        </div>

      </div>
    </>
  );
};

export default Hero;


{/* <Link href={`/dashboard`}  ><Button>Go to dashboard</Button></Link> */}