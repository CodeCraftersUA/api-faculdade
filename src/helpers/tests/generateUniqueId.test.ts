import { describe, expect, test } from "@jest/globals";
import generateUniqueId from "../generateUniqueId";

describe("helper generateUniqueId", () => {
	test("Should generate string", () => {
		const randomId = generateUniqueId();
		expect(typeof randomId).toBe(typeof "string");
	});

	test("Should always generate different values", () => {
		const randomIdA = generateUniqueId();
		const randomIdB = generateUniqueId();

		expect(randomIdA === randomIdB).toBeFalsy();
	});
});