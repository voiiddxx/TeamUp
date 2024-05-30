"use client";
import { Plus, PlusCircle } from "lucide-react";
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
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ChooseteamMembers;
