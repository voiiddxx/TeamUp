"use client"
import { GetUserTeamAction } from '@/lib/actions/team.action'
import React, { useEffect } from 'react'


const MyTeam = () => {

    useEffect(()=>{
        const GetMyTeam = async ()=>{
          const user = localStorage.getItem("x-auth-user");
          const res = await GetUserTeamAction(+user!);
          console.log("This is value of res: " , res);
          
        }
        GetMyTeam();
    })
  return (
    <div className='flex justify-center items-center flex-col' >
        <h1>This is my Teams</h1>

        <div>

        </div>
        
    </div>
  )
}

export default MyTeam