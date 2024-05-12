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
import { joinTeamWithCode } from "@/lib/actions/team.action";

const JoinTeam = () => {

    const [TeamCode, setTeamCode] = useState<any>(null);
    const [TeamId, setTeamId] = useState<any>(null);

    const hanldeJoinTeam = async () =>{
      if(!TeamCode && !TeamId){
        alert("Invalid Values");
      }else{
        const res = await joinTeamWithCode({
          data:{
            code:TeamCode,
            teamid:TeamId,
            userid:2
          }
        });
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
                <Button>Join Team</Button>

            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default JoinTeam;
