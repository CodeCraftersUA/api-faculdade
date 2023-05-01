// Dependencies
import yup from "yup";

// Validations
import courseIdExists from "../yupTests/courseIdExists.js";
import classroomIdExists from "../yupTests/classroomIdExists.js"
import professorsIdsListIsValid from "../yupTests/professorsIdsListIsValid.js";
import studentsIdsListIsValid from "../yupTests/studentsIdsListIsValid.js";
import validate from "../validate.js";


const putClassroomSchema = yup.object({
	body: yup.object({
		semester: yup.number().min(1).max(30).required(),
		year: yup.number().min(1850).max(4000).required(),
		courseId: yup.string().length(36).required().test(courseIdExists),
		students: yup.array(yup.string().length(36).required()).min(1).required().test(studentsIdsListIsValid),
		professors: yup.array(yup.string().length(36).required()).min(1).required().test(professorsIdsListIsValid)
	}),
	params: yup.object({
		id: yup.string().length(36).required().test(classroomIdExists)
	})
});

const putClassroomValidate = validate(putClassroomSchema);
export default putClassroomValidate;
