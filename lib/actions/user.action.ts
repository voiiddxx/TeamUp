"use server"

import { CreateUserParams, UpdateUserParams } from "@/types";
import { PrismaClient } from '@prisma/client'




    const prisma = new PrismaClient();

// server action for creating the user
export const CreateUserAction = async({data}: CreateUserParams)=>{
    try {
        if(!data){
            return JSON.parse(JSON.stringify({message:"No Credentials found" , status : 400}));
        }
        const userRes = await prisma.user.create({
            data:{
                username:data.username,
                avatar:data.avatar,
                email:data.email,
                loses:0,
                matchplayed:0,
                role:'Player',
                tied:0,
                wonmatch:0,
                clerkId:data.clerkId
            }
        });
        if(!userRes){
            return JSON.parse(JSON.stringify({message:"Some error occured" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:userRes , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}




// server action for getting the user profile 

export const GetUserProfileAction = async(userId:number)=>{
    try {
        if(!userId){
            return JSON.parse(JSON.stringify({message:"No userid found" , status:400}));
        }
        const res = await prisma.user.findFirst({
            where:{
                userid:userId
            }
        });
        if(!res){
            return JSON.parse(JSON.stringify({message:"Error while getting user profile" , status:401}));
        }
        return JSON.parse(JSON.stringify({data:res , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}





// server action for completing the profile
export const UpdateProfileAction = async({data , userId}:UpdateUserParams)=>{
    try {
        if(!userId) return JSON.parse(JSON.stringify({message:"No id found" , status:404}));
        const UserForUpdation = await prisma.user.findFirst({
            where:{
                userid:userId
            }
        });
        if(!UserForUpdation){
            return JSON.parse(JSON.stringify({message:"No user found" , status:400}));
        }

        const updateData = {
            avatar:data.avatar || UserForUpdation.avatar,
            loses:data.loses || UserForUpdation.loses ,
            role:data.role || UserForUpdation.role,
            matchplayed: data.matchPlayed || UserForUpdation.matchplayed,
            wonmatch:data.wonmatch || UserForUpdation.wonmatch
        } 
        
       const userUpdated = await prisma.user.update({
        where:{
            userid:userId,
        },
        data:updateData
       });

       if(!userUpdated){
        return JSON.parse(JSON.stringify({message:"Issue while updating the user" , status:400}));
       }
       return JSON.parse(JSON.stringify({data:userUpdated , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}



