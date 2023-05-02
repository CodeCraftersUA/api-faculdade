// Dependecies
import { describe } from "@jest/globals";
import request from "supertest";

let validProfessorId: string;
const invalidProfessorId = "not-an-id";

const specificProfessorName = "7215250723dbab4c00ateste8cb303c108bc3a5e7";

// Create test professor
beforeAll(async () => {
	const professorData = {
		name: specificProfessorName,
		address: "Foz do Iguaçu - Paraná",
		specialty: "English"
	};

	const response = await request("http://localhost:3000").post("/professors").send(professorData);
	validProfessorId = response.body.id;
});

// Delete test professor
afterAll(async () => {
	await request("http://localhost:3000")
		.delete(`/professors/${validProfessorId}`);
});

// GET Validations
describe("on list professors", (() => {
	it("should return status 200", async () => {
		await request("http://localhost:3000")
			.get("/professors")
			.expect(200);
	});

	it("should return professors list", async () => {
		const response = await request("http://localhost:3000")
			.get("/professors")
			.expect(200);

		expect(response.body[0]).toBeDefined();
	});
}));

describe("on list professors by specific name", (() => {
	it("should return created professor with specific name", async () => {
		const response = await request("http://localhost:3000")
			.get(`/professors?name=${specificProfessorName}`)
			.expect(200);

		const names = response.body.map((professor: { name: string; }) => professor.name);
		expect(names.every((name: string) => name === specificProfessorName)).toEqual(true);
	});
}));

describe("on get professor that exists", (() => {
	it("should return status 200 and should contain professor name, address and specialty", async () => {
		const response = await request("http://localhost:3000")
			.get(`/professors/${validProfessorId}`)
			.expect(200);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("name");
		expect(response.body).toHaveProperty("address");
		expect(response.body).toHaveProperty("specialty");
	});
}));

describe("on get professor that does not exist", () => {
	it("should return a 404", async () => {
		await request("http://localhost:3000").get(`/professors/${invalidProfessorId}`).expect(404);
	});
});

// POST Validations
describe("on create professor with valid data", (() => {
	it("should return 201 and should return professor id", async () => {
		const professorData = {
			name: "Wesley Marchi",
			address: "Cascavel",
			specialty: "English"
		};

		const response = await request("http://localhost:3000")
			.post("/professors")
			.send(professorData)
			.expect(201);

		expect(response.body).toHaveProperty("id");

		await request("http://localhost:3000")
			.delete(`/professors/${response.body.id}`);
	});
}));

describe("on create professor with invalid name", (() => {
	it("should return 400", async () => {
		const professorData = {
			name: "",
			address: "Cascavel",
			specialty: "English"
		};

		await request("http://localhost:3000")
			.post("/professors")
			.send(professorData)
			.expect(400);
	});
}));

describe("on create professor with invalid address", (() => {
	it("should return 400", async () => {
		const professorData = {
			name: "Wesley Marchi",
			address: "",
			specialty: "English"
		};

		await request("http://localhost:3000")
			.post("/professors")
			.send(professorData)
			.expect(400);
	});
}));

describe("on create professor with invalid address", (() => {
	it("should return 400", async () => {
		const professorData = {
			name: "Paulo Costa",
			address: "",
			specialty: "Math"
		};

		await request("http://localhost:3000")
			.post("/professors")
			.send(professorData)
			.expect(400);
	});
}));

// PUT Validations
describe("on update professor that exists with valid data", (() => {
	const updatedProfessorData = {
		name: "Nome de Teste",
		address: "Curitiba - Paraná",
		specialty: "English"
	};

	it("should return status 200", async () => {
		await request("http://localhost:3000")
			.put(`/professors/${validProfessorId}`)
			.send(updatedProfessorData)
			.expect(200);
	});

	it("should return updated professor on get", async () => {
		const response = await request("http://localhost:3000")
			.get(`/professors/${validProfessorId}`)
			.expect(200);

		expect(response.body).toHaveProperty("id");
		expect(response.body.name).toBe(updatedProfessorData.name);
		expect(response.body.address).toBe(updatedProfessorData.address);
		expect(response.body.specialty).toBe(updatedProfessorData.specialty);
	});
}));

describe("on update professor that does not exist", (() => {
	const updatedProfessorData = {
		name: "Nome de Teste",
		address: "Curitiba - Paraná",
		specialty: "Foz do Iguaçu"
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/professors/${invalidProfessorId}`)
			.send(updatedProfessorData)
			.expect(400);
	});
}));

describe("on update professor that exists with invalid specialty", (() => {
	const invalidProfessorData = {
		name: "Nome de Teste",
		address: "Curitiba - Paraná",
		specialty: ""
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/professors/${validProfessorId}`)
			.send(invalidProfessorData)
			.expect(400);
	});
}));

describe("on update professor that exists with invalid name", (() => {
	const invalidProfessorData = {
		name: "",
		address: "Curitiba - Paraná",
		specialty: "Math"
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/professors/${validProfessorId}`)
			.send(invalidProfessorData)
			.expect(400);
	});
}));

describe("on update professor that exists with invalid data", (() => {
	const invalidProfessorData = {
		name: "Nome de Teste",
		address: "",
		specialty: "Doctor"
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/professors/${validProfessorId}`)
			.send(invalidProfessorData)
			.expect(400);
	});
}));

// DELETE Validations
describe("on delete professor that exists", (() => {
	it("should return 204", async () => {
		const professorData = {
			name: "Wesley Marchi",
			address: "Cascavel",
			specialty: "English"
		};

		const response = await request("http://localhost:3000")
			.post("/professors")
			.send(professorData)
			.expect(201);

		await request("http://localhost:3000")
			.delete(`/professors/${response.body.id}`)
			.expect(204);
	});
}));

describe("on delete professor that does not exist", (() => {
	it("should return 404", async () => {
		await request("http://localhost:3000")
			.delete(`/professors/${invalidProfessorId}`)
			.expect(404);
	});
}));