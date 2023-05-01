// Dependencies
import { Request, Response } from "express";

// UseCases
import DeleteClassroomUseCase from "./DeleteClassroomUseCase.js";

class DeleteClassroomController {
	handler = async (req: Request, res: Response) => {
		const deleteClassroomUseCase = new DeleteClassroomUseCase();
		await deleteClassroomUseCase.execute(req.params.id);

		res.sendStatus(204);
	};
}

export default DeleteClassroomController;