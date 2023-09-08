import { freeze_objs } from "$lib/scripts/utils";
import { writable } from "svelte/store";

// graphing-tool or $gt
const step = writable(0);
const sprdsht_files = writable<File[]>([]);

freeze_objs(step, sprdsht_files);

export { step, sprdsht_files };
