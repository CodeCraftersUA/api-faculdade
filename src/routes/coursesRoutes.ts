// Dependencies
import express from "express";

// Controllers
import CreateCourseController from "../modules/courses/useCases/createCourse/CreateCourseController.js";
import DeleteCourseController from "../modules/courses/useCases/deleteCourse/DeleteCourseController.js";
import ListCoursesController from "../modules/courses/useCases/listCourses/ListCoursesController.js";
import UpdateCourseController from "../modules/courses/useCases/updateCourse/UpdateCourseController.js";

const app = express();

const createCourseController = new CreateCourseController();
const deleteCourseController = new DeleteCourseController();
const listCourseController = new ListCoursesController();
const updateCourseController = new UpdateCourseController();

app.get("", listCourseController.handler);
app.post("", createCourseController.handler);
app.put("/:id", updateCourseController.handler);
app.delete("/:id", deleteCourseController.handler);

export default app;