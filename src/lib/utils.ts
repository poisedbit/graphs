export function fmt_byte_size(size: number): string {
	const kilobyte: number = 1000;
	const pow: number = Math.floor(Math.log(size) / Math.log(kilobyte));
	const units = ["B", "KB", "MB", "GB"] as const;

	if (pow === 0) {
		return `${size} B`;
	}

	return `${(size / kilobyte ** pow).toFixed()} ${units[pow]}`;
}
