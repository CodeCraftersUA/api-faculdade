import express from "express";

import CreateStudentController from "../modules/studentCase/createStudent/CreateStudentController.ts";
import DeleteStudentController from "../modules/studentCase/deleteStudent/DeleteStudentController.ts";
import GetStudentController from "../modules/studentCase/getStudent/GetStudentController.ts";
import ListstudentCaseController from "../modules/studentCase/liststudentCase/ListStudentController.ts";
import UpdateStudentController from "../modules/studentCase/updateStudent/UpdateStudentController.ts";

import postStudentValidate from "../middlewares/validations/studentCase/postStudentValidation.ts";
import putStudentValidate from "../middlewares/validations/studentCase/putStudentValidation.ts";

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