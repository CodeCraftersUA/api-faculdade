// Dependencies
import { PrismaClient } from "@prisma/client";

// Interfaces
import ProfessorInterface from "../../../../models/Professor.ts";

const prisma = new PrismaClient();

class UpdateProfessorUseCase {
	execute = async (id: string, professor: ProfessorInterface) => {
		const updatedProfessor = await prisma.professor.update({
			where: { id },
			data: {
				name: professor.name,
				address: professor.address,
				specialty: professor.specialty
			}
		});

		return updatedProfessor;
	};
}

export default UpdateProfessorUseCase;