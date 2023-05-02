// Dependecies
import { describe } from "@jest/globals";
import request from "supertest";

let validClassroomId: string;
let validCourseId: string;
let validProfessorId: string;
let validStudentId: string;

const invalidClassroomId = "not-an-id";


const validProfessorData = {
	name: "Professor Médico",
	address: "Rua das Palmeiras Nº 13",
	specialty: "Otorrinolaringologista"
};

const validCourseData = {
	name: "Courso de Teste ja9sd89A8SJD1",
	acronym: "WXAIM"
};

const validStudentData = {
	name: "Estudante de Teste",
	age: 21,
	address: "Foz do Iguaçu - PR"
};

let validClassroomData: {
	semester: number,
	year: number,
	courseId: string,
	professors: string[],
	students: string[]
} = {
	semester: 1,
	year: 2023,
	courseId: "",
	professors: [],
	students: []
};


// Create test classroom
beforeAll(async () => {
	const courseResponse = await request("http://localhost:3000").post("/courses").send(validCourseData);
	const professorResponse = await request("http://localhost:3000").post("/professors").send(validProfessorData);
	const studentResponse = await request("http://localhost:3000").post("/students").send(validStudentData);

	validClassroomData = {
		...validClassroomData,
		courseId: courseResponse.body.id,
		professors: [professorResponse.body.id],
		students: [studentResponse.body.id],
	};

	const classroomResponse = await request("http://localhost:3000").post("/classrooms").send(validClassroomData);

	validClassroomId = classroomResponse.body.id;
	validCourseId = courseResponse.body.id;
	validProfessorId = professorResponse.body.id;
	validStudentId = studentResponse.body.id;
});

// Delete test classroom
afterAll(async () => {
	await request("http://localhost:3000").delete(`/classrooms/${validClassroomId}`);
	await request("http://localhost:3000").delete(`/courses/${validCourseId}`);
	await request("http://localhost:3000").delete(`/professors/${validProfessorId}`);
	await request("http://localhost:3000").delete(`/students/${validStudentId}`);
});

// GET Validations
describe("on list classrooms", (() => {
	it("should return status 200", async () => {
		await request("http://localhost:3000")
			.get("/classrooms")
			.expect(200);
	});

	it("should return classrooms list", async () => {
		const response = await request("http://localhost:3000")
			.get("/classrooms")
			.expect(200);

		expect(response.body[0]).toBeDefined();
	});
}));

describe("on list classrooms by year", (() => {
	it("should return all classroom with informed year value", async () => {
		const response = await request("http://localhost:3000")
			.get(`/classrooms?year=${validClassroomData.year}`)
			.expect(200);


		expect(response.body[0]).toBeDefined();

		const years = response.body.map((classroom: { year: number; }) => classroom.year);
		expect(years.every((year: number) => year === validClassroomData.year)).toEqual(true);
	});
}));

describe("on list classrooms by semester", (() => {
	it("should return all classroom with informed year value", async () => {
		const response = await request("http://localhost:3000")
			.get(`/classrooms?semester=${validClassroomData.semester}`)
			.expect(200);


		expect(response.body[0]).toBeDefined();

		const semesters = response.body.map((classroom: { semester: number; }) => classroom.semester);
		expect(semesters.every((semester: number) => semester === validClassroomData.semester)).toEqual(true);
	});
}));

describe("on get classroom that exists", (() => {
	it("should return status 200 and should contain all classroom values", async () => {
		const response = await request("http://localhost:3000")
			.get(`/classrooms/${validClassroomId}`)
			.expect(200);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("semester");
		expect(response.body).toHaveProperty("year");
		expect(response.body).toHaveProperty("course");
		expect(response.body).toHaveProperty("professors");
		expect(response.body).toHaveProperty("students");

		expect(response.body.course).toHaveProperty("id");
		expect(response.body.course).toHaveProperty("name");
		expect(response.body.course).toHaveProperty("acronym");

		expect(response.body.professors[0]).toHaveProperty("id");
		expect(response.body.professors[0]).toHaveProperty("name");

		expect(response.body.students[0]).toHaveProperty("id");
		expect(response.body.students[0]).toHaveProperty("name");
	});
}));

describe("on get classroom that does not exist", () => {
	it("should return a 404", async () => {
		await request("http://localhost:3000").get(`/classrooms/${invalidClassroomId}`).expect(404);
	});
});

// POST Validations
describe("on create classroom with valid data", (() => {
	it("should return 201 and should return classroom id", async () => {
		const classroomData = {
			semester: 1,
			year: 2022,
			courseId: validCourseId,
			professors: [validProfessorId],
			students: [validStudentId]
		};

		const response = await request("http://localhost:3000")
			.post("/classrooms")
			.send(classroomData)
			.expect(201);

		expect(response.body).toHaveProperty("id");

		await request("http://localhost:3000")
			.delete(`/classrooms/${response.body.id}`);
	});
}));

describe("on create classroom with invalid year", (() => {
	it("should return 400", async () => {
		const invalidClassroomData = {
			...validClassroomData,
			year: -20
		};

		await request("http://localhost:3000")
			.post("/classrooms")
			.send(invalidClassroomData)
			.expect(400);
	});
}));

