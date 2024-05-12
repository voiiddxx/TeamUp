import JoinTeam from '@/components/shared/team/JoinTeam'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' h-screen w-full flex justify-center items-center gap-8' >
        <Link href={'/dashboard/team/create'} ><Button>Create Team</Button></Link>
        <JoinTeam/>
        {/* if team is created show that  button */}
        <Button>My Team</Button>
        {/* if team is created show that  button end */}
       <Link href={`/dashboard/match/create`} > <Button>Create Match</Button></Link>
       <Link href={`/dashboard/match`} > <Button>Explore Match</Button></Link>
    </div>
  )
}

export default page