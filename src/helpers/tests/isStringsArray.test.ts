import { describe, expect, test } from "@jest/globals";
import isStringsArray from "../isStringsArray";

describe("given and array of not only strings", () => {
	test("should return false", () => {
		const arr = [1, 2, 3, "4"];

		expect(isStringsArray(arr)).toBeFalsy();
	});
});

describe("given and array of strings", () => {
	test("should return true", () => {
		const arr = ["1", "2", "3", "4"];

		expect(isStringsArray(arr)).toBeTruthy();
	});
});