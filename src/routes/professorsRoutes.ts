// Dependencies
import express from "express";

// Controllers
import CreateProfessorController from "../modules/professor/useCases/createProfessor/CreateProfessorController.ts";
import DeleteProfessorController from "../modules/professor/useCases/deleteProfessor/DeleteProfessorController.ts";
import GetProfessorController from "../modules/professor/useCases/getProfessor/GetProfessorController.ts";
import ListProfessorController from "../modules/professor/useCases/listProfessor/ListProfessorController.ts";
import UpdateProfessorController from "../modules/professor/useCases/updateProfessor/UpdateProfessorController.ts";

// Middlewares
import postProfessorValidate from "../middlewares/validations/professors/postProfessorValidation.ts";
import putProfessorValidate from "../middlewares/validations/professors/putProfessorValidation.ts";

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