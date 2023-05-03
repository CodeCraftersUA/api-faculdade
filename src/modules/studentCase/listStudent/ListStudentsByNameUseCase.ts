// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetStudentsByNameUseCase {
	execute = async (
		{
			name,
		}: {
			name?: string,
		}
	) => {
		const student = await prisma.student.findMany({
			where: {
				name: {
					contains: name,
					mode: "insensitive"
				}
			}
		});

		return student;
	};
}

export default GetStudentsByNameUseCase;