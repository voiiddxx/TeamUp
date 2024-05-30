"use client";
import { Plus, PlusCircle, Search, Users } from "lucide-react";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  
const ChooseteamMembers = () => {
  const [Players, setPlayers] = useState<any>([]);

  return (
    <div>
      {Players.length < 1 && (
        <Dialog>
          <DialogTrigger>
          <div className='h-16 w-16 bg-stone-800 rounded-full flex items-center justify-center mt-4' >
                    <Plus className='text-green-300' />
                </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
               Select your team members
               <div className="mt-4 w-full border-b border-zinc-800 flex gap-2 items-center" >
                <Search className="text-zinc-700" strokeWidth={1.5} />
                <input type="text" className="h-10 w-full bg-transparent " placeholder="Search..."  />
               </div>

               {
                Players.length != 0 ? <div></div> : <div className="h-[200px] flex justify-center items-center flex-col" >
                    <Users strokeWidth={1.5} className="text-zinc-500" />
                    <p className="text-zinc-300 font-medium mt-4" >Find your players </p>
                    <p className="text-zinc-500 font-medium mt-4 text-xs" >Find your team members by searching and build your strong team</p>
                </div> 
               }
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ChooseteamMembers;
