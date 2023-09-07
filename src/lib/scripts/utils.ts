export function fmt_bytes(bytes: number): string {
	const digits: number = Math.floor(Math.log10(bytes) + 1);

	if (digits <= 3) {
		return `${bytes} B`;
	}

	if (digits <= 6) {
		return `${(bytes / 10 ** 3).toFixed(1)} KB`;
	}

	if (digits <= 9) {
		return `${bytes / 10 ** 6} MB`;
	}

	if (digits > 9) {
		return `${bytes / 10 ** 9} GB`;
	}

	return "";
}
