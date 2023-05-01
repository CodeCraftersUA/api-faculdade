// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListProfessorUseCase {
	execute = async () => {
		const professors = await prisma.professors.findMany();
		return professors;
	};
}

export default ListProfessorUseCase;