// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const courseIdExists = async (courseId: string): Promise<boolean> => {
	const queryResult = await prisma.course.count({
		where: {
			id: courseId
		}
	});

	if (queryResult)
		return true;

	return false;
};

export default courseIdExists;