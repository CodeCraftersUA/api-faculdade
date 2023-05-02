// Dependencies
import yup from "yup";

// Validate
import studentExists from "../yupTests/exists/studentExists.ts";
import validate from "../validate.ts";


const putStudentSchema = yup.object({
	body: yup.object({
		name: yup.string().min(5).max(100).required(),
		age: yup.number().min(1).max(150).required(),
		address: yup.string().min(5).max(100).required(),
	}),
	params: yup.object({
		id: yup.string().length(36).required().test(studentExists)
	})
});

const putStudentValidate = validate(putStudentSchema);
export default putStudentValidate;
