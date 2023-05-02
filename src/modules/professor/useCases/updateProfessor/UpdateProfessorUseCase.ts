// Dependencies
import { PrismaClient } from "@prisma/client";

// Interfaces
import ProfessorInterface from "../../../../models/Professor.js";

const prisma = new PrismaClient();

class UpdateProfessorUseCase {
	execute = async (id: string, professor: ProfessorInterface) => {
		await prisma.professor.update({
			where: { id },
			data: {
				name: professor.name,
				address: professor.address,
				specialty: professor.specialty
			}
		});
	};
}

export default UpdateProfessorUseCase;