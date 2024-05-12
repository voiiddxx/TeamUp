"use client"

import { gerUserasPerClerkId } from '@/lib/actions/user.action'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'

    type HeroPagePros = {
        clerkId:any
    }
const Hero = ({clerkId}:HeroPagePros) => {

    useEffect(()=>{
        const getUser = async ()=>{
            const res = await gerUserasPerClerkId(clerkId);
            if(res.status == 200){
                const token = localStorage.setItem("x-auth-user" , res.data.userid);
            }else{
                alert("You Can't access this page");
            }
        }
    getUser();
    } , [])
  return (
    <div className='min-h-screen w-full flex justify-center items-center flex-col' >
        <h1>This is hero page</h1>
        <Link href={`/dashboard`} >
     <Button>Go to dashboard</Button>
     </Link>

    </div>
  )
}

export default Hero