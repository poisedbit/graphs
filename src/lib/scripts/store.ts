import { freeze_objs } from "$lib/scripts/utils";
import { writable } from "svelte/store";

// graphing-tool or $gt
const sprdsht_files = writable<File[]>([]);

freeze_objs(sprdsht_files);

export { sprdsht_files };
