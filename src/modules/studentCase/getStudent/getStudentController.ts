import { Request, Response } from "express";
import GetStudentUseCase from "./getStudentUseCase";

class GetStudentController {
	handler = async (req: Request, res: Response) => {
		const getstudentUseCase = new GetStudentUseCase();
		const course = await getstudentUseCase.execute(req.params.id);

		res.status(200).json(course);
	};
}

export default GetStudentController;