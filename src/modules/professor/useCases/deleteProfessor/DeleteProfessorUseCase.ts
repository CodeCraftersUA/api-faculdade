// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import AppError from "../../../../errors/AppError.js";
import { RECORD_TO_DELETE_DOES_NOT_EXIST } from "../../../../errors/prismaErrorsCodes.js";

const prisma = new PrismaClient();

class DeleteProfessorUseCase {
	execute = async (id: string) => {
		try {
			await prisma.professor.delete({
				where: { id }
			});
		} catch (err) {
			if (err.code === RECORD_TO_DELETE_DOES_NOT_EXIST)
				throw new AppError("Professor does not exist", 404);

			throw err;
		}
	};
}

export default DeleteProfessorUseCase;