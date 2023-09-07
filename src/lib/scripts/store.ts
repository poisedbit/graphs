import { writable, type Writable } from "svelte/store";

// graphing-tool
export const step: Writable<number> = writable(1);
export const spreadsheet_files: Writable<File[]> = writable([]);
