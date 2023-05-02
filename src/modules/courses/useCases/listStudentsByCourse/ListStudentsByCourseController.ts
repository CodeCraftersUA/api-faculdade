// Dependencies
import { Request, Response } from "express";

// UseCases
import ListCourseStudentsUseCase from "./ListStudentsByCourseUseCase.ts";

class ListStudentsByCourseController {
	handler = async (req: Request, res: Response) => {
		const listCourseStudentsUseCase = new ListCourseStudentsUseCase();

		const students = await listCourseStudentsUseCase.execute(req.params.id);
		res.status(200).json(students);
	};
}

export default ListStudentsByCourseController;