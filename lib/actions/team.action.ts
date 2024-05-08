"use server"

import { createTeamParams } from "@/types";
import { PrismaClient } from "@prisma/client";




// prisma config

const prisma = new PrismaClient();



// server action for creating the team

export const CreateTeamAction = async ({data}:createTeamParams)=>{
    try {
        if(!data) return JSON.parse(JSON.stringify({message:"No Data found" , status:400}));
        const teamRes = await prisma.team.create({
            data:{
                name:data.name,
                logo:data.logo,
                punchline:data.caption,
                feedbacks:'41',
                 lost:0,
                 tie:0,
                 won:0,
                 rating:0,
                 categoryId:1
            }
        });
        if(!teamRes){
            return JSON.parse(JSON.stringify({message:"No Team found" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:teamRes , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}