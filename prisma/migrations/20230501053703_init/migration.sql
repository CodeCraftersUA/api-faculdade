/*
  Warnings:

  - You are about to drop the `StudentOnClassrooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentOnClassrooms" DROP CONSTRAINT "StudentOnClassrooms_classroomId_fkey";

-- DropForeignKey
ALTER TABLE "StudentOnClassrooms" DROP CONSTRAINT "StudentOnClassrooms_studentId_fkey";

-- DropTable
DROP TABLE "StudentOnClassrooms";

-- CreateTable
CREATE TABLE "StudentsOnClassrooms" (
    "studentId" VARCHAR(36) NOT NULL,
    "classroomId" VARCHAR(36) NOT NULL,

    CONSTRAINT "StudentsOnClassrooms_pkey" PRIMARY KEY ("studentId","classroomId")
);

-- AddForeignKey
ALTER TABLE "StudentsOnClassrooms" ADD CONSTRAINT "StudentsOnClassrooms_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsOnClassrooms" ADD CONSTRAINT "StudentsOnClassrooms_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
