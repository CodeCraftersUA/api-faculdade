import express from "express";

import CreateStudentController from "../modules/student/createStudent/CreateStudentController.js";
import DeleteStudentController from "../modules/student/deleteStudent/DeleteStudentController.js";
import GetStudentController from "../modules/student/getStudent/GetStudentController.js";
import ListStudentController from "../modules/student/listStudent/ListStudentController.js";
import UpdateStudentController from "../modules/student/updateStudent/UpdateStudentController.js";

import postStudentValidate from "../middlewares/validations/students/postStudentValidation.js";
import putStudentValidate from "../middlewares/validations/students/putStudentValidation.js";

const app = express();

const createStudentController = new CreateStudentController();
const deleteStudentController = new DeleteStudentController();
const getStudentController = new GetStudentController();
const listStudentController = new ListStudentController();
const updateStudentController = new UpdateStudentController();

app.get("", listStudentController.handler);
app.get("/:id", getStudentController.handler);
app.post("", postStudentValidate, createStudentController.handler);
app.put("/:id", putStudentValidate, updateStudentController.handler);
app.delete("/:id", deleteStudentController.handler);

export default app;