/*
  Warnings:

  - The primary key for the `course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[acronym]` on the table `course` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "course" DROP CONSTRAINT "course_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "course_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "course_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "course_name_key" ON "course"("name");

-- CreateIndex
CREATE UNIQUE INDEX "course_acronym_key" ON "course"("acronym");
