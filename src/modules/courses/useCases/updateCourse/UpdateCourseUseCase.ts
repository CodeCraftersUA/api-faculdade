// Dependencies
import { PrismaClient } from '@prisma/client';

// Interfaces
import CourseInterface from "../../../../models/courses.js";

const prisma = new PrismaClient();

class UpdateCourseUseCase {
  execute = async (id: string, course: CourseInterface) => {
    await prisma.course.update({
      where: { id },
      data: {
        name: course.name,
        acronym: course.acronym
      }
    });
  }
}

export default UpdateCourseUseCase;