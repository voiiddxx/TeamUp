"use server"

import { createTeamParams, JointeamWithCodeParams } from "@/types";
import { PrismaClient } from "@prisma/client";
import { PiSquare } from "lucide-react";




// prisma config

const prisma = new PrismaClient();



// server action for creating the team

export const CreateTeamAction = async ({ data }: createTeamParams) => {
    try {
        if (!data) return JSON.parse(JSON.stringify({ message: "No Data found", status: 400 }));
        const teamRes = await prisma.team.create({
            data: {
                name: data.name,
                logo: data.logo,
                punchline: data.caption,
                captainId: data.captainId,
                feedbacks: [],
                lost: 0,
                tie: 0,
                won: 0,
                rating: 0,
                categoryId: data.categoryId,
                location: data.locaton,
                teamcode: data.teamcode,
                ownerid: data.userid,
                members: {
                    connect: { userid: data.userid }
                }
            }
        });
        if (!teamRes) {
            return JSON.parse(JSON.stringify({ message: "No Team found", status: 400 }));
        }
        return JSON.parse(JSON.stringify({ data: teamRes, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}


// server action for getting the team with teamId

export const getTeamWithTeamIdAction = async (teamId: number) => {

    if (!teamId) {
        return JSON.parse(JSON.stringify({ message: "No TeamId Found", status: 400 }))
    }
    try {
        const teamRes = await prisma.team.findFirst({
            where: {
                teamid: teamId
            },
            include: {
                category: true,
                createdmatch: true,
                joinedMatch: true,
                loosedMatch: true,
                members: true,
                winningteam: true,
                captain: true

            }
        });

        if (!teamRes) {
            return JSON.parse(JSON.stringify({ message: "No Team Found", status: 401 }));
        }
        return JSON.parse(JSON.stringify({ data: teamRes, status: 200 }));

    } catch (error) {
        console.log(error);

    }
}


// server action for useres to joining the team

export const JoinTeamWithCodeAction = async ({ data }: JointeamWithCodeParams) => {
    try {
        if (!data) {
            return JSON.parse(JSON.stringify({ message: "No Data Found", status: 400 }));
        }
        const isTeamAvailable = await prisma.team.findFirst({
            where: {
                teamid: data.teamid,
                teamcode: data.code
            },
            include: {
                members: true,
                captain: true,
            }
        });
        if (!isTeamAvailable) {
            return JSON.parse(JSON.stringify({ message: "No Team Found", status: 401 }));
        }

        // checking if user is already the player of the team
        //    const IsUserAlreadyMember = is.members.some(members => members.id === userdId);

        const IsUserMember = isTeamAvailable.members.some(curr => curr.userid == data.userid);


        if (IsUserMember) {
            return JSON.parse(JSON.stringify({ message: "User is already in the team", status: 402 }));
        }

        const res = await prisma.team.update({
            where: {
                teamid: data.teamid,
                teamcode: data.code
            },
            data: {
                members: {
                    connect: {
                        userid: data.userid
                    }
                }
            }
        });

        if (!res) {
            return JSON.parse(JSON.stringify({ message: "Some issue occured , please try again later", status: 403 }));
        }
        return JSON.parse(JSON.stringify({ data: res, status: 200 }));

    } catch (error) {
        console.log(error);

    }
}


// server action for getting all the teams

export const GetAllTeamAction = async () => {
    try {
        const res = await prisma.team.findMany({

        });
        if (!res) {
            return JSON.parse(JSON.stringify({ message: "No Data Found", status: 400 }));
        }
        return JSON.parse(JSON.stringify({ data: res, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}


// server action for getting the team of user in which he is caption or member or whatever

export const GetUserTeamAction = async (userid: number) => {
    if (!userid) {
        return JSON.parse(JSON.stringify({ message: "User Not Found", status: 400 }));
    }
    try {
        const res = await prisma.team.findMany({
            where: {
                members: {
                    some: {
                        userid: userid
                    }
                }
            }
        });

        if (!res) {
            return JSON.parse(JSON.stringify({ message: "No Team Found", status: 401 }));
        }

        return JSON.parse(JSON.stringify({ data: res, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}



// server action for getting the team cretaed by users

export const getCreatedTeamByUser = async (userId : number)=>{
    if(!userId){
        return JSON.parse(JSON.stringify({message:"No Data Found" , status:400}));
    }
        try {
            const teamRes = await prisma.team.findMany({
                where:{
                    ownerid:userId
                },
                include:{
                    captain:true,
                    category:true,
                    createdmatch:true,
                    joinedMatch:true,
                    members:true,
                    loosedMatch:true,
                    winningteam:true,
                }
            });

            if(!teamRes){
                return JSON.parse(JSON.stringify({message:"No Team found" , status:401}));
            }

            return JSON.parse(JSON.stringify({data:teamRes , status:200}));
            
        } catch (error) {
            
        }
}