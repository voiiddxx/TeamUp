"use server"

import { CreateMacthParams } from "@/types"
import { Prisma, PrismaClient } from "@prisma/client";



// prisma config

const prisma = new PrismaClient();




// server action for creating the match

export const CreatMatchAction = async ({data}:CreateMacthParams)=>{
    if(!data){
        return JSON.parse(JSON.stringify({message:"No Data Found" , status:400}));
    }
    const matchRes = await  prisma.match.create({
        data:{
            bet:2,
            location:data.location,
            status:'11',
            time:data.date,
            matchCategoryId:5151521,
            createdteamId:2211,
            joinedteamid:3211,
            looserteamid:2111,
            winningteamid:11515,
        }
    });
    if(!matchRes) {
        return JSON.parse(JSON.stringify({message:"Error while creating the match" , status:401}));
    }
    return JSON.parse(JSON.stringify({data:matchRes , status:200}));
}