import { afterEach, describe, expect, test, vi } from "vitest";
import { read_blob } from "$lib/wasm_lib";
import { esc, mock_text_blob } from "../test_utils";

describe("wasm_lib", () => {
	const console_err_spy = vi.spyOn(console, "error");
	const csv_mock = mock_text_blob("csv", 5);

	describe("blob reader", () => {
		describe("csv", () => {
			afterEach(() => {
				vi.restoreAllMocks();
			});

			test("succeeds", async () => {
				const csv_buf: string | undefined = await read_blob(csv_mock);
				console.log(csv_buf);
				expect(csv_buf).toBeDefined();
				expect(csv_buf).toBeTypeOf("string");
				expect(csv_buf?.split(esc(csv_buf))[0].split(",").length).toBe(
					5
				);
			});

			test("fails", async () => {
				vi.spyOn(Blob.prototype, "text").mockRejectedValueOnce(
					new Error("mock fail")
				);
				const csv_buf: string | undefined = await read_blob(csv_mock);

				console.log(csv_buf);
				expect(csv_buf).toBeUndefined();
				expect(console_err_spy).toHaveBeenCalledOnce;
			});
		});
	});
});
