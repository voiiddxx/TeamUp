import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center gap-8' >
        <Button>Create Team</Button>
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