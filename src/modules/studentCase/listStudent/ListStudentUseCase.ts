import { PrismaClient } from "@prisma/client";
import formatBigInt from "../../../helpers/formatBigInt";

const prisma = new PrismaClient();

class ListStudentUseCase {
	execute = async () => {
		const students = await prisma.student.findMany();
		return formatBigInt(students);
	};
}

export default ListStudentUseCase;