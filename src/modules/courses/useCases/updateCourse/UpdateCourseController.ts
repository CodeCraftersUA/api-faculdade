// Dependencies
import { Request, Response } from "express";

// UseCases
import UpdateCourseUseCase from "./UpdateCourseUseCase.js";

class UpdateCourseController {
	handler = async (req: Request, res: Response) => {
		const updateCourseUseCase = new UpdateCourseUseCase();
		await updateCourseUseCase.execute(req.params.id, req.body);

		res.sendStatus(200);
	};
}

export default UpdateCourseController;