// Dependecies
import { describe } from "@jest/globals";
import supertest from "supertest";

describe("given the student does not exist", () => {
	it("should return a 404", async () => {
		const studentId = "not-an-id";
		await supertest("http://localhost:3000").get(`/students/${studentId}`).expect(404);
	});
});

describe("given the student exist", (() => {
	it("Should return 200", async () => {
		const studentData = {
			name: "Paulo Costa",
			age: 25,
			address: "Foz do Iguaçu - Paraná"
		}

		const response = await supertest("http://localhost:3000")
			.post("/students")
			.send(studentData)
			.expect(201);

		expect(response.body).toHaveProperty("id");

		await supertest("http://localhost:3000").delete(`/students/${response.body.id}`);
	});
})); 