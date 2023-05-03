// Dependencies
import { Request, Response } from "express";

// UseCases
import CreateCourseUseCase from "./CreateCourseUseCase.ts";

class CreateCourseController {
	handler = async (req: Request, res: Response) => {
		const createCourseUseCase = new CreateCourseUseCase();
		const newCourse = await createCourseUseCase.execute(req.body);

		res.status(201).json(newCourse);
	};
}

export default CreateCourseController;