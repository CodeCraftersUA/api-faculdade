// Dependencies
import { PrismaClient } from "@prisma/client";

// Interfaces
import { ListStudentsInterface } from "../../../../models/Student.ts";

const prisma = new PrismaClient();

class ListStudentsByCourseUseCase {
	execute = async (courseId: string) => {
		const result = await prisma.classroom.findMany({
			where: {
				course: {
					id: {
						equals: courseId
					}
				}
			},
			select: {
				students: {
					select: {
						student: {
							select: {
								id: true,
								name: true,
								age: true,
								address: true
							}
						}
					}
				}
			}
		});

		const students = result.map(student => student.students.map(student => student.student)).flat();

		const uniqueStudents = students.reduce((accumulator: ListStudentsInterface[], current) => {
			if (!accumulator.find(student => student.id === current.id))
				accumulator.push(current);

			return accumulator;
		}, []);

		return uniqueStudents;
	};
}

export default ListStudentsByCourseUseCase;