// Dependencies
import { PrismaClient } from "@prisma/client";

// DTOS
import GetClassroomsDTO from "../../dtos/IGetClassroomsDTO.js";

const prisma = new PrismaClient();
const getClassroomsDTO = new GetClassroomsDTO();

class ListClassroomsUseCase {
	execute = async () => {
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
		});

		return classrooms.map(classroom => getClassroomsDTO.execute(classroom));
	};
}

export default ListClassroomsUseCase;