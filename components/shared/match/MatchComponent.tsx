"use client"

import { GetAllMatchesAction } from '@/lib/actions/match.action';
import React, { useEffect, useState } from 'react'
import GetMatch from './GetMatch';

const MatchComponent = () => {
    const [AllMatches, setAllMatches] = useState<any>([]);
    useEffect(()=>{
        const getData = async()=>{
            const res = await GetAllMatchesAction();
            if(res.status == 200){
                console.log(res.data);
                
                setAllMatches(res.data);
            }else{
                console.log("Some error occured");
            }
        }
        getData();
    } , [])
  return (
    <div>
        <GetMatch data={AllMatches} />
    </div>
    

  )
}

export default MatchComponent