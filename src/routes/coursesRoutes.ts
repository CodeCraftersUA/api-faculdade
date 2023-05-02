// Dependencies
import express from "express";

// Controllers
import CreateCourseController from "../modules/courses/useCases/createCourse/CreateCourseController.js";
import DeleteCourseController from "../modules/courses/useCases/deleteCourse/DeleteCourseController.js";
import GetCourseController from "../modules/courses/useCases/getCourse/GetCourseController.js";
import ListCoursesController from "../modules/courses/useCases/listCourses/ListCoursesController.js";
import ListStudentsByCourseController from "../modules/courses/useCases/listStudentsByCourse/ListStudentsByCourseController.js";
import UpdateCourseController from "../modules/courses/useCases/updateCourse/UpdateCourseController.js";

// Middlewares
import postCourseValidate from "../middlewares/validations/courses/postCourseValidation.js";
import putCourseValidate from "../middlewares/validations/courses/putCourseValidation.js";
import getCourseValidation from "../middlewares/validations/courses/getCourseValidation.js";

const app = express();

const createCourseController = new CreateCourseController();
const deleteCourseController = new DeleteCourseController();
const getCourseController = new GetCourseController();
const listCourseController = new ListCoursesController();
const listStudentsByCourseController = new ListStudentsByCourseController();
const updateCourseController = new UpdateCourseController();

app.get("", listCourseController.handler);
app.get("/:id", getCourseController.handler);
app.get("/:id/students", getCourseValidation, listStudentsByCourseController.handler);
app.post("", postCourseValidate, createCourseController.handler);
app.put("/:id", putCourseValidate, updateCourseController.handler);
app.delete("/:id", deleteCourseController.handler);

export default app;