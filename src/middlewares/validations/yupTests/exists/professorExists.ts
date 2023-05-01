// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const professorExists = async (professorId: string): Promise<boolean> => {
	const queryResult = await prisma.student.count({
		where: {
			id: professorId
		}
	});

	if (queryResult)
		return true;

	return false;
};

export default professorExists;