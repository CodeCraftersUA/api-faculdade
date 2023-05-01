/*
  Warnings:

  - Made the column `name` on table `professors` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "professors" ALTER COLUMN "name" SET NOT NULL;
