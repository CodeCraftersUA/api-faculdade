// Dependencies
import { Request, Response } from "express";

// UseCases
import DeleteCourseUseCase from "./DeleteCourseUseCase.js";

class DeleteCourseController {
  handler = async (req: Request, res: Response) => {
    const deleteCourseController = new DeleteCourseUseCase();
    await deleteCourseController.execute(parseInt(req.params.id));
    res.sendStatus(200);
  }
}

export default DeleteCourseController;