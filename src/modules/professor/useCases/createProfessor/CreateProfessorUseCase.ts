// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import { KEY_ALREADY_EXISTS } from "../../../../errors/prismaErrorsCodes.ts";

// Helpers
import generateUniqueId from "../../../../helpers/generateUniqueId.ts";

// Interfaces
import AppError from "../../../../errors/AppError.ts";
import ProfessorInterface from "../../../../models/Professor.ts";

const prisma = new PrismaClient();

class CreateProfessorUseCase {
	execute = async (professor: ProfessorInterface) => {
		try {
			const newProfessor = await prisma.professor.create({
				data: {
					id: generateUniqueId(),
					name: professor.name,
					address: professor.address,
					specialty: professor.specialty
				}
			});

			return newProfessor;
		} catch (err) {
			if (err.code === KEY_ALREADY_EXISTS)
				throw new AppError(`Attribute ${err.meta.target} already exists`, 400);

			throw err;
		}
	};
}

export default CreateProfessorUseCase;