import { PrismaClient } from "@prisma/client";

// Interface
import StudentInterface from "../../../models/student";

const prisma = new PrismaClient();

class CreateStudentUseCase {
	execute = async (student: StudentInterface) => {
		try {
			await prisma.student.create({
				data: {
					id: generateUniqueId(),
					name: student.name,
					age: student.age,
					address: student.address
				}
			});
		} catch (err) {
			if (err.code === KEY_ALREADY_EXISTS)
				throw new AppError(`Attribute ${err.meta.target} already exists`, 400);

			throw err;
		}
	};
}

export default CreateStudentUseCase;