// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const studentExists = async (studentId: string): Promise<boolean> => {
	const queryResult = await prisma.student.count({
		where: {
			id: studentId
		}
	});

	if (queryResult)
		return true;

	return false;
};

export default studentExists;