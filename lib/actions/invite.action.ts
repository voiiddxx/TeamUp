"use server"

import { CreateInviteParams, SendInviteForChalangeParams } from "@/types";
import { PrismaClient } from "@prisma/client"


// prisma config

const prisma = new PrismaClient();


// server action for creating the match invitation
export const CreateMatchInvitationAction = async ({data}:CreateInviteParams)=>{
    if(!data) {
        return JSON.parse(JSON.stringify({message:"No Data Found"}));
    }

    try {
        const inviteRes = await prisma.invite.create({
            data:{
                message:"this is message for invitation",
                inviteformatchid:2,
                invitingTeamId:2
            }
        });
        if(!inviteRes){
            return JSON.parse(JSON.stringify({message:"Some issue while sending the invitation" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:inviteRes , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}



// adding server action for geting the invitation for particular match

export const getInvitationAspermatchid = async (matchId : number)=>{
    if(!matchId){
        return JSON.parse(JSON.stringify({message:"No Match Found" , status:400}));
    }

    try {
        
        const res = await prisma.invite.findMany({
            where:{
                inviteformatchid:2
            }
        });
        if(!res){
            return JSON.parse(JSON.stringify({message:"No invitation found" , status:401}));
        }
        return JSON.parse(JSON.stringify({data:res , status:200}));
        
    } catch (error) {
        console.log(error);
        
    }
}



// server action for send the invite or for chalange the team
export const InviteTeamForChalange = async ({data}:SendInviteForChalangeParams)=>{
    if(!data){
        return JSON.parse(JSON.stringify({message:"No Data Found" , status:400}));
    }
    try {        
        const IsMatch = await prisma.match.findFirst({
            where:{
                matchid:data.matchid,
            }
        });
        if(!IsMatch){
            return JSON.parse(JSON.stringify({message:"No Match Found", status:401}));
        }
        const isOpen = IsMatch.status === "Open";

        if(!isOpen){
            return JSON.parse(JSON.stringify({message:"This Match Is Not Accepting Any Invite" , status:402}));
        }
        
        const InviteRes = await prisma.invite.create({
            data:{
                message:data.custom_message,
                inviteformatchid:data.matchid,
                invitingTeamId:data.teamid
            }
        });

        if(!InviteRes){
            return JSON.parse(JSON.stringify({message:"Some Issue Occured" , status:403}));
        }
        return JSON.parse(JSON.stringify({data:InviteRes , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}