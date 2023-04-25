// Dependencies
import yup from "yup";

// Validate
import validate from "../validate.js";


const putCourseSchema = yup.object({
	body: yup.object({
		name: yup.string().min(5).max(100).required(),
		address: yup.string().min(2).max(100).required(),
		specialty: yup.string().min(6).max(100).required()
	})
});

const putCourseValidate = validate(putCourseSchema);
export default putCourseValidate;