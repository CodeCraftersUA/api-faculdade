import { ListClassroomsInterface } from "../../../models/Classroom";

interface UnformatedClassroomInterface {
	id: string,
	semester: number,
	year: number,
	courseId: string,
	course: {
		id: string,
		name: string,
		acronym: string
	},
	professors: {
		professor: {
			id: string,
			name: string
		}
	}[],
	students: {
		student: {
			id: string,
			name: string
		}
	}[],
}

class GetClassroomsDTO {
	execute = (unformatedClassroom: UnformatedClassroomInterface): ListClassroomsInterface => {
		const formattedProfessors = unformatedClassroom.professors.map(professor => ({
			id: professor.professor.id,
			name: professor.professor.name
		}));

		const formattedStudents = unformatedClassroom.students.map(student => ({
			id: student.student.id,
			name: student.student.name
		}));

		return {
			id: unformatedClassroom.id,
			semester: unformatedClassroom.semester,
			year: unformatedClassroom.year,
			course: {
				id: unformatedClassroom.course.id,
				name: unformatedClassroom.course.name,
				acronym: unformatedClassroom.course.acronym
			},
			professors: formattedProfessors,
			students: formattedStudents
		};
	};
}

export default GetClassroomsDTO;