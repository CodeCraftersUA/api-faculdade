// Dependencies
import { Request, Response } from "express";

// UseCases
import CreateCourseUseCase from "./CreateCourseUseCase.ts";

class CreateCourseController {
	handler = async (req: Request, res: Response) => {
		const createCourseUseCase = new CreateCourseUseCase();
		await createCourseUseCase.execute(req.body);

		res.sendStatus(201);
	};
}

export default CreateCourseController;