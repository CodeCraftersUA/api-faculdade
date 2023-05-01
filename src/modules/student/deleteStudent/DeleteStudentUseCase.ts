import { PrismaClient } from "@prisma/client";

import AppError from "../../../errors/AppError.js";
import { RECORD_TO_DELETE_DOES_NOT_EXIST } from "../../../errors/prismaErrorsCodes.js";

const prisma = new PrismaClient();

class DeleteStudentUseCase {
	execute = async (id: string) => {
		try {
			await prisma.$transaction(async (prisma) => {
				const classrooms = await prisma.classroom.findMany({
					where: {
						students: {
							some: {
								studentId: id
							}
						}
					},
					select: {
						id: true,
						students: {
							select: {
								studentId: true
							}
						}
					}
				});

				// Filters all classrooms where student that will be deleted is the only one
				const classroomsToDelete = classrooms.filter(classroom => classroom.students.length === 1).map(classroom => classroom.id);

				// Deletes classroomsToDelete relations with professors 
				await prisma.professorsOnClassrooms.deleteMany({
					where: {
						classroomId: { in: classroomsToDelete }
					}
				});

				// Deletes classroomsToDelete relations with students 
				await prisma.studentsOnClassrooms.deleteMany({
					where: {
						classroomId: { in: classroomsToDelete }
					}
				});

				// Deletes all classroomsToDelete
				await prisma.classroom.deleteMany({
					where: {
						id: {
							in: classroomsToDelete
						}
					}
				});

				// Deletes professor
				await prisma.student.delete({
					where: { id },
					include: {
						classrooms: true
					}
				});
			});
		} catch (err) {
			if (err.code === RECORD_TO_DELETE_DOES_NOT_EXIST)
				throw new AppError("student does not exist", 404);

			throw err;
		}
	};
}

export default DeleteStudentUseCase;