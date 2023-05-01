// Dependencies
import express from "express";

// Controllers
import CreateClassroomController from "../modules/classrooms/useCases/createClassroom/CreateClassroomController.js";
import DeleteClassroomController from "../modules/classrooms/useCases/deleteClassroom/DeleteClassroomController.js";
import GetClassroomController from "../modules/classrooms/useCases/getClassroom/GetClassroomController.js";
import ListClassroomsController from "../modules/classrooms/useCases/listClassrooms/ListClassroomsController.js";
import UpdateClassroomController from "../modules/classrooms/useCases/updateClassroom/UpdateClassroomController.js";

const app = express();

const createClassroomController = new CreateClassroomController();
const deleteClassroomController = new DeleteClassroomController();
const getClassroomController = new GetClassroomController();
const listClassroomsController = new ListClassroomsController();
const updateClassroomController = new UpdateClassroomController();

app.delete("/:id", deleteClassroomController.handler);
app.get("", listClassroomsController.handler);
app.get("/:id", getClassroomController.handler);
app.post("", createClassroomController.handler);
app.put("/:id", updateClassroomController.handler);

export default app;