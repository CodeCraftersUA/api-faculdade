// Dependencies
import { Request, Response } from "express";

// UseCases
import CreateClassroomUseCase from "./CreateClassroomUseCase.js";

class CreateClassroomController {
	handler = async (req: Request, res: Response): Promise<void> => {
		const createClassroomUseCase = new CreateClassroomUseCase();
		await createClassroomUseCase.execute(req.body);

		res.sendStatus(201);
	};
}

export default CreateClassroomController;