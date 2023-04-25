// Dependencies
import express from "express";

// Controllers
import CreateProfessorController from "../modules/professor/useCases/createProfessor/CreateProfessorController.js";
import DeleteProfessorController from "../modules/professor/useCases/deleteProfessor/DeleteProfessorController.js";
import GetProfessorController from "../modules/professor/useCases/getProfessor/GetProfessorController.js";
import ListProfessorController from "../modules/professor/useCases/listProfessor/ListProfessorController.js";
import UpdateProfessorController from "../modules/professor/useCases/updateProfessor/UpdateProfessorController.js";

// Middlewares
import postProfessorValidate from "../middlewares/validations/professors/postProfessorValidation.js";
import putProfessorValidate from "../middlewares/validations/professors/putProfessorValidation.js";

const app = express();

const createProfessorController = new CreateProfessorController();
const deleteProfessorController = new DeleteProfessorController();
const getProfessorController = new GetProfessorController();
const listProfessorController = new ListProfessorController();
const updateProfessorController = new UpdateProfessorController();

app.get("", listProfessorController.handler);
app.get("/:id", getProfessorController.handler);
app.post("", postProfessorValidate, createProfessorController.handler);
app.put("/:id", putProfessorValidate, updateProfessorController.handler);
app.delete("/:id", deleteProfessorController.handler);

export default app;