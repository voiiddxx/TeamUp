"use server"

import { CreateInviteParams } from "@/types";
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