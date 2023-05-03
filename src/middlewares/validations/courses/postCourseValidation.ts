// Dependencies
import * as yup from "yup";

// Validate
import validate from "../validate.ts";

const postCourseSchema = yup.object({
	body: yup.object({
		name: yup.string().min(5).max(100).required(),
		acronym: yup.string().min(2).max(5).required(),
	})
});

const postCourseValidate = validate(postCourseSchema);
export default postCourseValidate;
