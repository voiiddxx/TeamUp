"use server"

import { CreateMacthParams } from "@/types"
import { Prisma, PrismaClient } from "@prisma/client";



// prisma config

const prisma = new PrismaClient();




// server action for creating the match

export const CreatMatchAction = async ({ data }: CreateMacthParams) => {
    if (!data) {
        return JSON.parse(JSON.stringify({ message: "No Data Found", status: 400 }));
    }
    const matchRes = await prisma.match.create({
        data: {
            bet: 2,
            location: data.location,
            status: '11',
            time: data.date,
            matchCategoryId: 5151521,
            createdteamId: 2211,
            joinedteamid: 3211,
            looserteamid: 2111,
            winningteamid: 11515,
        }
    });
    if (!matchRes) {
        return JSON.parse(JSON.stringify({ message: "Error while creating the match", status: 401 }));
    }
    return JSON.parse(JSON.stringify({ data: matchRes, status: 200 }));
}



// server action for gettig the match based on id

export const GetMatchWithIdAction = async (matchId: number) => {
    if (!matchId) {
        return JSON.parse(JSON.stringify({ message: "No Data found", staus: 400 }));
    }
    const matchRes = await prisma.match.findFirst({
        where: {
            matchid: matchId
        },
        include: {
            Category: true,
            createdTeam: true,
            invites: true,
            Joinedteam: true,
            looserteam: true,
            winningteam: true,
            
        }
    });

    if (!matchRes) {
        return JSON.parse(JSON.stringify({ message: "Some error while getting the team data", status: 401 }));
    }
    return JSON.parse(JSON.stringify({ data: matchRes, status: 200 }));
}


// server action for getting the info all all the matches out thete

export const GetAllMatchesAction = async()=>{
    try {
        const res = await prisma.match.findMany({});
        if(!res){
            return JSON.parse(JSON.stringify({message:"No Matches Found" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:res , status:200}));

    } catch (error) {
        console.log(error);
        
    }
}