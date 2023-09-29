import casual from "casual";
import { rand_uint } from "$lib/utils";

export function esc(str: string): "\r\n" | "\n" {
	return str.includes("\r\n") ? "\r\n" : "\n";
}

export function mock_text_blob(ext: "csv", rows: number = -1) {
	rows < 0 && (rows = rand_uint(15));
	const fields = "name,email,pwd,phone,company";
	const content = (): string =>
		fields +
		"\n" +
		Array(rows)
			.fill("")
			.map(() =>
				[
					casual.full_name,
					casual.email,
					casual.password,
					casual.phone,
					casual.company_name,
				].toString()
			)
			.join("\n");

	return new Blob([content()], { type: `text/${ext}` });
}
