import { Request, Response } from "express";
import UpdateStudentUseCase from "./UpdateStudentUseCase.js";

class UpdateStudentController {
	handler = async (req: Request, res: Response) => {
		const updateStudentUseCase = new UpdateStudentUseCase();
		await updateStudentUseCase.execute(req.params.id, req.body);

		res.sendStatus(200);
	};
}

export default UpdateStudentController;