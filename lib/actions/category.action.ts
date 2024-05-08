"use server"

import { CreateCategoryParams } from "@/types";
import { PrismaClient } from "@prisma/client";


// prisma config
const prisma = new PrismaClient();

// server action for creating the category for the sports team

export const CreateCategoryAction = async ({data}:CreateCategoryParams)=>{
    if(!data) return JSON.parse(JSON.stringify({message:"No Data Found" , status:400}));
    try {
        const categoryRes = await prisma.sportcategory.create({
            data:{
                name:data.name
            }
        });
        if(!categoryRes){
            return JSON.parse(JSON.stringify({message:"Error while creating service" , status:401}));
        }
        return JSON.parse(JSON.stringify({data:categoryRes , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}