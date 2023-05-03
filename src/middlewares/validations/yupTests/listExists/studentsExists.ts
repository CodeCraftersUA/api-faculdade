// Dependencies
import { PrismaClient } from "@prisma/client";

// Helpers
import containsDuplicates from "../../../../helpers/containsDuplicates.ts";

const prisma = new PrismaClient();

const studentsIdsListIsValid = async (studentsIds: string[]): Promise<boolean> => {
	if (containsDuplicates(studentsIds))
		return false;

	const queryResult = await prisma.student.count({
		where: {
			id: { in: studentsIds }
		}
	});

	if (queryResult === studentsIds.length)
		return true;

	return false;
};

export default studentsIdsListIsValid;