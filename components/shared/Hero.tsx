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
    <>
    

    <div className='bg-black min-w-full relative'>
        <iframe className=' min-h-screen min-w-full bottom-0' src="https://player.vimeo.com/video/923419451?api=1&background=1"  >
        </iframe>
        <div className='absolute top-0 align-middle pt-96 pl-72 text-slate-200 justify-center text-center'>

            <p className='text-8xl font-extrabold mt-10'>THE BEST STORIES<br></br> DESERVE TO BE TOLD</p>
            <div className='mt-4' >
        <Link href={`/dashboard`} >
     <Button className='text-xl'>Go to dashboard</Button>
     </Link>
  

    </div>
        </div>
        </div>

        <div className='fixed mt-5'>
        <header>
        <nav>
            
            <ul className="flex gap-x-64">
                <li><a className='text-white font-bold text-xl' href="#">Work</a></li>
                <li><a className='text-white font-bold text-xl' href="#">Services</a></li>

                <div className="text-white font-extrabold text-3xl">TEAMUP</div>

                <li><a className='text-white font-bold text-xl' href="#">About</a></li>
                <li><a className='text-white font-bold text-xl' href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
        </div>



        <div className='bg-black w-full h-auto'>

            





            

            <div className="flex justify-center w-full text-center align-middle mt-20">
         <div className="">
            <div className="flex w-auto justify-center">
               <span className="text-gray-500 text-xl font-bold">Agency</span>
               <p className="text-white text-3xl font-bold">Marketing &amp; Audiovisual</p>
            </div>
            <div className="flex gap-x-2 w-auto justify-center">
               <span className="text-gray-500 text-xl font-bold">Services</span>
                              <p className="text-white text-3xl font-bold"> Digital Marketing Creativity Creativity <br></br> Audiovisual Graphic Design Creativity </p>
                              <br></br>
                              
            </div>
         </div>
      </div>


            <div className=' justify-center flex w-full mt-20'>
            <img alt="" className="w-72 rounded"  src="https://twicemediahouse.com/media/pages/home/7ca13bbcea-1710277491/dsc08365-720x-q72.webp" data-src="https://twicemediahouse.com/media/pages/home/7ca13bbcea-1710277491/dsc08365-1080x-q72.jpg" data-srcset="https://twicemediahouse.com/media/pages/home/7ca13bbcea-1710277491/dsc08365-400x-q72.jpg 400w, https://twicemediahouse.com/media/pages/home/7ca13bbcea-1710277491/dsc08365-540x-q72.jpg 540w, https://twicemediahouse.com/media/pages/home/7ca13bbcea-1710277491/dsc08365-720x-q72.jpg 720w, https://twicemediahouse.com/media/pages/home/7ca13bbcea-1710277491/dsc08365-1080x-q72.jpg 1080w" width="1080" height="1440" data-sizes="(min-width: 1024px) 33vw, (min-width: 720px) 50vw, 100w"/>

            <div>
                
            <p className='text-gray-500 ml-8 mt-36'>Our talented team is capable of tackling challenges<br></br> of all kinds</p>

             <Button className='ml-8 mt-2' >Services</Button>
            </div>
          
            </div>

            




        <div className='mt-16'>
        <div className='flex justify-center'>
                    <p className='text-white text-7xl font-extrabold'>JUST BELIEVE OUR<br></br> CLIENTS<span className='text-yellow-300'>"</span> WORDS</p>
                </div>
        </div>

        <div className='mt-8 ml-16'>
                
        <marquee width="95%" direction="left" height="100px" >
            <span className='flex gap-x-20'>
            <p className='text-white text-xl'>Cricket</p>
            <p className='text-white text-xl'>Basketball</p>
            <p className='text-white text-xl'>Vollyball</p>
            <p className='text-white text-xl'>Chess</p>
            <p className='text-white text-xl'>Pubg</p>
            <p className='text-white text-xl'>Hockey</p>
            <p className='text-white text-xl'>Cricket</p>
            <p className='text-white text-xl'>Basketball</p></span>
        </marquee>
            </div>

            <div className='w-full h-px bg-gray-400 '></div>
            <div className="flex gap-x-40 mt-4 ml-24 mb-8">
                     <div class="col-logo">
                        <div className="">
                           <p className='text-white text-5xl font-bold'>You only live once, so think</p>
                        </div>
                        <div className="mt-4">
                            <p className='text-white text-8xl font-extrabold'>TEAMUP</p>
                        </div>
                     </div>
                     <div class="col col-text styled-col">
                        <div className="w-96">
                           <p className='text-gray-400'>We’re a marketing agency and audiovisual production company dedicated to offering all-encompassing services  to help you stand out in the digital world.</p>                        </div>

                           <div className='mt-4'>
                            <Button>Contact us
                                </Button></div>   
                         
                     </div>
                  </div>









        </div></>
  )
}

export default Hero