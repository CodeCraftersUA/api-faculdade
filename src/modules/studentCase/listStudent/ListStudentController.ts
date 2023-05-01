// Dependencias
import { Request, Response } from "express";

// UseCases
import ListStudentUseCase from "./ListStudentUseCase.js";
import ListStudentsByNameUseCase from "./ListStudentsByNameUseCase.js";

class ListStudentController {
	handler = async (req: Request, res: Response) => {

		const listStudentUseCase = new ListStudentUseCase();
		const listStudentsByNameUseCase = new ListStudentsByNameUseCase();

		const queryName = typeof req.query.name === "string" ? req.query.name : undefined;

		if (req.query.name){
			const student = await listStudentsByNameUseCase.execute({
				name: queryName?.toUpperCase()
			});
			return res.status(200).json(student);
		}

		const students = await listStudentUseCase.execute();
		res.status(200).json(students);
	};
}

export default ListStudentController;