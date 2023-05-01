
// Dependencies
import { Request, Response } from "express";

// UseCases
import ListProfessorUseCase from "./ListProfessorUseCase.js";

class ListProfessorController {
	handler = async (req: Request, res: Response) => {
		const listProfessorUseCase = new ListProfessorUseCase();
		const professors = await listProfessorUseCase.execute();

		res.status(200).json(professors);
	};
}

export default ListProfessorController;