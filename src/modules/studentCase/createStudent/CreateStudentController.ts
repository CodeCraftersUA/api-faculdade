import { Request, Response } from "express";

// UseCases
import CreateStudentUseCase from "./CreateStudentUseCase.ts";

class CreateStudentController {
	handler = async (req: Request, res: Response) => {
		const createStudentUseCase = new CreateStudentUseCase();
		await createStudentUseCase.execute(req.body);

		res.sendStatus(201);
	};
}

export default CreateStudentController;