// Dependencies
import yup from "yup";

// Validate
import courseExists from "../yupTests/exists/courseExists.ts";
import validate from "../validate.ts";

const putCourseSchema = yup.object({
	body: yup.object({
		name: yup.string().min(5).max(100).required(),
		acronym: yup.string().min(2).max(5).required(),
	}),
	params: yup.object({
		id: yup.string().length(36).required().test(courseExists)
	})
});

const putCourseValidate = validate(putCourseSchema);
export default putCourseValidate;
