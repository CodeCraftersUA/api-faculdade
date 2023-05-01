// Dependencies
import express from "express";

// Controllers
import CreateClassroomController from "../modules/classrooms/useCases/createClassroom/CreateClassroomController.js";
import DeleteClassroomController from "../modules/classrooms/useCases/deleteClassroom/DeleteClassroomController.js";
import GetClassroomController from "../modules/classrooms/useCases/getClassroom/GetClassroomController.js";
import ListClassroomsController from "../modules/classrooms/useCases/listClassrooms/ListClassroomsController.js";
import UpdateClassroomController from "../modules/classrooms/useCases/updateClassroom/UpdateClassroomController.js";

// Middleware
import postClassroomValidate from "../middlewares/validations/classrooms/postClassroomValidation.js";
import putClassroomValidate from "../middlewares/validations/classrooms/putClassroomValidate.js";

const app = express();

const createClassroomController = new CreateClassroomController();
const deleteClassroomController = new DeleteClassroomController();
const getClassroomController = new GetClassroomController();
const listClassroomsController = new ListClassroomsController();
const updateClassroomController = new UpdateClassroomController();

app.delete("/:id", deleteClassroomController.handler);
app.get("", listClassroomsController.handler);
app.get("/:id", getClassroomController.handler);
app.post("", postClassroomValidate, createClassroomController.handler);
app.put("/:id", putClassroomValidate, updateClassroomController.handler);

export default app;