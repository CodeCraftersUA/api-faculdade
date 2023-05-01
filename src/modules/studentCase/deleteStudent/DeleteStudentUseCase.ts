import { PrismaClient } from "@prisma/client";

import AppError from "../../../errors/AppError";
import { RECORD_TO_DELETE_DOES_NOT_EXIST } from "../../../errors/prismaErrorsCodes";

const prisma = new PrismaClient();

class DeleteStudentUseCase {
	execute = async (id: string) => {
		try {
			await prisma.student.delete({
				where: { id }
			});
		} catch (err) {
			if (err.code === RECORD_TO_DELETE_DOES_NOT_EXIST)
				throw new AppError("student does not exist", 404);

			throw err;
		}
	};
}

export default DeleteStudentUseCase;