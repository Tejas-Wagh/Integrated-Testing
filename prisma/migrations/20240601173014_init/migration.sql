-- CreateEnum
CREATE TYPE "type" AS ENUM ('Sum', 'Multiply');

-- CreateTable
CREATE TABLE "data" (
    "id" SERIAL NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL,
    "type" "type" NOT NULL,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);
