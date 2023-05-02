// Dependecies
import { describe } from "@jest/globals";
import supertest from "supertest";

// Utils
import createServer from "../../utils/createServer.ts";

const app = createServer();

describe("given the course does not exist", () => {
	it("should return a 404", async () => {
		const courseId = "not-an-id";
		await supertest(app).get(`/courses/${courseId}`).expect(404);
	});
});
