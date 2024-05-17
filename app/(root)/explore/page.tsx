import SideBarMain from '@/components/shared/explore/SideBarAllComponents/SideBarMain'
import MainNavBar from '@/components/shared/navbars/MainNavBar'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen w-full bg-stone-950' >
        <MainNavBar/>
        <SideBarMain/>
    </div>
  )
}

export default page