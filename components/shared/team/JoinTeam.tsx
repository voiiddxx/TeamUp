"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JoinTeamWithCodeAction } from "@/lib/actions/team.action";
const JoinTeam = () => {

    const [TeamCode, setTeamCode] = useState<any>(null);
    const [TeamId, setTeamId] = useState<any>(null);

    const hanldeJoinTeam = async () =>{
      if(TeamCode==null && TeamId==null){
        alert("Invalid Values");
      }else{
        const res = await JoinTeamWithCodeAction({
          data:{
            code:TeamCode,
            teamid:4,
            userid:4
          }
        });
        console.log(res);
        
        if(res.status==400){
          alert("No Team data found");
        }
        else if(res.status == 401){
          alert("Invalid values , no team availbale")
        }
        else if(res.status == 402){
          alert("You had Already Joined this team");
        }
        else if(res.status == 200){
          alert("Team Joined");
        }
      }
    }
    
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.

            {/* team id and team code for joinig team form */}
            <Input onChange={(e)=>{
                setTeamId(e.target.value);
            }} className="mt-4"  placeholder="Team ID" />
            <Input onChange={(e)=>{
                setTeamCode(e.target.value)
            }} className="mt-4"  placeholder="Team Code" />
            <div className=" w-full flex justify-end items-center mt-8 " >
                <Button onClick={hanldeJoinTeam} >Join Team</Button>

            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default JoinTeam;
