// Dependencies
import { PrismaClient } from "@prisma/client";

// Interfaces
import { UpdadateClassroomInterface } from "../../../../models/Classroom.js";


const prisma = new PrismaClient();

class UpdateClassroomUseCase {
	execute = async (id: string, classroom: UpdadateClassroomInterface) => {
		await prisma.$transaction(async (prisma) => {
			// Remove todos os professores da sala de aula
			await prisma.professorsOnClassrooms.deleteMany({
				where: { classroomId: id }
			});

			// Adiciona os novos professores à sala de aula
			const professors = classroom.professors.map((professorId) => ({
				professor: { connect: { id: professorId } }
			}));

			// Remove todos os professores da sala de aula
			await prisma.studentsOnClassrooms.deleteMany({
				where: { classroomId: id }
			});

			// Adiciona os novos professores à sala de aula
			const students = classroom.students.map((studentId) => ({
				student: { connect: { id: studentId } }
			}));

			await prisma.classroom.update({
				where: { id },
				data: {
					semester: classroom.semester,
					year: classroom.year,
					course: { connect: { id: classroom.courseId } },
					professors: { create: professors },
					students: { create: students }
				}
			});
		});
	};
}

export default UpdateClassroomUseCase;