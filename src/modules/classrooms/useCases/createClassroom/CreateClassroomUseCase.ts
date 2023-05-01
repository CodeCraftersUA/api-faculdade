// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import { KEY_ALREADY_EXISTS } from "../../../../errors/prismaErrorsCodes.js";

// Helpers
import generateUniqueId from "../../../../helpers/generateUniqueId.js";

// Interfaces
import AppError from "../../../../errors/AppError.js";
import { CreateClassroomInterface } from "../../../../models/Classroom.js";

const prisma = new PrismaClient();

class CreateClassroomUseCase {
	execute = async (classroom: CreateClassroomInterface): Promise<void> => {
		try {
			await prisma.classroom.create({
				data: {
					id: generateUniqueId(),
					semester: classroom.semester,
					year: classroom.year,
					courseId: classroom.courseId,
					professors: {
						create: [
							...classroom.professors.map(professorId => ({ professorId }))
						]
					},
					students: {
						create: [
							...classroom.students.map(studentId => ({ studentId }))
						]
					}
				}
			});
		} catch (err) {
			if (err.code === KEY_ALREADY_EXISTS)
				throw new AppError(`Attribute ${err.meta.target} already exists`, 400);

			throw err;
		}
	};
}

export default CreateClassroomUseCase;