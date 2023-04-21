-- CreateTable
CREATE TABLE "logged-in-users" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "xPos" INTEGER NOT NULL,
    "yPos" INTEGER NOT NULL,
    "spaceId" TEXT NOT NULL,
    "accessKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logged-in-users_pkey" PRIMARY KEY ("id")
);
