// Dependencies
import express from "express";
import dotenv from "dotenv";
import "express-async-errors";

// Middlewares
import { handleAppErrors } from "./middlewares/handleAppErrors.js";

// Routes
import professorRoutes from "./routes/professorsRoutes.js";
import courseRoutes from "./routes/coursesRoutes.js";
import studentRoutes from "./routes/studentsRoutes.js";

dotenv.config(); // Config dotenv
const PORT = process.env.PORT || 3000; // API listen port

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/professors", professorRoutes);
app.use("/courses", courseRoutes);
app.use("/students", studentRoutes);

// Default middlewares
app.use(handleAppErrors);

const start = () => {
	try {
		app.listen(PORT, () => {
			console.log(`API running at: http://localhost:${PORT}`);
		});
	} catch (err) {
		console.error(err);
		process.exit();
	}
};
start();