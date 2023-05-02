import { student } from ".prisma/client";

describe("Student", () => {
    let name,
        age,
        address;
    
    beforeAll(() => {
        name = 'Batman';
        age = 18,
        address = 'Gothan City';
    })

    beforeEach(() => {
        student = new student();
    })

    test("Deve inserir um nome", () => {
        student.name = 'João';

        expect(student.name).toBe('João');
    });
})