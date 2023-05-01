// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import { KEY_ALREADY_EXISTS } from "../../../../errors/prismaErrorsCodes.js";

// Helpers
import generateUniqueId from "../../../../helpers/generateUniqueId.js";

// Interfaces
import AppError from "../../../../errors/AppError.js";
import CourseInterface from "../../../../models/courses.js";

const prisma = new PrismaClient();

class CreateCourseUseCase {
	execute = async (course: CourseInterface) => {
		try {
			await prisma.course.create({
				data: {
					id: generateUniqueId(),
					name: course.name,
					acronym: course.acronym.toLocaleUpperCase()
				}
			});
		} catch (err) {
			if (err.code === KEY_ALREADY_EXISTS)
				throw new AppError(`Attribute ${err.meta.target} already exists`, 400);

			throw err;
		}
	};
}

export default CreateCourseUseCase;