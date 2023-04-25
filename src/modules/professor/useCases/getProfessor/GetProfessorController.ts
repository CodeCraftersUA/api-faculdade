// Dependencies
import { Request, Response } from "express";

// UseCases
import GetProfessorUseCase from "./GetProfessorUseCase";

class GetProfessorController {
	handler = async (req: Request, res: Response) => {
		const getProfessorUseCase = new GetProfessorUseCase();
		const course = await getProfessorUseCase.execute(req.params.id);

		res.status(200).json(course);
	};
}

export default GetProfessorController;