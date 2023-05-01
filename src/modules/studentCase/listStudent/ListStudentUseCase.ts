import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListStudentUseCase {
	execute = async () => {
		const students = await prisma.student.findMany();
		return students;
	};
}

export default ListStudentUseCase;