import { Button } from '@/components/ui/button'
import { Dices, Dumbbell, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const DashboardnavBar = () => {

    const placeHolder = <div className='flex gap-2 text-white' >
        <Search/>
        <p>Search your matches </p>

    </div>
  return (
    <div className='h-24 border-b border-zinc-900 w-full flex justify-between bg-zinc-900 bg-opacity-20 px-8' >

        {/* left div for logo */}
        <div className='h-full w-60  flex items-center justify-start' >
            <h1 className='text-lg font-medium italic text-green-300' >TeamUp</h1>
        </div>
        {/* middle div for search bar or additinols nav */}
        <div className='flex items-center justify-center ' >
            <input className='outline-none h-12  bg-zinc-800 bg-opacity-25 pl-4 rounded-md border-none w-[45rem]' placeholder="Search for the matches" />
        </div>
        {/* right div for improtant actions buttons */}
        <div className=' flex items-center gap-4' >
            
            <Link href={`/dashboard/team/create`}
            ><Button className='bg-gradient-to-r from-zinc-800 to-zinc-900 flex gap-2 items-center text-white ' >
                <Dumbbell size={25} strokeWidth={1.5} />
                <p className='font-semibold' >Create Team</p>
            </Button></Link>
            <Button className='bg-gradient-to-r from-green-400 to-green-200 flex gap-2 items-center text-zinc-900 ' >
                <Dices size={25} strokeWidth={1.5} />
                <p className='font-semibold' >Create Matches</p>
            </Button>
        </div>
        
    </div>
  )
}

export default DashboardnavBar