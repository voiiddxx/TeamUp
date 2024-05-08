


export type CreateUserParams = {
    data: {
        username: string
        email: string
        avatar: string
        clerkId:string
    }
}


export type UpdateUserParams = {
    userId:number
    data: {
        loses?: number,
        avatar?: string,
        wonmatch?: number,
        role?: string,
        matchPlayed?: number
    }
}


export type createTeamParams = {
    data:{
        name:string
        logo:string
        caption:string
    }
}