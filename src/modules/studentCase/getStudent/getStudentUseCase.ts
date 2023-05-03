import { PrismaClient } from "@prisma/client";
import AppError from "../../../errors/AppError.ts";

const prisma = new PrismaClient();

class GetStudentUseCase {
	execute = async (id: string) => {
		const student = await prisma.student.findFirst({
			where: { id }
		});

		if (student) return student;
		throw new AppError("student ID not found", 404);
	};
}

export default GetStudentUseCase;