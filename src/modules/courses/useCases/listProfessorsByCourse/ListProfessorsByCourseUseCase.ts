// Dependencies
import { PrismaClient } from "@prisma/client";

// Interfaces
import { GetProfessorInterface } from "../../../../models/Professor.ts";

const prisma = new PrismaClient();

class ListProfessorsByCourseUseCase {
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
				professors: {
					select: {
						professor: {
							select: {
								id: true,
								name: true,
								specialty: true,
								address: true
							}
						}
					}
				}
			}
		});

		const professors = result.map(professor => professor.professors.map(professor => professor.professor)).flat();

		const uniqueProfessors = professors.reduce((accumulator: GetProfessorInterface[], current) => {
			if (!accumulator.find(student => student.id === current.id))
				accumulator.push(current);

			return accumulator;
		}, []);

		return uniqueProfessors;
	};
}

export default ListProfessorsByCourseUseCase;