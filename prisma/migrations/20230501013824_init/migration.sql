/*
  Warnings:

  - Made the column `name` on table `professors` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "professors" ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "student" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "age" INTEGER NOT NULL,
    "address" VARCHAR(100) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
