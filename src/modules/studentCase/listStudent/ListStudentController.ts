import { Request, Response } from "express";
import ListStudentUseCase from "./ListStudentUseCase";

class ListStudentController {
	handler = async (req: Request, res: Response) => {
		const listStudentUseCase = new ListStudentUseCase();
		const students = await listStudentUseCase.execute();

		res.status(200).json(students);
	};
}

export default ListStudentController;