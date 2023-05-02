// Dependencies
import yup from "yup";

// Validations
import courseExists from "../yupTests/exists/courseExists.ts";
import classroomExists from "../yupTests/exists/classroomExists.ts";
import professorsExists from "../yupTests/listExists/professorsExists.ts";
import studentsExists from "../yupTests/listExists/studentsExists.ts";
import validate from "../validate.ts";


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
