// Dependencies
import yup from "yup";

// Validate
import courseExists from "../yupTests/exists/courseExists.ts";
import validate from "../validate.ts";


const getCourseValidation = yup.object({
	params: yup.object({
		id: yup.string().length(36).required().test(courseExists)
	})
});

const postCourseValidate = validate(getCourseValidation);
export default postCourseValidate;
