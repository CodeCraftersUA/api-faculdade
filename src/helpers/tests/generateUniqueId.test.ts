import { describe, expect, test } from "@jest/globals";
import generateUniqueId from "../generateUniqueId";

describe("on call function", () => {
	test("should generate string", () => {
		const randomId = generateUniqueId();
		expect(typeof randomId).toBe(typeof "string");
	});

	test("should always generate different values", () => {
		const randomIdA = generateUniqueId();
		const randomIdB = generateUniqueId();

		expect(randomIdA === randomIdB).toBeFalsy();
	});
});