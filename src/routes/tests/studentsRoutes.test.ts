// Dependecies
import { describe } from "@jest/globals";
import request from "supertest";

let validStudentId: string;
const invalidStudentId = "not-an-id";

const specificStudentName = "7215250723dbab4c00a8cb303c108bc3a5e7";

// Create test student
beforeAll(async () => {
	const studentData = {
		name: specificStudentName,
		age: 21,
		address: "Foz do Iguaçu - Paraná"
	}

	const response = await request("http://localhost:3000").post("/students").send(studentData);
	validStudentId = response.body.id;
});

// Delete test student
afterAll(async () => {
	await request("http://localhost:3000")
		.delete(`/students/${validStudentId}`);
})

// GET Validations
describe("on list students", (() => {
	it("should return status 200", async () => {
		await request("http://localhost:3000")
			.get(`/students`)
			.expect(200);
	});

	it("should return students list", async () => {
		const response = await request("http://localhost:3000")
			.get(`/students`)
			.expect(200);

		expect(response.body[0]).toBeDefined();
	});
}));

describe("on list students by specific name", (() => {
	it("should return created student with specific name", async () => {
		const response = await request("http://localhost:3000")
			.get(`/students?name=${specificStudentName}`)
			.expect(200);

		expect(response.body.length).toBe(1);
		expect(response.body[0].id).toBe(validStudentId);
	});
}));

describe("on get student that exists", (() => {
	it("should return status 200 and should contain student name, age and address", async () => {
		const response = await request("http://localhost:3000")
			.get(`/students/${validStudentId}`)
			.expect(200);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("age");
		expect(response.body).toHaveProperty("address");
	});
}));

describe("on get student that does not exist", () => {
	it("should return a 404", async () => {
		await request("http://localhost:3000").get(`/students/${invalidStudentId}`).expect(404);
	});
});

// POST Validations
describe("on create student with valid data", (() => {
	it("should return 201 and should return student id", async () => {
		const studentData = {
			name: "Paulo Costa",
			age: 25,
			address: "Foz do Iguaçu - Paraná"
		}

		const response = await request("http://localhost:3000")
			.post("/students")
			.send(studentData)
			.expect(201);

		expect(response.body).toHaveProperty("id");

		await request("http://localhost:3000")
			.delete(`/students/${response.body.id}`);
	});
}));

describe("on create student with invalid age", (() => {
	it("should return 400", async () => {
		const studentData = {
			name: "Paulo Costa",
			age: -10,
			address: "Foz do Iguaçu - Paraná"
		}

		await request("http://localhost:3000")
			.post("/students")
			.send(studentData)
			.expect(400);
	});
}));

describe("on create student with invalid name", (() => {
	it("should return 400", async () => {
		const studentData = {
			name: "",
			age: 25,
			address: "Foz do Iguaçu - Paraná"
		}

		await request("http://localhost:3000")
			.post("/students")
			.send(studentData)
			.expect(400);
	});
}));

describe("on create student with invalid address", (() => {
	it("should return 400", async () => {
		const studentData = {
			name: "Paulo Costa",
			age: 25,
			address: ""
		}

		await request("http://localhost:3000")
			.post("/students")
			.send(studentData)
			.expect(400);
	});
}));

// PUT Validations
describe("on update student that exists with valid data", (() => {
	const updatedStudentData = {
		name: "Nome de Teste",
		age: 50,
		address: "Curitiba - Paraná"
	}

	it("should return status 200", async () => {
		await request("http://localhost:3000")
			.put(`/students/${validStudentId}`)
			.send(updatedStudentData)
			.expect(200);
	});

	it("should return updated student on get", async () => {
		const response = await request("http://localhost:3000")
			.get(`/students/${validStudentId}`)
			.expect(200);

		expect(response.body).toHaveProperty("id");
		expect(response.body.age).toBe(updatedStudentData.age);
		expect(response.body.address).toBe(updatedStudentData.address);
	});
}));

describe("on update student that does not exist", (() => {
	const updatedStudentData = {
		name: "Nome de Teste",
		age: 50,
		address: "Curitiba - Paraná"
	}

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/students/${invalidStudentId}`)
			.send(updatedStudentData)
			.expect(400);
	});
}));

describe("on update student that exists with invalid age", (() => {
	const invalidStudentData = {
		name: "Nome de Teste",
		age: -50,
		address: "Curitiba - Paraná"
	}

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/students/${validStudentId}`)
			.send(invalidStudentData)
			.expect(400);
	});
}));

describe("on update student that exists with invalid name", (() => {
	const invalidStudentData = {
		name: "",
		age: 50,
		address: "Curitiba - Paraná"
	}

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/students/${validStudentId}`)
			.send(invalidStudentData)
			.expect(400);
	});
}));

describe("on update student that exists with invalid data", (() => {
	const invalidStudentData = {
		name: "Nome de Teste",
		age: 50,
		address: ""
	}

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/students/${validStudentId}`)
			.send(invalidStudentData)
			.expect(400);
	});
}));

// DELETE Validations
describe("on delete student that exists", (() => {
	it("should return 204", async () => {
		const studentData = {
			name: "Paulo Costa",
			age: 25,
			address: "Foz do Iguaçu - Paraná"
		}

		const response = await request("http://localhost:3000")
			.post("/students")
			.send(studentData)
			.expect(201);

		await request("http://localhost:3000")
			.delete(`/students/${response.body.id}`)
			.expect(204);
	});
}));

describe("on delete student that does not exist", (() => {
	it("should return 404", async () => {
		await request("http://localhost:3000")
			.delete(`/students/${invalidStudentId}`)
			.expect(404);
	});
}));