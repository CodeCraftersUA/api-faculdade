// Dependencies
import { Request, Response } from "express";

// UseCases
import GetClassroomUseCase from "./GetClassroomUseCase.js";

class GetClassroomController {
	handler = async (req: Request, res: Response) => {
		const getClassroomUseCase = new GetClassroomUseCase();
		const classroom = await getClassroomUseCase.execute(req.params.id);

		res.status(200).json(classroom);
	};
}

export default GetClassroomController;