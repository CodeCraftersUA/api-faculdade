// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetCoursesByParamsUseCase {
	execute = async (
		{
			name,
			acronym
		}: {
			name?: string,
			acronym?: string
		}
	) => {
		const course = await prisma.course.findMany({
			where: {
				name: {
					contains: name,
					mode: "insensitive"
				},
				acronym,
			}
		});

		return course;
	};
}

export default GetCoursesByParamsUseCase;