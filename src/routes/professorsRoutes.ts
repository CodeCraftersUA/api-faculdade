// Dependencies
import express from "express";

// Controllers
import CreateProfessorController from "../modules/professor/useCases/createProfessor/CreateProfessorController";
//import DeleteCourseController from "../modules/courses/useCases/deleteCourse/DeleteCourseController.js";
//import GetCourseController from "../modules/courses/useCases/getCourse/GetCourseController.js";
//import ListCoursesController from "../modules/courses/useCases/listCourses/ListCoursesController.js";
//import UpdateCourseController from "../modules/courses/useCases/updateCourse/UpdateCourseController.js";

// Middlewares
//import postCourseValidate from "../middlewares/validations/courses/postCourseValidation.js";
//import putCourseValidate from "../middlewares/validations/courses/putCourseValidation.js";

const app = express();

const createProfessorController = new CreateProfessorController();
//const deleteCourseController = new DeleteCourseController();
//const getCourseController = new GetCourseController();
//const listCourseController = new ListCoursesController();
//const updateCourseController = new UpdateCourseController();

//app.get("", listCourseController.handler);
//app.get("/:id", getCourseController.handler);
app.post("", createProfessorController.handler);
//app.put("/:id", putCourseValidate, updateCourseController.handler);
//app.delete("/:id", deleteCourseController.handler);

export default app;