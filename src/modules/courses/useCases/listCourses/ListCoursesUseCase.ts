// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListCoursesUseCase {
	execute = async () => {
		const courses = await prisma.course.findMany();
		return courses;
	};
}

export default ListCoursesUseCase;