// Dependencies
import express from "express";

// Controllers
import CreateClassroomController from "../modules/classrooms/useCases/createClassroom/CreateClassroomController.ts";
import DeleteClassroomController from "../modules/classrooms/useCases/deleteClassroom/DeleteClassroomController.ts";
import GetClassroomController from "../modules/classrooms/useCases/getClassroom/GetClassroomController.ts";
import ListClassroomsController from "../modules/classrooms/useCases/listClassrooms/ListClassroomsController.ts";
import UpdateClassroomController from "../modules/classrooms/useCases/updateClassroom/UpdateClassroomController.ts";

// Middleware
import postClassroomValidate from "../middlewares/validations/classrooms/postClassroomValidation.ts";
import putClassroomValidate from "../middlewares/validations/classrooms/putClassroomValidate.ts";

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