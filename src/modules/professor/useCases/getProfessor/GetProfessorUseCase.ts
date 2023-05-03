// Dependencies
import { PrismaClient } from "@prisma/client";

// Error
import AppError from "../../../../errors/AppError.ts";


const prisma = new PrismaClient();

class GetProfessorUseCase {
	execute = async (id: string) => {
		const professor = await prisma.professor.findFirst({
			where: { id }
		});

		if (professor) return professor;
		throw new AppError("Professor ID not found", 404);
	};
}

export default GetProfessorUseCase;