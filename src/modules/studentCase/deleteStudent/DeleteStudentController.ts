import { Request, Response } from "express";

// UseCases
import DeleteStudentUseCase from "./DeleteStudentUseCase.ts";

class DeleteStudentController {
	handler = async (req: Request, res: Response) => {
		const deleteStudentUseCase = new DeleteStudentUseCase();
		await deleteStudentUseCase.execute(req.params.id);

		res.sendStatus(204);
	};
}

export default DeleteStudentController;