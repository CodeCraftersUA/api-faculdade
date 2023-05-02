// Dependencies
import { Request, Response } from "express";

// UseCases
import ListClassroomsUseCase from "./ListClassroomsUseCase.ts";
import ListClassroomsByParamsUseCase from "./ListClassroomsByParamsUseCase.ts";

class ListCoursesController {
	handler = async (req: Request, res: Response) => {
		const listClassroomsUseCase = new ListClassroomsUseCase();
		const listClassroomsByParamsUseCase = new ListClassroomsByParamsUseCase();

		const queryYear = typeof req.query.year === "string" ? parseInt(req.query.year) : undefined;
		const querySemester = typeof req.query.semester === "string" ? parseInt(req.query.semester) : undefined;

		if (queryYear || querySemester) {
			const classrooms = await listClassroomsByParamsUseCase.execute({
				year: queryYear,
				semester: querySemester
			});

			return res.status(200).json(classrooms);
		}

		const courses = await listClassroomsUseCase.execute();
		res.status(200).json(courses);
	};
}

export default ListCoursesController;