// Dependencies
import { Request, Response } from "express";

// UseCases
import DeleteCourseUseCase from "./DeleteCourseUseCase.js";

class DeleteCourseController {
	handler = async (req: Request, res: Response) => {
		const deleteCourseUseCase = new DeleteCourseUseCase();
		await deleteCourseUseCase.execute(req.params.id);

		res.sendStatus(204);
	}
}

export default DeleteCourseController;