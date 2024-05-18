import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

const DashboardnavBar = () => {

    const placeHolder = <div className='flex gap-2 text-white' >
        <Search/>
        <p>Search your matches </p>

    </div>
  return (
    <div className='h-20 w-full flex justify-between bg-zinc-900 bg-opacity-20 px-8' >

        {/* left div for logo */}
        <div className='h-full w-60  flex items-center justify-start' >
            <h1 className='text-lg font-medium italic text-green-300' >TeamUp</h1>
        </div>
        {/* middle div for search bar or additinols nav */}
        <div className='flex items-center justify-center ' >
            <input className='outline-none h-12  bg-zinc-800 bg-opacity-25 pl-4 rounded-md border-none w-[45rem]' placeholder="Search for the matches" />
        </div>
        {/* right div for improtant actions buttons */}
        <div className=' flex items-center' >
            <Button>Create team</Button>
        </div>
        
    </div>
  )
}

export default DashboardnavBar