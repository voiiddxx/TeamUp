-- CreateTable
CREATE TABLE "User" (
    "userid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "matchplayed" INTEGER NOT NULL,
    "wonmatch" INTEGER NOT NULL,
    "loses" INTEGER NOT NULL,
    "tied" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Team" (
    "teamid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "punchline" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "feedbacks" TEXT NOT NULL,
    "won" INTEGER NOT NULL,
    "lost" INTEGER NOT NULL,
    "tie" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamid")
);

-- CreateTable
CREATE TABLE "Sportcategory" (
    "sportcategoryid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sportcategory_pkey" PRIMARY KEY ("sportcategoryid")
);

-- CreateTable
CREATE TABLE "Match" (
    "matchid" SERIAL NOT NULL,
    "createdteamId" INTEGER NOT NULL,
    "joinedteamid" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "bet" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "winningteamid" INTEGER NOT NULL,
    "looserteamid" INTEGER NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("matchid")
);

-- CreateTable
CREATE TABLE "_teamMembers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_teamMembers_AB_unique" ON "_teamMembers"("A", "B");

-- CreateIndex
CREATE INDEX "_teamMembers_B_index" ON "_teamMembers"("B");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Sportcategory"("sportcategoryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_createdteamId_fkey" FOREIGN KEY ("createdteamId") REFERENCES "Team"("teamid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_joinedteamid_fkey" FOREIGN KEY ("joinedteamid") REFERENCES "Team"("teamid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_winningteamid_fkey" FOREIGN KEY ("winningteamid") REFERENCES "Team"("teamid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_looserteamid_fkey" FOREIGN KEY ("looserteamid") REFERENCES "Team"("teamid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_teamMembers" ADD CONSTRAINT "_teamMembers_A_fkey" FOREIGN KEY ("A") REFERENCES "Team"("teamid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_teamMembers" ADD CONSTRAINT "_teamMembers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("userid") ON DELETE CASCADE ON UPDATE CASCADE;
