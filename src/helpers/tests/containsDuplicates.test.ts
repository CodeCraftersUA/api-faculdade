import { describe, expect, test } from "@jest/globals";
import containsDuplicates from "../containsDuplicates";

describe("helper containsDuplicates", () => {
	test("Array with duplicated values should return true", () => {
		const arr = ["a", "b", "a"];

		expect(containsDuplicates(arr)).toBeTruthy();
	});

	test("Array without duplicated values should return false", () => {
		const arr = ["a", "b", "c"];

		expect(containsDuplicates(arr)).toBeFalsy();
	});
});