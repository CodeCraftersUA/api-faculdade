// Dependencies
import { Request, Response } from "express";

// UseCases
import UpdateProfessorUseCase from "./UpdateProfessorUseCase.ts";

class UpdateProfessorController {
	handler = async (req: Request, res: Response) => {
		const updateProfessorUseCase = new UpdateProfessorUseCase();
		const updatedProfessor = await updateProfessorUseCase.execute(req.params.id, req.body);

		res.status(200).json(updatedProfessor);
	};
}

export default UpdateProfessorController;