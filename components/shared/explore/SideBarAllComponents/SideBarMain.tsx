import { Dices, LandPlot, LucideHome } from 'lucide-react'
import React from 'react'
import SideAllMatches from '../SideAllMatches'

const SideBarMain = () => {
  return (
    <div className='h-screen w-full  flex gap-4' >
        {/* all sidebar stuff */}
        <div className='h-full w-80 bg-transparent px-8 py-5 flex flex-col gap-8' >
            {/* all navitems of the sidebar */}
            <div className='flex items-center gap-2 mt-4 bg-gradient-to-tr from-stone-800 to-zinc-900  py-4 rounded-md px-4' >
                <LucideHome className='text-green-300' size={20} />
                <p className='text-green-300 font-medium' >Overview</p>
            </div>
            <div className='flex items-center gap-2 mt-4 px-4' >
                <LandPlot className='text-white ' size={20} />
                <p className='text-white font-medium' >Open Matches</p>
            </div>
            <div className='flex items-center gap-2 mt-4 px-4' >
                <Dices className='text-white ' size={20} />
                <p className='text-white font-medium' >Teams</p>
            </div>
            <div className='flex items-center gap-2 mt-4 px-4' >
                <LucideHome className='text-white ' size={20} />
                <p className='text-white font-medium' >Overview</p>
            </div>
        </div>
        {/* sidebar all component shows after click */}

        <SideAllMatches/>
    </div>
  )
}

export default SideBarMain