// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListProfessorUseCase {
	execute = async () => {
		const professors = await prisma.professor.findMany();
		return professors;
	};
}

export default ListProfessorUseCase;