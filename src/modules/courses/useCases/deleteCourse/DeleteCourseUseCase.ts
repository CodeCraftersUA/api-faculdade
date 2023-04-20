// Dependencies
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class DeleteCourseUseCase {
  execute = async (id: number) => {
    await prisma.course.delete({
      where: { id }
    });
  }
}

export default DeleteCourseUseCase;