import { PrismaClient } from "@prisma/client";

import AppError from "../../../errors/AppError.ts";
import StudentInterface from "../../../models/Student.ts";
import generateUniqueId from "../../../helpers/generateUniqueId.ts";
import { KEY_ALREADY_EXISTS } from "../../../errors/prismaErrorsCodes.ts";

const prisma = new PrismaClient();

class CreateStudentUseCase {
	execute = async (student: StudentInterface) => {
		try {
			const newStudent = await prisma.student.create({
				data: {
					id: generateUniqueId(),
					name: student.name,
					age: student.age,
					address: student.address
				}
			});

			return newStudent;
		} catch (err) {
			if (err.code === KEY_ALREADY_EXISTS)
				throw new AppError(`Attribute ${err.meta.target} already exists`, 400);

			throw err;
		}
	};
}

export default CreateStudentUseCase;