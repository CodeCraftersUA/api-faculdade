// Dependencies
import yup from "yup";

// Validate
import validate from "../validate.js";


const putStudentSchema = yup.object({
  body: yup.object({
    name: yup.string().min(5).max(100).required(),
    age: yup.number().required(),
    address: yup.string().min(5).max(100).required(),
  })
});

const putStudentValidate = validate(putStudentSchema);
export default putStudentValidate;
