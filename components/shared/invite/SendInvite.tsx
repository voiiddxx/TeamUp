"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InviteTeamForChalange } from '@/lib/actions/invite.action'

  
const SendInvite = () => {

    const [Message, setMessage] = useState<any>(null);
    

    // integreating action for sending the invite
    const handleInvite = async ()=>{
        const res = await InviteTeamForChalange({
            data:{
                custom_message:Message,
                matchid:1,
                teamid:2
            }
        });
        if(res.status==200){
            alert("Invite Sended");
        }else{
            alert(res.message);
        }
    }
    


  return (
    <Dialog>
  <DialogTrigger>
    <Button className='bg-white text-zinc-900 mt-4 hover:text-white hover:bg-zinc-700 hover:bg-opacity-20' >Chalange Them</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
       <Input onChange={(e)=>{
        setMessage(e.target.value);
       }} className='mt-4'  placeholder='your custom message' />
       <div className='w-full flex justify-end' >
       <Button onClick={handleInvite}  className='mt-4' >Chalange</Button>
       </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default SendInvite