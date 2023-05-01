// Dependencies
import yup from "yup";

// Validate
import validate from "../validate.js";


const putClassroomSchema = yup.object({
	body: yup.object({
		semester: yup.number().min(1).max(30).required(),
		year: yup.number().min(1850).max(4000).required(),
		courseId: yup.string().length(36).required(),
		professors: yup.array(yup.string().length(36).required()).min(1).required(),
		students: yup.array(yup.string().length(36).required()).min(1).required()
	})
});

const putClassroomValidate = validate(putClassroomSchema);
export default putClassroomValidate;
