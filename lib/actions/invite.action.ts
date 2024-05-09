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
                
            }
        })    
    } catch (error) {
        console.log(error);
        
    }
}