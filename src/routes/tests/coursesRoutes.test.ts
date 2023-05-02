// Dependecies
import { describe } from "@jest/globals";
import request from "supertest";

let validCourseId: string;
const invalidCourseId = "not-an-id";

const specificCourseName = "bd265ee1f990433e8a7c11c658eb105e855";

// Create test course
beforeAll(async () => {
	const courseData = {
		name: specificCourseName,
		acronym: "GFRTS"
	};

	const response = await request("http://localhost:3000").post("/courses").send(courseData);
	validCourseId = response.body.id;
});

// Delete test student
afterAll(async () => {
	await request("http://localhost:3000")
		.delete(`/courses/${validCourseId}`);
});

// GET Validations
describe("on list courses", (() => {
	it("should return status 200", async () => {
		await request("http://localhost:3000")
			.get("/courses")
			.expect(200);
	});

	it("should return courses list", async () => {
		const response = await request("http://localhost:3000")
			.get("/courses")
			.expect(200);

		expect(response.body[0]).toBeDefined();
	});
}));

describe("on list courses by specific name", (() => {
	it("should return created courses with specific name", async () => {
		const response = await request("http://localhost:3000")
			.get(`/courses?name=${specificCourseName}`)
			.expect(200);

		expect(response.body.length).toBe(1);
		expect(response.body[0].id).toBe(validCourseId);
	});
}));

describe("on get course that does not exist", () => {
	it("should return a 404", async () => {
		await request("http://localhost:3000").get(`/courses/${invalidCourseId}`).expect(404);
	});
});

describe("given the course does not exist", () => {
	it("should return a 404", async () => {
		const courseId = "not-an-id";
		await request("http://localhost:3000").get(`/courses/${courseId}`).expect(404);
	});
});

//POST Validation
describe("on create course with valid data", (() => {
	it("should return status 201 and check if it has id", async () => {
		const courseData = {
			name: "Engenharia de Tecidos",
			acronym: "ENG41"
		};

		const response = await request("http://localhost:3000")
			.post("/courses")
			.send(courseData)
			.expect(201);

		expect(response.body).toHaveProperty("id");

		await request("http://localhost:3000").delete(`/courses/${response.body.id}`);
	});
}));

describe("on create course with invalid acronym", (() => {
	it("should return 400", async () => {
		const courseData = {
			name: "Enfermagem",
			acronym: "F"
		};

		await request("http://localhost:3000")
			.post("/courses")
			.send(courseData)
			.expect(400);
	});
}));

describe("on create course with invalid name", (() => {
	it("should return 400", async () => {
		const courseData = {
			name: "Enfe",
			acronym: "FFFFF"
		};

		await request("http://localhost:3000")
			.post("/courses")
			.send(courseData)
			.expect(400);
	});
}));

describe("on create course with name that already exist", (() => {
	it("should return 400", async () => {
		const courseData = {
			name: specificCourseName,
			acronym: "RRR"
		};

		await request("http://localhost:3000")
			.post("/courses")
			.send(courseData)
			.expect(400);
	});
}));

describe("on create course with acronym that already exist", (() => {
	it("should return 400", async () => {
		const courseData = {
			name: "Engenharia de Espuma",
			acronym: "GFRTS"
		};

		await request("http://localhost:3000")
			.post("/courses")
			.send(courseData)
			.expect(400);
	});
}));



//PUT Validations
describe("on update course that exists with valid data", (() => {
	const updatedCourseData = {
		name: "Engenharia de Producao",
		acronym: "PPPPP"
	};

	it("should return status 200", async () => {
		await request("http://localhost:3000")
			.put(`/courses/${validCourseId}`)
			.send(updatedCourseData)
			.expect(200);
	});

	it("should return updated course on get", async () => {
		const response = await request("http://localhost:3000")
			.get(`/courses/${validCourseId}`)
			.expect(200);

		expect(response.body).toHaveProperty("id");
		expect(response.body.name).toBe(updatedCourseData.name);
		expect(response.body.acronym).toBe(updatedCourseData.acronym);
	});
}));

describe("on update course that does not exist", (() => {
	const updatedCourseData = {
		name: "Ed Fisica",
		acronym: "DERTS"
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/courses/${invalidCourseId}`)
			.send(updatedCourseData)
			.expect(400);
	});
}));

describe("on update course that exists with invalid acronym", (() => {
	const invalidCourseData = {
		name: "Ed Fisica",
		acronym: "D"
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/courses/${validCourseId}`)
			.send(invalidCourseData)
			.expect(400);
	});
}));

describe("on update course that exists with invalid name", (() => {
	const invalidCourseData = {
		name: "",
		acronym: "DTRYU"
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/courses/${validCourseId}`)
			.send(invalidCourseData)
			.expect(400);
	});
}));

//DELETE Validations
describe("on delete course that exists", (() => {
	it("should return 204", async () => {
		const courseData = {
			name: "Engenharia de Tecido",
			acronym: "ENG41"
		};

		const response = await request("http://localhost:3000")
			.post("/courses")
			.send(courseData)
			.expect(201);

		await request("http://localhost:3000")
			.delete(`/courses/${response.body.id}`)
			.expect(204);
	});
}));

describe("on delete course that does not exist", (() => {
	it("should return 404", async () => {
		await request("http://localhost:3000")
			.delete(`/courses/${invalidCourseId}`)
			.expect(404);
	});
}));

