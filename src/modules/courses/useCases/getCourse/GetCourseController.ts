// Dependencies
import { Request, Response } from "express";

// UseCases
import GetCourseUseCase from "./GetCourseUseCase.js";

class GetCoursesController {
  handler = async (req: Request, res: Response) => {
    const courseId = parseInt(req.params.id);

    const getCourseUseCase = new GetCourseUseCase();
    const course = await getCourseUseCase.execute(courseId);

    res.status(200).json(course);
  }
}

export default GetCoursesController;