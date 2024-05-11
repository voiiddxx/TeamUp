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
                captainId:data.captainId,
                feedbacks:[],
                 lost:0,
                 tie:0,
                 won:0,
                 rating:0,
                 categoryId:1,
                 location:data.locaton
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


// server action for getting the team with teamId

export const getTeamWithTeamIdAction = async (teamId: number)=>{

    if(!teamId){
        return JSON.parse(JSON.stringify({message:"No TeamId Found" , status:400}))
    }
    try {
        const teamRes = await prisma.team.findFirst({
            where:{
                teamid:teamId
            },
            include:{
                category:true,
                createdmatch:true,
                joinedMatch:true,
                loosedMatch:true,
                members:true,
                winningteam:true,
            }
        });

        if(!teamRes) {
            return JSON.parse(JSON.stringify({message:"No Team Found" , status:401}));
        }
        return JSON.parse(JSON.stringify({data:teamRes , status:200}));

    } catch (error) {
        console.log(error);
        
    }
}