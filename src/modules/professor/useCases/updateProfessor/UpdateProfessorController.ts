// Dependencies
import { Request, Response } from "express";

// UseCases
import UpdateProfessorUseCase from "./UpdateProfessorUseCase.ts";

class UpdateProfessorController {
	handler = async (req: Request, res: Response) => {
		const updateProfessorUseCase = new UpdateProfessorUseCase();
		await updateProfessorUseCase.execute(req.params.id, req.body);

		res.sendStatus(200);
	};
}

export default UpdateProfessorController;