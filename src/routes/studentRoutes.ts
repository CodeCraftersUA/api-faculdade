import express from "express";

import CreateStudentController from "../modules/studentCase/createStudent/CreateStudentController";
import DeleteStudentController from "../modules/studentCase/deleteStudent/DeleteStudentController";
import GetStudentController from "../modules/studentCase/getStudent/getStudentController";
import ListStudentCaseController from "../modules/studentCase/listStudent/ListStudentController";
import UpdateStudentController from "../modules/studentCase/updateStudent/UpdateStudentController";

import postStudentValidate from "../middlewares/validations/students/postStudentValidation";
import putStudentValidate from "../middlewares/validations/students/putStudentValidation";
import ListStudentController from "../modules/studentCase/listStudent/ListStudentController";

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