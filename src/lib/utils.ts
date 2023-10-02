export const mime_db: ReadonlyArray<string> = ["text/csv"];

export function fmt_byte_size(size: number): string {
	const kilobyte: number = 1000;
	const pow: number = Math.floor(Math.log(size) / Math.log(kilobyte));
	const units = ["B", "KB", "MB", "GB"] as const;

	if (pow === 0) {
		return `${size} B`;
	}

	return `${(size / kilobyte ** pow).toFixed(2)} ${units[pow]}`;
}

export function rand_uint(max: number = 255, min: number = 0) {
	if (max <= 0) max = 255;
	if (max < min || min < 0) min = 0;
	return Math.floor(
		Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
	);
}
