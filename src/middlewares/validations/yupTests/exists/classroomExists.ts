// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const classroomExists = async (classroomId: string): Promise<boolean> => {
	const queryResult = await prisma.classroom.count({
		where: {
			id: classroomId
		}
	});

	if (queryResult)
		return true;

	return false;
};

export default classroomExists;