describe("on create classroom with invalid semester", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		semester: -1
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.post("/classrooms")
			.send(invalidclassroomData)
			.expect(400);
	});
}));

describe("on create classroom with invalid professors", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		professors: []
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.post("/classrooms")
			.send(invalidclassroomData)
			.expect(400);
	});
}));

describe("on create classroom with invalid students", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		students: []
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.post("/classrooms")
			.send(invalidclassroomData)
			.expect(400);
	});
}));

describe("on create classroom with invalid courseId", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		courseId: ""
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.post("/classrooms")
			.send(invalidclassroomData)
			.expect(400);
	});
}));

// PUT Validations
describe("on update classroom that exists with valid data", (() => {
	it("should return status 200", async () => {
		await request("http://localhost:3000")
			.put(`/classrooms/${validClassroomId}`)
			.send(validClassroomData)
			.expect(200);
	});

	it("should return updated classroom on get", async () => {
		const response = await request("http://localhost:3000")
			.get(`/classrooms/${validClassroomId}`)
			.expect(200);

		expect(response.body).toHaveProperty("id");
		expect(response.body.id).toBe(validClassroomId);
		expect(response.body.year).toBe(validClassroomData.year);
		expect(response.body.semester).toBe(validClassroomData.semester);
		expect(response.body.course.id).toBe(validClassroomData.courseId);
	});
}));

describe("on update classroom that does not exist", (() => {
	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/classrooms/${invalidClassroomId}`)
			.send(validClassroomData)
			.expect(400);
	});
}));

describe("on update classroom that exists with invalid year", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		year: 0
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/classrooms/${validClassroomId}`)
			.send(invalidclassroomData)
			.expect(400);
	});
}));

describe("on update classroom that exists with invalid semester", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		semester: -1
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/classrooms/${validClassroomId}`)
			.send(invalidclassroomData)
			.expect(400);
	});
}));

describe("on update classroom that exists with invalid professors", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		professors: []
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/classrooms/${validClassroomId}`)
			.send(invalidclassroomData)
			.expect(400);
	});
}));

describe("on update classroom that exists with invalid students", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		students: []
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/classrooms/${validClassroomId}`)
			.send(invalidclassroomData)
			.expect(400);
	});
}));

describe("on update classroom that exists with invalid courseId", (() => {
	const invalidclassroomData = {
		...validClassroomData,
		courseId: ""
	};

	it("should return status 400", async () => {
		await request("http://localhost:3000")
			.put(`/classrooms/${validClassroomId}`)
			.send(invalidclassroomData)
			.expect(400);
	});
}));

// DELETE Validations
describe("on delete classroom that exists", (() => {
	it("should return 204", async () => {
		const response = await request("http://localhost:3000")
			.post("/classrooms")
			.send(validClassroomData)
			.expect(201);

		await request("http://localhost:3000")
			.delete(`/classrooms/${response.body.id}`)
			.expect(204);
	});
}));

describe("on delete course", (() => {
	const courseData = {
		name: "Unique Course Name jiaspodfnljk1n2 312312",
		acronym: "DAIS9"
	};

	it("should delete course classrooms", async () => {
		const courseResponse = await request("http://localhost:3000").post("/courses").send(courseData);

		const classroomData = {
			...validClassroomData,
			courseId: courseResponse.body.id
		};

		const classroomResponse = await request("http://localhost:3000")
			.post("/classrooms")
			.send(classroomData)
			.expect(201);

		await request("http://localhost:3000").delete(`/courses/${courseResponse.body.id}`).expect(204);
		await request("http://localhost:3000").get(`/classrooms/${classroomResponse.body.id}`).expect(404);
	});
}));

describe("on delete unique classroom professor", (() => {
	const professor = {
		name: "Professor Name",
		specialty: "Science",
		address: "Rua das Palmeiras 1921"
	};

	it("should delete classroom", async () => {
		const professorResponse = await request("http://localhost:3000").post("/professors").send(professor).expect(201);
		const classroomData = {
			...validClassroomData,
			professors: [professorResponse.body.id]
		};

		const classroomResponse = await request("http://localhost:3000")
			.post("/classrooms")
			.send(classroomData)
			.expect(201);

		await request("http://localhost:3000").delete(`/professors/${professorResponse.body.id}`).expect(204);
		await request("http://localhost:3000").get(`/classrooms/${classroomResponse.body.id}`).expect(404);
	});
}));

describe("on delete unique classroom student", (() => {
	const student = {
		name: "Student Name",
		age: 14,
		address: "Rua das Palmeiras 1921"
	};

	it("should delete classroom", async () => {
		const studentResponse = await request("http://localhost:3000").post("/students").send(student).expect(201);
		const classroomData = {
			...validClassroomData,
			students: [studentResponse.body.id]
		};

		const classroomResponse = await request("http://localhost:3000")
			.post("/classrooms")
			.send(classroomData)
			.expect(201);

		await request("http://localhost:3000").delete(`/students/${studentResponse.body.id}`).expect(204);
		await request("http://localhost:3000").get(`/classrooms/${classroomResponse.body.id}`).expect(404);
	});
}));

describe("on delete classroom that does not exist", (() => {
	it("should return 404", async () => {
		await request("http://localhost:3000")
			.delete(`/classrooms/${invalidClassroomId}`)
			.expect(404);
	});
}));