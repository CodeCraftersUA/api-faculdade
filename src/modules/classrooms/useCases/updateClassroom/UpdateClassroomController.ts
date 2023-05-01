// Dependencies
import { Request, Response } from "express";

// UseCases
import UpdateClassroomUseCase from "./UpdateClassroomUseCase.js";

class UpdateClassroomController {
	handler = async (req: Request, res: Response) => {
		const updateClassroomUseCase = new UpdateClassroomUseCase();
		await updateClassroomUseCase.execute(req.params.id, req.body);

		res.sendStatus(200);
	};
}

export default UpdateClassroomController;