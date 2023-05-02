// Dependencies
import { PrismaClient } from "@prisma/client";

// Error
import AppError from "../../../../errors/AppError.ts";
import GetClassroomsDTO from "../../dtos/IGetClassroomsDTO.ts";

const prisma = new PrismaClient();
const getClassroomsDTO = new GetClassroomsDTO();

class GetClassroomUseCase {
	execute = async (id: string) => {
		const course = await prisma.classroom.findFirst({
			where: { id },
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

		if (course) return getClassroomsDTO.execute(course);
		throw new AppError("Course ID not found", 404);
	};
}

export default GetClassroomUseCase;