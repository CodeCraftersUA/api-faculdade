// Dependecies
import { describe } from "@jest/globals";
import supertest from "supertest";

describe("given the course does not exist", () => {
	it("should return a 404", async () => {
		const courseId = "not-an-id";
		await supertest("http://localhost:3000").get(`/courses/${courseId}`).expect(404);
	});
});
