import { describe, expect, test } from "@jest/globals";
import containsDuplicates from "../containsDuplicates";

describe("given an array with duplicated values", () => {
	test("should return true", () => {
		const arr = ["a", "b", "a"];

		expect(containsDuplicates(arr)).toBeTruthy();
	});
});

describe("given an array without duplicated values", () => {
	test("should return false", () => {
		const arr = ["a", "b", "c"];

		expect(containsDuplicates(arr)).toBeFalsy();
	});
});