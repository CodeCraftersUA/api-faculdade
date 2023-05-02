// Dependencies
import { PrismaClient } from "@prisma/client";

// DTOS
import GetClassroomsDTO from "../../dtos/IGetClassroomsDTO.ts";

const prisma = new PrismaClient();

const getClassroomsDTO = new GetClassroomsDTO();

class GetCoursesByParamsUseCase {
	execute = async (
		{
			year,
			semester
		}: {
			year?: number,
			semester?: number
		}
	) => {
		const classrooms = await prisma.classroom.findMany({
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
			where: {
				year,
				semester,
			}
		});

		return classrooms.map(classroom => getClassroomsDTO.execute(classroom));
	};
}

export default GetCoursesByParamsUseCase;