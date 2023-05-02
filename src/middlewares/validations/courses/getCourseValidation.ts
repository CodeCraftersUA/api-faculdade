// Dependencies
import yup from "yup";

// Validate
import courseExists from "../yupTests/exists/courseExists.js";
import validate from "../validate.js";


const getCourseValidation = yup.object({
	params: yup.object({
		id: yup.string().length(36).required().test(courseExists)
	})
});

const postCourseValidate = validate(getCourseValidation);
export default postCourseValidate;
