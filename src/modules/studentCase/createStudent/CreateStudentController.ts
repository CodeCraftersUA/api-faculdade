import { Request, Response } from "express";

// UseCases
import CreateStudentUseCase from "./CreateStudentUseCase.ts";

class CreateStudentController {
	handler = async (req: Request, res: Response) => {
		const createStudentUseCase = new CreateStudentUseCase();
		const newStudent = await createStudentUseCase.execute(req.body);

		res.status(201).json(newStudent);
	};
}

export default CreateStudentController;