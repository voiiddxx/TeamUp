/*
  Warnings:

  - The `feedbacks` column on the `Team` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `matchCategoryId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "matchCategoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "rating" DROP NOT NULL,
DROP COLUMN "feedbacks",
ADD COLUMN     "feedbacks" TEXT[],
ALTER COLUMN "won" DROP NOT NULL,
ALTER COLUMN "lost" DROP NOT NULL,
ALTER COLUMN "tie" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerkId" TEXT NOT NULL,
ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "matchplayed" DROP NOT NULL,
ALTER COLUMN "loses" DROP NOT NULL,
ALTER COLUMN "tied" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Invite" (
    "inviteid" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "invitingTeamId" INTEGER NOT NULL,
    "inviteformatchid" INTEGER NOT NULL,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("inviteid")
);

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_matchCategoryId_fkey" FOREIGN KEY ("matchCategoryId") REFERENCES "Sportcategory"("sportcategoryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_inviteformatchid_fkey" FOREIGN KEY ("inviteformatchid") REFERENCES "Match"("matchid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_invitingTeamId_fkey" FOREIGN KEY ("invitingTeamId") REFERENCES "Team"("teamid") ON DELETE RESTRICT ON UPDATE CASCADE;
