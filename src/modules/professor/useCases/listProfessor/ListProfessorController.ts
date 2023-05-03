
// Dependencies
import { Request, Response } from "express";

// UseCases
import ListProfessorUseCase from "./ListProfessorUseCase.ts";
import ListProfessorsByNameOrSpecialtyUseCase from "./ListProfessorsByNameOrSpecialtyUseCase.ts";

class ListProfessorController {
	handler = async (req: Request, res: Response) => {
		const listProfessorUseCase = new ListProfessorUseCase();
		const listProfessorsByNameOrSpecialtyUseCase = new ListProfessorsByNameOrSpecialtyUseCase();

		const queryName = typeof req.query.name === "string" ? req.query.name : undefined;
		const querySpecialty = typeof req.query.specialty === "string" ? req.query.specialty : undefined;

		if (req.query.name || req.query.specialty) {
			const professor = await listProfessorsByNameOrSpecialtyUseCase.execute({
				name: queryName?.toUpperCase(),
				specialty: querySpecialty?.toUpperCase()
			});
			return res.status(200).json(professor);
		}

		const professors = await listProfessorUseCase.execute();
		res.status(200).json(professors);
	};
}

export default ListProfessorController;