/*
  Warnings:

  - You are about to alter the column `address` on the `professors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(200)`.
  - You are about to alter the column `specialty` on the `professors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(70)` to `VarChar(70)`.
  - Made the column `name` on table `professors` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "professors" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "address" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "specialty" SET NOT NULL,
ALTER COLUMN "specialty" SET DATA TYPE VARCHAR(70);
