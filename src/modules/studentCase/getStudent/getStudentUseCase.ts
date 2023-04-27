import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetStudentUseCase {
	execute = async (id: string) => {
		const student = await prisma.student.findFirst({
			where: { id }
		});

		if (student) return formatBigInt(student);
		throw new AppError("student ID not found", 404);
	};
}

export default GetStudentUseCase;