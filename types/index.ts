


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
        captainId:number
        locaton:string
        teamcode:string
        categoryId:number
    }
}

export type CreateCategoryParams = {
    data:{
        name:string
    }
}

export type CreateMacthParams = {
   data:{
    location:string
    date: Date
   }
}


export type CreateInviteParams = {
    data:{
        
    }
}