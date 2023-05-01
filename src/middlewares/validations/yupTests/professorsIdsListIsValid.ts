// Dependencies
import { PrismaClient } from "@prisma/client";

// Helpers
import containsDuplicates from "../../../helpers/containsDuplicates.js";

const prisma = new PrismaClient();

const professorsIdsListIsValid = async (professorsIds: string[]): Promise<boolean> => {
	if (containsDuplicates(professorsIds))
		return false;

	const queryResult = await prisma.professor.count({
		where: {
			id: { in: professorsIds }
		}
	});

	if (queryResult === professorsIds.length)
		return true;

	return false;
};

export default professorsIdsListIsValid;