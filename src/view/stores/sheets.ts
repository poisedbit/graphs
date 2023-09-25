import { writable } from "svelte/store";
import { mime_db } from "$lib/utils";

// graphing-tool
const sheets = writable<File[]>([]);

const sheets_handler = {
	rst() {
		sheets.set([]);
	},
	up(items: FileList) {
		sheets.update(arr =>
			[...arr, ...Array.from(items)].filter(
				(file, index, self) =>
					mime_db.includes(file.type) &&
					index ===
						self.findIndex(
							f =>
								f.name === file.name &&
								f.size === file.size &&
								f.type === file.type &&
								f.lastModified === file.lastModified
						)
			)
		);
	},
	del(index: number) {
		sheets.update(arr => arr.toSpliced(index, 1));
	},
} as const;

export { sheets, sheets_handler };
