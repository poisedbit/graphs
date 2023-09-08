function fmt_bytes(bytes: number): string {
	const digits: number = Math.floor(Math.log10(bytes) + 1);

	if (digits <= 3) {
		return `${bytes} B`;
	}

	if (digits <= 6) {
		return `${(bytes / 10 ** 3).toFixed(2)} KB`;
	}

	if (digits <= 9) {
		return `${(bytes / 10 ** 6).toFixed(2)} MB`;
	}

	if (digits > 9) {
		return `${(bytes / 10 ** 9).toFixed(2)} GB`;
	}

	return "";
}

function freeze_objs(...objs: {}[]) {
	objs.forEach(o => Object.freeze(o));
}

export { fmt_bytes, freeze_objs };
