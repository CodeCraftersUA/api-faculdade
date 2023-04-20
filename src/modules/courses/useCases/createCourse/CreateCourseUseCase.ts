// Dependencies
import { PrismaClient } from '@prisma/client';

// Interfaces
import CourseInterface from "../../../../models/courses.js";

// Helpers
import generateUniqueId from '../../../../helpers/generateUniqueId.js';

const prisma = new PrismaClient();

class CreateCourseUseCase {
  execute = async (course: CourseInterface) => {
    await prisma.course.create({
      data: {
        id: generateUniqueId(),
        name: course.name,
        acronym: course.acronym
      }
    });
  }
}

export default CreateCourseUseCase;