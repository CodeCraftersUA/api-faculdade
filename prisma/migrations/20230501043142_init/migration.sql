/*
  Warnings:

  - You are about to drop the `Professor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProfessorsOnClassrooms" DROP CONSTRAINT "ProfessorsOnClassrooms_professorId_fkey";

-- DropTable
DROP TABLE "Professor";

-- CreateTable
CREATE TABLE "professor" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR NOT NULL,
    "address" VARCHAR(200) NOT NULL,
    "specialty" VARCHAR(70) NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProfessorsOnClassrooms" ADD CONSTRAINT "ProfessorsOnClassrooms_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
