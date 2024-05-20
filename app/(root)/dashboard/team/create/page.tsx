import DashboardnavBar from '@/components/shared/navbars/DashboardnavBar'
import CreateTeam from '@/components/shared/team/CreateTeam'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const page = () => {
  return (
    <div className='min-h-screen w-full bg-stone-950' >
      <DashboardnavBar/>
      <div className='h-16 w-full px-10 flex items-center border-b border-zinc-800' >
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">
        <p>Home</p>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Teams</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Create</BreadcrumbLink>
    </BreadcrumbItem>
    
   
  </BreadcrumbList>
</Breadcrumb>

      </div>

        <CreateTeam/>
    </div>

  )
}

export default page