// Dependencies
import { PrismaClient } from "@prisma/client";

// Helpers
import formatBigInt from "../../../../helpers/formatBigInt.js";

const prisma = new PrismaClient();

class ListCoursesUseCase {
	execute = async () => {
		const courses = await prisma.course.findMany();
		return formatBigInt(courses);
	};
}

export default ListCoursesUseCase;