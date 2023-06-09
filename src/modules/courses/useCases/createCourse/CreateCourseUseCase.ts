// Dependencies
import { PrismaClient } from "@prisma/client";

// Errors
import { KEY_ALREADY_EXISTS } from "../../../../errors/prismaErrorsCodes.ts";

// Helpers
import generateUniqueId from "../../../../helpers/generateUniqueId.ts";

// Interfaces
import AppError from "../../../../errors/AppError.ts";
import CourseInterface from "../../../../models/Course.ts";
import { json } from "stream/consumers";

const prisma = new PrismaClient();

class CreateCourseUseCase {
	execute = async (course: CourseInterface) => {
		try {
			const newCourse = await prisma.course.create({
				data: {
					id: generateUniqueId(),
					name: course.name,
					acronym: course.acronym.toLocaleUpperCase()
				}
			});
			return newCourse;

		} catch (err) {
			if (err.code === KEY_ALREADY_EXISTS)
				throw new AppError(`Attribute ${err.meta.target} already exists`, 400);
			throw err;
		}
	};
}

export default CreateCourseUseCase;