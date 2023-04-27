// Dependencies
import { PrismaClient } from '@prisma/client';

// Error
import AppError from '../../../../errors/AppError.js';

// Helpers
import formatBigInt from "../../../../helpers/formatBigInt.js";

const prisma = new PrismaClient()

class GetCoursesUseCase {
  execute = async (id: string) => {
    const course = await prisma.course.findFirst({
      where: { id }
    });

    if (course) return formatBigInt(course);
    throw new AppError("Course ID not found", 404);
  }
}

export default GetCoursesUseCase;