// Dependencies
import yup from "yup";

// Validate
import validate from "../validate.ts";


const postStudentSchema = yup.object({
  body: yup.object({
    name: yup.string().min(5).max(100).required(),
    age: yup.number().min(1).max(150).required(),
    address: yup.string().min(5).max(100).required(),
  })
});

const postStudentValidate = validate(postStudentSchema);
export default postStudentValidate;
