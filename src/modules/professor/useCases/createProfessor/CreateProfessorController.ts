// Dependencies
import { Request, Response } from "express";

// UseCases
import CreateProfessorUseCase from "./CreateProfessorUseCase.ts";

class CreateProfessorController {
	handler = async (req: Request, res: Response) => {
		const createProfessorUseCase = new CreateProfessorUseCase();
		const newProfessor = await createProfessorUseCase.execute(req.body);

		res.status(201).json(newProfessor);
	};
}

export default CreateProfessorController;