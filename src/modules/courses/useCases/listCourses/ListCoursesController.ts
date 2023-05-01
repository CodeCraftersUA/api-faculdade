// Dependencies
import { Request, Response } from "express";

// UseCases
import ListCoursesUseCase from "./ListCoursesUseCase.js";
import ListCoursesByParamsUseCase from "./ListCoursesByParamsUseCase.js";

class ListCoursesController {
	handler = async (req: Request, res: Response) => {
		const listCoursesUseCase = new ListCoursesUseCase();
		const listCoursesByParamsUseCase = new ListCoursesByParamsUseCase();

		const queryName = typeof req.query.name === "string" ? req.query.name : undefined;
		const queryAcronym = typeof req.query.acronym === "string" ? req.query.acronym : undefined;

		if (req.query.name || req.query.acronym) {
			const course = await listCoursesByParamsUseCase.execute({
				name: queryName?.toUpperCase(),
				acronym: queryAcronym?.toLocaleUpperCase()
			});

			return res.status(200).json(course);
		}

		const courses = await listCoursesUseCase.execute();
		res.status(200).json(courses);
	};
}

export default ListCoursesController;