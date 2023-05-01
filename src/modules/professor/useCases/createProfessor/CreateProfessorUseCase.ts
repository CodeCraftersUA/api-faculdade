// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import { KEY_ALREADY_EXISTS } from "../../../../errors/prismaErrorsCodes.js";

// Helpers
import generateUniqueId from "../../../../helpers/generateUniqueId.js";

// Interfaces
import AppError from "../../../../errors/AppError.js";
import ProfessorInterface from "../../../../models/professors.js";

const prisma = new PrismaClient();

class CreateProfessorUseCase {
	execute = async (professor: ProfessorInterface) => {
		try {
			await prisma.professors.create({
				data: {
					id: generateUniqueId(),
					name: professor.name,
					address: professor.address,
					specialty: professor.specialty
				}
			});
		} catch (err) {
			if (err.code === KEY_ALREADY_EXISTS)
				throw new AppError(`Attribute ${err.meta.target} already exists`, 400);

			throw err;
		}
	};
}

export default CreateProfessorUseCase;