import { freeze_objs } from "$lib/scripts/utils";
import { sprdsht_files } from "./store";

// graphing-tool or gt
const sprdsht_files_handler = {
	up(files: FileList) {
		sprdsht_files.update(arr =>
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
};

freeze_objs(sprdsht_files_handler);

export { sprdsht_files_handler };