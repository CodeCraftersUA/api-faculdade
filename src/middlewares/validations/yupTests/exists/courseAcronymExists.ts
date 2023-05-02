// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const courseAcronymExists = async (courseAcronym: string): Promise<boolean> => {
	const queryResult = await prisma.course.count({
		where: {
			acronym: courseAcronym
		}
	});

	if (queryResult)
		return true;

	return false;
};

export default courseAcronymExists;