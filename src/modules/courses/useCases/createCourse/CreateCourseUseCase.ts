// Dependencies
import { PrismaClient } from '@prisma/client';

// Interfaces
import CourseInterface from "../../../../models/courses.js";

const prisma = new PrismaClient();

class CreateCourseUseCase {
  execute = async (course: CourseInterface) => {
    await prisma.course.create({
      data: {
        name: course.name,
        acronym: course.acronym
      }
    });
  }
}

export default CreateCourseUseCase;