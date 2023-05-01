// Dependencies
import { PrismaClient } from "@prisma/client";

// Helpers
import formatBigInt from "../../../../helpers/formatBigInt.js";

const prisma = new PrismaClient();

class ListProfessorUseCase {
	execute = async () => {
		const professors = await prisma.professors.findMany();
		return formatBigInt(professors);
	};
}

export default ListProfessorUseCase;