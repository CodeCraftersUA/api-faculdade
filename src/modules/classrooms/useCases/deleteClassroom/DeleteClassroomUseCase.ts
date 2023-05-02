// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import AppError from "../../../../errors/AppError.ts";
import { RECORD_TO_DELETE_DOES_NOT_EXIST } from "../../../../errors/prismaErrorsCodes.ts";

const prisma = new PrismaClient();

class DeleteClassroomUseCase {
	execute = async (id: string) => {
		try {
			await prisma.professorsOnClassrooms.deleteMany({
				where: { classroomId: id }
			});

			await prisma.studentsOnClassrooms.deleteMany({
				where: { classroomId: id }
			});

			await prisma.classroom.delete({
				where: { id },
				include: {
					professors: true,
					students: true
				}
			});
		} catch (err) {
			if (err.code === RECORD_TO_DELETE_DOES_NOT_EXIST)
				throw new AppError("Classroom does not exist", 404);

			throw err;
		}
	};
}

export default DeleteClassroomUseCase;