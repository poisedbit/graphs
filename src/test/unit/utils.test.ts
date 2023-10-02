import { afterAll, beforeEach, describe, expect, test, vi } from "vitest";
import { fmt_byte_size, rand_uint } from "$lib/utils";

describe("utils", () => {
	describe("fmt_byte_size", () => {
		test("return formmating for a size lower than a kb", () => {
			expect(fmt_byte_size(256)).toBe("256 B");
		});

		test("return formmating for any size bigger than a kb", () => {
			expect(fmt_byte_size(4096)).toBe("4.10 KB");
			expect(fmt_byte_size(134217728)).toBe("134.22 MB");
			expect(fmt_byte_size(46345634342)).toBe("46.35 GB");
		});
	});

	describe("rand_uint", () => {
		const math_random_spy = vi.spyOn(Math, "random");

		beforeEach(() => {
			math_random_spy
				.mockReturnValueOnce(0)
				.mockReturnValueOnce(0.5)
				.mockReturnValueOnce(0.9999999999);
		});

		afterAll(() => {
			vi.restoreAllMocks();
		});

		test("reassign max when it's equal or less than 0", () => {
			expect(rand_uint(-15)).toBe(0);
			expect(rand_uint(-30)).toBe(128);
			expect(rand_uint(-45)).toBe(255);
		});

		test("reassign min when max is less than min", () => {
			expect(rand_uint(300, 600)).toBe(0);
			expect(rand_uint(300, 600)).toBe(150);
			expect(rand_uint(300, 600)).toBe(300);
		});

		test("reassign min when it is falsy", () => {
			expect(rand_uint(800, -1)).toBe(0);
			expect(rand_uint(800, -1)).toBe(400);
			expect(rand_uint(800, -1)).toBe(800);
		});
	});
});
