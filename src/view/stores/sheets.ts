import { freeze_objs } from "$lib/utils";
import { writable } from "svelte/store";

// graphing-tool or $gt
const sheets = writable<File[]>([]);

const sheets_handler = {
	up(files: FileList) {
		sheets.update(arr =>
			[...arr, ...Array.from(files)].filter(
				(file, index, self) =>
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
};

freeze_objs(sheets, sheets_handler);

export { sheets, sheets_handler };
