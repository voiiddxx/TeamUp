import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center gap-8' >
        <Link href={'/dashboard/team/create'} ><Button>Create Team</Button></Link>
        <Button>Join Team</Button>
        {/* if team is created show that  button */}
        <Button>My Team</Button>
        {/* if team is created show that  button end */}
        <Button>Create Match</Button>
        <Button>Explore Match</Button>
    </div>
  )
}

export default page