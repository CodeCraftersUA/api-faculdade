import { describe, expect, test } from "@jest/globals";
import isStringsArray from "../isStringsArray";

describe("helper isStringsArray", () => {
	test("Should return false on not strings array", () => {
		const arr = [1, 2, 3, "4"];

		expect(isStringsArray(arr)).toBeFalsy();
	});

	test("Should return true on strings array", () => {
		const arr = ["1", "2", "3", "4"];

		expect(isStringsArray(arr)).toBeTruthy();
	});
});