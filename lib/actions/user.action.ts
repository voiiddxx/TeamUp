"use server"

import { CreateUserParams, UpdateUserParams } from "@/types";
import { PrismaClient } from '@prisma/client'
import { KoalaWelcomeEmail } from "@/emails/WelcomeMail";
import { Resend } from 'resend';



const prisma = new PrismaClient();

// resend config
const resend = new Resend(process.env.RESEND_API_KEY);

// server action for creating the user
export const CreateUserAction = async ({ CreatedData }: CreateUserParams) => {
    try {
        if (!CreatedData) {
            return JSON.parse(JSON.stringify({ message: "No Credentials found", status: 400 }));
        }
        const userRes = await prisma.user.create({
            data: {
                username: CreatedData.username,
                avatar: CreatedData.avatar,
                email: CreatedData.email,
                loses: 0,
                matchplayed: 0,
                role: 'Player',
                tied: 0,
                wonmatch: 0,
                clerkId: CreatedData.clerkId
            }
        });
        if (!userRes) {
            return JSON.parse(JSON.stringify({ message: "Some error occured", status: 400 }));
        }

        // sending the mail when user get created
        // const {emaildata , error} = await resend
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [CreatedData.email],
            subject: 'Welcome To TeamUp',
            react: KoalaWelcomeEmail({ useremail: CreatedData.email , userFirstname:CreatedData.username }),
        });

        if(error){
            return JSON.parse(JSON.stringify({message:"Some Issue Occured" , status:404}));
        }
        if(data){
            console.log("Email Sended");
        }
        console.log("Data got created: " , data);
        
        console.log("this is the value of userRes: ",userRes);
        


        return JSON.parse(JSON.stringify({ data: userRes, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}




// server action for getting the user profile 

export const GetUserProfileAction = async (userId: number) => {
    try {
        if (!userId) {
            return JSON.parse(JSON.stringify({ message: "No userid found", status: 400 }));
        }
        const res = await prisma.user.findFirst({
            where: {
                userid: userId
            }
        });
        if (!res) {
            return JSON.parse(JSON.stringify({ message: "Error while getting user profile", status: 401 }));
        }
        return JSON.parse(JSON.stringify({ data: res, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}


// server action for getting the user based on clerkId 

export const gerUserasPerClerkId = async (clerkId: string) => {
    if (!clerkId) {
        return JSON.parse(JSON.stringify({ message: "No clerkId found", status: 400 }));
    }
    const res = await prisma.user.findFirst({
        where: {
            clerkId: clerkId
        }
    });
    if (!res) {
        return JSON.parse(JSON.stringify({ message: "Some issue occured while getting user", status: 401 }));
    }

    return JSON.parse(JSON.stringify({ data: res, status: 200 }))
}





// server action for completing the profile
export const UpdateProfileAction = async ({ data, userId }: UpdateUserParams) => {
    try {
        if (!userId) return JSON.parse(JSON.stringify({ message: "No id found", status: 404 }));
        const UserForUpdation = await prisma.user.findFirst({
            where: {
                userid: userId
            }
        });
        if (!UserForUpdation) {
            return JSON.parse(JSON.stringify({ message: "No user found", status: 400 }));
        }

        const updateData = {
            avatar: data.avatar || UserForUpdation.avatar,
            loses: data.loses || UserForUpdation.loses,
            role: data.role || UserForUpdation.role,
            matchplayed: data.matchPlayed || UserForUpdation.matchplayed,
            wonmatch: data.wonmatch || UserForUpdation.wonmatch
        }

        const userUpdated = await prisma.user.update({
            where: {
                userid: userId,
            },
            data: updateData
        });

        if (!userUpdated) {
            return JSON.parse(JSON.stringify({ message: "Issue while updating the user", status: 400 }));
        }
        return JSON.parse(JSON.stringify({ data: userUpdated, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}



