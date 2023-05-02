// Dependencies
import express from "express";

// Controllers
import CreateCourseController from "../modules/courses/useCases/createCourse/CreateCourseController.ts";
import DeleteCourseController from "../modules/courses/useCases/deleteCourse/DeleteCourseController.ts";
import GetCourseController from "../modules/courses/useCases/getCourse/GetCourseController.ts";
import ListCoursesController from "../modules/courses/useCases/listCourses/ListCoursesController.ts";
import ListProfessorsByCourseController from "../modules/courses/useCases/listProfessorsByCourse/ListProfessorsByCourseController.ts";
import ListStudentsByCourseController from "../modules/courses/useCases/listStudentsByCourse/ListStudentsByCourseController.ts";
import UpdateCourseController from "../modules/courses/useCases/updateCourse/UpdateCourseController.ts";

// Middlewares
import postCourseValidate from "../middlewares/validations/courses/postCourseValidation.ts";
import putCourseValidate from "../middlewares/validations/courses/putCourseValidation.ts";
import getCourseValidate from "../middlewares/validations/courses/getCourseValidation.ts";

const app = express();

const createCourseController = new CreateCourseController();
const deleteCourseController = new DeleteCourseController();
const getCourseController = new GetCourseController();
const listCourseController = new ListCoursesController();
const listProfessorsByCourseController = new ListProfessorsByCourseController();
const listStudentsByCourseController = new ListStudentsByCourseController();
const updateCourseController = new UpdateCourseController();

app.get("", listCourseController.handler);
app.get("/:id", getCourseController.handler);
app.get("/:id/professors", getCourseValidate, listProfessorsByCourseController.handler);
app.get("/:id/students", getCourseValidate, listStudentsByCourseController.handler);
app.post("", postCourseValidate, createCourseController.handler);
app.put("/:id", putCourseValidate, updateCourseController.handler);
app.delete("/:id", deleteCourseController.handler);

export default app;