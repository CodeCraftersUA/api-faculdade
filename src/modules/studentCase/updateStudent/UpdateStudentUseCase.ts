import { PrismaClient } from "@prisma/client";
import StudentInterface from "../../../models/student.ts";

const prisma = new PrismaClient();

class UpdateStudentUseCase {
	execute = async (id: string, student: StudentInterface) => {
		await prisma.student.update({
			where: { id },
			data: {
				name: student.name,
				age: student.age,
				address: student.address
			}
		});
	};
}

export default UpdateStudentUseCase;