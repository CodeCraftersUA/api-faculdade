// Interfaces
import ProfessorInterface from "./professors";
import StudentInterface from "./students";
import CourseInterface from "./students";

export default interface Classroom {
	id: string,
	semester: number,
	year: number,
	professors: ProfessorInterface[],
	students: StudentInterface[],
	course: CourseInterface

	// eslint-disable-next-line semi
}

interface CreateClassroomInterface {
	semester: number,
	year: number,
	professors: string[],
	students: string[],
	courseId: string
}

interface ListClassroomsInterface {
	id: string,
	semester: number,
	year: number,
	course: {
		id: string,
		name: string,
		acronym: string
	},
	professors: {
		id: string,
		name: string
	}[],
	students: {
		id: string,
		name: string
	}[],
}

export { CreateClassroomInterface, ListClassroomsInterface };
