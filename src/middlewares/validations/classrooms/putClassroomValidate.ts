// Dependencies
import yup from "yup";

// Validations
import courseIdExist from "../yupTests/courseIdExist.js";
import professorsIdsListIsValid from "../yupTests/professorsIdsListIsValid.js";
import studentsIdsListIsValid from "../yupTests/studentsIdsListIsValid.js";
import validate from "../validate.js";


const putClassroomSchema = yup.object({
	body: yup.object({
		semester: yup.number().min(1).max(30).required(),
		year: yup.number().min(1850).max(4000).required(),
		courseId: yup.string().length(36).required().test(courseIdExist),
		students: yup.array(yup.string().length(36).required()).min(1).required().test(studentsIdsListIsValid),
		professors: yup.array(yup.string().length(36).required()).min(1).required().test(professorsIdsListIsValid)
	})
});

const putClassroomValidate = validate(putClassroomSchema);
export default putClassroomValidate;
