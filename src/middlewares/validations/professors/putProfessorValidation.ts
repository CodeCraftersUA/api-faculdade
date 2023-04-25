// Dependencies
import yup from "yup";

// Validate
import validate from "../validate.js";


const putCourseSchema = yup.object({
	body: yup.object({
		name: yup.string().min(5).max(100).required(),
		acronym: yup.string().min(2).max(5).required(),
	})
});

const putCourseValidate = validate(putCourseSchema);
export default putCourseValidate;