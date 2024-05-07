"use server"

import { CreateUserParams } from "@/types";
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
                username:'nbjb',
                avatar:'nn ',
                email:'mlm',
                loses:0,
                matchplayed:0,
                role:'Player',
                tied:0,
                wonmatch:0,
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





// server action for completing the profile


export const UpdateProfileAction = async()=>{
    try {
        
    } catch (error) {
        console.log(error);
        
    }
}



