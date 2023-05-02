// Dependencies
import { Request, Response } from "express";

// UseCases
import ListProfessorsByCourseUseCase from "./ListProfessorsByCourseUseCase.ts";

class ListStudentsByCourseController {
	handler = async (req: Request, res: Response) => {
		const listProfessorsByCourseUseCase = new ListProfessorsByCourseUseCase();

		const students = await listProfessorsByCourseUseCase.execute(req.params.id);
		res.status(200).json(students);
	};
}

export default ListStudentsByCourseController;