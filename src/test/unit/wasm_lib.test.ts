import { afterAll, beforeEach, describe, expect, test, vi } from "vitest";
import { read_blob } from "$lib/wasm_lib";
import { mock_text_blob } from "../test_utils";

describe("wasm_lib", () => {
	const rows = 5;
	const csv_mock = mock_text_blob("csv", rows);

	describe("read_blob", () => {
		const blob_text_spy = vi.spyOn(Blob.prototype, "text");
		const console_error_spy = vi.spyOn(console, "error");

		beforeEach(() => {
			vi.clearAllMocks();
		});

		afterAll(() => {
			vi.restoreAllMocks();
		});

		describe("text type", () => {
			test("succeeds", async () => {
				await expect(read_blob(csv_mock)).resolves.toBeTypeOf("string");
			});

			test("fails", async () => {
				blob_text_spy.mockRejectedValueOnce(new Error("fail"));
				await expect(read_blob(csv_mock)).resolves.toBeUndefined();
				expect(console_error_spy).toHaveBeenCalledOnce();
			});
		});

		describe.todo("application type", () => {
			test("succeeds", async () => {});
			test("fails", async () => {});
		});
	});

	describe.todo("parse_buf", () => {});
});
