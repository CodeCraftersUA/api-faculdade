// Dependencies
import { PrismaClient } from "@prisma/client";

// Error
import AppError from "../../../../errors/AppError.ts";

const prisma = new PrismaClient();

class GetCoursesUseCase {
	execute = async (id: string) => {
		const course = await prisma.course.findFirst({
			where: { id }
		});

		if (course) return course;
		throw new AppError("Course ID not found", 404);
	};
}

export default GetCoursesUseCase;