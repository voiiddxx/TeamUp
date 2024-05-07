


export type CreateUserParams = {
    data: {
        username: string
        email: string
        avatar: string
    }
}


export type UpdateUserParams = {
    userId:number
    data: {
        loses?: number,
        avatar?: string,
        wonmatch?: number,
        role?: number,
        matchPlayed?: number
    }
}