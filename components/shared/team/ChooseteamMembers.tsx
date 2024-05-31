"use client";
import { Check, Loader, Plus, PlusCircle, Search, Users, X } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchUserWithQueryAction } from "@/lib/actions/user.action";
import { Button } from "@/components/ui/button";
import Image from "next/image";

  interface IChoosePlayerProps  {
    slectedPlayerHome : []
    setSelectedPlayersHome:any
  }

const ChooseteamMembers = ({slectedPlayerHome , setSelectedPlayersHome}:IChoosePlayerProps) => {
  const [Players, setPlayers] = useState<any>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isRemoving, setisRemoving] = useState<any>({
    userid:5451554151115
  }); 

  // const [slectedPlayerHome, setSelectedPlayersHome] = useState<any>([]);

  const hanldeInputChangeforplayer = async (e: any) => {
    const data = await SearchUserWithQueryAction(e.target.value);
    console.log(data);
    setPlayers(data.data);
  };

  const handleAddPlayer = (user: any) => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      console.log("this is value of user",user);
      
    setSelectedPlayersHome((prev:any)=>[...prev , user]);
    }, 2000);
  };

  const chechSelectedorNot = (playerid: any) => {
    return  slectedPlayerHome.some((curr: any) => curr.userid === playerid);
  };

  const removeSelctedPlayer  = (curr:any)=>{
    setisRemoving(curr);
    setTimeout(() => {
    setSelectedPlayersHome((prev: any) => prev.filter((player: any) => player.userid !== curr.userid));
    setisRemoving({
      userid:15151215151
    });
    }, 500);
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="h-16 w-16 bg-stone-800 rounded-full flex items-center justify-center mt-4">
            <Plus className="text-green-300" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              Select your team members
              <div className="mt-4 w-full border-b border-zinc-800 flex gap-2 items-center">
                <Search className="text-zinc-700" strokeWidth={1.5} />
                <input
                  type="text"
                  className="h-10 w-full bg-transparent border-none outline-none"
                  placeholder="Search..."
                  onChange={(e) => {
                    hanldeInputChangeforplayer(e);
                  }}
                />
              </div>
              {Players.length != 0 ? (
                <div>

                  {
                    slectedPlayerHome.length > 0 && (
                      <div className="w-full" >
                        <p className="text-sm font-medium text-zinc-600 mt-4" >Selected Players</p>

                        <div className="mt-6 flex items-center gap-4 w-full flex-wrap transition-all" >
                          {
                            slectedPlayerHome.map((curr:any)=>{
                              const isRemove = isRemoving.userid == curr.userid;
                              return <div className={`h-20 w-20 rounded-full bg-zinc-600 transition-all relative ${isRemove ?'animate-fadeOut' : ''} `}>
                                <div onClick={()=>{
                                  removeSelctedPlayer(curr)
                                }} className="absolute flex items-center justify-center p-1 rounded-full top-1 right-0 bg-zinc-800" >
                                  <X className="text-red-400" strokeWidth={1.5} size={15} />
                                </div>
                                <Image className=" h-full w-full object-cover rounded-full" src={curr.avatar} height={1500} width={1500} alt="selected player avatar" />
                              </div>
                            })
                          }
                        </div>
                      </div>
                    )
                  }
                  <p className="text-zinc-600 font-medium mt-4 mb-4">
                    Recent Search...
                  </p>
                  {Players.map((curr: any) => {
                    const selected = chechSelectedorNot(curr.userid)
                    return (
                      <div className="min-h-14 py-4 w-full flex items-center hover:bg-zinc-800 rounded-md px-2 transition-all justify-between border-b border-zinc-800 group">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-zinc-500">
                            <Image
                              src={curr.avatar}
                              className="h-full w-full rounded-full object-cover"
                              height={1500}
                              width={1500}
                              alt="user image "
                            />
                          </div>
                          <p className="text-sm font-medium text-zinc-400">
                            {curr.username}
                          </p>
                        </div>
                        <div
                          onClick={() => {
                            handleAddPlayer(curr);
                          }}
                          className="group-hover:visible invisible"
                        >
                          {isLoading == true ? (
                            <div>
                              <Loader
                                className="animate-spin text-zinc-400"
                                strokeWidth={1.5}
                              />
                            </div>
                          ) : (
                           <div>
                            {
                                selected == true ? <div>
                                    <Check className="text-indigo-500" strokeWidth={1.5} /> 
                                </div> :  <Button
                                className="bg-zinc-300 hover:text-white text-zinc-900 font-medium text-xs  h-8"
                                size={"sm"}
                              >
                                Add Player
                              </Button>
                            }
                           </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="h-[200px] flex justify-center items-center flex-col">
                  <Users strokeWidth={1.5} className="text-zinc-500" />
                  <p className="text-zinc-300 font-medium mt-4">
                    Find your players{" "}
                  </p>
                  <p className="text-zinc-500 font-medium mt-4 text-xs">
                    Find your team members by searching and build your strong
                    team
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChooseteamMembers;
