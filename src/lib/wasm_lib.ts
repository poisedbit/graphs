import * as lib from "./wasm/pkg/wasm";

export async function read_blob(blob: Blob): Promise<string | undefined> {
	try {
		const buf: string = await lib.read_blob(blob);
		return buf;
	} catch (err) {
		console.error("Blob Reader failed", err);
	}

	return undefined;
}
