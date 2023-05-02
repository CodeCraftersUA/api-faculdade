// Dependencies
import { Request, Response } from "express";

// UseCases
import ListCourseStudentsUseCase from "./ListStudentsByCourseUseCase.js";

class ListStudentsByCourseController {
	handler = async (req: Request, res: Response) => {
		const listCourseStudentsUseCase = new ListCourseStudentsUseCase();

		const students = await listCourseStudentsUseCase.execute(req.params.courseId);
		res.status(200).json(students);
	};
}

export default ListStudentsByCourseController;