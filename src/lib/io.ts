import { read_blob } from "./wasm/pkg/wasm";

export async function read(blob: Blob): Promise<string | undefined> {
	try {
		const buf: string = await read_blob(blob);
		return buf;
	} catch (err) {
		console.error("Blob Reader failed", err);
	}

	return undefined;
}
