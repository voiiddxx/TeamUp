


export type CreateUserParams = {
    CreatedData: {
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
        userid:number
        teamEmail: string
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
    bet:any
    createdTeamId:number
    categoryId:number
    userid: number
   }
}


export type CreateInviteParams = {
    data:{
        
    }
}


export type JointeamWithCodeParams = {
    data:{
        teamid:number
        userid:number,
        code: string
    }
}



export type SendInviteForChalangeParams = {
    data:{
        teamid:number
        matchid:number
        custom_message:string
    }
}


export type AcceptMatchInviteParams = {
    data:{
        matchid:number
        ownTeamId:number
        against_team_id:number
        inviteId:number
    }
}


export type UpdateTeamCaptainParams = {
    data:{
        currentCaptainid:number,
        newcaptainId:number,
        teamid:number
    }
}


export type DeleteTeamParams = {
    data:{
        teamid:number,
        captainid:number
    }
}