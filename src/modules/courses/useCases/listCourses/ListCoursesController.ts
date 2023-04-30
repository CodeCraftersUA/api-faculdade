// Dependencies
import { Request, Response } from "express";

// UseCases
import ListCoursesUseCase from "./ListCoursesUseCase.js";

class ListCoursesController {
	handler = async (req: Request, res: Response) => {
		const listCoursesUseCase = new ListCoursesUseCase();
		const courses = await listCoursesUseCase.execute();

		res.status(200).json(courses);
	};
}

export default ListCoursesController;