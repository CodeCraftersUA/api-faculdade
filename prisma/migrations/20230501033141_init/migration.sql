/*
  Warnings:

  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `professors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "course";

-- DropTable
DROP TABLE "professors";

-- DropTable
DROP TABLE "student";

-- CreateTable
CREATE TABLE "Professor" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR NOT NULL,
    "address" VARCHAR(200) NOT NULL,
    "specialty" VARCHAR(70) NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "acronym" VARCHAR(6) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "age" INTEGER NOT NULL,
    "address" VARCHAR(100) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "id" VARCHAR(36) NOT NULL,
    "semester" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessorsOnClassrooms" (
    "professorId" VARCHAR(36) NOT NULL,
    "classroomId" VARCHAR(36) NOT NULL,

    CONSTRAINT "ProfessorsOnClassrooms_pkey" PRIMARY KEY ("professorId","classroomId")
);

-- CreateTable
CREATE TABLE "StudentOnClassrooms" (
    "studentId" VARCHAR(36) NOT NULL,
    "classroomId" VARCHAR(36) NOT NULL,

    CONSTRAINT "StudentOnClassrooms_pkey" PRIMARY KEY ("studentId","classroomId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_name_key" ON "Course"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Course_acronym_key" ON "Course"("acronym");

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorsOnClassrooms" ADD CONSTRAINT "ProfessorsOnClassrooms_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorsOnClassrooms" ADD CONSTRAINT "ProfessorsOnClassrooms_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentOnClassrooms" ADD CONSTRAINT "StudentOnClassrooms_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentOnClassrooms" ADD CONSTRAINT "StudentOnClassrooms_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
