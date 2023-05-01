// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import AppError from "../../../../errors/AppError.js";
import { RECORD_TO_DELETE_DOES_NOT_EXIST } from "../../../../errors/prismaErrorsCodes.js";

const prisma = new PrismaClient();

class DeleteCourseUseCase {
	private findCourse = async (id: string) => {
		try {
			// Fetch the course, including classrooms, professors, and students
			const course = await prisma.course.findUniqueOrThrow({
				where: { id },
				include: {
					classrooms: {
						include: {
							professors: {
								include: {
									professor: true
								}
							},
							students: {
								include: {
									student: true
								}
							}
						}
					}
				}
			});

			return course;
		} catch (err) {
			if (err.code === RECORD_TO_DELETE_DOES_NOT_EXIST)
				throw new AppError("Course does not exist", 404);

			throw err;
		}
	};

	execute = async (id: string) => {
		await prisma.$transaction(async (prisma) => {
			const course = await this.findCourse(id);

			// Delete all classrooms, professors, and students related to course
			for (const classroom of course.classrooms) {
				await prisma.studentsOnClassrooms.deleteMany({
					where: { classroomId: classroom.id }
				});

				await prisma.professorsOnClassrooms.deleteMany({
					where: { classroomId: classroom.id }
				});

				await prisma.classroom.delete({
					where: { id: classroom.id }
				});
			}

			// Delete the course
			await prisma.course.delete({
				where: { id }
			});
		});
	};
}

export default DeleteCourseUseCase;