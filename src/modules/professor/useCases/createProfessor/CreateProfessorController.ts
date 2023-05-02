// Dependencies
import { Request, Response } from "express";

// UseCases
import CreateProfessorUseCase from "./CreateProfessorUseCase.ts";

class CreateProfessorController {
	handler = async (req: Request, res: Response) => {
		const createProfessorUseCase = new CreateProfessorUseCase();
		await createProfessorUseCase.execute(req.body);

		res.sendStatus(201);
	};
}

export default CreateProfessorController;