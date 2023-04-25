// Dependencies
import { PrismaClient } from "@prisma/client";

// Interfaces
import ProfessorInterface from "../../../../models/professors";

const prisma = new PrismaClient();

class UpdateProfessorUseCase {
	execute = async (id: string, professor: ProfessorInterface) => {
		await prisma.professors.update({
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