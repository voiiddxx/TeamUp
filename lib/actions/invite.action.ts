"use server"

import { AcceptMatchInviteParams, CreateInviteParams, SendInviteForChalangeParams } from "@/types";
import { PrismaClient } from "@prisma/client"


// prisma config

const prisma = new PrismaClient();


// server action for creating the match invitation
export const CreateMatchInvitationAction = async ({ data }: CreateInviteParams) => {
    if (!data) {
        return JSON.parse(JSON.stringify({ message: "No Data Found" }));
    }

    try {
        const inviteRes = await prisma.invite.create({
            data: {
                message: "this is message for invitation",
                inviteformatchid: 2,
                invitingTeamId: 2
            }
        });
        if (!inviteRes) {
            return JSON.parse(JSON.stringify({ message: "Some issue while sending the invitation", status: 400 }));
        }
        return JSON.parse(JSON.stringify({ data: inviteRes, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}



// adding server action for geting the invitation for particular match

export const getInvitationAspermatchid = async (matchId: number) => {
    if (!matchId) {
        return JSON.parse(JSON.stringify({ message: "No Match Found", status: 400 }));
    }

    try {

        const res = await prisma.invite.findMany({
            where: {
                inviteformatchid: 2
            }
        });
        if (!res) {
            return JSON.parse(JSON.stringify({ message: "No invitation found", status: 401 }));
        }
        return JSON.parse(JSON.stringify({ data: res, status: 200 }));

    } catch (error) {
        console.log(error);

    }
}



// server action for send the invite or for chalange the team
export const InviteTeamForChalange = async ({ data }: SendInviteForChalangeParams) => {
    if (!data) {
        return JSON.parse(JSON.stringify({ message: "No Data Found", status: 400 }));
    }
    try {
        const IsMatch = await prisma.match.findFirst({
            where: {
                matchid: data.matchid,
            }
        });
        if (!IsMatch) {
            return JSON.parse(JSON.stringify({ message: "No Match Found", status: 401 }));
        }
        const isOpen = IsMatch.status === "Open";

        if (!isOpen) {
            return JSON.parse(JSON.stringify({ message: "This Match Is Not Accepting Any Invite", status: 402 }));
        }

        const InviteRes = await prisma.invite.create({
            data: {
                message: data.custom_message,
                inviteformatchid: data.matchid,
                invitingTeamId: data.teamid
            }
        });

        if (!InviteRes) {
            return JSON.parse(JSON.stringify({ message: "Some Issue Occured", status: 403 }));
        }
        return JSON.parse(JSON.stringify({ data: InviteRes, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}




// server action for accepting the invite for the match

export const AcceptInviteMatchAction = async ({ data }: AcceptMatchInviteParams) => {
    if (!data) {
        return JSON.parse(JSON.stringify({ message: "No Data Found", status: 400 }));
    }

    const isInvite = await prisma.invite.findFirst({
        where: {
            inviteid: data.inviteId
        },
        include: {
            inviteFormatch: true
        }
    });

    if (!isInvite) {
        return JSON.parse(JSON.stringify({ message: "No Invite Found", status: 404 }));
    }


    const isvalidMatch = isInvite.inviteformatchid === data.matchid;


    if (!isvalidMatch) {
        return JSON.parse(JSON.stringify({ message: "Some Issues Occured", status: 405 }));
    }


    try {
        const isMatch = await prisma.match.findFirst({
            where: {
                matchid: data.matchid
            }
        });
        if (!isMatch) {
            return JSON.parse(JSON.stringify({ message: "No Match Found", status: 401 }));
        }
        const IsOpen = isMatch.status === "Open";

        if (!IsOpen) {
            return JSON.parse(JSON.stringify({ message: "Match Is Already Initiated", status: 402 }));
        }





        const isAgainstTeamPresent = await prisma.team.findFirst({
            where: {
                teamid: data.against_team_id
            },
            include: {
                captain: true,
                members: true
            }
        });
        if (!isAgainstTeamPresent) {
            return JSON.parse(JSON.stringify({ message: "No Against team Found", status: 403 }));
        }


        // accepting the invite

        const accpetRes = await prisma.match.update({
            where: {
                matchid: data.matchid
            },
            data: {
                joinedteamid: data.ownTeamId,
                status: "Intiated"
            }
        });

        if (!accpetRes) {
            return JSON.parse(JSON.stringify({ message: "Some Issue While Accepting reques , try again later", status: 406 }));
        }

        return JSON.parse(JSON.stringify({ data: accpetRes, status: 200 }));


    } catch (error) {
        console.log(error);

    }
}