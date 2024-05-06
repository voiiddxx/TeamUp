"use server"

import { CreateUserParams } from "@/types";
import { PrismaClient } from "@prisma/client/extension";




    const prisma = new PrismaClient();

// server action for creating the user
export const CreateUserAction = async({data}: CreateUserParams)=>{
    try {
        if(!data){
            return JSON.parse(JSON.stringify({message:"No Credentials found" , status : 400}));
        }
        
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