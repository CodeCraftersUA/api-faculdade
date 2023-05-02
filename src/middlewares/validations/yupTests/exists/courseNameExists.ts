// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const courseNameExists = async (courseName: string): Promise<boolean> => {
	const queryResult = await prisma.course.count({
		where: {
			name: courseName
		}
	});

	if (queryResult)
		return true;

	return false;
};

export default courseNameExists;