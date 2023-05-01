// Dependencies
import yup from "yup";

// Validations
import courseExists from "../yupTests/exists/courseExists.js";
import classroomExists from "../yupTests/exists/classroomExists.js";
import professorsExists from "../yupTests/listExists/professorsExists.js";
import studentsExists from "../yupTests/listExists/studentsExists.js";
import validate from "../validate.js";


const putClassroomSchema = yup.object({
	body: yup.object({
		semester: yup.number().min(1).max(30).required(),
		year: yup.number().min(1850).max(4000).required(),
		courseId: yup.string().length(36).required().test(courseExists),
		students: yup.array(yup.string().length(36).required()).min(1).required().test(studentsExists),
		professors: yup.array(yup.string().length(36).required()).min(1).required().test(professorsExists)
	}),
	params: yup.object({
		id: yup.string().length(36).required().test(classroomExists)
	})
});

const putClassroomValidate = validate(putClassroomSchema);
export default putClassroomValidate;
