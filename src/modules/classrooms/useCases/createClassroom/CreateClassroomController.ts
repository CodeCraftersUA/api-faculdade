// Dependencies
import { Request, Response } from "express";

// UseCases
import CreateClassroomUseCase from "./CreateClassroomUseCase.ts";

class CreateClassroomController {
	handler = async (req: Request, res: Response): Promise<void> => {
		const createClassroomUseCase = new CreateClassroomUseCase();
		const newClassroom = await createClassroomUseCase.execute(req.body);

		res.status(201).json(newClassroom);
	};
}

export default CreateClassroomController;