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

// server action for getting the specific category based on id 

export const GetCategoryWithId = async (categoryId:number)=>{
    if(!categoryId){
        return JSON.parse(JSON.stringify({message:"No Data found" , status:400}));
    }
    try {
        const categoryRes = await prisma.sportcategory.findFirst({
            where:{
                sportcategoryid:categoryId
            },
            include:{
                team:true,
                match:true
            }
        });
        if(!categoryRes){
            return JSON.parse(JSON.stringify({message:"Some error found" , status:401}));   
        }
        return JSON.parse(JSON.stringify({data:categoryRes , status:200}));
    } catch (error) {
        
    }
}


// server action for getting all the sports game category 

export const getAllCategoryAction = async ()=>{
    try {
        const category = await prisma.sportcategory.findMany({});
        if(!category){
            return JSON.parse(JSON.stringify({messafe:"No Category Found" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:category , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}


// export const get team based on the category

export const getTeamsAndMatchWithCategory = async (categoyrId:number)=>{
    if(!categoyrId){
        return JSON.parse(JSON.stringify({message:"Please eneter category" , status:400}));
    }

    const res = await prisma.sportcategory.findFirst({
        where:{
            sportcategoryid:categoyrId
        },
        include:{
            team:true,
            match:true
        }
    });
    if(!res){
        return JSON.parse(JSON.stringify({message:"No Data Found" , status:401}));
    }
    return JSON.parse(JSON.stringify({data:res , status:200}));
}