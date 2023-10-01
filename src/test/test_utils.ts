import casual from "casual";
import { rand_uint } from "$lib/utils";

export function get_newline(str: string): "\r\n" | "\n" {
	return str.includes("\r\n") ? "\r\n" : "\n";
}

export function mock_text_blob(
	ext: "csv",
	rows: number = 10,
	columns: 1 | 2 | 3 | 4 | 5 = 5
) {
	if (rows <= 0) rows = rand_uint(15);
	const fields = ["name", "email", "pwd", "phone", "company"]
		.slice(0, columns)
		.toString();
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
				]
					.slice(0, columns)
					.toString()
			)
			.join("\n");

	return new Blob([content()], { type: `text/${ext}` });
}
