// Dependencies
import { Request, Response } from "express";

// UseCases
import DeleteProfessorUseCase from "./DeleteProfessorUseCase.ts";

class DeleteProfessorController {
	handler = async (req: Request, res: Response) => {
		const deleteProfessorUseCase = new DeleteProfessorUseCase();
		await deleteProfessorUseCase.execute(req.params.id);

		res.sendStatus(204);
	};
}

export default DeleteProfessorController;