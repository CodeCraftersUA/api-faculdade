// Dependencies
import { Request, Response } from "express";

// UseCases
import ListClassroomsUseCase from "./ListClassroomsUseCase.js";

class ListCoursesController {
	handler = async (req: Request, res: Response) => {
		const listClassroomsUseCase = new ListClassroomsUseCase();

		const courses = await listClassroomsUseCase.execute();
		res.status(200).json(courses);
	};
}

export default ListCoursesController;