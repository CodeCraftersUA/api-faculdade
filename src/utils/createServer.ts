// Dependencies
import express from "express";
import "express-async-errors";

// Middlewares
import { handleAppErrors } from "../middlewares/handleAppErrors.ts";

// Routes
import courseRoutes from "../routes/coursesRoutes.ts";
import classroomsRoutes from "../routes/classroomsRoutes.ts";
import professorRoutes from "../routes/professorsRoutes.ts";
import studentRoutes from "../routes/studentsRoutes.ts";

const createServer = () => {
	const app = express();

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	// Use routes
	app.use("/courses", courseRoutes);
	app.use("/classrooms", classroomsRoutes);
	app.use("/professors", professorRoutes);
	app.use("/students", studentRoutes);

	// Default middlewares
	app.use(handleAppErrors);

	return app;
};

export default createServer;