"use client"

import { GetUserTeamAction } from '@/lib/actions/team.action'
import React, { useEffect, useState } from 'react'

  

const MyMatches = () => {
    const [Matches, setMatches] = useState<any>([])
    
    useEffect(()=>{
        const fetchMyMatch = async()=>{
        // const res = await GetUserTeamAction()       
        }
    } , [])
  return (
    <div>
        <h1>this is my matches componet.tsx file</h1>
    </div>
  )
}

export default MyMatches