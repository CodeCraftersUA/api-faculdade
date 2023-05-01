// Dependencies
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetProfessorsByNameOrSpecialtyUseCase {
	execute = async (
		{
			name,
			specialty
		}: {
			name?: string,
			specialty?: string
		}
	) => {
		const professor = await prisma.professor.findMany({
			where: {
				name: {
					contains: name,
					mode: "insensitive"
				},
				specialty: {
					contains: specialty,
					mode: "insensitive"
				}
			}
		});

		return professor;
	};
}

export default GetProfessorsByNameOrSpecialtyUseCase;