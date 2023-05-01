// Dependencies
import yup from "yup";

// Validations
import courseIdExist from "../yupTests/exists/courseExists.js";
import professorsExists from "../yupTests/listExists/professorsExists.js";
import studentsExists from "../yupTests/listExists/studentsExists.js";
import validate from "../validate.js";


const postClassroomSchema = yup.object({
	body: yup.object({
		semester: yup.number().min(1).max(30).required(),
		year: yup.number().min(1850).max(4000).required(),
		courseId: yup.string().length(36).required().test(courseIdExist),
		students: yup.array(yup.string().length(36).required()).min(1).required().test(studentsExists),
		professors: yup.array(yup.string().length(36).required()).min(1).required().test(professorsExists)
	})
});

const postClassroomValidate = validate(postClassroomSchema);
export default postClassroomValidate;
