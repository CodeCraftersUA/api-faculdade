// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import { KEY_ALREADY_EXISTS } from "../../../../errors/prismaErrorsCodes.ts";

// Helpers
import generateUniqueId from "../../../../helpers/generateUniqueId.ts";

// Interfaces
import AppError from "../../../../errors/AppError.ts";
import { CreateClassroomInterface } from "../../../../models/Classroom.ts";

// DTOS
import GetClassroomsDTO from "../../dtos/IGetClassroomsDTO.ts";

const getClassroomsDTO = new GetClassroomsDTO();

const prisma = new PrismaClient();

class CreateClassroomUseCase {
	execute = async (classroom: CreateClassroomInterface) => {
		try {
			const newClassroom = await prisma.classroom.create({
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
				},
				include: {
					course: {
						select: {
							id: true,
							name: true,
							acronym: true
						}
					},
					professors: {
						select: {
							professor: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
					students: {
						select: {
							student: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
			});

			return getClassroomsDTO.execute(newClassroom);
		} catch (err) {
			if (err.code === KEY_ALREADY_EXISTS)
				throw new AppError(`Attribute ${err.meta.target} already exists`, 400);

			throw err;
		}
	};
}

export default CreateClassroomUseCase;