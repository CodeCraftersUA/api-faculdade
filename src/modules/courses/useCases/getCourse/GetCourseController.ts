// Dependencies
import { Request, Response } from "express";

// UseCases
import GetCourseUseCase from "./GetCourseUseCase.js";

class GetCoursesController {
	handler = async (req: Request, res: Response) => {
		const getCourseUseCase = new GetCourseUseCase();
		const course = await getCourseUseCase.execute(req.params.id);

		res.status(200).json(course);
	}
}

export default GetCoursesController;