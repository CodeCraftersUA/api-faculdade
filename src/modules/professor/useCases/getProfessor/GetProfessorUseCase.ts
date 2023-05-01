// Dependencies
import { PrismaClient } from "@prisma/client";

// Error
import AppError from "../../../../errors/AppError.js";

// Helpers
import formatBigInt from "../../../../helpers/formatBigInt.js";

const prisma = new PrismaClient();

class GetProfessorUseCase {
	execute = async (id: string) => {
		const professor = await prisma.professors.findFirst({
			where: { id }
		});

		if (professor) return formatBigInt(professor);
		throw new AppError("Professor ID not found", 404);
	};
}

export default GetProfessorUseCase;