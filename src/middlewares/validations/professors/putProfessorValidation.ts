// Dependencies
import yup from "yup";

// Validate
import professorExists from "../yupTests/exists/professorExists.ts";
import validate from "../validate.ts";


const putProfessorSchema = yup.object({
	body: yup.object({
		name: yup.string().min(5).max(100).required(),
		address: yup.string().min(2).max(100).required(),
		specialty: yup.string().min(6).max(100).required()
	}),
	params: yup.object({
		id: yup.string().length(36).required().test(professorExists)
	})
});

const putProfessorValidate = validate(putProfessorSchema);
export default putProfessorValidate;